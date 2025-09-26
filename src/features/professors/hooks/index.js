/**
 * Professor Hooks - Barrel Export
 *
 * Centraliza exportações de todos os hooks relacionados a professores
 */

export { default as useProfessors, useProfessors } from './useProfessors.js';
export { default as useProfessor, useProfessor } from './useProfessor.js';

// Exportações nomeadas para conveniência
export {
  useProfessors as useProfessorsHook,
  useProfessor as useProfessorHook
} from './useProfessors.js';

console.log('👨‍🏫 Professor hooks exported');