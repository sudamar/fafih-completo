/**
 * Shared Components - Barrel Export
 *
 * Componentes compartilhados entre features
 */

// Error Handling
export {
  default as ErrorBoundary,
  RouteErrorBoundary,
  DataErrorBoundary,
  withErrorBoundary,
  useErrorHandler
} from './ErrorBoundary.jsx';