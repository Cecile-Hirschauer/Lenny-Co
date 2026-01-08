# 🎨 Lenny UI - Design Tokens

Ce document référence l'ensemble des "atomes" de design utilisés dans le projet Lenny & Co.
Ces valeurs sont la source de vérité pour garantir la cohérence entre l'application Web (Next.js) et Mobile (React Native).

## 1. Palette de Couleurs (Colors)

L'accessibilité et la bienveillance sont au cœur de nos choix chromatiques. Nous évitons les contrastes purs (Noir/Blanc) pour réduire la fatigue visuelle.

| Rôle | Nom du Token | Valeur Hex | Usage UX |
| :--- | :--- | :--- | :--- |
| **Primaire** | `primary` | `#3B82F6` | Actions principales, liens, header. Couleur rassurante. |
| **Secondaire** | `secondary` | `#FF9500` | Mascotte, éléments ludiques, motivation. |
| **Succès** | `success` | `#1ABFB4` | Validation. Préféré au vert classique pour sa douceur. |
| **Erreur** | `error` | `#E11D48` | Erreurs. Un rouge "framboise" non agressif. |
| **Texte Fort** | `neutral-dark` | `#1E293B` | Titres et contenu principal. Gris profond. |
| **Texte Doux** | `neutral-mid` | `#64748B` | Légendes, textes secondaires. |
| **Fond App** | `bg-paper` | `#F8FAFC` | Fond d'écran global. Blanc cassé anti-éblouissement. |
| **Surface** | `surface` | `#FFFFFF` | Fond des cartes et zones de contenu. |

---

## 2. Typographie (Typography)

**Police :** `Lexend` (Optimisée pour la fluidité de lecture).

### Échelle de Taille (Size)

| Token | Taille (px) | Usage |
| :--- | :--- | :--- |
| `text-xl` | 32px | Grands titres (Onboarding) |
| `text-lg` | 24px | Titres de section |
| `text-md` | 20px | Titres de cartes |
| `text-body-lg`| 18px | Lecture confort (Missions) |
| `text-body-md`| 16px | Texte standard interface |
| `text-caption`| 12px | Mentions légales, détails |

### Hauteur de Ligne (Line-Height) - *Critique pour Dyslexie*

| Token | Ratio | Valeur CSS | Pourquoi ? |
| :--- | :--- | :--- | :--- |
| `leading-tight` | 130% | `1.3` | Titres courts. |
| `leading-normal`| 150% | `1.5` | Texte standard. |
| **`leading-relaxed`** | **170%** | **`1.7`** | **Lecture longue.** Aère le texte pour éviter que les lignes ne "dansent". |

---

## 3. Formes & Espacements (Shapes)

| Token | Valeur | Usage |
| :--- | :--- | :--- |
| `radius-card` | `16px` | Arrondi des cartes (Douceur). |
| `radius-btn` | `999px` | Boutons forme "Pill" (Amical). |
| `spacing-base`| `8px` | Unité de base de la grille. |

---

## 4. Guide d'Utilisation Technique

### 🌐 Web (Next.js / CSS Modules)

Les tokens sont exposés comme **Variables CSS natives** via `packages/ui/src/styles/tokens.css`.

```css
/* Exemple d'utilisation dans un fichier .module.css */
.maCarte {
  background-color: var(--color-surface);
  border-radius: var(--radius-card);
  color: var(--color-neutral-dark);
}

.monTitre {
  font-family: var(--font-family-base);
  font-size: var(--text-xl);
  line-height: var(--leading-tight);
}
```

### 📱 Mobile (React Native)

Les tokens sont exposés comme **Objets TypeScript** via `packages/ui/src/tokens.ts`.

```typescript
// Exemple d'utilisation dans un composant React Native
import { StyleSheet } from 'react-native';
import { colors, typography } from '@lenny/ui/src/tokens';

const styles = StyleSheet.create({
  maCarte: {
    backgroundColor: colors.surface,
    borderRadius: 16, // ou une constante radius si définie
  },
  monTitre: {
    color: colors.neutralDark,
    ...typography.headingXL, // Applique fontSize, fontWeight et lineHeight
  }
});
```
