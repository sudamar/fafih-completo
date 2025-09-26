/**
 * useDebounce Hook - Debounce para Otimização de Performance
 *
 * Funcionalidades:
 * - Debounce de valores para evitar execuções desnecessárias
 * - Configurável delay
 * - Útil para buscas e validações
 * - Cleanup automático
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Hook para debounce de valores
 * @param {*} value - Valor para debounce
 * @param {number} delay - Delay em ms
 * @param {Object} options - Opções adicionais
 * @param {boolean} options.leading - Executa na primeira chamada
 * @param {boolean} options.trailing - Executa na última chamada (padrão: true)
 * @returns {*} Valor com debounce aplicado
 */
export const useDebounce = (value, delay = 300, options = {}) => {
  const { leading = false, trailing = true } = options;

  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);
  const isLeadingRef = useRef(true);

  useEffect(() => {
    // Se leading está habilitado e é a primeira chamada
    if (leading && isLeadingRef.current) {
      setDebouncedValue(value);
      isLeadingRef.current = false;
      return;
    }

    // Limpa timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Se trailing está habilitado, configura novo timeout
    if (trailing) {
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(value);
        isLeadingRef.current = true; // Reset para próxima sequência
      }, delay);
    }

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, leading, trailing]);

  // Cleanup na desmontagem
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedValue;
};

/**
 * Hook para debounce de funções
 * @param {Function} callback - Função para debounce
 * @param {number} delay - Delay em ms
 * @param {Array} dependencies - Dependências da função
 * @returns {Function} Função com debounce aplicado
 */
export const useDebouncedCallback = (callback, delay = 300, dependencies = []) => {
  const timeoutRef = useRef(null);

  const debouncedCallback = (...args) => {
    // Limpa timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Configura novo timeout
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  // Cleanup quando dependências mudam ou na desmontagem
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, dependencies);

  return debouncedCallback;
};

/**
 * Hook avançado de debounce com controle manual
 * @param {*} value - Valor inicial
 * @param {number} delay - Delay em ms
 * @returns {Object} Estado e controles do debounce
 */
export const useAdvancedDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isPending, setIsPending] = useState(false);
  const timeoutRef = useRef(null);

  // Função para cancelar debounce pendente
  const cancel = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setIsPending(false);
    }
  };

  // Função para aplicar valor imediatamente
  const flush = () => {
    cancel();
    setDebouncedValue(value);
  };

  useEffect(() => {
    // Se o valor mudou
    if (value !== debouncedValue) {
      setIsPending(true);

      // Limpa timeout anterior
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Configura novo timeout
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(value);
        setIsPending(false);
      }, delay);
    }

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, debouncedValue]);

  // Cleanup na desmontagem
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    debouncedValue,
    isPending,
    cancel,
    flush
  };
};

export default useDebounce;