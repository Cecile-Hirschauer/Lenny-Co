# Lenny & Co — Définition des Domaines Métiers

## Introduction

Ce document présente le découpage en domaines métiers (Bounded Contexts) de la plateforme Lenny & Co, selon les principes du **Domain-Driven Design (DDD)** et de l'**architecture hexagonale**. Ce découpage permet une séparation claire des responsabilités, une évolutivité maîtrisée et une maintenance facilitée.

---

## Vue d'ensemble des Domaines

L'écosystème Lenny & Co se structure autour de **6 domaines métiers principaux** :

| # | Domaine | Responsabilité principale | Utilisateurs concernés |
|---|---------|---------------------------|------------------------|
| 1 | **Identité & Accès** | Authentification, autorisation, gestion des comptes | Tous |
| 2 | **Profil Famille** | Gestion des profils parents et enfants, relations familiales | Parents, Enfants |
| 3 | **Apprentissage** | Exercices, missions, progression pédagogique | Enfants |
| 4 | **Gamification** | Points XP, badges, récompenses, avatars | Enfants |
| 5 | **Supervision Parentale** | Dashboard, alertes, statistiques, conseils | Parents |
| 6 | **Accessibilité & Adaptation** | OCR/Scan, adaptation de texte, synthèse vocale, IA | Enfants |

---

## Domaine 1 : Identité & Accès (Identity & Access)

### Responsabilité
Gère l'ensemble du cycle de vie des comptes utilisateurs : inscription, authentification, autorisation, et gestion des sessions.

### Entités principales
- **User** : Utilisateur générique (parent, enfant, admin)
- **Credentials** : Informations d'authentification
- **Session** : Session active avec token et expiration
- **Role** : Rôle utilisateur (parent, child, admin, therapist)

### Cas d'usage
- Inscription d'un compte famille
- Connexion / Déconnexion
- Réinitialisation de mot de passe
- Gestion des permissions par rôle

### Événements émis
- `UserRegistered`
- `UserLoggedIn`
- `UserLoggedOut`
- `PasswordReset`

---

## Domaine 2 : Profil Famille (Family Profile)

### Responsabilité
Gère les informations de profil des parents et enfants, ainsi que les relations familiales (parent-enfant).

### Entités principales
- **ParentProfile** : Profil du parent avec préférences
- **ChildProfile** : Profil de l'enfant avec âge, niveau, avatar
- **FamilyUnit** : Unité familiale regroupant parents et enfants
- **Preferences** : Préférences d'affichage et de notification

### Cas d'usage
- Création d'un profil enfant
- Modification des informations de profil
- Association parent-enfant
- Gestion des préférences de notification

### Événements émis
- `ChildProfileCreated`
- `ProfileUpdated`
- `ChildLinkedToParent`

---

## Domaine 3 : Apprentissage (Learning)

### Responsabilité
Cœur pédagogique de l'application. Gère les exercices, missions, contenus éducatifs et la progression de l'enfant.

### Entités principales
- **Mission** : Ensemble d'exercices thématiques
- **Exercise** : Exercice individuel (lecture, dictée, etc.)
- **Content** : Contenu pédagogique (texte, image, audio)
- **Progress** : Progression de l'enfant sur une mission
- **ExerciseResult** : Résultat d'un exercice avec score et erreurs

### Agrégats
- **LearningSession** : Session d'apprentissage regroupant plusieurs exercices

### Cas d'usage
- Démarrer une mission
- Compléter un exercice
- Enregistrer un résultat
- Calculer la progression

### Événements émis
- `MissionStarted`
- `ExerciseCompleted`
- `ProgressUpdated`
- `ErrorDetected` (ex: confusion b/d)

---

## Domaine 4 : Gamification

### Responsabilité
Gère le système de récompenses, la motivation et l'engagement de l'enfant via des mécaniques de jeu.

### Entités principales
- **ExperiencePoints (XP)** : Points d'expérience accumulés
- **Badge** : Récompense débloquée (Explorateur, Champion, etc.)
- **Level** : Niveau de l'enfant
- **Avatar** : Personnalisation du personnage (Lenny le lion)
- **Streak** : Série de jours consécutifs d'utilisation

