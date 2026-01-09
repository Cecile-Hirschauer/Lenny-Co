# Lenny & Co

Application d'accompagnement a la lecture pour enfants dyslexiques.

## Stack technique

- **Monorepo** : pnpm workspaces
- **Frontend web** : Next.js 14, React 18, TypeScript
- **UI** : Design system interne (`@lenny/ui`) avec Storybook
- **Qualite** : ESLint, Husky, lint-staged

## Structure du projet

```
Lenny-Co/
├── apps/
│   ├── web/          # Application Next.js (parent dashboard)
│   └── mobile/       # Application mobile (a venir)
└── packages/
    ├── ui/           # Design system (@lenny/ui)
    └── config/       # Configurations partagees
```

## Design System (`@lenny/ui`)

Architecture Atomic Design :

- **Atoms** : Avatar, Button, Input, Tag, Typography, ThemeToggle
- **Molecules** : AlertCard, MissionCard, Modal, StatCard
- **Organisms** : BottomNavigation, DashboardLayout, Header, LoginForm, SignupForm, ParentDashboardLayout

### Storybook

Storybook permet de visualiser et tester les composants UI de maniere isolee.

```bash
# Lancer Storybook en developpement
pnpm --filter @lenny/ui storybook
```

Accessible sur `http://localhost:6006`

Fonctionnalites :
- Documentation interactive des composants
- Tests d'accessibilite (addon a11y)
- Tests visuels avec Vitest
- Visualisation des variantes et etats

## Design Patterns (`apps/web`)

L'application web utilise plusieurs design patterns :

- **Composite Pattern** : `ParentDashboardLayout` compose plusieurs sections (header, sidebar, content)
- **Slot Pattern** : `children` et `sidebarContent` comme slots pour injecter du contenu
- **Container/Presentational** : Pages comme containers, composants UI comme presentational
- **Mobile First** : CSS avec breakpoints progressifs (768px, 1024px, 1280px)
- **Atomic Design** : Composants organises en atoms, molecules, organisms

## Optimisations Performance

### Memoisation des composants

Les composants presentationnels sont enveloppes avec `React.memo()` pour eviter les re-renders inutiles :

- **Atoms** : Avatar, Button, Tag
- **Molecules** : AlertCard, MissionCard, StatCard

### Hooks d'optimisation

- **useMemo** : Tableaux de navigation (sidebar, bottom nav)
- **useCallback** : Handlers d'evenements (navigation, formulaires)

### Bonnes pratiques appliquees

- Constantes extraites hors des composants (mock data, mappings)
- Styles inline remplaces par CSS Modules
- Console.logs supprimes en production
- Icones SVG memoises avec `displayName`

## Installation

```bash
pnpm install
```

## Commandes

```bash
# Developpement
pnpm --filter @lenny/web dev         # Lancer l'app web
pnpm --filter @lenny/ui storybook    # Lancer Storybook

# Qualite
pnpm lint                            # Linter tout le projet
pnpm lint:fix                        # Corriger les erreurs

# Build
pnpm --filter @lenny/web build       # Build production
pnpm --filter @lenny/ui build-storybook  # Build Storybook
```

## Licence

MIT - Cecile Hirschauer
