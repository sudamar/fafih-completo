# 🔍 Debug para Curso não Encontrado

## Problema
O erro "Curso '1' não está disponível" indica que o hook `useCourse` não está encontrando o curso.

## Diagnóstico Adicionado

1. **Logs no componente** para verificar parâmetros
2. **Logs no service** para verificar dados disponíveis
3. **Forçar tipo de identificador** para evitar confusão slug/id

## Possíveis Causas

### 1. **Dados JSON não carregados**
- Import do JSON pode estar falhando
- CourseService pode não estar inicializando corretamente

### 2. **Problema na lógica de identificação**
- Hook pode estar interpretando "1" como slug em vez de ID
- Regex de detecção pode estar incorreta

### 3. **Cache ou Estado**
- Cache pode estar retornando null
- Estado inicial do hook pode estar incorreto

## Próximos Passos

Se os logs não resolverem, posso:

1. **Testar manualmente** o courseService no console
2. **Criar componente de debug** que lista todos os cursos
3. **Simplificar temporariamente** a busca sem cache
4. **Forçar fallback direto** para dados JSON

## Teste Manual

No console do browser:
```javascript
import courseService from './src/features/courses/services/courseService.js';
console.log(await courseService.getCourseById('1'));
```