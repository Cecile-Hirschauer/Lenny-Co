# Lenny & Co

Application d'accompagnement a la lecture pour enfants dyslexiques.

## Stack technique

- **Monorepo** : pnpm workspaces
- **Frontend web** : Next.js 14 (App Router), React 18, TypeScript
- **UI** : Design system interne (`@lenny/ui`) avec Storybook 8
- **Qualite** : ESLint, Husky, lint-staged
- **Tests** : Vitest, Storybook Test Runner

## Structure du projet

```
Lenny-Co/
├── .claude/                          # Configuration Claude Code
│   └── settings.local.json
├── apps/
│   └── web/                          # Application Next.js
│       ├── app/                      # App Router (Next.js 14)
│       │   ├── components/           # Composants specifiques app
│       │   │   └── HeaderClient.tsx  # Header avec navigation
│       │   ├── dashboard/            # Page tableau de bord
│       │   │   ├── page.tsx
│       │   │   └── page.module.css
│       │   ├── login/                # Page connexion
│       │   │   ├── page.tsx
│       │   │   └── page.module.css
│       │   ├── signup/               # Page inscription
│       │   │   ├── page.tsx
│       │   │   └── page.module.css
│       │   ├── globals.css           # Styles globaux
│       │   ├── layout.tsx            # Layout racine (fonts, metadata)
│       │   ├── page.tsx              # Page d'accueil (Hero)
│       │   ├── page.module.css
│       │   └── providers.tsx         # Providers React (Theme, etc.)
│       ├── public/
│       │   └── images/               # Assets statiques
│       ├── services/
│       │   └── AuthService.ts        # Service d'authentification
│       ├── next.config.js            # Configuration Next.js
│       ├── tsconfig.json
│       ├── package.json
│       └── PERFORMANCE.md            # Documentation performance
│
├── packages/
│   └── ui/                           # Design System (@lenny/ui)
│       ├── .storybook/               # Configuration Storybook
│       ├── src/
│       │   ├── atoms/                # Composants atomiques
│       │   │   ├── Avatar/
│       │   │   │   ├── Avatar.tsx
│       │   │   │   ├── Avatar.module.css
│       │   │   │   ├── Avatar.stories.tsx
│       │   │   │   └── index.ts
│       │   │   ├── BurgerButton/
│       │   │   ├── Button/
│       │   │   ├── Input/
│       │   │   ├── Tag/
│       │   │   ├── ThemeToggle/
│       │   │   └── Typography/
│       │   │
│       │   ├── molecules/            # Composants moleculaires
│       │   │   ├── AlertCard/
│       │   │   ├── MissionCard/
│       │   │   ├── Modal/
│       │   │   └── StatCard/
│       │   │
│       │   ├── organisms/            # Composants complexes
│       │   │   ├── BottomNavigation/
│       │   │   ├── DashboardLayout/
│       │   │   ├── Header/
│       │   │   ├── LoginForm/
│       │   │   ├── ParentDashboardLayout/
│       │   │   └── SignupForm/
│       │   │
│       │   ├── context/              # Contextes React
│       │   │   ├── ThemeContext.tsx  # Provider theme dark/light
│       │   │   └── themeScript.ts    # Script anti-flash theme
│       │   │
│       │   ├── ui/                   # Design Tokens
│       │   │   ├── token.css         # Variables CSS
│       │   │   └── token.ts          # Tokens TypeScript
│       │   │
│       │   └── index.ts              # Point d'entree exports
│       │
│       ├── storybook-static/         # Build Storybook
│       ├── vitest.config.ts          # Configuration Vitest
│       ├── tsconfig.json
│       ├── package.json
│       └── DESIGN_TOKENS.md          # Documentation tokens
│
├── package.json                      # Workspace root
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

## Design System (`@lenny/ui`)

Architecture Atomic Design avec CSS Modules et Storybook.

### Atoms (composants de base)

| Composant | Description | Props principales |
|-----------|-------------|-------------------|
| `Avatar` | Photo de profil utilisateur | `src`, `size`, `alt` |
| `BurgerButton` | Bouton menu mobile | `isOpen`, `onClick` |
| `Button` | Bouton d'action | `variant`, `size`, `label`, `disabled` |
| `Input` | Champ de saisie | `type`, `label`, `error`, `placeholder` |
| `Tag` | Etiquette/badge | `variant`, `children` |
| `ThemeToggle` | Switch dark/light mode | - |
| `Typography` | Texte semantique | `variant`, `component`, `children` |

### Molecules (compositions simples)

| Composant | Description |
|-----------|-------------|
| `AlertCard` | Carte d'alerte avec icone et message |
| `MissionCard` | Carte mission/exercice avec progression |
| `Modal` | Fenetre modale accessible |
| `StatCard` | Carte statistique avec valeur et tendance |

### Organisms (compositions complexes)

| Composant | Description |
|-----------|-------------|
| `BottomNavigation` | Navigation mobile fixe en bas |
| `DashboardLayout` | Layout dashboard avec sidebar |
| `Header` | En-tete avec logo, navigation, actions |
| `LoginForm` | Formulaire de connexion complet |
| `ParentDashboardLayout` | Layout specifique parent |
| `SignupForm` | Formulaire d'inscription |

### Storybook

```bash
# Developpement
pnpm --filter @lenny/ui storybook

