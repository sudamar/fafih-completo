/**
 * Course Details Service - Dados Detalhados dos Cursos FAFIH
 *
 * Funcionalidades:
 * - Acesso direto aos dados detalhados dos cursos
 * - Cache simples em memória
 * - Busca por ID/slug com dados completos
 * - Compatibilidade com courseDetailsData.js original
 */

// Importa dados detalhados diretamente do JSON
import courseDetailsData from '@/data/courseDetails.json' assert { type: 'json' };

/**
 * Cache simples em memória
 */
const cache = new Map();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos (dados mais estáticos)

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

  console.log(`💾 CourseDetails Cache hit: ${key}`);
  return data;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
  console.log(`💾 CourseDetails Cache set: ${key}`);
};

/**
 * Classe principal do Course Details Service
 */
class CourseDetailsService {
  constructor() {
    this.data = courseDetailsData;

    // Cria um mapa por ID para compatibilidade com o sistema antigo
    this.dataMap = {};
    this.data.forEach(course => {
      this.dataMap[course.id] = course;
      this.dataMap[String(course.id)] = course; // Suporte a string IDs
    });

    console.log(`📋 CourseDetailsService initialized with ${this.data?.length || 0} detailed courses`);
    console.log(`📊 First course:`, this.data?.[0]?.title || 'No data');
  }

  /**
   * Busca curso detalhado por ID
   * @param {number|string} id - ID do curso
   * @returns {Object|null} Dados detalhados do curso ou null
   */
  getCourseDetails(id) {
    if (!id) {
      console.warn('⚠️ CourseDetailsService: ID is required');
      return null;
    }

    const cacheKey = getCacheKey('getCourseDetails', { id });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`📋 Getting detailed course by ID: ${id}`);

    // Busca no mapa (compatibilidade com sistema antigo)
    const course = this.dataMap[id] || this.dataMap[String(id)];

    if (course) {
      console.log(`✅ Found detailed course: ${course.title}`);
      setCachedData(cacheKey, course);
      return course;
    }

    console.warn(`⚠️ Detailed course not found with ID: ${id}`);
    return null;
  }

  /**
   * Busca curso detalhado por slug
   * @param {string} slug - Slug do curso
   * @returns {Object|null} Dados detalhados do curso ou null
   */
  getCourseDetailsBySlug(slug) {
    if (!slug) {
      console.warn('⚠️ CourseDetailsService: Slug is required');
      return null;
    }

    const cacheKey = getCacheKey('getCourseDetailsBySlug', { slug });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`📋 Getting detailed course by slug: ${slug}`);

    const course = this.data.find(c => c.slug === slug);

    if (course) {
      console.log(`✅ Found detailed course: ${course.title}`);
      setCachedData(cacheKey, course);
      return course;
    }

    console.warn(`⚠️ Detailed course not found with slug: ${slug}`);
    return null;
  }

  /**
   * Busca todos os cursos detalhados
   * @returns {Array} Lista de todos os cursos detalhados
   */
  getAllCourseDetails() {
    const cacheKey = getCacheKey('getAllCourseDetails');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('📋 Getting all detailed courses...');

    const courses = [...this.data];
    setCachedData(cacheKey, courses);
    console.log(`✅ Returned ${courses.length} detailed courses`);
    return courses;
  }

  /**
   * Busca cursos detalhados por categoria
   * @param {string} category - Categoria dos cursos
   * @returns {Array} Lista de cursos detalhados da categoria
   */
  getCourseDetailsByCategory(category) {
    if (!category || category === 'all') {
      return this.getAllCourseDetails();
    }

    const cacheKey = getCacheKey('getCourseDetailsByCategory', { category });
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log(`📋 Getting detailed courses by category: ${category}`);

    const filteredCourses = this.data.filter(course =>
      course.category === category ||
      course.categoryLabel === category
    );

    setCachedData(cacheKey, filteredCourses);
    console.log(`✅ Found ${filteredCourses.length} detailed courses in category ${category}`);
    return filteredCourses;
  }

  /**
   * Verifica se um curso tem dados detalhados disponíveis
   * @param {number|string} id - ID do curso
   * @returns {boolean} True se possui dados detalhados
   */
  hasDetails(id) {
    return Boolean(this.dataMap[id] || this.dataMap[String(id)]);
  }

  /**
   * Obtém apenas o currículo de um curso
   * @param {number|string} id - ID do curso
   * @returns {Array|null} Currículo do curso ou null
   */
  getCourseCurriculum(id) {
    const course = this.getCourseDetails(id);
    return course?.curriculum || null;
  }

  /**
   * Obtém apenas os highlights de um curso
   * @param {number|string} id - ID do curso
   * @returns {Array|null} Highlights do curso ou null
   */
  getCourseHighlights(id) {
    const course = this.getCourseDetails(id);
    return course?.highlights || null;
  }

  /**
   * Obtém informações de contato de um curso
   * @param {number|string} id - ID do curso
   * @returns {Object|null} Dados de contato ou null
   */
  getCourseContact(id) {
    const course = this.getCourseDetails(id);
    return course?.contact || null;
  }

  /**
   * Função de compatibilidade com o sistema antigo
   * @param {number|string} courseId - ID do curso
   * @param {Object} options - Opções (fallback, etc.)
   * @returns {Object|null} Dados do curso
   */
  getCourseDetails_Legacy(courseId, options = {}) {
    console.log(`🔄 Legacy compatibility call for course ID: ${courseId}`);

    const result = this.getCourseDetails(courseId);

    if (!result && options.fallback) {
      console.log(`🔄 Using fallback for course ID: ${courseId}`);
      return options.fallback;
    }

    return result;
  }

  /**
   * Obtém estatísticas dos dados detalhados
   * @returns {Object} Estatísticas
   */
  getStats() {
    const cacheKey = getCacheKey('getStats');
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    console.log('📊 Getting detailed courses stats...');

    const courses = this.data;
    const totalCurriculum = courses.reduce((sum, course) => sum + (course.curriculum?.length || 0), 0);
    const totalHighlights = courses.reduce((sum, course) => sum + (course.highlights?.length || 0), 0);

    const stats = {
      totalDetailedCourses: courses.length,
      averageCurriculumItems: totalCurriculum / courses.length,
      averageHighlights: totalHighlights / courses.length,
      coursesWithVideo: courses.filter(c => c.hero?.type === 'video').length,
      coursesWithCurriculum: courses.filter(c => c.curriculum?.length > 0).length,
      coursesWithHighlights: courses.filter(c => c.highlights?.length > 0).length
    };

    setCachedData(cacheKey, stats);
    console.log('✅ Generated detailed courses stats');
    return stats;
  }

  /**
   * Limpa cache
   */
  clearCache() {
    cache.clear();
    console.log('🗑️ CourseDetails cache cleared');
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
const courseDetailsService = new CourseDetailsService();

// Exporta a instância e métodos principais
export default courseDetailsService;

// Exporta métodos individuais para conveniência
export const {
  getCourseDetails,
  getCourseDetailsBySlug,
  getAllCourseDetails,
  getCourseDetailsByCategory,
  hasDetails,
  getCourseCurriculum,
  getCourseHighlights,
  getCourseContact,
  getStats,
  clearCache,
  getCacheInfo
} = courseDetailsService;

// Função de compatibilidade com o sistema antigo (exportação nomeada)
export const getCourseDetails_Legacy = courseDetailsService.getCourseDetails_Legacy.bind(courseDetailsService);

console.log('📋 CourseDetails Service initialized (simplified version)');