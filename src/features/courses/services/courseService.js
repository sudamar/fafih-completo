/**
 * Course Service - Gerenciamento de Dados de Cursos FAFIH (Versão Simplificada)
 *
 * Funcionalidades:
 * - Acesso direto aos dados JSON
 * - Busca por slug/ID
 * - Filtros por categoria
 * - Busca textual
 * - Cache simples em memória
 */

// Importa dados diretamente do JSON
import coursesData from '../../../data/courses.json' assert { type: 'json' };

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
 * Classe principal do Course Service (Versão Simplificada)
 */
class CourseService {
  constructor() {
    this.data = coursesData;
    console.log(`📚 CourseService initialized with ${this.data?.length || 0} courses`);
    console.log(`📊 First course:`, this.data?.[0]?.title || 'No data');
  }

  /**
   * Busca todos os cursos
   * @param {Object} options - Opções de filtro e ordenação
   * @returns {Array} Lista de cursos
   */
  getAllCourses(options = {}) {
    const cacheKey = getCacheKey('getAllCourses', options);
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('📚 Getting all courses from JSON...');

    let courses = [...this.data];

    // Aplica filtros se especificados
    if (options.category && options.category !== 'all') {
      courses = courses.filter(course =>
        course.category === options.category ||
        course.categoryLabel === options.category
      );
    }

    // Aplica ordenação
    if (options.sortBy) {
      courses = this.sortCourses(courses, options.sortBy, options.sortOrder);
    }

    // Aplica paginação
    if (options.limit) {
      const start = (options.page - 1) * options.limit || 0;
      courses = courses.slice(start, start + options.limit);
    }

    setCachedData(cacheKey, courses);
    console.log(`✅ Returned ${courses.length} courses`);
    return courses;
  }

  /**
   * Busca curso por slug
   * @param {string} slug - Slug do curso
   * @returns {Object|null} Dados do curso ou null
   */
  getCourseBySlug(slug) {
    if (!slug) {
      throw new Error('Slug is required');
    }

    const cacheKey = getCacheKey('getCourseBySlug', { slug });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`📖 Getting course by slug: ${slug}`);

    const course = this.data.find(c =>
      c.slug === slug ||
      normalizeSlug(c.title) === normalizeSlug(slug)
    );

    if (course) {
      console.log(`✅ Found course: ${course.title}`);
      setCachedData(cacheKey, course);
      return course;
    }

    console.warn(`⚠️ Course not found: ${slug}`);
    return null;
  }

  /**
   * Busca curso por ID
   * @param {number|string} id - ID do curso
   * @returns {Object|null} Dados do curso ou null
   */
  getCourseById(id) {
    if (!id) {
      throw new Error('ID is required');
    }

    const cacheKey = getCacheKey('getCourseById', { id });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`🆔 Getting course by ID: ${id}`);

    const course = this.data.find(c => c.id === parseInt(id));

    if (course) {
      console.log(`✅ Found course: ${course.title}`);
      setCachedData(cacheKey, course);
      return course;
    }

    console.warn(`⚠️ Course not found with ID: ${id}`);
    return null;
  }

  /**
   * Busca cursos por categoria
   * @param {string} category - Categoria dos cursos
   * @returns {Array} Lista de cursos da categoria
   */
  getCoursesByCategory(category) {
    if (!category || category === 'all') {
      return this.getAllCourses();
    }

    const cacheKey = getCacheKey('getCoursesByCategory', { category });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`🏷️ Getting courses by category: ${category}`);

    const filteredCourses = this.data.filter(course =>
      course.category === category ||
      course.categoryLabel === category
    );

    setCachedData(cacheKey, filteredCourses);
    console.log(`✅ Found ${filteredCourses.length} courses in category ${category}`);
    return filteredCourses;
  }

  /**
   * Busca textual em cursos
   * @param {string} query - Termo de busca
   * @param {Object} options - Opções de busca
   * @returns {Array} Lista de cursos encontrados
   */
  searchCourses(query, options = {}) {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const searchQuery = query.trim().toLowerCase();
    const cacheKey = getCacheKey('searchCourses', { query: searchQuery, ...options });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`🔍 Searching courses: "${query}"`);

    const results = this.data.filter(course => {
      return (
        searchInText(course.title, searchQuery) ||
        searchInText(course.subtitle, searchQuery) ||
        searchInText(course.description, searchQuery) ||
        (course.fullDescription && course.fullDescription.some(desc =>
          searchInText(desc, searchQuery)
        )) ||
        searchInText(course.categoryLabel, searchQuery)
      );
    });

    setCachedData(cacheKey, results);
    console.log(`✅ Found ${results.length} courses for "${query}"`);
    return results;
  }

  /**
   * Ordena cursos
   * @param {Array} courses - Array de cursos
   * @param {string} sortBy - Campo para ordenar
   * @param {string} sortOrder - Ordem (asc/desc)
   * @returns {Array} Cursos ordenados
   */
  sortCourses(courses, sortBy = 'title', sortOrder = 'asc') {
    const sortedCourses = [...courses].sort((a, b) => {
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

    return sortedCourses;
  }

  /**
   * Obtém categorias disponíveis
   * @returns {Array} Lista de categorias
   */
  getCategories() {
    const cacheKey = getCacheKey('getCategories');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('🏷️ Getting course categories...');

    const categories = [...new Set(this.data.map(course => ({
      id: course.category,
      label: course.categoryLabel || course.category,
      count: this.data.filter(c => c.category === course.category).length
    })))];

    // Remove duplicatas baseadas no ID
    const uniqueCategories = categories.filter((category, index, self) =>
      index === self.findIndex(c => c.id === category.id)
    );

    setCachedData(cacheKey, uniqueCategories);
    console.log(`✅ Found ${uniqueCategories.length} categories`);
    return uniqueCategories;
  }

  /**
   * Obtém estatísticas dos cursos
   * @returns {Object} Estatísticas
   */
  getStats() {
    const cacheKey = getCacheKey('getStats');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('📊 Getting course stats...');

    const courses = this.data;
    const categories = this.getCategories();

    const stats = {
      totalCourses: courses.length,
      totalCategories: categories.length,
      averagePrice: courses.reduce((sum, course) => sum + (course.price || 0), 0) / courses.length,
      priceRange: {
        min: Math.min(...courses.map(c => c.price || 0)),
        max: Math.max(...courses.map(c => c.price || 0))
      },
      categoriesDistribution: categories
    };

    setCachedData(cacheKey, stats);
    console.log('✅ Generated course stats');
    return stats;
  }

  /**
   * Limpa cache
   */
  clearCache() {
    cache.clear();
    console.log('🗑️ Course cache cleared');
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
const courseService = new CourseService();

// Exporta a instância e métodos principais
export default courseService;

// Exporta métodos individuais para conveniência
export const {
  getAllCourses,
  getCourseBySlug,
  getCourseById,
  getCoursesByCategory,
  searchCourses,
  getCategories,
  getStats,
  clearCache,
  getCacheInfo
} = courseService;

console.log('📚 Course Service initialized (simplified version)');