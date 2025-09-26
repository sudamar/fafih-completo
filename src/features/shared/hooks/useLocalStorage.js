/**
 * useLocalStorage Hook - Gerenciamento de estado sincronizado com localStorage
 *
 * Funcionalidades:
 * - Sincronização automática com localStorage
 * - Parsing/stringify automático para objetos
 * - Fallback para valores padrão
 * - Tipo de dados preservado
 * - Sincronização entre abas
 * - Error handling robusto
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook para gerenciar dados no localStorage de forma reativa
 * @param {string} key - Chave do localStorage
 * @param {*} initialValue - Valor inicial/padrão
 * @param {Object} options - Opções de configuração
 * @returns {Array} [value, setValue, remove, isLoading]
 */
export const useLocalStorage = (key, initialValue, options = {}) => {
  const {
    serializer = JSON,
    syncAcrossTabs = true,
    onError = null
  } = options;

  // Ref para evitar loops infinitos
  const initializing = useRef(true);

  // Estados
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return initialValue;
      }

      return serializer.parse(item);
    } catch (error) {
      console.warn(`❌ useLocalStorage: Error reading key "${key}":`, error);
      if (onError) onError(error, 'read');
      return initialValue;
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  /**
   * Função para definir valor
   */
  const setValue = useCallback((value) => {
    if (typeof window === 'undefined') {
      console.warn('⚠️ useLocalStorage: localStorage not available');
      return;
    }

    try {
      setIsLoading(true);

      // Permite função como valor (similar useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      // Salva no localStorage
      if (valueToStore === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, serializer.stringify(valueToStore));
      }

      console.log(`💾 useLocalStorage: Set "${key}":`, valueToStore);

    } catch (error) {
      console.error(`❌ useLocalStorage: Error setting key "${key}":`, error);
      if (onError) onError(error, 'write');
    } finally {
      setIsLoading(false);
    }
  }, [key, storedValue, serializer, onError]);

  /**
   * Função para remover valor
   */
  const remove = useCallback(() => {
    if (typeof window === 'undefined') {
      console.warn('⚠️ useLocalStorage: localStorage not available');
      return;
    }

    try {
      setIsLoading(true);
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
      console.log(`🗑️ useLocalStorage: Removed "${key}"`);
    } catch (error) {
      console.error(`❌ useLocalStorage: Error removing key "${key}":`, error);
      if (onError) onError(error, 'remove');
    } finally {
      setIsLoading(false);
    }
  }, [key, initialValue, onError]);

  /**
   * Função para sincronizar com localStorage (útil após mudanças externas)
   */
  const sync = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        setStoredValue(initialValue);
      } else {
        const parsed = serializer.parse(item);
        setStoredValue(parsed);
        console.log(`🔄 useLocalStorage: Synced "${key}":`, parsed);
      }
    } catch (error) {
      console.error(`❌ useLocalStorage: Error syncing key "${key}":`, error);
      if (onError) onError(error, 'sync');
      setStoredValue(initialValue);
    }
  }, [key, initialValue, serializer, onError]);

  /**
   * Handler para mudanças no storage (entre abas)
   */
  const handleStorageChange = useCallback((e) => {
    if (e.key === key && e.storageArea === window.localStorage) {
      console.log(`🔄 useLocalStorage: External change detected for "${key}"`);

      try {
        if (e.newValue === null) {
          setStoredValue(initialValue);
        } else {
          const newValue = serializer.parse(e.newValue);
          setStoredValue(newValue);
        }
      } catch (error) {
        console.error(`❌ useLocalStorage: Error parsing external change for "${key}":`, error);
        if (onError) onError(error, 'externalChange');
        setStoredValue(initialValue);
      }
    }
  }, [key, initialValue, serializer, onError]);

  // Effect para sincronização entre abas
  useEffect(() => {
    if (typeof window === 'undefined' || !syncAcrossTabs) {
      return;
    }

    // Adiciona listener para mudanças
    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [handleStorageChange, syncAcrossTabs]);

  // Effect para marcar como inicializado
  useEffect(() => {
    initializing.current = false;
  }, []);

  console.log('🎣 useLocalStorage hook state:', {
    key,
    hasValue: storedValue !== undefined && storedValue !== null,
    isLoading,
    type: typeof storedValue
  });

  return [storedValue, setValue, remove, { sync, isLoading }];
};

/**
 * Hook simplificado para valores booleanos
 */
export const useLocalStorageBoolean = (key, initialValue = false) => {
  return useLocalStorage(key, initialValue, {
    serializer: {
      parse: (value) => value === 'true',
      stringify: (value) => String(Boolean(value))
    }
  });
};

/**
 * Hook simplificado para números
 */
export const useLocalStorageNumber = (key, initialValue = 0) => {
  return useLocalStorage(key, initialValue, {
    serializer: {
      parse: (value) => {
        const num = Number(value);
        return isNaN(num) ? initialValue : num;
      },
      stringify: (value) => String(Number(value))
    }
  });
};

/**
 * Hook simplificado para arrays
 */
export const useLocalStorageArray = (key, initialValue = []) => {
  return useLocalStorage(key, initialValue, {
    serializer: {
      parse: (value) => {
        try {
          const parsed = JSON.parse(value);
          return Array.isArray(parsed) ? parsed : initialValue;
        } catch {
          return initialValue;
        }
      },
      stringify: (value) => JSON.stringify(Array.isArray(value) ? value : initialValue)
    }
  });
};

export default useLocalStorage;