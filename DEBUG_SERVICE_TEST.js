// Debug temporário para testar service
import courseService from './src/features/courses/services/courseService.js';

console.log('=== TESTE MANUAL DO COURSE SERVICE ===');
console.log('Dados carregados:', courseService.data?.length || 0);
console.log('Primeiro curso:', courseService.data?.[0]?.id, courseService.data?.[0]?.title);

// Testa busca por ID
const testById = async () => {
  try {
    console.log('\n=== TESTE getCourseById("1") ===');
    const result1 = await courseService.getCourseById('1');
    console.log('Resultado string "1":', result1?.title || 'Não encontrado');

    console.log('\n=== TESTE getCourseById(1) ===');
    const result2 = await courseService.getCourseById(1);
    console.log('Resultado number 1:', result2?.title || 'Não encontrado');

    console.log('\n=== TESTE getCourseBySlug ===');
    const result3 = await courseService.getCourseBySlug('pos-graduacao-psicologia-junguiana');
    console.log('Resultado slug:', result3?.title || 'Não encontrado');
  } catch (error) {
    console.error('Erro no teste:', error);
  }
};

testById();