### Cas d'usage
- Attribuer des points XP après un exercice
- Débloquer un badge
- Monter de niveau
- Personnaliser l'avatar

### Événements émis
- `XPAwarded`
- `BadgeUnlocked`
- `LevelUp`
- `StreakUpdated`

---

## Domaine 5 : Supervision Parentale (Parental Supervision)

### Responsabilité
Fournit aux parents une vue synthétique des progrès, alertes intelligentes et conseils actionnables.

### Entités principales
- **DashboardData** : Données agrégées pour le tableau de bord
- **Alert** : Alerte contextuelle (danger, info, success)
- **Statistic** : Statistique calculée (taux de réussite, temps de pratique)
- **Advice** : Conseil actionnable pour le parent
- **ActivityLog** : Journal des activités de l'enfant

### Cas d'usage
- Afficher le dashboard avec KPIs
- Générer une alerte sur détection d'erreurs récurrentes
- Proposer un conseil contextuel
- Consulter l'historique d'activité

### Événements consommés
- `ExerciseCompleted` → Mise à jour des statistiques
- `ErrorDetected` → Génération d'alerte
- `BadgeUnlocked` → Notification au parent

### Événements émis
- `AlertGenerated`
- `AdviceGenerated`

---

## Domaine 6 : Accessibilité & Adaptation (Accessibility & Adaptation)

### Responsabilité
Gère les fonctionnalités d'accessibilité spécifiques aux troubles DYS : OCR, adaptation de texte, synthèse vocale, et intégration IA.

### Entités principales
- **ScanRequest** : Demande de scan OCR d'un document
- **AdaptedContent** : Contenu adapté (police Lexend, syllabes colorées)
- **TextToSpeech** : Configuration de synthèse vocale
- **AIAdaptation** : Paramètres d'adaptation IA
- **AccessibilitySettings** : Préférences d'accessibilité de l'enfant

### Cas d'usage
- Scanner un document (OCR)
- Adapter un texte (police, espacement, couleurs)
- Lire un texte à voix haute
- Personnaliser les paramètres d'accessibilité

### Événements émis
- `DocumentScanned`
- `ContentAdapted`
- `TextSpoken`

---

## Matrice des Interactions entre Domaines

| Domaine Source | Domaine Cible | Type d'interaction |
|----------------|---------------|-------------------|
| Identité & Accès | Profil Famille | Création de profil après inscription |
| Profil Famille | Apprentissage | Récupération du niveau de l'enfant |
| Apprentissage | Gamification | Attribution de XP après exercice |
| Apprentissage | Supervision | Envoi des résultats pour statistiques |
| Gamification | Supervision | Notification de badge débloqué |
| Accessibilité | Apprentissage | Fourniture de contenu adapté |

---

## Principes d'Architecture Hexagonale Appliqués

### Ports (Interfaces)
Chaque domaine expose des **ports** (interfaces) qui définissent les contrats d'interaction :
- **Ports primaires (driving)** : API exposées aux contrôleurs/UI
- **Ports secondaires (driven)** : Interfaces vers l'infrastructure (BDD, API externes)

### Adaptateurs
Les **adaptateurs** implémentent les ports :
- **Adaptateurs primaires** : Controllers REST, GraphQL resolvers, Handlers
- **Adaptateurs secondaires** : Repositories, API clients, Event publishers

### Isolation du Domaine
Le code métier (entités, services de domaine, value objects) reste **pur** et indépendant de :
- Framework (Next.js, React Native)
- Base de données (PostgreSQL, MongoDB)
- Services externes (OpenAI, AWS)

---

## Conclusion

Ce découpage en 6 domaines métiers permet à Lenny & Co de :
1. **Évoluer indépendamment** : Chaque domaine peut être développé et déployé séparément
2. **Maintenir la cohérence** : Les frontières claires évitent le couplage excessif
3. **Faciliter les tests** : L'isolation permet des tests unitaires et d'intégration ciblés
4. **Préparer la scalabilité** : Possibilité de migrer vers des microservices si nécessaire
