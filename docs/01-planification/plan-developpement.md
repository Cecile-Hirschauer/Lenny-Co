> **Statut** : ✅ réalisé (noté 100/100) · **Couvre** : Bloc 1 — C1.4

Plan de Développement --- Lenny & Co
====================================

> **Document vivant** --- Ce plan est établi en phase d\'avant-projet et sera mis à jour tout au long du cycle de développement pour refléter les évolutions adoptées.
>
> **Version Avril 2026** : mise à jour de la stack (Python + Django + Flutter + Next.js), simplification architecturale à **2 bounded contexts**, ajout d\'une **phase de POC (J0.5)** en amont du développement, révision des ADR et du backlog, alignement avec l\'étude de faisabilité et le benchmark technique.
>
> **Révision avril 2026 (suite)** : ajout de la politique d'usage de l'IA d'assistance au développement (§7.4 + §10.3, renvois vers `IA-Assistance-Developpement.md`), intégration dans le tableau des écarts (§4.8) des livrables front-end déjà finalisés en janvier 2026 (dashboard parent, Storybook, page publique, SEO/GEO), ajout d'une colonne **Statut** au backlog front-end (§16.4) avec marquage des user stories déjà livrées + ajout de la US FE-16 (Storybook), reformulation de la Formation juin 2026 (**DevOps** — consolidation, hébergement Azure déjà éprouvé via ZenLog mars 2026).

1. Fiche d\'identité du projet
------------------------------

| **Élément**                             | **Description**                                                                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Nom du projet**                       | Lenny & Co                                                                                                                                                                                                       |
| **Description**                         | Plateforme numérique éducative destinée à accompagner les enfants présentant des troubles DYS et leurs familles, en unifiant le suivi des progrès, la communication familiale et l\'accompagnement professionnel |
| **Client / Bénéficiaires**              | Familles d\'enfants DYS (cible primaire)                                                                                                                                                                         |
| **Chef de projet**                      | Cécile H. --- également Architecte logiciel et Lead développeuse                                                                                                                                                 |
| **Date de lancement**                   | Octobre 2025                                                                                                                                                                                                     |
| **Date prévisionnelle de livraison V1** | Octobre 2026 (intégration de la phase POC + jalon Flutter/OCR décalent légèrement vs v2)                                                                                                                         |
| **Horizon V2**                          | Novembre 2026 -- Septembre 2027                                                                                                                                                                                  |

###  

### 1.1 Parties prenantes

| **Partie prenante**                        | **Rôle dans le projet**                                   | **Contact**                   |
|--------------------------------------------|-----------------------------------------------------------|-------------------------------|
| **Familles DYS**                           | Utilisateurs finaux, source des besoins fonctionnels      | Consultation via associations |
| **Associations DYS** (APEDYS, FFDys, etc.) | Expertise métier, validation des parcours utilisateurs    |                               |
| **Orthophonistes, enseignants**            | Futurs utilisateurs professionnels (hors périmètre V1/V2) | À consulter ultérieurement    |

### 1.2 Périmètre et exclusions

**Inclus dans la V1 :**

-   Application web (**Next.js 15**) : page publique, dashboard parent, authentification

-   Back-end API (**Python 3.12 + Django 5.x + DRF**) : **2 bounded contexts** (Identity & Access, Learning & Progress)

-   Système d\'autorisation ABAC avec double barrière (Django permissions applicatif + PostgreSQL RLS)

-   Accessibilité WCAG 2.1 AA, optimisée pour les troubles DYS

-   Conformité RGPD (données de mineurs)

**Inclus dans la V2 (novembre 2026 -- septembre 2027) :**

-   Application mobile enfant (**Flutter / Dart**)

-   Intégration IA (**Mistral**)

-   Feature **OCR « Scan & Adapt »** (Google ML Kit on-device)

**Hors périmètre (post-V2 ou non planifié) :**

-   Espace orthophoniste

-   Espace enseignant / école

-   Traitement de données de santé (HDS)

 

2. Équipe projet
----------------

### 2.1 Composition et compétences (cadre théorique d\'équipe complète)

| **Rôle**                        | **Membre** | **Compétences clés**                                                                          | **Taux d\'allocation**            |
|---------------------------------|------------|-----------------------------------------------------------------------------------------------|-----------------------------------|
| **Chef de projet / Architecte** | Cécile H.  | Architecture DDD-light, vision produit, RGPD                                                  | 100 %                             |
| **Product Owner**               | Cécile H   | Connaissance milieu éducatif DYS, priorisation backlog                                        | \~40 %                            |
| **UX/UI Designer**              | Cécile H   | Accessibilité WCAG, design inclusif DYS (typographie, contrastes)                             | \~30 % (forte en début de projet) |
| **Développeur Front-End**       | Cécile H   | Next.js 15, App Router, React Server Components, TypeScript, CSS Modules, Atomic Design, a11y | 100 % (phase dev)                 |
| **Développeur Back-End**        | Cécile H   | Python 3.12, Django 5.x, DRF, DDD-light en Python, PostgreSQL RLS, ABAC                       | 100 % (phase dev)                 |
| **DevOps / SRE**                | Cécile H   | Azure, Docker, GitHub Actions, monitoring, HDS (V2)                                           | \~25 %                            |
| **QA**                          | Cécile H   | Tests automatisés (pytest + Vitest), audit accessibilité, tests de sécurité                   | \~30 %                            |
| **Développeur Mobile (V2)**     | Cécile H   | Flutter / Dart, Google ML Kit, intégration iOS/Android stores                                 | 100 % (phase V2 mobile)           |

> **Note sur la double lecture équipe / solo** : conformément à la démarche RNCP 7, l\'équipe présentée ci-dessus correspond à un dimensionnement théorique en conditions réelles de production. Dans les faits, le projet est porté en solo.
>
> La projection en équipe pluridisciplinaire est un livrable pédagogique qui démontre la capacité à penser l\'organisation d\'un projet de cette envergure.

### 2.2 Matrice RACI

La matrice ci-dessous définit les responsabilités sur les activités clés du projet.

**Légende** : **R** = Réalise · **A** = Approuve (Accountable) · **C** = Consulté · **I** = Informé

| **Activité**               | **Chef de projet** | **PO** | **UX/UI** | **Dev Front** | **Dev Back** | **DevOps** | **QA** | **Dev Mobile (V2)** |
|----------------------------|--------------------|--------|-----------|---------------|--------------|------------|--------|---------------------|
| Vision produit et backlog  | A                  | R      | C         | I             | I            | I          | I      | I                   |
| Maquettes et design system | A                  | C      | R         | C             | I            | I          | I      | C                   |
| Architecture logicielle    | R/A                | I      | I         | C             | C            | C          | I      | C                   |
| Développement front-end    | A                  | I      | C         | R             | I            | I          | I      | I                   |
| Développement back-end     | A                  | I      | I         | I             | R            | I          | I      | I                   |
| Développement mobile (V2)  | A                  | I      | C         | I             | C            | I          | I      | R                   |
| Policies ABAC              | R/A                | I      | I         | I             | R            | I          | C      | I                   |
| Conformité RGPD            | R/A                | C      | I         | C             | C            | C          | C      | C                   |
| Accessibilité (WCAG)       | A                  | I      | R         | R             | I            | I          | R      | R                   |
| Infrastructure et CI/CD    | A                  | I      | I         | I             | I            | R          | I      | I                   |
| Tests fonctionnels         | A                  | C      | I         | I             | I            | I          | R      | I                   |
| Tests de sécurité          | A                  | I      | I         | I             | C            | C          | R      | I                   |
| Audit accessibilité        | A                  | I      | C         | C             | I            | I          | R      | C                   |
| Déploiement production     | A                  | I      | I         | I             | I            | R          | C      | C                   |
| Documentation technique    | R/A                | I      | I         | C             | C            | C          | I      | C                   |

###  

### 2.3 Points de décision

| **Type de décision**             | **Décideur**            | **Consultés**                           |
|----------------------------------|-------------------------|-----------------------------------------|
| Architecture et stack technique  | Chef de projet (Cécile) | Dev Front, Dev Back, DevOps, Dev Mobile |
| Priorisation fonctionnelle       | PO                      | Chef de projet, UX/UI                   |
| Choix d\'accessibilité           | Chef de projet + UX/UI  | QA                                      |
| Conformité RGPD                  | Chef de projet          | Tous                                    |
| Go/No Go déploiement             | Chef de projet          | DevOps, QA                              |
| **Go/No Go POC → Développement** | Chef de projet          | Dev Front, Dev Back, Dev Mobile         |

3. Cycle de développement
-------------------------

### 3.1 Philosophie de découpage : jalons fonctionnels

