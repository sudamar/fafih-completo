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

#### 🎨 Padrões de títulos
- `h1.page-title` exibe o traço colorido inferior (80px, gradiente) e mantém a hierarquia principal da página.
- `h2` de seções usa a classe `card-heading` — **azul escuro: #2A5BBD** — e, se necessário, a variante `no-underline` remove o traço decorativo.
- `h3` dentro de cards/seções usa `card-subheading`, garantindo o **azul muito escuro: #0B2242** e tipografia consistente.
- Quando precisar ajustar tamanhos específicos de cards, sobrescreva apenas font-size/margem localmente, mantendo `card-heading`/`card-subheading` para cores e ausência de linhas.

#### 📝 Padrão de descrição introdutória
- `.conheca-intro` é usada para descrições introdutórias das páginas (ex.: Iniciação Científica, Membros Analistas).
- **Fundo**: gradiente cinza claro (#f8f9fa → #e9ecef)
- **Sem borda superior colorida** (`.conheca-intro::before` está com `display: none`)
- Padding de 3rem, border-radius de 15px, texto centralizado
- Mantém consistência visual em todas as páginas que usam descrição inicial

#### 🧊 Cards informativos
- **Card Elevated**: base utilizada em `.info-card`, `.servico-item`, `.projeto-destaque`, `.numero-item`, `.contato-info`, `.ingresso-card`; fundo branco, borda 1px e sombra média com hover suave (gradiente sutil aplicado via pseudo-elemento).
- **Card Accent-Left**: para versões com barra lateral azul (ex.: antigos destaques), aplicar classe utilitária `card-accent-left` (definida junto ao estilo base) sobre o card elevado, mantendo borda lateral gradiente.
- **Card Course**: mantém estrutura de curso (hero/sidebar) e reaproveita `card-heading`/`card-subheading`; evitar definir sombras locais — usar o estilo base de cards elevados.
- **Highlight Cards**: cards de destaque usados em páginas de curso (CourseDetailsPage) com gradiente de fundo e ícone colorido. Estrutura visual: ícone no topo com gradiente circular, título em negrito, descrição curta. Gradientes mapeados por cores (blue, green, purple, red, amber, yellow, indigo) com fallback padrão.
- Evite duplicar CSS; reutilize as classes listadas e ajuste apenas elementos internos (ícones, métricas) quando necessário.

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

4. **Design System Documentation**
   - Página `/valida-dls` criada como catálogo visual de componentes
   - Documentação de todos os elementos: títulos, cards, botões, formulários, abas, cores, tipografia, gradientes, ícones sociais e sombras
   - Labels de referência (`@DLS-*`) para facilitar comunicação entre desenvolvedores
   - Componentes etiquetados com `data-component` para inspeção e debug
   - CSS global centralizado em `index.css` (seção "Design System Page Styles")
   - **15 componentes documentados** com classes CSS evidenciadas em cada seção

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

## 🎨 Catálogo Completo do Design System

### 📍 **Localização**: `/valida-dls`
**Arquivo Principal**: `src/components/valida-dls/ValidaDLSContent.jsx`
**CSS Global**: `src/index.css` (seção "Design System Page Styles", linha 3051+)

### 📦 **Componentes Documentados** (15 Total)

#### 1. **#tabs_exemplo** - Abas/Tabs
**Uso**: Navegação por abas para organizar conteúdo
**Classes CSS**:
- `.tabs-container` - Container principal das abas
- `.tab-link` - Botão de aba individual
- `.tab-link.active` - Aba ativa
- `.tab-content` - Conteúdo da aba
- `.tab-content.active` - Conteúdo visível

#### 2. **#titulos_exemplo** - Títulos
**Uso**: Hierarquia de títulos padronizada
**Classes CSS**:
- `.page-title` - Título principal da página (h1) com traço colorido inferior 80px
- `.card-heading` - Título de card/seção (h2) azul escuro #2A5BBD
- `.card-subheading` - Subtítulo de card (h3) azul muito escuro #0B2242
- `.section-subtitle` - Subtítulo de seção (h2) sem linha decorativa

#### 3. **#cards_basicos** - Cards Básicos
**Uso**: Cards para conteúdo geral
**Classes CSS**:
- `.dls-demo-card` - Card padrão com sombra
- `.card-accent-left` - Card com borda gradiente à esquerda
- `.ingresso-card` - Card específico para ingresso
- `.info-card` - Card informativo com gradiente de fundo

#### 4. **#cards_highlight** - Highlight Cards (Destaques)
**Uso**: Cards de destaque com gradientes e ícones (usado em páginas de curso)
**Classes CSS**:
- `.dls-highlight-grid` - Grid responsivo para cards de destaque
- `.dls-highlight-card` - Card individual com gradiente de fundo
- `.dls-highlight-icon` - Ícone circular com gradiente
- `.dls-highlight-title` - Título do destaque
- `.dls-highlight-text` - Texto descritivo
**Gradientes disponíveis**: blue, green, purple, red, amber, yellow, indigo

#### 5. **#cards_depoimentos** - Cards de Depoimentos (Carousel)
**Uso**: Carousel de depoimentos com navegação
**Classes CSS**:
- `.dls-testimonials-container` - Container principal
- `.dls-testimonial-card` - Card do depoimento
- `.dls-testimonial-content` - Conteúdo do depoimento
- `.dls-quote-icon` - Ícone de citação (aspas)
- `.dls-testimonial-text` - Texto do depoimento
- `.dls-testimonial-author` - Seção do autor
- `.dls-author-image` - Foto do autor
- `.dls-author-info` - Informações do autor
- `.dls-author-name` - Nome do autor
- `.dls-author-role` - Função/cargo do autor
- `.dls-carousel-indicators` - Indicadores de navegação
- `.dls-indicator` - Indicador individual (bolinhas)

#### 6. **#toggle_accordion** - Accordion/Toggle (Grade Curricular)
**Uso**: Sistema de expansão/colapso para grade curricular
**Classes CSS**:
- `.dls-curriculum-list` - Lista de itens do accordion
- `.dls-curriculum-item` - Item individual
- `.dls-curriculum-header` - Cabeçalho clicável
- `.dls-curriculum-main` - Conteúdo principal do header
- `.dls-curriculum-toggle-symbol` - Botão circular (+/−) 44px, azul #2105d0
- `.dls-curriculum-toggle-open` - Botão quando aberto (verde #05b18b)
- `.dls-curriculum-texts` - Container de textos
- `.dls-curriculum-summary` - Resumo do módulo
- `.dls-curriculum-content` - Conteúdo colapsável
- `.dls-curriculum-content-open` - Conteúdo expandido
- `.dls-curriculum-hours` - Carga horária
- `.dls-curriculum-section` - Seção dentro do conteúdo
- `.dls-curriculum-list-detailed` - Lista detalhada (ementa, objetivos)

#### 7. **#tabela_carga_horaria** - Tabela de Carga Horária
**Uso**: Distribuição de horas de atividades do curso
**Classes CSS**:
- `.dls-workload-content` - Container principal
- `.dls-workload-description` - Descrição introdutória
- `.dls-workload-table` - Seção da tabela
- `.dls-workload-grid` - Grid da tabela (fundo #f8fafc, borda)
- `.dls-workload-item` - Item/linha da tabela
- `.dls-workload-activity` - Nome da atividade
- `.dls-workload-hours` - Quantidade de horas
- `.dls-workload-total` - Linha total (fundo rgba(33,5,208,0.05), borda superior)
- `.dls-workload-note` - Nota de rodapé

#### 8. **#botoes_exemplos** - Botões
**Uso**: Todos os estilos de botões da aplicação
**Classes CSS**:
- `.btn-inscreva-se` - Botão de inscrição do header
- `.btn-saiba-mais-institucional` - Botão institucional
- `.btn-card` - Botão genérico de card
- `.btn-page-action` - Botão de ação de página
- `.btn-primary` - Botão primário
- `.btn-secondary` - Botão secundário
- `.btn-detalhes` - Botão de detalhes
- `.btn-matricular` - Botão de matrícula
- `.btn-matricular-modal` - Botão de matrícula em modal
- `.btn-download` - Botão de download
- `.btn-contato` - Botão de contato
- `.btn-matricule-agora` - Botão de call-to-action
- `.btn-voltar` - Botão de voltar
- `.btn-submit` - Botão de submit de formulário

#### 9. **#formularios_exemplos** - Formulários
**Uso**: Campos de formulário padronizados
**Classes CSS**:
- `.dls-demo-form` - Container do formulário
- `.dls-form-group` - Grupo de campo (label + input)
- `.dls-form-actions` - Container de botões de ação

#### 10. **#cores_tipografia** - Tipografia & Cores
**Uso**: Paleta de cores e fontes do projeto
**Classes CSS**:
- `.dls-color-palette` - Grid de cores
- `.dls-color-box` - Caixa de cor individual
- `.dls-typography-demo` - Demonstração de tipografia
**Variáveis CSS**:
- `--primary-color` (#0A2342)
- `--secondary-color` (#2C678F)
- `--background-color` (#F4F4F9)
- `--card-bg` (#FFFFFF)
- `--footer-blue` (#1d4397)
- `--card-green-dark` (#006400)
**Fontes**: Montserrat (títulos), Lato (corpo)

#### 11. **#gradiente_rainbow** - Gradiente Rainbow
**Uso**: Gradiente arco-íris usado em bordas e detalhes
**Classes CSS**:
- `.dls-gradient-demo` - Demonstração do gradiente
**Variável CSS**:
- `--gradient` (linear-gradient 90deg: roxo → azul → verde → amarelo → laranja → vermelho)

#### 12. **#icones_sociais** - Ícones Sociais
**Uso**: Cores padronizadas para redes sociais
**Classes CSS**:
- `.dls-social-colors` - Grid de cores sociais
- `.dls-social-box` - Caixa de cor social
**Variáveis CSS**:
- `--linkedin-color` (#0077B5)
- `--instagram-color` (#E1306C)
- `--youtube-color` (#FF0000)
- `--tiktok-color` (#000000)

#### 13. **#sombras_efeitos** - Sombras e Efeitos
**Uso**: Sombra padrão aplicada em cards e elementos
**Classes CSS**:
- `.dls-shadow-demo` - Container de demonstração
- `.dls-shadow-box` - Caixa com sombra
**Variável CSS**:
- `--shadow` (0 4px 12px rgba(0,0,0,0.08))

#### 14. **#card_detalhado** - Card Detalhado (Polo)
**Uso**: Card complexo com múltiplas informações (endereço, contato, lista)
**Classes CSS**:
- `.dls-polo-card` - Container do card (flexbox vertical)
- `.info-card` - Estilo base de card informativo
- `.dls-polo-info` - Seção de informações (endereço, telefone, email)
- `.dls-polo-cursos` - Seção de cursos oferecidos (fundo #f8f9ff)
- `.dls-map-button` - Botão de ver no mapa

#### 15. **#cards_pessoas** - Cards de Pessoas (Professores)
**Uso**: Cards de perfil com foto, bio e contato
**Classes CSS**:
- `.dls-professores-grid` - Grid responsivo de professores
- `.dls-professor-card` - Card individual (min-height 450px)
- `.dls-professor-header` - Cabeçalho com foto e nome
- `.dls-professor-foto` - Container da foto (80px circular)
- `.dls-professor-nome-area` - Nome e área de atuação
- `.dls-professor-area` - Área de especialização
- `.dls-professor-info` - Container de informações
- `.dls-professor-content` - Conteúdo principal (formação + bio)
- `.dls-professor-formacao` - Formação acadêmica (itálico)
- `.dls-professor-bio` - Biografia (texto justificado)
- `.dls-professor-contato-info` - Seção de contato (borda superior)
- `.dls-contato-item` - Item de contato individual
- `.dls-contato-label` - Emoji/ícone de contato
- `.dls-contato-link` - Link de contato (telefone/email)

---

### 🔍 **Como Usar o Design System**

1. **Acesse o catálogo**: Navegue para `/valida-dls` no navegador
2. **Identifique o componente**: Localize visualmente o componente desejado
3. **Copie o ID**: Use o ID de referência (ex: `#cards_pessoas`)
4. **Veja as classes**: Classes CSS estão evidenciadas abaixo de cada ID
5. **Aplique no código**: Use as classes CSS globais em seus componentes
6. **Referencie nos prompts**: Use o ID para pedir ajustes (ex: "ajuste usando #toggle_accordion")

### 📝 **Exemplo de Uso**
```jsx
// Em vez de criar CSS local, use as classes do DLS:
<div className="dls-professor-card">
  <div className="dls-professor-header">
    <div className="dls-professor-foto">
      <img src={photo} alt={name} />
    </div>
    <div className="dls-professor-nome-area">
      <h3>{name}</h3>
      <p className="dls-professor-area">{area}</p>
    </div>
  </div>
</div>
```

---

**⚡ Esta migração transformará a aplicação FAFIH em uma base sólida, escalável e preparada para o futuro!**
