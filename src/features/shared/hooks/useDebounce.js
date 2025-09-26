/**
 * useDebounce Hook - Atraso na execução de valores ou funções
 *
 * Funcionalidades:
 * - Debounce de valores com delay configurável
 * - Debounce de funções/callbacks
 * - Controle de pending state
 * - Cancelamento manual
 * - Cleanup automático
 */

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook para debounce de valores
 * @param {*} value - Valor a ser "debounced"
 * @param {number} delay - Delay em millisegundos
 * @returns {*} Valor com debounce aplicado
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook para debounce de funções com controle de estado
 * @param {Function} callback - Função a ser executada
 * @param {number} delay - Delay em millisegundos
 * @param {Array} deps - Dependências da função (opcional)
 * @returns {Object} Função debounced e estados de controle
 */
export const useDebouncedCallback = (callback, delay, deps = []) => {
  const [isPending, setIsPending] = useState(false);
  const timeoutRef = useRef(null);

  // Cancela timeout pendente
  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setIsPending(false);
    }
  }, []);

  // Função debounced
  const debouncedCallback = useCallback(
    (...args) => {
      cancel(); // Cancela chamada anterior
      setIsPending(true);

      timeoutRef.current = setTimeout(() => {
        setIsPending(false);
        timeoutRef.current = null;
        callback(...args);
      }, delay);
    },
    [callback, delay, cancel, ...deps]
  );

  // Executa imediatamente (bypass do debounce)
  const flush = useCallback(
    (...args) => {
      cancel();
      callback(...args);
    },
    [callback, cancel]
  );

  // Cleanup no unmount
  useEffect(() => {
    return cancel;
  }, [cancel]);

  return {
    debouncedCallback,
    isPending,
    cancel,
    flush
  };
};

/**
 * Hook para debounce de buscas/pesquisas
 * @param {string} searchTerm - Termo de busca
 * @param {number} delay - Delay em millisegundos
 * @returns {Object} Estados e controles de busca
 */
export const useDebouncedSearch = (searchTerm, delay = 300) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Marca como "buscando" quando o termo muda
    if (searchTerm !== debouncedSearchTerm) {
      setIsSearching(true);
    }

    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsSearching(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, delay, debouncedSearchTerm]);

  // Estados computados
  const hasSearchTerm = Boolean(searchTerm && searchTerm.trim());
  const hasDebouncedSearchTerm = Boolean(debouncedSearchTerm && debouncedSearchTerm.trim());
  const shouldSearch = hasDebouncedSearchTerm && !isSearching;

  return {
    searchTerm,
    debouncedSearchTerm,
    isSearching,
    hasSearchTerm,
    hasDebouncedSearchTerm,
    shouldSearch
  };
};

/**
 * Hook para throttle (similar ao debounce, mas executa no início)
 * @param {Function} callback - Função a ser executada
 * @param {number} delay - Delay em millisegundos
 * @param {Array} deps - Dependências da função
 * @returns {Function} Função com throttle aplicado
 */
export const useThrottle = (callback, delay, deps = []) => {
  const lastRun = useRef(Date.now());

  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      }
    },
    [callback, delay, ...deps]
  );

  return throttledCallback;
};

/**
 * Hook combinado para debounce + loading state
 * @param {*} value - Valor a ser debounced
 * @param {number} delay - Delay em millisegundos
 * @returns {Object} Valor debounced e estados
 */
export const useDebounceWithLoading = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);

    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return {
    value: debouncedValue,
    isDebouncing,
    originalValue: value,
    hasChanged: value !== debouncedValue
  };
};

export default useDebounce;