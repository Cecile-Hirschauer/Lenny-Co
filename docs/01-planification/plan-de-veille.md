> **Statut** : ✅ réalisé · **Couvre** : Bloc 1 — C1.2

# Processus et Plan de Veille Technologique — Lenny & Co

> **Document vivant** — Ce plan de veille est établi en phase d'avant-projet et évolue au fil du cycle de développement. Les rituels et outils décrits ici doivent rester soutenables sur la durée du projet (Oct 2025 – Sept 2027).
>
> **Version 1 — Avril 2026**
>
> **Correspondance TP Ada Tech School** : ce document couvre la **Partie 2 (Méthodologie du cycle de veille)** et la **Partie 3 (Plan de veille technologique)** du TP *« Assurer une veille technologique performante »*. La Partie 1 (Benchmark produit) est traitée dans `Veille-Benchmark-Concurrentiel.md` et la Partie 4 (Évaluer une techno) dans `Veille-Benchmark-Technique.md`.
>
> **Correspondance référentiel EADL** : C1.2 — Concevoir et mettre en œuvre un système de veille technologique.

---

## 1. Introduction et contexte

La veille technologique n'est pas un exercice isolé : elle est le **moteur continu des décisions d'architecture** du projet Lenny & Co. Elle alimente les benchmarks (concurrentiel + technique v1 → v2 → v3 → …), les ADR, la feuille de route, et in fine le mémoire de certification RNCP 7.

Ce document formalise **comment la veille est organisée** — avec quels outils, quelles sources, quels rituels, et quels livrables — afin qu'elle reste :

- **Soutenable** sur deux ans de projet en solo (10h/semaine, capacité variable)
- **Exploitable** (les informations captées deviennent des décisions, pas un tas de favoris jamais relus)
- **Défendable** face au jury (chaque décision tracée peut être reliée à une source de veille)
- **Ouverte aux contributions d'une équipe fictive** (conformément à la projection RNCP)

### 1.1 Lien avec les livrables existants

| Document | Rôle dans le cycle de veille |
|----------|------------------------------|
| `Veille-Benchmark-Concurrentiel.md` | Snapshot initial de la concurrence (avril 2026), alimente le périmètre *concurrentiel* du plan de veille |
| `Veille-Benchmark-Technique.md` | Arbitrage technique v1 → v2 → v3, alimenté par la veille *stack* |
| `Architecture-Technique-Backend.md` + ADR | Cristallisation des décisions issues de la veille |
| `Plan-Developpement-LennyCo.md` | Cadre organisationnel (rituels, KPI) dans lequel la veille s'insère |
| `Etude-Faisabilite-LennyCo.md` | Contexte budgétaire et contraintes (ressources solo) qui modèlent l'outillage retenu |

### 1.2 Principes directeurs

Quatre principes guident tous les choix de ce document :

1. **Sélectivité plutôt qu'exhaustivité** — mieux vaut 10 sources suivies rigoureusement que 50 sources laissées en friche
2. **Open source quand c'est pragmatique** — priorité aux outils OSS lorsqu'ils sont disponibles sans coût d'apprentissage prohibitif ; pragmatisme préservé sur ce qui fonctionne déjà (Notion)
3. **Capitaliser versionné** — la capitalisation technique vit dans le repo Git (`/docs/veille`), versionnée et rebasable dans le mémoire final
4. **Pas de sur-ingénierie** — démarrer simple, automatiser seulement quand la charge réelle le justifie

---

## 2. Plan de veille technologique (Partie 3 TP)

### 2.1 Objectifs

La veille technologique de Lenny & Co poursuit cinq objectifs hiérarchisés :

| # | Objectif | Bénéfice attendu |
|---|----------|------------------|
| 1 | **Sécuriser les choix de stack existants** (Python/Django, Next.js 15, Flutter, PostgreSQL, Mistral, ML Kit) | Détecter précocement tout signal qui invaliderait un choix actuel (faille sécurité, fin de support, alternative émergente) |
| 2 | **Préparer les arbitrages futurs** (V2 Mobile, IA, HDS) | Disposer d'une base argumentaire chiffrée pour chaque décision à venir |
| 3 | **Maintenir la conformité réglementaire** (RGPD mineurs, accessibilité WCAG, HDS) | Éviter un retard de mise en conformité découvert en audit |
| 4 | **Suivre la concurrence** sur le marché de l'accompagnement DYS | Détecter un pivot stratégique d'un concurrent, l'arrivée d'un nouvel entrant, une évolution de positionnement |
| 5 | **Alimenter le mémoire RNCP** par des synthèses bien sourcées | Transformer la veille passive en contenu défendable en soutenance |

### 2.2 Périmètre — les 7 axes de veille

