> **Statut** : ✅ réalisé · **Couvre** : Bloc 1 — C1.1

# Étude de Faisabilité — Lenny & Co

*Version 3 — Avril 2026 (mise à jour stack Python + Django + Flutter + Next.js, architecture simplifiée à 2 bounded contexts, intégration phase de POC)*

## 1. Introduction

### 1.1 Objectif de l'étude

La présente étude de faisabilité vise à évaluer la capacité à mener à bien le projet **Lenny & Co**, une plateforme numérique éducative destinée à accompagner les enfants présentant des troubles DYS (dyslexie, dysorthographie, dyscalculie) et leurs familles. Cette analyse constitue une étape préalable au lancement du développement, permettant de prendre une décision éclairée de type **Go / No Go** sur la base de critères objectifs.

### 1.2 Périmètre

Le projet se découpe en deux versions majeures :

| Version | Périmètre fonctionnel | Cibles | Plateforme |
|---------|----------------------|--------|------------|
| **V1** | Dashboard parent, page d'accueil publique, système d'authentification, suivi des progrès | Parents d'enfants DYS | Application web (Next.js 15) |
| **V2** | Application enfant mobile, intégration IA (Mistral), espace orthophoniste/enseignant, données de santé, feature OCR « Scan & Adapt » | Enfants, orthophonistes, enseignants | Application mobile (Flutter) + extension web |

### 1.3 Contexte

Le marché de l'accompagnement des troubles DYS souffre d'une fragmentation technologique importante : les familles naviguent entre de multiples outils déconnectés, sans vision unifiée du parcours de l'enfant. Lenny & Co ambitionne de créer un écosystème cohérent, centré sur l'accessibilité et la protection des données sensibles d'un public mineur.

### 1.4 Évolution de l'étude (v1 → v2 → v3)

- **v1** (Décembre 2025) : cadrage initial, stack Kotlin + Spring Boot, 5 bounded contexts
- **v2** (Avril 2026) : intégration du critère numérique responsable (C3.6 EADL)
- **v3 (présente version)** : révision suite au benchmark technique v3 qui a conduit à une **bascule de la stack backend de Kotlin/Spring vers Python/Django** après réévaluation honnête du niveau d'expérience réel. Architecture simplifiée à **2 bounded contexts** au lieu de 5. Ajout d'une **phase de POC** en amont du développement.

Cette trajectoire de révision est elle-même un livrable méthodologique : elle illustre la capacité à réviser honnêtement ses choix architecturaux face à de nouvelles informations — posture attendue par le référentiel EADL (critères C1.2 et C1.3).

---

## 2. Faisabilité technique

### 2.1 Stack technologique retenu (v3)

| Couche | Technologie | Justification |
|--------|------------|---------------|
| **Front-end web** | Next.js 15, TypeScript, React Server Components, CSS Modules | Leader benchmark (4,63/5), App Router + RSC matures, maîtrise opérationnelle immédiate, SEO/SSR natif |
| **Back-end** | Python 3.12 + Django 5.x + Django REST Framework | Leader benchmark v3 (4,44/5), expertise opérationnelle confirmée, batteries-included, productivité immédiate |
| **Mobile cross-platform (V2)** | Flutter 3.27+ (Dart) | Arbitrage qualitatif : performance UI de référence, typage strict Dart, écosystème Google stabilisé, apprentissage d'une techno nouvelle |
| **Base de données** | PostgreSQL 16+ avec Row-Level Security (RLS) | Double barrière sécurité, maturité, conformité RGPD |
| **Infrastructure** | Azure (à confirmer post-formation juin 2026) | Écosystème complet, certifications de conformité européennes, support HDS V2 |
| **IA (V2)** | Mistral (open source) | Souveraineté des données, modèle français, pas de transfert hors UE |
| **OCR mobile (V2)** | Google ML Kit (on-device) | Traitement local, pas de transfert cloud, respect RGPD enfants |
| **Architecture** | Monolithe Django modulaire, DDD-light + Hexagonal, **2 bounded contexts** | Cohérence du code, séparation métier claire, simplicité adaptée au dev solo |
| **Organisation du code** | 3 dépôts distincts (backend Python, web Next.js, mobile Flutter) | Technologies hétérogènes, build et CI indépendants, typage partagé via OpenAPI |

**Justification du choix Python + Django vs Java + Spring** (benchmark v3) : l'analyse honnête des ressources réelles (expérience Java uniquement académique, expertise Python/Django confirmée via le projet ZenLog de mars 2026) a conduit à privilégier la stack où la productivité est immédiate. Le choix Python+Django n'est pas un renoncement à l'exigence architecturale : c'est au contraire un terrain *plus difficile* pour le DDD (ORM actif en tension avec le paradigme) qui exige une discipline supérieure — discipline déjà posée dans ZenLog et qui sera approfondie sur Lenny & Co grâce à ses enjeux métier plus riches.

### 2.2 Architecture applicative — 2 bounded contexts

L'architecture repose sur le **Domain-Driven Design** simplifié à **deux bounded contexts** (au lieu de cinq dans la v1), afin de refléter plus honnêtement la granularité réelle du domaine métier :

