/**
 * Error Boundary - Componente para Captura de Erros de React
 *
 * Funcionalidades:
 * - Captura erros de JavaScript em qualquer lugar da árvore de componentes
 * - Exibe UI de fallback personalizada
 * - Integra com sistema de error handling
 * - Oferece opção de retry
 */

import { Component } from 'react';
import errorHandler from '../../services/errorHandler.js';
import './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorId: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para mostrar a UI de fallback
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log do erro com contexto
    const handledError = errorHandler.logError(error, {
      service: 'ErrorBoundary',
      operation: 'componentDidCatch',
      component: this.props.name || 'Unknown',
      errorInfo,
      props: this.props,
      retryCount: this.state.retryCount
    });

    this.setState({
      errorId: handledError.id
    });

    // Callback personalizado se fornecido
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorId: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error, retryCount } = this.state;
    const {
      fallback,
      showRetry = true,
      showReload = true,
      maxRetries = 3,
      children,
      name = 'Componente'
    } = this.props;

    if (hasError) {
      // Fallback personalizado
      if (fallback) {
        return typeof fallback === 'function'
          ? fallback(error, this.handleRetry)
          : fallback;
      }

      // UI padrão de erro
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <div className="error-boundary-icon">⚠️</div>

            <h2 className="error-boundary-title">
              Ops! Algo deu errado
            </h2>

            <p className="error-boundary-message">
              Ocorreu um erro inesperado no {name.toLowerCase()}.
              Nossa equipe foi notificada.
            </p>

            {import.meta.env.DEV && (
              <details className="error-boundary-details">
                <summary>Detalhes técnicos</summary>
                <pre className="error-boundary-stack">
                  {error?.message}
                  {'\n\n'}
                  {error?.stack}
                </pre>
              </details>
            )}

            <div className="error-boundary-actions">
              {showRetry && retryCount < maxRetries && (
                <button
                  className="error-boundary-button error-boundary-button-retry"
                  onClick={this.handleRetry}
                >
                  Tentar Novamente ({maxRetries - retryCount} tentativas restantes)
                </button>
              )}

              {showReload && (
                <button
                  className="error-boundary-button error-boundary-button-reload"
                  onClick={this.handleReload}
                >
                  Recarregar Página
                </button>
              )}
            </div>

            <p className="error-boundary-help">
              Se o problema persistir, entre em contato conosco.
            </p>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;