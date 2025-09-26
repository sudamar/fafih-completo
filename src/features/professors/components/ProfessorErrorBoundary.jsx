/**
 * Professor Error Boundary - Error Boundary Específico para Professores
 *
 * Funcionalidades:
 * - Error boundary customizado para área de professores
 * - Fallback específico para contexto de professores
 * - Integração com professor service
 * - Opções de recuperação específicas
 */

import ErrorBoundary from '../../../components/shared/ErrorBoundary.jsx';
import professorService from '../services/professorService.js';

const ProfessorErrorBoundary = ({ children, fallback, onError, ...props }) => {
  const handleProfessorError = (error, errorInfo) => {
    // Log específico para erros de professor
    console.error('🚨 Professor Error:', {
      error,
      errorInfo,
      cacheInfo: professorService.getCacheInfo(),
      timestamp: new Date().toISOString()
    });

    // Limpa cache em caso de erro
    if (error.message?.includes('cache') || error.message?.includes('data')) {
      professorService.clearCache();
      console.log('🗑️ Professor cache cleared due to error');
    }

    // Callback personalizado
    if (onError) {
      onError(error, errorInfo);
    }
  };

  const professorFallback = (error, retry) => {
    if (fallback) {
      return typeof fallback === 'function' ? fallback(error, retry) : fallback;
    }

    return (
      <div className="professor-error-fallback">
        <div className="professor-error-content">
          <div className="professor-error-icon">👨‍🏫</div>

          <h3>Erro ao Carregar Informações dos Professores</h3>

          <p>
            Não foi possível carregar as informações do corpo docente.
            Isso pode ser um problema temporário.
          </p>

          <div className="professor-error-actions">
            <button
              className="professor-error-retry"
              onClick={() => {
                professorService.clearCache();
                retry();
              }}
            >
              Recarregar Professores
            </button>
          </div>

          <p className="professor-error-help">
            Se o problema persistir, você pode{' '}
            <a href="/contato" className="professor-error-link">
              entrar em contato conosco
            </a>{' '}
            ou visitar nossa{' '}
            <a href="/corpo-docente" className="professor-error-link">
              página do corpo docente
            </a>.
          </p>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary
      name="Corpo Docente"
      fallback={professorFallback}
      onError={handleProfessorError}
      {...props}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ProfessorErrorBoundary;