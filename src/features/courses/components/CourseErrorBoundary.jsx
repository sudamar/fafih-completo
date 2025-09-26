/**
 * Course Error Boundary - Error Boundary Específico para Cursos
 *
 * Funcionalidades:
 * - Error boundary customizado para área de cursos
 * - Fallback específico para contexto de cursos
 * - Integração com course service
 * - Opções de recuperação específicas
 */

import ErrorBoundary from '../../../components/shared/ErrorBoundary.jsx';
import courseService from '../services/courseService.js';

const CourseErrorBoundary = ({ children, fallback, onError, ...props }) => {
  const handleCourseError = (error, errorInfo) => {
    // Log específico para erros de curso
    console.error('🚨 Course Error:', {
      error,
      errorInfo,
      cacheInfo: courseService.getCacheInfo(),
      timestamp: new Date().toISOString()
    });

    // Limpa cache em caso de erro
    if (error.message?.includes('cache') || error.message?.includes('data')) {
      courseService.clearCache();
      console.log('🗑️ Course cache cleared due to error');
    }

    // Callback personalizado
    if (onError) {
      onError(error, errorInfo);
    }
  };

  const courseFallback = (error, retry) => {
    if (fallback) {
      return typeof fallback === 'function' ? fallback(error, retry) : fallback;
    }

    return (
      <div className="course-error-fallback">
        <div className="course-error-content">
          <div className="course-error-icon">📚</div>

          <h3>Erro ao Carregar Cursos</h3>

          <p>
            Não foi possível carregar as informações dos cursos.
            Isso pode ser um problema temporário.
          </p>

          <div className="course-error-actions">
            <button
              className="course-error-retry"
              onClick={() => {
                courseService.clearCache();
                retry();
              }}
            >
              Recarregar Cursos
            </button>
          </div>

          <p className="course-error-help">
            Se o problema persistir, você pode{' '}
            <a href="/contato" className="course-error-link">
              entrar em contato conosco
            </a>.
          </p>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary
      name="Área de Cursos"
      fallback={courseFallback}
      onError={handleCourseError}
      {...props}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CourseErrorBoundary;