# 🚀 FASE 2 - Camada de Serviços e Hooks

## 📋 Visão Geral da Fase 2

A **Fase 2** focará na implementação da camada de abstração de dados, criando uma infraestrutura robusta para gerenciamento de estado e preparação para APIs futuras. Esta fase estabelece as bases para que as páginas possam consumir dados de forma consistente e escalável.

---

## 🎯 Objetivos Principais

### ✅ **1. Services Layer**
- Implementar cliente HTTP centralizado
- Criar serviços específicos por domínio (cursos, professores)
- Configurar fallback para dados estáticos (JSON)
- Preparar infraestrutura para APIs futuras

### ✅ **2. Custom Hooks**
- Desenvolver hooks para gerenciamento de estado
- Implementar loading, error e data states
- Criar hooks reutilizáveis por domínio
- Estabelecer padrões de consumo de dados

### ✅ **3. Error Handling**
- Implementar tratamento de erros centralizado
- Criar Error Boundaries
- Definir fallbacks e mensagens de erro
- Preparar sistema de notificações

---

## 📅 Cronograma Detalhado (2 Semanas)

### **Semana 3 - Infraestrutura de Serviços**

#### **Dia 1-2: API Client e Endpoints**
- [ ] Implementar `services/apiClient.js`
- [ ] Criar `services/endpoints.js`
- [ ] Configurar interceptors e headers
- [ ] Implementar retry logic

#### **Dia 3-4: Services por Domínio**
- [ ] Criar `features/courses/services/courseService.js`
- [ ] Implementar `features/professors/services/professorService.js`
- [ ] Configurar fallback para dados JSON
- [ ] Implementar cache básico

#### **Dia 5: Error Handling**
- [ ] Criar `services/errorHandler.js`
- [ ] Implementar Error Boundaries
- [ ] Definir tipos de erro e mensagens
- [ ] Configurar logging de erros

### **Semana 4 - Custom Hooks e Integração**

#### **Dia 1-2: Hooks de Cursos**
- [ ] Implementar `useCourses()` para listagem
- [ ] Criar `useCourse(slug)` para detalhes
- [ ] Adicionar filtering e searching
- [ ] Implementar estados de loading/error

#### **Dia 3-4: Hooks de Professores**
- [ ] Implementar `useProfessors()` para listagem
- [ ] Criar `useProfessor(slug)` para detalhes
- [ ] Adicionar filtros por categoria
- [ ] Integrar com dados de publicações

#### **Dia 5: Hooks Utilitários**
- [ ] Criar `useApi()` genérico
- [ ] Implementar `useLocalStorage()`
- [ ] Desenvolver `useDebounce()`
- [ ] Criar `useAsync()` para operações assíncronas

---

## 🏗️ Arquitetura da Fase 2

### **1. Services Layer**

```
src/services/
├── apiClient.js          # Cliente HTTP centralizado
├── endpoints.js          # URLs e configurações
├── errorHandler.js       # Tratamento global de erros
└── cache.js              # Sistema de cache simples
```

### **2. Feature Services**

```
src/features/
├── courses/
│   ├── services/
│   │   └── courseService.js
│   ├── hooks/
│   │   ├── useCourses.js
│   │   └── useCourse.js
│   └── types/
│       └── course.types.js
└── professors/
    ├── services/
    │   └── professorService.js
    ├── hooks/
    │   ├── useProfessors.js
    │   └── useProfessor.js
    └── types/
        └── professor.types.js
```

### **3. Global Hooks**

```
src/hooks/
├── useApi.js             # Hook genérico para APIs
├── useLocalStorage.js    # Persistência local
├── useDebounce.js        # Debounce para buscas
└── useAsync.js           # Operações assíncronas
```

---

## 📋 Tarefas Detalhadas

### 🔷 **TAREFA 1: API Client**

#### **Arquivo: `src/services/apiClient.js`**

**Funcionalidades:**
- Cliente HTTP baseado em fetch
- Interceptors para request/response
- Tratamento automático de erros
- Configuração de headers
- Retry automático
- Timeout configurável

**Interface:**
```javascript
const apiClient = {
  get: (url, options) => Promise,
  post: (url, data, options) => Promise,
  put: (url, data, options) => Promise,
  delete: (url, options) => Promise
};
```

#### **Arquivo: `src/services/endpoints.js`**

**Funcionalidades:**
- URLs centralizadas
- Environment-based configuration
- Path builders
- Query string helpers

---

### 🔷 **TAREFA 2: Course Services**

#### **Arquivo: `src/features/courses/services/courseService.js`**

**Funcionalidades:**
- `getAllCourses()` - Lista todos os cursos
- `getCourseBySlug(slug)` - Busca curso por slug
- `getCoursesByCategory(category)` - Filtra por categoria
- `searchCourses(query)` - Busca textual
- Fallback automático para JSON estático

