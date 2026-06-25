> **Statut** : ✅ réalisé · **Couvre** : Bloc 2 — C2.3

# Design System — Lenny & Co

> **Version** : 2.0 — Refonte manga / mascotte lion
> **Auteur** : Cécile Hirschauer
> **Date** : Avril 2026
> **Contexte** : Plateforme éducative pour enfants DYS — Web (parents) + Mobile (enfants)

---

## 1. Vision & Identité

### 1.1 Concept directeur

Lenny & Co adopte une identité visuelle **fun, chaleureuse et inclusive**, inspirée du style manga japonais. La mascotte **Lenny**, un lion courageux et bienveillant, accompagne les enfants dans leur parcours d'apprentissage. Le lion symbolise la force, le courage face aux difficultés, et la fierté de progresser.

L'univers visuel se décline en **deux registres** :

| Interface | Ton | Style manga |
|-----------|-----|-------------|
| **Web (parents/dashboard)** | Professionnel, rassurant, accessible | Manga doux — traits épurés, illustrations subtiles, Lenny en icône discrète |
| **Mobile (enfants)** | Ludique, motivant, immersif | Manga expressif — Lenny animé, bulles de dialogue, effets visuels dynamiques |

### 1.2 Mascotte : Lenny le Lion

**Personnalité** : Encourageant, patient, drôle, courageux

**Déclinaisons visuelles** :

| Variante | Usage | Description |
|----------|-------|-------------|
| `lenny-hero` | Splash screens, onboarding | Lenny en pied, pose dynamique manga (poing levé, sourire), crinière stylisée |
| `lenny-avatar` | Navigation, profils | Buste de Lenny, rond, 48×48px minimum |
| `lenny-celebrate` | Succès, achievements | Lenny en joie avec effets manga (lignes de vitesse, étoiles, confettis) |
| `lenny-think` | Chargement, exercices | Lenny pensif, bulle de réflexion manga |
| `lenny-sad` | Erreurs, encouragements | Lenny compatissant, pas triste — style chibi, goutte manga |
| `lenny-guide` | Tutoriels, aide | Lenny avec un livre/tableau, pose de sensei bienveillant |

