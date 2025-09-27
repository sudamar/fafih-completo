/**
 * Professor Service - Gerenciamento de Dados de Professores FAFIH (Versão Simplificada)
 *
 * Funcionalidades:
 * - Acesso direto aos dados JSON
 * - Busca por slug/ID
 * - Filtros por titulação/categoria
 * - Busca textual
 * - Cache simples em memória
 */

// Importa dados diretamente do JSON
import professorsData from '@/data/professors.json';

/**
 * Cache simples em memória
 */
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

/**
 * Utilitários de cache
 */
const getCacheKey = (method, params = {}) => {
  return `${method}_${JSON.stringify(params)}`;
};

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (!cached) return null;

  const { data, timestamp } = cached;
  const isExpired = Date.now() - timestamp > CACHE_TTL;

  if (isExpired) {
    cache.delete(key);
    return null;
  }

  console.log(`💾 Cache hit: ${key}`);
  return data;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
  console.log(`💾 Cache set: ${key}`);
};

/**
 * Utilitários de dados
 */
const normalizeSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const searchInText = (text, query) => {
  if (!text || !query) return false;
  return text.toLowerCase().includes(query.toLowerCase());
};

/**
 * Classe principal do Professor Service (Versão Simplificada)
 */
class ProfessorService {
  constructor() {
    this.data = professorsData;
    console.log(`👨‍🏫 ProfessorService initialized with ${this.data?.length || 0} professors`);
    console.log(`📊 First professor:`, this.data?.[0]?.name || 'No data');
  }

  /**
   * Busca todos os professores
   * @param {Object} options - Opções de filtro e ordenação
   * @returns {Array} Lista de professores
   */
  getAllProfessors(options = {}) {
    const cacheKey = getCacheKey('getAllProfessors', options);
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('👨‍🏫 Getting all professors from JSON...');

    let professors = [...this.data];

    // Aplica filtros se especificados
    if (options.degree && options.degree !== 'all') {
      professors = professors.filter(prof =>
        prof.degree === options.degree ||
        prof.degreeLabel === options.degree
      );
    }

    if (options.specialty && options.specialty !== 'all') {
      professors = professors.filter(prof =>
        prof.specialty === options.specialty ||
        prof.specialties?.includes(options.specialty)
      );
    }

    // Aplica ordenação
    if (options.sortBy) {
      professors = this.sortProfessors(professors, options.sortBy, options.sortOrder);
    }

    // Aplica paginação
    if (options.limit) {
      const start = (options.page - 1) * options.limit || 0;
      professors = professors.slice(start, start + options.limit);
    }

    setCachedData(cacheKey, professors);
    console.log(`✅ Returned ${professors.length} professors`);
    return professors;
  }

  /**
   * Busca professor por slug
   * @param {string} slug - Slug do professor
   * @returns {Object|null} Dados do professor ou null
   */
  getProfessorBySlug(slug) {
    if (!slug) {
      throw new Error('Slug is required');
    }

    const cacheKey = getCacheKey('getProfessorBySlug', { slug });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`📖 Getting professor by slug: ${slug}`);

    const professor = this.data.find(p =>
      p.slug === slug ||
      normalizeSlug(p.name) === normalizeSlug(slug)
    );

    if (professor) {
      console.log(`✅ Found professor: ${professor.name}`);
      setCachedData(cacheKey, professor);
      return professor;
    }