#### **Arquivo: `src/features/courses/hooks/useCourses.js`**

**Interface:**
```javascript
const {
  courses,
  loading,
  error,
  refetch,
  searchCourses,
  filterByCategory
} = useCourses(options);
```

#### **Arquivo: `src/features/courses/hooks/useCourse.js`**

**Interface:**
```javascript
const {
  course,
  loading,
  error,
  refetch
} = useCourse(slug);
```

---

### 🔷 **TAREFA 3: Professor Services**

#### **Arquivo: `src/features/professors/services/professorService.js`**

**Funcionalidades:**
- `getAllProfessors()` - Lista todos os professores
- `getProfessorBySlug(slug)` - Busca professor por slug
- `getProfessorsByCategory(category)` - Filtra por titulação
- `getProfessorPublications(slug)` - Busca publicações
- Integração com dados JSON existentes

#### **Hooks Correspondentes:**
- `useProfessors()` - Listagem com filtros
- `useProfessor(slug)` - Detalhes individuais

---

### 🔷 **TAREFA 4: Error Handling**

#### **Arquivo: `src/services/errorHandler.js`**

**Funcionalidades:**
- Classificação de tipos de erro
- Mensagens de erro padronizadas
- Logging centralizado
- Retry policies
- Fallback strategies

#### **Error Boundaries:**
- `CourseErrorBoundary` - Para páginas de curso
- `ProfessorErrorBoundary` - Para páginas de professor
- `GlobalErrorBoundary` - Para erros gerais

---

## 🔧 Implementação Técnica

### **1. Estado dos Hooks**

Todos os hooks terão a seguinte estrutura de estado:

```javascript
{
  data: null | Array | Object,
  loading: boolean,
  error: null | Error,
  refetch: () => void,
  // Estados específicos conforme necessário
}
```

### **2. Cache Strategy**

- **In-memory cache** para dados estáticos
- **TTL configurável** por tipo de dado
- **Invalidação manual** quando necessário
- **Background refetch** para dados críticos

### **3. Fallback Chain**

1. **API remota** (quando disponível)
2. **Cache local** (se válido)
3. **Dados JSON estáticos** (fallback seguro)
4. **Estado de erro** (último recurso)

---

## 📊 Critérios de Sucesso

### **Métricas Técnicas:**
- ✅ **100% dos dados** consumidos via hooks
- ✅ **<500ms** tempo de resposta para dados locais
- ✅ **Zero quebras** durante fallbacks
- ✅ **Error boundaries** capturando todos os erros

### **Métricas de Qualidade:**
- ✅ **TypeScript ready** - JSDoc completo
- ✅ **Testing ready** - Hooks testáveis
- ✅ **API ready** - Fácil migração para APIs
- ✅ **Developer Experience** - IntelliSense funcional

---

## 🧪 Testes Planejados

### **1. Unit Tests**
- Services retornam dados corretos
- Hooks gerenciam estado adequadamente
- Error handling funciona conforme esperado

### **2. Integration Tests**
- Fallbacks funcionam corretamente
- Cache invalida quando necessário
- Error boundaries capturam erros

### **3. E2E Tests**
- Páginas carregam dados via hooks
- Filtros e buscas funcionam
- Estados de loading/error são exibidos

---

## 🔄 Migração da Fase 1

### **Dados Existentes:**
- ✅ `src/data/courses.json` - Pronto para uso
- ✅ `src/data/professors.json` - Pronto para uso
- ✅ Design tokens - Disponíveis para components

### **Componentes Existentes:**
- ✅ Button, Card, Badge - Prontos para usar
- ✅ Layout do CorpoDocente - Funcional
- ✅ Estrutura de pastas - Implementada

---

## 🎯 Preparação para Fase 3

### **Entregáveis para Próxima Fase:**
- ✅ Services funcionais com fallback
- ✅ Hooks consumindo dados consistentemente
- ✅ Error handling robusto
- ✅ Cache básico funcionando
- ✅ TypeScript definitions prontas

### **Próximos Passos:**
1. **Fase 3** - Refatoração de páginas
2. **Integração** - Pages usando hooks
3. **Components** - Domínio-específicos
4. **Cleanup** - Remoção de código obsoleto

---

## ✅ **RESULTADO ESPERADO DA FASE 2**

Ao final desta fase teremos:

- 🏗️ **Infraestrutura sólida** para consumo de dados
- 🔗 **Hooks reutilizáveis** para todas as features
- 🛡️ **Error handling** robusto e centralizado
- 📦 **Services preparados** para APIs futuras
- 🧪 **Base testável** para quality assurance
- 🚀 **Foundation pronta** para Fase 3

A aplicação FAFIH terá uma camada de dados moderna, escalável e preparada para crescimento! 💪