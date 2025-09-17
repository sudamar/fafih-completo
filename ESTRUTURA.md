# Estrutura do Projeto FAFIH React

## 📁 Organização dos Componentes

### `src/components/shared/`
Componentes compartilhados entre todas as páginas:
- **Header.jsx** - Cabeçalho com navegação e menu responsivo
- **Footer.jsx** - Rodapé com informações e modal da ouvidoria
- **CookieConsent.jsx** - Banner de consentimento de cookies

### `src/components/index/`
Componentes específicos da página inicial:
- **Hero.jsx** - Slider principal com imagens e navegação
- **About.jsx** - Seção "Conheça a FAFIH"
- **Atendimentos.jsx** - Cards dos focos acadêmicos (com animação flip 3D)
- **Cursos.jsx** - Grid de cursos com filtros funcionais
- **Depoimentos.jsx** - Grid de depoimentos de alunos

### `src/components/extensao/`
Componentes específicos da página de extensão:
- **ExtensaoTabs.jsx** - Sistema de abas com conteúdo da extensão universitária

### `src/components/perguntas-frequentes/`
Componentes específicos da página de FAQ:
- **FAQList.jsx** - Lista de perguntas frequentes com accordion

### `src/pages/`
Páginas principais da aplicação:
- **IndexPage.jsx** - Página inicial
- **ExtensaoPage.jsx** - Página de extensão universitária
- **PerguntasFrequentesPage.jsx** - Página de perguntas frequentes

## 🎨 Estilos e Layout

### CSS Global (`src/index.css`)
Todos os estilos foram migrados do HTML original mantendo:
- ✅ Variáveis CSS para cores e gradientes
- ✅ Layout responsivo (desktop, tablet, mobile)
- ✅ Animações CSS (hover effects, transitions, flip cards)
- ✅ Estilos específicos para abas, tabelas, timeline, modais
- ✅ Media queries para diferentes breakpoints

### Funcionalidades Preservadas
- ✅ Menu hambúrguer responsivo
- ✅ Slider automático do hero com navegação manual
- ✅ Filtros de cursos com parâmetros de URL
- ✅ Modal da ouvidoria
- ✅ Banner de cookies com localStorage
- ✅ Sistema de abas na página de extensão
- ✅ Accordion FAQ
- ✅ Cards flip 3D nos focos acadêmicos
- ✅ Timeline da jornada do estudante

## 🚀 Navegação

### React Router
Configurado com as seguintes rotas:
- `/` - Página inicial
- `/extensao` - Extensão universitária
- `/perguntas-frequentes` - FAQ

### Links Atualizados
- Header utiliza `<Link>` do React Router para navegação SPA
- Mantém links externos para páginas não migradas
- Preserva âncoras para seções internas (#conheca-fafih, #cursos, etc.)

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

Todos os componentes se adaptam automaticamente aos diferentes tamanhos de tela.

## 🎯 Próximos Passos

Para adicionar novas páginas:
1. Criar componentes específicos em `src/components/[nome-pagina]/`
2. Criar página em `src/pages/`
3. Adicionar rota no `App.jsx`
4. Atualizar navegação no `Header.jsx`