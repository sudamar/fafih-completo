/**
 * Error Handler - Sistema Centralizado de Tratamento de Erros FAFIH
 *
 * Funcionalidades:
 * - Classificação de tipos de erro
 * - Mensagens padronizadas em português
 * - Logging centralizado
 * - Retry policies
 * - Fallback strategies
 * - Notificações de erro
 */

/**
 * Tipos de erro suportados
 */
export const ERROR_TYPES = {
  // Erros de rede
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  CONNECTION_ERROR: 'CONNECTION_ERROR',

  // Erros de API
  API_ERROR: 'API_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  SERVER_ERROR: 'SERVER_ERROR',

  // Erros de validação
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_DATA: 'INVALID_DATA',
  MISSING_REQUIRED: 'MISSING_REQUIRED',

  // Erros de aplicação
  SERVICE_ERROR: 'SERVICE_ERROR',
  CACHE_ERROR: 'CACHE_ERROR',
  PARSE_ERROR: 'PARSE_ERROR',

  // Erro genérico
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

/**
 * Severidade dos erros
 */
export const ERROR_SEVERITY = {
  LOW: 'LOW',        // Erro que não impacta funcionalidade
  MEDIUM: 'MEDIUM',  // Erro que impacta parcialmente
  HIGH: 'HIGH',      // Erro que quebra funcionalidade
  CRITICAL: 'CRITICAL' // Erro que quebra a aplicação
};

/**
 * Mensagens de erro padronizadas
 */
const ERROR_MESSAGES = {
  [ERROR_TYPES.NETWORK_ERROR]: {
    user: 'Problema de conexão. Verifique sua internet.',
    technical: 'Network request failed'
  },
  [ERROR_TYPES.TIMEOUT_ERROR]: {
    user: 'A solicitação demorou muito para responder.',
    technical: 'Request timeout exceeded'
  },
  [ERROR_TYPES.CONNECTION_ERROR]: {
    user: 'Não foi possível conectar ao servidor.',
    technical: 'Connection to server failed'
  },
  [ERROR_TYPES.API_ERROR]: {
    user: 'Erro no servidor. Tente novamente em alguns minutos.',
    technical: 'API returned an error'
  },
  [ERROR_TYPES.NOT_FOUND]: {
    user: 'Informação não encontrada.',
    technical: 'Resource not found'
  },
  [ERROR_TYPES.UNAUTHORIZED]: {
    user: 'Acesso não autorizado.',
    technical: 'Authentication required'
  },
  [ERROR_TYPES.FORBIDDEN]: {
    user: 'Você não tem permissão para acessar este recurso.',
    technical: 'Access forbidden'
  },
  [ERROR_TYPES.SERVER_ERROR]: {
    user: 'Erro interno do servidor. Nossa equipe foi notificada.',
    technical: 'Internal server error'
  },
  [ERROR_TYPES.VALIDATION_ERROR]: {
    user: 'Dados inválidos fornecidos.',
    technical: 'Data validation failed'
  },
  [ERROR_TYPES.INVALID_DATA]: {
    user: 'Formato de dados inválido.',
    technical: 'Invalid data format'
  },
  [ERROR_TYPES.MISSING_REQUIRED]: {
    user: 'Campo obrigatório não preenchido.',
    technical: 'Required field missing'
  },
  [ERROR_TYPES.SERVICE_ERROR]: {
    user: 'Erro no serviço. Usando dados locais.',
    technical: 'Service layer error'
  },
  [ERROR_TYPES.CACHE_ERROR]: {
    user: 'Erro no cache. Dados recarregados.',
    technical: 'Cache operation failed'
  },
  [ERROR_TYPES.PARSE_ERROR]: {
    user: 'Erro ao processar dados.',
    technical: 'Data parsing failed'
  },
  [ERROR_TYPES.UNKNOWN_ERROR]: {
    user: 'Erro inesperado. Tente novamente.',
    technical: 'Unknown error occurred'
  }
};

/**
 * Configurações de retry por tipo de erro
 */
const RETRY_CONFIG = {
  [ERROR_TYPES.NETWORK_ERROR]: { attempts: 3, delay: 1000, backoff: 1.5 },
  [ERROR_TYPES.TIMEOUT_ERROR]: { attempts: 2, delay: 2000, backoff: 2.0 },
  [ERROR_TYPES.CONNECTION_ERROR]: { attempts: 3, delay: 1500, backoff: 1.5 },
  [ERROR_TYPES.API_ERROR]: { attempts: 1, delay: 0, backoff: 1.0 },
  [ERROR_TYPES.SERVER_ERROR]: { attempts: 2, delay: 3000, backoff: 2.0 },
  [ERROR_TYPES.SERVICE_ERROR]: { attempts: 1, delay: 0, backoff: 1.0 },
  [ERROR_TYPES.UNKNOWN_ERROR]: { attempts: 1, delay: 1000, backoff: 1.0 }
};

/**
 * Classe principal do Error Handler
 */
class ErrorHandler {
  constructor() {
    this.listeners = [];
    this.errorQueue = [];
    this.isLogging = import.meta.env.DEV || false;
  }

  /**
   * Classifica o tipo de erro baseado na mensagem/código
   */
  classifyError(error) {
    if (!error) return ERROR_TYPES.UNKNOWN_ERROR;

    const message = error.message?.toLowerCase() || '';
    const code = error.code || error.status;

    // Erros de rede
    if (message.includes('network') || message.includes('fetch')) {
      return ERROR_TYPES.NETWORK_ERROR;
    }
    if (message.includes('timeout') || code === 408) {
      return ERROR_TYPES.TIMEOUT_ERROR;
    }
    if (message.includes('connection') || message.includes('connect')) {
      return ERROR_TYPES.CONNECTION_ERROR;
    }

    // Erros HTTP por status code
    if (code === 404) return ERROR_TYPES.NOT_FOUND;
    if (code === 401) return ERROR_TYPES.UNAUTHORIZED;
    if (code === 403) return ERROR_TYPES.FORBIDDEN;
    if (code >= 500) return ERROR_TYPES.SERVER_ERROR;
    if (code >= 400) return ERROR_TYPES.API_ERROR;

    // Erros de validação
    if (message.includes('validation') || message.includes('invalid')) {
      return ERROR_TYPES.VALIDATION_ERROR;
    }
    if (message.includes('required') || message.includes('missing')) {
      return ERROR_TYPES.MISSING_REQUIRED;
    }

    // Erros de parsing
    if (message.includes('json') || message.includes('parse')) {
      return ERROR_TYPES.PARSE_ERROR;
    }

    return ERROR_TYPES.UNKNOWN_ERROR;
  }

  /**
   * Determina a severidade do erro
   */
  getSeverity(errorType, context = {}) {
    const criticalTypes = [ERROR_TYPES.SERVER_ERROR];
    const highTypes = [ERROR_TYPES.API_ERROR, ERROR_TYPES.SERVICE_ERROR];
    const mediumTypes = [ERROR_TYPES.NETWORK_ERROR, ERROR_TYPES.TIMEOUT_ERROR];

    if (criticalTypes.includes(errorType)) return ERROR_SEVERITY.CRITICAL;
    if (highTypes.includes(errorType)) return ERROR_SEVERITY.HIGH;
    if (mediumTypes.includes(errorType)) return ERROR_SEVERITY.MEDIUM;

    return ERROR_SEVERITY.LOW;
  }

  /**
   * Obtém mensagem de erro adequada
   */
  getErrorMessage(errorType, userFriendly = true) {
    const messages = ERROR_MESSAGES[errorType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
    return userFriendly ? messages.user : messages.technical;
  }

  /**
   * Obtém configuração de retry para um tipo de erro
   */
  getRetryConfig(errorType) {
    return RETRY_CONFIG[errorType] || RETRY_CONFIG[ERROR_TYPES.UNKNOWN_ERROR];
  }

  /**
   * Cria objeto de erro padronizado
   */
  createStandardError(originalError, context = {}) {
    const errorType = this.classifyError(originalError);
    const severity = this.getSeverity(errorType, context);
    const timestamp = new Date().toISOString();

    const standardError = {
      // Identificação
      id: Math.random().toString(36).substr(2, 9),
      type: errorType,
      severity,
      timestamp,

      // Mensagens
      message: this.getErrorMessage(errorType, true),
      technicalMessage: this.getErrorMessage(errorType, false),
      originalMessage: originalError?.message || 'Unknown error',

      // Contexto
      context: {
        service: context.service || 'unknown',
        operation: context.operation || 'unknown',
        data: context.data || null,
        ...context
      },

      // Dados originais
      original: {
        error: originalError,
        stack: originalError?.stack,
        code: originalError?.code || originalError?.status,
        name: originalError?.name
      },

      // Configuração de retry
      retryConfig: this.getRetryConfig(errorType),

      // Flags
      canRetry: Boolean(this.getRetryConfig(errorType).attempts > 1),
      shouldFallback: [
        ERROR_TYPES.NETWORK_ERROR,
        ERROR_TYPES.API_ERROR,
        ERROR_TYPES.SERVICE_ERROR
      ].includes(errorType)
    };

    return standardError;
  }

  /**
   * Loga erro no console e sistemas externos
   */
  logError(error, context = {}) {
    if (!this.isLogging) return;

    const standardError = typeof error === 'object' && error.type
      ? error
      : this.createStandardError(error, context);

    // Console logging com formatação
    const logLevel = standardError.severity === ERROR_SEVERITY.CRITICAL ? 'error' :
                    standardError.severity === ERROR_SEVERITY.HIGH ? 'error' :
                    standardError.severity === ERROR_SEVERITY.MEDIUM ? 'warn' : 'info';

    console.group(`🚨 Error [${standardError.type}]`);
    console[logLevel]('Message:', standardError.message);
    console[logLevel]('Technical:', standardError.technicalMessage);
    console[logLevel]('Context:', standardError.context);
    console[logLevel]('Original:', standardError.original.error);
    if (standardError.original.stack) {
      console[logLevel]('Stack:', standardError.original.stack);
    }
    console.groupEnd();

    // Adiciona à queue para processamento
    this.errorQueue.push(standardError);

    // Notifica listeners
    this.notifyListeners(standardError);

    // Em produção, enviaria para serviço de logging
    // this.sendToLoggingService(standardError);

    return standardError;
  }

  /**
   * Adiciona listener para erros
   */
  addListener(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
  }

  /**
   * Remove listener
   */
  removeListener(callback) {
    const index = this.listeners.indexOf(callback);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * Notifica todos os listeners
   */
  notifyListeners(error) {
    this.listeners.forEach(listener => {
      try {
        listener(error);
      } catch (err) {
        console.error('Error in error listener:', err);
      }
    });
  }

  /**
   * Obtém estatísticas de erros
   */
  getErrorStats() {
    const recentErrors = this.errorQueue.filter(error => {
      const errorTime = new Date(error.timestamp);
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      return errorTime > oneHourAgo;
    });

    const errorsByType = recentErrors.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {});

    const errorsBySeverity = recentErrors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {});

    return {
      totalErrors: recentErrors.length,
      errorsByType,
      errorsBySeverity,
      recentErrors: recentErrors.slice(-10) // Últimos 10 erros
    };
  }

  /**
   * Limpa queue de erros
   */
  clearErrorQueue() {
    const count = this.errorQueue.length;
    this.errorQueue = [];
    console.log(`🗑️ Cleared ${count} errors from queue`);
    return count;
  }

  /**
   * Habilita/desabilita logging
   */
  setLogging(enabled) {
    this.isLogging = enabled;
    console.log(`📝 Error logging ${enabled ? 'enabled' : 'disabled'}`);
  }
}

// Instância singleton
const errorHandler = new ErrorHandler();

/**
 * Função helper para tratamento simples de erros
 */
export const handleError = (error, context = {}) => {
  return errorHandler.logError(error, context);
};

/**
 * Função helper para criar erros padronizados
 */
export const createError = (message, type = ERROR_TYPES.UNKNOWN_ERROR, context = {}) => {
  const error = new Error(message);
  error.type = type;
  return errorHandler.createStandardError(error, context);
};

/**
 * Decorator para try/catch automático em funções async
 */
export const withErrorHandling = (asyncFn, context = {}) => {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      const handledError = handleError(error, context);
      throw handledError;
    }
  };
};

// Exporta instância e classe
export default errorHandler;
export { ErrorHandler };

// Configuração inicial
if (import.meta.env.DEV) {
  console.log('🚨 Error Handler initialized:', {
    logging: errorHandler.isLogging,
    errorTypes: Object.keys(ERROR_TYPES).length,
    retryConfigs: Object.keys(RETRY_CONFIG).length
  });
}