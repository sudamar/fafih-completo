/**
 * useCourse Hook - Gerenciamento de Estado para Curso Individual
 *
 * Funcionalidades:
 * - Busca curso por slug ou ID
 * - Estados de loading/error/data
 * - Cache automático via service
 * - Refetch manual
 * - Dados relacionados (testimonials, faculty)
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import courseService from '@/features/courses/services/courseService.js';

/**
 * Hook para gerenciar dados de um curso específico
 * @param {string|number} identifier - Slug ou ID do curso
 * @param {Object} options - Opções de configuração
 * @param {boolean} options.autoFetch - Se deve buscar automaticamente
 * @param {boolean} options.fetchRelated - Se deve buscar dados relacionados
 * @param {string} options.identifierType - Tipo do identificador ('slug' | 'id' | 'auto')
 * @returns {Object} Estado e funções do hook
 */
export const useCourse = (identifier, options = {}) => {
  const {
    autoFetch = true,
    fetchRelated = false,
    identifierType = 'auto'
  } = options;

  // Estados principais
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Estados relacionados
  const [testimonials, setTestimonials] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [curriculum, setCurriculum] = useState([]);

  // Estados de loading específicos
  const [loadingRelated, setLoadingRelated] = useState(false);
  const [errorRelated, setErrorRelated] = useState(null);

  /**
   * Determina o tipo de identificador automaticamente
   */
  const resolvedIdentifierType = useMemo(() => {
    if (!identifier) return null;
    if (identifierType !== 'auto') return identifierType;

    // Auto-detect: números são IDs, strings são slugs
    return typeof identifier === 'number' || /^\d+$/.test(identifier) ? 'id' : 'slug';
  }, [identifier, identifierType]);

  /**
   * Função principal para buscar curso
   */
  const fetchCourse = useCallback(async (forceRefresh = false) => {
    if (!identifier) {
      setCourse(null);
      setError(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      if (forceRefresh) {
        courseService.clearCache();
      }

      console.log(`🔍 useCourse: Fetching course by ${resolvedIdentifierType}: ${identifier}`);

      let result;

      // Busca baseada no tipo de identificador
      if (resolvedIdentifierType === 'id') {
        result = await courseService.getCourseById(identifier);
      } else {
        result = await courseService.getCourseBySlug(identifier);
      }

      if (result) {
        setCourse(result);
        console.log(`✅ useCourse: Loaded course: ${result.title}`);
      } else {
        setCourse(null);
        setError(`Curso não encontrado: ${identifier}`);
        console.warn(`⚠️ useCourse: Course not found: ${identifier}`);
      }

      if (!initialized) {
        setInitialized(true);
      }

    } catch (err) {
      console.error(`❌ useCourse: Error fetching course ${identifier}:`, err);
      setError(err.message || 'Erro ao carregar curso');
      setCourse(null);
    } finally {
      setLoading(false);
    }
  }, [identifier, resolvedIdentifierType, initialized]);

  /**
   * Busca dados relacionados do curso
   */
  const fetchRelatedData = useCallback(async () => {
    if (!course?.id) {
      console.log('🔍 useCourse: No course ID available for related data');
      return;
    }

    try {
      setLoadingRelated(true);
      setErrorRelated(null);

      console.log(`🔍 useCourse: Fetching related data for course ${course.id}`);

      // Por enquanto, simula dados relacionados
      // No futuro, estas chamadas serão feitas para a API
      const mockTestimonials = course.testimonials || [];
      const mockFaculty = course.faculty || [];
      const mockCurriculum = course.curriculum || [];

      setTestimonials(mockTestimonials);
      setFaculty(mockFaculty);
      setCurriculum(mockCurriculum);

      console.log(`✅ useCourse: Loaded related data for ${course.title}`);

    } catch (err) {
      console.error(`❌ useCourse: Error fetching related data:`, err);
      setErrorRelated(err.message || 'Erro ao carregar dados relacionados');

      // Reset em caso de erro
      setTestimonials([]);
      setFaculty([]);
      setCurriculum([]);
    } finally {
      setLoadingRelated(false);
    }
  }, [course]);

  /**
   * Função para refetch manual
   */
  const refetch = useCallback((forceRefresh = false) => {
    return fetchCourse(forceRefresh);
  }, [fetchCourse]);

  /**
   * Limpa cache e recarrega
   */
  const clearCacheAndRefetch = useCallback(() => {
    courseService.clearCache();
    return fetchCourse(true);
  }, [fetchCourse]);

  /**
   * Recarrega dados relacionados
   */
  const refetchRelated = useCallback(() => {
    return fetchRelatedData();
  }, [fetchRelatedData]);

  // Effect principal - busca inicial
  useEffect(() => {
    if (autoFetch && identifier) {
      fetchCourse();
    }
  }, [fetchCourse, autoFetch, identifier]);

  // Effect para dados relacionados
  useEffect(() => {
    if (fetchRelated && course && initialized) {
      fetchRelatedData();
    }
  }, [fetchRelated, course, initialized, fetchRelatedData]);

  // Valores computados
  const computedValues = useMemo(() => {
    const exists = Boolean(course);
    const notFound = !loading && !error && !course && initialized;
    const hasIdentifier = Boolean(identifier);
    const isValidIdentifier = hasIdentifier && resolvedIdentifierType;

    // Informações do curso
    const courseInfo = course ? {
      id: course.id,
      slug: course.slug,
      title: course.title,
      category: course.category,
      hasImage: Boolean(course.image),
      hasCurriculum: Boolean(course.curriculum?.length),
      hasTestimonials: Boolean(course.testimonials?.length),
      hasFaculty: Boolean(course.faculty?.length)
    } : null;

    return {
      exists,
      notFound,
      hasIdentifier,
      isValidIdentifier,
      courseInfo,
      identifierType: resolvedIdentifierType
    };
  }, [course, loading, error, initialized, identifier, resolvedIdentifierType]);

  // Estados de carregamento específicos
  const loadingStates = useMemo(() => ({
    isInitialLoad: loading && !initialized,
    isRefetching: loading && initialized,
    isLoadingRelated: loadingRelated,
    hasAnyLoading: loading || loadingRelated
  }), [loading, initialized, loadingRelated]);

  // Informações de debug
  const debugInfo = useMemo(() => ({
    identifier,
    identifierType: resolvedIdentifierType,
    hasResult: Boolean(course),
    cacheInfo: courseService.getCacheInfo()
  }), [identifier, resolvedIdentifierType, course]);

  console.log('🎣 useCourse hook state:', {
    identifier,
    type: resolvedIdentifierType,
    exists: computedValues.exists,
    loading,
    error: error ? error.substring(0, 50) : null,
    courseTitle: course?.title
  });

  // Interface do hook
  return {
    // Dados principais
    course,
    loading,
    error,
    initialized,

    // Dados relacionados
    testimonials,
    faculty,
    curriculum,
    loadingRelated,
    errorRelated,

    // Estados computados
    ...computedValues,
    ...loadingStates,

    // Funções
    refetch,
    refetchRelated,
    clearCacheAndRefetch,

    // Debug e utilitários
    debugInfo,
    serviceInfo: {
      cacheInfo: courseService.getCacheInfo()
    }
  };
};

export default useCourse;