    console.warn(`⚠️ Professor not found: ${slug}`);
    return null;
  }

  /**
   * Busca professor por ID
   * @param {number|string} id - ID do professor
   * @returns {Object|null} Dados do professor ou null
   */
  getProfessorById(id) {
    if (!id) {
      throw new Error('ID is required');
    }

    const cacheKey = getCacheKey('getProfessorById', { id });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`🆔 Getting professor by ID: ${id}`);

    const professor = this.data.find(p => p.id === parseInt(id));

    if (professor) {
      console.log(`✅ Found professor: ${professor.name}`);
      setCachedData(cacheKey, professor);
      return professor;
    }

    console.warn(`⚠️ Professor not found with ID: ${id}`);
    return null;
  }

  /**
   * Busca professores por titulação
   * @param {string} degree - Titulação dos professores
   * @returns {Array} Lista de professores da titulação
   */
  getProfessorsByDegree(degree) {
    if (!degree || degree === 'all') {
      return this.getAllProfessors();
    }

    const cacheKey = getCacheKey('getProfessorsByDegree', { degree });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`🎓 Getting professors by degree: ${degree}`);

    const filteredProfessors = this.data.filter(professor =>
      professor.degree === degree ||
      professor.degreeLabel === degree
    );

    setCachedData(cacheKey, filteredProfessors);
    console.log(`✅ Found ${filteredProfessors.length} professors with degree ${degree}`);
    return filteredProfessors;
  }

  /**
   * Busca textual em professores
   * @param {string} query - Termo de busca
   * @param {Object} options - Opções de busca
   * @returns {Array} Lista de professores encontrados
   */
  searchProfessors(query, options = {}) {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const searchQuery = query.trim().toLowerCase();
    const cacheKey = getCacheKey('searchProfessors', { query: searchQuery, ...options });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`🔍 Searching professors: "${query}"`);

    const results = this.data.filter(professor => {
      return (
        searchInText(professor.name, searchQuery) ||
        searchInText(professor.bio, searchQuery) ||
        searchInText(professor.specialty, searchQuery) ||
        searchInText(professor.degreeLabel, searchQuery) ||
        (professor.specialties && professor.specialties.some(spec =>
          searchInText(spec, searchQuery)
        )) ||
        (professor.qualifications && professor.qualifications.some(qual =>
          searchInText(qual, searchQuery)
        ))
      );
    });

    setCachedData(cacheKey, results);
    console.log(`✅ Found ${results.length} professors for "${query}"`);
    return results;
  }

  /**
   * Ordena professores
   * @param {Array} professors - Array de professores
   * @param {string} sortBy - Campo para ordenar
   * @param {string} sortOrder - Ordem (asc/desc)
   * @returns {Array} Professores ordenados
   */
  sortProfessors(professors, sortBy = 'name', sortOrder = 'asc') {
    const sortedProfessors = [...professors].sort((a, b) => {
      let valueA = a[sortBy];
      let valueB = b[sortBy];

      // Handle different data types
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortedProfessors;
  }

  /**
   * Obtém titulações disponíveis
   * @returns {Array} Lista de titulações
   */
  getDegrees() {
    const cacheKey = getCacheKey('getDegrees');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('🎓 Getting professor degrees...');

    const degrees = [...new Set(this.data.map(professor => ({
      id: professor.degree,
      label: professor.degreeLabel || professor.degree,
      count: this.data.filter(p => p.degree === professor.degree).length
    })))];

    // Remove duplicatas baseadas no ID
    const uniqueDegrees = degrees.filter((degree, index, self) =>
      index === self.findIndex(d => d.id === degree.id)
    );

    setCachedData(cacheKey, uniqueDegrees);
    console.log(`✅ Found ${uniqueDegrees.length} degrees`);
    return uniqueDegrees;
  }

  /**
   * Obtém especialidades disponíveis
   * @returns {Array} Lista de especialidades
   */
  getSpecialties() {
    const cacheKey = getCacheKey('getSpecialties');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('📚 Getting professor specialties...');

    const allSpecialties = [];
    this.data.forEach(professor => {
      if (professor.specialty) {
        allSpecialties.push(professor.specialty);
      }
      if (professor.specialties) {
        allSpecialties.push(...professor.specialties);
      }
    });

    const specialties = [...new Set(allSpecialties)].map(spec => ({
      id: spec,
      label: spec,
      count: allSpecialties.filter(s => s === spec).length
    }));

    setCachedData(cacheKey, specialties);
    console.log(`✅ Found ${specialties.length} specialties`);
    return specialties;
  }

  /**
   * Obtém estatísticas dos professores
   * @returns {Object} Estatísticas
   */
  getStats() {
    const cacheKey = getCacheKey('getStats');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('📊 Getting professor stats...');

    const professors = this.data;
    const degrees = this.getDegrees();
    const specialties = this.getSpecialties();

    const stats = {
      totalProfessors: professors.length,
      totalDegrees: degrees.length,
      totalSpecialties: specialties.length,
      avgPublications: professors.reduce((sum, prof) => sum + (prof.publications?.length || 0), 0) / professors.length,
      degreesDistribution: degrees,
      specialtiesDistribution: specialties
    };

    setCachedData(cacheKey, stats);
    console.log('✅ Generated professor stats');
    return stats;
  }

  /**
   * Limpa cache
   */
  clearCache() {
    cache.clear();
    console.log('🗑️ Professor cache cleared');
  }

  /**
   * Obtém informações do cache
   */
  getCacheInfo() {
    return {
      size: cache.size,
      keys: Array.from(cache.keys()),
      sizeInMB: JSON.stringify(Array.from(cache.entries())).length / 1024 / 1024
    };
  }
}

// Instância singleton
const professorService = new ProfessorService();

// Exporta a instância e métodos principais
export default professorService;

// Exporta métodos individuais para conveniência
export const {
  getAllProfessors,
  getProfessorBySlug,
  getProfessorById,
  getProfessorsByDegree,
  searchProfessors,
  getDegrees,
  getSpecialties,
  getStats,
  clearCache,
  getCacheInfo
} = professorService;

console.log('👨‍🏫 Professor Service initialized (simplified version)');