# Build statique
pnpm --filter @lenny/ui build-storybook
```

Accessible sur `http://localhost:6006`

**Addons installes :**
- `@storybook/addon-a11y` - Tests accessibilite
- `@storybook/addon-docs` - Documentation auto
- `@storybook/addon-vitest` - Tests visuels
- `chromatic` - Visual regression testing

## Design Patterns

### Architecture

| Pattern | Implementation |
|---------|----------------|
| **Atomic Design** | Composants en atoms → molecules → organisms |
| **Composite** | `ParentDashboardLayout` compose header + sidebar + content |
| **Slot Pattern** | Props `children`, `sidebarContent`, `logoElement` |
| **Container/Presentational** | Pages = containers, UI = presentational |
| **CSS Modules** | Styles scopes par composant |

### Responsive Design

Approche **Mobile First** avec breakpoints :

```css
/* Mobile (default) */
/* Tablet */ @media (min-width: 768px)
/* Desktop */ @media (min-width: 1024px)
/* Large */ @media (min-width: 1280px)
```

## Optimisations Performance

> Documentation complete : [`apps/web/PERFORMANCE.md`](apps/web/PERFORMANCE.md)

### Next.js (`next.config.js`)

| Option | Impact |
|--------|--------|
| `compress: true` | Compression Gzip/Brotli |
| `optimizePackageImports` | Tree-shaking `@lenny/ui`, `lucide-react` |
| `images.formats` | AVIF/WebP automatique |
| `experimental.optimizeCss` | Minification CSS avancee |

### Rendu statique

```typescript
// apps/web/app/page.tsx
export const dynamic = 'force-static';
export const revalidate = false;
```

**Impact :** TTFB de 4.5s → <200ms

### Images (LCP)

```tsx
<Image
  priority
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, 400px"
/>
```

### Memoisation React

| Technique | Usage |
|-----------|-------|
| `React.memo()` | Avatar, Button, Tag, AlertCard, MissionCard, StatCard, HeaderClient |
| `useMemo` | Tableaux navigation, constantes |
| `useCallback` | Handlers formulaires, navigation |
| `dynamic()` | Lazy loading HeaderClient |

### Polices

```typescript
// layout.tsx
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});
```

**Lexend** : Police optimisee pour la lisibilite et la dyslexie.

## Accessibilite (a11y)

| Element | Implementation |
|---------|----------------|
| `lang="fr"` | Langue declaree pour lecteurs d'ecran |
| `alt` images | Textes alternatifs descriptifs |
| Hierarchie `h1-h6` | Structure semantique respectee |
| `display: 'swap'` | Pas de texte invisible (FOIT) |
| Police Lexend | Optimisee dyslexie |
| Focus visible | Outline sur tous les interactifs |
| ARIA labels | Formulaires et navigation |

## Theming

### Dark/Light Mode

```tsx
// Utilisation
import { ThemeProvider, useTheme } from '@lenny/ui';

// Toggle
const { theme, toggleTheme } = useTheme();
```

**Script anti-flash** : Le theme est applique avant le rendu React via `getThemeInitScript()`.

### Design Tokens

Variables CSS dans `packages/ui/src/ui/token.css` :

```css
:root {
  --color-primary: ...;
  --color-background: ...;
  --font-family-base: 'Lexend', system-ui, sans-serif;
  --spacing-md: 16px;
  --radius-md: 8px;
}
```

## Installation

```bash
# Prerequis : Node.js 18+, pnpm 8+
pnpm install
```

## Commandes

```bash
# Developpement
pnpm --filter @lenny/web dev           # App web → http://localhost:3000
pnpm --filter @lenny/ui storybook      # Storybook → http://localhost:6006

# Build
pnpm --filter @lenny/web build         # Build production Next.js
pnpm --filter @lenny/ui build-storybook # Build Storybook statique

# Qualite
pnpm lint                              # ESLint tout le projet
pnpm lint:fix                          # Corriger erreurs auto

# Tests
pnpm --filter @lenny/ui test           # Tests Vitest
```

## Metriques Lighthouse cibles

| Metrique | Cible |
|----------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 1.5s |
| CLS | 0 |
| INP | < 100ms |

## Licence

MIT - Cecile Hirschauer
