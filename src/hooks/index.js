/**
 * Hooks - Barrel Export
 *
 * Centraliza exportações de todos os hooks utilitários
 */

// Hook principal para API
export { default as useApi, useApi } from '@/useApi.js';

// Hooks de debounce
export {
  default as useDebounce,
  useDebounce,
  useDebouncedCallback,
  useAdvancedDebounce
} from '@/useDebounce.js';

// Hooks de localStorage
export {
  default as useLocalStorage,
  useLocalStorage,
  useLocalStorageBoolean,
  useLocalStorageObject,
  useLocalStorageArray
} from '@/useLocalStorage.js';

// Hooks para operações assíncronas
export {
  default as useAsync,
  useAsync,
  useAsyncCallback,
  useAsyncQueue
} from '@/useAsync.js';

// Re-export hooks de features
export {
  useCourses,
  useCourse
} from '@/features/courses/hooks/index.js';

export {
  useProfessors,
  useProfessor
} from '@/features/professors/hooks/index.js';

console.log('🎣 All hooks exported');