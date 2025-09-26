/**
 * Shared Hooks - Barrel Export
 *
 * Hooks utilitários reutilizáveis em toda a aplicação
 */

// API e requisições
export { useApi } from './useApi.js';

// Persistência local
export {
  useLocalStorage,
  useLocalStorageBoolean,
  useLocalStorageNumber,
  useLocalStorageArray
} from './useLocalStorage.js';

// Performance e timing
export {
  useDebounce,
  useDebouncedCallback,
  useDebouncedSearch,
  useThrottle,
  useDebounceWithLoading
} from './useDebounce.js';

// Re-export padrão para conveniência
export { useApi as default } from './useApi.js';