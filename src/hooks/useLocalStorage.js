/**
 * useLocalStorage Hook - Persistência Local com React State
 *
 * Funcionalidades:
 * - Sincronização automática com localStorage
 * - Tipagem segura com serialização JSON
 * - Fallback para valores padrão
 * - Handling de erros do localStorage
 * - Sincronização entre abas
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook para sincronização com localStorage
 * @param {string} key - Chave no localStorage
 * @param {*} defaultValue - Valor padrão
 * @param {Object} options - Opções adicionais
 * @param {Function} options.serializer - Função de serialização
 * @param {Function} options.deserializer - Função de deserialização
 * @param {boolean} options.syncAcrossTabs - Sincroniza entre abas
 * @returns {Array} [value, setValue, { remove, reset }]
 */
export const useLocalStorage = (key, defaultValue, options = {}) => {
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse,
    syncAcrossTabs = true
  } = options;

  // Refs para evitar re-renders desnecessários
  const keyRef = useRef(key);
  const defaultValueRef = useRef(defaultValue);

  /**
   * Função para ler do localStorage
   */
  const readFromStorage = useCallback(() => {
    try {
      const item = window.localStorage.getItem(keyRef.current);

      if (item === null) {
        return defaultValueRef.current;
      }

      return deserializer(item);
    } catch (error) {
      console.warn(`useLocalStorage: Error reading key "${keyRef.current}":`, error);
      return defaultValueRef.current;
    }
  }, [deserializer]);

  /**
   * Função para escrever no localStorage
   */
  const writeToStorage = useCallback((value) => {
    try {
      window.localStorage.setItem(keyRef.current, serializer(value));
      return true;
    } catch (error) {
      console.warn(`useLocalStorage: Error setting key "${keyRef.current}":`, error);
      return false;
    }
  }, [serializer]);

  // Estado principal
  const [storedValue, setStoredValue] = useState(readFromStorage);

  /**
   * Função para atualizar valor
   */
  const setValue = useCallback((value) => {
    try {
      // Permite value ser uma função como useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      writeToStorage(valueToStore);

      // Dispara evento customizado para sincronização
      if (syncAcrossTabs) {
        window.dispatchEvent(new CustomEvent('localStorage-change', {
          detail: {
            key: keyRef.current,
            value: valueToStore
          }
        }));
      }

    } catch (error) {
      console.warn(`useLocalStorage: Error setting value for key "${keyRef.current}":`, error);
    }
  }, [storedValue, writeToStorage, syncAcrossTabs]);

  /**
   * Função para remover do localStorage
   */
  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(keyRef.current);
      setStoredValue(defaultValueRef.current);

      if (syncAcrossTabs) {
        window.dispatchEvent(new CustomEvent('localStorage-change', {
          detail: {
            key: keyRef.current,
            value: null
          }
        }));
      }

    } catch (error) {
      console.warn(`useLocalStorage: Error removing key "${keyRef.current}":`, error);
    }
  }, [syncAcrossTabs]);

  /**
   * Função para resetar para valor padrão
   */
  const reset = useCallback(() => {
    setValue(defaultValueRef.current);
  }, [setValue]);

  // Effect para sincronização entre abas
  useEffect(() => {
    if (!syncAcrossTabs) return;

    const handleStorageChange = (e) => {
      if (e.key === keyRef.current) {
        try {
          const newValue = e.newValue === null
            ? defaultValueRef.current
            : deserializer(e.newValue);
          setStoredValue(newValue);
        } catch (error) {
          console.warn(`useLocalStorage: Error parsing storage change for "${keyRef.current}":`, error);
        }
      }
    };

    const handleCustomEvent = (e) => {
      if (e.detail.key === keyRef.current) {
        setStoredValue(e.detail.value === null ? defaultValueRef.current : e.detail.value);
      }
    };

    // Listen para mudanças nativas do localStorage (outras abas)
    window.addEventListener('storage', handleStorageChange);

    // Listen para mudanças customizadas (mesma aba)
    window.addEventListener('localStorage-change', handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorage-change', handleCustomEvent);
    };
  }, [deserializer, syncAcrossTabs]);

  // Effect para atualizar refs quando props mudam
  useEffect(() => {
    keyRef.current = key;
    defaultValueRef.current = defaultValue;
  }, [key, defaultValue]);

  return [
    storedValue,
    setValue,
    {
      remove,
      reset
    }
  ];
};

/**
 * Hook simplificado para valores booleanos
 */
export const useLocalStorageBoolean = (key, defaultValue = false) => {
  const [value, setValue, utils] = useLocalStorage(key, defaultValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, [setValue]);

  return [Boolean(value), setValue, { ...utils, toggle }];
};

/**
 * Hook para objetos com merge inteligente
 */
export const useLocalStorageObject = (key, defaultValue = {}) => {
  const [value, setValue, utils] = useLocalStorage(key, defaultValue);

  const updateProperty = useCallback((propertyKey, propertyValue) => {
    setValue(prev => ({
      ...prev,
      [propertyKey]: propertyValue
    }));
  }, [setValue]);

  const removeProperty = useCallback((propertyKey) => {
    setValue(prev => {
      const newValue = { ...prev };
      delete newValue[propertyKey];
      return newValue;
    });
  }, [setValue]);

  const merge = useCallback((partialObject) => {
    setValue(prev => ({
      ...prev,
      ...partialObject
    }));
  }, [setValue]);

  return [
    value || {},
    setValue,
    {
      ...utils,
      updateProperty,
      removeProperty,
      merge
    }
  ];
};

/**
 * Hook para arrays com métodos de manipulação
 */
export const useLocalStorageArray = (key, defaultValue = []) => {
  const [value, setValue, utils] = useLocalStorage(key, defaultValue);

  const push = useCallback((item) => {
    setValue(prev => [...(prev || []), item]);
  }, [setValue]);

  const pop = useCallback(() => {
    setValue(prev => (prev || []).slice(0, -1));
  }, [setValue]);

  const removeAt = useCallback((index) => {
    setValue(prev => (prev || []).filter((_, i) => i !== index));
  }, [setValue]);

  const removeItem = useCallback((item) => {
    setValue(prev => (prev || []).filter(i => i !== item));
  }, [setValue]);

  const clear = useCallback(() => {
    setValue([]);
  }, [setValue]);

  return [
    value || [],
    setValue,
    {
      ...utils,
      push,
      pop,
      removeAt,
      removeItem,
      clear,
      length: (value || []).length
    }
  ];
};

export default useLocalStorage;