| Axe | Thèmes surveillés | Pertinence projet |
|-----|-------------------|-------------------|
| **A1 — Stack technique back** | Django 5.x+ releases, DRF, Python 3.12+, Cosmic Python / DDD en Python, Testcontainers, patterns hexagonaux, ruff/mypy, PostgreSQL 16+ (RLS, async) | Cœur du backend V1 |
| **A2 — Stack technique front & mobile** | Next.js 15+ (App Router, RSC, Server Actions, Turbopack), React 19, TypeScript 5.x, Flutter 3.x+ (Impeller, Compose Multiplatform), Dart, Google ML Kit | Cœur du web V1 + mobile V2 |
| **A3 — RGPD & conformité** | CNIL (recommandations mineurs, santé), EDPB, ANSSI, Code santé publique, HDS, jurisprudence Article 8 et 22 | Obligation réglementaire absolue sur données enfants |
| **A4 — Accessibilité & DYS** | WCAG 2.2 / 3.0, RGAA, recherches scientifiques polices adaptées (Lexend, OpenDyslexic), retours d'usage technologies d'assistance | Pilier « Design for All » du projet |
| **A5 — IA open source & NLP enfants** | Mistral (releases, benchmarks), modèles éducatifs, alternatives open source, patterns d'IA bienveillante, Article 22 RGPD en pratique | V2 obligatoire, pivot possible |
| **A6 — Concurrentielle DYS & éco-responsable** | Évolutions Mila Learn / Poppins / Nessy, nouveaux entrants, apps DYS concurrentes, RGESN DINUM, EcoIndex, GreenIT | Positionnement produit + critère RNCP C3.6 |
| **🆕 A7 — IA d'assistance au développement** | Évolutions Claude Code (releases, modèles, capacités), alternatives (Cursor, Codex, Aider), AI Act européen (règlement UE 2024/1689), recommandations CNIL sur l'IA en entreprise, jurisprudence copyright du code généré, bonnes pratiques de prompting sécurisé, empreinte énergétique des modèles | Encadrement de l'outil principal de productivité (Claude Code), conformité RGPD + AI Act, politique `IA-Assistance-Developpement.md` |

### 2.3 Sources retenues par axe

Chaque axe dispose de sources hiérarchisées entre **sources primaires** (suivies hebdomadairement) et **sources secondaires** (consultées au besoin).

#### A1 — Stack technique back (Python / Django)