La planification du projet repose sur un **Work Breakdown Structure (WBS)** structuré en **13 jalons** (J0 à J12, avec un jalon J0.5 de POC ajouté en v3). Ce découpage ne suit pas une logique par couche technique (« d\'abord tout le back-end, puis tout le front-end ») mais s\'articule autour de **livrables fonctionnels cohérents**, chacun apportant une valeur incrémentale à la plateforme.

Ce choix repose sur trois impératifs :

-   **Livraison de valeur continue** --- Chaque jalon produit un incrément fonctionnel testable. Le jalon J2 (Identity & Access), par exemple, livre simultanément le bounded context back-end, les pages front-end correspondantes, les exigences RGPD associées et les tests de sécurité. L\'utilisateur dispose d\'un parcours d\'inscription complet à l\'issue du jalon, et non d\'un back-end isolé.

-   **Adaptation au contexte solo** --- En tant que développeuse unique sur ce projet, je ne peux pas paralléliser le travail entre équipes. Le découpage par jalon fonctionnel me permet de concentrer mes efforts sur un périmètre cohérent et de livrer un résultat complet avant de passer au suivant, conformément aux principes Agile de réduction du Work In Progress.

###  

### 3.2 Méthodologie : Kanban

Le projet adopte la méthode **Kanban**, choisie après une analyse comparative des méthodologies agiles au regard des contraintes spécifiques du projet :

| **Critère**                                    | **Scrum**                            | **Kanban**                                       | **Justification du choix**                         |
|------------------------------------------------|--------------------------------------|--------------------------------------------------|----------------------------------------------------|
| Capacité variable (10h/semaine ± fluctuations) | ❌ Sprints fixes difficiles à honorer | ✅ Flux continu adaptable                         | L\'équipe ne dispose pas d\'une capacité constante |
| Overhead des cérémonies                        | Élevé (\~15-20 % du temps)           | Faible (\~5 %)                                   | Sur 10h/semaine, chaque heure compte               |
| Visibilité de l\'avancement                    | Par sprint                           | Continue                                         | Le board Kanban offre un état en temps réel        |
| Priorisation                                   | Par sprint (figée pendant le sprint) | Continue (le PO peut re-prioriser à tout moment) | Souplesse nécessaire sur un projet en construction |
| Gestion des blocages                           | Visibles en fin de sprint            | Visibles immédiatement (WIP limits)              | Les limites WIP forcent la résolution des blocages |

### 3.3 Tableau Kanban

Le board est hébergé sur **Trello** et structuré en 5 colonnes :

![](media/image1.png){width="5.958333333333333in" height="0.9583333333333334in"}

**Règles de flux :**

-   Un item ne peut entrer dans « En cours » que s\'il a des critères d\'acceptation définis par le PO

-   Le passage de « En cours » à « En revue » nécessite une pull request et des tests unitaires passants

-   Le passage de « En revue » à « En test » nécessite une approbation de la revue de code

-   Le passage de « En test » à « Terminé » nécessite la conformité au Definition of Done (cf. section 3.4)

-   Les **WIP limits** (2 items max par colonne active) sont un garde-fou contre la dispersion

### 3.4 Definition of Done

Un item est considéré comme **Terminé** lorsque l\'ensemble des critères suivants sont remplis :

| **Catégorie**            | **Critère**                                                                                                                                  |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Code**                 | Code fonctionnel, conforme au style guide (ruff + black côté Python, tsc/ESLint côté front, dart analyze côté mobile), sans warning bloquant |
| **Tests**                | Tests unitaires écrits et passants (couverture ≥ 80 % sur le nouveau code du domaine)                                                        |
| **Tests d\'intégration** | Scénarios d\'intégration passants pour les interactions entre bounded contexts                                                               |
| **Accessibilité**        | Score Lighthouse ≥ 95, audit axe-core sans erreur critique, navigation clavier vérifiée                                                      |
| **RGPD**                 | Aucune donnée collectée sans finalité documentée, logs d\'audit fonctionnels                                                                 |
| **Revue de code**        | Pull request approuvée par au moins un pair                                                                                                  |
| **Documentation**        | Documentation technique à jour (docstrings Python, JSDoc/TS, ADR si décision d\'architecture)                                                |
| **CI**                   | Pipeline verte (lint + tests + build)                                                                                                        |

### 3.5 Cadences

| **Cadence**                 | **Fréquence**      | **Participants**          | **Objectif**                                                 |
|-----------------------------|--------------------|---------------------------|--------------------------------------------------------------|
| **Point quotidien** (async) | Quotidien          | Tous                      | Message court sur Slack/Discord : fait, en cours, bloqué     |
| **Revue du board**          | Hebdomadaire (1h)  | Chef de projet, PO, leads | Re-priorisation, identification des blocages, ajustement WIP |
| **Démonstration**           | Mensuelle (1h)     | Tous + parties prenantes  | Présentation des incréments livrés, feedback utilisateur     |
| **Rétrospective**           | Mensuelle (30 min) | Équipe interne            | Amélioration continue du processus                           |

4. Planning prévisionnel
------------------------

### 4.1 Jalons principaux

Le planning est organisé par **jalons** (milestones) plutôt que par sprints, en cohérence avec la méthodologie Kanban. Chaque jalon correspond à un incrément fonctionnel livrable.

#### V1 --- Octobre 2025 à Octobre 2026

| **\#**   | **Jalon**                           | **Période**                      | **Livrables**                                                                                                                                                    | **Critère d\'achèvement**                                                       |
|----------|-------------------------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| J0       | **Avant-projet**                    | Octobre 2025 -- Avril 2026       | Étude de faisabilité, cartographie RGPD, architecture documentée, maquettes UX, benchmarks concurrentiel + technique                                             | Documents validés par les parties prenantes                                     |
| **J0.5** | **Phase POC** (dérisquage)          | Avril -- Mai 2026 (semaines 3-5) | POC backend DDD (BC Identity & Access en Python/Django) + POC mobile Flutter OCR (standalone) + POC front Next.js 15 dashboard                                   | 3 POC fonctionnels, métriques de productivité et faisabilité collectées         |
| J1       | **Socle technique**                 | Mai -- Juin 2026                 | 3 dépôts Git (back Python, front Next.js, mobile Flutter), CI/CD opérationnelle (pytest + Vitest + flutter test), pipeline de déploiement, design system initial | Build + deploy automatisé fonctionnel                                           |
| J2       | **Identity & Access**               | Juin -- Juillet 2026             | Bounded context Identity & Access en Python/Django, authentification JWT, gestion des CareRelations, permissions ABAC Django custom, RLS PostgreSQL              | Un parent peut créer un compte, ajouter un enfant, se connecter                 |
| ---      | **Formation DevOps**                | Juin 2026                        | Montée en compétence infrastructure cloud                                                                                                                        | Choix d\'infrastructure finalisés                                               |
| J3       | **Dashboard parent & observations** | Juillet -- Août 2026             | Premières briques du BC Learning & Progress (sous-module Progress), dashboard parent, observations                                                               | Un parent peut visualiser les observations liées à son enfant                   |
| J4       | **Exercices & gamification**        | Août -- Septembre 2026           | Bounded context Learning & Progress (sous-modules Learning + gamification), exercices, milestones, valorisation                                                  | Un parent voit les progrès, les exercices complétés et les badges de son enfant |
| J5       | **Page publique & SEO**             | Septembre 2026                   | Page d\'accueil publique, SEO, performance, accessibilité DYS optimisée                                                                                          | Lighthouse : performance ≥ 90, accessibilité ≥ 95, SEO ≥ 95                     |
| J6       | **Recette & stabilisation V1**      | Octobre 2026                     | Audit accessibilité complet, audit RGPD, corrections, déploiement production                                                                                     | V1 en production, audits conformes                                              |

#### V2 --- Novembre 2026 à Septembre 2027

| **\#** | **Jalon**                                 | **Période**         | **Livrables**                                                                                 | **Critère d\'achèvement**                                         |
|--------|-------------------------------------------|---------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| J6.5   | **Apprentissage Flutter/Dart**            | Août 2026           | Codelab Flutter officiel Google, *Effective Dart*, POC OCR ML Kit consolidé                   | Compétences Flutter opérationnelles, POC OCR validé               |
| J7     | **POC IA (Mistral)**                      | Décembre 2026       | Preuve de concept Mistral, évaluation qualité/coût, recommandation Go/No Go                   | Rapport de POC avec métriques                                     |
| J8     | **Application mobile enfant**             | Janvier -- Mai 2027 | Application Flutter, intégration avec les bounded contexts existants, interface adaptée DYS   | Un enfant peut interagir avec la plateforme depuis l\'app mobile  |
| J9     | **Intégration IA + OCR « Scan & Adapt »** | Mai -- Juin 2027    | Intégration Mistral dans le parcours enfant (support, pas décisionnel), feature OCR on-device | IA fonctionnelle, OCR opérationnel, métriques de qualité validées |
| J10    | **Recette & stabilisation V2**            | Juillet 2027        | Tests complets V2, audit RGPD V2 (données de santé), HDS                                      | V2 en production                                                  |

#### Hors périmètre (post-V2)

Les fonctionnalités suivantes sont identifiées mais explicitement exclues du planning : espace orthophoniste, espace enseignant/école, traitement de données de santé (HDS) au sens plein, fonctionnalités sociales. Elles pourront faire l\'objet d\'une V3 ultérieure.

###  

### 4.2 Phase POC (J0.5)

La phase POC, ajoutée suite au benchmark technique, est un jalon stratégique de dérisquage en amont du développement V1. Elle consiste à valider en conditions réelles les trois briques structurantes :

| **POC**                | **Objectif**                                                                                                      | **Durée**  | **Livrable**                                                                                |
|------------------------|-------------------------------------------------------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------|
| **Backend DDD pilote** | Valider l\'approche hexagonale en Python/Django sur un domaine à règles de sécurité fortes (BC Identity & Access) | 2 semaines | Module Identity fonctionnel, tests unitaires domaine \> 80 %, test d\'intégration PG+RLS OK |
| **Mobile Flutter OCR** | Valider la faisabilité technique de la feature Scan & Adapt avec ML Kit on-device                                 | 1 semaine  | Démo vidéo 30s : caméra → ML Kit → texte extrait → reformatage Lexend                       |
| **Front Next.js 15**   | Valider l\'intégration Server Actions avec typage partagé depuis le backend (OpenAPI)                             | 1 semaine  | Page dashboard staging déployée, typage partagé validé                                      |

Cette phase conditionne le passage au développement complet. En cas de blocage majeur identifié (par exemple impossibilité de porter DDD en Django proprement, ou échec ML Kit), les choix techniques seront revus avant d\'engager l\'effort principal.

###   

### 4.6 Mapping WBS

Le tableau ci-dessous synthétise la couverture du référentiel de certification par le WBS. Chaque bloc de compétences est adressé par au moins deux jalons, garantissant une démonstration approfondie et itérative.

#### Bloc 1 --- Planifier et organiser un projet de développement logiciel

| **Compétence** | **Intitulé**            | **Jalons WBS** | **Livrables**                                                                                 |
|----------------|-------------------------|----------------|-----------------------------------------------------------------------------------------------|
| C1.1           | Étude de faisabilité    | J0             | Étude de faisabilité, cartographie RGPD, AIPD                                                 |
| C1.2           | Veille technologique    | J0, J7         | Benchmark concurrentiel, benchmark technique (3 briques), rapport POC Mistral                 |
| C1.3           | Cahier des charges      | J0, J1, J2     | Personas, user stories par BC, contraintes RGPD/accessibilité, analyse contexte et ressources |
| C1.4           | Feuille de route        | J0 à J12       | WBS, priorisation MoSCoW, livrables par jalon, diagramme de Gantt                             |
| C1.5           | Mise en place du projet | J0.5, J1, J2   | POC de validation, 3 dépôts Git, CI/CD, premier incrément fonctionnel                         |
| C1.6           | Mesure de performance   | J5, J6, J10    | Scores Lighthouse, rapports d\'audit, KPIs                                                    |
| C1.7           | Supervision du projet   | J0 à J12       | Suivi d\'avancement, rétrospectives, gestion des écarts (y compris bascule stack v2 → v3)     |

#### Bloc 2 --- Concevoir et développer des solutions logicielles

| **Compétence** | **Intitulé**            | **Jalons WBS**     | **Livrables**                                                                                            |
|----------------|-------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| C2.1           | Architecture logicielle | J0, J0.5, J1, J9   | Context Map DDD (2 BC), C4 model, diagrammes UML, schéma ABAC, simplification architecturale documentée  |
| C2.2           | Intégrité du code       | J1, J2--J4         | Chaîne de qualité automatisée (ruff + black + mypy + pytest côté Python, ESLint + TypeScript côté front) |
| C2.3           | Développement front-end | J0, J2--J3, J5, J8 | Atomic Design, CSS Modules, responsive, SEO/GEO, mobile Flutter                                          |
| C2.4           | Développement back-end  | J2, J3, J4         | API REST (DRF), PostgreSQL + RLS, ABAC, Python/Django, DDD-light                                         |
| C2.5           | Traitement des données  | J4, J7, J9         | OCR éphémère (on-device ML Kit), POC Mistral, intégration IA, conformité Art. 22                         |

#### Bloc 3 --- Piloter la mise en production et l\'évolution

| **Compétence** | **Intitulé**                                    | **Jalons WBS**  | **Livrables**                                                              |
|----------------|-------------------------------------------------|-----------------|----------------------------------------------------------------------------|
| C3.1           | Intégration continue                            | J1, J3          | Pipeline GitHub Actions (pytest + Vitest + flutter test), pre-commit hooks |
| C3.2           | Plan de tests                                   | J1, J2--J5      | Tests unitaires, intégration, E2E, sécurité, performance                   |
| C3.3           | Surveillance continue                           | J3, J6, J10     | Sentry, logs d\'audit, monitoring production                               |
| C3.4           | Déploiement continu                             | J1, J6, J10     | Staging, production V1, production V2                                      |
| C3.5           | Optimisation DevOps                             | J1, J3, J6, J10 | Chaîne d\'outils DevOps, alertes, optimisation continue                    |
| C3.6           | Documentation technique + Numérique responsable | J0 à J12        | Documentation architecture, API, RGPD, bilingue FR/EN, mesures éco         |

#### Bloc 4 --- Piloter l\'équipe du projet

| **Compétence** | **Intitulé**                           | **Traitement dans le WBS**                                                                   |
|----------------|----------------------------------------|----------------------------------------------------------------------------------------------|
| C4.1           | Déterminer les compétences nécessaires | Les bounded contexts définissent les compétences requises par domaine                        |
| C4.2           | Constituer l\'équipe projet            | Profils requis déductibles des compétences mobilisées par jalon (dont Dev Mobile Flutter V2) |
| C4.3           | Coordonner l\'activité                 | Interfaces entre jalons (API, contrats OpenAPI) = points de coordination                     |
| C4.4           | Accompagner les collaborateurs         | Progression pédagogique du WBS (socle → fonctionnel → IA/mobile)                             |
| C4.5           | Planifier la formation                 | Apprentissage Flutter/Dart (J6.5), POC Mistral (J7) = montée en compétences planifiée        |
| C4.6           | Évaluer la performance                 | Indicateurs de pilotage (section 11) = métriques d\'évaluation                               |

> **Note** : le projet est réalisé par une développeuse seule. Le Bloc 4 est traité dans le mémoire en présentant l\'organisation comme si elle était portée par une équipe pluridisciplinaire. Le WBS fournit la matière de cette projection.

### 4.7 Axes transversaux intégrés au WBS

#### RGPD comme fil conducteur (Privacy by Design)

Le WBS ne cantonne pas la conformité RGPD à un jalon dédié. Les exigences réglementaires sont distribuées dans chaque jalon, conformément au principe de **Privacy by Design** (Art. 25 RGPD).

| **Jalon** | **Exigence RGPD**                                      | **ID WBS**        | **Compétence EADL** |
|-----------|--------------------------------------------------------|-------------------|---------------------|
| J0        | Cartographie des données personnelles                  | AP-02             | C1.1                |
| J1        | Registre des traitements (Art. 30), AIPD               | RGPD-01, RGPD-02  | C2.1                |
| J1        | Politique de confidentialité                           | RGPD-08           | C2.4                |
| J2        | Consentement explicite, consentement parental (Art. 8) | RGPD-03, RGPD-04  | C2.4                |
| J3        | Droits d\'accès, effacement, rectification             | RGPD-05 à RGPD-07 | C2.4, C3.6          |
| J3        | Notifications éphémères (minimisation)                 | RGPD-10           | C2.1                |
| J4        | OCR éphémère (suppression immédiate)                   | RGPD-09           | C2.5                |
| J9        | IA non décisionnelle (Art. 22), OCR on-device          | V2-07             | C2.5                |
| J6, J10   | Audits de conformité V1 et V2                          | ---               | C3.2, C1.6          |

#### Accessibilité progressive

| **Jalon** | **Exigence d\'accessibilité**                                | **Justification**                                           |
|-----------|--------------------------------------------------------------|-------------------------------------------------------------|
| J1        | Police Lexend, contrastes AA/AAA, audit axe-core en CI       | Poser les standards avant le premier composant              |
| J2        | Navigation clavier, sémantique HTML, labels formulaires      | L\'inscription est le premier point de contact              |
| J3        | Personnalisation affichage (taille, espacement, mode sombre) | Le dashboard quotidien exige une adaptation aux préférences |
| J6        | Audit WCAG 2.1 AA complet + rapport de conformité            | Validation formelle avant mise en production                |

#### Tests par jalon

| **Jalon** | **Type de tests**    | **Périmètre**                                                                            |
|-----------|----------------------|------------------------------------------------------------------------------------------|
| J0.5      | Tests POC            | Validation de productivité Python/Django + faisabilité Flutter/OCR + intégration Next.js |
| J1        | Stratégie documentée | Pyramide de tests, outils (pytest + Vitest + flutter test), seuils de couverture         |
| J2        | Unitaires + sécurité | BC Identity & Access (≥ 80 %), ABAC, cohérence ABAC ↔ RLS                                |
| J3        | Intégration + E2E    | Identity & Access → Learning & Progress, parcours critiques                              |
| J4        | Unitaires BC         | Sous-modules Learning et Gamification (≥ 80 %)                                           |
| J5        | Performance          | Temps de chargement, TTFB pages principales                                              |
| J6, J10   | Audits complets      | Accessibilité, RGPD, sécurité                                                            |

### 4.8 Gestion des écarts et réajustements

Au cours des six premiers mois du projet, plusieurs travaux ont été réalisés en avance sur le planning initial, et plusieurs révisions méthodologiques ont été effectuées --- révisions elles-mêmes documentées comme livrables (cf. benchmarks, étude de faisabilité :

| **Élément**                        | **Planning initial**   | **Réalisation effective**                     | **Justification**                                                                           |
|------------------------------------|------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| Registre des traitements (Art. 30) | Avril 2026 (J1)        | Mars 2026                                     | Privacy by Design : les contraintes réglementaires doivent précéder l\'implémentation       |
| AIPD                               | Avril -- Mai 2026 (J1) | Mars 2026                                     | Le traitement de données de mineurs exige une évaluation d\'impact préalable                |
| Politique de confidentialité       | Août 2026 (J5)         | Mars 2026                                     | Nécessaire dès la conception pour guider les choix d\'architecture                          |
| Page d\'accueil publique           | Août 2026 (J5)         | Janvier -- Mars 2026                          | Intégrée au dossier front-end ; validation précoce de l\'identité visuelle                  |
| SEO / GEO                          | Août 2026 (J5)         | Janvier -- Mars 2026                          | Les données structurées JSON-LD sont un choix d\'architecture front                         |
| **Dashboard parent (partie front-end)** | Juillet -- Août 2026 (J3) | **Janvier 2026** (déjà finalisé)       | Réalisé dans le cadre du dossier front-end RNCP avec données factices (intégration back-end prévue au J3) |
| **Storybook du design system**     | Non planifié explicitement | **Janvier 2026** (déjà livré)             | Documentation vivante des composants, facilite la reprise en J1 et l\'onboarding d\'une équipe fictive |
| **Ajout phase POC (J0.5)**         | Non prévue en v1/v2    | Avril -- Mai 2026                             | Benchmark a révélé le besoin de dérisquer les choix techniques avant engagement             |
| **Bascule stack backend**          | Kotlin+Spring (v1/v2)  | Python+Django (v3)                            | Réévaluation honnête du niveau réel + absence de mentor Java → choix d\'une stack maîtrisée |
| **Simplification architecturale**  | 5 BC                   | 2 BC (Identity & Access, Learning & Progress) | Analyse critique : 4 des 5 BC initiaux n\'avaient pas de langage ubiquitaire distinct       |

Ces anticipations et révisions démontrent la **flexibilité** du planning par jalons fonctionnels et la **capacité de révision honnête** attendue du référentiel EADL (C1.7 --- Supervision, C1.3 --- Analyse du contexte).

5. Veille technologique
-----------------------

### 5.1 Objectifs de la veille

La veille technologique est conçue pour répondre à plusieurs objectifs en lien direct avec le projet :

-   **Veille sur l\'écosystème front-end** : évolutions de Next.js 15 (App Router, Server Components, Server Actions, Turbopack), nouvelles API web (View Transitions, CSS Container Queries), bonnes pratiques TypeScript

-   **Veille sur l\'écosystème back-end Python** : évolutions de Django (5.x, async views), Django REST Framework, patterns DDD en Python (référence *Cosmic Python*), PostgreSQL RLS

-   **Veille sur l\'écosystème mobile Flutter** : évolutions Flutter 3.x + Impeller, Google ML Kit, Compose Multiplatform, benchmarks cross-platform

-   **Veille sur l\'accessibilité et l\'inclusion DYS** : évolutions WCAG (passage au 2.2, préparation 3.0), recherches sur les polices adaptées, retours d\'usage des technologies d\'assistance

-   **Veille sécurité et RGPD** : recommandations CNIL, bulletins ANSSI, évolutions réglementaires sur les données de mineurs, bonnes pratiques OWASP

-   **Veille sur l\'IA open source** : sorties de modèles Mistral, benchmarks, évolutions des API, alternatives émergentes

### 5.2 Outils et méthodes

| **Outil / Méthode**             | **Type**               | **Fréquence** | **Objectif**                                                                  |
|---------------------------------|------------------------|---------------|-------------------------------------------------------------------------------|
| **Flux RSS** (Feedly)           | Agrégation automatique | Continue      | Suivi de blogs techniques (Vercel, Django Blog, Flutter Blog, CNIL, ANSSI)    |
| **GitHub Watch / Releases**     | Notifications          | Continue      | Suivi des releases de Next.js, Django, Flutter, Mistral, axe-core, PostgreSQL |
| **Newsletters**                 | Curation humaine       | Hebdomadaire  | This Week in React, Django News, Flutter Digest, TLDR Web Dev, a11y Weekly    |
| **Conférences / meetups**       | Veille active          | Ponctuelle    | Devoxx, DjangoCon Europe, Flutter Connect, Paris Web, meetups accessibilité   |
| **Documentation officielle**    | Référence              | Au besoin     | Next.js docs, Django docs, Flutter docs, WCAG, OWASP Top 10                   |
| **Trello --- Board « Veille »** | Centralisation         | Continue      | Chaque élément de veille est classé par catégorie, date, pertinence projet    |

### 5.3 Apports de la veille au projet

La veille technologique a déjà influencé plusieurs décisions architecturales documentées dans les benchmarks concurrentiels et techniques

| **Découverte issue de la veille**                               | **Impact sur le projet**                                                             |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Next.js 15 : stabilisation App Router + React Server Components | Choix confirmé de Next.js 15 (benchmark v3 : 4,58/5 vs Remix 4,10 vs SvelteKit 3,54) |
| Django 5.x : async views + améliorations ORM                    | Validation de Django pour V1 (empreinte mémoire modeste compatible tier B1 Azure)    |
| Flutter 3.27 + moteur Impeller stable                           | Choix Flutter pour V2 (perf UI 4,01 ms vs React Native 8,34 ms)                      |
| Compose Multiplatform iOS stable (mai 2025)                     | KMM écarté pour l\'instant --- maturité trop récente sur un projet à délai contraint |
| Benchmark honnête du niveau Java réel                           | Bascule Kotlin+Spring → Python+Django (benchmark v3)                                 |
| Mistral --- modèles open source français                        | Choix de Mistral pour la V2, souveraineté des données                                |
| PostgreSQL 16 : améliorations RLS                               | Validation du choix PostgreSQL + RLS pour la double barrière                         |
| Police Lexend : études de lisibilité DYS                        | Intégration dans le design system dès J0                                             |
| Neon : tier gratuit PostgreSQL serverless                       | Intégration dans la stratégie open source                                            |
| Recommandations CNIL 2024 sur les mineurs                       | Renforcement des choix de minimisation (niveau scolaire vs date de naissance)        |
| *Architecture Patterns with Python* (Percival & Gregory)        | Référence clé pour DDD/Hexa en Django avec contournement ORM                         |

6. Stack technique et contraintes d\'architecture
-------------------------------------------------

### 6.1 Stack retenu (v3)

| **Couche**            | **Technologie**                   | **Version** | **Justification**                                                                     |
|-----------------------|-----------------------------------|-------------|---------------------------------------------------------------------------------------|
| **Front-end**         | Next.js                           | 15.x        | App Router + React Server Components matures, SEO natif, leader benchmark v3 (4,58/5) |
| **Langage front**     | TypeScript                        | 5.x         | Typage fort, maintenabilité, détection d\'erreurs à la compilation                    |
| **Styles**            | CSS Modules                       | ---         | Isolation des styles, pas de dépendance runtime, compatibilité SSR                    |
| **Back-end**          | **Python**                        | **3.12+**   | Expertise opérationnelle confirmée, leader benchmark v3 (4,44/5)                      |
| **Framework back**    | **Django**                        | **5.x**     | Batteries-included, productivité immédiate, écosystème mature                         |
| **API**               | **Django REST Framework**         | **3.15+**   | Standard de facto pour APIs REST en Django, OpenAPI auto-généré                       |
| **Base de données**   | PostgreSQL                        | 16+         | RLS native, maturité, open source, conformité RGPD                                    |
| **Hébergement BDD**   | Neon (dev/staging) / Azure (prod) | ---         | Tier gratuit en dev, managed en production                                            |
| **Infrastructure**    | Azure                             | ---         | À confirmer post-formation juin 2026                                                  |
| **Conteneurisation**  | Docker                            | ---         | Portabilité, reproductibilité, cloud-agnostic                                         |
| **Mobile (V2)**       | **Flutter**                       | **3.27+**   | Perf UI de référence, typage strict Dart, apprentissage d\'une techno nouvelle        |
| **OCR mobile (V2)**   | **Google ML Kit**                 | ---         | On-device, pas de transfert cloud, respect RGPD enfants                               |
| **Organisation code** | **3 dépôts Git distincts**        | ---         | Technologies hétérogènes (Python, TS, Dart), builds et CI indépendants                |
| **IA (V2)**           | Mistral                           | ---         | Open source, souveraineté des données, modèle français                                |

### 6.2 Décisions d\'architecture (ADR)

Les décisions d\'architecture majeures sont documentées sous forme d\'**Architecture Decision Records** (ADR) :

| **ADR** | **Décision**                                                                    | **Statut**                                           | **Justification résumée**                                                                                                                                                |
|---------|---------------------------------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADR-001 | **DDD-light avec 2 bounded contexts** (Identity & Access, Learning & Progress)  | Acceptée en v3 (remplace ADR-001 v1 qui posait 5 BC) | Granularité adaptée à la complexité réelle du domaine, évolutivité préservée                                                                                             |
| ADR-002 | ABAC plutôt que RBAC                                                            | Acceptée                                             | Relations complexes (parent → enfant → professionnel) incompatibles avec un modèle de rôles simple                                                                       |
| ADR-003 | Double barrière de sécurité (Django permissions custom + RLS PostgreSQL)        | Acceptée                                             | Défense en profondeur, protection même en cas de contournement applicatif                                                                                                |
| ADR-004 | CSS Modules plutôt que CSS-in-JS                                                | Acceptée                                             | Pas de runtime JS, compatible SSR, performance optimale                                                                                                                  |
| ADR-005 | Atomic Design pour les composants UI                                            | Acceptée                                             | Cohérence du design system, réutilisabilité, testabilité                                                                                                                 |
| ADR-006 | Kanban plutôt que Scrum                                                         | Acceptée                                             | Capacité variable, overhead réduit, flux continu adapté à l\'équipe                                                                                                      |
| ADR-007 | Priorité open source (Neon, Penpot, axe-core...)                                | Acceptée                                             | Réduction des coûts, souveraineté, numérique responsable                                                                                                                 |
| ADR-008 | Mistral plutôt que OpenAI/Anthropic pour l\'IA                                  | Acceptée                                             | Souveraineté des données (pas de transfert hors UE), open source                                                                                                         |
| ADR-009 | Python + Django + DRF plutôt que Kotlin + Spring / Java + Spring                | Acceptée                                             | Expertise opérationnelle confirmée, absence de mentor Java disponible, stack où la discipline DDD peut être appliquée malgré l\'ORM actif (patterns éprouvés sur ZenLog) |
| ADR-010 | Flutter (Dart) plutôt que React Native / Kotlin Multiplatform pour le mobile V2 | Acceptée en                                          | Arbitrage qualitatif : perf UI de référence, typage strict Dart, apprentissage d\'une techno nouvelle                                                                    |
| ADR-011 | 3 dépôts Git distincts plutôt que monorepo                                      | Acceptée                                             | Technologies hétérogènes (Python, TS, Dart) avec outillages différents ; partage des contrats via OpenAPI                                                                |
| ADR-012 | Phase POC en amont du développement (J0.5)                                      | Acceptée                                             | Dérisquage des choix techniques avant engagement, démonstration de lucidité architecturale                                                                               |

### 6.3 Langages de modélisation

L\'architecture de Lenny & Co est documentée à l\'aide des outils et langages de modélisation suivants :

| **Type de diagramme**                     | **Outil** | **Usage**                                                                                                 |
|-------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------|
| **Diagrammes de classes** (UML)           | Draw.io   | Modélisation des entités par bounded context (User, Child, CareRelation, Exercise, ProgressTracker, etc.) |
| **Diagrammes de séquence** (UML)          | Draw.io   | Flux d\'authentification, évaluation des policies ABAC, pipeline OCR éphémère                             |
| **Diagrammes d\'architecture** (C4 model) | Draw.io   | Vue système (contexte), vue conteneurs, vue composants                                                    |
| **Diagrammes de flux**                    | Draw.io   | Parcours utilisateur (inscription, consultation dashboard, ajout observation)                             |
| **Entity-Relationship Diagram**           | Draw.io   | Schéma de la base PostgreSQL, relations entre tables, policies RLS                                        |

###  

### 6.4 Contraintes d\'architecture

| **Contrainte**              | **Source**                        | **Impact**                                                                           |
|-----------------------------|-----------------------------------|--------------------------------------------------------------------------------------|
| Accessibilité WCAG 2.1 AA   | Exigence projet (public DYS)      | Typographie Lexend, contrastes renforcés, navigation clavier, sémantique HTML        |
| Données de mineurs          | RGPD Art. 8, recommandations CNIL | Consentement parental, minimisation, droit à l\'effacement en cascade                |
| Pas de décision automatisée | RGPD Art. 22                      | IA en support uniquement, jamais décisionnelle                                       |
| Hébergement HDS (V2)        | Code de la santé publique         | Séparation architecturale V1/V2 pour isoler les données de santé                     |
| DDD en Django (ORM actif)   | Choix Python+Django               | Discipline d\'isolation domaine pur Python / infrastructure Django, mappings manuels |

 

7. Qualité logicielle
---------------------

### 7.1 Pipeline CI/CD

La pipeline d\'intégration continue est hébergée sur **GitHub Actions** et s\'exécute à chaque pull request et à chaque merge sur la branche principale. Elle est différente pour chacun des 3 dépôts mais suit la même logique.

![](media/image2.png){width="6.5in" height="4.513888888888889in"}

###  

### 7.2 Outils de qualité

| **Outil**                                                        | **Rôle**                                                      | **Moment d\'exécution**            |
|------------------------------------------------------------------|---------------------------------------------------------------|------------------------------------|
| **ruff**                                                         | Linting + formatting Python (remplace flake8 + black + isort) | CI + pre-commit                    |
| **mypy**                                                         | Type checking Python                                          | CI + pre-commit                    |
| **pytest**                                                       | Tests unitaires et d\'intégration back-end Python             | CI                                 |
| **Testcontainers**                                               | Tests d\'intégration avec vraie base PostgreSQL               | CI                                 |
| **ESLint** (Flat Config)                                         | Linting du code TypeScript/React                              | CI + pre-commit                    |
| **typescript-eslint**                                            | Règles spécifiques TypeScript                                 | CI + pre-commit                    |
| **eslint-plugin-react-hooks**                                    | Vérification des hooks React                                  | CI + pre-commit                    |
| **Prettier**                                                     | Formatage automatique du code front                           | CI + pre-commit                    |
| **Vitest**                                                       | Tests unitaires front-end (plus rapide que Jest)              | CI                                 |
| **Playwright**                                                   | Tests E2E front-end                                           | CI                                 |
| **pre-commit** (Python tool) + **Husky + lint-staged** (JS tool) | Exécution des vérifications avant chaque commit               | Pre-commit                         |
| **axe-core**                                                     | Audit accessibilité automatisé                                | CI (chaque PR)                     |
| **Lighthouse CI**                                                | Score de performance, accessibilité, SEO                      | CI (chaque PR sur pages modifiées) |
| **Pa11y**                                                        | Tests d\'accessibilité en complément d\'axe-core              | CI (audit hebdomadaire)            |
| **dart analyze + flutter test**                                  | Analyse statique et tests côté mobile (V2)                    | CI                                 |

### 7.3 Revue de code

Chaque modification passe par une **pull request** soumise à revue :

-   Au moins **1 approbation** requise avant merge

-   Les commentaires de revue suivent une convention : \[bloquant\], \[suggestion\], \[question\]

-   Les revues portent sur : fonctionnalité, sécurité, accessibilité, performance, lisibilité

-   Le temps de revue cible est de **24h** après ouverture de la PR

### 7.4 Politique de qualité pour le code généré par IA

Le projet utilise **Claude Code** comme outil d'assistance au développement (cf. `IA-Assistance-Developpement.md`). Les contributions IA-assistées suivent une politique de qualité renforcée :

-   **Revue humaine ligne par ligne** avant merge --- aucune acceptation automatique du code généré

-   **Trailer Git `AI-assisted: true`** sur chaque commit contenant des modifications significatives générées par IA, pour traçabilité

-   **Scan de sécurité renforcé** : bandit (Python), eslint-plugin-security (TS), semgrep (polyglotte), dependabot (dépendances), npm audit / pip-audit

-   **Tests de sécurité manuels** (non générés par IA) sur les zones critiques : policies ABAC, RLS, authentification, consentement

-   **Domaines où l'IA est limitée** : architecture DDD, modélisation du domaine, ADR, rédaction du mémoire --- pour préserver l'apprentissage personnel

La politique complète, incluant le bilan éco-responsable de l'usage IA et les indicateurs de pilotage, est documentée dans `IA-Assistance-Developpement.md`.

8. Gestion de configuration et versioning
-----------------------------------------

### 8.1 Stratégie de branching

Le projet adopte une stratégie **GitHub Flow simplifiée**, adaptée à une équipe de taille modérée travaillant en flux continu (Kanban), appliquée de manière cohérente sur les **3 dépôts Git** (backend Python, front Next.js, mobile Flutter V2) :

![](media/image3.png){width="4.4375in" height="1.7708333333333333in"}

**Règles :**

-   La branche main est toujours déployable en production sur chaque dépôt

-   Chaque fonctionnalité ou correctif est développé dans une branche feature/ ou fix/

-   Le merge dans main se fait exclusivement par pull request après revue et CI verte

-   Pas de branche develop intermédiaire : le flux Kanban et la CI garantissent la qualité de main

###  8.2 Conventions de commit

Les messages de commit suivent la convention **Conventional Commits** :

\<type\>(\<scope\>): \<description\>

\[corps optionnel\]

\[footer optionnel\]

| **Type** | **Usage**                                   |
|----------|---------------------------------------------|
| feat     | Nouvelle fonctionnalité                     |
| fix      | Correction de bug                           |
| refactor | Refactorisation sans changement fonctionnel |
| docs     | Documentation uniquement                    |
| test     | Ajout ou modification de tests              |
| chore    | Maintenance (CI, dépendances, config)       |
| a11y     | Amélioration d\'accessibilité (type custom) |
| security | Correctif de sécurité (type custom)         |

Les scopes correspondent aux bounded contexts ou aux couches transversales :

-   BC : identity, learning-progress

-   Couches : ui, infra, ci, docs, rgpd, a11y

### 8.3 Versioning

Le projet suit le **Semantic Versioning** (SemVer) : MAJOR.MINOR.PATCH, appliqué indépendamment sur chacun des 3 dépôts.

-   **V1.0.0** : première version stable de la V1 (jalon J6)

-   Les releases intermédiaires (0.1.0, 0.2.0...) correspondent aux jalons J0.5 à J5

 

9. Règles documentaires et stockage
-----------------------------------

### 9.1 Exigence bilingue (français / anglais)

Conformément aux exigences de la certification (Ce3.6.2), la documentation technique est rédigée en **français et en anglais** :

| **Type de documentation**                        | **Langue**                               | **Justification**                                                  |
|--------------------------------------------------|------------------------------------------|--------------------------------------------------------------------|
| Mémoire et livrables académiques                 | Français                                 | Public cible : jury francophone                                    |
| Code source (variables, fonctions, commentaires) | Anglais                                  | Convention internationale, interopérabilité                        |
| Documentation technique (API, README, ADR)       | Anglais                                  | Standard de l\'industrie, collaboration potentielle internationale |
| Commentaires de commit                           | Anglais                                  | Convention Conventional Commits                                    |
| Documentation utilisateur                        | Français (+ anglais si pertinent)        | Public cible : familles francophones                               |
| Veille technologique (compte-rendus)             | Français (sources anglophones analysées) | Démonstration de la compétence transversale d\'anglais technique   |

### 9.2 Organisation documentaire

| **Type de document**                        | **Format**                 | **Lieu de stockage**                                               | **Responsable**                   |
|---------------------------------------------|----------------------------|--------------------------------------------------------------------|-----------------------------------|
| Mémoire et livrables académiques            | Word (.docx)               | Google Drive + export Word                                         | Chef de projet                    |
| Documents préparatoires                     | Markdown (.md)             | Dépôt Git (dossier /docs dans chaque repo)                         | Chef de projet                    |
| Documentation technique (API, architecture) | Markdown (.md)             | Dépôts Git (/docs)                                                 | Dev Front + Dev Back + Dev Mobile |
| ADR (Architecture Decision Records)         | Markdown (.md)             | Dépôt backend (dossier /docs/adr) --- référent pour toute l\'archi | Chef de projet                    |
| Maquettes et design system                  | Figma / Penpot             | Espace design partagé                                              | UX/UI Designer                    |
| Comptes-rendus de réunions                  | Markdown                   | Dépôt backend (dossier /docs/meetings)                             | Chef de projet                    |
| Backlog et suivi Kanban                     | Board Trello               | Trello                                                             | PO                                |
| Code source                                 | Python / TypeScript / Dart | GitHub (3 dépôts)                                                  | Tous les développeurs             |

### 9.3 Conventions de nommage

-   **Fichiers de documentation** : kebab-case (ex. plan-developpement.md, adr-009-python-django.md)

-   **Composants React** : PascalCase (ex. DashboardParent.tsx)

-   **Fichiers Python** : snake\_case (convention PEP 8 --- ex. policy\_evaluator.py)

-   **Classes Python** : PascalCase (convention PEP 8 --- ex. PolicyEvaluator)

-   **Fichiers Dart** : snake\_case (convention Effective Dart --- ex. ocr\_scanner.dart)

-   **Branches Git** : type/description-courte (ex. feature/identity-access, fix/rls-policy-sync)

### 9.4 Règles de confidentialité

| **Niveau**       | **Périmètre**                                                                | **Mesures**                                                 |
|------------------|------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Public**       | Page d\'accueil, documentation open source                                   | Aucune restriction                                          |
| **Interne**      | Documentation technique, comptes-rendus, backlog                             | Accès restreint à l\'équipe projet                          |
| **Confidentiel** | Données utilisateurs, policies ABAC, clés d\'API, configurations de sécurité | Chiffrement, secrets manager, jamais en clair dans le dépôt |

Les secrets (clés d\'API, credentials) sont gérés via **GitHub Secrets** (CI) et un **fichier .env local** (développement), exclu du dépôt par .gitignore. En production, un **Azure Key Vault** \[À CONFIRMER POST-FORMATION\] assurera la gestion centralisée des secrets.

10. Obligations réglementaires
------------------------------

### 10.1 Normes et réglementations applicables

| **Référence**                                   | **Domaine**                                    | **Impact projet**                                                            |
|-------------------------------------------------|------------------------------------------------|------------------------------------------------------------------------------|
| **RGPD** (UE 2016/679)                          | Protection des données personnelles            | Registre des traitements, AIPD, consentement parental, droit à l\'effacement |
| **RGPD Art. 8**                                 | Consentement des mineurs (\< 15 ans en France) | Double mécanisme de consentement (parent + vérification)                     |
| **RGPD Art. 22**                                | Décisions automatisées                         | IA en support uniquement, jamais décisionnelle                               |
| **CNIL --- Recommandations mineurs**            | Droits numériques des enfants                  | Transparence renforcée, langage adapté                                       |
| **WCAG 2.1 niveau AA**                          | Accessibilité numérique                        | Audit continu, critères intégrés au Definition of Done                       |
| **RGAA** (Référentiel Général d\'Accessibilité) | Accessibilité (contexte français)              | Complémentaire au WCAG, applicable si déploiement public                     |
| **Code de la santé publique** (V2)              | Hébergement de données de santé                | Certification HDS obligatoire pour l\'hébergeur                              |

###  

### 10.2 Livrables réglementaires

| **Livrable**                        | **Échéance**             | **Statut**             |
|-------------------------------------|--------------------------|------------------------|
| Cartographie des données RGPD       | Mars 2026                | ✅ Réalisée             |
| Étude de faisabilité v1/v2/v3       | Avril 2026               | ✅ Réalisée             |
| Registre des traitements (Art. 30)  | Avant J2 (juin 2026)     | ✅ Réalisé (mars 2026)  |
| AIPD (Analyse d\'Impact)            | Avant J2 (juin 2026)     | ✅ Réalisée (mars 2026) |
| Politique de confidentialité        | Avant J6 (octobre 2026)  | ✅ Rédigée (mars 2026)  |
| Audit d\'accessibilité WCAG         | J6 (octobre 2026)        | Planifié               |
| **Politique d'usage de l'IA d'assistance au développement** | Avant J0.5 (avril 2026) | ✅ **Réalisée (avril 2026)** |
| Révision AIPD V2 (données de santé) | Avant J10 (juillet 2027) | Planifiée              |

### 10.3 Articulation RGPD avec l'usage de l'IA d'assistance au développement

L'usage d'outils d'assistance IA (Claude Code) dans le cycle de développement présente des risques RGPD spécifiques qui sont traités dans la politique dédiée `IA-Assistance-Developpement.md` :

-   **Règle absolue** : zéro donnée réelle (utilisateurs, tokens, credentials) dans les prompts IA

-   **Pratique opérationnelle** : usage exclusif de *seed data* factices stockées dans `/fixtures/seed-data/` de chaque dépôt

-   **Garde-fou technique** : pre-commit hook détectant les patterns de données réelles (emails format standard, tokens longs) avant commit

-   **Politique de confidentialité du produit** : garantit aux utilisateurs finaux qu'aucune donnée n'est transférée à des services tiers d'IA --- garantie opérationnelle reposant sur les règles ci-dessus

-   **Conformité AI Act** : l'usage d'IA comme outil de développement reste hors périmètre direct de l'AI Act européen. En revanche, l'IA intégrée dans le produit final (V2 avec Mistral) est soumise à l'article 22 RGPD + AI Act --- traitée dans l'AIPD et la politique de confidentialité.

11. Indicateurs de pilotage (KPI)
---------------------------------

### 11.1 KPI de suivi du projet

| **KPI**                                                 | **Cible**                           | **Fréquence de mesure** | **Outil**             |
|---------------------------------------------------------|-------------------------------------|-------------------------|-----------------------|
| **Vélocité** (nombre d\'items Terminés par semaine)     | ≥ 2 items/semaine (équipe complète) | Hebdomadaire            | Trello (board Kanban) |
| **Lead time** (temps entre « En cours » et « Terminé ») | ≤ 10 jours ouvrés                   | Continue                | Trello                |
| **WIP réel** (items simultanément « En cours »)         | ≤ 2                                 | Continue                | Trello                |
| **Taux de blocage** (items bloqués \> 3 jours)          | \< 10 %                             | Hebdomadaire            | Trello                |
| **Respect des jalons** (écart prévu/réalisé)            | ≤ 2 semaines de retard              | Par jalon               | Suivi manuel          |
| **Budget consommé vs. prévisionnel**                    | Écart \< 15 %                       | Mensuel                 | Tableau de suivi      |
| **Ratio apprentissage / développement** (pendant J6.5)  | \< 40 % du temps V2 mobile          | Hebdomadaire            | Trello + timetracking |

###  

### 11.2 KPI de qualité logicielle

| **KPI**                                        | **Cible**       | **Fréquence de mesure**     | **Outil**                         |
|------------------------------------------------|-----------------|-----------------------------|-----------------------------------|
| **Couverture de tests** (nouveau code domaine) | ≥ 80 %          | Chaque PR                   | CI (pytest, Vitest, flutter test) |
| **Score Lighthouse --- Accessibilité**         | ≥ 95            | Chaque PR                   | CI (Lighthouse CI)                |
| **Score Lighthouse --- Performance**           | ≥ 90            | Chaque PR                   | CI (Lighthouse CI)                |
| **Score Lighthouse --- SEO**                   | ≥ 95            | Chaque PR (pages publiques) | CI (Lighthouse CI)                |
| **Erreurs axe-core critiques**                 | 0               | Chaque PR                   | CI (axe-core)                     |
| **Bugs ouverts (sévérité critique)**           | 0 en production | Continue                    | GitHub Issues                     |
| **Temps de résolution des bugs critiques**     | \< 48h          | Continue                    | GitHub Issues                     |
| **Taux de réussite CI**                        | ≥ 95 %          | Mensuel                     | GitHub Actions                    |

###  

### 11.3 KPI de conformité

| **KPI**                                                 | **Cible**                      | **Fréquence de mesure** | **Outil**              |
|---------------------------------------------------------|--------------------------------|-------------------------|------------------------|
| **Données collectées sans finalité documentée**         | 0                              | Chaque PR (revue)       | Revue de code          |
| **Conformité RGPD --- registre des traitements à jour** | 100 %                          | Trimestriel             | Audit manuel           |
| **Conformité WCAG 2.1 AA**                              | 100 % des critères applicables | Par jalon               | Audit Pa11y + axe-core |

### 11.4 Tableau de bord de pilotage

Un tableau de bord synthétique est maintenu dans **Trello** (via les Power-Ups de reporting), alimenté lors de la revue hebdomadaire du board. Il agrège les KPI ci-dessus et permet de visualiser la santé du projet en un coup d\'œil (vert / orange / rouge par indicateur).

 

12. Numérique responsable
-------------------------

### 12.1 Engagement

Le projet Lenny & Co intègre les principes du **numérique responsable** à chaque étape de sa conception et de son développement. Cet engagement n\'est pas un ajout cosmétique : il est structurant dans les décisions d\'architecture et de développement.

### 12.2 Mesures concrètes

| **Axe**                           | **Mesure**                                                                                                              | **Impact**                                                                                          |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Sobriété fonctionnelle**        | Phasage V1/V2 strict --- ne développer que ce qui est nécessaire, quand c\'est nécessaire. Simplification archi à 2 BC. | Évite la dette technique et le gaspillage de ressources                                             |
| **Sobriété technique**            | Stack Python/Django à empreinte mémoire modeste (100-200 Mo vs 400-700 Mo JVM)                                          | Tier Azure B1 suffisant en V1 au lieu de B2, réduction \~15 % de l\'empreinte infra                 |
| **Performance web**               | SSR/SSG/RSC via Next.js 15, optimisation des images, lazy loading, score Lighthouse Performance ≥ 90                    | Réduit la consommation de bande passante et d\'énergie côté client                                  |
| **Éco-conception front-end**      | CSS Modules (pas de runtime JS superflu), Atomic Design, maximisation RSC pour réduire le JS client                     | Minimise le poids du bundle JavaScript                                                              |
| **Open source**                   | Priorité aux outils open source (Neon, Penpot, axe-core, Sentry self-hosted, Mistral, Google ML Kit)                    | Réduit la dépendance aux éditeurs propriétaires, mutualise les ressources                           |
| **Minimisation des données**      | Niveau scolaire plutôt que date de naissance, pas d\'adresse postale, traitement OCR éphémère                           | Réduit le volume de données stockées et traitées                                                    |
| **OCR on-device (V2)**            | Google ML Kit sur mobile → pas de transfert cloud pour la reconnaissance de texte                                       | Zéro transfert réseau OCR + respect RGPD                                                            |
| **Conteneurisation**              | Docker pour la portabilité, dimensionnement juste des ressources cloud                                                  | Évite le surdimensionnement des serveurs                                                            |
| **Souveraineté des données**      | Mistral (modèle français, pas de transfert hors UE), hébergement Azure EU                                               | Réduit les transferts de données transatlantiques                                                   |
| **Accessibilité comme inclusion** | WCAG 2.1 AA, police Lexend, contrastes renforcés, navigation clavier                                                    | L\'accessibilité est une forme de durabilité sociale --- elle rend le numérique utilisable par tous |
| **Documentation as code**         | Diagrammes Mermaid en Markdown (texte versionné), pas de fichiers binaires lourds                                       | Réduit l\'empreinte de stockage du dépôt                                                            |

### 12.3 Indicateurs d\'impact

| **Indicateur**                             | **Cible**              | **Mesure**                 |
|--------------------------------------------|------------------------|----------------------------|
| Poids moyen d\'une page (transfert réseau) | \< 500 Ko              | Lighthouse CI              |
| Nombre de requêtes HTTP par page           | \< 30                  | DevTools / Lighthouse      |
| Score EcoIndex (si applicable)             | ≥ B                    | Outil GreenIT-Analysis     |
| Utilisation CPU côté serveur               | Monitoring Azure       | À mesurer post-déploiement |
| Empreinte mémoire back Python              | \< 250 Mo par instance | Monitoring Azure           |

13. Accessibilité de l\'environnement de travail
------------------------------------------------

### 13.1 Principe

Le projet Lenny & Co, par sa nature même (accompagnement des troubles DYS), porte une attention particulière à l\'inclusion --- non seulement pour ses utilisateurs finaux, mais aussi pour les membres de son équipe projet.

### 13.2 Mesures d\'accessibilité de l\'environnement de travail

| **Axe**                              | **Mesure**                                                                                    | **Détail**                                                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Outils collaboratifs accessibles** | Choix d\'outils compatibles avec les technologies d\'assistance                               | Trello, GitHub, Slack/Discord : vérification de la compatibilité lecteurs d\'écran          |
| **Communication inclusive**          | Communication asynchrone privilégiée (écrit \> oral)                                          | Réduit les barrières pour les personnes malentendantes ou avec des troubles de l\'attention |
| **Documentation accessible**         | Respect des bonnes pratiques d\'accessibilité dans la documentation interne                   | Structure de titres, textes alternatifs sur les images, langage clair                       |
| **Aménagement des cadences**         | Flexibilité des horaires et du rythme de travail                                              | Compatible avec des aménagements pour handicap (temps partiel thérapeutique, etc.)          |
| **Formation et sensibilisation**     | Session d\'onboarding incluant une sensibilisation à l\'accessibilité et aux troubles DYS     | Chaque membre de l\'équipe comprend les enjeux d\'inclusion du projet                       |
| **Plan de formation individualisé**  | Actions de formation adaptées aux besoins de chaque membre (e-learning, présentiel, mentorat) | Cf. Ce4.5.1 à Ce4.5.4                                                                       |

 

14. Budget prévisionnel
-----------------------

Le budget détaillé est présenté dans l\'**Étude de Faisabilité**.

En synthèse :

| **Poste**                            | **V1 (open source)** | **V1 (propriétaire)** |
|--------------------------------------|----------------------|-----------------------|
| Équipe projet (6 personnes, 10 mois) | 205 600 €            | 205 600 €             |
| Infrastructure (1 an)                | 820 €                | 3 300 €               |
| Licences et services (1 an)          | 50 €                 | 1 840 €               |
| **TOTAL V1**                         | **\~206 470 €**      | **\~210 740 €**       |

La stratégie de réduction des coûts par le recours prioritaire à l\'open source (cf. Étude de Faisabilité v3, section 3.2) permet une économie de \~4 000 €/an sur les coûts d\'exploitation. La stack Python+Django (v3) réduit en outre de \~15 % l\'empreinte infra par rapport à la version Kotlin/Spring initiale.

 

15. Outils principaux
---------------------

| **Catégorie**                     | **Outil**                                     | **Licence**              | **Usage**                             |
|-----------------------------------|-----------------------------------------------|--------------------------|---------------------------------------|
| **IDE back**                      | VS Code ou PyCharm Community                  | Gratuit                  | Développement Python/Django           |
| **IDE front**                     | VS Code                                       | Gratuit                  | Développement Next.js/TypeScript      |
| **IDE mobile (V2)**               | VS Code + Flutter extension ou Android Studio | Gratuit                  | Développement Flutter/Dart            |
| **Gestion de dépendances Python** | Poetry ou uv                                  | Open source              | Gestion reproductible des dépendances |
| **Gestion de dépendances front**  | PNPM ou npm                                   | Open source              | Gestion efficace des dépendances JS   |
| **Gestion de dépendances mobile** | pub (Dart package manager)                    | Intégré                  | Gestion dépendances Flutter           |
| **Gestion de code**               | GitHub                                        | Gratuit (public) ou Team | 3 dépôts, PR, CI/CD                   |
| **CI/CD**                         | GitHub Actions                                | Inclus                   | Pipelines automatisées par dépôt      |
| **Gestion de projet**             | Trello                                        | Gratuit / Standard       | Kanban, backlog, suivi des tâches     |
| **Design**                        | Penpot (ou Figma)                             | Open source (ou payant)  | Maquettes, design system              |
| **Communication**                 | Slack / Discord                               | Gratuit                  | Communication asynchrone              |
| **Base de données**               | Neon (dev) / Azure PostgreSQL (prod)          | Gratuit / Payant         | Stockage des données                  |
| **Monitoring**                    | Sentry (self-hosted) / Grafana                | Open source              | Erreurs, logs, métriques              |
| **Accessibilité**                 | axe-core + Lighthouse + Pa11y                 | Open source              | Audit automatisé                      |
| **Secrets**                       | GitHub Secrets / Azure Key Vault              | Inclus                   | Gestion des clés et credentials       |
| **Conteneurisation**              | Docker                                        | Open source              | Portabilité, déploiement              |

16. Backlog initial --- User Stories par domaine
------------------------------------------------

Le backlog ci-dessous constitue le référentiel initial des user stories, organisé par domaine fonctionnel et technique. Chaque user story est associée à un jalon cible et à une priorité (P0 = indispensable, P1 = important, P2 = souhaitable). Ce backlog alimente le tableau Kanban sur Trello.

### 16.1 Avant-projet (J0)

| **ID** | **User Story**                                                                                                                                                                 | **Jalon** | **Priorité** | **Statut**               |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|--------------------------|
| AP-01  | En tant que **chef de projet**, je veux réaliser une étude de faisabilité (technique, économique, temporelle, réglementaire) afin de valider le Go/No Go du projet             | J0        | P0           | ✅ Done (v3)              |
| AP-02  | En tant que **chef de projet**, je veux réaliser une cartographie des données RGPD afin d\'identifier toutes les données personnelles traitées et leurs finalités              | J0        | P0           | ✅ Done                   |
| AP-03  | En tant que **chef de projet**, je veux produire un plan de développement afin de formaliser l\'organisation, la méthodologie et les jalons du projet                          | J0        | P0           | ✅ Done (v3)              |
| AP-04  | En tant qu\'**architecte**, je veux documenter l\'architecture DDD-light (2 bounded contexts, agrégats, entités) afin que l\'équipe ait une vision partagée du modèle métier   | J0        | P0           | En cours (adaptation v3) |
| AP-05  | En tant qu\'**architecte**, je veux rédiger les ADR (incluant ADR-009, 010, 011, 012 de la v3) afin de tracer le raisonnement des décisions structurantes                      | J0        | P1           | En cours                 |
| AP-06  | En tant que **UX designer**, je veux créer les maquettes des écrans principaux afin de valider les parcours utilisateurs                                                       | J0        | P0           | ✅ Done                   |
| AP-07  | En tant que **UX designer**, je veux définir le design system (typographie Lexend, palette, composants de base) afin de garantir la cohérence visuelle et l\'accessibilité DYS | J0        | P0           | ✅ Done                   |
| AP-08  | En tant que **chef de projet**, je veux rédiger les personas utilisateurs afin de guider les décisions fonctionnelles                                                          | J0        | P1           | ✅ Done                   |
| AP-09  | En tant que **chef de projet**, je veux produire un benchmark concurrentiel (Mila Learn, Poppins, Nessy) afin de positionner Lenny & Co sur son marché                         | J0        | P0           | ✅ Done                   |
| AP-10  | En tant qu\'**architecte**, je veux produire un benchmark technique (3 briques, 10 critères pondérés) afin d\'arbitrer objectivement les choix de stack                        | J0        | P0           | ✅ Done (v3)              |

### 16.2 🆕 Phase POC (J0.5) --- nouveauté v3

| **ID** | **User Story**                                                                                                                                                                            | **Jalon** | **Priorité** |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| POC-01 | En tant qu\'**architecte**, je veux réaliser un POC backend DDD (BC Identity & Access en Python/Django) afin de valider la faisabilité architecturale et mesurer la productivité réelle   | J0.5      | P0           |
| POC-02 | En tant qu\'**architecte**, je veux réaliser un POC mobile Flutter OCR (caméra → ML Kit → texte) afin de valider la faisabilité technique de la feature Scan & Adapt                      | J0.5      | P0           |
| POC-03 | En tant qu\'**architecte**, je veux réaliser un POC front Next.js 15 avec typage partagé via OpenAPI afin de valider l\'intégration front/back                                            | J0.5      | P0           |
| POC-04 | En tant qu\'**architecte**, je veux rédiger une synthèse des POC avec métriques (productivité, blockers, décisions) afin de documenter la décision Go/No Go vers le développement complet | J0.5      | P0           |

### 16.3 Infrastructure / DevOps (J1)

| **ID** | **User Story**                                                                                                                                                                        | **Jalon** | **Priorité** |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| INF-01 | En tant que **développeur**, je veux 3 dépôts Git distincts (backend Python, front Next.js, mobile Flutter) afin d\'avoir des builds et CI indépendants par techno                    | J1        | P0           |
| INF-02 | En tant que **DevOps**, je veux une pipeline CI/CD GitHub Actions par dépôt (lint + type-check + tests + build) afin que chaque PR soit automatiquement vérifiée                      | J1        | P0           |
| INF-03 | En tant que **DevOps**, je veux configurer pre-commit (Python) + Husky + lint-staged (front) pour exécuter les vérifications en pre-commit afin d\'attraper les erreurs avant le push | J1        | P0           |
| INF-04 | En tant que **DevOps**, je veux un environnement de staging avec déploiement automatique sur merge dans main afin de tester en conditions réelles                                     | J1        | P1           |
| INF-05 | En tant que **DevOps**, je veux configurer Neon comme base de données de développement avec le schéma PostgreSQL initial afin de pouvoir développer sans coûts d\'infrastructure      | J1        | P0           |
| INF-06 | En tant que **DevOps**, je veux conteneuriser l\'application (Dockerfile back + front) afin d\'assurer la portabilité et la reproductibilité des environnements                       | J1        | P1           |
| INF-07 | En tant que **DevOps**, je veux configurer le monitoring d\'erreurs (Sentry) afin de détecter les problèmes en staging puis en production                                             | J1        | P1           |
| INF-08 | En tant que **DevOps**, je veux mettre en place la gestion des secrets (GitHub Secrets + .env) afin qu\'aucune clé ne soit exposée dans le dépôt                                      | J1        | P0           |
| INF-09 | En tant que **DevOps**, je veux consolider la configuration Azure production post-formation DevOps (App Service dédié, Key Vault, Blob Storage, Front Door) afin de finaliser l\'environnement de production — base déjà éprouvée via ZenLog | J3 | P0 |

### 16.4 Front-End (J1 → J6)

| **ID** | **User Story** | **Jalon** | **Priorité** | **Statut** |
|--------|----------------|-----------|--------------|------------|
| FE-01  | En tant que **développeur front**, je veux initialiser le projet Next.js 15 avec TypeScript, App Router, ESLint (Flat Config) et Prettier afin de poser le socle technique front | J1 | P0 | ✅ Done (janvier 2026, dossier front-end RNCP) |
| FE-02  | En tant que **développeur front**, je veux implémenter le design system en Atomic Design (atoms, molecules, organisms) avec CSS Modules afin de garantir la cohérence des composants | J1 | P0 | ✅ Done (janvier 2026) |
| FE-03  | En tant que **développeur front**, je veux créer la page d\'inscription parent avec formulaire afin qu\'un parent puisse créer son compte | J2 | P0 | UI ébauchée, intégration back au J2 |
| FE-04  | En tant que **développeur front**, je veux créer la page de connexion avec gestion des erreurs et redirection afin qu\'un parent puisse accéder à son espace | J2 | P0 | UI ébauchée, intégration back au J2 |
| FE-05  | En tant que **parent**, je veux ajouter le profil de mon enfant (prénom, niveau scolaire, préférences d\'apprentissage) afin que la plateforme s\'adapte à ses besoins | J2 | P0 | À faire |
| FE-06  | En tant que **parent**, je veux gérer les relations de soin (CareRelation) de mon enfant afin de contrôler qui a accès à ses informations | J2 | P1 | À faire |
| FE-07  | En tant que **parent**, je veux accéder à un tableau de bord qui affiche une vue synthétique des observations liées à mon enfant afin de suivre son évolution | J3 | P0 | ✅ **UI front-end finalisée (janvier 2026, données factices)** — intégration API au J3 |
| FE-08  | En tant que **parent**, je veux consulter le détail d\'une observation (date, description, auteur) afin de comprendre le contexte de chaque entrée | J3 | P0 | UI ébauchée en janvier 2026, à compléter |
| FE-09  | En tant que **parent**, je veux saisir une observation sur mon enfant (texte libre, catégorie, date) afin de contribuer au suivi | J3 | P1 | À faire |
| FE-10  | En tant que **parent**, je veux visualiser les progrès de mon enfant sous forme de graphique ou de timeline afin de mesurer son évolution dans le temps | J4 | P0 | À faire |
| FE-11  | En tant que **parent**, je veux voir les badges et récompenses obtenus par mon enfant afin de valoriser ses efforts | J4 | P1 | À faire |
| FE-12  | En tant que **visiteur**, je veux accéder à une page d\'accueil publique qui présente Lenny & Co afin de comprendre le projet et m\'inscrire | J5 | P0 | ✅ Done (janvier – mars 2026) |
| FE-13  | En tant que **visiteur**, je veux que la page d\'accueil soit optimisée SEO (balises meta, structured data, sitemap) afin que les familles DYS trouvent la plateforme via les moteurs de recherche | J5 | P1 | ✅ Done (janvier – mars 2026, SEO + GEO JSON-LD) |
| FE-14  | En tant que **parent**, je veux pouvoir réinitialiser mon mot de passe via un lien envoyé par email afin de récupérer l\'accès à mon compte | J2 | P1 | À faire |
| FE-15  | En tant que **parent**, je veux pouvoir modifier mon profil et celui de mon enfant afin de mettre à jour les informations | J3 | P1 | À faire |
| **FE-16** | En tant que **développeuse front**, je veux documenter le design system dans un **Storybook** afin de garantir la cohérence des composants et faciliter l'onboarding | J1 (anticipé) | P1 | ✅ **Done (janvier 2026)** — Storybook livré avec le dossier front-end RNCP |

### 16.5 Back-End (J1 → J6) --- révisé v3 Python/Django et 2 BC

| **ID** | **User Story**                                                                                                                                                                                                     | **Jalon** | **Priorité** |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| BE-01  | En tant qu\'**architecte**, je veux initialiser le projet Python/Django 5.x avec DRF et la structure DDD-light (2 bounded contexts : Identity & Access, Learning & Progress) afin de poser le socle technique back | J1        | P0           |
| BE-02  | En tant que **développeur back**, je veux implémenter le bounded context Identity & Access (User, Child, CareRelation) avec séparation domaine pur / infrastructure Django afin de gérer les utilisateurs          | J2        | P0           |
| BE-03  | En tant que **développeur back**, je veux implémenter l\'authentification (inscription, connexion, JWT via simple-JWT) afin de sécuriser l\'accès à l\'API                                                         | J2        | P0           |
| BE-04  | En tant que **développeur back**, je veux implémenter le PolicyEvaluator ABAC via permissions Django custom afin d\'évaluer les droits d\'accès en fonction des attributs et relations                             | J2        | P0           |
| BE-05  | En tant que **développeur back**, je veux configurer les Row-Level Security (RLS) policies sur PostgreSQL afin de garantir l\'isolation des données au niveau de la base                                           | J2        | P0           |
| BE-06  | En tant que **développeur back**, je veux implémenter les tests de cohérence automatisés entre PolicyEvaluator et RLS afin de détecter toute divergence entre les deux couches de sécurité                         | J2        | P0           |
| BE-07  | En tant que **développeur back**, je veux implémenter le sous-module Progress du BC Learning & Progress (Observation, ProgressEntry) afin de gérer le suivi parental                                               | J3        | P0           |
| BE-08  | En tant que **développeur back**, je veux implémenter le sous-module Learning du BC Learning & Progress (Exercise, Catalog, LearnerProfile) afin de structurer les contenus pédagogiques                           | J4        | P0           |
| BE-09  | En tant que **développeur back**, je veux implémenter la gamification (badges, milestones) dans le BC Learning & Progress afin de valoriser les efforts de l\'enfant                                               | J4        | P1           |
| BE-10  | En tant que **développeur back**, je veux documenter l\'adaptation DDD en Django (contournements ORM actif, ports read-only, mappings manuels) afin de produire un livrable pédagogique                            | J2-J4     | P1           |
| BE-11  | En tant que **développeur back**, je veux mettre en place les logs d\'audit (qui accède à quoi, quand) afin de tracer les accès aux données sensibles                                                              | J2        | P0           |
| BE-12  | En tant que **développeur back**, je veux implémenter le mécanisme de réinitialisation de mot de passe afin de sécuriser la récupération de compte                                                                 | J2        | P1           |
| BE-13  | En tant que **développeur back**, je veux implémenter la suppression en cascade (droit à l\'effacement) depuis le BC Identity & Access afin de supprimer toutes les données associées à un utilisateur             | J3        | P0           |

### 16.6 RGPD & Conformité (transversal)

| **ID**  | **User Story**                                                                                                                                                                                  | **Jalon** | **Priorité** |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| RGPD-01 | En tant que **DPO**, je veux un registre des traitements (Art. 30) documentant chaque traitement, sa finalité, sa base légale et sa durée de conservation afin d\'être conforme au RGPD         | J1        | P0           |
| RGPD-02 | En tant que **DPO**, je veux une Analyse d\'Impact (AIPD/DPIA) évaluant les risques liés au traitement de données de mineurs afin de répondre à l\'obligation légale                            | J1        | P0           |
| RGPD-03 | En tant que **parent**, je veux donner un consentement explicite et éclairé lors de l\'inscription afin que le traitement repose sur une base légale valide                                     | J2        | P0           |
| RGPD-04 | En tant que **parent**, je veux pouvoir donner le consentement parental pour mon enfant de moins de 15 ans afin de respecter l\'article 8 du RGPD                                               | J2        | P0           |
| RGPD-05 | En tant que **parent**, je veux pouvoir exercer mon droit d\'accès afin de connaître les données traitées                                                                                       | J3        | P1           |
| RGPD-06 | En tant que **parent**, je veux pouvoir exercer mon droit à l\'effacement afin de faire valoir mon droit à l\'oubli                                                                             | J3        | P0           |
| RGPD-07 | En tant que **parent**, je veux pouvoir rectifier les données de mon profil et celui de mon enfant afin d\'exercer mon droit de rectification                                                   | J3        | P1           |
| RGPD-08 | En tant que **chef de projet**, je veux rédiger une politique de confidentialité en langage clair, avec une version adaptée aux enfants, afin d\'être transparent sur le traitement des données | J5        | P0           |
| RGPD-09 | En tant qu\'**architecte**, je veux que le traitement OCR des images scannées soit éphémère (suppression immédiate après extraction) afin de minimiser la conservation des données              | J4/J9     | P1           |
| RGPD-10 | En tant qu\'**architecte**, je veux que les messages d\'encouragement parentaux soient des notifications éphémères afin de respecter le principe de minimisation                                | J3        | P1           |
| RGPD-11 | En tant que **DPO**, je veux réviser l\'AIPD en V2 pour intégrer les données de santé afin de garantir la conformité HDS                                                                        | J10       | P0           |

### 16.7 Accessibilité (transversal)

| **ID**  | **User Story**                                                                                                                                                                                        | **Jalon** | **Priorité** |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| A11Y-01 | En tant qu\'**utilisateur DYS**, je veux que toute la plateforme utilise la police Lexend avec un interlignage adapté afin de faciliter la lecture                                                    | J1        | P0           |
| A11Y-02 | En tant qu\'**utilisateur DYS**, je veux que les contrastes de couleur respectent un ratio minimum de 4.5:1 (AA) voire 7:1 (AAA) pour le texte courant afin de pouvoir lire sans effort               | J1        | P0           |
| A11Y-03 | En tant qu\'**utilisateur naviguant au clavier**, je veux pouvoir accéder à toutes les fonctionnalités sans souris afin de naviguer de manière autonome                                               | J2        | P0           |
| A11Y-04 | En tant qu\'**utilisateur de lecteur d\'écran**, je veux que toutes les pages aient une structure sémantique HTML correcte afin que le lecteur d\'écran restitue le contenu de manière compréhensible | J2        | P0           |
| A11Y-05 | En tant qu\'**utilisateur DYS**, je veux pouvoir personnaliser l\'affichage (taille de police, espacement, mode sombre) afin d\'adapter l\'interface à mes préférences de lecture                     | J3        | P2           |
| A11Y-06 | En tant que **QA**, je veux que chaque PR soit soumise à un audit axe-core automatisé en CI afin de détecter les régressions d\'accessibilité                                                         | J1        | P0           |
| A11Y-07 | En tant que **QA**, je veux que le score Lighthouse accessibilité soit ≥ 95 sur chaque page afin de garantir un niveau d\'accessibilité élevé et constant                                             | J1        | P0           |
| A11Y-08 | En tant que **UX designer**, je veux que tous les formulaires aient des labels explicites afin de guider l\'utilisateur                                                                               | J2        | P0           |
| A11Y-09 | En tant qu\'**utilisateur DYS**, je veux que les images aient des textes alternatifs descriptifs afin de comprendre le contenu visuel                                                                 | J2        | P1           |
| A11Y-10 | En tant que **chef de projet**, je veux réaliser un audit d\'accessibilité complet (WCAG 2.1 AA) avant la mise en production V1 afin de certifier le niveau d\'accessibilité                          | J6        | P0           |

### 16.8 Tests & Qualité (transversal)

| **ID** | **User Story**                                                                                                                                                                           | **Jalon** | **Priorité** |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| QA-01  | En tant que **QA**, je veux une stratégie de tests documentée (unitaires, intégration, e2e, accessibilité, sécurité) afin de garantir une couverture adéquate                            | J1        | P0           |
| QA-02  | En tant que **développeur**, je veux que chaque bounded context ait une couverture de tests unitaires ≥ 80 % sur le domaine afin de détecter les régressions rapidement                  | J2-J4     | P0           |
| QA-03  | En tant que **QA**, je veux des tests d\'intégration validant les interactions entre bounded contexts (Identity & Access ↔ Learning & Progress) afin de vérifier la cohérence du système | J3        | P0           |
| QA-04  | En tant que **QA**, je veux des tests e2e sur les parcours critiques afin de valider l\'expérience utilisateur de bout en bout                                                           | J3        | P1           |
| QA-05  | En tant que **QA**, je veux des tests de sécurité vérifiant que les policies ABAC bloquent les accès non autorisés afin de garantir l\'isolation des données                             | J2        | P0           |
| QA-06  | En tant que **QA**, je veux des tests de performance sur les pages principales afin de garantir une expérience fluide                                                                    | J5        | P1           |
| QA-07  | En tant que **QA**, je veux un test automatisé de cohérence entre les policies ABAC applicatives et les RLS PostgreSQL afin de détecter toute divergence                                 | J2        | P0           |

### 16.9 V2 --- Mobile Flutter & IA (J6.5 → J10)

| **ID**       | **User Story**                                                                                                                                                                              | **Jalon** | **Priorité** |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| **V2-00 🆕**  | En tant que **développeuse mobile**, je veux suivre le codelab Flutter officiel Google + lire *Effective Dart* afin d\'acquérir les compétences nécessaires pour développer l\'app mobile   | J6.5      | P0           |
| **V2-00b 🆕** | En tant qu\'**architecte**, je veux consolider le POC OCR ML Kit en POC d\'intégration complet afin d\'être opérationnelle au démarrage du sprint mobile                                    | J6.5      | P0           |
| V2-01        | En tant qu\'**architecte**, je veux réaliser un POC d\'intégration Mistral évaluant la qualité des réponses, le coût par requête et la latence afin de décider du Go/No Go V2 IA            | J7        | P0           |
| V2-02        | En tant qu\'**enfant**, je veux accéder à une application mobile Flutter avec une interface adaptée à mon âge et à mes troubles DYS afin d\'interagir avec la plateforme de manière ludique | J8        | P0           |
| V2-03        | En tant qu\'**enfant**, je veux voir mes badges et mes progrès sur l\'application mobile afin d\'être motivé dans mes apprentissages                                                        | J8        | P0           |
| V2-04        | En tant qu\'**enfant**, je veux pouvoir interagir avec un assistant IA bienveillant (Mistral) qui m\'aide dans mes exercices afin de progresser à mon rythme                                | J9        | P0           |
| V2-05        | En tant que **parent**, je veux recevoir des notifications de l\'activité de mon enfant sur l\'application mobile afin de rester informé de ses progrès                                     | J8        | P1           |
| V2-06        | En tant qu\'**architecte**, je veux que l\'intégration IA soit découplée (API gateway) afin de pouvoir changer de modèle sans impacter le reste de l\'application                           | J9        | P0           |
| V2-07        | En tant qu\'**architecte**, je veux que l\'IA ne prenne aucune décision automatisée ayant un impact sur l\'enfant (Art. 22 RGPD) afin de rester conforme                                    | J9        | P0           |
| **V2-08 🆕**  | En tant qu\'**enfant**, je veux pouvoir scanner un texte avec mon mobile (feature « Scan & Adapt ») et le voir reformaté en police adaptée DYS afin de lire plus facilement le monde réel   | J9        | P0           |
| **V2-09 🆕**  | En tant qu\'**architecte**, je veux que l\'OCR soit traité on-device (Google ML Kit) afin de respecter le RGPD (pas de transfert cloud) et d\'améliorer la sobriété réseau                  | J9        | P0           |