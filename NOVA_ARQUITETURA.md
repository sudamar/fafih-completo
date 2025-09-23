# 🏗️ Nova Arquitetura FAFIH - Plano de Migração

## 📋 Visão Geral

Este documento define a estratégia de migração da aplicação FAFIH para uma arquitetura mais robusta, escalável e preparada para integração com APIs. A migração será realizada em **5 fases incrementais** para minimizar riscos e manter a aplicação funcional durante todo o processo.

---

## 🎯 Objetivos da Nova Arquitetura

### ✅ **Problemas Resolvidos**
- **Acoplamento de dados**: Separação clara entre UI e dados
- **Estrutura mista**: Organização por domínio e responsabilidade
- **Ausência de serviços**: Camada de abstração para APIs futuras
- **Rotas duplicadas**: Centralização do roteamento no React
- **Estilos inconsistentes**: Design system unificado

### 🚀 **Benefícios Esperados**
- **Manutenibilidade**: Código mais organizado e testável
- **Escalabilidade**: Preparado para crescimento de funcionalidades
- **Performance**: Otimizações de carregamento e cache
- **DX (Developer Experience)**: Ferramentas e padrões consistentes
- **Integração API**: Transição suave para dados remotos

---

## 🗂️ Estrutura Final Proposta

```
src/
├── app/
│   ├── routes.jsx              # Roteamento centralizado
│   ├── providers.jsx           # Providers globais (React Query, Theme)
│   └── App.jsx                 # App principal
├── pages/
│   ├── course/
│   │   ├── CourseDetailsPage.jsx
│   │   └── courseDetails.loader.js
│   ├── professor/
│   │   ├── ProfessorPage.jsx
│   │   └── professor.loader.js
│   ├── courses/
│   │   └── CoursesListPage.jsx
│   └── NotFoundPage.jsx
├── components/
│   ├── ui/                     # Componentes base do design system
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Accordion/
│   │   └── index.js
│   ├── layout/                 # Componentes de layout
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PageWrapper/
│   │   └── Navigation/
│   └── domain/                 # Componentes específicos de domínio
│       ├── course/
│       │   ├── CourseHero/
│       │   ├── CourseSummary/
│       │   ├── CurriculumAccordion/
│       │   ├── InvestmentCard/
│       │   └── TestimonialsSection/
│       └── professor/
│           ├── ProfessorHeader/
│           ├── PublicationsShowcase/
│           └── CourseAssignments/
├── features/
│   ├── courses/
│   │   ├── hooks/
│   │   │   ├── useCourse.js
│   │   │   └── useCourses.js
│   │   ├── services/
│   │   │   └── courseService.js
│   │   ├── types/
│   │   │   └── course.types.js
│   │   └── utils/
│   │       └── courseMapper.js
│   └── professors/
│       ├── hooks/
│       ├── services/
│       └── types/
├── services/
│   ├── apiClient.js            # Cliente HTTP centralizado
│   ├── endpoints.js            # URLs e configurações
│   └── errorHandler.js         # Tratamento global de erros
├── data/
│   ├── courses.json            # Dados estáticos dos cursos
│   ├── professors.json         # Dados estáticos dos professores
│   └── testimonials.json       # Depoimentos
├── styles/
│   ├── tokens.css              # Design tokens (cores, spacing, etc.)
│   ├── globals.css             # Estilos globais
│   └── components.css          # Estilos de componentes base
├── utils/
│   ├── formatters.js           # Formatação de dados
│   ├── slugify.js              # Geração de slugs
│   └── constants.js            # Constantes da aplicação
└── hooks/
    ├── useApi.js               # Hook genérico para APIs
    └── useLocalStorage.js      # Persistência local
```

---

## 📅 Fases de Migração

### 🔷 **FASE 1: Fundação e Estrutura Base** (Semana 1-2)

#### **Objetivos**
- Criar nova estrutura de pastas
- Estabelecer design system básico
- Migrar dados para JSON normalizados

#### **Tarefas**
1. **Reestruturação de pastas**
   - Criar nova estrutura em `src/`
   - Mover componentes existentes para locais apropriados
   - Configurar barrel exports (`index.js`)

2. **Design System Base**
   - Criar `styles/tokens.css` com variáveis CSS
   - Implementar componentes UI básicos (Button, Card, Badge)
   - Padronizar tipografia e spacing

3. **Normalização de Dados**
   - Migrar `courseDetailsData.js` → `data/courses.json`
   - Criar `data/professors.json` baseado nos dados existentes
   - Padronizar formato de dados (camelCase, estruturas consistentes)

#### **Entregáveis**
- [ ] Nova estrutura de pastas funcionando
- [ ] Design tokens definidos
- [ ] Dados normalizados em JSON
- [ ] Componentes UI básicos

---

### 🔷 **FASE 2: Camada de Serviços e Hooks** (Semana 3-4)

#### **Objetivos**
- Implementar camada de abstração para dados
- Criar hooks customizados para gerenciamento de estado
- Preparar infraestrutura para APIs futuras

#### **Tarefas**
1. **Services Layer**
   - Implementar `services/apiClient.js`
   - Criar `features/courses/services/courseService.js`
   - Configurar fallback para dados estáticos

2. **Custom Hooks**
   - Implementar `useCourse(slug)` e `useCourses()`
   - Criar `useProfessor(slug)`
   - Adicionar estados de loading, error e data

3. **Error Handling**
   - Implementar `services/errorHandler.js`
   - Criar Error Boundaries
   - Definir fallbacks para erros de API

