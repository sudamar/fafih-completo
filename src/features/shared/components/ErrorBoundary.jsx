/**
 * ErrorBoundary - Componente para captura de erros React
 *
 * Funcionalidades:
 * - Captura erros em componentes filhos
 * - Interface amigável para erros
 * - Logging de erros para debug
 * - Fallback customizável
 * - Reset automático ou manual
 */

import React from 'react';
import './ErrorBoundary.module.css';

/**
 * Error Boundary principal da aplicação
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error) {
    // Atualiza estado para mostrar UI de erro
    return {
      hasError: true,
      errorId: Date.now().toString(36)
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log do erro
    console.error('🚨 ErrorBoundary caught error:', {
      error,
      errorInfo,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    // Salva detalhes do erro no estado
    this.setState({
      error,
      errorInfo
    });

    // Callback customizado se fornecido
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Reportar erro para serviço externo se configurado
    if (this.props.errorReportingService) {
      this.props.errorReportingService.reportError(error, {
        componentStack: errorInfo.componentStack,
        errorBoundary: this.constructor.name,
        props: this.props,
        timestamp: Date.now()
      });
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });

    // Callback de retry se fornecido
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      // Fallback customizado se fornecido
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.state.errorInfo, this.handleRetry);
      }

      // UI padrão de erro
      return (
        <div className="error-boundary">
          <div className="error-boundary__container">
            <div className="error-boundary__icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h2 className="error-boundary__title">
              {this.props.title || 'Algo deu errado'}
            </h2>

            <p className="error-boundary__description">
              {this.props.description ||
               'Ocorreu um erro inesperado. Nossa equipe foi notificada e trabalhará para corrigi-lo.'}
            </p>

            {this.props.showDetails && this.state.error && (
              <details className="error-boundary__details">
                <summary>Detalhes técnicos</summary>
                <div className="error-boundary__error-info">
                  <strong>Erro:</strong>
                  <pre>{this.state.error.toString()}</pre>

                  <strong>Stack trace:</strong>
                  <pre>{this.state.error.stack}</pre>

                  <strong>Component Stack:</strong>
                  <pre>{this.state.errorInfo?.componentStack}</pre>

                  <strong>Error ID:</strong>
                  <code>{this.state.errorId}</code>
                </div>
              </details>
            )}

            <div className="error-boundary__actions">
              <button
                className="error-boundary__button error-boundary__button--primary"
                onClick={this.handleRetry}
              >
                Tentar Novamente
              </button>

              <button
                className="error-boundary__button error-boundary__button--secondary"
                onClick={() => window.location.reload()}
              >
                Recarregar Página
              </button>

              {this.props.showGoHome && (
                <button
                  className="error-boundary__button error-boundary__button--secondary"
                  onClick={() => window.location.href = '/'}
                >
                  Ir para Home
                </button>
              )}
            </div>

            {this.props.contactInfo && (
              <p className="error-boundary__contact">
                Se o problema persistir, entre em contato: {this.props.contactInfo}
              </p>
            )}
          </div>
        </div>
      );
    }

    // Renderiza filhos normalmente se não houver erro
    return this.props.children;
  }
}

/**
 * Hook para usar Error Boundary programaticamente
 */
export const useErrorHandler = () => {
  const [error, setError] = React.useState(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error) => {
    console.error('🚨 Manual error capture:', error);
    setError(error);
  }, []);

  // Throw error para ser capturado pelo ErrorBoundary
  if (error) {
    throw error;
  }

  return { captureError, resetError };
};

/**
 * HOC para adicionar Error Boundary a componentes
 */
export const withErrorBoundary = (Component, errorBoundaryProps = {}) => {
  const WrappedComponent = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

/**
 * Error Boundary específico para rotas
 */
export const RouteErrorBoundary = ({ children }) => (
  <ErrorBoundary
    title="Página não encontrada ou com erro"
    description="Esta página pode estar temporariamente indisponível ou não existir."
    showGoHome={true}
    contactInfo="contato@fafih.edu.br"
  >
    {children}
  </ErrorBoundary>
);

/**
 * Error Boundary específico para componentes de dados
 */
export const DataErrorBoundary = ({ children, onRetry }) => (
  <ErrorBoundary
    title="Erro ao carregar dados"
    description="Não foi possível carregar as informações. Verifique sua conexão e tente novamente."
    showDetails={false}
    onRetry={onRetry}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundary;