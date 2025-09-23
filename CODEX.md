# Planejamento de Arquitetura e Evolução

## 1. Diagnóstico Inicial
- **Acoplamento entre dados e UI**: grande parte dos conteúdos está hard-coded em `courseDetailsData.js` e páginas HTML dentro de `public/`. Mudanças exigem editar múltiplos locais e dificultam sincronização com fontes externas (APIs futuras).
- **Estrutura de componentes mista**: pastas `components` concentram tanto blocos de layout genéricos quanto módulos altamente específicos de página, tornando reuso e testes mais complexos.
- **Ausência de camada de serviços**: chamadas à API ainda não existem, mas não há contrato definido. Falta separação entre dados (mock) e lógica de obtenção.
- **Estado e roteamento**: páginas usam `useParams`, porém parte das rotas (ex.: páginas de curso específicas) continuam duplicadas no `public/`, o que gera incoerência e impede fallback consistente.
- **Design tokens e estilos**: Tailwind + CSS modular misturados. Há muito estilo embutido em strings e classes personalizadas sem padronização/diretivas globais.

## 2. Princípios para a Nova Arquitetura
1. **Separação em camadas**: UI (componentes/páginas) ↔ domínio (dados/tipos/serviços) ↔ infraestrutura (API, storage, routing).
2. **Dados dirigidos por contratos**: compartilhar tipos/interfaces entre mocks atuais e respostas futuras da API.
3. **Reuso e composição**: bibliotecas de UI granular (botões, cards, layout) e blocos de domínio (grade curricular, depoimentos, docentes) desacoplados do curso específico.
4. **Observabilidade e extensibilidade**: preparar logging, tratamento de erros e carregamentos (skeletons, fallback 404) centralizados.
5. **Automação**: lint/prettier, testes e build pipeline prontos para aceitar a camada de dados remota.

## 3. Estrutura de Pastas Proposta (src)
```
src/
  app/
    routes.jsx              # Definição central das rotas
    providers.jsx           # React Query, Theme, Contexts globais
  pages/
    CourseDetails/
      CourseDetailsPage.jsx
      courseDetails.loader.js
    Professor/
      ProfessorPage.jsx
      professor.loader.js
    ...
  components/
    ui/                     # Botões, títulos, grids, badges, etc.
    layout/                 # Header, Footer, Navigation, Shells
    domain/
      course/
        CourseHero.jsx
        CourseSummary.jsx
        CurriculumAccordion.jsx
        InvestmentCard.jsx
      professor/
        ProfessorHeader.jsx
        PublicationsShowcase.jsx
  features/
    courses/
      hooks/
        useCourse.js
        useCourses.js
      services/
        courseService.js
      mocks/
        courses.mock.json
      utils/
        courseMapper.js
    professors/
      ...
  services/
    apiClient.js            # fetch wrapper com interceptors
    endpoints.js            # URLs e paths centralizados
  data/
    courseDetails.static.json
    professors.static.json
  styles/
    tokens.css
    globals.css
  utils/
    formatters.js
    slugify.js
```

## 4. Fluxo de Dados (Curso)
```
Route Loader (React Router v6.4+) -> courseService.getBySlug(slug)
  -> apiClient.fetch('/courses/:slug')
      ↳ fallback: courseMapper.fromStatic(courseDetails)
  -> retorna objeto normalizado (CourseDetail)
Page
  -> usa hooks (useLoaderData ou useCourse) para consumir
  -> renderiza componentes de domínio (CurriculumAccordion, FacultyList, TestimonialsSection)
```

### Tipagem sugerida (JS + JSDoc ou migrar para TS)
```ts
export type CurriculumItem = {
  number: number;
  title: string;
  hours: number;
  ementa: string[];
  objetivos: string[];
  bibliography: string[];
  links?: string[];
};

export type CourseDetail = {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  hero: MediaAsset;
  highlights: Highlight[];
  curriculum: CurriculumItem[];
  investment: InvestmentPlan;
  faculty: FacultyMember[];
  testimonials: Testimonial[];
  ...
};
```

## 5. Integração com API futura
- **apiClient**: wrapper de `fetch` ou axios com interceptors para autenticação, refresh, tratamento de erros e parse de JSON.
- **React Query (TanStack)**: cache de responses, revalidação, loaders e suspense. Permite usar dados mockados durante desenvolvimento com `courseService.getBySlug` retornando fallback ao detectar erro 404 (mostrando `NotFoundPage`).
- **Env config**: `.env`, `.env.local`, com `VITE_API_BASE_URL`. Servidor modulado em `services/endpoints.js`.
- **Mocks**: manter `data/*.json`; se `process.env.VITE_USE_MOCKS === 'true'`, services retornam dados estáticos (útil para storybook/tests).

## 6. UI e Design System
- Criar tokens (cores, spacing, tipografia) em `styles/tokens.css`.
- Componentes base (Button, Tag, Card, Accordion, SectionTitle) exportados de `components/ui`.
- Layout shell (Header, Footer, PageWrapper) isolado em `components/layout`.
- Domínio (curso/professor) compõe UI base + dados.
- Desenhar pattern para “media hero” (support video/poster), cards de investimento, acordeon de grade, callouts dos highlights.

## 7. Rotas e Navegação
- `/curso/:slug` (detalhes)
- `/professor/:slug` (detalhes + obras)
- `/cursos?filter=` (listagem, paginação futura)
- `/404` fallback

Usar route loaders + errorElement do React Router: qualquer erro 404 de loader redireciona para `NotFoundPage` com `state.from = slug`.

## 8. Dados de Professores
- Criar `facultyData.js` ou `.json` com estrutura:
```js
{
  "slug": "lilian-wurzba",
  "name": "Lilian Wurzba",
  "bio": [ ... ],
  "photo": "...",
  "publications": [ { title, cover, link } ],
  "courses": [ { id, title, role } ]
}
```
- Página `/professor/:slug` consome `professorService.getBySlug` e usa componentes `ProfessorHeader`, `PublicationsShowcase`, `CourseAssignments`.

## 9. Próximos Passos
1. Migrar `courseDetailsData.js` para `data/courses.json`, normalizado (snake case -> camel case, arrays padronizados com hours, ementa, objetivos, bibliography). Garantir `slug` para cada curso.
2. Criar camada `services/courses` com fallback a JSON enquanto API não existe.
3. Refatorar páginas para consumir services via loaders/hook `useCourse` (com React Query). Remover HTML duplicado de `public/`.
4. Montar `components/domain/course` e mover lógica de hero / highlights / curriculum para componentes reutilizáveis.
5. Implementar `ProfessorPage` com base em `facultyData` + `PublicationsShowcase` (cards de livros com miniaturas).
6. Adicionar testes unitários (Jest + React Testing Library) para curriculum accordion e services.
7. Configurar lint/prettier script + husky pre-commit.

## 10. Considerações de Deploy
- Atualizar Node para 20.19+ ou 22.12+ (exigência do Vite).
- Ao integrar API, configurar retries/backoff e fallback offline (mostrar skeletons e mensagens de erro).

---
Este documento serve como referência inicial para a refatoração. Atualize conforme as decisões forem implementadas.
