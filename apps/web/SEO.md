# SEO & GEO - Documentation Technique

> Documentation des optimisations SEO (Search Engine Optimization) et GEO (Generative Engine Optimization) pour Lenny & Co.

## Vue d'ensemble

| Aspect | Implementation | Impact |
|--------|----------------|--------|
| Metadata Next.js | `layout.tsx` | Referencement Google, Bing |
| Open Graph | `layout.tsx` | Apercu reseaux sociaux |
| Twitter Cards | `layout.tsx` | Apercu Twitter/X |
| Sitemap | `sitemap.ts` | Decouverte des pages |
| Robots | `robots.ts` | Controle du crawling |
| PWA Manifest | `manifest.ts` | Installation mobile |
| Schema.org JSON-LD | `JsonLd.tsx` | Rich snippets + GEO |

---

## 1. Metadata Avancees (`layout.tsx`)

### Configuration complete

```typescript
const SITE_URL = 'https://lenny-and-co.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lenny & Co | Application d\'aide a la lecture pour enfants dyslexiques',
    template: '%s | Lenny & Co',
  },
  description: 'Lenny & Co est une application educative qui aide les enfants dyslexiques...',
  keywords: ['dyslexie', 'aide lecture', 'enfants dyslexiques', ...],
  authors: [{ name: 'Lenny & Co Team' }],
  creator: 'Lenny & Co',
  publisher: 'Lenny & Co',
  robots: { index: true, follow: true, googleBot: { ... } },
  alternates: { canonical: SITE_URL },
  openGraph: { ... },
  twitter: { ... },
  category: 'education',
}
```

### Impact par propriete

| Propriete | Balise HTML generee | Usage |
|-----------|---------------------|-------|
| `metadataBase` | - | Base URL pour les chemins relatifs |
| `title.default` | `<title>` | Titre dans les SERP |
| `title.template` | `<title>` | Format pour les sous-pages |
| `description` | `<meta name="description">` | Extrait dans les SERP |
| `keywords` | `<meta name="keywords">` | Mots-cles thematiques |
| `robots` | `<meta name="robots">` | Directives d'indexation |
| `canonical` | `<link rel="canonical">` | URL canonique (evite duplicata) |

### Open Graph (Facebook, LinkedIn)

```html
<!-- Genere automatiquement -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:url" content="https://lenny-and-co.vercel.app" />
<meta property="og:site_name" content="Lenny & Co" />
<meta property="og:title" content="Lenny & Co | Aide a la lecture..." />
<meta property="og:description" content="Application educative ludique..." />
<meta property="og:image" content="https://lenny-and-co.vercel.app/images/LennyCo_logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Twitter Cards

```html
<!-- Genere automatiquement -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Lenny & Co | Aide a la lecture..." />
<meta name="twitter:description" content="Application educative ludique..." />
<meta name="twitter:image" content="https://lenny-and-co.vercel.app/images/LennyCo_logo.png" />
<meta name="twitter:creator" content="@lennyandco" />
```

---

## 2. Sitemap Dynamique (`sitemap.ts`)

### Implementation

```typescript
import type { MetadataRoute } from 'next'

const SITE_URL = 'https://lenny-and-co.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/login`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/signup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/dashboard`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ]
}
```

### URL generee

```
https://lenny-and-co.vercel.app/sitemap.xml
```

### Priorites

| Page | Priority | changeFrequency | Justification |
|------|----------|-----------------|---------------|
| `/` | 1.0 | weekly | Page d'accueil, point d'entree |
| `/dashboard` | 0.9 | daily | Contenu dynamique utilisateur |
| `/login` | 0.8 | monthly | Page statique |
| `/signup` | 0.8 | monthly | Page statique |

---

## 3. Robots.txt (`robots.ts`)

### Implementation

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Anthropic-AI', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
    ],
    sitemap: 'https://lenny-and-co.vercel.app/sitemap.xml',
  }
}
```

### URL generee

```
https://lenny-and-co.vercel.app/robots.txt
```

### Crawlers IA autorises

| User-Agent | Moteur IA | Objectif |
|------------|-----------|----------|
| `GPTBot` | OpenAI | Entrainement GPT |
| `ChatGPT-User` | OpenAI | Browsing ChatGPT |
| `Google-Extended` | Google | Bard/Gemini |
| `Anthropic-AI` | Anthropic | Claude |
| `Claude-Web` | Anthropic | Claude Web |