#### **Entregáveis**
- [ ] Services funcionando com dados estáticos
- [ ] Hooks customizados implementados
- [ ] Tratamento de erros centralizado

---

### 🔷 **FASE 3: Refatoração de Páginas e Componentes** (Semana 5-6)

#### **Objetivos**
- Migrar páginas para nova arquitetura
- Implementar componentes de domínio
- Integrar com camada de serviços

#### **Tarefas**
1. **Refatoração de Páginas**
   - Migrar `CourseDetailsPage` para usar services
   - Implementar `ProfessorPage` completa
   - Criar `CoursesListPage` com filtros

2. **Componentes de Domínio**
   - Implementar `CourseHero`, `CurriculumAccordion`
   - Criar `ProfessorHeader`, `PublicationsShowcase`
   - Desenvolver `TestimonialsSection` reutilizável

3. **Remoção de Duplicatas**
   - Remover HTMLs estáticos de `public/`
   - Centralizar todo roteamento no React
   - Limpar código obsoleto

#### **Entregáveis**
- [ ] Páginas migradas para nova arquitetura
- [ ] Componentes de domínio funcionais
- [ ] Remoção de arquivos duplicados

---

### 🔷 **FASE 4: React Router Avançado e Otimizações** (Semana 7)

#### **Objetivos**
- Implementar roteamento avançado com loaders
- Adicionar funcionalidades de performance
- Preparar para produção

#### **Tarefas**
1. **Route Loaders**
   - Implementar loaders para todas as páginas
   - Configurar prefetching de dados
   - Adicionar error elements

2. **Performance**
   - Implementar lazy loading de componentes
   - Adicionar skeleton loaders
   - Otimizar bundle size

3. **SEO e Acessibilidade**
   - Configurar meta tags dinâmicas
   - Implementar estruturas semânticas
   - Validar acessibilidade

#### **Entregáveis**
- [ ] Roteamento otimizado implementado
- [ ] Performance melhorada
- [ ] SEO e acessibilidade validados

---

### 🔷 **FASE 5: Preparação para API e Finalização** (Semana 8)

#### **Objetivos**
- Preparar integração com API real
- Implementar features avançadas
- Documentar e testar

#### **Tarefas**
1. **Preparação API**
   - Configurar environment variables
   - Implementar React Query/TanStack Query
   - Criar mocks para desenvolvimento

2. **Features Avançadas**
   - Sistema de filtros e busca
   - Paginação (preparação)
   - Cache inteligente

3. **Qualidade e Documentação**
   - Implementar testes unitários básicos
   - Configurar linting e formatting
   - Atualizar documentação

#### **Entregáveis**
- [ ] Sistema preparado para API
- [ ] Features avançadas implementadas
- [ ] Testes e documentação completos

---

## 🔧 Configurações e Ferramentas

### 📦 **Dependências Adicionais**
```json
{
  "@tanstack/react-query": "^5.0.0",
  "react-router-dom": "^6.8.0",
  "react-helmet-async": "^2.0.0",
  "clsx": "^2.0.0",
  "date-fns": "^3.0.0"
}
```

### 🛠️ **Scripts Recomendados**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx",
    "lint:fix": "eslint src --ext .js,.jsx --fix",
    "format": "prettier --write src/**/*.{js,jsx,css,md}",
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

---

## 📊 Métricas de Sucesso

### 🎯 **KPIs Técnicos**
- **Performance**: Lighthouse Score > 90
- **Bundle Size**: Redução de 20% no JavaScript inicial
- **Loading Time**: First Contentful Paint < 1.5s
- **Code Coverage**: > 70% nos componentes críticos

### 🎯 **KPIs de Manutenibilidade**
- **Linhas de Código**: Redução de 15% no código duplicado
- **Complexidade**: Redução da complexidade ciclomática média
- **Developer Experience**: Setup time < 5 minutos
- **Bug Rate**: Redução de 30% nos bugs relacionados a dados

---

## 🚀 Próximos Passos

### 1. **Aprovação do Plano**
- Revisar e aprovar esta arquitetura
- Definir cronograma detalhado
- Alocar recursos necessários

### 2. **Início da Fase 1**
- Criar branch `feature/nova-arquitetura`
- Configurar ambiente de desenvolvimento
- Iniciar reestruturação de pastas

### 3. **Acompanhamento**
- Reviews semanais de progresso
- Testes contínuos em ambiente de staging
- Ajustes de escopo conforme necessário

---

## 📋 Checklist de Validação por Fase

### ✅ **Fase 1 - Fundação**
- [ ] Nova estrutura criada e funcional
- [ ] Design tokens aplicados em toda aplicação
- [ ] Dados migrados e validados
- [ ] Componentes UI testados

### ✅ **Fase 2 - Serviços**
- [ ] Services retornando dados corretos
- [ ] Hooks funcionando com loading/error states
- [ ] Error boundaries capturando erros

### ✅ **Fase 3 - Páginas**
- [ ] Todas as páginas migradas
- [ ] Componentes de domínio reutilizáveis
- [ ] Arquivos obsoletos removidos

### ✅ **Fase 4 - Otimização**
- [ ] Route loaders implementados
- [ ] Performance otimizada
- [ ] Acessibilidade validada

### ✅ **Fase 5 - Finalização**
- [ ] API integration ready
- [ ] Testes passando
- [ ] Documentação atualizada

---

**⚡ Esta migração transformará a aplicação FAFIH em uma base sólida, escalável e preparada para o futuro!**