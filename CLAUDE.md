# 🏗️ Arquitetura da Aplicação FAFIH React

## 📋 Informações Gerais
- **Framework**: React 18 + Vite
- **Roteamento**: React Router DOM v6
- **Styling**: CSS Modules com variáveis CSS nativas
- **Estrutura**: Organização por funcionalidade e páginas

---

## 🗂️ Arquitetura de Pastas

```
src/
├── components/
│   ├── shared/           # Componentes globais reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── CookieConsent.jsx
│   ├── index/           # Componentes específicos da página inicial
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Atendimentos.jsx
│   │   ├── Cursos.jsx
│   │   └── Depoimentos.jsx
│   ├── extensao/        # Componentes da página de extensão
│   │   └── ExtensaoTabs.jsx
│   └── perguntas-frequentes/  # Componentes da página FAQ
│       └── FAQList.jsx
├── pages/               # Páginas principais (rotas)
│   ├── IndexPage.jsx
│   ├── ExtensaoPage.jsx
│   └── PerguntasFrequentesPage.jsx
├── services/           # [RECOMENDADO] Chamadas de API
├── hooks/              # [RECOMENDADO] Custom hooks
├── utils/              # [RECOMENDADO] Funções utilitárias
├── contexts/           # [RECOMENDADO] Context API
└── assets/             # [RECOMENDADO] Imagens, ícones, etc.
```

---

## 🔄 Fluxo de Dados e Responsabilidades

### 📄 **Pages (Páginas)**
- **Responsabilidade**: Coordenar componentes e gerenciar estado da página
- **O que fazem**:
  - Importam e organizam componentes
  - Gerenciam estado global da página
  - Fazem chamadas de API (se necessário)
  - Passam dados para componentes filhos

### 🧩 **Components**
- **Shared**: Componentes reutilizáveis entre páginas
- **Feature-specific**: Componentes específicos de uma funcionalidade
- **Responsabilidade**: UI e lógica específica do componente

---

## 🌐 Localização Recomendada para Chamadas de API

### 1. **Services Layer** (`src/services/`)
```javascript
// src/services/api.js
const API_BASE_URL = 'https://api.fafih.edu.br';

export const coursesService = {
  getAllCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/courses`);
    return response.json();
  },

  getCoursesByCategory: async (category) => {
    const response = await fetch(`${API_BASE_URL}/courses?category=${category}`);
    return response.json();
  }
};

export const extensionService = {
  getExtensionProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/extension/projects`);
    return response.json();
  }
};
```

### 2. **Custom Hooks** (`src/hooks/`)
```javascript
// src/hooks/useCourses.js
import { useState, useEffect } from 'react';
import { coursesService } from '../services/api';

export const useCourses = (category = 'all') => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = category === 'all'
          ? await coursesService.getAllCourses()
          : await coursesService.getCoursesByCategory(category);
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category]);

  return { courses, loading, error };
};
```

### 3. **Implementação nos Componentes**
```javascript
// src/components/index/Cursos.jsx
import { useCourses } from '../../hooks/useCourses';

const Cursos = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { courses, loading, error } = useCourses(activeFilter);

  if (loading) return <div>Carregando cursos...</div>;
  if (error) return <div>Erro ao carregar: {error}</div>;

  return (
    <section id="cursos">
      {/* Renderizar cursos da API */}
    </section>
  );
};
```

---

## 🎯 Boas Práticas Implementadas

### ✅ **Organização de Código**
- Separação clara entre páginas e componentes
- Componentes organizados por funcionalidade
- Imports organizados (externos → internos → relativos)

### ✅ **Performance**
- Lazy loading de rotas (recomendado para expansão)
- Otimização de re-renders com useCallback/useMemo quando necessário
- Gerenciamento eficiente de estado

### ✅ **Manutenibilidade**
- Componentes pequenos e focados em uma responsabilidade
- Nomenclatura clara e consistente
- Separação de lógica de apresentação

### ✅ **Acessibilidade**
- Estrutura semântica HTML
- ARIA labels onde necessário
- Navegação por teclado funcional

---

## 🔧 Padrões de Desenvolvimento Recomendados

### 📝 **Nomenclatura**
```javascript
// Componentes: PascalCase
const HeaderComponent = () => {};

// Hooks: camelCase com prefixo 'use'
const useApiData = () => {};

// Serviços: camelCase com sufixo 'Service'
const apiService = {};

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = '';
```

### 🔄 **Gerenciamento de Estado**

#### **Estado Local** (useState)
```javascript
// Para dados específicos do componente
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({});
```

#### **Estado Global** (Context API - Recomendado)
```javascript
// src/contexts/AppContext.js
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
```

#### **Estado Servidor** (React Query - Futuro)
```javascript
// Para dados do servidor/API
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['courses', category],
  queryFn: () => coursesService.getCoursesByCategory(category)
});
```

---

## 🚀 Expansão Futura Recomendada

### 📦 **Bibliotecas Sugeridas**
```json
{
  "@tanstack/react-query": "^4.0.0",  // Cache e sincronização de dados
  "react-hook-form": "^7.0.0",        // Formulários performáticos
  "zod": "^3.0.0",                     // Validação de schemas
  "framer-motion": "^10.0.0",         // Animações avançadas
  "react-helmet-async": "^1.0.0"      // SEO e meta tags
}
```

### 🗂️ **Estrutura Expandida**
```
src/
├── components/
├── pages/
├── services/          # ✅ Implementar
├── hooks/             # ✅ Implementar
├── contexts/          # ✅ Para estado global
├── utils/             # ✅ Funções utilitárias
├── types/             # 🔄 Se migrar para TypeScript
├── constants/         # ✅ Configurações e constantes
└── __tests__/         # 🔄 Testes unitários
```

---

## 🎨 Padrões de CSS

### 🎯 **Variáveis CSS Centralizadas**
```css
:root {
  --primary-color: #0A2342;
  --secondary-color: #2C678F;
  --background-color: #F4F4F9;
  /* Todas as cores centralizadas */
}
```

### 📱 **Responsividade Consistente**
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1200px) { /* Desktop */ }
```

---

## 🔍 Comandos Úteis para Development

### 🛠️ **Desenvolvimento**
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificar código (se configurado)
```

### 🧪 **Debug e Inspeção**
```bash
# React Developer Tools (extensão do browser)
# Vite inspector de bundles
npm run build -- --analyze
```

---

## 🎯 Próximos Passos Recomendados

1. **Implementar Services Layer** para APIs futuras
2. **Adicionar Custom Hooks** para lógicas reutilizáveis
3. **Configurar Context API** para estado global
4. **Implementar Error Boundaries** para tratamento de erros
5. **Adicionar Testes** (Jest + Testing Library)
6. **Configurar SEO** com React Helmet
7. **Migrar para TypeScript** (opcional mas recomendado)

---

## 📝 Exemplo de Implementação de Nova Funcionalidade

### Cenário: Adicionar sistema de notificações

1. **Service** (`src/services/notificationService.js`)
2. **Hook** (`src/hooks/useNotifications.js`)
3. **Context** (`src/contexts/NotificationContext.js`)
4. **Componente** (`src/components/shared/NotificationToast.jsx`)
5. **Integração** nas páginas que precisam

Esta arquitetura garante escalabilidade, manutenibilidade e performance otimizada! 🚀