> **Note GEO** : Autoriser ces crawlers permet a l'application d'etre referencee dans les reponses des IA generatives.

---

## 4. PWA Manifest (`manifest.ts`)

### Implementation

```typescript
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lenny & Co - Aide a la lecture pour enfants dyslexiques',
    short_name: 'Lenny & Co',
    description: 'Application educative ludique...',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'fr',
    categories: ['education', 'kids', 'health'],
    icons: [
      { src: '/images/LennyCo_logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/images/LennyCo_logo.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
```

### URL generee

```
https://lenny-and-co.vercel.app/manifest.webmanifest
```

### Impact

- Installation sur l'ecran d'accueil mobile
- Experience "app-like" en mode standalone
- Categorisation dans les stores PWA

---

## 5. Donnees Structurees JSON-LD (`JsonLd.tsx`)

### Composant

```typescript
'use client'

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Schema SoftwareApplication

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lenny & Co",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "featureList": [
    "Scan OCR intelligent pour numeriser des textes",
    "Exercices de lecture gamifies et adaptatifs",
    "Suivi de progression pour les parents",
    "Interface adaptee aux enfants dyslexiques",
    "Tableau de bord orthophoniste",
    "Systeme de recompenses et badges",
    "Police de caracteres optimisee pour la dyslexie"
  ],
  "audience": {
    "@type": "EducationalAudience",
    "audienceType": "Enfants dyslexiques (6-12 ans)"
  }
}
```

### Schema Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lenny & Co",
  "url": "https://lenny-and-co.vercel.app",
  "logo": "https://lenny-and-co.vercel.app/images/LennyCo_logo.png"
}
```

### Schema WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Lenny & Co",
  "url": "https://lenny-and-co.vercel.app",
  "inLanguage": "fr"
}
```

### Impact GEO des schemas

| Propriete | Usage IA Generative |
|-----------|---------------------|
| `applicationCategory` | Classification automatique |
| `featureList` | Reponses aux requetes "quelles fonctionnalites..." |
| `audience` | Ciblage des requetes "application pour enfants dys..." |
| `offers.price` | Reponses aux requetes "application gratuite..." |
| `operatingSystem` | Reponses aux requetes "disponible sur..." |

---

## 6. Verification et Tests

### Outils de validation

| Outil | URL | Usage |
|-------|-----|-------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Validation JSON-LD |
| Schema.org Validator | https://validator.schema.org | Validation schemas |
| Meta Tags Debugger | https://metatags.io | Apercu OG/Twitter |
| Facebook Debugger | https://developers.facebook.com/tools/debug | Cache OG Facebook |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Apercu Twitter |

### Commandes de verification

```bash
# Verifier le sitemap
curl https://lenny-and-co.vercel.app/sitemap.xml

# Verifier robots.txt
curl https://lenny-and-co.vercel.app/robots.txt

# Verifier le manifest
curl https://lenny-and-co.vercel.app/manifest.webmanifest
```

### Test local

```bash
# Build et preview
pnpm --filter web build
pnpm --filter web start

# Verifier les fichiers generes
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/robots.txt
```

---

## 7. Checklist SEO

### Technique

- [x] Metadata complete dans `layout.tsx`
- [x] Title avec template pour sous-pages
- [x] Description optimisee GEO (factuelle, orientee solution)
- [x] Open Graph configure
- [x] Twitter Cards configure
- [x] Canonical URL definie
- [x] Robots index/follow
- [x] Sitemap dynamique
- [x] Robots.txt avec crawlers IA
- [x] PWA Manifest
- [x] JSON-LD SoftwareApplication
- [x] JSON-LD Organization
- [x] JSON-LD WebSite

### Performance (impacte SEO)

- [x] Core Web Vitals optimises (voir `PERFORMANCE.md`)
- [x] Images optimisees (Next.js Image)
- [x] Fonts preload avec display swap
- [x] Rendu statique (`force-static`)

### Accessibilite (impacte SEO)

- [x] `lang="fr"` declare
- [x] Alt text sur images
- [x] Hierarchie headings respectee
- [x] Police Lexend (optimisee dyslexie)

---

## 8. Ressources

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org SoftwareApplication](https://schema.org/SoftwareApplication)
- [Google Search Central](https://developers.google.com/search/docs)
- [Web.dev SEO](https://web.dev/learn/seo)
- [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) (paper academique)
