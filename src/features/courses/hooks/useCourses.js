/**
 * useCourses Hook - Gerenciamento de Estado para Listagem de Cursos
 *
 * Funcionalidades:
 * - Listagem de cursos com filtros
 * - Estados de loading/error/data
 * - Filtros por categoria
 * - Busca textual
 * - Cache automático via service
 * - Refetch manual
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import courseService from '../services/courseService.js';

/**
 * Hook para gerenciar listagem de cursos
 * @param {Object} options - Opções de configuração
 * @param {string} options.category - Categoria para filtrar
 * @param {string} options.searchQuery - Termo de busca
 * @param {string} options.sortBy - Campo para ordenação
 * @param {string} options.sortOrder - Ordem (asc/desc)
 * @param {number} options.limit - Limite de resultados
 * @param {number} options.page - Página atual
 * @param {boolean} options.autoFetch - Se deve buscar automaticamente
 * @returns {Object} Estado e funções do hook
 */
export const useCourses = (options = {}) => {
  const {
    category = 'all',
    searchQuery = '',
    sortBy = 'title',
    sortOrder = 'asc',
    limit = null,
    page = 1,
    autoFetch = true
  } = options;

  // Estados principais
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Estados derivados
  const [categories, setCategories] = useState([]);
  const [stats, setStats] = useState(null);

  /**
   * Função principal para buscar cursos
   */
  const fetchCourses = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      if (forceRefresh) {
        courseService.clearCache();
      }

      let result;

      // Decide qual método usar baseado nos filtros
      if (searchQuery && searchQuery.trim().length >= 2) {
        // Busca textual
        result = await courseService.searchCourses(searchQuery, {
          category,
          sortBy,
          sortOrder,
          limit,
          page
        });
      } else if (category && category !== 'all') {
        // Filtro por categoria
        result = await courseService.getCoursesByCategory(category);
      } else {
        // Listagem geral
        result = await courseService.getAllCourses({
          category,
          sortBy,
          sortOrder,
          limit,
          page
        });
      }

      setCourses(result || []);

      if (!initialized) {
        setInitialized(true);
      }

      console.log(`✅ useCourses: Loaded ${result?.length || 0} courses`);

    } catch (err) {
      console.error('❌ useCourses: Error fetching courses:', err);
      setError(err.message || 'Erro ao carregar cursos');
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery, sortBy, sortOrder, limit, page, initialized]);

  /**
   * Busca categorias disponíveis
   */
  const fetchCategories = useCallback(async () => {
    try {
      const result = await courseService.getCategories();
      setCategories(result || []);
      console.log(`📊 useCourses: Loaded ${result?.length || 0} categories`);
    } catch (err) {
      console.error('❌ useCourses: Error fetching categories:', err);
      setCategories([]);
    }
  }, []);

  /**
   * Busca estatísticas dos cursos
   */
  const fetchStats = useCallback(async () => {
    try {
      const result = await courseService.getStats();
      setStats(result);
      console.log('📈 useCourses: Loaded course stats');
    } catch (err) {
      console.error('❌ useCourses: Error fetching stats:', err);
      setStats(null);
    }
  }, []);

  /**
   * Função para refetch manual
   */
  const refetch = useCallback((forceRefresh = false) => {
    return fetchCourses(forceRefresh);
  }, [fetchCourses]);

  /**
   * Função para buscar curso específico (helper)
   */
  const findCourse = useCallback((slug) => {
    return courses.find(course => course.slug === slug);
  }, [courses]);

  /**
   * Limpa cache e recarrega
   */
  const clearCacheAndRefetch = useCallback(() => {
    courseService.clearCache();
    return fetchCourses(true);
  }, [fetchCourses]);

  // Effect principal - busca inicial
  useEffect(() => {
    if (autoFetch) {
      fetchCourses();
    }
  }, [fetchCourses, autoFetch]);

  // Effect para buscar dados auxiliares na primeira vez
  useEffect(() => {
    if (initialized && categories.length === 0) {
      fetchCategories();
    }
  }, [initialized, categories.length, fetchCategories]);

  // Valores computados
  const computedValues = useMemo(() => {
    const totalCourses = courses.length;
    const hasResults = totalCourses > 0;
    const isEmpty = !loading && !error && totalCourses === 0;
    const isSearching = searchQuery && searchQuery.trim().length >= 2;
    const isFiltering = category && category !== 'all';

    return {
      totalCourses,
      hasResults,
      isEmpty,
      isSearching,
      isFiltering
    };
  }, [courses.length, loading, error, searchQuery, category]);

  // Estados de carregamento específicos
  const loadingStates = useMemo(() => ({
    isInitialLoad: loading && !initialized,
    isRefetching: loading && initialized,
    isSearching: loading && computedValues.isSearching,
    isFiltering: loading && computedValues.isFiltering
  }), [loading, initialized, computedValues]);

  console.log('🎣 useCourses hook state:', {
    coursesCount: courses.length,
    loading,
    error: error ? error.substring(0, 50) : null,
    category,
    searchQuery: searchQuery.substring(0, 20),
    ...computedValues
  });

  // Interface do hook
  return {
    // Dados principais
    courses,
    loading,
    error,
    initialized,

    // Dados auxiliares
    categories,
    stats,

    // Estados computados
    ...computedValues,
    ...loadingStates,

    // Funções
    refetch,
    fetchCategories,
    fetchStats,
    findCourse,
    clearCacheAndRefetch,

    // Utilitários
    serviceInfo: {
      cacheInfo: courseService.getCacheInfo(),
      config: courseService.config
    }
  };
};

export default useCourses;