- **Identity & Access** — gestion des utilisateurs (parents, enfants, orthophonistes, administrateurs), authentification, relations de soin (CareRelation), ABAC PolicyEvaluator. Les « vues d'accompagnement » (parent consultant les progrès de son enfant) sont traitées comme des **projections filtrées par ABAC** plutôt que comme un contexte métier autonome.
- **Learning & Progress** — catalogue d'exercices, sélection adaptative, profil d'apprenant, tracking de progression, compétences, milestones, gamification. La progression est une vue temporelle de l'apprentissage, pas un domaine distinct.

**Justification de la simplification 5 → 2 BC** :

La version initiale distinguait cinq contextes (Identity, Progress, Achievement, Learning, Monitoring). Une analyse critique de la densité métier réelle a révélé que quatre de ces contextes ne disposaient pas d'un **langage ubiquitaire réellement distinct** — *Achievement* était une vue temporelle de *Learning*, *Monitoring* une projection filtrée d'*Identity* et *Progress*. Maintenir cinq BC artificiels aurait créé une infrastructure événementielle complexe sans bénéfice fonctionnel pour un projet solo à délai contraint. Cette simplification est un choix d'architecte mature : *la granularité DDD doit refléter la complexité du domaine, pas la démontrer artificiellement*.

Le modèle d'autorisation repose sur **ABAC** (Attribute-Based Access Control), adapté aux relations multi-acteurs (un parent peut avoir plusieurs enfants suivis par différents professionnels). Ce choix se traduit par une **double barrière de sécurité** : PolicyEvaluator applicatif côté Python (via permissions Django custom) + Row-Level Security côté PostgreSQL.

**Communication inter-BC** : appels de services directs via ports (interfaces Python), plutôt qu'event bus. Paradigme plus simple, plus prévisible et plus facile à tester — adapté à un monolithe Django modulaire.

### 2.3 Compétences techniques requises

| Compétence | Niveau requis | Disponibilité sur le marché | Disponibilité interne (réalité solo) |
|------------|--------------|---------------------------|--------------------------------------|
| Next.js 15 / React / TypeScript | Confirmé | Élevée | ✅ Confirmé (pratique pro) |
| Python 3.12 / Django 5.x / DRF | Confirmé | Élevée (43+ offres Paris) | ✅ Confirmé (expertise, ZenLog) |
| PostgreSQL + RLS | Confirmé | Moyenne | ✅ Acquis sur ZenLog |
| DDD-light / Architecture hexagonale en Python | Intermédiaire → Confirmé | Faible à moyenne | 🟡 Familiarité (ZenLog), expertise en construction sur Lenny & Co |
| **Flutter / Dart** | Confirmé | Moyenne (en croissance) | 🔴 **À apprendre** (courbe reconnue raisonnable : 2-4 semaines) |
| Google ML Kit (OCR on-device) | Intermédiaire | Moyenne | 🔴 À apprendre (POC prévu en V2) |
| Accessibilité (WCAG 2.1 AA, typographie DYS) | Confirmé | Faible | ✅ Acquis (design system posé) |
| DevOps Azure | Confirmé | Moyenne à élevée | 🟡 Formation prévue juin 2026 |
| IA / NLP (Mistral) | Intermédiaire | Faible à moyenne | 🟡 POC prévu en V2 uniquement |

**Constat v3** : l'apprentissage technologique principal du projet se concentre côté **mobile (Flutter/Dart)** et non plus côté backend. Cette répartition est assumée — elle permet de démontrer l'adaptabilité technique (critère RNCP) sans fragiliser la productivité backend. Le POC mobile Flutter OCR en amont du sprint mobile (voir section 4) permet de sécuriser cet apprentissage.

### 2.4 Risques techniques et mitigations (v3)

