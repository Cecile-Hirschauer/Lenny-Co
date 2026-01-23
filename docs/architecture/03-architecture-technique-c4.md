# Lenny & Co — Architecture Technique (C4 Model)

## Introduction

Ce document présente l'architecture technique de Lenny & Co selon le modèle **C4** (Context, Containers, Components, Code). Le modèle C4 offre une approche hiérarchique permettant de visualiser l'architecture à différents niveaux de détail.

---

## Niveau 1 : Diagramme de Contexte Système

### Vue d'ensemble

Le diagramme de contexte montre Lenny & Co dans son environnement global, avec les utilisateurs et les systèmes externes avec lesquels il interagit.

![Diagramme de Contexte C4](diagrams/06-c4-context.png)

### Acteurs

| Acteur | Description | Interactions |
|--------|-------------|--------------|
| **Parent** | Utilisateur adulte supervisant les progrès de son enfant DYS | Dashboard, notifications, gestion de compte |
| **Enfant DYS** | Utilisateur principal (6-12 ans) utilisant l'application pour apprendre | Exercices, scan, gamification |
| **Orthophoniste** | Professionnel de santé (évolution future) | Suivi thérapeutique, rapports |

### Systèmes Externes

| Système | Rôle | Technologie |
|---------|------|-------------|
| **Supabase** | Backend-as-a-Service | PostgreSQL, Auth, Realtime, Storage |
| **OpenAI API** | Adaptation de texte IA | GPT-4, Embeddings |
| **Google Cloud Vision** | OCR pour scanner les documents | Document AI, Vision API |
| **AWS Polly** | Synthèse vocale | Neural TTS, SSML |
| **Vercel/Cloudflare** | CDN et hébergement | Edge Network, WAF |

---

## Niveau 2 : Diagramme de Conteneurs

### Vue d'ensemble

Le diagramme de conteneurs montre les applications et services qui composent Lenny & Co.

![Diagramme de Conteneurs C4](diagrams/07-c4-containers.png)

### Conteneurs Applicatifs

| Conteneur | Technologie | Responsabilité |
|-----------|-------------|----------------|
| **Application Web Parent** | Next.js 14, React, TypeScript | Dashboard de supervision, vitrine marketing, gestion de compte |
| **Application Mobile Enfant** | React Native, Expo, TypeScript | Exercices interactifs, scan de documents, gamification |
| **Design System** | React, CSS Modules, Storybook | Composants UI partagés, tokens de design, accessibilité DYS |
| **API Gateway** | Next.js API Routes, Edge Functions | Orchestration des appels, validation, rate limiting |
| **Event Bus** | Supabase Realtime, Redis Pub/Sub | Communication asynchrone entre modules |

### Conteneurs de Données

| Conteneur | Technologie | Données stockées |
|-----------|-------------|------------------|
| **Base de Données** | PostgreSQL (Supabase) | Utilisateurs, profils, progression, badges, contenus |
| **Stockage Fichiers** | Supabase Storage / S3 | Images, audio, documents scannés |
| **Cache** | Redis / Supabase Cache | Sessions, données fréquemment accédées |

---

## Architecture de Déploiement

### Vue d'ensemble

![Architecture de Déploiement](diagrams/08-technical-deployment.png)

### Stack Technique Détaillée

#### Frontend

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| Framework Web | Next.js 14 | SSR/SSG pour SEO, API Routes intégrées, excellent DX |
| Framework Mobile | React Native + Expo | Code partagé avec le web, OTA updates, accès natif |
| UI Library | React 18 | Écosystème mature, hooks, concurrent features |
| Styling | CSS Modules | Isolation des styles, pas de runtime JS, contrôle total |
| State Management | React Context + Zustand | Léger, performant, adapté à la taille du projet |
| Design System | Storybook | Documentation vivante, tests visuels, isolation |

#### Backend (Supabase)

| Service | Utilisation | Configuration |
|---------|-------------|---------------|
| **Auth** | Authentification utilisateurs | JWT, OAuth (Google, Apple), RLS |
| **Database** | Stockage relationnel | PostgreSQL 15, Row Level Security |
| **Realtime** | Notifications temps réel | WebSocket, Presence, Broadcast |
| **Storage** | Fichiers médias | Buckets publics/privés, transformations |
| **Edge Functions** | Logique serveur | Deno runtime, TypeScript |

#### Services IA

| Service | Fournisseur | Utilisation |
|---------|-------------|-------------|
| **Adaptation de texte** | OpenAI GPT-4 | Simplification lexicale, reformulation |
| **OCR** | Google Cloud Vision | Extraction de texte depuis images/photos |
| **Text-to-Speech** | AWS Polly | Synthèse vocale avec voix neurales françaises |

#### Infrastructure

