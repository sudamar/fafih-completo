/**
 * Endpoints Configuration - FAFIH API
 *
 * Centraliza todas as URLs e configurações de endpoints da API.
 * Facilita manutenção e mudanças futuras de rotas.
 */

/**
 * URLs base para diferentes ambientes
 */
const BASE_URLS = {
  development: 'http://localhost:3001/api',
  staging: 'https://staging-api.fafih.edu.br/api',
  production: 'https://api.fafih.edu.br/api'
};

/**
 * Ambiente atual (baseado em variáveis de ambiente)
 */
const ENVIRONMENT = import.meta.env.MODE || 'development';

/**
 * URL base atual
 */
export const BASE_URL = import.meta.env.VITE_API_BASE_URL || BASE_URLS[ENVIRONMENT];

/**
 * Endpoints de Cursos
 */
export const COURSE_ENDPOINTS = {
  // Listagem e busca
  LIST: '/courses',
  SEARCH: '/courses/search',
  BY_CATEGORY: '/courses/category',

  // Curso específico
  BY_ID: (id) => `/courses/${id}`,
  BY_SLUG: (slug) => `/courses/slug/${slug}`,

  // Dados relacionados
  TESTIMONIALS: (courseId) => `/courses/${courseId}/testimonials`,
  CURRICULUM: (courseId) => `/courses/${courseId}/curriculum`,
  FACULTY: (courseId) => `/courses/${courseId}/faculty`,

  // Estatísticas
  STATS: '/courses/stats',
  POPULAR: '/courses/popular'
};

/**
 * Endpoints de Professores
 */
export const PROFESSOR_ENDPOINTS = {
  // Listagem e busca
  LIST: '/professors',
  SEARCH: '/professors/search',
  BY_CATEGORY: '/professors/category',
  BY_DEGREE: '/professors/degree',

  // Professor específico
  BY_ID: (id) => `/professors/${id}`,
  BY_SLUG: (slug) => `/professors/slug/${slug}`,

  // Dados relacionados
  PUBLICATIONS: (professorId) => `/professors/${professorId}/publications`,
  COURSES: (professorId) => `/professors/${professorId}/courses`,
  RESEARCH: (professorId) => `/professors/${professorId}/research`,

  // Estatísticas
  STATS: '/professors/stats'
};

/**
 * Endpoints de Autenticação (futuro)
 */
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  REGISTER: '/auth/register',
  PROFILE: '/auth/profile',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password'
};

/**
 * Endpoints de Recursos Gerais
 */
export const RESOURCE_ENDPOINTS = {
  // Uploads
  UPLOAD: '/upload',
  UPLOAD_IMAGE: '/upload/image',
  UPLOAD_DOCUMENT: '/upload/document',

  // Configurações
  SETTINGS: '/settings',
  CATEGORIES: '/categories',
  TAGS: '/tags',

  // Estatísticas gerais
  DASHBOARD: '/dashboard',
  ANALYTICS: '/analytics'
};

/**
 * Endpoints de Contato e Formulários
 */
export const FORM_ENDPOINTS = {
  CONTACT: '/forms/contact',
  ENROLLMENT: '/forms/enrollment',
  NEWSLETTER: '/forms/newsletter',
  FEEDBACK: '/forms/feedback'
};

/**
 * Endpoints de Notícias e Conteúdo
 */
export const CONTENT_ENDPOINTS = {
  NEWS: '/news',
  NEWS_BY_ID: (id) => `/news/${id}`,
  NEWS_BY_SLUG: (slug) => `/news/slug/${slug}`,

  EVENTS: '/events',
  EVENTS_BY_ID: (id) => `/events/${id}`,

  PAGES: '/pages',
  PAGES_BY_SLUG: (slug) => `/pages/${slug}`
};

/**
 * Helper para construir URLs com parâmetros
 */
export const buildUrl = (endpoint, params = {}) => {
  let url = endpoint;

  // Substitui parâmetros de rota (ex: /courses/:id)
  Object.entries(params).forEach(([key, value]) => {
    url = url.replace(`:${key}`, encodeURIComponent(value));
  });

  return url;
};

/**
 * Helper para construir query string
 */
export const buildQuery = (params = {}) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, item));
      } else {
        searchParams.append(key, value);
      }
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : '';
};

/**
 * Helper para URLs completas
 */
export const getFullUrl = (endpoint, params = {}, query = {}) => {
  const baseUrl = BASE_URL.replace(/\/$/, '');
  const url = buildUrl(endpoint, params);
  const queryString = buildQuery(query);

  return `${baseUrl}${url}${queryString}`;
};

/**
 * Configurações específicas por endpoint
 */
export const ENDPOINT_CONFIG = {
  // Timeouts específicos (em ms)
  TIMEOUTS: {
    [COURSE_ENDPOINTS.LIST]: 5000,
    [PROFESSOR_ENDPOINTS.LIST]: 5000,
    [COURSE_ENDPOINTS.BY_SLUG('')]: 3000,
    [PROFESSOR_ENDPOINTS.BY_SLUG('')]: 3000,
    [FORM_ENDPOINTS.CONTACT]: 10000
  },

  // Cache TTL (em ms)
  CACHE_TTL: {
    [COURSE_ENDPOINTS.LIST]: 5 * 60 * 1000, // 5 minutos
    [PROFESSOR_ENDPOINTS.LIST]: 10 * 60 * 1000, // 10 minutos
    [COURSE_ENDPOINTS.BY_SLUG('')]: 30 * 60 * 1000, // 30 minutos
    [RESOURCE_ENDPOINTS.CATEGORIES]: 60 * 60 * 1000 // 1 hora
  },

  // Retry attempts por endpoint
  RETRY_ATTEMPTS: {
    [FORM_ENDPOINTS.CONTACT]: 5, // Formulários são críticos
    [AUTH_ENDPOINTS.LOGIN]: 3,
    DEFAULT: 2
  }
};

/**
 * Status e health check
 */
export const HEALTH_ENDPOINTS = {
  STATUS: '/health',
  VERSION: '/version',
  METRICS: '/metrics'
};

/**
 * URLs de desenvolvimento para mock
 */
export const MOCK_ENDPOINTS = {
  COURSES: '/mock/courses.json',
  PROFESSORS: '/mock/professors.json',
  TESTIMONIALS: '/mock/testimonials.json'
};

/**
 * Exporta todas as categorias de endpoints
 */
export default {
  BASE_URL,
  COURSE_ENDPOINTS,
  PROFESSOR_ENDPOINTS,
  AUTH_ENDPOINTS,
  RESOURCE_ENDPOINTS,
  FORM_ENDPOINTS,
  CONTENT_ENDPOINTS,
  HEALTH_ENDPOINTS,
  MOCK_ENDPOINTS,
  ENDPOINT_CONFIG,
  buildUrl,
  buildQuery,
  getFullUrl
};

/**
 * Log da configuração atual (apenas em desenvolvimento)
 */
if (ENVIRONMENT === 'development') {
  console.log('📡 Endpoints configured:', {
    environment: ENVIRONMENT,
    baseUrl: BASE_URL,
    courses: Object.keys(COURSE_ENDPOINTS).length,
    professors: Object.keys(PROFESSOR_ENDPOINTS).length,
    totalEndpoints: Object.keys({
      ...COURSE_ENDPOINTS,
      ...PROFESSOR_ENDPOINTS,
      ...AUTH_ENDPOINTS,
      ...RESOURCE_ENDPOINTS
    }).length
  });
}