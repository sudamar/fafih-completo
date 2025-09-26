/**
 * API Client - Cliente HTTP Centralizado FAFIH
 *
 * Funcionalidades:
 * - Cliente HTTP baseado em fetch
 * - Fallback automático para dados JSON locais
 * - Interceptors para request/response
 * - Retry automático em caso de falha
 * - Tratamento de erros padronizado
 * - Headers configuráveis
 */

// Configuração base
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 segundo
  USE_MOCK_DATA: import.meta.env.VITE_USE_MOCK_DATA === 'true' || true // Default true para desenvolvimento
};

/**
 * Utilitário para delay
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Classe principal do API Client
 */
class APIClient {
  constructor(config = {}) {
    this.config = { ...API_CONFIG, ...config };
    this.interceptors = {
      request: [],
      response: []
    };

    // Headers padrão
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  /**
   * Adiciona interceptor de request
   */
  addRequestInterceptor(interceptor) {
    this.interceptors.request.push(interceptor);
  }

  /**
   * Adiciona interceptor de response
   */
  addResponseInterceptor(interceptor) {
    this.interceptors.response.push(interceptor);
  }

  /**
   * Aplica interceptors de request
   */
  async applyRequestInterceptors(config) {
    let finalConfig = { ...config };

    for (const interceptor of this.interceptors.request) {
      finalConfig = await interceptor(finalConfig);
    }

    return finalConfig;
  }

  /**
   * Aplica interceptors de response
   */
  async applyResponseInterceptors(response) {
    let finalResponse = response;

    for (const interceptor of this.interceptors.response) {
      finalResponse = await interceptor(finalResponse);
    }

    return finalResponse;
  }

  /**
   * Constrói URL completa
   */
  buildUrl(endpoint) {
    if (endpoint.startsWith('http')) {
      return endpoint;
    }

    const baseUrl = this.config.BASE_URL.replace(/\/$/, '');
    const cleanEndpoint = endpoint.replace(/^\//, '');

    return `${baseUrl}/${cleanEndpoint}`;
  }

  /**
   * Cria AbortController com timeout
   */
  createAbortController() {
    const controller = new AbortController();

    setTimeout(() => {
      controller.abort();
    }, this.config.TIMEOUT);

    return controller;
  }

  /**
   * Método HTTP genérico
   */
  async request(method, endpoint, options = {}) {
    const controller = this.createAbortController();

    // Configuração inicial da request
    let requestConfig = {
      method: method.toUpperCase(),
      headers: { ...this.defaultHeaders, ...options.headers },
      signal: controller.signal,
      ...options
    };

    // Aplica interceptors de request
    requestConfig = await this.applyRequestInterceptors(requestConfig);

    // URL completa
    const url = this.buildUrl(endpoint);

    // Retry logic
    let lastError;

    for (let attempt = 1; attempt <= this.config.RETRY_ATTEMPTS; attempt++) {
      try {
        console.log(`🌐 API Request [Attempt ${attempt}]: ${method.toUpperCase()} ${endpoint}`);

        // Faz a request
        const response = await fetch(url, requestConfig);

        // Aplica interceptors de response
        const finalResponse = await this.applyResponseInterceptors(response);

        // Verifica se a response é ok
        if (!finalResponse.ok) {
          throw new Error(`HTTP ${finalResponse.status}: ${finalResponse.statusText}`);
        }

        // Parse do JSON
        const data = await finalResponse.json();

        console.log(`✅ API Success: ${endpoint}`, data);

        return {
          data,
          status: finalResponse.status,
          headers: finalResponse.headers,
          success: true
        };

      } catch (error) {
        lastError = error;

        console.warn(`⚠️ API Error [Attempt ${attempt}]: ${endpoint}`, error.message);

        // Se é o último attempt, não tenta novamente
        if (attempt === this.config.RETRY_ATTEMPTS) {
          break;
        }

        // Delay antes do próximo attempt
        await delay(this.config.RETRY_DELAY * attempt);
      }
    }

    // Se chegou aqui, todas as tentativas falharam
    console.error(`❌ API Failed: ${endpoint} after ${this.config.RETRY_ATTEMPTS} attempts`);

    return {
      data: null,
      status: null,
      headers: null,
      success: false,
      error: lastError.message
    };
  }

  /**
   * GET Request
   */
  async get(endpoint, params = {}, options = {}) {
    // Constrói query string se há parâmetros
    let url = endpoint;
    if (Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    return this.request('GET', url, options);
  }

  /**
   * POST Request
   */
  async post(endpoint, data = {}, options = {}) {
    return this.request('POST', endpoint, {
      ...options,
      body: JSON.stringify(data)
    });
  }

  /**
   * PUT Request
   */
  async put(endpoint, data = {}, options = {}) {
    return this.request('PUT', endpoint, {
      ...options,
      body: JSON.stringify(data)
    });
  }

  /**
   * DELETE Request
   */
  async delete(endpoint, options = {}) {
    return this.request('DELETE', endpoint, options);
  }

  /**
   * PATCH Request
   */
  async patch(endpoint, data = {}, options = {}) {
    return this.request('PATCH', endpoint, {
      ...options,
      body: JSON.stringify(data)
    });
  }
}

// Instância singleton do API Client
const apiClient = new APIClient();

// Interceptors padrão
apiClient.addRequestInterceptor(async (config) => {
  // Log da request
  console.log('📤 Request:', {
    method: config.method,
    url: config.url,
    headers: config.headers
  });

  return config;
});

apiClient.addResponseInterceptor(async (response) => {
  // Log da response
  console.log('📥 Response:', {
    status: response.status,
    statusText: response.statusText,
    url: response.url
  });

  return response;
});

/**
 * Função helper para requests com fallback automático para dados locais
 * Esta é a função principal que outros services devem usar
 */
export const apiRequest = async (endpoint, options = {}) => {
  const { fallbackData, ...requestOptions } = options;

  // Se está configurado para usar dados mock, retorna direto
  if (apiClient.config.USE_MOCK_DATA && fallbackData) {
    console.log(`🎭 Using Mock Data for: ${endpoint}`);

    // Simula delay da API para realismo
    await delay(Math.random() * 500 + 100);

    return {
      data: fallbackData,
      status: 200,
      success: true,
      source: 'mock'
    };
  }

  // Tenta fazer request real
  const result = await apiClient.get(endpoint, {}, requestOptions);

  // Se falhou e tem fallback, usa os dados locais
  if (!result.success && fallbackData) {
    console.log(`🔄 Fallback to Mock Data for: ${endpoint}`);

    return {
      data: fallbackData,
      status: 200,
      success: true,
      source: 'fallback'
    };
  }

  return result;
};

// Exporta instância e classe para diferentes usos
export default apiClient;
export { APIClient };

/**
 * Utilitários para configuração
 */
export const configureAPI = (newConfig) => {
  Object.assign(apiClient.config, newConfig);
};

export const getAPIConfig = () => ({ ...apiClient.config });

/**
 * Status da API
 */
export const getAPIStatus = () => ({
  baseUrl: apiClient.config.BASE_URL,
  useMockData: apiClient.config.USE_MOCK_DATA,
  timeout: apiClient.config.TIMEOUT,
  retryAttempts: apiClient.config.RETRY_ATTEMPTS
});

console.log('🚀 API Client initialized:', getAPIStatus());