| Risque | Impact | Mitigation |
|--------|--------|------------|
| **Apprentissage Dart + Flutter** (mobile V2) | Moyen | Formation amont via codelab officiel Flutter Google, POC mobile OCR en sprint dédié, documentation massive, communauté active. Fallback PWA Next.js + Capacitor si blocage majeur. |
| **DDD propre en Django (lutte contre l'ORM actif)** | Moyen | Discipline d'isolation domaine pur / infrastructure Django, mappings manuels entre modèles Django et objets métier, patterns éprouvés de ZenLog (extraction de validations, ports read-only). Les contournements deviennent des preuves d'apprentissage documentées. |
| Traitement OCR éphémère : fiabilité de la suppression immédiate des images | Élevé (RGPD) | Pipeline dédiée avec suppression synchrone post-OCR, audit logs, tests d'intégration spécifiques. OCR on-device Flutter ML Kit privilégié pour éviter tout transfert réseau. |
| Intégration Mistral en V2 : maturité de l'API, qualité des réponses adaptées aux enfants | Moyen | POC anticipé en début V2, fallback prévu vers un modèle alternatif |
| Hébergement HDS pour la V2 : surcoût et contraintes techniques | Moyen | Anticipé dans l'architecture V1 (séparation des données), report des données de santé à la V2 uniquement |
| Double barrière ABAC (Django permissions + RLS) : complexité de cohérence | Moyen | Tests automatisés de cohérence entre les deux couches, documentation exhaustive des policies, simplification à 2 BC réduit le périmètre |
| Choix Azure non finalisé avant juin 2026 | Faible | Architecture cloud-agnostic (containerisation Docker), décision différée sans impact sur le développement applicatif |
| Coordination 3 langages en solo (TS, Python, Dart) | Moyen | Découpage par phase (back + web d'abord, mobile ensuite), paradigmes cousins (TS ↔ Dart sur async/null-safety) |

**Verdict technique : FAISABLE**, sous réserve d'une montée en compétence Dart/Flutter (planifiée via POC), d'une formation Azure (planifiée juin 2026), et d'une discipline architecturale rigoureuse pour porter DDD proprement en Django.

---

## 3. Faisabilité économique

### 3.1 Coûts de l'équipe projet (cadre théorique d'une équipe complète)

Conformément à la démarche RNCP 7 qui attend une **budgétisation en conditions réelles de production**, l'estimation ci-dessous repose sur une **équipe projet complète** (6 personnes) mobilisée sur une durée de **10 mois calendaires** pour la V1, avec des taux journaliers moyens (TJM) conformes au marché français 2026. Il s'agit du coût théorique en conditions industrielles — à distinguer du cadre académique traité en section 4.1, où le projet est porté par une développeuse unique.

| Rôle | TJM | Jours estimés (V1) | Coût estimé |
|------|-----|-------------------|-------------|
| **Product Owner** | 550 € | 80 j | 44 000 € |
| **UX/UI Designer** (spé. accessibilité) | 500 € | 65 j | 32 500 € |
| **Développeur Front-End** (Next.js/TS) | 420 € | 100 j | 42 000 € |
| **Développeur Back-End** (Python/Django) | 450 € | 100 j | 45 000 € |
| **DevOps / SRE** | 500 € | 50 j | 25 000 € |
| **QA / Testeur** (accessibilité + sécurité) | 380 € | 45 j | 17 100 € |
| **TOTAL équipe V1** | — | **440 j** | **205 600 €** |

Pour la **V2** (mobile Flutter + IA Mistral + données de santé), une estimation complémentaire serait nécessaire, intégrant un **développeur mobile Flutter/Dart** (TJM 450 €), un data scientist / ML engineer (TJM 600 €), et un DPO externalisé. Estimation préliminaire : **+130 000 à 190 000 €**.

*Note* : les TJM Python/Django et Kotlin/Spring étant équivalents sur le marché français (450 €/jour), le changement de stack backend n'affecte pas le budget équipe par rapport à la v1.

### 3.2 Stratégie de réduction des coûts : priorité à l'open source

Un levier majeur de maîtrise budgétaire réside dans le recours systématique à des solutions **open source** ou à des offres proposant un **tier gratuit généreux**. Cette stratégie est cohérente avec les valeurs du projet (souveraineté des données, transparence) et permet de réduire significativement les coûts d'infrastructure et d'outillage, en particulier en phase de lancement.

| Besoin | Solution propriétaire (coût) | Alternative open source / gratuite retenue | Économie |
|--------|----------------------------|------------------------------------------|----------|
| Base de données PostgreSQL | Azure Database for PostgreSQL (~100 €/mois) | **Neon** (tier gratuit : 0,5 Go stockage, 190h compute/mois) ou **Supabase** (tier gratuit : 500 Mo) | ~100 €/mois en V1 |
| Hébergement front-end | Azure App Service (~80 €/mois) | **Vercel** (tier gratuit Next.js, idéal en dev/staging) | ~80 €/mois en dev |
| Hébergement back-end Python | Azure App Service B2 (~26 €/mois) | **Azure App Service B1 (~13 €/mois)** suffisant pour Django (empreinte mémoire modeste) ou **Render** (tier gratuit 750h/mois) | ~13-26 €/mois |
| Monitoring d'erreurs | Sentry Team (~310 €/an) | **Sentry self-hosted** (gratuit, open source) ou **GlitchTip** (alternative open source) | ~310 €/an |
| CI/CD | GitHub Actions (minutes payantes au-delà du tier gratuit) | **GitHub Actions** (2 000 min/mois gratuites sur repo public) | Gratuit si repo public |
| Design | Figma (290 €/an) | **Penpot** (open source, auto-hébergeable) | ~290 €/an |
| Emailing transactionnel | Services propriétaires (~120 €/an) | **Resend** (tier gratuit : 3 000 emails/mois) ou **Brevo** (tier gratuit : 300 emails/jour) | ~120 €/an |
| Audit accessibilité | axe Pro (500 €/an) | **axe-core** (open source, CLI + intégration CI) + **Lighthouse** (gratuit) + **Pa11y** (open source) | ~500 €/an |
| IA (V2) | OpenAI / Anthropic API | **Mistral** (open source, déployable on-premise) | Souveraineté + coût maîtrisé |
| OCR mobile (V2) | Google Cloud Vision API (payant par requête) | **Google ML Kit on-device** (gratuit, pas de transfert cloud) | Économie + RGPD |

Cette approche permet d'envisager un **coût d'infrastructure quasi nul en phase de développement** et de ne basculer vers des solutions payantes (managed, HDS) qu'en production et en V2, lorsque les besoins de fiabilité et de conformité l'exigent.

**Bonus stack Python** : l'empreinte mémoire plus modeste de Django (100-200 Mo vs 400-700 Mo pour la JVM Spring) permet de rester sur des tiers d'hébergement inférieurs plus longtemps, réduisant le coût d'infrastructure de ~15 % par rapport au scénario Kotlin/Spring envisagé en v1/v2.

### 3.3 Coûts d'infrastructure (mensuels estimés — production)

Les estimations ci-dessous correspondent à l'environnement de **production**, une fois les tiers gratuits dépassés ou insuffisants pour les exigences de disponibilité.

| Service | V1 (estimé/mois) | V2 (estimé/mois) | Notes |
|---------|------------------|------------------|-------|
| Hébergement front-end (Vercel Pro ou Azure) | 20 – 80 € | 150 € | Vercel Pro à 20 €/mois suffisant en V1 |
| Hébergement back-end Python (Render Pro ou Azure B1) | 13 – 30 € | 80 € | Tier B1 suffisant pour Django en V1 |
| PostgreSQL (Neon Pro ou Azure managed) | 20 – 100 € | 180 € | Neon Pro à ~20 €/mois suffisant en V1 |
| Stockage objets (Azure Blob / S3) | 15 € | 40 € | Images éphémères OCR en V2 |
| CDN | 0 – 20 € | 35 € | Inclus dans Vercel en V1 |
| Monitoring (Sentry self-hosted + Grafana) | 0 – 30 € | 50 € | Self-hosted gratuit, managed en V2 |
| **Surcoût HDS (V2 uniquement)** | — | +150 € | Hébergement certifié données de santé |
| **TOTAL mensuel** | **~68 – 275 €** | **~685 €** | |
| **TOTAL annuel** | **~820 – 3 300 €** | **~8 220 €** | |

**En phase de développement**, le recours aux tiers gratuits ramène le coût d'infrastructure à **< 50 €/mois** (domaine + services résiduels).

### 3.4 Coûts de licences et services tiers (annuels)

| Outil / Service | Coût annuel estimé | Notes |
|----------------|-------------------|-------|
| GitHub (repo public ou Team) | 0 – 570 € | Gratuit si repo public, 570 € si privé (6 users) |
| Penpot ou Figma | 0 – 290 € | Penpot gratuit et open source ; Figma si l'équipe le préfère |
| Sentry (self-hosted ou Team) | 0 – 310 € | Self-hosted gratuit, SaaS si l'équipe manque de temps ops |
| Domaine + certificats SSL | 50 € | lennyandco.fr [À CONFIRMER]. Let's Encrypt pour SSL (gratuit) |
| API Mistral (V2) | 600 – 2 400 € | Variable selon volume ; modèle open source déployable |
| Outils d'audit accessibilité | 0 € | axe-core + Lighthouse + Pa11y : 100 % open source |
| Emailing transactionnel (Resend / Brevo) | 0 – 120 € | Tiers gratuits suffisants en V1 |
| **TOTAL annuel (V1, approche open source)** | **~50 – 1 340 €** | |
| **TOTAL annuel (V1, approche propriétaire)** | **~1 840 €** | |
| **TOTAL annuel (V2, estimation haute)** | **~4 240 €** | Incluant Mistral API |

### 3.5 Synthèse budgétaire

| Poste | V1 (open source) | V1 (propriétaire) | V2 (prévisionnel) |
|-------|-----------------|-------------------|-------------------|
| Équipe projet | 205 600 € | 205 600 € | 130 000 – 190 000 € |
| Infrastructure (1 an) | 820 € | 3 300 € | 8 220 € |
| Licences et services (1 an) | 50 € | 1 840 € | 4 240 € |
| **TOTAL** | **~206 470 €** | **~210 740 €** | **+142 460 – 202 460 €** |

La stratégie open source permet une **économie de ~4 000 €/an** sur les coûts hors équipe en V1 — un gain modeste en valeur absolue mais significatif en pourcentage des coûts d'exploitation, et surtout porteur de sens : souveraineté technique, transparence du code, indépendance vis-à-vis des éditeurs.

### 3.6 Retour sur investissement

Le ROI de Lenny & Co ne se mesure pas uniquement en termes financiers. Il s'agit d'un projet à **impact social** dont la valeur se situe dans :

- La réduction de la charge mentale des familles confrontées aux troubles DYS
- L'unification d'un parcours aujourd'hui fragmenté entre de multiples outils
- La valorisation des progrès de l'enfant dans une démarche positive
- À terme (V2), la création d'un pont entre la famille et les professionnels de santé

Un modèle économique de type **freemium** (fonctionnalités de base gratuites, abonnement premium pour le suivi avancé et l'IA) pourrait permettre d'atteindre l'équilibre financier à partir de [À COMPLÉTER — estimation du nombre d'abonnés nécessaires selon le pricing retenu].

**Levier complémentaire de faisabilité — usage raisonné de l'IA d'assistance au développement** : dans un contexte solo où le financement d'une équipe complète n'est pas accessible (projet à impact social non-marchand), l'usage encadré d'outils d'assistance IA (Claude Code notamment) participe à la viabilité économique du projet en améliorant la productivité sur les tâches à faible valeur ajoutée (boilerplate, tests templates, documentation, traduction FR↔EN). Les règles d'usage, garde-fous sécurité/RGPD et bilan éco-responsable associés sont documentés dans `IA-Assistance-Developpement.md`.

**Verdict économique : FAISABLE**, avec un investissement initial conséquent mais maîtrisé par le phasage V1/V2 et la stratégie open source. Le coût total V1 (~206 à 210 K€) correspond à un projet de taille modeste pour une équipe de 6 personnes sur 10 mois. Le recours prioritaire à l'open source réduit les coûts d'exploitation, renforce la souveraineté technique et s'inscrit dans une démarche de numérique responsable. Le modèle freemium et l'impact social justifient l'investissement.

---

## 4. Faisabilité temporelle

### 4.1 Cadre académique vs. réalité projet

Le cadre de la certification RNCP 7 alloue **160 heures** dédiées au projet, réparties sur deux ans. Une analyse honnête de la charge de travail révèle un écart significatif :

| Référentiel | Heures | Équivalent jours (7h) | Observation |
|-------------|--------|----------------------|-------------|
| Cadre académique | 160 h | ~23 jours | Insuffisant pour le périmètre technique visé |
| Estimation réaliste (10h/semaine, avril 2026 – sept. 2027) | ~750 h | ~107 jours | Cohérent avec la complexité du projet |

Ce constat n'est pas un aveu d'échec de planification — c'est au contraire la démonstration d'une capacité à **évaluer objectivement la charge de travail** et à dimensionner l'effort en conséquence. Un projet de cette envergure (DDD, ABAC, RGPD enfants, accessibilité DYS, web + mobile cross-platform) ne peut pas se réaliser en 160 heures, même pour un développeur expérimenté.

**Note sur la double lecture équipe / solo** : l'étude présente un budget et une composition d'équipe en conditions réelles de production (6 personnes, 205 à 210 K€ pour la V1) conformément à la demande du RNCP 7. Dans les faits, le projet est conduit en solo par la candidate ; la budgétisation théorique reste un livrable pédagogique sur la capacité à dimensionner un projet de cette envergure en conditions industrielles.

### 4.2 Macro-planning (v3 avec phase POC)

| Phase | Période | Jalons clés |
|-------|---------|-------------|
| **Avant-projet** (étude de faisabilité, architecture, RGPD) | Octobre 2025 – Mars 2026 | Faisabilité v1/v2/v3 validée, cartographie RGPD, architecture documentée, maquettes UX, benchmarks concurrentiel et technique |
| **🆕 Phase POC** (validation architecturale en conditions réelles) | Avril – Mai 2026 (semaines 3-5) | POC backend DDD (BC Identity & Access en Python/Django) + POC mobile Flutter OCR + POC front Next.js 15 dashboard |
| **Socle technique** | Mai – Juin 2026 | Setup Python/Django + Next.js + Docker, CI/CD GitHub Actions, design system, base de données PostgreSQL |
| **BC Identity & Access** | Juin – Juillet 2026 | Authentification Django, ABAC via permissions custom, RLS PostgreSQL, CareRelations |
| **Formation Azure** | Juin 2026 | Choix d'infrastructure finalisé |
| **BC Learning & Progress (partie Progress)** | Juillet – Août 2026 | Suivi des progrès, dashboard parent, observations |
| **BC Learning & Progress (partie Learning + gamification)** | Août – Septembre 2026 | Exercices, milestones, gamification légère |
| **Page publique & SEO** | Septembre 2026 | Page d'accueil, SEO, accessibilité DYS |
| **Recette et stabilisation V1** | Septembre – Octobre 2026 | Tests d'accessibilité, audit RGPD, déploiement production |
| **🆕 Apprentissage Flutter/Dart + POC mobile OCR** | Octobre 2026 | Formation Dart + codelab Flutter, POC ML Kit |
| **V2 — Développement mobile + IA Mistral** | Novembre 2026 – Juillet 2027 | Application mobile enfant, intégration Mistral, feature Scan & Adapt |
| **Rédaction du mémoire** | Avril – Août 2027 | Document finalisé (en parallèle de la V2) |
| **Soutenance** | Septembre 2027 | Présentation devant jury |

### 4.3 Points d'attention temporels

- La **phase POC en amont** (avril-mai 2026) est un ajout stratégique de la v3 : elle permet de valider en conditions réelles les choix architecturaux (DDD en Django, typage partagé front/back, faisabilité OCR mobile) avant d'engager le développement complet. Durée : 3-5 semaines pour les 3 POC en parallèle.
- La **formation Azure en juin 2026** est positionnée au cœur du développement V1. L'architecture est conçue cloud-agnostic pour ne pas bloquer les travaux en amont.
- L'**apprentissage Flutter/Dart** est planifié en octobre 2026, avant le développement mobile V2. Cette séquence évite l'apprentissage pendant le développement, tout en permettant de commencer V2 avec un POC OCR déjà validé.
- La **V2 (mobile + IA)** ne démarre qu'après la stabilisation de la V1, les espaces orthophoniste et école étant explicitement reportés hors périmètre.
- La **rédaction du mémoire** chevauche intentionnellement le développement V2, permettant de documenter les décisions au fil de l'eau.

**Verdict temporel : FAISABLE**, à condition de maintenir un rythme régulier de ~10h/semaine et de respecter le phasage POC → V1 → Apprentissage Flutter → V2. Le cadre des 160h académiques est reconnu comme insuffisant et complété par un investissement personnel.

---

## 5. Faisabilité réglementaire

### 5.1 Cadre juridique applicable

Le projet Lenny & Co est soumis à un cadre réglementaire particulièrement exigeant en raison de la nature de ses utilisateurs et des données traitées :

- **RGPD** (Règlement Général sur la Protection des Données) — cadre européen général
- **Article 8 du RGPD** — consentement des mineurs : en France, l'âge du consentement numérique est fixé à 15 ans. En dessous, le consentement parental est obligatoire.
- **Article 22 du RGPD** — décisions automatisées : l'IA ne doit en aucun cas prendre de décision ayant un effet juridique ou significatif sur l'enfant.
- **CNIL — Recommandations sur les droits des mineurs** — obligations renforcées de transparence et de minimisation.

En V2, l'intégration de données de santé (comptes-rendus d'orthophonistes) ajoute :

- **Code de la santé publique** — hébergement HDS obligatoire
- **Consentement séparé** — le consentement pour les données de santé doit être distinct et explicite

### 5.2 Décisions d'architecture RGPD déjà prises

La cartographie RGPD réalisée en mars 2026 a produit des décisions structurantes, conservées inchangées dans la v3 :

| Décision | Principe RGPD | Impact architecture |
|----------|---------------|-------------------|
| Niveau scolaire plutôt que date de naissance | Minimisation | Pas de donnée d'âge exacte en base |
| Troubles DYS formulés comme « préférences d'apprentissage » (V1) | Minimisation, prudence données sensibles | Pas de donnée de santé en V1 |
| Images scannées : traitement éphémère (OCR puis suppression immédiate) | Minimisation, limitation de conservation | Pipeline de suppression synchrone, OCR on-device privilégié |
| Messages d'encouragement parentaux : notifications éphémères | Minimisation | Pas de stockage durable des messages |
| IA en support uniquement, jamais décisionnelle | Article 22 | Aucune décision automatisée |
| Pas de collecte d'adresse postale | Minimisation (pas de finalité justifiée) | Champ absent du schéma |
| Préférence Mistral / open source | Souveraineté des données | Pas de transfert hors UE |
| OCR on-device Flutter ML Kit (V2) | Minimisation transferts, souveraineté | Pas de transfert cloud pour la reconnaissance de texte |

### 5.3 Conformité et obligations

| Obligation | Statut | Action requise |
|------------|--------|---------------|
| Registre des traitements (Art. 30) | Réalisé | À maintenir à jour |
| Analyse d'impact (AIPD / DPIA) | Réalisée | À maintenir, révision V2 obligatoire (données de santé) |
| Consentement parental | Prévu | Mécanisme de double consentement à implémenter (sprint Identity) |
| Droit à l'effacement (Art. 17) | Prévu en architecture | Suppression en cascade via le bounded context Identity & Access |
| Politique de confidentialité | À rédiger | Langage adapté aux enfants + version parents |
| DPO (Délégué à la Protection des Données) | À désigner en V2 | Externalisation recommandée |

**Verdict réglementaire : FAISABLE**, grâce à une anticipation forte des contraintes RGPD dès la phase de conception. L'AIPD a été produite en phase d'avant-projet. Le passage en V2 (données de santé) nécessitera un hébergement HDS, une révision de l'AIPD et un DPO, mais le phasage permet de reporter ces coûts.

---

## 6. Faisabilité organisationnelle

### 6.1 Composition de l'équipe projet (cadre théorique)

| Rôle | Responsabilités | Profil recherché |
|------|----------------|-----------------|
| **Product Owner** | Vision produit, priorisation backlog, lien avec les familles DYS | Connaissance du milieu éducatif spécialisé, méthodes agiles |
| **UX/UI Designer** | Maquettes, design system, audits accessibilité | Spécialisation accessibilité, sensibilité DYS (typographie, contraste) |
| **Développeur Front-End** | Composants React/Next.js, CSS Modules, Atomic Design | Maîtrise TypeScript, App Router Next.js 15, accessibilité WCAG 2.1 AA |
| **Développeur Back-End** | API Python/Django/DRF, bounded contexts DDD, policies ABAC | Expérience DDD-light en Python, sécurité, PostgreSQL RLS |
| **DevOps / SRE** | CI/CD, infrastructure Azure, monitoring, conformité HDS (V2) | Certification Azure, expérience conteneurisation Docker |
| **QA** | Tests fonctionnels, accessibilité, sécurité, RGPD | Expérience tests automatisés, pytest, connaissance WCAG |
| **Développeur Mobile (V2 uniquement)** | Application Flutter, intégration ML Kit OCR | Expérience Flutter/Dart, ML Kit, connaissance iOS/Android stores |

### 6.2 Gouvernance et méthodologie

La méthodologie retenue est **Kanban**, privilégiée pour sa flexibilité face aux contraintes de l'équipe (temps partiel, rythme variable). Ce choix repose sur une analyse pragmatique : les cérémonies Scrum (sprint planning, daily, review, retrospective) consomment un pourcentage significatif du temps disponible sur un projet à capacité contrainte. Le flux tiré de Kanban permet de maximiser le temps de production effective.

Le tableau Kanban est structuré en 5 colonnes :

- **Backlog** — items priorisés par le PO, prêts à être tirés
- **En cours** (WIP limit : 2) — développement actif
- **En revue** (WIP limit : 2) — revue de code, revue accessibilité
- **En test** (WIP limit : 2) — validation QA, tests automatisés
- **Terminé** — item livrable, conforme au Definition of Done

Les cadences suivantes sont adoptées :

- **Revue hebdomadaire du board** : re-priorisation du backlog, identification des blocages
- **Revue mensuelle** : démonstration des incréments aux parties prenantes, rétrospective légère

Le **Definition of Done** intègre des critères spécifiques au projet :

- Code fonctionnel et testé (unitaire + intégration), couverture ≥ 80 % sur le domaine
- Accessibilité vérifiée (score Lighthouse ≥ 95, audit axe sans erreur critique)
- Conformité RGPD vérifiée (pas de donnée collectée sans finalité documentée)
- Documentation technique à jour (ADR si décision structurante, README à jour)

### 6.3 Communication et outils collaboratifs

| Besoin | Outil |
|--------|-------|
| Gestion de code | GitHub (3 dépôts : backend Python, front Next.js, mobile Flutter V2) |
| Gestion de projet | Notion (tableau Kanban) |
| Communication | Slack / Discord |
| Design | Figma ou Penpot |
| Documentation | Markdown (repo) + Word (livrables formels) |
| CI/CD | GitHub Actions (pytest + lint Python côté back ; tsc + Vitest côté front ; flutter test + flutter analyze côté mobile) |

**Verdict organisationnel : FAISABLE**. L'équipe est dimensionnée pour le périmètre, la méthodologie Kanban est adaptée aux contraintes de capacité variable, et le Definition of Done intègre les exigences spécifiques d'accessibilité et de conformité.

---

## 7. Faisabilité — Numérique responsable

L'impact environnemental de la solution est pris en compte dès la phase de conception, conformément aux principes du **numérique responsable** (critère C3.6 EADL) :

| Principe | Mesure concrète |
|----------|----------------|
| **Sobriété fonctionnelle** | Phasage V1/V2 strict — chaque fonctionnalité répond à un besoin validé. Simplification architecturale à 2 BC. |
| **Sobriété technique** | Stack Python/Django à empreinte mémoire modeste (100-200 Mo vs 400-700 Mo JVM) → tier d'hébergement B1 suffisant en V1 |
| **Performance web** | SSR/SSG/RSC (Next.js 15), lazy loading, CSS Modules sans runtime JS → Lighthouse Performance ≥ 90 |
| **Minimisation des données** | Pas de date de naissance, pas d'adresse postale, traitement OCR éphémère, OCR on-device privilégié |
| **Open source** | Outils open source en priorité (Neon, Penpot, axe-core) → mutualisation, transparence |
| **Souveraineté** | Mistral (IA française), hébergement Azure EU → pas de transfert hors UE |
| **Conteneurisation** | Docker pour un dimensionnement juste des ressources cloud |
| **OCR on-device (V2)** | Google ML Kit sur mobile → pas de transfert cloud, respect RGPD + sobriété réseau |
| **Accessibilité = durabilité sociale** | WCAG 2.1 AA, Lexend, contrastes renforcés → inclusion maximale |

**Trade-off assumé — usage d'IA d'assistance au développement** : l'usage d'outils d'assistance IA (Claude Code principalement) a un coût énergétique réel qui dégrade le bilan éco-responsable *en valeur absolue*. Ce coût est néanmoins compensé par un gain en *rendement* sur tâches à forte productivité marginale (boilerplate, tests, documentation) et par les autres leviers de sobriété de l'architecture (monolithe modulaire, Python à empreinte modeste, OCR on-device, React Server Components). Le bilan chiffré, les leviers de sobriété adoptés (prompts précis, réutilisation des sorties, cible < 200 requêtes/mois V1) et les indicateurs de pilotage sont détaillés dans `IA-Assistance-Developpement.md` §5.

**Verdict numérique responsable : FAISABLE**. Les choix d'architecture intègrent nativement les principes d'éco-conception et de sobriété numérique. La bascule vers Python+Django (v3) réduit de ~15 % l'empreinte d'hébergement par rapport au scénario Kotlin/Spring initial. Le coût éco-responsable de l'usage IA est assumé, mesuré et compensé.

---

## 8. Analyse des risques (v3)

### 8.1 Matrice des risques

| # | Risque | Probabilité | Impact | Criticité | Mitigation |
|---|--------|-------------|--------|-----------|------------|
| R1 | Sous-estimation de la charge de travail | Élevée | Élevé | 🔴 Critique | Phasage V1/V2 strict, suivi hebdomadaire de la vélocité, phase POC amont pour dérisquer, report des fonctionnalités non essentielles |
| R2 | Difficulté de recrutement profil accessibilité DYS | Moyenne | Élevé | 🟠 Majeur | Formation interne, partenariat avec associations DYS, consultation d'ergothérapeutes |
| R3 | Non-conformité RGPD découverte tardivement | Faible | Élevé | 🟠 Majeur | AIPD réalisée en phase d'avant-projet, cartographie RGPD déjà effectuée, audit externe prévu |
| R4 | Indisponibilité ou insuffisance de l'API Mistral en V2 | Moyenne | Moyen | 🟡 Modéré | POC anticipé, architecture découplée permettant un fallback vers un autre modèle |
| R5 | Surcoût HDS non budgété | Faible | Moyen | 🟡 Modéré | Estimation intégrée au budget V2, report possible si le budget est contraint |
| R6 | Complexité ABAC : incohérence entre couche applicative (permissions Django) et RLS | Moyenne | Élevé | 🟠 Majeur | Tests automatisés de cohérence, revue de code systématique des policies, simplification à 2 BC réduit le périmètre |
| R7 | Retard formation Azure (juin 2026) | Faible | Faible | 🟢 Mineur | Architecture cloud-agnostic, conteneurisation Docker, décision différable |
| R8 | Abandon du rythme de 10h/semaine sur la durée | Moyenne | Élevé | 🟠 Majeur | Sprints courts, objectifs intermédiaires motivants, livraison continue de valeur, phase POC pour maintenir la motivation par les gains visibles précoces |
| **R9 🆕** | **Apprentissage Flutter/Dart plus long qu'anticipé (V2)** | Moyenne | Moyen | 🟡 Modéré | Formation amont via codelab officiel Google, POC OCR dédié avant développement mobile, fallback PWA Next.js + Capacitor |
| **R10 🆕** | **DDD non-idiomatique en Django (ORM actif)** | Certaine | Faible | 🟢 Mineur | Discipline d'isolation domaine pur, patterns éprouvés de ZenLog, refactorings incrémentaux documentés comme preuves d'apprentissage |
| **R11 🆕** | **Faille sécurité ou RGPD liée à l'usage d'IA d'assistance au développement** (fuite de données dans un prompt, génération de code vulnérable, dépendance malveillante suggérée) | Faible | Élevé | 🟠 Majeur | Politique stricte documentée dans `IA-Assistance-Developpement.md` : zéro donnée réelle dans les prompts, revue humaine systématique de tout code généré, scan de sécurité renforcé (bandit, semgrep, eslint-plugin-security), tests sécurité manuels sur code IA-assisté, traçabilité via trailer Git `AI-assisted: true` |

### 8.2 Plan de contingence

En cas de matérialisation des risques critiques (R1 principalement), le plan de contingence prévoit :

1. **Réduction de périmètre V1** : se concentrer sur le BC Identity & Access + le dashboard parent minimal (partie Progress du BC Learning & Progress), reporter les exercices et la gamification
2. **Report de la V2** : la V2 (mobile, IA, santé) n'est pas engagée tant que la V1 n'est pas stabilisée
3. **Simplification ABAC** : en dernier recours, démarrer avec un RBAC simplifié via Django groups et migrer vers ABAC custom ultérieurement
4. **Report V2 mobile vers PWA** : en cas d'échec de l'apprentissage Flutter, bascule vers une PWA Next.js + Capacitor qui réutilise la stack web existante

---

## 9. Recommandations et décision

### 9.1 Recommandations (v3)

Au terme de cette étude, nous formulons les recommandations suivantes :

1. **Valider le lancement de la V1** avec le périmètre défini (dashboard parent, authentification, suivi des progrès, exercices minimaux, page publique).
2. **Exécuter la phase POC** en avril-mai 2026 (semaines 3-5) pour valider en conditions réelles les trois briques structurantes : POC backend DDD en Python/Django, POC mobile Flutter OCR, POC front Next.js 15 dashboard.
3. **Maintenir le phasage V1/V2 strict** : ne pas engager de développement mobile ou d'intégration IA tant que la V1 n'est pas en production stable.
4. **Maintenir l'AIPD** (Analyse d'Impact relative à la Protection des Données) produite en phase d'avant-projet, avec révision obligatoire en V2 (données de santé).
5. **Planifier l'apprentissage Flutter/Dart** en octobre 2026, avec POC OCR dédié avant développement mobile.
6. **Lancer un POC Mistral** en mai-juin 2027 pour valider la faisabilité technique de la V2 avant d'engager les coûts associés.
7. **Anticiper le recrutement** du profil UX/accessibilité, identifié comme compétence rare.

