/**
 * useProfessor Hook - Gerenciamento de Estado para Professor Individual
 *
 * Funcionalidades:
 * - Busca professor por slug ou ID
 * - Estados de loading/error/data
 * - Cache automático via service
 * - Refetch manual
 * - Dados de publicações
 * - Cursos relacionados
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import professorService from '@/features/professors/services/professorService.js';

/**
 * Hook para gerenciar dados de um professor específico
 * @param {string|number} identifier - Slug ou ID do professor
 * @param {Object} options - Opções de configuração
 * @param {boolean} options.autoFetch - Se deve buscar automaticamente
 * @param {boolean} options.fetchPublications - Se deve buscar publicações
 * @param {boolean} options.fetchCourses - Se deve buscar cursos relacionados
 * @param {string} options.identifierType - Tipo do identificador ('slug' | 'id' | 'auto')
 * @returns {Object} Estado e funções do hook
 */
export const useProfessor = (identifier, options = {}) => {
  const {
    autoFetch = true,
    fetchPublications = false,
    fetchCourses = false,
    identifierType = 'auto'
  } = options;

  // Estados principais
  const [professor, setProfessor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Estados relacionados
  const [publications, setPublications] = useState([]);
  const [courses, setCourses] = useState([]);
  const [research, setResearch] = useState([]);

  // Estados de loading específicos
  const [loadingPublications, setLoadingPublications] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [errorPublications, setErrorPublications] = useState(null);
  const [errorCourses, setErrorCourses] = useState(null);

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
   * Função principal para buscar professor
   */
  const fetchProfessor = useCallback(async (forceRefresh = false) => {
    if (!identifier) {
      setProfessor(null);
      setError(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      if (forceRefresh) {
        professorService.clearCache();
      }

      console.log(`🔍 useProfessor: Fetching professor by ${resolvedIdentifierType}: ${identifier}`);

      let result;

      // Busca baseada no tipo de identificador
      if (resolvedIdentifierType === 'id') {
        result = await professorService.getProfessorById(identifier);
      } else {
        result = await professorService.getProfessorBySlug(identifier);
      }

      if (result) {
        setProfessor(result);
        console.log(`✅ useProfessor: Loaded professor: ${result.name}`);
      } else {
        setProfessor(null);
        setError(`Professor não encontrado: ${identifier}`);
        console.warn(`⚠️ useProfessor: Professor not found: ${identifier}`);
      }

      if (!initialized) {
        setInitialized(true);
      }

    } catch (err) {
      console.error(`❌ useProfessor: Error fetching professor ${identifier}:`, err);
      setError(err.message || 'Erro ao carregar professor');
      setProfessor(null);
    } finally {
      setLoading(false);
    }
  }, [identifier, resolvedIdentifierType, initialized]);

  /**
   * Busca publicações do professor
   */
  const fetchProfessorPublications = useCallback(async () => {
    if (!professor?.id && !professor?.slug) {
      console.log('🔍 useProfessor: No professor identifier available for publications');
      return;
    }

    try {
      setLoadingPublications(true);
      setErrorPublications(null);

      const professorIdentifier = professor.id || professor.slug;
      console.log(`📚 useProfessor: Fetching publications for professor ${professorIdentifier}`);

      const result = await professorService.getProfessorPublications(professorIdentifier);
      setPublications(result || []);

      console.log(`✅ useProfessor: Loaded ${result?.length || 0} publications for ${professor.name}`);

    } catch (err) {
      console.error(`❌ useProfessor: Error fetching publications:`, err);
      setErrorPublications(err.message || 'Erro ao carregar publicações');
      setPublications([]);
    } finally {
      setLoadingPublications(false);
    }
  }, [professor]);

  /**
   * Busca cursos relacionados do professor
   */
  const fetchProfessorCourses = useCallback(async () => {
    if (!professor?.id) {
      console.log('🔍 useProfessor: No professor ID available for courses');
      return;
    }

    try {
      setLoadingCourses(true);
      setErrorCourses(null);

      console.log(`🎓 useProfessor: Fetching courses for professor ${professor.id}`);

      // Por enquanto, simula dados de cursos
      // No futuro, esta chamada será feita para a API
      const mockCourses = professor.courses || [];
      setCourses(mockCourses);

      console.log(`✅ useProfessor: Loaded ${mockCourses.length} courses for ${professor.name}`);

    } catch (err) {
      console.error(`❌ useProfessor: Error fetching courses:`, err);
      setErrorCourses(err.message || 'Erro ao carregar cursos');
      setCourses([]);
    } finally {
      setLoadingCourses(false);
    }
  }, [professor]);

  /**
   * Função para refetch manual
   */
  const refetch = useCallback((forceRefresh = false) => {
    return fetchProfessor(forceRefresh);
  }, [fetchProfessor]);

  /**
   * Limpa cache e recarrega
   */
  const clearCacheAndRefetch = useCallback(() => {
    professorService.clearCache();
    return fetchProfessor(true);
  }, [fetchProfessor]);

  /**
   * Recarrega publicações
   */
  const refetchPublications = useCallback(() => {
    return fetchProfessorPublications();
  }, [fetchProfessorPublications]);

  /**
   * Recarrega cursos
   */
  const refetchCourses = useCallback(() => {
    return fetchProfessorCourses();
  }, [fetchProfessorCourses]);

  // Effect principal - busca inicial
  useEffect(() => {
    if (autoFetch && identifier) {
      fetchProfessor();
    }
  }, [fetchProfessor, autoFetch, identifier]);

  // Effect para publicações
  useEffect(() => {
    if (fetchPublications && professor && initialized) {
      fetchProfessorPublications();
    }
  }, [fetchPublications, professor, initialized, fetchProfessorPublications]);

  // Effect para cursos
  useEffect(() => {
    if (fetchCourses && professor && initialized) {
      fetchProfessorCourses();
    }
  }, [fetchCourses, professor, initialized, fetchProfessorCourses]);

  // Valores computados
  const computedValues = useMemo(() => {
    const exists = Boolean(professor);
    const notFound = !loading && !error && !professor && initialized;
    const hasIdentifier = Boolean(identifier);
    const isValidIdentifier = hasIdentifier && resolvedIdentifierType;

    // Informações do professor
    const professorInfo = professor ? {
      id: professor.id,
      slug: professor.slug,
      name: professor.name,
      degree: professor.degree,
      specialties: professor.specialties || [],
      qualifications: professor.qualifications || [],
      hasPhoto: Boolean(professor.foto || professor.photo),
      hasBio: Boolean(professor.bio),
      hasContact: Boolean(professor.telefone || professor.email),
      hasPublications: Boolean(professor.publications?.length),
      publicationsCount: professor.publications?.length || 0
    } : null;

    // Análise de contato
    const contactInfo = professor ? {
      hasPhone: Boolean(professor.telefone),
      hasEmail: Boolean(professor.email),
      phone: professor.telefone,
      email: professor.email
    } : null;

    return {
      exists,
      notFound,
      hasIdentifier,
      isValidIdentifier,
      professorInfo,
      contactInfo,
      identifierType: resolvedIdentifierType
    };
  }, [professor, loading, error, initialized, identifier, resolvedIdentifierType]);

  // Estados de carregamento específicos
  const loadingStates = useMemo(() => ({
    isInitialLoad: loading && !initialized,
    isRefetching: loading && initialized,
    isLoadingPublications: loadingPublications,
    isLoadingCourses: loadingCourses,
    hasAnyLoading: loading || loadingPublications || loadingCourses
  }), [loading, initialized, loadingPublications, loadingCourses]);

  // Estatísticas das publicações
  const publicationStats = useMemo(() => {
    if (!publications.length) return null;

    const byYear = publications.reduce((acc, pub) => {
      const year = pub.year || 'Não informado';
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {});

    const byType = publications.reduce((acc, pub) => {
      const type = pub.type || 'Artigo';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    return {
      total: publications.length,
      byYear,
      byType,
      recentPublications: publications.filter(pub => {
        const currentYear = new Date().getFullYear();
        return pub.year && pub.year >= currentYear - 5;
      }).length
    };
  }, [publications]);

  // Informações de debug
  const debugInfo = useMemo(() => ({
    identifier,
    identifierType: resolvedIdentifierType,
    hasResult: Boolean(professor),
    publicationsCount: publications.length,
    coursesCount: courses.length,
    cacheInfo: professorService.getCacheInfo()
  }), [identifier, resolvedIdentifierType, professor, publications.length, courses.length]);

  console.log('🎣 useProfessor hook state:', {
    identifier,
    type: resolvedIdentifierType,
    exists: computedValues.exists,
    loading,
    error: error ? error.substring(0, 50) : null,
    professorName: professor?.name,
    publicationsCount: publications.length
  });

  // Interface do hook
  return {
    // Dados principais
    professor,
    loading,
    error,
    initialized,

    // Dados relacionados
    publications,
    courses,
    research,
    loadingPublications,
    loadingCourses,
    errorPublications,
    errorCourses,

    // Estatísticas
    publicationStats,

    // Estados computados
    ...computedValues,
    ...loadingStates,

    // Funções
    refetch,
    refetchPublications,
    refetchCourses,
    clearCacheAndRefetch,

    // Debug e utilitários
    debugInfo,
    serviceInfo: {
      cacheInfo: professorService.getCacheInfo()
    }
  };
};

export default useProfessor;