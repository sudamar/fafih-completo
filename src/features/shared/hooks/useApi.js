/**
 * useApi Hook - Wrapper genérico para chamadas de API
 *
 * Funcionalidades:
 * - Estados padronizados de loading/error/data
 * - Retry automático com backoff
 * - Cache inteligente
 * - Debounce para buscas
 * - Cleanup automático
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { apiRequest } from '@/services/apiClient.js';

/**
 * Hook genérico para chamadas de API
 * @param {string|Function} endpoint - URL do endpoint ou função que retorna a URL
 * @param {Object} options - Opções de configuração
 * @returns {Object} Estado e funções da API
 */
export const useApi = (endpoint, options = {}) => {
  const {
    autoFetch = false,
    fallbackData = null,
    dependencies = [],
    retryAttempts = 3,
    retryDelay = 1000,
    cacheTime = 5 * 60 * 1000, // 5 minutos
    debounceMs = 0,
    transformData = null,
    onSuccess = null,
    onError = null
  } = options;

  // Estados principais
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetch, setLastFetch] = useState(null);

  // Refs para cleanup e controle
  const abortControllerRef = useRef(null);
  const retryTimeoutRef = useRef(null);
  const debounceTimeoutRef = useRef(null);

  /**
   * Limpa timers e controllers
   */
  const cleanup = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }
  }, []);

  /**
   * Função principal de fetch
   */
  const fetchData = useCallback(async (overrideEndpoint = null, overrideOptions = {}) => {
    return new Promise((resolve, reject) => {
      // Cleanup anterior
      cleanup();

      const executeFetch = async () => {
        try {
          setLoading(true);
          setError(null);

          // Resolve endpoint se for função
          const finalEndpoint = overrideEndpoint || (typeof endpoint === 'function' ? endpoint() : endpoint);

          if (!finalEndpoint) {
            throw new Error('Endpoint não fornecido');
          }

          // Cria novo AbortController
          abortControllerRef.current = new AbortController();

          console.log(`🌐 useApi: Fetching ${finalEndpoint}`);

          const requestOptions = {
            signal: abortControllerRef.current.signal,
            fallbackData,
            ...overrideOptions
          };

          const result = await apiRequest(finalEndpoint, requestOptions);

          // Verifica se foi cancelado
          if (abortControllerRef.current?.signal.aborted) {
            console.log('🚫 useApi: Request cancelled');
            return;
          }

          if (result.success) {
            let finalData = result.data;

            // Aplica transformação se fornecida
            if (transformData && typeof transformData === 'function') {
              finalData = transformData(finalData);
            }

            setData(finalData);
            setLastFetch(Date.now());
            setError(null);

            // Callback de sucesso
            if (onSuccess) {
              onSuccess(finalData, result);
            }

            console.log(`✅ useApi: Success for ${finalEndpoint}`);
            resolve(finalData);

          } else {
            throw new Error(result.error || 'Erro na requisição');
          }

        } catch (err) {
          if (err.name === 'AbortError') {
            console.log('🚫 useApi: Request aborted');
            return;
          }

          console.error(`❌ useApi: Error fetching ${endpoint}:`, err);
          setError(err.message || 'Erro na requisição');
          setData(fallbackData);

          // Callback de erro
          if (onError) {
            onError(err);
          }

          reject(err);
        } finally {
          setLoading(false);
          abortControllerRef.current = null;
        }
      };

      // Aplica debounce se configurado
      if (debounceMs > 0) {
        debounceTimeoutRef.current = setTimeout(executeFetch, debounceMs);
      } else {
        executeFetch();
      }
    });
  }, [endpoint, fallbackData, transformData, onSuccess, onError, debounceMs, cleanup]);

  /**
   * Fetch com retry automático
   */
  const fetchWithRetry = useCallback(async (overrideEndpoint = null, overrideOptions = {}, attempt = 0) => {
    try {
      return await fetchData(overrideEndpoint, overrideOptions);
    } catch (error) {
      if (attempt < retryAttempts) {
        console.log(`🔄 useApi: Retry ${attempt + 1}/${retryAttempts} in ${retryDelay}ms`);

        return new Promise((resolve, reject) => {
          retryTimeoutRef.current = setTimeout(async () => {
            try {
              const result = await fetchWithRetry(overrideEndpoint, overrideOptions, attempt + 1);
              resolve(result);
            } catch (retryError) {
              reject(retryError);
            }
          }, retryDelay * Math.pow(2, attempt)); // Exponential backoff
        });
      }
      throw error;
    }
  }, [fetchData, retryAttempts, retryDelay]);

  /**
   * Refetch manual
   */
  const refetch = useCallback((overrideOptions = {}) => {
    return fetchWithRetry(null, overrideOptions);
  }, [fetchWithRetry]);

  /**
   * Verifica se dados estão em cache válido
   */
  const isCacheValid = useCallback(() => {
    if (!lastFetch || !cacheTime) return false;
    return Date.now() - lastFetch < cacheTime;
  }, [lastFetch, cacheTime]);

  /**
   * Fetch condicional (respeita cache)
   */
  const fetchIfNeeded = useCallback((forceRefresh = false) => {
    if (!forceRefresh && isCacheValid() && data) {
      console.log('💾 useApi: Using cached data');
      return Promise.resolve(data);
    }
    return refetch();
  }, [isCacheValid, data, refetch]);

  // Auto-fetch effect
  useEffect(() => {
    if (autoFetch && endpoint) {
      fetchIfNeeded();
    }

    // Cleanup no unmount
    return cleanup;
  }, [autoFetch, endpoint, ...dependencies, fetchIfNeeded, cleanup]);

  // Cleanup no unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  // Estados computados
  const states = {
    data,
    loading,
    error,
    lastFetch,

    // Estados derivados
    hasData: Boolean(data),
    hasError: Boolean(error),
    isStale: !isCacheValid(),
    isEmpty: !loading && !error && !data,

    // Informações de cache
    cacheAge: lastFetch ? Date.now() - lastFetch : null,
    isCacheValid: isCacheValid()
  };

  console.log('🎣 useApi hook state:', {
    endpoint: typeof endpoint === 'string' ? endpoint : 'function',
    hasData: states.hasData,
    loading,
    error: error ? error.substring(0, 50) : null,
    cacheAge: states.cacheAge
  });

  return {
    ...states,

    // Funções
    refetch,
    fetchIfNeeded,
    fetchWithRetry,

    // Utilitários
    clearCache: () => {
      setData(fallbackData);
      setLastFetch(null);
    },

    cancel: cleanup
  };
};

export default useApi;