**Style graphique** :
- Traits : contours noirs nets (2-3px), style shōnen accessible
- Yeux : grands, expressifs, style manga kawaii
- Crinière : stylisée avec des mèches dynamiques, couleur `--color-lenny-mane` (#F59E0B → ambre chaud)
- Corps : proportions chibi (grosse tête, petit corps) pour les variantes enfants
- Palette Lenny : ambre (#F59E0B), brun chaud (#92400E), crème (#FEF3C7)

---

## 2. Palette de couleurs

### 2.1 Couleurs principales

Toutes les couleurs respectent un ratio de contraste **WCAG 2.1 AA minimum** (4.5:1 texte normal, 3:1 grands textes).

#### Couleurs de marque

| Token | Hex | Rôle | Contraste sur blanc |
|-------|-----|------|---------------------|
| `--color-primary` | `#2563EB` | Actions principales, liens, CTA | 4.6:1 ✅ |
| `--color-primary-light` | `#DBEAFE` | Fonds de mise en avant | — (fond) |
| `--color-primary-dark` | `#1E40AF` | Hover, focus, texte sur fond clair | 7.2:1 ✅ |
| `--color-secondary` | `#7C3AED` | Accents, badges, gamification | 5.4:1 ✅ |
| `--color-secondary-light` | `#EDE9FE` | Fonds secondaires | — (fond) |
| `--color-accent` | `#F59E0B` | Lenny, récompenses, éléments fun | 2.1:1 ⚠️ (jamais sur texte seul) |
| `--color-accent-dark` | `#B45309` | Texte accent accessible | 4.8:1 ✅ |

#### Couleurs sémantiques

| Token | Hex | Rôle |
|-------|-----|------|
| `--color-success` | `#059669` | Validation, progression complète |
| `--color-warning` | `#D97706` | Alertes modérées |
| `--color-error` | `#DC2626` | Erreurs, actions destructives |
| `--color-info` | `#0284C7` | Informations, tips |

#### Neutres

| Token | Hex | Rôle |
|-------|-----|------|
| `--color-text-primary` | `#1F2937` | Texte principal (corps) |
| `--color-text-secondary` | `#6B7280` | Texte secondaire, labels |
| `--color-text-disabled` | `#9CA3AF` | Texte désactivé |
| `--color-bg-primary` | `#FFFFFF` | Fond principal |
| `--color-bg-secondary` | `#F9FAFB` | Fond alterné, cards |
| `--color-bg-tertiary` | `#F3F4F6` | Fond sections, sidebar |
| `--color-border` | `#E5E7EB` | Bordures, séparateurs |
| `--color-border-focus` | `#2563EB` | Focus ring (3px solid) |

### 2.2 Mode sombre (V2)

Le mode sombre est prévu mais non implémenté en V1. Les tokens sont conçus pour faciliter le swap via CSS custom properties.

### 2.3 Mode contraste élevé

Pour les utilisateurs DYS, un mode contraste élevé est disponible :

| Token | Valeur normal | Valeur contraste élevé |
|-------|---------------|------------------------|
| `--color-text-primary` | `#1F2937` | `#000000` |
| `--color-bg-primary` | `#FFFFFF` | `#FFFFFF` |
| `--color-border` | `#E5E7EB` | `#1F2937` |
| `--focus-ring-width` | `3px` | `4px` |

---

## 3. Typographie

### 3.1 Polices

| Police | Usage | Justification |
|--------|-------|---------------|
| **Lexend** (400, 500, 600, 700) | Texte principal, interface entière | Conçue pour améliorer la lisibilité, particulièrement pour la dyslexie. Espacement inter-caractères optimisé. |
| **Lexend** (700, 800) | Titres, headings | Même famille pour la cohérence ; les graisses élevées suffisent pour la hiérarchie |

> **Choix délibéré** : Nous conservons une seule famille typographique (Lexend) sur l'ensemble de la plateforme pour maximiser la lisibilité DYS. Le style manga est porté par les illustrations et la mascotte, pas par la typographie.

### 3.2 Échelle typographique

Base : `16px` — ratio `1.25` (Major Third)

| Token | Taille | Line-height | Poids | Usage |
|-------|--------|-------------|-------|-------|
| `--text-xs` | 12px / 0.75rem | 1.5 | 400 | Légendes, mentions légales |
| `--text-sm` | 14px / 0.875rem | 1.5 | 400 | Labels, texte secondaire |
| `--text-base` | 16px / 1rem | 1.6 | 400 | Corps de texte |
| `--text-lg` | 20px / 1.25rem | 1.5 | 500 | Sous-titres, introductions |
| `--text-xl` | 24px / 1.5rem | 1.4 | 600 | Titres de section (H3) |
| `--text-2xl` | 30px / 1.875rem | 1.3 | 700 | Titres de page (H2) |
| `--text-3xl` | 36px / 2.25rem | 1.2 | 700 | Titre principal (H1) |
| `--text-display` | 48px / 3rem | 1.1 | 800 | Hero, splash, landing |

### 3.3 Règles d'accessibilité typographique

- **Line-height minimum** : 1.5 pour le texte courant (WCAG 1.4.12)
- **Letter-spacing** : `0.02em` par défaut (optimisé DYS)
- **Word-spacing** : `0.05em` minimum
- **Longueur de ligne** : 65-75 caractères maximum (`max-width: 70ch`)
- **Pas de justification** : texte toujours aligné à gauche (`text-align: left`)
- **Taille ajustable** : l'utilisateur peut augmenter la taille de base de 100% à 200% sans perte de contenu

---

## 4. Espacement & Grille

### 4.1 Échelle d'espacement

Base : `4px` — progression × 2

| Token | Valeur | Usage |
|-------|--------|-------|
| `--space-1` | 4px | Micro-espacement (icônes inline) |
| `--space-2` | 8px | Padding interne composants compacts |
| `--space-3` | 12px | Gap entre éléments proches |
| `--space-4` | 16px | Padding standard composants |
| `--space-5` | 20px | Gap sections internes |
| `--space-6` | 24px | Marges entre composants |
| `--space-8` | 32px | Séparation de blocs |
| `--space-10` | 40px | Marges de section |
| `--space-12` | 48px | Grands séparateurs |
| `--space-16` | 64px | Marges de page |

### 4.2 Grille responsive

| Breakpoint | Largeur | Colonnes | Gouttière | Marge |
|------------|---------|----------|-----------|-------|
| Mobile | < 640px | 4 | 16px | 16px |
| Tablet | 640–1024px | 8 | 24px | 32px |
| Desktop | 1024–1440px | 12 | 24px | 64px |
| Wide | > 1440px | 12 | 32px | auto (max 1280px) |

### 4.3 Zones tactiles (mobile enfant)

- **Taille minimum** : 48×48px (WCAG 2.5.8)
- **Espacement entre cibles** : 8px minimum
- **Zone recommandée pour enfants** : 56×56px (doigts plus imprécis)

---

## 5. Composants — Atomic Design

### 5.1 Atomes

#### Boutons

| Variante | Style | Usage |
|----------|-------|-------|
| `btn-primary` | Fond `--color-primary`, texte blanc, border-radius 12px | Actions principales (Valider, Continuer) |
| `btn-secondary` | Fond transparent, bordure `--color-primary`, texte primary | Actions secondaires (Annuler, Retour) |
| `btn-accent` | Fond `--color-accent`, texte `--color-text-primary` | Actions fun (Jouer, Débloquer) |
| `btn-ghost` | Fond transparent, texte `--color-text-secondary` | Actions tertiaires (Passer, Plus tard) |
| `btn-danger` | Fond `--color-error`, texte blanc | Actions destructives |

**Propriétés communes** :
- `border-radius: 12px` (arrondi généreux, cohérent manga)
- `padding: 12px 24px`
- `font-weight: 600`
- `font-size: --text-base`
- Focus : `outline: 3px solid --color-border-focus; outline-offset: 2px`
- Hover : légère élévation (`translateY(-1px)` + `box-shadow`)
- Disabled : `opacity: 0.5; cursor: not-allowed`
- **Mobile enfant** : boutons plus grands (`padding: 16px 32px`, `font-size: --text-lg`)

#### Icônes

- **Bibliothèque** : Lucide Icons (cohérent, accessible, MIT)
- **Taille par défaut** : 24px
- **Taille tactile mobile** : 32px (dans conteneur 48px)
- Toujours accompagnées d'un `aria-label` ou d'un texte visible
- Couleur : hérite du contexte (`currentColor`)

#### Badges & Tags

- Border-radius : `9999px` (pill shape)
- Padding : `4px 12px`
- Fond : variante `-light` de la couleur sémantique
- Texte : variante `-dark` correspondante
- Style manga optionnel : léger `rotate(-2deg)` + bordure noire 1px

#### Inputs

- `border: 2px solid --color-border`
- `border-radius: 8px`
- `padding: 12px 16px`
- `font-size: --text-base` (jamais inférieur)
- Focus : `border-color: --color-border-focus` + focus ring
- Error : `border-color: --color-error` + message en `--color-error`
- Label toujours visible (pas de placeholder-only)

### 5.2 Molécules

#### Card

```
┌─────────────────────────┐
│  [Image / Illustration] │  ← optionnel, border-radius 12px top
│                         │
│  Titre (--text-lg, 600) │
│  Description (--text-sm) │
│                         │
│  [Action]    [Badge]    │
└─────────────────────────┘
```

- `background: --color-bg-primary`
- `border: 1px solid --color-border`
- `border-radius: 16px`
- `box-shadow: 0 1px 3px rgba(0,0,0,0.1)`
- Hover : `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`
- **Variante manga** (mobile) : bordure noire 2px, léger `rotate(1deg)`, effet "dessiné à la main"

#### Barre de progression

- Fond : `--color-bg-tertiary`
- Remplissage : gradient `--color-primary → --color-secondary`
- Border-radius : `9999px`
- Hauteur : 12px (web) / 16px (mobile)
- Animation de remplissage fluide (300ms ease-out)
- Lenny mini apparaît au bout de la barre sur mobile

#### Navigation Item

- Icône + label
- État actif : `--color-primary`, fond `--color-primary-light`
- État hover : fond `--color-bg-tertiary`
- Focus visible obligatoire

### 5.3 Organismes

#### Header Web (parents)

```
┌──────────────────────────────────────────────────────┐
│ [Lenny avatar]  Lenny & Co     [Nav items]  [Profil] │
└──────────────────────────────────────────────────────┘
```

- Fond : `--color-bg-primary` avec `border-bottom: 1px solid --color-border`
- Logo : Lenny avatar 40px + texte "Lenny & Co" en `--text-xl` / 700
- Navigation : liens horizontaux, style discret
- Sticky top

#### Bottom Navigation Mobile (enfants)

```
┌──────────────────────────────────────────────┐
│  🏠 Maison   📚 Exercices   🏆 Succès   👤 Moi │
└──────────────────────────────────────────────┘
```

- 4 items max
- Icônes 32px + label `--text-xs`
- Item actif : couleur `--color-primary` + indicateur dot/barre
- Fond : `--color-bg-primary`, border-top
- `safe-area-inset-bottom` pour les encoches

#### Dashboard Card Grid

- Grille responsive : 1 col mobile → 2 cols tablet → 3 cols desktop
- Gap : `--space-6`
- Cards enfants, progression, activités récentes

---

## 6. Effets manga & Gamification

### 6.1 Éléments visuels manga

Ces effets sont réservés à l'**interface mobile enfant** et utilisés avec parcimonie sur le web.

| Effet | CSS/SVG | Usage |
|-------|---------|-------|
| Lignes de vitesse (speed lines) | SVG radial, animé | Succès, transition entre exercices |
| Étoiles brillantes | CSS `@keyframes sparkle` | Récompense débloquée |
| Bulle de dialogue | SVG avec queue, fond blanc, bordure noire 2px | Messages de Lenny |
| Onomatopées | Texte stylisé en overlay (`"BRAVO!"`, `"SUPER!"`) | Feedback positif |
| Effet explosion/éclat | SVG burst pattern | Niveau complété |
| Sweat drop (goutte manga) | SVG petit trait | Erreur légère, humour |

### 6.2 Animations

- **Durée standard** : 200-300ms
- **Easing** : `cubic-bezier(0.34, 1.56, 0.64, 1)` (légèrement bouncy pour le fun)
- **Respecter `prefers-reduced-motion`** : toutes les animations désactivables
- **Lenny idle** : micro-animation de respiration (scale 1.0 → 1.02, 3s loop)
- **Transitions de page** : slide horizontal mobile, fade desktop

### 6.3 Système de récompenses visuelles

| Niveau | Visuel | Lenny |
|--------|--------|-------|
| Exercice réussi | Étoile dorée + sparkle | `lenny-celebrate` petit |
| Série de 3 | Badge animé + confettis | `lenny-celebrate` moyen |
| Niveau complété | Écran complet, speed lines | `lenny-hero` plein écran |
| Nouveau badge | Modal manga avec encre | `lenny-guide` présente le badge |

---

## 7. Accessibilité — Spécifications détaillées

### 7.1 Conformité visée

**WCAG 2.1 niveau AA** — avec ambition AAA sur les critères typographiques (cible DYS).

### 7.2 Check-list

| Critère | Exigence | Implémentation |
|---------|----------|----------------|
| 1.1.1 Contenu non textuel | Toute image a un alt | Alt descriptifs, illustrations Lenny incluses |
| 1.3.1 Information et relations | Structure sémantique | HTML5 sémantique : `header`, `nav`, `main`, `section`, `article` |
| 1.4.1 Utilisation de la couleur | Couleur jamais seul vecteur d'info | Icônes + texte + couleur pour les états |
| 1.4.3 Contraste minimum | 4.5:1 texte, 3:1 grands textes | Tokens vérifiés (cf. section 2) |
| 1.4.4 Redimensionnement | Zoom 200% sans perte | Layout flexible, pas de taille fixe |
| 1.4.12 Espacement du texte | Ajustable sans perte | `letter-spacing`, `word-spacing`, `line-height` tokens |
| 2.1.1 Clavier | Tout accessible au clavier | `tabindex`, focus visible, skip links |
| 2.4.7 Visibilité du focus | Focus ring visible | `3px solid --color-border-focus`, `outline-offset: 2px` |
| 2.5.8 Taille cible | 44×44px minimum | 48px standard, 56px enfants |
| 3.3.2 Labels/Instructions | Champs toujours labellisés | `<label>` explicite, pas de placeholder-only |

### 7.3 Préférences utilisateur (cookies)

Stockées 13 mois maximum (conformité RGPD) :

| Préférence | Valeurs | Défaut |
|------------|---------|--------|
| Taille de police | 100%-200% (par pas de 25%) | 100% |
| Police Lexend | Activé/Désactivé | Activé |
| Contraste élevé | Activé/Désactivé | Désactivé |
| Animations réduites | Activé/Désactivé | Suit `prefers-reduced-motion` |

### 7.4 Navigation clavier

- **Tab** : navigation séquentielle
- **Entrée/Espace** : activation boutons
- **Échap** : fermeture modales/menus
- **Flèches** : navigation dans les listes/grilles
- **Skip link** : "Aller au contenu principal" en premier élément focusable

---

## 8. Responsive & Plateformes

### 8.1 Stratégie

| Plateforme | Approche | Framework |
|------------|----------|-----------|
| Web (parents) | Desktop-first, responsive down | Next.js 14 + CSS Modules |
| Mobile (enfants) | Mobile-first, natif-like | React Native (prévu) ou PWA |

### 8.2 Breakpoints

```css
/* Mobile first pour l'app enfant */
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

### 8.3 Adaptations par plateforme

| Élément | Web desktop | Web mobile | App mobile enfant |
|---------|-------------|------------|-------------------|
| Navigation | Header horizontal | Hamburger menu | Bottom tab bar |
| Cards | Grille 3 colonnes | 1-2 colonnes | 1 colonne, full-width |
| Boutons | Taille standard | Taille standard | Extra-large (56px hauteur) |
| Lenny | Avatar petit (40px) | Avatar petit | Lenny interactif, animé |
| Effets manga | Subtils (hover) | Réduits | Complets |
| Typographie | Base 16px | Base 16px | Base 18px |

---

## 9. Inventaire des écrans

### 9.1 Web — Interface parents

| # | Écran | Description |
|---|-------|-------------|
| W1 | **Homepage / Landing** | Présentation Lenny & Co, Lenny hero manga, CTA inscription, sections bénéfices |
| W2 | **Inscription / Connexion** | Formulaire accessible, Lenny-guide en illustration latérale |
| W3 | **Dashboard parent** | Vue d'ensemble : enfants, progression, activités récentes, alertes |
| W4 | **Profil enfant** | Détails progression, badges obtenus, exercices récents, paramètres |
| W5 | **Paramètres compte** | Profil parent, préférences accessibilité, gestion RGPD |

### 9.2 Mobile — Interface enfants

| # | Écran | Description |
|---|-------|-------------|
| M1 | **Splash / Onboarding** | Lenny hero animé, 3 slides de bienvenue manga |
| M2 | **Accueil enfant** | Salut personnalisé par Lenny, activités du jour, progression |
| M3 | **Liste exercices** | Cards exercices avec difficulté, durée, icônes manga |
| M4 | **Exercice en cours** | Interface immersive, Lenny encourage, barre de progression |
| M5 | **Écran succès** | Célébration manga : Lenny-celebrate, étoiles, nouveau badge |
| M6 | **Mon profil (enfant)** | Avatar personnalisé, badges collection, statistiques fun |

---

## 10. Fichiers & Organisation technique

### 10.1 Structure des tokens (CSS Modules)

```
src/
├── styles/
│   ├── tokens/
│   │   ├── colors.module.css       ← Palette complète
│   │   ├── typography.module.css   ← Échelle typo + Lexend
│   │   ├── spacing.module.css      ← Échelle d'espacement
│   │   ├── breakpoints.module.css  ← Points de rupture
│   │   └── effects.module.css      ← Ombres, animations manga
│   ├── global.css                  ← Reset + custom properties
│   └── accessibility.css           ← Modes contraste, reduced-motion
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Icon/
│   │   └── LennyAvatar/
│   ├── molecules/
│   │   ├── Card/
│   │   ├── ProgressBar/
│   │   ├── NavItem/
│   │   └── LennyBubble/           ← Bulle de dialogue manga
│   └── organisms/
│       ├── Header/
│       ├── BottomNav/
│       ├── DashboardGrid/
│       └── LennyHero/             ← Lenny plein écran (onboarding, succès)
└── assets/
    └── lenny/
        ├── lenny-hero.svg
        ├── lenny-avatar.svg
        ├── lenny-celebrate.svg
        ├── lenny-think.svg
        ├── lenny-sad.svg
        ├── lenny-guide.svg
        └── manga-effects/
            ├── speed-lines.svg
            ├── sparkles.svg
            ├── burst.svg
            └── speech-bubble.svg
```

### 10.2 Conventions de nommage

- **Composants** : PascalCase (`LennyBubble`, `ProgressBar`)
- **Tokens CSS** : kebab-case avec préfixe (`--color-primary`, `--text-base`, `--space-4`)
- **Assets** : kebab-case (`lenny-hero.svg`, `speed-lines.svg`)
- **Fichiers CSS Modules** : `ComponentName.module.css`

---

## 11. Références & Licences

| Ressource | Licence | Usage |
|-----------|---------|-------|
| Lexend | SIL Open Font License | Typographie principale |
| Lucide Icons | MIT | Icônes d'interface |
| Illustrations Lenny | Propriétaire (à créer) | Mascotte et déclinaisons |

---

*Ce Design System est un document vivant. Il sera enrichi au fur et à mesure du développement et de la validation des maquettes.*