| Source | Type | Fréquence |
|--------|------|-----------|
| [Django Blog](https://www.djangoproject.com/weblog/) | RSS officiel | Hebdo |
| [Django REST Framework release notes](https://www.django-rest-framework.org/community/release-notes/) | GitHub Releases | Sur release |
| [Real Python](https://realpython.com/) | Newsletter / RSS | Hebdo |
| [Cosmic Python](https://www.cosmicpython.com/) (site du livre Architecture Patterns with Python) | Référence livre + blog | Au besoin |
| [PyCon France](https://www.pycon.fr/) | Conférence | Annuelle |
| GitHub Watch sur `django/django`, `encode/django-rest-framework`, `psf/requests`, `pytest-dev/pytest`, `astral-sh/ruff` | Releases | Continue |
| [CNIL PIA / privacy tech](https://www.cnil.fr/fr/cnilsprint) | RSS | Mensuel |
| [PostgreSQL News](https://www.postgresql.org/news/) | RSS officiel | Hebdo |

#### A2 — Stack technique front & mobile (Next.js, React, Flutter, Dart)

| Source | Type | Fréquence |
|--------|------|-----------|
| [Next.js Blog](https://nextjs.org/blog) | RSS officiel Vercel | Hebdo |
| [React Blog](https://react.dev/blog) | RSS officiel | Hebdo |
| [This Week in React](https://thisweekinreact.com/) | Newsletter | Hebdo |
| [Flutter Medium](https://medium.com/flutter) | RSS officiel Google | Hebdo |
| [Flutter Weekly](https://flutterweekly.net/) | Newsletter | Hebdo |
| [Dart language news](https://dart.dev/news) | RSS officiel | Hebdo |
| GitHub Watch sur `vercel/next.js`, `flutter/flutter`, `googlesamples/mlkit`, `dart-lang/dart` | Releases | Continue |
| [Paris Web](https://www.paris-web.fr/) (conf francophone) | Conférence | Annuelle |

#### A3 — RGPD & conformité

| Source | Type | Fréquence |
|--------|------|-----------|
| [CNIL — Actualités](https://www.cnil.fr/fr/ac) | RSS officiel | Hebdo |
| [CNIL — Recommandations mineurs](https://www.cnil.fr/fr/protection-des-donnees-des-mineurs) | Consultation dédiée | Trimestriel |
| [ANSSI — Publications](https://www.ssi.gouv.fr/actualite/) | RSS officiel | Hebdo |
| [EDPB — Guidelines](https://edpb.europa.eu/edpb_en) | Newsletter | Mensuel |
| Observatoire GS1 / HDS | Consultation dédiée | Trimestriel |
| [Dalloz actualité RGPD](https://www.dalloz-actualite.fr/) | Consultation dédiée (paywall partiel) | Mensuel |

#### A4 — Accessibilité & DYS

| Source | Type | Fréquence |
|--------|------|-----------|
| [W3C WAI Blog](https://www.w3.org/WAI/news/) | RSS officiel | Mensuel |
| [a11y Weekly](https://a11yweekly.com/) | Newsletter | Hebdo |
| [Access iQ](https://www.accessiq.org/) | Consultation | Mensuel |
| [FFDys — Actualités](https://www.ffdys.com/) | Consultation dédiée | Mensuel |
| [APEDYS](https://www.apedys.org/) | Consultation dédiée | Mensuel |
| Études scientifiques (Google Scholar : *« Lexend dyslexia legibility »*) | Alerte Google Scholar | Trimestriel |
| GitHub Watch sur `dequelabs/axe-core`, `pa11y/pa11y` | Releases | Continue |

#### A5 — IA open source & NLP enfants

| Source | Type | Fréquence |
|--------|------|-----------|
| [Mistral Blog](https://mistral.ai/news/) | RSS officiel | Hebdo |
| [Hugging Face Blog](https://huggingface.co/blog) | RSS officiel | Hebdo |
| [AI Weekly](https://aiweekly.co/) | Newsletter | Hebdo |
| [MIT Technology Review — AI](https://www.technologyreview.com/topic/artificial-intelligence/) | RSS | Hebdo |
| Publications scientifiques « AI for education » + « child-safe AI » | Alerte Google Scholar | Trimestriel |

#### A6 — Concurrentielle DYS & éco-responsable

| Source | Type | Fréquence |
|--------|------|-----------|
| Sites officiels Mila Learn, Poppins, Nessy | Consultation + changelogs | Mensuel |
| App Store / Play Store — pages produit concurrents | Alerte manuelle (nouvelle version + reviews) | Bi-mensuel |
| [Maddyness](https://www.maddyness.com/) (actus startup française) | Consultation dédiée | Mensuel |
| [Agence du Numérique en Santé](https://esante.gouv.fr/) | RSS officiel | Mensuel |
| [RGESN DINUM](https://ecoresponsable.numerique.gouv.fr/) | Consultation dédiée | Trimestriel |
| [EcoIndex](https://www.ecoindex.fr/) | Outil de mesure | Au besoin |
| [GreenIT](https://greenit.fr/) | RSS | Mensuel |

#### 🆕 A7 — IA d'assistance au développement

| Source | Type | Fréquence |
|--------|------|-----------|
| [Anthropic News](https://www.anthropic.com/news) | RSS officiel | Hebdo |
| [Claude Code Docs & Changelog](https://docs.claude.com/en/docs/claude-code/overview) | Consultation dédiée | Sur release |
| [Anthropic Usage Policies](https://www.anthropic.com/legal/aup) | Consultation dédiée | Trimestriel + à chaque mise à jour majeure |
| [AI Act — Portail de suivi UE](https://artificialintelligenceact.eu/) | Consultation dédiée | Trimestriel (entrée en application progressive 2025-2027) |
| [CNIL — Fiches pratiques IA](https://www.cnil.fr/fr/intelligence-artificielle) | Consultation dédiée | Trimestriel + alertes ponctuelles |
| [Hugging Face Blog (empreinte énergétique IA, modèles ouverts)](https://huggingface.co/blog) | RSS officiel | Hebdo (déjà axe A5) |
| [OWASP AI Security and Privacy Guide](https://owasp.org/www-project-ai-security-and-privacy-guide/) | Consultation | Semestriel |
| Jurisprudence copyright code généré (Dalloz / Legalis / veille blog Maître Eolas) | Consultation dédiée | Trimestriel |
| Communautés *responsible AI for software engineering* (ACM SIGSOFT, blog GitHub) | Articles ciblés | Mensuel |

### 2.4 Organisation et fréquence

Le rythme de veille est calibré sur la capacité réelle (10h/semaine) pour ne **pas dépasser 10 % du temps disponible** (soit ~1h/semaine + 2h/mois de synthèse).

| Rituel | Fréquence | Durée | Moment |
|--------|-----------|-------|--------|
| **Capture passive** (Feedly RSS + GitHub Watch) | Continue | — | Automatique |
| **Revue hebdomadaire** (filtrage + qualification) | Hebdomadaire | 30 min | Lundi matin |
| **Fiche de veille** (item qualifié comme important) | À chaque détection | 15-20 min | Au fil de l'eau |
| **Synthèse mensuelle** (200 mots agrégeant les 3-5 apprentissages du mois) | Mensuelle | 1h | Fin de mois |
| **Revisite benchmark** (concurrentiel + technique) | Semestrielle | 1 journée | Avril + octobre |
| **Revue ADR** (ADR impactés par la veille) | Au besoin | Variable | Déclenché par un item qualifié critique |

### 2.5 Critères d'alerte et de qualification

Chaque item capté est qualifié sur **3 dimensions** (notation 1 à 3 pour garder la simplicité) :

| Dimension | Signification | Seuil d'action |
|-----------|---------------|---------------|
| **Pertinence projet** | L'item concerne-t-il directement Lenny & Co ? (1 = lointain, 3 = central) | ≥ 2 → fiche de veille |
| **Urgence** | L'item impose-t-il une action immédiate ? (1 = pas urgent, 3 = action semaine) | ≥ 2 → escalade |
| **Effort d'adoption** | Coût d'intégration si décision d'action (1 = trivial, 3 = refactoring) | Informatif seulement |

**Critères d'alerte immédiate** (déclenchent une escalade le jour même) :

- Faille de sécurité critique (CVE ≥ 7) sur une dépendance de la stack
- Changement réglementaire majeur (nouvelle recommandation CNIL sur les mineurs, évolution HDS, etc.)
- Breaking change dans Django 5.x, Next.js 15.x ou Flutter 3.x qui impacte une feature livrée ou en cours
- Annonce de fin de support d'une brique critique (ex : obsolescence annoncée de ML Kit)
- Lancement produit concurrent majeur (Mila Learn / Poppins / Nessy) ou arrivée d'un nouvel entrant sérieux

### 2.6 Rôles (cadre théorique équipe + réalité solo)

Conformément à la démarche RNCP 7 qui attend une **projection en équipe complète**, les rôles ci-dessous sont présentés en cadre théorique. Dans la réalité, tous les rôles sont assumés par la candidate solo — la répartition reste un livrable pédagogique sur l'organisation d'équipe.

| Rôle | Responsabilités en matière de veille | Sources primaires |
|------|-------------------------------------|-------------------|
| **Lead Dev / Architecte** | Veille stack back + front + architecture + IA + outils d'assistance IA | A1, A2, A5, **A7** |
| **DevOps / SRE** | Veille infrastructure, sécurité, Azure, HDS | A1 (sécurité), A3 (HDS) |
| **DPO / Chef de projet** | Veille RGPD, conformité, CNIL, AIPD, politique d'usage IA | A3, **A7 (volet réglementaire)** |
| **UX/UI Designer** | Veille accessibilité, recherches DYS, design system | A4 |
| **Product Owner** | Veille concurrentielle, marché, associations DYS | A6 |
| **QA** | Veille outils de tests, a11y tooling, sécurité applicative | A1 (pytest, ruff), A4 (axe-core) |

**Note solo** : en réalité, le rythme de capture est mutualisé (30 min/semaine pour l'ensemble des axes), et les fiches de veille sont rédigées au fil de l'eau selon la pertinence. La projection en rôles sert surtout à structurer la distribution des sources — pour que tous les axes soient couverts, même s'ils le sont par une seule personne.

### 2.7 Livrables de veille

| Livrable | Fréquence | Emplacement | Usage |
|----------|-----------|-------------|-------|
| **Fiche de veille qualifiée** | À la demande | `/docs/veille/fiches/AAAA-MM-DD-titre.md` | Tracer un item jugé digne d'attention |
| **Synthèse mensuelle** | Mensuelle | `/docs/veille/syntheses/synthese-AAAA-MM.md` | Agrégation des apprentissages, matière pour mémoire |
| **Synthèse trimestrielle** | Trimestrielle | `/docs/veille/syntheses/synthese-T-AAAA.md` | Vue d'ensemble pour chef de projet / PO |
| **Alertes critiques** | Au déclenchement | Email + Notion | Réaction immédiate à un signal fort |
| **Revisite benchmarks** | Semestrielle | Mise à jour de `Veille-Benchmark-*.md` | Correction des scores, ajustement des recommandations |
| **ADR alimenté par la veille** | Au besoin | `/docs/adr/ADR-XXX-titre.md` | Cristalliser une décision issue de la veille |

---

## 3. Méthodologie — Cycle de veille en 6 étapes (Partie 2 TP)

Le cycle de veille suit les **6 étapes du TP Ada Tech School** : Capter → Filtrer → Qualifier → Capitaliser → Diffuser → Décider. Chaque étape est associée à un outil concret, privilégiant l'open source lorsque cohérent avec les contraintes projet.

### 3.1 Capter

**Outil principal** : **Feedly** (freemium, free tier suffisant pour 100 sources) — agrégateur RSS qui centralise les flux listés en section 2.3.

**Outils secondaires** :
- **GitHub Watch** (natif, gratuit) — activé sur une vingtaine de repos critiques (Django, DRF, Next.js, React, Flutter, ML Kit, pytest, ruff, axe-core, etc.) pour recevoir les notifications de releases
- **Alertes Google Scholar** — surveillance d'études scientifiques sur les polices adaptées DYS et l'IA éducative
- **Newsletters ciblées** (this week in React, Flutter Weekly, a11y Weekly, Django News, Real Python) agrégées dans un label Gmail dédié *« veille-lenny »*
- **Consultation manuelle** — App Store/Play Store concurrents (bi-mensuelle), sites CNIL/ANSSI/EDPB

**Volume cible** : 15-30 items captés par semaine après dédoublonnage automatique. Au-delà, ça signifie que les filtres sont trop larges.

**Justification Feedly vs FreshRSS** : Feedly a été préféré à FreshRSS (OSS auto-hébergé) par pragmatisme — il ne demande aucune infrastructure à maintenir. Un pivot vers FreshRSS est envisageable en V2 si l'on souhaite renforcer la cohérence OSS, mais ce n'est pas prioritaire pour le cadre RNCP.

### 3.2 Filtrer

**Outil principal** : **règles Feedly** (mots-clés *must-have*, exclusions, priorisation par source).

**Méthodologie** :
- **Règles en amont** : les sources sont choisies avec exigence (cf. section 2.3) pour minimiser le bruit à la source
- **Mots-clés positifs** configurés dans Feedly : *DDD*, *Django*, *Flutter*, *WCAG*, *DYS*, *RGPD mineurs*, *Mistral*, *ML Kit*, *Row-Level Security*
- **Mots-clés exclus** : *cryptocurrency*, *NFT*, *Web3* (hors périmètre)
- **Filtrage manuel hebdomadaire** (30 min lundi matin) : scan visuel du feed Feedly, tri en 3 seaux :
  - **Poubelle** (swipe gauche, pas pertinent)
  - **À lire** (item à consulter cette semaine)
  - **À qualifier** (item à passer à l'étape 3)

**Principe** : l'objectif de l'étape filtrer est d'éliminer **80 % du volume capté** avant qualification. Un item qui passe le filtre mérite 15-20 min d'investissement.

### 3.3 Qualifier

**Outil principal** : **template Markdown** de fiche de veille, rédigé dans VS Code, versionné dans le repo Git à `/docs/veille/fiches/AAAA-MM-DD-titre-court.md`.

**Grille de qualification** (notation 1-3) :

- **Pertinence projet** : 1 (lointain) → 2 (impacte potentiellement) → 3 (impact direct et immédiat sur Lenny & Co)
- **Urgence** : 1 (pas urgent) → 2 (à traiter ce trimestre) → 3 (action semaine)
- **Effort d'adoption** : 1 (trivial, ex. bump de version) → 2 (modéré) → 3 (refactoring majeur)

**Template de fiche de veille** :

```markdown
---
date: YYYY-MM-DD
titre: Titre court de l'item
source: https://... (URL)
axe: A1 | A2 | A3 | A4 | A5 | A6
pertinence: 1-3
urgence: 1-3
effort: 1-3
---

## Résumé (en 3-5 lignes)
[Quoi ? Pourquoi ça compte pour Lenny & Co ?]

## Impact projet
[Quel BC / couche / jalon est concerné ? Quelle décision pourrait en découler ?]

## Décision proposée
- [ ] Rien (pour info seulement, passer en archive)
- [ ] À creuser — POC/spike à planifier
- [ ] À intégrer — tâche à ajouter au backlog
- [ ] Alerte — action immédiate, créer un ADR

## Sources complémentaires
- [Autres liens si pertinents]

## Liens avec le projet
- Document impacté : [ex. Veille-Benchmark-Technique.md]
- ADR potentiel : [ex. ADR-013-migration-django-5.x]
- Bounded context : [Identity & Access | Learning & Progress]
```

Items **qualifiés `pertinence ≥ 2`** sont conservés comme fiche de veille. Les autres retournent en archive Feedly.

### 3.4 Capitaliser (étape enrichie — mutualisation POC + apprentissage Flutter)

C'est **l'étape centrale** du cycle dans un contexte solo, parce qu'elle conditionne la transformation de la veille passive en **capital exploitable** pour le développement, le mémoire, et la projection en équipe.

La capitalisation s'appuie sur **deux outils complémentaires** selon la nature du contenu :

**Outil 1 — Notion (pragmatique, déjà en place)**
- Index général de veille (base de données Notion avec filtres par axe, urgence, statut)
- Notes courtes et idées volantes
- Backlog d'items *« à creuser »*
- Utile pour la recherche fulltext rapide et la consultation mobile

**Outil 2 — Repo GitHub `/docs` (structuré, versionné, open source par nature)**
- Fiches de veille qualifiées
- Synthèses mensuelles et trimestrielles
- **Capitalisation des POC** et **apprentissage Flutter/Dart** (détail ci-dessous)
- ADR liés
- Bilinguisme FR/EN possible via sous-dossiers

**Arborescence cible de `/docs/veille` dans le repo** :

```
docs/
├── veille/
│   ├── README.md                           # Vue d'ensemble du système de veille
│   ├── fiches/
│   │   ├── 2026-04-18-django-5.1-async-views.md
│   │   ├── 2026-05-02-cnil-recommendation-mineurs.md
│   │   └── ...
│   ├── syntheses/
│   │   ├── synthese-2026-04.md
│   │   ├── synthese-2026-05.md
│   │   ├── synthese-T2-2026.md             # Trimestrielle
│   │   └── ...
│   └── alertes/                            # Critiques uniquement
│       └── 2026-MM-DD-titre-alerte.md
├── poc/                                    # Mutualisation POC
│   ├── POC-01-backend-ddd-lessons.md
│   ├── POC-02-flutter-ocr-lessons.md
│   └── POC-03-nextjs-lessons.md
├── flutter-learning/                       # Mutualisation apprentissage Flutter
│   ├── README.md
│   ├── snippets/
│   │   ├── camera-mlkit-integration.dart
│   │   ├── custom-accessible-button.dart
│   │   └── ...
│   ├── patterns/
│   │   ├── mvvm-with-riverpod.md
│   │   ├── clean-architecture-mobile.md
│   │   └── ...
│   ├── gotchas.md                          # Pièges rencontrés, contournements
│   └── resources.md                        # Livres, cours, articles de référence
└── adr/                                    # Architecture Decision Records
    ├── ADR-001-ddd-2-bounded-contexts.md
    ├── ADR-009-python-django-vs-kotlin-spring.md
    └── ...
```

#### Capitalisation POC (J0.5)

Chaque POC produit **une fiche de capitalisation obligatoire** en fin d'exercice, indépendamment du résultat. La structure est figée pour que les 3 fiches soient comparables et que le mémoire puisse s'appuyer dessus sans retravail.

**Template `POC-XX-<brique>-lessons.md`** :

```markdown
# POC-XX — <brique> — Retour d'expérience

## Objectif du POC
[Rappel de la question posée]

## Stack retenue pour le POC
[Versions précises, setup minimal]

## Ce qui a été produit
[Périmètre du POC, livrables concrets]

## Ce qui a été appris (positif)
- Pattern qui marche bien
- Choix confirmé
- Productivité mesurée (X tâches/jour, Y lignes/jour)

## Ce qui a été appris (négatif)
- Points de douleur rencontrés
- Contournements mis en place
- Dette technique assumée

## Métriques mesurées
| Indicateur | Valeur | Commentaire |
|---|---|---|
| Temps setup initial | X h | |
| Temps 1er endpoint fonctionnel | X h | |
| Empreinte mémoire à l'idle | X Mo | |
| Couverture tests atteinte | X % | |

## Décisions issues du POC
- [ ] Choix validé (pas d'action)
- [ ] Choix validé mais pattern ajusté — ADR-XXX
- [ ] Choix remis en cause — cf. benchmark révisé

## Ce que je ferais différemment
[Rétrospective honnête — ce que je referais autrement maintenant]

## Patterns réutilisables identifiés
[Snippets, structures de fichiers, configurations à réutiliser dans le sprint complet]
```

**Bénéfice** : à l'issue de J0.5, la candidate dispose de 3 fiches de capitalisation qui deviennent :
- Matière première pour la section *« Phase de POC »* du mémoire
- Fondation des patterns réutilisés dans les sprints J1-J6
- Preuve de lucidité méthodologique face au jury

#### Capitalisation apprentissage Flutter/Dart (J6.5)

L'apprentissage Flutter en octobre-novembre 2026 est une **phase à fort risque de déperdition de connaissance** si elle reste dans la tête. La capitalisation doit être systématique.

**Routine d'apprentissage quotidienne** (pendant J6.5) : à la fin de chaque session Flutter, 10 minutes pour :
1. Ajouter dans `/docs/flutter-learning/gotchas.md` les 1-2 pièges rencontrés dans la journée
2. Sauvegarder dans `/docs/flutter-learning/snippets/` les bouts de code qui ont marché et qui seront réutilisables
3. Mettre à jour `/docs/flutter-learning/resources.md` avec la source qui a permis de débloquer

**Livrables mensuels de J6.5** :
- `flutter-learning/patterns/mvvm-with-riverpod.md` — pattern de gestion d'état retenu
- `flutter-learning/patterns/clean-architecture-mobile.md` — adaptation de l'architecture mobile
- `flutter-learning/accessibility-flutter.md` — comment faire WCAG en Flutter (Semantics, contrastes, police Lexend adaptée)
- `flutter-learning/ocr-mlkit-integration.md` — synthèse intégration ML Kit

**Bénéfice** : à l'entrée de J8 (sprint mobile complet, janvier-avril 2027), la candidate ne redémarre pas de zéro — elle dispose d'un **corpus de référence** qu'elle a elle-même construit, qui sert aussi de démonstration RNCP de capacité d'auto-apprentissage structuré (C4.5 — Planifier la formation).

### 3.5 Diffuser

**Contexte solo** : la « diffusion » classique (partager à l'équipe) n'a pas de sens direct. Elle est **retournée en diffusion vers soi-même** (futur moi) et vers les destinataires finaux du projet (jury RNCP, mémoire).

**Outil principal** : **synthèses mensuelles dans le repo Git** (`/docs/veille/syntheses/synthese-AAAA-MM.md`), publiées en fin de mois.

**Template de synthèse mensuelle** (200-300 mots max) :

```markdown
# Synthèse de veille — Mois AAAA

## Les 3 à 5 apprentissages clés
1. [Item 1 — pourquoi ça compte]
2. [Item 2 — pourquoi ça compte]
...

## Décisions prises ce mois
- [Décision 1 — ADR-XXX]
- [Décision 2 — ajustement backlog]

## Points d'attention pour le mois suivant
- [Signal faible à surveiller]

## Fiches de veille détaillées produites
- [Liens vers /docs/veille/fiches/...]
```

**Contexte équipe fictive** : la même synthèse serait diffusée par email à l'équipe projet, discutée en revue mensuelle (cf. section 4 — Rituels), et archivée sur Notion pour accès rapide.

**Canal exceptionnel — alerte critique** : en cas d'item classé *urgence 3*, envoi immédiat d'un email à l'équipe fictive + création d'une carte Trello *« À traiter cette semaine »*. En contexte solo, l'alerte est matérialisée par la création d'une *« épic prioritaire »* sur Trello.

### 3.6 Décider

**Outil principal** : **ADR** (Architecture Decision Records) stockés dans `/docs/adr/`.

La veille n'a de valeur que si elle conduit à des décisions argumentées. Chaque item de veille *« à intégrer »* ou *« alerte »* doit se traduire par :

- Soit un **nouvel ADR** si la décision est structurante (ADR-013 potentiel : migration Django 5.2 ; ADR-014 potentiel : adoption d'une nouvelle lib d'accessibilité Flutter ; etc.)
- Soit un **ajustement du backlog** (ajout d'une US, repriorisation)
- Soit une **révision de benchmark** (mise à jour Veille-Benchmark-Technique v4 par exemple)

**Format d'ADR** (standard Michael Nygard simplifié) :

```markdown
# ADR-XXX : <Titre décision>

## Contexte
[Quelle situation / signal de veille a provoqué cette décision ?]

## Décision
[Que décidons-nous concrètement ?]

## Alternatives considérées
- Alternative A : [description] — écartée parce que [raison]
- Alternative B : [description] — écartée parce que [raison]

## Conséquences
### Positives
- ...
### Négatives / acceptées
- ...

## Sources de veille référencées
- [Fiche de veille /docs/veille/fiches/AAAA-MM-DD-titre.md]
- [URL source]

## Date
AAAA-MM-DD

## Statut
Proposed / Accepted / Deprecated / Superseded
```

**Bénéfice** : chaque ADR renvoie vers la **fiche de veille** qui l'a inspiré, créant une **chaîne de traçabilité** de la source d'information brute jusqu'à la décision d'architecture. C'est exactement ce que le jury RNCP cherche : de la veille instruite, pas décorative.

---

## 4. Rituels d'animation du cycle de veille

### 4.1 Rituels en contexte solo (réalité)

| Rituel | Fréquence | Durée | Action concrète |
|--------|-----------|-------|-----------------|
| **Capture passive continue** | Continue | 0 min actif | Feedly + GitHub Watch tournent en fond |
| **Lundi veille** | Hebdomadaire | 30 min | Scan Feedly, tri en 3 seaux, création 0-2 fiches de veille si item important |
| **Fin de mois synthèse** | Mensuelle | 1h | Rédaction `synthese-AAAA-MM.md`, archivage |
| **Fin de trimestre retour** | Trimestrielle | 2h | Synthèse trimestrielle + revue des ADR impactés |
| **Semestriel benchmark refresh** | Semestrielle | 1 jour | Mise à jour de `Veille-Benchmark-*.md` |

**Total estimé** : ~8h/mois, soit ~10 % du temps projet.

### 4.2 Rituels en contexte équipe fictive (projection RNCP)

| Rituel | Fréquence | Durée | Participants | Finalité |
|--------|-----------|-------|--------------|----------|
| **Weekly veille share** | Lundi 10h | 20 min async sur Slack | Toute l'équipe | Chaque membre partage 2-3 items qualifiés de la semaine |
| **Monthly veille review** | Fin de mois | 1h synchro | Lead Dev, PO, DPO, UX | Revue collective des apprentissages, votes sur décisions à prendre, mise à jour ADR |
| **Quarterly benchmark refresh** | Fin de trimestre | 1 demi-journée | Toute l'équipe | Revisite des benchmarks concurrentiel + technique, détection de dérive |
| **Alerte critique ad hoc** | Au déclenchement | 15-30 min | Lead Dev + décideur concerné | Décision rapide sur mesure à prendre (breaking change, faille, pivot concurrent) |

Ces rituels sont **compatibles avec la méthodologie Kanban** retenue (cf. `Plan-Developpement-LennyCo.md` §3.2) et **minimaux en overhead** (~2h/mois/personne en équipe complète).

### 4.3 Articulation avec les autres rituels projet

La veille n'est pas un silo. Elle s'articule avec les rituels de pilotage projet :

- La **revue hebdomadaire du board Kanban** (chaque semaine) intègre 5 min sur les éventuels items de veille à ajouter au backlog
- La **démonstration mensuelle** inclut 5 min de *« ce qu'on a appris ce mois de la veille »*
- La **rétrospective mensuelle** peut déclencher des ajustements du processus de veille lui-même (sources à ajouter, à retirer, critères à affiner)

---

## 5. Automatisation envisagée

Conformément au principe *« pas de sur-ingénierie »*, l'automatisation est **progressive** et activée seulement si la charge manuelle le justifie.

### 5.1 Automatisation V1 (dès le démarrage — gratuite, minimale)

| Automatisation | Outil | Bénéfice |
|----------------|-------|----------|
| **Agrégation RSS** | Feedly | Déjà configuré à l'étape 3.1 |
| **Notifications releases** | GitHub Watch | Déjà configuré à l'étape 3.1 |
| **Template hebdomadaire** | GitHub Action (cron Lundi 8h) qui crée un fichier `docs/veille/hebdo/AAAA-WW.md` vide à remplir | Évite l'oubli du rituel |
| **Template mensuel** | GitHub Action (cron dernier jour du mois) qui crée `docs/veille/syntheses/synthese-AAAA-MM.md` pré-rempli | Évite l'oubli, cadre la synthèse |

**Exemple de workflow GitHub Actions** :

```yaml
# .github/workflows/create-weekly-veille-template.yml
name: Create weekly veille template
on:
  schedule:
    - cron: '0 8 * * 1'  # Lundi 8h UTC
  workflow_dispatch:

jobs:
  create-template:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Create template
        run: |
          YEAR=$(date +%Y)
          WEEK=$(date +%V)
          FILE="docs/veille/hebdo/${YEAR}-W${WEEK}.md"
          mkdir -p $(dirname $FILE)
          if [ ! -f $FILE ]; then
            cat > $FILE <<EOF
          # Veille — Semaine ${WEEK} de ${YEAR}

          ## Items captés
          - [ ] Item 1
          - [ ] Item 2

          ## Items qualifiés (→ fiches de veille)
          -

          ## Actions déclenchées
          -
          EOF
          fi
      - name: Commit
        run: |
          git config user.name "veille-bot"
          git config user.email "veille-bot@users.noreply.github.com"
          git add .
          git diff --staged --quiet || git commit -m "chore(veille): create template for week ${WEEK} of ${YEAR}"
          git push
```

### 5.2 Automatisation V2 (envisageable, non critique)

| Automatisation | Outil | Pré-requis |
|----------------|-------|------------|
| **Routage RSS → markdown** | n8n (OSS, auto-hébergeable) ou script Python + cron | Serveur disponible + temps pour maîtriser n8n |
| **Synchronisation Notion ↔ Markdown** | API Notion + script Python | Clé API Notion + script à maintenir |
| **Alertes automatiques sur mots-clés critiques** | Feedly Pro + webhook → Slack | Plan Feedly Pro (~6 €/mois) |
| **Dashboard veille** | BookStack self-hosted ou Outline | Serveur disponible, démarche OSS pure |

**Décision V1** : on reste sur l'automatisation minimale (5.1). Les pistes V2 sont documentées mais **non activées** tant que le besoin réel ne se manifeste pas. C'est une démarche Lean volontaire.

---

## 6. Intégration avec les autres livrables et le mémoire

### 6.1 Alimentation des benchmarks

La veille continue alimente les deux benchmarks déjà produits :

- **Veille-Benchmark-Concurrentiel.md** — révision semestrielle en avril et octobre, sur la base des items captés dans l'axe A6 (concurrentiel). Une nouvelle fonctionnalité Mila Learn ou un nouveau concurrent sérieux déclenche une fiche de veille immédiate et potentiellement une mise à jour du benchmark.
- **Veille-Benchmark-Technique.md** — révision semestrielle + chaque fois qu'un changement majeur dans une brique (Django 6.0 à terme, Next.js 16, Flutter 4.0 si existe) nécessite de rescorer.

### 6.2 Alimentation des ADR

Chaque décision d'architecture structurante est tracée dans un ADR (`/docs/adr/`). La veille est la source privilégiée de nouveaux ADR, avec une chaîne de traçabilité :

```
Source externe (blog, release, CNIL…)
    ↓ capté par Feedly / GitHub Watch
Item brut
    ↓ filtré (étape 3.2)
Item retenu
    ↓ qualifié (étape 3.3)
Fiche de veille
    ↓ décidé (étape 3.6)
ADR-XXX
    ↓ matérialisé
Décision d'architecture / US au backlog / modification benchmark
```

### 6.3 Alimentation du mémoire RNCP

Les synthèses mensuelles et trimestrielles constituent le **matériau brut** de la section *« Veille technologique »* du mémoire final. Plutôt que de devoir tout réécrire en fin de projet (août 2027), la candidate capitalise au fil de l'eau :

- Les 24 synthèses mensuelles (oct 2025 – sept 2027) = ~5000 mots de matière première
- Les 8 synthèses trimestrielles = ~2000 mots de matière décantée
- Les 2 revisites de benchmarks (v3, v4) = preuves de révision méthodologique honnête

Cette capitalisation progressive évite l'effort en bloc de rédaction finale et **garantit la véracité** (dates, sources, contexte) des éléments cités en soutenance.

### 6.4 Mapping avec le référentiel EADL (RNCP 7)

| Compétence | Couverture par le présent document |
|-----------|-----------------------------------|
| **C1.2 — Concevoir un système de veille technologique** | Cœur du document |
| **C1.3 — Analyser le contexte du projet** | Section 2.1 (objectifs situés) et 4.2 (projection équipe) |
| **C1.7 — Superviser le projet** | Section 6.2 (chaîne décisionnelle veille → ADR) |
| **C2.1 — Élaborer l'architecture** | Section 6.2 (veille → ADR → architecture) |
| **C2.2 — Préparer l'intégrité du code** | Section 2.2 axe A1 (veille outillage qualité ruff, mypy, pytest) |
| **C3.6 — Documentation technique + numérique responsable** | Section 2.2 axe A6 (éco-responsable) + capitalisation versionnée bilingue |
| **C4.5 — Planifier la formation** | Section 3.4 (apprentissage Flutter structuré via /docs/flutter-learning/) |

---

## 7. Annexes

### 7.1 Checklist de démarrage

Pour rendre ce processus opérationnel, les actions ci-dessous sont à effectuer **une seule fois** en phase d'amorçage :

- [ ] Créer un compte Feedly + ajouter les flux listés en section 2.3
- [ ] Créer les labels et règles de filtrage Feedly
- [ ] Activer GitHub Watch sur les 20 repos critiques
- [ ] S'abonner aux 6 newsletters (This Week in React, Flutter Weekly, Django News, a11y Weekly, AI Weekly, Real Python)
- [ ] Créer le dossier `/docs/veille/` avec la structure décrite en section 3.4
- [ ] Créer le fichier `/docs/veille/README.md` (copie de la synthèse du processus)
- [ ] Créer les fichiers templates : `fiche-veille-template.md`, `synthese-mensuelle-template.md`, `adr-template.md`
- [ ] Créer le workflow GitHub Actions `create-weekly-veille-template.yml` (section 5.1)
- [ ] Créer la base Notion *« Veille Lenny & Co »* avec les vues par axe
- [ ] Bloquer dans le calendrier : Lundi 30 min (veille hebdo), dernier jour du mois 1h (synthèse)

### 7.2 Sources retenues — récapitulatif

Récapitulatif des **sources primaires** (suivies hebdomadairement ou à chaque release) :

| Axe | Sources primaires |
|-----|-------------------|
| A1 (back) | Django Blog · DRF · Real Python · GitHub Watch Django/DRF/pytest/ruff · PostgreSQL News |
| A2 (front/mobile) | Next.js Blog · React Blog · This Week in React · Flutter Medium · Flutter Weekly · Dart News · GitHub Watch next.js/flutter/ml-kit |
| A3 (RGPD) | CNIL Actualités · ANSSI · EDPB |
| A4 (a11y/DYS) | W3C WAI · a11y Weekly · FFDys · APEDYS · GitHub Watch axe-core/pa11y |
| A5 (IA) | Mistral Blog · Hugging Face · AI Weekly |
| A6 (concurrence/éco) | Sites Mila/Poppins/Nessy · App Store concurrents · ANS · RGESN |
| 🆕 A7 (IA d'assistance) | Anthropic News · Claude Code Docs · AI Act Portail · CNIL IA · OWASP AI Security |

**Sources secondaires** : consultations manuelles ou alertes ciblées (Google Scholar, Dalloz, Maddyness, MIT Technology Review, GreenIT, communautés *responsible AI*). Volume total : ~50 sources surveillées, dont ~25 en capture active.

### 7.3 Glossaire

| Terme | Définition |
|-------|-----------|
| **Fiche de veille** | Document markdown qualifiant un item capté comme pertinent (cf. template section 3.3) |
| **Synthèse mensuelle** | Agrégation en 200-300 mots des 3-5 apprentissages du mois (cf. template section 3.5) |
| **Item qualifié** | Item ayant passé la grille pertinence/urgence/effort ≥ 2/1/* |
| **Alerte critique** | Item classé *urgence 3* déclenchant une action immédiate (email équipe fictive, carte Trello, ADR éventuel) |
| **ADR** | Architecture Decision Record — document structuré tracer une décision d'architecture et son raisonnement |
| **Axe de veille** | Un des 7 domaines surveillés (A1 à A7 dans ce document) |
| **Capitalisation** | Transformation d'une information captée en actif durable (fiche, pattern, snippet, ADR) |

### 7.4 Placeholders à compléter

- [À COMPLÉTER] : création effective du dossier `/docs/veille/` dans le repo backend dès le J1 (mai 2026)
- [À COMPLÉTER] : publication du premier `synthese-2026-05.md` à fin mai 2026
- [À VALIDER] : éventuelle migration Feedly → FreshRSS en V2 si démarche OSS pure souhaitée
- [À VALIDER] : éventuelle mise en place n8n / automatisations avancées en V2 si charge manuelle trop forte

---

*Document rédigé dans le cadre de l'avant-projet Lenny & Co — Certification RNCP 7 « Expert en Architecture et Développement Logiciel ».*
*Version 1 — Avril 2026. Couvre la Partie 2 (Méthodologie) et la Partie 3 (Plan de veille) du TP Ada Tech School « Assurer une veille technologique performante ».*
*Document vivant — mise à jour prévue semestriellement ou à chaque révision majeure du cycle de veille.*
