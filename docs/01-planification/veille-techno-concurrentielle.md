> **Statut** : ✅ réalisé · **Couvre** : Bloc 1 — C1.2 (veille techno + concurrentielle)

# Dossier de Veille Technologique — Lenny & Co

**Projet** : Lenny & Co — Plateforme d'accompagnement des enfants à troubles DYS
**Dossier de Projet d'Évaluation** — RNCP 7 *Expert en Architecture et Développement Logiciel*
**Auteur** : Cécile Hirschauer
**Date** : Avril 2026
**Correspondance référentiel EADL** : C1.2 (veille technologique), C1.3 (analyse du contexte), C2.1 (conception technique), C2.2 (choix d'architecture), C2.3 (qualité), C3.6 (documentation + numérique responsable), C4.5 (formation)

> **Note de lecture** — Ce dossier consolide la démarche de veille du projet en un document unique, structuré en trois parties complémentaires :
>
> **Partie 1 — Benchmark concurrentiel** : analyse du marché français et européen de l'accompagnement DYS, positionnement de Lenny & Co face aux acteurs installés.
>
> **Partie 2 — Benchmark technique** : arbitrage des briques structurantes de la stack (backend, mobile, front-end web) selon des critères pondérés.
>
> **Partie 3 — Modalités et plan de veille** : organisation opérationnelle d'une veille continue couvrant les dimensions technique *et* concurrentielle, au-delà du cadre strict du TP Ada Tech School dont s'inspire initialement la démarche.

---

---

# PARTIE 1 — BENCHMARK CONCURRENTIEL

## 1.1 Contexte et objectifs

La veille concurrentielle constitue un préalable indispensable à toute décision d'architecture produit. Elle permet de **positionner objectivement la proposition de valeur de Lenny & Co** au sein d'un marché en structuration, d'identifier les zones de différenciation réellement défendables, et de nourrir les arbitrages design et techniques pris tout au long du projet.

Le marché français et européen de l'accompagnement numérique des troubles DYS se caractérise par trois dynamiques concomitantes :

- **Une fragmentation historique** : la majorité des outils couvre un besoin unique (entraînement, lecture assistée, suivi clinique) sans proposer d'écosystème unifié autour du « triangle thérapeutique » Enfant – Parent – Orthophoniste.
- **Une montée en maturité réglementaire** : la CNIL, l'EDPB et l'ANSM renforcent leurs attentes sur la protection des données de mineurs et le statut de dispositif médical, élevant le ticket d'entrée pour les acteurs récents.
- **Une accélération technologique** : l'IA générative et adaptative, l'OCR embarqué, l'accessibilité cognitive (polices Lexend / OpenDyslexic, Design for All) deviennent des standards attendus.

L'objectif de ce benchmark est de répondre à la question structurante : *« quel produit répond le mieux à un besoin utilisateur et business ? »* et d'en déduire, par différence, la **proposition de valeur unique (UVP) de Lenny & Co**.

## 1.2 Définition du besoin utilisateur et business

Avant de sélectionner les solutions à comparer, il est nécessaire d'expliciter le besoin que l'outil recherché doit satisfaire. Cette définition sert de référentiel commun pour noter les concurrents sans arbitraire.

### 1.2.1 Besoin utilisateur

Trois publics sont servis simultanément par la solution cible :

| Persona | Besoin principal | Indicateur de satisfaction |
|---------|------------------|---------------------------|
| **L'Enfant (le Héros)** | S'entraîner chaque jour dans un environnement ludique, non anxiogène, qui valorise l'effort plutôt que la sanction. | Temps d'engagement quotidien, baisse de l'évitement des exercices, restauration de l'estime de soi. |
| **Le Parent (le Facilitateur)** | Comprendre les progrès de son enfant sans être expert, encourager sans culpabiliser, maintenir le lien avec le professionnel de santé. | Fréquence de consultation du dashboard, qualité perçue du dialogue avec l'orthophoniste. |
| **L'Orthophoniste (le Prescripteur)** | Paramétrer les contenus cliniquement pertinents, suivre l'observance thérapeutique entre les séances, gagner du temps sur le reporting. | Adoption en cabinet, durée de prescription, satisfaction professionnelle. |

### 1.2.2 Besoin business

Du point de vue du projet, la solution doit répondre à quatre contraintes structurantes :

- **Conformité RGPD renforcée** sur données de mineurs (article 8 RGPD) et potentiellement données de santé (V2).
- **Accessibilité financière** pour les familles non couvertes par une mutuelle « premium », enjeu de démocratisation.
- **Scalabilité technique** sur iOS + Android + tablette avec une seule base de code, portée par une équipe réduite.
- **Différenciation défendable** face à la concurrence installée, via l'IA adaptative, l'OCR Scan & Adapt, et un univers narratif propre permettant de capter l'attention et l'attachement de l'enfant.

## 1.3 Sélection des solutions comparées

Trois solutions représentatives du marché ont été retenues, choisies non pour leur proximité fonctionnelle mais pour leur **tentative d'écosystémisation**. Cette sélection permet de démontrer l'étude des acteurs qui, comme Lenny & Co, cherchent à dépasser la fragmentation historique du marché.

| Concurrent | Pays | Archétype | Raison de l'inclusion |
|------------|------|-----------|----------------------|
| **Mila Learn** | France | Dispositif médical écosystémique | Concurrent direct le plus proche : tentative d'unification autour du triangle enfant / aidant / soignant, dispositif médical certifié référencé par l'ANS. |
| **Poppins** | France | Application médicale monofonctionnelle à autorité scientifique | Référence française sur l'entraînement de la lecture dyslexique, co-conçue avec orthophonistes, très fort ancrage clinique. |
| **Nessy** | Royaume-Uni | Écosystème international historique | Référence anglo-saxonne installée depuis plus de 25 ans, présente dans les écoles, propose un portail parent et un portail enseignant. |

Les acteurs écartés (Dys-Vocal, Plume, Lalilo, Dybuster, Glaaster) l'ont été pour outil monofonctionnel sans ambition d'écosystème, positionnement éducation scolaire généraliste, ou audience hors périmètre pertinent pour le benchmark.

## 1.4 Critères d'évaluation et pondération

Les critères proposés par le cadre méthodologique de départ (UX, Fonctionnalités, Marché, Coût, Sécurité & conformité) ont été adaptés au contexte spécifique de Lenny & Co afin que la notation serve réellement la prise de décision produit et architecturale. Une **remise en question de la grille initiale** a conduit à l'ajout d'un critère *Gamification & dimension ludique* : celle-ci était diffuse dans le critère *UX & Accessibilité cognitive* mais méritait une évaluation explicite, étant centrale dans la proposition de valeur de Lenny & Co (enfant positionné comme « le Héros », univers narratif complet, mascotte Lenny le lion).

Chaque critère est noté de **1 (très insuffisant) à 5 (excellence)**.

| # | Critère | Poids | Justification |
|---|---------|:---:|---|
| 1 | **UX & Accessibilité cognitive** | 22 % | Pilier « Design for All » du projet : police Lexend, interlignage 1.7, zéro dark pattern, vocabulaire non-échec |
| 2 | **Couverture fonctionnelle** | 23 % | Cœur de l'UVP : écosystème unifié (entraînement + OCR + suivi pro) là où les concurrents restent fragmentés |
| 3 | **Gamification & dimension ludique** | 12 % | Univers narratif, mécaniques ludiques, équilibre ludique/pédagogique, dimension relationnelle |
| 4 | **Modèle économique & accessibilité financière** | 13 % | Démocratisation : toucher les familles non couvertes par mutuelle premium via un Freemium accessible |
| 5 | **Conformité RGPD & données mineur** | 17 % | Enjeu RNCP 7 + souveraineté vs concurrents anglo-saxons ; données d'enfants = sensibilité maximale |
| 6 | **Ancrage thérapeutique** (co-conception ortho, validation scientifique) | 13 % | Crédibilité face au jury et aux professionnels prescripteurs ; point de vigilance assumé pour Lenny & Co |
| | **Total** | **100 %** | |

### Méthodologie de notation du critère « Gamification & dimension ludique »

Le critère agrège quatre sous-dimensions : **univers narratif** (existence d'un monde, mascotte, personnages, storytelling), **mécaniques ludiques** (badges, étoiles, missions, quêtes, avatars personnalisables), **équilibre ludique/pédagogique** (le jeu sert l'apprentissage sans le masquer), et **dimension relationnelle** (communauté, valorisation par les proches, partage des succès). Un 5/5 signifie *« univers narratif complet, mécaniques intégrées, équilibre subtil, relation valorisée »*.

## 1.5 Grille d'évaluation

### 1.5.1 Matrice de notation

| Critère (pondération) | Mila Learn | Poppins | Nessy | **Lenny & Co** *(cible)* |
|-----------------------|:----------:|:-------:|:-----:|:------------------------:|
| UX & Accessibilité cognitive *(22 %)* | 4 | 4 | 3 | **5** |
| Couverture fonctionnelle *(23 %)* | 3 | 2,5 | 4 | **5** |
| Gamification & dimension ludique *(12 %)* | 3 | 4 | 4 | **5** |
| Modèle économique *(13 %)* | 2 | 3 | 3 | **4** |
| Conformité RGPD & données mineur *(17 %)* | 5 | 4 | 2 | **5** |
| Ancrage thérapeutique *(13 %)* | 5 | 4 | 4 | **3** |
| **Score pondéré final / 5** | **3,69** | **3,53** | **3,31** | **4,61** |

> **Note de transparence méthodologique** : la colonne *Lenny & Co* représente le **score cible projeté**, non un constat opérationnel. Elle est justifiée par les décisions de design déjà actées (direction artistique manga, avatars animaux, mascotte Lenny le lion, triangle thérapeutique enfant-Héros, design system accessibilité) mais reste à prouver en production. Cette honnêteté méthodologique est explicitement revendiquée pour la soutenance.

### 1.5.2 Visualisation radar

![Diagramme radar — Benchmark concurrentiel Lenny & Co](Benchmark-Radar-Produit.png)

Le radar met en évidence quatre observations stratégiques :

1. **Mila Learn domine sur l'ancrage thérapeutique et la conformité** mais plafonne sur l'accessibilité financière, la couverture fonctionnelle et la gamification.
2. **Poppins est équilibré sur cinq axes** (UX, gamification, modèle, RGPD, ancrage) mais sur un périmètre fonctionnel volontairement réduit.
3. **Nessy a la couverture la plus large et une gamification forte** mais souffre d'une fragilité RGPD et d'une UX datée.
4. **Lenny & Co occupe un sweet spot** : convergence des forces sur cinq axes, avec l'ancrage thérapeutique comme seul chantier assumé.

### 1.5.3 Lectures stratégiques

**La gamification devient un prérequis d'entrée, pas un différenciateur unique.** Avec des scores de 3-4/5 pour les trois concurrents sur ce critère, tous les acteurs sérieux du marché DYS ont compris que l'engagement enfant dépend d'une dimension ludique. Ce que Lenny & Co doit défendre, ce n'est donc pas *« on est ludique »* (tous le sont) mais *« on combine le ludique avec le triangle thérapeutique, l'OCR contextuel, la rigueur RGPD et un univers narratif construit »*.

**L'écart Lenny / Mila se creuse sur la dimension expérientielle.** Contre-intuitivement, l'ajout de la gamification *accentue* l'écart (0,92 pt). Mila Learn, malgré ses personnages colorés, reste dans un registre clinique où l'enfant est « patient » — pas « héros ». Cette différence de posture narrative se matérialise dans le score.

**Le positionnement de Lenny & Co gagne en cohérence.** Le projet n'est pas seulement supérieur sur les axes techniques (écosystème, RGPD) : il est aussi supérieur sur la dimension expérientielle (UX 5/5 + Gamification 5/5), ce qui renforce le narratif global : rigueur et engagement — combinaison rare sur le marché.

## 1.6 Analyse détaillée des concurrents

### 1.6.1 Mila Learn — *le concurrent le plus dangereux*

**Positionnement** : dispositif médical logiciel distribué principalement via des partenariats B2B2C (assureurs, complémentaires santé, grandes entreprises). Exemple documenté : partenariat Allianz France proposant l'application aux enfants des collaborateurs.

**Forces**
- Statut de **dispositif médical certifié**, référencé par l'Agence du Numérique en Santé (ANS) — gage de conformité maximal et barrière à l'entrée pour les nouveaux acteurs
- **Ancrage clinique fort** : co-conception avec orthophonistes, approche scientifique fondée sur le lien musique-phonologie-cognition, publications de recherche
- **Cible large** (6-14 ans, DYS + TDAH) permettant une montée en volume
- **Distribution institutionnelle** qui sécurise le revenu indépendamment de l'acquisition individuelle
- **Jeux musicaux colorés** avec personnages ludiques (dimension ludique réelle)

**Faiblesses**
- **Inaccessibilité directe** pour les familles hors partenariats entreprise/assurance
- **Couverture fonctionnelle restreinte** à l'entraînement musical : absence d'OCR, de dashboard parent élaboré, de console orthophoniste documentée publiquement
- **Registre clinique plus que narratif** : l'enfant y est « patient » plus que « héros », pas d'univers construit, pas de mascotte forte
- **Approche B2B2C** qui ralentit potentiellement la capacité d'itération centrée utilisateur final

**Apprentissage pour Lenny & Co** : la rigueur clinique est un atout défensif majeur. Pour ne pas céder cet angle à Mila, il faut structurer dès la V1 un **protocole de co-conception orthophonique formalisé** (conseil scientifique, bêta en cabinet, mesure d'efficacité). Et renforcer le positionnement narratif (univers, mascotte) pour creuser l'écart sur le plan expérientiel.

### 1.6.2 Poppins — *l'autorité scientifique française*

**Positionnement** : application médicale grand public de référence à destination des familles, pour l'entraînement de la lecture chez l'enfant dyslexique, vendue en B2C direct.

**Chiffres clés**
- Abonnement annuel : **234 € pour 2 profils enfants** (≈ 19,50 €/mois)
- Essai gratuit 7 jours
- **Accès gratuit 6 mois** pour les familles aux revenus modestes
- Temps d'utilisation volontairement **limité à 20 minutes par jour**

**Forces**
- Excellence dans la discipline choisie : musique comme vecteur d'entraînement phonologique, approche documentée
- **Limitation 20 min/jour** : rupture nette avec les pratiques d'attention-capture, éthique numérique forte
- **Engagement social** matérialisé par le tier solidaire et le « Club Poppins » (communauté, podcasts, événements)
- Adaptation automatique du niveau avec détection des compétences plus fragiles
- Gamification bien intégrée (jeux musicaux, progression visible, animation soignée)

**Faiblesses**
- Périmètre fonctionnel monolithique centré lecture : pas d'OCR, pas de console orthophoniste intégrée, pas d'extension aux autres troubles DYS
- Tarif élevé hors tier social
- Orthophoniste en position d'usager externe (il recommande mais n'a pas de dashboard clinique dédié)
- Univers narratif peu développé (pas de mascotte ni de monde construit)

**Apprentissage pour Lenny & Co** : la **limitation du temps d'écran** est un signal éthique puissant à reprendre (sessions courtes, quota quotidien). Le Club Poppins inspire une dimension communautaire possible en V2.

### 1.6.3 Nessy — *la référence internationale établie*

**Positionnement** : plateforme britannique (depuis 1999) d'apprentissage multi-compétences pour enfants dyslexiques, avec un double canal B2C (parents) et B2B (écoles). Forte présence dans le système éducatif anglo-saxon.

**Forces**
- Largeur de catalogue : Reading & Spelling, Numbers, Writing Beach, Dyslexia Quest, Dyslexia Explained
- Approche écosystémique : abonnements Home + School, portail parent, rapports de progrès partageables
- Méthode phonics structurée, validée scientifiquement
- Marque installée bénéficiant de 25 ans de capital réputationnel
- **Gamification historique forte** : mascotte Nessy le dinosaure reconnaissable, système de *nuggets*, animations
- Ressources gratuites (édition « Understanding Dyslexia »)

**Faiblesses**
- Anglais uniquement (barrière majeure pour le marché francophone)
- Fragilité RGPD : hébergement présumé UK/US, pas d'adaptation visible au cadre européen post-Schrems II
- UX datée reflétant plusieurs générations de produit successives
- Pas d'IA adaptative native : parcours pédagogiques plus traditionnels
- Modèle dominant école : expérience parent moins premium que l'institutionnelle

**Apprentissage pour Lenny & Co** : Nessy démontre qu'un portail dédié aux enseignants constitue une extension naturelle du triangle thérapeutique (à considérer pour V3). Nessy prouve aussi qu'**une mascotte forte et cohérente sur la durée** (25 ans) crée un attachement identifiable — ce qui valide le choix de Lenny le lion dans la construction narrative du projet.

## 1.7 Synthèse différenciante — Proposition de valeur unique

### 1.7.1 Positionnement

> **Lenny & Co se positionne comme la synthèse de la nouvelle génération d'outils DYS : un écosystème francophone unifiant l'entraînement adaptatif (comme Poppins), le triangle thérapeutique (comme Mila Learn) et la largeur de catalogue (comme Nessy), en y ajoutant quatre ruptures : l'IA adaptative temps réel, l'OCR contextuel « Scan & Adapt », une conformité RGPD pensée dès la conception pour les données de mineurs, et un univers narratif construit où l'enfant est « le Héros » plutôt que « le patient ».**

### 1.7.2 Cinq angles de différenciation défendables

| Angle | Face à Mila Learn | Face à Poppins | Face à Nessy |
|-------|-------------------|----------------|--------------|
| **Écosystème unifié Parent-Enfant-Ortho** | Parité structurelle avec UX parent/enfant plus gamifiée | Ouverture parent/ortho là où Poppins reste centré enfant | Adaptation francophone/européenne vs Nessy anglo-centrique |
| **IA adaptative & OCR Scan & Adapt** | Rupture technologique nette (Mila reste sur logique conditionnelle) | Extension hors de l'app vers le monde réel | IA native vs pédagogie linéaire historique |
| **Freemium accessible** | Accessibilité directe sans passer par un employeur | Prix d'entrée plus bas, compatible familles modestes | Offre B2C consumer-first vs modèle B2B dominant Nessy |
| **Conformité RGPD française & européenne** | Parité ; lecture architecturale différente (préférences d'apprentissage vs diagnostic médical en V1) | Renforcement par Privacy by Design | Avantage décisif : souveraineté européenne vs hébergement anglo-saxon |
| **Univers narratif « Enfant-Héros »** | Rupture de registre : enfant-héros vs enfant-patient | Construction d'un monde (mascotte, avatars, storytelling) vs app mono-lecture | Renouvellement générationnel (manga, esthétique contemporaine) vs univers Nessy années 2000 |

### 1.7.3 Point faible à transformer en plan d'action

L'honnêteté du benchmark impose d'acter que Lenny & Co est en retrait sur **l'ancrage thérapeutique (3/5)**. Mila Learn et Poppins ont capitalisé sur des années de co-conception clinique et, pour Mila, sur une certification dispositif médical. Ce retard ne doit pas invalider le positionnement auprès du jury et des prescripteurs. Un **plan de consolidation thérapeutique** est structuré :

- **V1 (6 mois)** : identification et contractualisation d'un conseil scientifique (2 à 3 orthophonistes expert·e·s DYS) ; bêta testing en cabinet ; mesure de satisfaction et d'observance
- **V1.5 (mois 7-9)** : publication d'une note méthodologique exposant la démarche de co-conception, intégrée au dossier de projet RNCP 7 et à la communication produit
- **V2 (mois 10-18)** : lancement d'une étude d'usage en partenariat avec un laboratoire universitaire (piste INSERM, Hospices Civils de Lyon, école d'orthophonie)
- **V3 (au-delà)** : instruction d'une demande de certification dispositif médical logiciel (classe I ou IIa selon usage), en rapprochement de la doctrine ANS

Ce plan transforme une faiblesse concurrentielle en **trajectoire crédible** — posture qu'un jury d'architecte valorise davantage qu'une revendication non étayée.

## 1.8 Conclusion de la Partie 1 — Point fort du service

Le point fort distinctif de Lenny & Co, révélé par la confrontation aux trois concurrents de référence, est sa capacité à **conjuguer simultanément** :

- une **unification fonctionnelle** du triangle thérapeutique (couverture 5/5 vs moyenne concurrentielle 3,2/5)
- une **modernité technologique** (IA adaptative + OCR contextuel) absente chez tous les concurrents étudiés
- une **exigence éthique et réglementaire** native (RGPD mineur, zéro dark pattern, design accessibilité cognitive)
- une **accessibilité financière** via un Freemium qui démocratise un marché cloisonné entre distribution B2B2C (Mila) et abonnement premium (Poppins)
- une **expérience narrative construite** (*« l'enfant-Héros »*) qui positionne l'enfant comme acteur plutôt que bénéficiaire passif

C'est la **combinaison de ces cinq dimensions**, plus que chacune prise isolément, qui constitue le point fort défendable — et la raison pour laquelle il existe un espace produit non couvert dans le marché français et européen de l'accompagnement DYS.

---

---

# PARTIE 2 — BENCHMARK TECHNIQUE

## 2.1 Contexte et objectifs

Le benchmark technique complète le benchmark concurrentiel (Partie 1). Là où le benchmark produit posait la question *« quel produit répond le mieux au besoin utilisateur et business ? »*, le benchmark technique pose la question :

> *« Cette technologie est-elle adaptée à notre contexte technique, produit, organisationnel, éco-responsable et de ressources réelles ? »*

L'enjeu est d'inscrire chaque brique logicielle structurante du projet dans une démarche d'évaluation argumentée, reproductible, et soutenable face à un jury RNCP 7.

### 2.1.1 Contexte spécifique du projet

Cinq contraintes structurent le benchmark :

- **Équipe d'une personne** : toute complexité technique non essentielle consomme directement le temps de développement des fonctionnalités métier
- **Niveau d'expérience réel** : expertise confirmée en Python/Django et TypeScript/React/Next.js ; expérience Java uniquement académique (jamais de projet professionnel Java) ; familiarité DDD via le projet antérieur ZenLog (mars 2026) ; **expérience mobile acquise via React Native et Java Android** (Flutter/Dart reste à apprendre mais paradigmes mobile connus) ; **DevOps pratique** via déploiement de ZenLog sur Azure
- **Pas de mentor Java disponible** dans l'entreprise d'alternance, pas de budget pour coach externe
- **Ambition architecturale forte** : DDD + hexagonal + monolithe modulaire. Le choix de stack doit porter cette ambition idiomatiquement *et* réalistement
- **Cible RNCP 7** : démontrer la posture d'*architecte logiciel* (capacité à arbitrer consciemment les contraintes)

### 2.1.2 Méthodologie

La démarche suit le cycle du TP Ada Tech School *« Assurer une veille technologique performante »* : définir la brique, identifier 2 à 4 alternatives crédibles, définir des critères pondérés adaptés au contexte, noter chaque alternative, visualiser en radar, formaliser une note de recommandation.

### 2.1.3 Démarche de révision honnête

Le benchmark technique a fait l'objet de **plusieurs remises en question successives** documentées :

- Un premier arbitrage penchait vers **Kotlin + Spring Boot** côté backend, pour l'idiomaticité DDD de l'écosystème Spring.
- L'**intégration du critère numérique responsable** (C3.6 EADL), initialement diffus, a été formalisée pour objectiver l'empreinte éco-responsable.
- La **réévaluation honnête du niveau d'expérience réel** (Java uniquement académique, pas de mentor Spring disponible) a conduit à **l'ajout d'un critère « Faisabilité solo réelle »** et à une révision des scores de courbe d'apprentissage, faisant basculer la recommandation vers **Python + Django**.

Cette trajectoire de révision constitue un livrable méthodologique en soi : elle illustre la capacité à réviser honnêtement ses conclusions face à de nouvelles informations, posture attendue par le référentiel EADL (C1.2 et C1.7).

## 2.2 Périmètre — Les trois briques benchmarkées

### 2.2.1 Brique A — Framework backend

Décision technique la plus engageante du projet. Influe sur la capacité à porter idiomatiquement l'architecture DDD, la productivité, le coût d'exploitation, la crédibilité face au jury, la courbe d'apprentissage.

**Alternatives évaluées** (4) : Kotlin + Spring Boot ; Kotlin + Ktor ; Java + Spring Boot ; Python + Django.

### 2.2.2 Brique B — Framework mobile cross-platform

Le mobile porte plusieurs fonctionnalités différenciantes : la feature OCR « Scan & Adapt » (performance native + accès caméra), le quotidien de l'enfant (animations fluides), le dashboard parent en mobilité (offline).

**Alternatives évaluées** (3) : React Native + Expo ; Flutter ; Kotlin Multiplatform + Compose Multiplatform.

### 2.2.3 Brique C — Framework front-end web

Le front-end web sert les orthophonistes en contexte desktop professionnel (sessions longues) et les parents accédant au dashboard enrichi depuis un ordinateur. Conditionne la qualité de l'expérience utilisateur professionnelle, la performance perçue sur contenu dense, la cohérence de typage avec mobile et back, la maintenabilité long terme.

**Alternatives évaluées** (3) : Next.js 15 (App Router) ; Remix / React Router v7 ; SvelteKit 2.

### 2.2.4 Hors périmètre

- Moteur de base de données : **PostgreSQL** acté pour le support RLS
- Moteur OCR spécifique : benchmark séparé en phase 3 du projet
- Outillages DevOps : arbitrés dans `Etude-Faisabilite-LennyCo.md`

## 2.3 Critères d'évaluation et pondération

Dix critères sont retenus, chacun noté de **1 (très insuffisant) à 5 (excellence)**. Les pondérations diffèrent entre briques pour refléter l'importance relative de chaque dimension.

| # | Critère | Poids Backend | Poids Mobile | Poids Front |
|---|---------|:---:|:---:|:---:|
| 1 | Maturité | 12 % | 12 % | 10 % |
| 2 | Communauté & écosystème | 12 % | 12 % | 14 % |
| 3 | Maintenabilité & DDD/Hexa | 10 % | 8 % | 8 % |
| 4 | Performance | 10 % | 18 % | 16 % |
| 5 | Courbe d'apprentissage | 16 % | 14 % | 14 % |
| 6 | Disponibilité profils marché | 10 % | 10 % | 10 % |
| 7 | Coût d'exploitation | 8 % | 6 % | 6 % |
| 8 | Sécurité | 6 % | 6 % | 6 % |
| 9 | 🌱 Numérique responsable | 6 % | 6 % | 6 % |
| 10 | **Faisabilité solo réelle** | 10 % | 8 % | 10 % |
| | **Total** | **100 %** | **100 %** | **100 %** |

### Méthodologie de notation du critère « Faisabilité solo réelle »

Critère qui capture ce qu'aucun autre ne capture : le risque d'échec projet en contexte solo. Il agrège quatre sous-dimensions :

- Écart entre niveau réel et niveau nécessaire pour être productive sur la stack
- Disponibilité de ressources d'aide (mentor, communauté francophone, documentation)
- Coût d'erreur en cas d'arbitrage technique mal posé (réversibilité)
- Confort de développement qui influe sur la motivation et l'endurance sur 6-10 mois

Un **5/5** signifie *« je suis opérationnelle immédiatement, je vais livrer avec qualité »*. Un **2/5** signifie *« je vais passer 20-30 % du temps projet à apprendre avant d'être productive »*.

### Méthodologie de notation du critère « Numérique responsable »

Le critère agrège quatre sous-dimensions : empreinte mémoire runtime, empreinte CPU, taille des binaires/bundles, efficience architecturale. Le score attribué reflète le comportement par défaut de la techno, pas ses optimisations avancées (ex : GraalVM Native Image pour Java est un levier possible mais n'améliore pas le score de base).

## 2.4 Benchmark Brique A — Backend

### 2.4.1 Présentation des alternatives

**Kotlin + Spring Boot 3.x** — Kotlin (JetBrains, stable depuis 2016), langage JVM moderne avec interopérabilité Java complète. Spring Boot supporte officiellement Kotlin depuis 2017.

**Kotlin + Ktor** — Framework web Kotlin-native de JetBrains (v3.0 en 2024). Plus léger que Spring, écosystème moins riche.

**Java + Spring Boot 3.x** — Standard de facto du backend enterprise européen. Java 21 LTS (2023) apporte *records*, *sealed interfaces*, *pattern matching*, *Virtual Threads*.

**Python + Django 5.x + DRF** — Couteau suisse du web Python. Philosophie *« batteries included »*, productivité maximale, ORM actif (paradigme en tension avec DDD pur).

### 2.4.2 Grille de notation

| Critère (poids) | Kotlin + Spring | Kotlin + Ktor | Java + Spring | Python + Django |
|---|:---:|:---:|:---:|:---:|
| Maturité (12 %) | 4 | 3 | **5** | **5** |
| Communauté & écosystème (12 %) | **5** | 3 | **5** | **5** |
| Maintenabilité & DDD/Hexa (10 %) | **5** | 4 | 4 | 3 |
| Performance (10 %) | 4 | **5** | 4 | 3 |
| Courbe d'apprentissage (16 %) | 2 | 2,5 | 2,5 | **5** |
| Disponibilité profils marché (10 %) | 3 | 2 | **5** | 4 |
| Coût d'exploitation (8 %) | 4 | **5** | 4 | **5** |
| Sécurité (6 %) | **5** | 4 | **5** | **5** |
| 🌱 Numérique responsable (6 %) | 3,5 | 4 | 3,5 | 4 |
| **Faisabilité solo réelle (10 %)** | 2,5 | 2 | 3 | **5** |
| **Score pondéré / 5** | **3,68** | **3,30** | **4,03** | **4,44** |

### 2.4.3 Justifications des critères clés

**Courbe d'apprentissage (16 % — le critère le plus lourd)**

- *Python + Django (5)* : expertise opérationnelle confirmée via ZenLog. Productivité immédiate.
- *Kotlin + Ktor (2,5)* : Kotlin inconnu + framework inconnu + communauté francophone plus fine.
- *Java + Spring (2,5)* : base Java académique mais jamais livré en pro. L'apprentissage *réel* de Spring Boot + Spring Security + Spring Data JPA + Testcontainers représente 2-3 mois avant productivité stable.
- *Kotlin + Spring (2)* : cumul des handicaps Kotlin + Spring non pratiqué.

**Faisabilité solo réelle (10 %)**

- *Python + Django (5)* : terrain maîtrisé, ZenLog comme référence d'exécution solo, livrable avec qualité dans le délai.
- *Java + Spring (3)* : faisable mais exposé — absence de mentor Java disponible, risque d'apprentissage non mitigé.
- *Kotlin + Spring (2,5)* : double apprentissage, exécution risquée.
- *Kotlin + Ktor (2)* : stack minoritaire, moins de ressources francophones.

**Maintenabilité & DDD/Hexa (10 %)**

- *Kotlin + Spring (5)* : data classes, sealed classes, null safety — équivalent idiomatique à chaque construction DDD
- *Kotlin + Ktor (4)* : même langage Kotlin, mais Ktor oblige à câbler manuellement plus de choses
- *Java + Spring (4)* : Java 21+ apporte records/sealed interfaces/pattern matching + écosystème Spring Modulith/Data JPA/Events nativement pensé DDD
- *Python + Django (3)* : paradigme *anti-DDD* par design (ORM actif couple persistance et domaine). Faisable avec discipline (comme dans ZenLog), mais à contre-courant du framework

**Numérique responsable**

- *Python + Django (4)* : empreinte RAM minimale (100-200 Mo), startup < 1 sec. Mais Python 10× plus lent que JVM sur calcul pur — acceptable pour l'usage I/O-bound de Lenny & Co
- *Kotlin + Ktor (4)* : runtime léger, coroutines Kotlin-native optimisées pour I/O concurrentes
- *Kotlin + Spring, Java + Spring (3,5)* : JVM 300-500 Mo, startup 3-10 sec. Virtual Threads Java 21 et GraalVM Native Image sont des leviers possibles mais non par défaut

### 2.4.4 Radar backend

![Radar backend](Benchmark-Radar-Backend.png)

### 2.4.5 Lecture critique

**Python + Django sort largement en tête (4,44)**, avec un écart net de **0,41 pt** sur Java + Spring. Python gagne parce qu'il est réellement faisable dans le délai imparti, avec une qualité d'exécution défendable. Java + Spring et Kotlin + Spring demandent un apprentissage sous-estimé, sans filet (mentor) pour en amortir le coût.

**Python + Django conserve ses faiblesses** (Maintenabilité DDD 3/5, Performance 3/5) qui sont réelles mais contournables. L'ORM actif de Django est un handicap pour DDD pur — néanmoins, comme démontré dans ZenLog, il est possible d'appliquer les patterns hexagonaux en isolant le domaine des modèles Django, au prix de mappings manuels. **Cette discipline est elle-même un livrable pédagogique du projet**.

## 2.5 Benchmark Brique B — Mobile

### 2.5.1 Présentation des alternatives

**React Native + Expo** — Framework JavaScript/TypeScript de Meta, stable depuis 2015. Expo accélère le développement (APIs natives pré-bridgées, build cloud, OTA updates).

**Flutter** — Framework Dart de Google, stable depuis 2018. Moteur de rendu propriétaire Impeller, compilation AOT vers natif.

**Kotlin Multiplatform + Compose Multiplatform** — Solution cross-platform de JetBrains, iOS stable depuis mai 2025 seulement.

### 2.5.2 Grille de notation

| Critère (poids) | React Native + Expo | Flutter | Kotlin Multiplatform |
|---|:---:|:---:|:---:|
| Maturité (12 %) | **5** | **5** | 3,5 |
| Communauté & écosystème (12 %) | **5** | 4 | 3 |
| Maintenabilité & DDD/Hexa (8 %) | 3 | **5** | **5** |
| Performance (18 %) | 3 | **5** | **5** |
| Courbe d'apprentissage (14 %) | 4 | 2 | 3,5 |
| Disponibilité profils marché (10 %) | **5** | 3 | 2 |
| Coût d'exploitation (6 %) | **5** | **5** | 4 |
| Sécurité (6 %) | 3 | 4 | 4 |
| 🌱 Numérique responsable (6 %) | 3 | 3,5 | 4 |
| Faisabilité solo réelle (8 %) | 3,5 | 3,5 | 2 |
| **Score pondéré / 5** | **3,98** | **3,99** | **3,65** |

### 2.5.3 Lecture critique — un cas d'arbitrage qualitatif assumé

**Flutter et React Native sont strictement ex-aequo** (3,99 vs 3,98, écart de 0,01 pt). La pure mathématique du benchmark ne permet pas de trancher.

**Le choix Flutter est maintenu comme arbitrage qualitatif assumé**, pour trois raisons explicites :
1. **Performance native** (Flutter 4,01 ms frame rendering vs RN 8,34 ms)
2. **Typage strict Dart** (vs typage TS/JS plus laxiste)
3. **Apprentissage d'une techno nouvelle** (argument pédagogique RNCP de démonstration d'adaptabilité)

Cette décision est un cas intéressant à exposer en soutenance : **le benchmark ne donne pas une réponse unique — il cartographie l'espace de décision, et l'architecte arbitre les zones d'indifférence** sur des critères qualitatifs assumés. C'est un récit d'architecture plus mature qu'une décision pilotée purement par le score.

**Note sur la transférabilité de l'expérience mobile** : l'apprentissage Flutter ne part pas de zéro. L'expérience préalable en **React Native** (paradigmes mobile, widgets composables, lifecycle) et en **Java Android** (concepts natifs, stores, permissions) rend le saut vers Dart / Flutter plus doux qu'une entrée *ab initio* dans le développement mobile. Dart partage avec TypeScript un typage strict et une gestion async native ; Flutter partage avec React le paradigme déclaratif UI. La courbe d'apprentissage reconnue de 2-4 semaines est réaliste dans ce contexte.

**Kotlin Multiplatform (3,65)** reste en retrait, pénalisé par la maturité iOS récente (mai 2025), le marché emploi étroit, et la faisabilité solo basse.

### 2.5.4 Radar mobile

![Radar mobile](Benchmark-Radar-Mobile.png)

## 2.6 Benchmark Brique C — Front-end web

### 2.6.1 Présentation des alternatives

**Next.js 15 (App Router)** — Framework React de référence (Vercel). App Router + React Server Components + Server Actions matures en 2025.

**Remix / React Router v7 (framework mode)** — Fusionné dans React Router v7 en 2024. Philosophie web standards, loaders/actions.

**SvelteKit 2** — Framework Svelte compiler-based. Bundles 60-70 % plus petits que React, pas de virtual DOM.

### 2.6.2 Grille de notation

| Critère (poids) | Next.js 15 | Remix / RRv7 | SvelteKit 2 |
|---|:---:|:---:|:---:|
| Maturité (10 %) | **5** | 4 | 4 |
| Communauté & écosystème (14 %) | **5** | 4 | 3 |
| Maintenabilité & cohérence (8 %) | 4 | **5** | **5** |
| Performance (16 %) | **5** | 4 | **5** |
| Courbe d'apprentissage (14 %) | 4 | 4 | 2 |
| Disponibilité profils marché (10 %) | **5** | 3 | 2 |
| Coût d'exploitation (6 %) | **5** | **5** | **5** |
| Sécurité (6 %) | 4 | **5** | 4 |
| 🌱 Numérique responsable (6 %) | 3,5 | 4 | **5** |
| Faisabilité solo réelle (10 %) | **5** | 4 | 2 |
| **Score pondéré / 5** | **4,63** | **4,10** | **3,54** |

### 2.6.3 Lecture critique

**Next.js 15 reste largement en tête (4,63)** avec la plus forte faisabilité solo : pratique React/Next déjà acquise, productivité immédiate. SvelteKit baisse à 3,54 — son excellence technique sur l'empreinte et la maintenabilité est neutralisée par l'absence de pratique et un marché emploi français étroit.

### 2.6.4 Radar front-end

![Radar front-end](Benchmark-Radar-Front.png)

## 2.7 Matrice des scénarios de stack

Le benchmark ne se lit pas alternative par alternative isolément. C'est la **combinaison** backend + mobile + front qui constitue le vrai choix d'architecte. Le front étant tranché avec Next.js 15 (leader incontesté), la matrice se concentre sur les scénarios compétitifs backend + mobile.

| Scénario | Web | Backend (score) | Mobile (score) | Nb langages | Moyenne briques | Commentaire |
|---|---|:---:|:---:|:---:|:---:|---|
| A — Cohérence Kotlin max | Next.js | Kotlin+Spring (3,68) | KMM (3,65) | 2 | 3,67 | Apprentissage mutualisé, maturité KMM trop récente |
| B — Rigueur Java + Flutter | Next.js | Java+Spring (4,03) | Flutter (3,99) | 3 | 4,01 | Écarté : absence de mentor Java |
| **C — Python + Flutter** ✅ | Next.js | **Python+Django (4,44)** | **Flutter (3,99)** | 3 | **4,22** | **Scénario retenu — voir §2.8** |
| D — Python + RN | Next.js | Python+Django (4,44) | RN (3,98) | 2 | 4,21 | Proche de C, mais RN ne répond pas aux critères qualitatifs mobile |
| E — Kotlin+Spring + Flutter | Next.js | Kotlin+Spring (3,68) | Flutter (3,99) | 3 | 3,84 | Kotlin backend sans mutualisation |

**Le scénario C est retenu** : Python + Django backend, Flutter mobile, Next.js 15 front.

## 2.8 Note de recommandation — Stack technique Lenny & Co

### 2.8.1 Rappel du contexte

Lenny & Co est un projet backend-and-beyond porté par une développeuse unique sur délai contraint RNCP 7. Trois briques techniques à arbitrer ; PostgreSQL + architecture DDD / hexagonale / monolithe modulaire à 2 bounded contexts actés en amont.

### 2.8.2 Synthèse consolidée

| Brique | Alternatives évaluées | Score leader | Alternative retenue |
|--------|----------------------|:------------:|---------------------|
| **Backend** | Kotlin+Spring / Kotlin+Ktor / Java+Spring / Python+Django | **Python+Django : 4,44** | **Python 3.12+ + Django 5.x + DRF** |
| **Mobile** | React Native / Flutter / KMM | Flutter : 3,99 (quasi ex-aequo RN à 3,98) | **Flutter (Dart)** — arbitrage qualitatif |
| **Front** | Next.js 15 / Remix+RRv7 / SvelteKit 2 | **Next.js : 4,63** | **Next.js 15 (App Router)** |

### 2.8.3 Recommandation finale

| Couche | Technologie retenue | Version cible | Justification en une ligne |
|--------|--------------------|---------------|----------------------------|
| Front-end web | Next.js 15 (App Router) | Next 15.x + React 19 | Leader absolu (4,63), maîtrise opérationnelle immédiate |
| Mobile cross-platform | Flutter | Flutter 3.27+ stable | Arbitrage qualitatif (perf + typage + apprentissage démontré) |
| Backend | Python 3.12+ + Django 5.x + Django REST Framework | Python 3.12, Django 5.x LTS | Score maximal (4,44), expertise opérationnelle, livraison sécurisée |
| Base de données | PostgreSQL + Row-Level Security | PG 16+ | Double barrière sécurité + empreinte éco-responsable |
| Architecture | Monolithe + DDD-light + Hexagonal, **2 bounded contexts** | — | Identity & Access + Learning & Progress |
| Langages du projet | TypeScript (web + mobile) + Python (back) + Dart (mobile) | — | 3 langages, dont 2 maîtrisés (TS, Python) et 1 appris (Dart) |

### 2.8.4 Narratif stratégique pour la soutenance

Six arguments convergents :

1. **Lucidité sur le niveau réel et alignement des ressources.** Le choix Python+Django assume que l'expertise opérationnelle est la condition préalable à une architecture propre livrée dans les délais. Choisir Java+Spring sans mentor et sans expérience pro aurait signifié consacrer 2-3 mois à l'apprentissage au détriment de la qualité métier livrable.

2. **Progression pédagogique par continuité DDD — de ZenLog à Lenny & Co.** ZenLog (mars 2026) a posé les bases du DDD en Python + Django sur un domaine simple avec enjeux faibles. Lenny & Co pousse cet apprentissage sur un domaine *structurellement plus exigeant* (sécurité RGPD enfants, ABAC multi-acteurs, triangle thérapeutique, PostgreSQL RLS). Même langage, même framework, mais contraintes qualitatives plus fortes — progression pédagogique cohérente.

3. **DDD en terrain contraint est une démonstration plus forte que DDD en terrain idéal.** Django a un ORM actif qui couple persistance et domaine — framework *anti-DDD par design*. Appliquer DDD/Hexagonal proprement en Django exige **plus de discipline architecturale** qu'en Spring, parce qu'il faut lutter contre le framework. Les contournements documentés (extraction domaine pur, ports read-only, mappings manuels) constituent un livrable pédagogique distinctif.

4. **Démonstration d'apprentissage d'une techno nouvelle via Flutter/Dart.** L'ambition d'exploration technique n'est pas sacrifiée : elle est portée par le mobile. Dart + Flutter + ML Kit OCR = terrain nouveau, avec transférabilité réelle depuis l'expérience React Native + Java Android de l'auteure.

5. **Cohérence avec la posture professionnelle revendiquée.** L'auteure utilise Lenny & Co comme espace de rigueur architecturale — contre-modèle constructif à son quotidien professionnel. Choisir Python+Django n'est pas une régression : c'est refuser de diluer l'exigence de qualité dans un apprentissage technologique risqué. La rigueur ne dépend pas de la techno ; elle dépend de la discipline appliquée à la techno qu'on maîtrise.

6. **Trade-off éco-responsable assumé.** L'empreinte modérée de Python/Django (100-200 Mo RAM) permet un tier B1 Azure suffisant. Les leviers de sobriété complémentaires (monolithe modulaire, OCR on-device, React Server Components) compensent les autres dimensions.

### 2.8.5 Contextualisation — Projet RNCP vs contexte industriel

Ce benchmark est *situé*. Dans un contexte industriel différent — grande entreprise avec équipe Java existante + mentor Spring + budget formation — le benchmark pencherait vers Java+Spring, plus idiomatique DDD. Le critère *Faisabilité solo réelle* passerait alors à 3-5 % et la recommandation basculerait mécaniquement. Dans une startup B2C MVP très court, Python+Django reste dominant.

**La distinction contexte académique / industriel / startup est elle-même un livrable du benchmark** : elle démontre que le choix technique n'est pas dogmatique mais *contextuellement sensible* et pondéré par les ressources réelles.

### 2.8.6 Risques consolidés et plans de mitigation

| # | Risque | Probabilité | Impact | Mitigation | Safety net |
|---|--------|:-----------:|:------:|-----------|------------|
| 1 | Apprentissage Dart plus long qu'anticipé | Moyenne | Moyen | Formation amont codelab Flutter + communauté, expérience mobile transférable | Fallback React Native (déjà pratiqué) |
| 2 | Limitations DDD du framework Django | Certaine | Faible-Moyen | Discipline d'isolation domaine pur, patterns éprouvés de ZenLog | Refactorings documentés comme preuves d'apprentissage |
| 3 | Trois langages à jongler en solo (TS + Python + Dart) | Moyenne | Moyen | Découpage par phase (back + web d'abord, mobile ensuite) | Paradigmes cousins (TS ↔ Dart sur async/null-safety) |
| 4 | Complexité Next.js 15 App Router + RSC | Faible | Faible | Documentation Vercel, pratique React existante | Fallback Pages Router (encore supporté) |
| 5 | Déclin de Flutter à 3-5 ans si KMM mûrit | Faible | Moyen | Flutter soutenu massivement Google | Architecture Clean / MVVM remplaçable |
| 6 | Performance Python insuffisante à l'échelle | Faible | Faible | Charge I/O-bound acceptable en V1, optimisations Django 5.x | Migration partielle vers FastAPI si besoin (peu probable V1) |

### 2.8.7 Plan d'action — POC et montée en compétence

**Phase 0 (semaines 1-2) — Consolidation et setup**
- Revue des patterns DDD/Hexa appliqués dans ZenLog + adaptation au contexte Lenny & Co
- Setup projet Django + DRF + PostgreSQL + Docker + CI GitHub Actions
- Codelab Flutter officiel + *Effective Dart*
- Setup Next.js 15 + App Router + shared types avec backend

**Phase 1 (semaines 3-5) — POC d'architecture DDD**
- POC Backend DDD pilote (BC Identity & Access)
- POC Mobile OCR Flutter (caméra → ML Kit → Lexend)
- POC Front Next.js 15 (page dashboard avec auth + appel API)

**Phase 2 (semaines 6-7) — Revue et itération**
- Auto-revue architecturale (comparaison avec `Architecture-Technique-Backend.md`)
- Éventuelle revue par pair informelle via communauté Python/Django française
- Ajustements de l'architecture en fonction des apprentissages POC

### 2.8.8 Plan d'optimisation éco-responsable

Python + Django ayant une empreinte mémoire naturellement plus légère que la JVM, le plan éco est pragmatique :

| Phase | Levier | Impact estimé |
|-------|--------|---------------|
| V1 base | Monolithe modulaire (un seul processus, communication in-process) | -60 à -80 % empreinte vs microservices |
| V1 base | Gunicorn async workers + async views Django 5.x | Concurrence améliorée sur I/O |
| V1 base | Tier Azure App Service B1 (~13 €/mois) | Coût minimal + empreinte réduite |
| V1 base | PostgreSQL RLS (une seule base, pas de redondance multi-DB) | Empreinte DB minimale |
| V1 base | OCR on-device Flutter ML Kit (pas de transfert cloud) | Zéro transfert réseau OCR |
| V1 base | Bundle Next.js audit (RSC maximisé, JS client minimal) | Réduction 30-50 % JS client livré |
| V1.5 optim | Cache HTTP + Django cache framework (ETag, Redis pour agrégations) | Réduction CPU + requêtes DB |
| V2 optim avancée | CDN edge Vercel / Azure Front Door | Réduction énergie servie depuis le cœur central |

---

---

# PARTIE 3 — MODALITÉS ET PLAN DE VEILLE

> **Sortie du cadre TP initial** — Cette partie s'inspire de la méthodologie de veille proposée par Ada Tech School mais **l'élargit délibérément** pour couvrir à la fois la **veille technique** (stack, sécurité, réglementaire) et la **veille concurrentielle continue** (évolutions Mila Learn, Poppins, Nessy, nouveaux entrants DYS) — deux dimensions que le TP traitait séparément. L'enjeu : un processus unique, soutenable en solo, qui alimente simultanément les décisions techniques et le positionnement produit.

## 3.1 Contexte et principes directeurs

### 3.1.1 Objectifs de la veille

La veille technologique n'est pas un exercice isolé : elle est le **moteur continu des décisions d'architecture et de positionnement produit** du projet Lenny & Co. Elle alimente les benchmarks (cf. Parties 1 et 2), les ADR, la feuille de route, et *in fine* le mémoire de certification RNCP 7.

Cinq objectifs hiérarchisés :

| # | Objectif | Bénéfice attendu |
|---|----------|------------------|
| 1 | **Sécuriser les choix de stack existants** (Python/Django, Next.js 15, Flutter, PostgreSQL, Mistral, ML Kit) | Détecter précocement tout signal qui invaliderait un choix actuel |
| 2 | **Préparer les arbitrages futurs** (V2 Mobile, IA, HDS) | Disposer d'une base argumentaire chiffrée pour chaque décision |
| 3 | **Maintenir la conformité réglementaire** (RGPD mineurs, accessibilité WCAG, HDS, AI Act) | Éviter un retard de mise en conformité découvert en audit |
| 4 | **Suivre la concurrence** sur le marché de l'accompagnement DYS | Détecter un pivot stratégique d'un concurrent, l'arrivée d'un nouvel entrant, une évolution de positionnement |
| 5 | **Alimenter le mémoire RNCP** par des synthèses bien sourcées | Transformer la veille passive en contenu défendable en soutenance |

### 3.1.2 Principes directeurs

Quatre principes guident tous les choix de ce plan :

1. **Sélectivité plutôt qu'exhaustivité** — mieux vaut 10 sources suivies rigoureusement que 50 sources laissées en friche
2. **Open source quand c'est pragmatique** — priorité aux outils OSS lorsqu'ils sont disponibles sans coût d'apprentissage prohibitif ; pragmatisme préservé sur ce qui fonctionne déjà (Notion)
3. **Capitaliser versionné** — la capitalisation technique vit dans le repo Git (`/docs/veille`), versionnée et rebasable dans le mémoire final
4. **Pas de sur-ingénierie** — démarrer simple, automatiser seulement quand la charge réelle le justifie

### 3.1.3 Contraintes spécifiques solo

Plusieurs facteurs rendent ce plan de veille particulier et ont orienté les choix :

- **Tout est assumé par la même personne** — capter, filtrer, qualifier, capitaliser, diffuser, décider
- **Certaines étapes doivent être automatisées** pour ne pas consommer tout le temps disponible
- **La « diffusion » classique n'a pas de sens** (diffuser à qui ?) — elle est retournée en *capitalisation pour futur moi et pour le mémoire*
- **La double lecture équipe théorique / solo** (demande RNCP) est conservée : le plan décrit le processus réel solo + la projection en équipe fictive

## 3.2 Plan de veille — périmètre et sources

### 3.2.1 Les 7 axes de veille

Le périmètre couvre sept axes qui couvrent ensemble la totalité des dimensions du projet :

| Axe | Thèmes surveillés | Pertinence projet |
|-----|-------------------|-------------------|
| **A1 — Stack technique back** | Django 5.x+ releases, DRF, Python 3.12+, Cosmic Python / DDD en Python, Testcontainers, patterns hexagonaux, ruff/mypy, PostgreSQL 16+ (RLS, async) | Cœur du backend V1 |
| **A2 — Stack technique front & mobile** | Next.js 15+ (App Router, RSC, Server Actions, Turbopack), React 19, TypeScript 5.x, Flutter 3.x+ (Impeller, Compose Multiplatform), Dart, Google ML Kit | Cœur du web V1 + mobile V2 |
| **A3 — RGPD & conformité** | CNIL (recommandations mineurs, santé), EDPB, ANSSI, Code santé publique, HDS, jurisprudence Articles 8 et 22 | Obligation réglementaire absolue sur données enfants |
| **A4 — Accessibilité & DYS** | WCAG 2.2 / 3.0, RGAA, recherches scientifiques polices adaptées (Lexend, OpenDyslexic), retours d'usage technologies d'assistance | Pilier « Design for All » du projet |
| **A5 — IA open source & NLP enfants** | Mistral (releases, benchmarks), modèles éducatifs, alternatives open source, patterns d'IA bienveillante, Article 22 RGPD | V2 obligatoire, pivot possible |
| **A6 — Concurrentielle DYS & éco-responsable** | Évolutions Mila Learn / Poppins / Nessy, nouveaux entrants, apps DYS concurrentes, RGESN DINUM, EcoIndex, GreenIT | Positionnement produit + critère RNCP C3.6 |
| **A7 — IA d'assistance au développement** | Évolutions Claude Code (releases, modèles, capacités), alternatives (Cursor, Codex, Aider), AI Act européen (UE 2024/1689), recommandations CNIL sur l'IA, jurisprudence copyright code généré | Encadrement de l'outil principal de productivité, conformité RGPD + AI Act, politique `IA-Assistance-Developpement.md` |

### 3.2.2 Sources retenues par axe

Chaque axe dispose de sources hiérarchisées entre **sources primaires** (suivies hebdomadairement ou à chaque release) et **sources secondaires** (consultées au besoin).

#### A1 — Stack technique back (Python / Django)

| Source | Type | Fréquence |
|--------|------|-----------|
| [Django Blog](https://www.djangoproject.com/weblog/) | RSS officiel | Hebdo |
| [Django REST Framework release notes](https://www.django-rest-framework.org/community/release-notes/) | GitHub Releases | Sur release |
| [Real Python](https://realpython.com/) | Newsletter / RSS | Hebdo |
| [Cosmic Python](https://www.cosmicpython.com/) (site du livre Architecture Patterns with Python) | Référence livre + blog | Au besoin |
| GitHub Watch sur `django/django`, `encode/django-rest-framework`, `psf/requests`, `pytest-dev/pytest`, `astral-sh/ruff` | Releases | Continue |
| [CNIL PIA / privacy tech](https://www.cnil.fr/fr/cnilsprint) | RSS | Mensuel |
| [PostgreSQL News](https://www.postgresql.org/news/) | RSS officiel | Hebdo |
| [PyCon France](https://www.pycon.fr/) | Conférence | Annuelle |

#### A2 — Stack technique front & mobile

| Source | Type | Fréquence |
|--------|------|-----------|
| [Next.js Blog](https://nextjs.org/blog) | RSS officiel Vercel | Hebdo |
| [React Blog](https://react.dev/blog) | RSS officiel | Hebdo |
| [This Week in React](https://thisweekinreact.com/) | Newsletter | Hebdo |
| [Flutter Medium](https://medium.com/flutter) | RSS officiel Google | Hebdo |
| [Flutter Weekly](https://flutterweekly.net/) | Newsletter | Hebdo |
| [Dart language news](https://dart.dev/news) | RSS officiel | Hebdo |
| GitHub Watch sur `vercel/next.js`, `flutter/flutter`, `googlesamples/mlkit`, `dart-lang/dart` | Releases | Continue |
| [Paris Web](https://www.paris-web.fr/) | Conférence | Annuelle |

#### A3 — RGPD & conformité

| Source | Type | Fréquence |
|--------|------|-----------|
| [CNIL — Actualités](https://www.cnil.fr/fr/ac) | RSS officiel | Hebdo |
| [CNIL — Recommandations mineurs](https://www.cnil.fr/fr/protection-des-donnees-des-mineurs) | Consultation dédiée | Trimestriel |
| [ANSSI — Publications](https://www.ssi.gouv.fr/actualite/) | RSS officiel | Hebdo |
| [EDPB — Guidelines](https://edpb.europa.eu/edpb_en) | Newsletter | Mensuel |
| Observatoire GS1 / HDS | Consultation dédiée | Trimestriel |
| [Dalloz actualité RGPD](https://www.dalloz-actualite.fr/) | Consultation (paywall partiel) | Mensuel |

#### A4 — Accessibilité & DYS

| Source | Type | Fréquence |
|--------|------|-----------|
| [W3C WAI Blog](https://www.w3.org/WAI/news/) | RSS officiel | Mensuel |
| [a11y Weekly](https://a11yweekly.com/) | Newsletter | Hebdo |
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

#### A7 — IA d'assistance au développement

| Source | Type | Fréquence |
|--------|------|-----------|
| [Anthropic News](https://www.anthropic.com/news) | RSS officiel | Hebdo |
| [Claude Code Docs & Changelog](https://docs.claude.com/en/docs/claude-code/overview) | Consultation dédiée | Sur release |
| [Anthropic Usage Policies](https://www.anthropic.com/legal/aup) | Consultation dédiée | Trimestriel + à chaque mise à jour majeure |
| [AI Act — Portail de suivi UE](https://artificialintelligenceact.eu/) | Consultation dédiée | Trimestriel |
| [CNIL — Fiches pratiques IA](https://www.cnil.fr/fr/intelligence-artificielle) | Consultation dédiée | Trimestriel + alertes ponctuelles |
| [OWASP AI Security and Privacy Guide](https://owasp.org/www-project-ai-security-and-privacy-guide/) | Consultation | Semestriel |
| Jurisprudence copyright code généré (Dalloz / Legalis) | Consultation dédiée | Trimestriel |

### 3.2.3 Organisation et fréquence

Le rythme de veille est calibré sur la capacité réelle (10h/semaine) pour ne **pas dépasser 10 % du temps disponible** (~1h/semaine + 2h/mois de synthèse).

| Rituel | Fréquence | Durée | Moment |
|--------|-----------|-------|--------|
| Capture passive (Feedly RSS + GitHub Watch) | Continue | — | Automatique |
| Revue hebdomadaire (filtrage + qualification) | Hebdomadaire | 30 min | Lundi matin |
| Fiche de veille (item qualifié comme important) | À chaque détection | 15-20 min | Au fil de l'eau |
| Synthèse mensuelle (200 mots agrégeant les apprentissages du mois) | Mensuelle | 1h | Fin de mois |
| Revisite benchmark (concurrentiel + technique) | Semestrielle | 1 journée | Avril + octobre |
| Revue ADR (ADR impactés par la veille) | Au besoin | Variable | Déclenché par un item qualifié critique |

### 3.2.4 Critères d'alerte

Chaque item capté est qualifié sur **3 dimensions** (notation 1 à 3) :

| Dimension | Signification | Seuil d'action |
|-----------|---------------|---------------|
| **Pertinence projet** | L'item concerne-t-il directement Lenny & Co ? | ≥ 2 → fiche de veille |
| **Urgence** | L'item impose-t-il une action immédiate ? | ≥ 2 → escalade |
| **Effort d'adoption** | Coût d'intégration si décision d'action | Informatif |

**Critères d'alerte immédiate** (déclenchent une escalade le jour même) : faille sécurité critique (CVE ≥ 7) sur une dépendance de la stack ; changement réglementaire majeur (nouvelle recommandation CNIL, évolution HDS) ; breaking change dans Django/Next.js/Flutter ; annonce de fin de support ; lancement produit concurrent majeur (Mila/Poppins/Nessy) ou arrivée d'un nouvel entrant sérieux.

### 3.2.5 Rôles (cadre théorique équipe + réalité solo)

Rôles ci-dessous en cadre théorique. Dans la réalité, tous les rôles sont assumés par la candidate solo — la répartition reste un livrable pédagogique sur l'organisation d'équipe.

| Rôle | Responsabilités en matière de veille | Sources primaires |
|------|-------------------------------------|-------------------|
| **Lead Dev / Architecte** | Veille stack back + front + architecture + IA + outils d'assistance IA | A1, A2, A5, A7 |
| **DevOps / SRE** | Veille infrastructure, sécurité, Azure, HDS | A1 (sécurité), A3 (HDS) |
| **DPO / Chef de projet** | Veille RGPD, conformité, CNIL, AIPD, politique d'usage IA | A3, A7 (volet réglementaire) |
| **UX/UI Designer** | Veille accessibilité, recherches DYS, design system | A4 |
| **Product Owner** | Veille concurrentielle, marché, associations DYS | A6 |
| **QA** | Veille outils de tests, a11y tooling, sécurité applicative | A1 (pytest, ruff), A4 (axe-core) |

En réalité solo : le rythme de capture est mutualisé (30 min/semaine pour l'ensemble des axes), et les fiches de veille sont rédigées au fil de l'eau selon la pertinence. La projection en rôles sert à structurer la distribution des sources — pour que tous les axes soient couverts.

### 3.2.6 Livrables de veille

| Livrable | Fréquence | Emplacement | Usage |
|----------|-----------|-------------|-------|
| Fiche de veille qualifiée | À la demande | `/docs/veille/fiches/AAAA-MM-DD-titre.md` | Tracer un item digne d'attention |
| Synthèse mensuelle | Mensuelle | `/docs/veille/syntheses/synthese-AAAA-MM.md` | Agrégation, matière mémoire |
| Synthèse trimestrielle | Trimestrielle | `/docs/veille/syntheses/synthese-T-AAAA.md` | Vue d'ensemble chef de projet / PO |
| Alertes critiques | Au déclenchement | Email + Notion | Réaction immédiate |
| Revisite benchmarks | Semestrielle | Mise à jour des documents de veille | Correction scores, ajustement recommandations |
| ADR alimenté par la veille | Au besoin | `/docs/adr/ADR-XXX-titre.md` | Cristalliser une décision issue de la veille |

## 3.3 Processus de veille — cycle en 6 étapes

Le cycle de veille suit la méthodologie du TP Ada Tech School (Capter → Filtrer → Qualifier → Capitaliser → Diffuser → Décider), **adaptée au contexte solo et élargie à la veille concurrentielle**. Chaque étape associe un outil concret, privilégiant l'open source lorsque cohérent avec les contraintes projet.

### 3.3.1 Capter

**Outil principal** : **Feedly** (freemium, free tier suffisant pour 100 sources) — agrégateur RSS qui centralise les flux listés en §3.2.2.

**Outils secondaires** :
- **GitHub Watch** (natif, gratuit) — activé sur une vingtaine de repos critiques (Django, DRF, Next.js, React, Flutter, ML Kit, pytest, ruff, axe-core…)
- **Alertes Google Scholar** — surveillance d'études scientifiques sur les polices adaptées DYS et l'IA éducative
- **Newsletters ciblées** (This Week in React, Flutter Weekly, a11y Weekly, Django News, Real Python, AI Weekly) agrégées dans un label Gmail dédié *« veille-lenny »*
- **Consultation manuelle** — App Store/Play Store concurrents (bi-mensuelle), sites CNIL/ANSSI/EDPB, pages produit Mila/Poppins/Nessy

**Volume cible** : 15-30 items captés par semaine après dédoublonnage. Au-delà, filtres trop larges.

**Justification Feedly vs FreshRSS** : Feedly a été préféré par pragmatisme — il ne demande aucune infrastructure à maintenir. Un pivot vers FreshRSS (OSS auto-hébergé) est envisageable en V2 si cohérence OSS renforcée souhaitée.

### 3.3.2 Filtrer

**Outil principal** : **règles Feedly** (mots-clés *must-have*, exclusions, priorisation par source).

**Méthodologie** :
- **Règles en amont** : les sources sont choisies avec exigence pour minimiser le bruit à la source
- **Mots-clés positifs** configurés dans Feedly : *DDD*, *Django*, *Flutter*, *WCAG*, *DYS*, *RGPD mineurs*, *Mistral*, *ML Kit*, *Row-Level Security*, *Claude Code*, *AI Act*
- **Mots-clés exclus** : *cryptocurrency*, *NFT*, *Web3* (hors périmètre)
- **Filtrage manuel hebdomadaire** (30 min lundi matin) : scan visuel du feed, tri en 3 seaux : *Poubelle* / *À lire* / *À qualifier*

**Principe** : éliminer 80 % du volume capté avant qualification. Un item qui passe le filtre mérite 15-20 min d'investissement.

### 3.3.3 Qualifier

**Outil principal** : **template Markdown** de fiche de veille dans `/docs/veille/fiches/AAAA-MM-DD-titre-court.md`, rédigé dans VS Code, versionné dans le repo Git.

**Template de fiche de veille** :

```markdown
---
date: YYYY-MM-DD
titre: Titre court de l'item
source: https://... (URL)
axe: A1 | A2 | A3 | A4 | A5 | A6 | A7
pertinence: 1-3
urgence: 1-3
effort: 1-3
---

## Résumé (3-5 lignes)
[Quoi ? Pourquoi ça compte pour Lenny & Co ?]

## Impact projet
[Quel BC / couche / jalon concerné ? Quelle décision en découlerait ?]

## Décision proposée
- [ ] Rien (pour info, archive)
- [ ] À creuser — POC/spike à planifier
- [ ] À intégrer — tâche au backlog
- [ ] Alerte — action immédiate, créer un ADR

## Liens avec le projet
- Document impacté : [ex. Dossier-Veille-Consolide.md]
- ADR potentiel : [ex. ADR-013-migration-django-5.x]
- Bounded context : [Identity & Access | Learning & Progress]
```

### 3.3.4 Capitaliser — mutualisation POC et apprentissage Flutter enrichie

Étape centrale du cycle dans un contexte solo : elle conditionne la transformation de la veille passive en capital exploitable pour le développement, le mémoire et la projection en équipe.

**Deux outils complémentaires** :

**Outil 1 — Notion (pragmatique, déjà en place)** — Index général de veille (base Notion avec filtres par axe/urgence/statut), notes courtes, backlog *« à creuser »*.

**Outil 2 — Repo GitHub `/docs` (OSS, versionné, bilingue facile)** — Fiches de veille qualifiées, synthèses, capitalisation POC et apprentissage Flutter, ADR liés.

**Arborescence cible** :

```
docs/
├── veille/
│   ├── README.md
│   ├── fiches/
│   │   ├── 2026-04-18-django-5.1-async-views.md
│   │   └── ...
│   ├── syntheses/
│   │   ├── synthese-2026-04.md
│   │   ├── synthese-T2-2026.md
│   │   └── ...
│   └── alertes/
├── poc/
│   ├── POC-01-backend-ddd-lessons.md
│   ├── POC-02-flutter-ocr-lessons.md
│   └── POC-03-nextjs-lessons.md
├── flutter-learning/
│   ├── README.md
│   ├── snippets/
│   ├── patterns/
│   ├── gotchas.md
│   └── resources.md
└── adr/
    ├── ADR-001-ddd-2-bounded-contexts.md
    └── ...
```

**Capitalisation POC (phase J0.5)** — chaque POC produit une fiche de capitalisation obligatoire en fin d'exercice, indépendamment du résultat, structure figée pour comparabilité. Template `POC-XX-<brique>-lessons.md` avec sections : *Objectif, Stack, Ce qui a été produit, Appris positif, Appris négatif, Métriques mesurées, Décisions issues du POC, Ce que je ferais différemment, Patterns réutilisables*.

**Capitalisation apprentissage Flutter/Dart (phase J6.5)** — routine quotidienne 10 min : mise à jour de `gotchas.md`, sauvegarde des snippets dans `/snippets/`, mise à jour des `resources.md`. Livrables mensuels : `patterns/mvvm-with-riverpod.md`, `patterns/clean-architecture-mobile.md`, `accessibility-flutter.md`, `ocr-mlkit-integration.md`.

### 3.3.5 Diffuser

**Contexte solo** — la « diffusion » classique n'a pas de sens direct. Elle est **retournée en diffusion vers soi-même et vers les destinataires finaux** (jury RNCP, mémoire).

**Outil principal** : **synthèses mensuelles dans le repo Git** (`/docs/veille/syntheses/synthese-AAAA-MM.md`), publiées en fin de mois.

**Template de synthèse mensuelle** (200-300 mots max) :

```markdown
# Synthèse de veille — Mois AAAA

## Les 3 à 5 apprentissages clés
1. [Item 1 — pourquoi ça compte]
2. [Item 2 — pourquoi ça compte]

## Décisions prises ce mois
- [Décision 1 — ADR-XXX]
- [Décision 2 — ajustement backlog]

## Points d'attention pour le mois suivant
- [Signal faible à surveiller]

## Fiches de veille détaillées produites
- [Liens vers /docs/veille/fiches/...]
```

**Contexte équipe fictive** : la même synthèse serait diffusée par email à l'équipe projet, discutée en revue mensuelle, et archivée sur Notion pour accès rapide.

**Canal exceptionnel — alerte critique** : en cas d'item *urgence 3*, envoi immédiat à l'équipe fictive + carte Trello *« À traiter cette semaine »*. En contexte solo : création d'une *« épic prioritaire »* sur Trello.

### 3.3.6 Décider

**Outil principal** : **ADR** (Architecture Decision Records) stockés dans `/docs/adr/`.

La veille n'a de valeur que si elle conduit à des décisions argumentées. Chaque item *« à intégrer »* ou *« alerte »* se traduit par soit un **nouvel ADR** (décision structurante), soit un **ajustement du backlog** (US ajoutée, repriorisation), soit une **révision du présent Dossier de Veille** (mise à jour des scores, ajustement des recommandations).

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

## Date et statut
AAAA-MM-DD — Proposed / Accepted / Deprecated / Superseded
```

**Bénéfice** : chaque ADR renvoie vers la **fiche de veille** qui l'a inspiré, créant une **chaîne de traçabilité** de la source d'information brute jusqu'à la décision d'architecture. C'est exactement ce que le jury RNCP cherche : de la veille instruite, pas décorative.

## 3.4 Rituels d'animation du cycle

### 3.4.1 Rituels en contexte solo (réalité)

| Rituel | Fréquence | Durée | Action concrète |
|--------|-----------|-------|-----------------|
| Capture passive continue | Continue | 0 min actif | Feedly + GitHub Watch tournent en fond |
| Lundi veille | Hebdomadaire | 30 min | Scan Feedly, tri en 3 seaux, création 0-2 fiches si item important |
| Fin de mois synthèse | Mensuelle | 1h | Rédaction `synthese-AAAA-MM.md`, archivage |
| Fin de trimestre retour | Trimestrielle | 2h | Synthèse trimestrielle + revue des ADR impactés |
| Semestriel benchmark refresh | Semestrielle | 1 jour | Mise à jour du présent Dossier de Veille |

**Total estimé** : ~8h/mois, soit ~10 % du temps projet.

### 3.4.2 Rituels en contexte équipe fictive (projection RNCP)

| Rituel | Fréquence | Durée | Participants | Finalité |
|--------|-----------|-------|--------------|----------|
| **Weekly veille share** | Lundi 10h | 20 min async sur Slack | Toute l'équipe | Chaque membre partage 2-3 items qualifiés |
| **Monthly veille review** | Fin de mois | 1h synchro | Lead Dev, PO, DPO, UX | Revue collective, votes sur décisions, mise à jour ADR |
| **Quarterly benchmark refresh** | Fin de trimestre | 1 demi-journée | Toute l'équipe | Revisite des benchmarks concurrentiel + technique |
| **Alerte critique ad hoc** | Au déclenchement | 15-30 min | Lead Dev + décideur concerné | Décision rapide sur mesure à prendre |

Ces rituels sont **compatibles avec la méthodologie Kanban** retenue dans le plan de développement et **minimaux en overhead** (~2h/mois/personne en équipe complète).

### 3.4.3 Articulation avec les autres rituels projet

La veille n'est pas un silo. Elle s'articule avec les rituels de pilotage projet :

- La **revue hebdomadaire du board Kanban** intègre 5 min sur les éventuels items de veille à ajouter au backlog
- La **démonstration mensuelle** inclut 5 min de *« ce qu'on a appris ce mois de la veille »*
- La **rétrospective mensuelle** peut déclencher des ajustements du processus de veille lui-même (sources à ajouter/retirer, critères à affiner)

## 3.5 Automatisation envisagée

Conformément au principe *« pas de sur-ingénierie »*, l'automatisation est **progressive** et activée seulement si la charge manuelle le justifie.

### 3.5.1 Automatisation V1 (dès le démarrage — gratuite, minimale)

| Automatisation | Outil | Bénéfice |
|----------------|-------|----------|
| Agrégation RSS | Feedly | Déjà configuré (§3.3.1) |
| Notifications releases | GitHub Watch | Déjà configuré (§3.3.1) |
| **Template hebdomadaire** | GitHub Action (cron Lundi 8h) qui crée un fichier `docs/veille/hebdo/AAAA-WW.md` vide à remplir | Évite l'oubli du rituel |
| **Template mensuel** | GitHub Action (cron dernier jour du mois) qui crée `docs/veille/syntheses/synthese-AAAA-MM.md` pré-rempli | Cadre la synthèse |

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

### 3.5.2 Automatisation V2 (envisageable, non critique)

| Automatisation | Outil | Pré-requis |
|----------------|-------|------------|
| Routage RSS → markdown | n8n (OSS, auto-hébergeable) ou script Python + cron | Serveur disponible + temps pour maîtriser n8n |
| Synchronisation Notion ↔ Markdown | API Notion + script Python | Clé API Notion + script à maintenir |
| Alertes automatiques sur mots-clés critiques | Feedly Pro + webhook → Slack | Plan Feedly Pro (~6 €/mois) |
| Dashboard veille | BookStack self-hosted ou Outline | Serveur disponible |

**Décision V1** : on reste sur l'automatisation minimale (3.5.1). Les pistes V2 sont documentées mais **non activées** tant que le besoin réel ne se manifeste pas.

## 3.6 Intégration avec les autres livrables du projet

### 3.6.1 Alimentation des benchmarks (Parties 1 et 2 du présent dossier)

La veille continue alimente les deux benchmarks du dossier :

- **Benchmark concurrentiel (Partie 1)** — révision semestrielle en avril et octobre, sur la base des items captés dans l'axe A6. Une nouvelle fonctionnalité Mila Learn ou un nouveau concurrent sérieux déclenche une fiche de veille immédiate et potentiellement une mise à jour du benchmark.
- **Benchmark technique (Partie 2)** — révision semestrielle + chaque fois qu'un changement majeur dans une brique (Django 6.0, Next.js 16, Flutter 4.0) nécessite de rescorer.

### 3.6.2 Alimentation des ADR

Chaque décision d'architecture structurante est tracée dans un ADR (`/docs/adr/`). La veille est la source privilégiée de nouveaux ADR, avec une chaîne de traçabilité :

```
Source externe (blog, release, CNIL…)
    ↓ capté par Feedly / GitHub Watch
Item brut
    ↓ filtré
Item retenu
    ↓ qualifié
Fiche de veille
    ↓ décidé
ADR-XXX
    ↓ matérialisé
Décision d'architecture / US au backlog / révision du présent dossier
```

### 3.6.3 Alimentation du mémoire RNCP

Les synthèses mensuelles et trimestrielles constituent le **matériau brut** de la section *« Veille technologique »* du mémoire final. Plutôt que de devoir tout réécrire en fin de projet (août 2027), la candidate capitalise au fil de l'eau :

- ~24 synthèses mensuelles (oct 2025 – sept 2027) = ~5 000 mots de matière première
- ~8 synthèses trimestrielles = ~2 000 mots de matière décantée
- Les révisions successives des benchmarks = preuves de révision méthodologique honnête

Cette capitalisation progressive évite l'effort en bloc de rédaction finale et **garantit la véracité** (dates, sources, contexte) des éléments cités en soutenance.

### 3.6.4 Mapping avec le référentiel EADL (RNCP 7)

| Compétence | Couverture par le présent dossier |
|-----------|-----------------------------------|
| **C1.2 — Concevoir un système de veille technologique** | Cœur du document (Parties 1, 2 et 3) |
| **C1.3 — Analyser le contexte du projet** | Partie 2 §2.1 (contexte situé), Partie 3 §3.1 (contraintes solo) |
| **C1.7 — Superviser le projet** | Partie 3 §3.6.2 (chaîne décisionnelle veille → ADR) |
| **C2.1 — Élaborer l'architecture** | Partie 2 §2.8 (recommandation stack), Partie 3 §3.6.2 |
| **C2.2 — Préparer l'intégrité du code** | Partie 2 §2.4 (ADR DDD/Hexa), Partie 3 axe A1 (outillage qualité) |
| **C3.6 — Documentation technique + numérique responsable** | Partie 2 §2.8.8 (plan éco-responsable), Partie 3 axe A6, capitalisation versionnée bilingue |
| **C4.5 — Planifier la formation** | Partie 2 §2.8.7 (plan POC + apprentissage Flutter), Partie 3 §3.3.4 (capitalisation apprentissage Flutter) |

---

## 3.7 Annexes

### 3.7.1 Checklist de démarrage du processus de veille

Actions à effectuer **une seule fois** en phase d'amorçage :

- [ ] Créer un compte Feedly + ajouter les flux listés en §3.2.2
- [ ] Créer les labels et règles de filtrage Feedly
- [ ] Activer GitHub Watch sur les 20 repos critiques
- [ ] S'abonner aux 6 newsletters (This Week in React, Flutter Weekly, Django News, a11y Weekly, AI Weekly, Real Python)
- [ ] Créer le dossier `/docs/veille/` avec la structure décrite en §3.3.4
- [ ] Créer le fichier `/docs/veille/README.md` (copie de la synthèse du processus)
- [ ] Créer les fichiers templates : `fiche-veille-template.md`, `synthese-mensuelle-template.md`, `adr-template.md`
- [ ] Créer le workflow GitHub Actions `create-weekly-veille-template.yml` (§3.5.1)
- [ ] Créer la base Notion *« Veille Lenny & Co »* avec les vues par axe
- [ ] Bloquer dans le calendrier : Lundi 30 min (veille hebdo), dernier jour du mois 1h (synthèse)

### 3.7.2 Sources vérifiées — synthèse transversale

#### Benchmarks marché / concurrence

**Mila Learn**
- [Fiche ANS — Mila Learn, catégorie application citoyenne](https://esante.gouv.fr/talents-esante/mila-learn)
- [Partenariat Allianz France × Mila](https://newsroom.allianz.fr/allianz-france-et-la-start-up-mila-sassocient-pour-proposer-aux-enfants-des-collaborateurs-allianz-france-atteints-de-troubles-specifiques-des-apprentissages-le-dispositif-medical-mila-learn/)
- [Maddyness — Mila jeu musical](https://www.maddyness.com/2022/02/12/mila-jeu-musical-aide-enfants-dys/)

**Poppins**
- [Site officiel](https://www.poppins.io/en)
- [Offres et tarifs](https://www.poppins.io/offres)
- [Médecine Connectée — Poppins Dyslexie](https://medecine-connectee.fr/poppins-dyslexie/)

**Nessy**
- [Site officiel UK](https://www.nessy.com/en-gb)
- [Nessy Review 2026 — Structural Learning](https://www.structural-learning.com/post/nessy)

#### Stack Overflow Developer Survey
- [2024](https://survey.stackoverflow.co/2024/) · [2025](https://survey.stackoverflow.co/2025/)

#### Marché emploi France (2025-2026)
- [Next.js Developer France — Indeed (200+ offres)](https://fr.indeed.com/q-next-js-emplois.html)
- [Java Spring Boot Backend — Indeed](https://fr.indeed.com/q-java-spring-boot-backend-developer-emplois.html)
- [Kotlin Backend Paris — Indeed (31 offres)](https://fr.indeed.com/q-kotlin-backend-l-paris-(75)-emplois.html)
- [Django Jobs Paris — DevJobsScanner (43 offres)](https://www.devjobsscanner.com/django-jobs-in-paris/)

#### Backend — Python / Django / DDD
- [Django 5.x Documentation](https://docs.djangoproject.com/en/5.0/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Python 3.12 What's New](https://docs.python.org/3/whatsnew/3.12.html)
- [Cosmic Python — Architecture Patterns with Python](https://www.cosmicpython.com/)

#### Mobile — Flutter / Dart / KMM
- [Flutter Docs](https://docs.flutter.dev/)
- [Flutter vs React Native vs KMP Performance Benchmark 2025](https://www.synergyboat.com/blog/flutter-vs-react-native-vs-native-performance-benchmark-2025)
- [Compose Multiplatform iOS Stable — JetBrains Blog](https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/)
- [Google ML Kit for Flutter](https://pub.dev/packages/google_ml_kit)
- [Effective Dart](https://dart.dev/effective-dart)

#### Front-end — Next.js / Remix / SvelteKit
- [Next.js 15 Blog](https://nextjs.org/blog/next-15)
- [React Router v7 — Remix Blog](https://remix.run/blog/react-router-v7)
- [SvelteKit 2025 — Madrigan Blog](https://blog.madrigan.com/en/blog/202512011446/)

#### Numérique responsable
- [Référentiel général d'écoconception des services numériques — DINUM](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [Web Sustainability Guidelines — W3C](https://w3c.github.io/sustyweb/)
- [GreenIT — Éco-conception IA](https://greenit.fr/)

#### IA d'assistance au développement
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Anthropic Usage Policies](https://www.anthropic.com/legal/aup)
- [AI Act — Règlement UE 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [CNIL — Fiches pratiques IA](https://www.cnil.fr/fr/intelligence-artificielle)

#### Ressources livresques
- *Architecture Patterns with Python* (Percival & Gregory, O'Reilly 2020) — référence DDD/Hexa en Python
- *Two Scoops of Django 3.x* (Greenfeld & Roy)
- *Implementing Domain-Driven Design* (Vaughn Vernon, Addison-Wesley)
- *Hexagonal Architecture Explained* (Alistair Cockburn, Wirfs-Brock 2024)
- *Sustainable Web Design* (Tom Greenwood, A Book Apart 2021)

### 3.7.3 Glossaire

| Terme | Définition |
|-------|-----------|
| **Fiche de veille** | Document markdown qualifiant un item capté comme pertinent (cf. template §3.3.3) |
| **Synthèse mensuelle** | Agrégation en 200-300 mots des 3-5 apprentissages du mois |
| **Item qualifié** | Item ayant passé la grille pertinence/urgence/effort ≥ 2/1/* |
| **Alerte critique** | Item classé *urgence 3* déclenchant une action immédiate |
| **ADR** | Architecture Decision Record — document structuré traçant une décision d'architecture et son raisonnement |
| **Axe de veille** | Un des 7 domaines surveillés (A1 à A7) |
| **Capitalisation** | Transformation d'une information captée en actif durable (fiche, pattern, snippet, ADR) |
| **UVP** | Unique Value Proposition — proposition de valeur unique du produit |
| **BC** | Bounded Context — contexte métier cohérent en DDD (ici : Identity & Access et Learning & Progress) |
| **ABAC** | Attribute-Based Access Control — modèle d'autorisation basé sur les attributs |
| **RLS** | Row-Level Security — sécurité au niveau des lignes dans PostgreSQL |

### 3.7.4 Placeholders à compléter avant soutenance

- [À COMPLÉTER] : prix exact de Mila Learn hors partenariat (information non publique à date)
- [À VÉRIFIER] : statut dispositif médical éventuel de Poppins (marquage CE classe I ?)
- [À VÉRIFIER] : localisation des serveurs Nessy et statut RGPD effectif pour utilisateurs européens
- [À COMPLÉTER] : tableau de veille passive des concurrents secondaires observés (Dybuster, Plume, Lalilo, Mot à Mot)
- [À INTÉGRER EN MÉMOIRE] : captures d'écran illustrant la dimension ludique de chaque acteur (personnages Mila, jeux Poppins, mascotte Nessy) pour étayer les scores lors de la soutenance
- [À MESURER] : empreinte mémoire réelle du POC Python+Django (sprint 3-5)
- [À COMPLÉTER] : résultats des trois POC (backend Java/Spring, mobile Flutter OCR, front Next.js dashboard)
- [À COMPLÉTER] : feedback de la revue architecturale par pair prévu en fin de sprint 1
- [À VÉRIFIER] : évolution du marché emploi Flutter et SvelteKit en France 2026-2027
- [À VEILLER] : sortie éventuelle d'une recommandation CNIL dédiée à l'usage de l'IA dans le développement logiciel

### 3.7.5 Rythme de mise à jour du présent dossier

Ce dossier est un **livrable vivant**. Une mise à jour **semestrielle** est recommandée (avril et octobre), avec re-notation complète en cas d'événement majeur : nouvelle levée de fonds d'un concurrent, sortie d'une feature structurante, évolution réglementaire (AI Act entrée en vigueur, recommandation CNIL), changement majeur dans une brique de stack (Django 6.0, Next.js 16, Flutter 4.0).

---

*Document rédigé dans le cadre du Dossier de Projet d'Évaluation RNCP 7 — « Expert en Architecture et Développement Logiciel ».*
*Version consolidée — Avril 2026. Regroupe en un seul document cohérent la veille concurrentielle, le benchmark technique et le plan de veille, avec une architecture narrative continue et sans redondance entre parties.*
*Ce dossier alimente les sections « Vision stratégique », « Positionnement produit », « Choix techniques » et « Pilotage projet » du mémoire de certification.*