| Composant | Service | Configuration |
|-----------|---------|---------------|
| **Hébergement Web** | Vercel | Edge Network, Preview Deploys, Analytics |
| **CDN** | Cloudflare | DDoS Protection, WAF, Bot Management |
| **CI/CD** | GitHub Actions | Tests, Lint, Build, Deploy automatique |
| **Monitoring** | Sentry + PostHog | Error tracking, Product analytics |

---

## Flux de Données

### Flux d'Authentification

```
┌─────────┐     ┌─────────────┐     ┌───────────────┐     ┌──────────┐
│ Client  │────►│ Vercel Edge │────►│ Supabase Auth │────►│ Database │
└─────────┘     └─────────────┘     └───────────────┘     └──────────┘
     │                                      │
     │◄─────────────────────────────────────┘
     │         JWT Token + User Data
```

### Flux de Scan OCR

```
┌─────────┐     ┌─────────────┐     ┌────────────────┐     ┌─────────┐
│ Mobile  │────►│ Edge Func   │────►│ Google Vision  │────►│ OpenAI  │
│  App    │     │ (Upload)    │     │ (OCR)          │     │ (Adapt) │
└─────────┘     └─────────────┘     └────────────────┘     └─────────┘
     │                                                           │
     │◄──────────────────────────────────────────────────────────┘
     │                    Texte Adapté + Audio
```

### Flux de Progression

```
┌─────────────┐     ┌─────────────┐     ┌───────────────┐
│ Exercice    │────►│ Progress    │────►│ Gamification  │
│ Complété    │     │ Update      │     │ (XP, Badge)   │
└─────────────┘     └─────────────┘     └───────────────┘
                           │
                           ▼
                    ┌───────────────┐     ┌─────────────┐
                    │ Supervision   │────►│ Dashboard   │
                    │ (Stats, Alert)│     │ Parent      │
                    └───────────────┘     └─────────────┘
```

---

## Considérations de Sécurité

### Authentification & Autorisation

| Mécanisme | Implémentation |
|-----------|----------------|
| **JWT Tokens** | Supabase Auth avec refresh automatique |
| **Row Level Security** | Politiques PostgreSQL par utilisateur |
| **OAuth 2.0** | Google, Apple Sign-In pour faciliter l'inscription |
| **RBAC** | Rôles parent/enfant/admin avec permissions distinctes |

### Protection des Données

| Mesure | Description |
|--------|-------------|
| **Chiffrement en transit** | TLS 1.3 sur toutes les communications |
| **Chiffrement au repos** | AES-256 pour la base de données |
| **RGPD Compliance** | Données hébergées en Europe (Supabase EU) |
| **Anonymisation** | Données enfants pseudonymisées |

### Sécurité Applicative

| Mesure | Outil |
|--------|-------|
| **WAF** | Cloudflare avec règles personnalisées |
| **Rate Limiting** | Vercel Edge + Supabase |
| **CORS** | Configuration stricte par domaine |
| **CSP** | Content Security Policy headers |

---

## Scalabilité & Performance

### Stratégie de Cache

| Niveau | Technologie | TTL |
|--------|-------------|-----|
| **Edge Cache** | Vercel Edge Network | 1h (statique), 5min (dynamique) |
| **Application Cache** | Redis / Supabase Cache | 15min (sessions), 1h (données) |
| **Browser Cache** | Service Worker | Offline-first pour l'app mobile |

### Optimisations Performance

| Optimisation | Impact |
|--------------|--------|
| **SSR/SSG** | LCP < 1s, SEO optimal |
| **Image Optimization** | WebP/AVIF, lazy loading |
| **Code Splitting** | Bundle initial < 100KB |
| **Edge Functions** | Latence < 50ms |

### Métriques Cibles

| Métrique | Objectif | Actuel |
|----------|----------|--------|
| **LCP** | < 2.5s | 0.6s |
| **FID** | < 100ms | 12ms |
| **CLS** | < 0.1 | 0 |
| **TTFB** | < 200ms | 89ms |

---

## Évolutions Futures

### Court terme (3-6 mois)

- Intégration de l'application mobile React Native
- Mise en place du système de gamification complet
- Ajout de l'espace orthophoniste

### Moyen terme (6-12 mois)

- Migration vers une architecture microservices si nécessaire
- Ajout de fonctionnalités IA avancées (personnalisation adaptative)
- Internationalisation (multi-langues)

### Long terme (12+ mois)

- API publique pour intégrations tierces
- Marketplace de contenus pédagogiques
- Analytics avancés avec ML pour prédiction des difficultés

---

## Conclusion

Cette architecture technique a été conçue pour répondre aux besoins spécifiques de Lenny & Co :

1. **Performance** : Optimisée pour les Core Web Vitals et l'accessibilité DYS
2. **Scalabilité** : Architecture serverless permettant une montée en charge automatique
3. **Sécurité** : Protection des données sensibles des enfants (RGPD)
4. **Maintenabilité** : Architecture modulaire facilitant les évolutions futures
5. **Coût maîtrisé** : Utilisation de services managés avec tarification à l'usage