### 9.2 Décision

| Axe | Verdict |
|-----|---------|
| Technique | ✅ Faisable (stack alignée sur l'expertise réelle, POC amont pour dérisquer) |
| Économique | ✅ Faisable (investissement maîtrisé par le phasage, stack Python réduit l'empreinte infra) |
| Temporel | ✅ Faisable (sous réserve du rythme ~10h/semaine, phase POC ajoutée pour sécuriser) |
| Réglementaire | ✅ Faisable (anticipation RGPD forte, AIPD produite) |
| Organisationnel | ✅ Faisable |
| Numérique responsable | ✅ Faisable (éco-conception intégrée dès l'architecture, stack moins gourmande qu'en v1) |

### **➡️ Décision : GO**

Le projet Lenny & Co est déclaré **faisable** sur l'ensemble des axes évalués. Les risques identifiés sont maîtrisables grâce au phasage V1/V2, à l'anticipation réglementaire, à la phase POC amont qui dérisque les choix techniques, et à une stack technique alignée sur l'expertise réelle de l'équipe. Le lancement de la phase de POC puis du développement V1 est recommandé.

---

*Document rédigé dans le cadre de l'avant-projet Lenny & Co — Certification RNCP 7 « Expert en Architecture et Développement Logiciel ».*
*Version 3 — Avril 2026 : mise à jour stack (Python + Django + Flutter + Next.js), simplification architecturale à 2 bounded contexts, intégration de la phase POC suite au benchmark technique v3.*
