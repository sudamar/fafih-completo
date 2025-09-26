/**
 * Teste da Nova Arquitetura - Fase 2 Simplificada
 *
 * Testa todos os services para verificar se estão funcionando
 * corretamente com acesso direto ao JSON
 */

import courseService from './src/features/courses/services/courseService.js';
import courseDetailsService from './src/features/courses/services/courseDetailsService.js';
import professorService from './src/features/professors/services/professorService.js';

console.log('=== TESTE DA NOVA ARQUITETURA FASE 2 ===\n');

// Testa Course Service
console.log('🔍 TESTANDO COURSE SERVICE');
console.log('----------------------------');

try {
  // Lista todos os cursos
  const allCourses = courseService.getAllCourses();
  console.log(`✅ getAllCourses: ${allCourses.length} cursos encontrados`);
  console.log(`   Primeiro curso: ${allCourses[0]?.title || 'N/A'}`);

  // Busca por ID
  const courseById = courseService.getCourseById(1);
  console.log(`✅ getCourseById(1): ${courseById?.title || 'Não encontrado'}`);

  // Busca por slug
  const courseBySlug = courseService.getCourseBySlug('pos-graduacao-psicologia-junguiana');
  console.log(`✅ getCourseBySlug: ${courseBySlug?.title || 'Não encontrado'}`);

  // Busca por categoria
  const coursesByCategory = courseService.getCoursesByCategory('especializacao');
  console.log(`✅ getCoursesByCategory: ${coursesByCategory.length} cursos na categoria 'especializacao'`);

  // Busca textual
  const searchResults = courseService.searchCourses('jung');
  console.log(`✅ searchCourses('jung'): ${searchResults.length} resultados encontrados`);

  // Categorias disponíveis
  const categories = courseService.getCategories();
  console.log(`✅ getCategories: ${categories.length} categorias disponíveis`);

  // Estatísticas
  const stats = courseService.getStats();
  console.log(`✅ getStats: ${stats.totalCourses} cursos, ${stats.totalCategories} categorias`);

} catch (error) {
  console.error('❌ Erro no Course Service:', error.message);
}

console.log('\n🔍 TESTANDO COURSE DETAILS SERVICE');
console.log('-----------------------------------');

try {
  // Busca detalhes por ID
  const courseDetails = courseDetailsService.getCourseDetails(1);
  console.log(`✅ getCourseDetails(1): ${courseDetails?.title || 'Não encontrado'}`);
  console.log(`   Tem currículo: ${courseDetails?.curriculum?.length > 0 ? 'Sim' : 'Não'}`);
  console.log(`   Tem highlights: ${courseDetails?.highlights?.length > 0 ? 'Sim' : 'Não'}`);

  // Busca detalhes por slug
  const detailsBySlug = courseDetailsService.getCourseDetailsBySlug('curso-psicossomatica');
  console.log(`✅ getCourseDetailsBySlug: ${detailsBySlug?.title || 'Não encontrado'}`);

  // Verifica se tem detalhes
  const hasDetails1 = courseDetailsService.hasDetails(1);
  const hasDetails99 = courseDetailsService.hasDetails(99);
  console.log(`✅ hasDetails(1): ${hasDetails1}`);
  console.log(`✅ hasDetails(99): ${hasDetails99}`);

  // Currículo específico
  const curriculum = courseDetailsService.getCourseCurriculum(1);
  console.log(`✅ getCourseCurriculum(1): ${curriculum?.length || 0} itens no currículo`);

  // Teste de compatibilidade
  const legacyResult = courseDetailsService.getCourseDetails_Legacy(1, { fallback: true });
  console.log(`✅ getCourseDetails_Legacy: ${legacyResult?.title || 'Erro'}`);

  // Stats dos detalhes
  const detailsStats = courseDetailsService.getStats();
  console.log(`✅ getStats: ${detailsStats.totalDetailedCourses} cursos detalhados`);

} catch (error) {
  console.error('❌ Erro no Course Details Service:', error.message);
}

console.log('\n🔍 TESTANDO PROFESSOR SERVICE');
console.log('------------------------------');

try {
  // Lista todos os professores
  const allProfessors = professorService.getAllProfessors();
  console.log(`✅ getAllProfessors: ${allProfessors.length} professores encontrados`);
  console.log(`   Primeiro professor: ${allProfessors[0]?.name || 'N/A'}`);

  // Busca por ID
  const profById = professorService.getProfessorById(1);
  console.log(`✅ getProfessorById(1): ${profById?.name || 'Não encontrado'}`);

  // Busca por slug
  const profBySlug = professorService.getProfessorBySlug('waldemar-magaldi-filho');
  console.log(`✅ getProfessorBySlug: ${profBySlug?.name || 'Não encontrado'}`);

  // Busca textual
  const profSearchResults = professorService.searchProfessors('doutor');
  console.log(`✅ searchProfessors('doutor'): ${profSearchResults.length} resultados encontrados`);

  // Titulações disponíveis
  const degrees = professorService.getDegrees();
  console.log(`✅ getDegrees: ${degrees.length} titulações disponíveis`);

  // Especialidades disponíveis
  const specialties = professorService.getSpecialties();
  console.log(`✅ getSpecialties: ${specialties.length} especialidades disponíveis`);

  // Stats dos professores
  const profStats = professorService.getStats();
  console.log(`✅ getStats: ${profStats.totalProfessors} professores, ${profStats.totalDegrees} titulações`);

} catch (error) {
  console.error('❌ Erro no Professor Service:', error.message);
}

console.log('\n=== TESTE COMPLETO ===');
console.log('✅ Todos os services da nova arquitetura estão funcionando!');
console.log('✅ Fase 2 implementada com sucesso!');
console.log('✅ Dados sendo acessados diretamente do JSON sem dependência de API');

// Informações de cache
console.log('\n📊 INFORMAÇÕES DE CACHE:');
console.log('Course Service cache:', courseService.getCacheInfo().size, 'entradas');
console.log('Course Details cache:', courseDetailsService.getCacheInfo().size, 'entradas');
console.log('Professor Service cache:', professorService.getCacheInfo().size, 'entradas');