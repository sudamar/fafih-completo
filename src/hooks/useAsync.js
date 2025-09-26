/**
 * useAsync Hook - Gerenciamento de Operações Assíncronas
 *
 * Funcionalidades:
 * - Estados automáticos para operações async (loading, error, data)
 * - Cancelamento automático na desmontagem
 * - Retry manual e automático
 * - Callback de sucesso e erro
 * - Debounce opcional
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import errorHandler from '../services/errorHandler.js';

/**
 * Hook para gerenciamento de operações assíncronas
 * @param {Function} asyncFunction - Função assíncrona para executar
 * @param {Array} dependencies - Dependências para re-execução
 * @param {Object} options - Opções de configuração
 * @returns {Object} Estado e controles da operação
 */
export const useAsync = (asyncFunction, dependencies = [], options = {}) => {
  const {
    immediate = true,
    onSuccess,
    onError,
    initialData = null,
    retryCount = 0,
    retryDelay = 1000,
    debounceMs = 0
  } = options;

  // Estados
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastExecuted, setLastExecuted] = useState(null);

  // Refs
  const mountedRef = useRef(true);
  const attemptRef = useRef(0);
  const debounceRef = useRef(null);

  /**
   * Função principal de execução
   */
  const execute = useCallback(async (...args) => {
    // Limpa debounce anterior se existir
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Aplica debounce se configurado
    if (debounceMs > 0) {
      return new Promise((resolve) => {
        debounceRef.current = setTimeout(() => {
          executeImmediate(...args).then(resolve);
        }, debounceMs);
      });
    }

    return executeImmediate(...args);
  }, [debounceMs]);

  /**
   * Execução imediata (sem debounce)
   */
  const executeImmediate = useCallback(async (...args) => {
    if (!asyncFunction) {
      console.warn('useAsync: No async function provided');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      attemptRef.current = 0;

      const result = await asyncFunction(...args);

      if (mountedRef.current) {
        setData(result);
        setLastExecuted(new Date().toISOString());

        if (onSuccess) {
          onSuccess(result);
        }
      }

      return result;

    } catch (err) {
      if (mountedRef.current) {
        const handledError = errorHandler.createStandardError(err, {
          service: 'useAsync',
          operation: 'execute',
          attempt: attemptRef.current + 1
        });

        setError(handledError);

        if (onError) {
          onError(handledError);
        }

        // Retry automático se configurado
        if (attemptRef.current < retryCount) {
          attemptRef.current++;

          setTimeout(() => {
            if (mountedRef.current) {
              executeImmediate(...args);
            }
          }, retryDelay * attemptRef.current);
        }
      }

      throw err;

    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  }, [asyncFunction, onSuccess, onError, retryCount, retryDelay]);

  /**
   * Reset do estado
   */
  const reset = useCallback(() => {
    setData(initialData);
    setError(null);
    setLoading(false);
    attemptRef.current = 0;
  }, [initialData]);

  /**
   * Retry manual
   */
  const retry = useCallback((...args) => {
    attemptRef.current = 0;
    return execute(...args);
  }, [execute]);

  // Effect para execução automática
  useEffect(() => {
    if (immediate && asyncFunction) {
      execute();
    }

    return () => {
      // Cleanup
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, dependencies);

  // Cleanup na desmontagem
  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  // Estados derivados
  const isIdle = !loading && !error && data === initialData;
  const isSuccess = !loading && !error && data !== initialData;
  const isError = !loading && error !== null;
  const canRetry = error && attemptRef.current < retryCount;

  return {
    // Estados principais
    data,
    loading,
    error,

    // Estados derivados
    isIdle,
    isSuccess,
    isError,
    canRetry,

    // Metadados
    lastExecuted,
    attempt: attemptRef.current,

    // Controles
    execute,
    retry,
    reset
  };
};

/**
 * Hook simplificado para promises
 */
export const useAsyncCallback = (callback, dependencies = []) => {
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      return await callback(...args);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  return { execute, loading };
};

/**
 * Hook para múltiplas operações assíncronas
 */
export const useAsyncQueue = (operations = []) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const execute = useCallback(async () => {
    if (!operations.length) return;

    try {
      setLoading(true);
      setResults([]);
      setErrors([]);
      setCurrentIndex(0);

      const newResults = [];
      const newErrors = [];

      for (let i = 0; i < operations.length; i++) {
        setCurrentIndex(i);

        try {
          const result = await operations[i]();
          newResults[i] = result;
        } catch (error) {
          newErrors[i] = error;
        }
      }

      setResults(newResults);
      setErrors(newErrors);

    } finally {
      setLoading(false);
      setCurrentIndex(-1);
    }
  }, [operations]);

  const progress = operations.length > 0 ? (currentIndex + 1) / operations.length : 0;
  const isCompleted = currentIndex === -1 && results.length > 0;
  const hasErrors = errors.some(error => error);

  return {
    results,
    errors,
    loading,
    progress,
    currentIndex,
    isCompleted,
    hasErrors,
    execute
  };
};

export default useAsync;