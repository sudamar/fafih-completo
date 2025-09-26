/**
 * useProfessors Hook - Gerenciamento de Estado para Listagem de Professores
 *
 * Funcionalidades:
 * - Listagem de professores com filtros
 * - Estados de loading/error/data
 * - Filtros por titulação/grau
 * - Filtros por especialidade
 * - Busca textual
 * - Cache automático via service
 * - Refetch manual
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import professorService from '../services/professorService.js';

/**
 * Hook para gerenciar listagem de professores
 * @param {Object} options - Opções de configuração
 * @param {string} options.degree - Titulação para filtrar (doutor, mestre, especialista)
 * @param {string} options.specialty - Especialidade para filtrar
 * @param {string} options.searchQuery - Termo de busca
 * @param {string} options.sortBy - Campo para ordenação
 * @param {string} options.sortOrder - Ordem (asc/desc)
 * @param {number} options.limit - Limite de resultados
 * @param {number} options.page - Página atual
 * @param {boolean} options.autoFetch - Se deve buscar automaticamente
 * @returns {Object} Estado e funções do hook
 */
export const useProfessors = (options = {}) => {
  const {
    degree = 'todos',
    specialty = '',
    searchQuery = '',
    sortBy = 'name',
    sortOrder = 'asc',
    limit = null,
    page = 1,
    autoFetch = true
  } = options;

  // Estados principais
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Estados derivados
  const [degrees, setDegrees] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [stats, setStats] = useState(null);

  /**
   * Função principal para buscar professores
   */
  const fetchProfessors = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      if (forceRefresh) {
        professorService.clearCache();
      }

      let result;

      // Decide qual método usar baseado nos filtros
      if (searchQuery && searchQuery.trim().length >= 2) {
        // Busca textual
        result = await professorService.searchProfessors(searchQuery, {
          degree,
          specialty,
          sortBy,
          sortOrder,
          limit,
          page
        });
      } else if (degree && degree !== 'todos') {
        // Filtro por titulação
        result = await professorService.getProfessorsByDegree(degree);

        // Aplica filtros adicionais se necessário
        if (specialty) {
          result = result.filter(professor =>
            professor.specialties &&
            professor.specialties.some(s =>
              s.toLowerCase().includes(specialty.toLowerCase())
            )
          );
        }
      } else {
        // Listagem geral
        result = await professorService.getAllProfessors({
          degree,
          specialty,
          sortBy,
          sortOrder,
          limit,
          page
        });
      }

      setProfessors(result || []);

      if (!initialized) {
        setInitialized(true);
      }

      console.log(`✅ useProfessors: Loaded ${result?.length || 0} professors`);

    } catch (err) {
      console.error('❌ useProfessors: Error fetching professors:', err);
      setError(err.message || 'Erro ao carregar professores');
      setProfessors([]);
    } finally {
      setLoading(false);
    }
  }, [degree, specialty, searchQuery, sortBy, sortOrder, limit, page, initialized]);

  /**
   * Busca titulações disponíveis
   */
  const fetchDegrees = useCallback(async () => {
    try {
      const result = await professorService.getDegrees();
      setDegrees(result || []);
      console.log(`🎓 useProfessors: Loaded ${result?.length || 0} degrees`);
    } catch (err) {
      console.error('❌ useProfessors: Error fetching degrees:', err);
      setDegrees([]);
    }
  }, []);

  /**
   * Busca especialidades disponíveis
   */
  const fetchSpecialties = useCallback(async () => {
    try {
      const result = await professorService.getSpecialties();
      setSpecialties(result || []);
      console.log(`🏷️ useProfessors: Loaded ${result?.length || 0} specialties`);
    } catch (err) {
      console.error('❌ useProfessors: Error fetching specialties:', err);
      setSpecialties([]);
    }
  }, []);

  /**
   * Busca estatísticas dos professores
   */
  const fetchStats = useCallback(async () => {
    try {
      const result = await professorService.getStats();
      setStats(result);
      console.log('📈 useProfessors: Loaded professor stats');
    } catch (err) {
      console.error('❌ useProfessors: Error fetching stats:', err);
      setStats(null);
    }
  }, []);

  /**
   * Função para refetch manual
   */
  const refetch = useCallback((forceRefresh = false) => {
    return fetchProfessors(forceRefresh);
  }, [fetchProfessors]);

  /**
   * Função para buscar professor específico (helper)
   */
  const findProfessor = useCallback((slug) => {
    return professors.find(professor => professor.slug === slug);
  }, [professors]);

  /**
   * Filtra professores por grau específico
   */
  const filterByDegree = useCallback(async (targetDegree) => {
    try {
      setLoading(true);
      const result = await professorService.getProfessorsByDegree(targetDegree);
      setProfessors(result || []);
      return result;
    } catch (err) {
      console.error('❌ useProfessors: Error filtering by degree:', err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Limpa cache e recarrega
   */
  const clearCacheAndRefetch = useCallback(() => {
    professorService.clearCache();
    return fetchProfessors(true);
  }, [fetchProfessors]);

  // Effect principal - busca inicial
  useEffect(() => {
    if (autoFetch) {
      fetchProfessors();
    }
  }, [fetchProfessors, autoFetch]);

  // Effect para buscar dados auxiliares na primeira vez
  useEffect(() => {
    if (initialized && degrees.length === 0) {
      fetchDegrees();
    }
  }, [initialized, degrees.length, fetchDegrees]);

  useEffect(() => {
    if (initialized && specialties.length === 0) {
      fetchSpecialties();
    }
  }, [initialized, specialties.length, fetchSpecialties]);

  // Valores computados
  const computedValues = useMemo(() => {
    const totalProfessors = professors.length;
    const hasResults = totalProfessors > 0;
    const isEmpty = !loading && !error && totalProfessors === 0;
    const isSearching = searchQuery && searchQuery.trim().length >= 2;
    const isFilteringByDegree = degree && degree !== 'todos';
    const isFilteringBySpecialty = specialty && specialty.trim().length > 0;

    // Distribuição por titulação
    const degreeDistribution = professors.reduce((acc, professor) => {
      const professorDegree = professor.degree || 'especialista';
      acc[professorDegree] = (acc[professorDegree] || 0) + 1;
      return acc;
    }, {});

    // Professores com publicações
    const withPublications = professors.filter(p =>
      p.publications && p.publications.length > 0
    ).length;

    return {
      totalProfessors,
      hasResults,
      isEmpty,
      isSearching,
      isFilteringByDegree,
      isFilteringBySpecialty,
      degreeDistribution,
      withPublications
    };
  }, [professors.length, loading, error, searchQuery, degree, specialty, professors]);

  // Estados de carregamento específicos
  const loadingStates = useMemo(() => ({
    isInitialLoad: loading && !initialized,
    isRefetching: loading && initialized,
    isSearching: loading && computedValues.isSearching,
    isFiltering: loading && (computedValues.isFilteringByDegree || computedValues.isFilteringBySpecialty)
  }), [loading, initialized, computedValues]);

  // Grupos de professores por titulação
  const professorGroups = useMemo(() => {
    if (!professors.length) return {};

    return professors.reduce((groups, professor) => {
      const professorDegree = professor.degree || 'especialista';
      if (!groups[professorDegree]) {
        groups[professorDegree] = [];
      }
      groups[professorDegree].push(professor);
      return groups;
    }, {});
  }, [professors]);

  console.log('🎣 useProfessors hook state:', {
    professorsCount: professors.length,
    loading,
    error: error ? error.substring(0, 50) : null,
    degree,
    specialty: specialty.substring(0, 20),
    searchQuery: searchQuery.substring(0, 20),
    ...computedValues
  });

  // Interface do hook
  return {
    // Dados principais
    professors,
    loading,
    error,
    initialized,

    // Dados auxiliares
    degrees,
    specialties,
    stats,

    // Grupos e distribuições
    professorGroups,

    // Estados computados
    ...computedValues,
    ...loadingStates,

    // Funções
    refetch,
    fetchDegrees,
    fetchSpecialties,
    fetchStats,
    findProfessor,
    filterByDegree,
    clearCacheAndRefetch,

    // Utilitários
    serviceInfo: {
      cacheInfo: professorService.getCacheInfo(),
      config: professorService.config
    }
  };
};

export default useProfessors;