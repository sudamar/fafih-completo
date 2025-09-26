/**
 * useApi Hook - Hook Genérico para Chamadas de API
 *
 * Funcionalidades:
 * - Interface unificada para requests
 * - Estados de loading/error/data
 * - Integração com error handling
 * - Suporte a retry automático
 * - Cache opcional
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { apiRequest } from '../services/apiClient.js';
import errorHandler from '../services/errorHandler.js';

/**
 * Hook genérico para chamadas de API
 * @param {string|Function} endpoint - URL do endpoint ou função que retorna URL
 * @param {Object} options - Opções de configuração
 * @param {Object} options.params - Parâmetros para a query string
 * @param {boolean} options.autoFetch - Se deve fazer fetch automático
 * @param {Array} options.dependencies - Dependências para refetch automático
 * @param {*} options.fallbackData - Dados de fallback
 * @param {boolean} options.enabled - Se o hook está habilitado
 * @param {Function} options.onSuccess - Callback de sucesso
 * @param {Function} options.onError - Callback de erro
 * @param {number} options.retryDelay - Delay entre tentativas
 * @param {number} options.maxRetries - Máximo de tentativas
 * @returns {Object} Estado e funções do hook
 */
export const useApi = (endpoint, options = {}) => {
  const {
    params = {},
    autoFetch = true,
    dependencies = [],
    fallbackData = null,
    enabled = true,
    onSuccess,
    onError,
    retryDelay = 1000,
    maxRetries = 3
  } = options;

  // Estados
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetch, setLastFetch] = useState(null);

  // Refs
  const abortController = useRef(null);
  const retryCount = useRef(0);
  const isMounted = useRef(true);

  /**
   * Resolve o endpoint (pode ser string ou função)
   */
  const resolveEndpoint = useCallback(() => {
    return typeof endpoint === 'function' ? endpoint() : endpoint;
  }, [endpoint]);

  /**
   * Função principal de fetch
   */
  const fetchData = useCallback(async (forceRefetch = false) => {
    if (!enabled) {
      console.log('🔄 useApi: Disabled, skipping fetch');
      return;
    }

    const resolvedEndpoint = resolveEndpoint();
    if (!resolvedEndpoint) {
      console.warn('⚠️ useApi: No endpoint provided');
      return;
    }

    // Cancela request anterior
    if (abortController.current) {
      abortController.current.abort();
    }

    // Cria novo AbortController
    abortController.current = new AbortController();

    try {
      setLoading(true);
      setError(null);

      console.log(`🌐 useApi: Fetching ${resolvedEndpoint}`, params);

      const result = await apiRequest(resolvedEndpoint, {
        params,
        fallbackData,
        signal: abortController.current.signal
      });

      if (!isMounted.current) {
        console.log('🔄 useApi: Component unmounted, ignoring result');
        return;
      }

      if (result.success) {
        setData(result.data);
        setLastFetch(new Date().toISOString());
        retryCount.current = 0;

        console.log(`✅ useApi: Success for ${resolvedEndpoint}`);

        // Callback de sucesso
        if (onSuccess) {
          onSuccess(result.data, result);
        }

      } else {
        throw new Error(result.error || 'API request failed');
      }

    } catch (err) {
      if (!isMounted.current) return;

      // Se foi cancelada, ignora
      if (err.name === 'AbortError') {
        console.log('🔄 useApi: Request aborted');
        return;
      }

      console.error(`❌ useApi: Error fetching ${resolvedEndpoint}:`, err);

      // Cria erro padronizado
      const handledError = errorHandler.createStandardError(err, {
        service: 'useApi',
        operation: 'fetchData',
        endpoint: resolvedEndpoint,
        params
      });

      setError(handledError);

      // Callback de erro
      if (onError) {
        onError(handledError, err);
      }

      // Retry automático se configurado
      if (handledError.canRetry && retryCount.current < maxRetries) {
        retryCount.current++;
        console.log(`🔄 useApi: Retry attempt ${retryCount.current} in ${retryDelay}ms`);

        setTimeout(() => {
          if (isMounted.current) {
            fetchData(forceRefetch);
          }
        }, retryDelay * retryCount.current);
      }

    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, [
    enabled,
    resolveEndpoint,
    params,
    fallbackData,
    onSuccess,
    onError,
    retryDelay,
    maxRetries
  ]);

  /**
   * Função de refetch manual
   */
  const refetch = useCallback((forceRefetch = true) => {
    retryCount.current = 0;
    return fetchData(forceRefetch);
  }, [fetchData]);

  /**
   * Função de mutação (POST, PUT, etc.)
   */
  const mutate = useCallback(async (newData, method = 'POST') => {
    const resolvedEndpoint = resolveEndpoint();
    if (!resolvedEndpoint) return;

    try {
      setLoading(true);
      setError(null);

      const result = await apiRequest(resolvedEndpoint, {
        method,
        data: newData,
        fallbackData: null
      });

      if (result.success) {
        // Atualiza dados locais se for o mesmo endpoint
        setData(result.data);
        setLastFetch(new Date().toISOString());

        if (onSuccess) {
          onSuccess(result.data, result);
        }

        return result.data;
      } else {
        throw new Error(result.error || 'Mutation failed');
      }

    } catch (err) {
      const handledError = errorHandler.createStandardError(err, {
        service: 'useApi',
        operation: 'mutate',
        endpoint: resolvedEndpoint,
        method,
        data: newData
      });

      setError(handledError);

      if (onError) {
        onError(handledError, err);
      }

      throw handledError;

    } finally {
      setLoading(false);
    }
  }, [resolveEndpoint, onSuccess, onError]);

  // Effect para fetch automático
  useEffect(() => {
    if (autoFetch && enabled) {
      fetchData();
    }

    return () => {
      // Cleanup
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, [autoFetch, enabled, fetchData, ...dependencies]);

  // Effect para cleanup na desmontagem
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, []);

  // Estados computados
  const isStale = lastFetch ? Date.now() - new Date(lastFetch).getTime() > 300000 : true; // 5 min
  const hasData = data !== null && data !== undefined;
  const isEmpty = hasData && (Array.isArray(data) ? data.length === 0 : Object.keys(data).length === 0);

  console.log('🎣 useApi hook state:', {
    endpoint: typeof endpoint === 'function' ? 'function' : endpoint,
    hasData,
    loading,
    error: error ? error.type : null,
    retryCount: retryCount.current,
    isStale
  });

  return {
    // Dados
    data,
    loading,
    error,

    // Estados
    hasData,
    isEmpty,
    isStale,
    lastFetch,

    // Metadados
    retryCount: retryCount.current,
    maxRetries,
    canRetry: error?.canRetry && retryCount.current < maxRetries,

    // Funções
    refetch,
    mutate,

    // Utilitários
    reset: () => {
      setData(fallbackData);
      setError(null);
      setLoading(false);
      retryCount.current = 0;
    }
  };
};

export default useApi;