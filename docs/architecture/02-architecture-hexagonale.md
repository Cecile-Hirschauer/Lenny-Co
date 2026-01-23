# Lenny & Co — Architecture Hexagonale par Module

## Introduction

Ce document détaille l'architecture hexagonale (Ports & Adapters) de chaque domaine métier de Lenny & Co. L'architecture hexagonale permet d'isoler la logique métier des préoccupations techniques (framework, base de données, API externes).

---

## Principes Fondamentaux

### Structure d'un Module Hexagonal

```
domain-name/
├── domain/                    # 🎯 Cœur métier (pur, sans dépendances)
│   ├── entities/              # Entités et agrégats
│   ├── value-objects/         # Objets valeur immuables
│   ├── services/              # Services de domaine
│   ├── events/                # Événements de domaine
│   └── ports/                 # Interfaces (contrats)
│       ├── primary/           # Ports entrants (use cases)
│       └── secondary/         # Ports sortants (repositories, gateways)
├── application/               # 🔄 Orchestration (use cases)
│   ├── commands/              # Commandes (écriture)
│   ├── queries/               # Requêtes (lecture)
│   └── handlers/              # Gestionnaires de commandes/requêtes
└── infrastructure/            # 🔌 Adaptateurs techniques
    ├── adapters/
    │   ├── primary/           # Controllers, Resolvers
    │   └── secondary/         # Repositories, API clients
    ├── persistence/           # Implémentations BDD
    └── external/              # Intégrations externes
```

---

## Module 1 : Identité & Accès (Identity)

### Structure du Module

```
modules/identity/
├── domain/
│   ├── entities/
│   │   ├── User.ts
│   │   ├── Credentials.ts
│   │   └── Session.ts
│   ├── value-objects/
│   │   ├── Email.ts
│   │   ├── Password.ts
│   │   ├── UserId.ts
│   │   └── Role.ts
│   ├── services/
│   │   └── PasswordHashingService.ts
│   ├── events/
│   │   ├── UserRegistered.ts
│   │   ├── UserLoggedIn.ts
│   │   └── UserLoggedOut.ts
│   └── ports/
│       ├── primary/
│       │   ├── IAuthenticationUseCase.ts
│       │   └── IRegistrationUseCase.ts
│       └── secondary/
│           ├── IUserRepository.ts
│           ├── ISessionRepository.ts
│           └── IPasswordHasher.ts
├── application/
│   ├── commands/
│   │   ├── RegisterUserCommand.ts
│   │   ├── LoginCommand.ts
│   │   └── LogoutCommand.ts
│   ├── queries/
│   │   ├── GetCurrentUserQuery.ts
│   │   └── ValidateSessionQuery.ts
│   └── handlers/
│       ├── RegisterUserHandler.ts
│       ├── LoginHandler.ts
│       └── LogoutHandler.ts
└── infrastructure/
    ├── adapters/
    │   ├── primary/
    │   │   ├── AuthController.ts
    │   │   └── AuthApiRoutes.ts
    │   └── secondary/
    │       ├── SupabaseUserRepository.ts
    │       ├── SupabaseSessionRepository.ts
    │       └── BcryptPasswordHasher.ts
    └── persistence/
        └── UserMapper.ts
```

### Ports Primaires (Use Cases)

```typescript
// IAuthenticationUseCase.ts
interface IAuthenticationUseCase {
  login(email: Email, password: Password): Promise<Session>;
  logout(sessionId: SessionId): Promise<void>;
  validateSession(token: string): Promise<User | null>;
}

// IRegistrationUseCase.ts
interface IRegistrationUseCase {
  register(data: RegisterData): Promise<User>;
  verifyEmail(token: string): Promise<void>;
}
```

### Ports Secondaires (Infrastructure)

```typescript
// IUserRepository.ts
interface IUserRepository {
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  save(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}

// IPasswordHasher.ts
interface IPasswordHasher {
  hash(password: Password): Promise<string>;
  verify(password: Password, hash: string): Promise<boolean>;
}
```

---

## Module 2 : Profil Famille (Family)

### Structure du Module

```
modules/family/
├── domain/
│   ├── entities/
│   │   ├── ParentProfile.ts
│   │   ├── ChildProfile.ts
│   │   └── FamilyUnit.ts
│   ├── value-objects/
│   │   ├── ProfileId.ts
│   │   ├── ChildAge.ts
│   │   ├── AvatarUrl.ts
│   │   └── NotificationPreferences.ts
│   ├── services/
│   │   └── FamilyLinkingService.ts
│   ├── events/
│   │   ├── ChildProfileCreated.ts
│   │   ├── ProfileUpdated.ts
│   │   └── ChildLinkedToParent.ts
│   └── ports/
│       ├── primary/
│       │   ├── IChildProfileUseCase.ts
│       │   └── IFamilyManagementUseCase.ts
│       └── secondary/
│           ├── IParentProfileRepository.ts
│           ├── IChildProfileRepository.ts
│           └── IFamilyUnitRepository.ts
├── application/
│   ├── commands/
│   │   ├── CreateChildProfileCommand.ts
│   │   ├── UpdateProfileCommand.ts
│   │   └── LinkChildToParentCommand.ts
│   ├── queries/
│   │   ├── GetChildrenByParentQuery.ts
│   │   └── GetFamilyUnitQuery.ts
│   └── handlers/
│       ├── CreateChildProfileHandler.ts
│       └── UpdateProfileHandler.ts
└── infrastructure/
    ├── adapters/
    │   ├── primary/
    │   │   └── FamilyController.ts
    │   └── secondary/
    │       ├── SupabaseParentRepository.ts
    │       └── SupabaseChildRepository.ts
    └── persistence/
        ├── ParentProfileMapper.ts
        └── ChildProfileMapper.ts
```

### Entité ChildProfile

```typescript
// ChildProfile.ts
class ChildProfile {
  private constructor(
    private readonly id: ProfileId,
    private name: string,
    private age: ChildAge,
    private level: number,
    private avatarUrl: AvatarUrl,
    private isOnline: boolean,
    private readonly parentId: UserId
  ) {}

  static create(props: CreateChildProfileProps): ChildProfile {
    // Validation et création
  }

  updateLevel(newLevel: number): void {
    if (newLevel < this.level) {
      throw new DomainError('Le niveau ne peut pas diminuer');
    }
    this.level = newLevel;
  }

  setOnlineStatus(status: boolean): void {
    this.isOnline = status;
  }
}
```

---

## Module 3 : Apprentissage (Learning)

### Structure du Module

```
modules/learning/
├── domain/
│   ├── entities/
│   │   ├── Mission.ts
│   │   ├── Exercise.ts
│   │   ├── Content.ts
│   │   └── LearningSession.ts
│   ├── aggregates/
│   │   └── Progress.ts
│   ├── value-objects/
│   │   ├── MissionId.ts
│   │   ├── ExerciseId.ts
│   │   ├── Score.ts
│   │   ├── ErrorType.ts
│   │   └── DifficultyLevel.ts
│   ├── services/
│   │   ├── ProgressCalculationService.ts
│   │   └── ErrorDetectionService.ts
│   ├── events/
│   │   ├── MissionStarted.ts
│   │   ├── ExerciseCompleted.ts
│   │   ├── ProgressUpdated.ts
│   │   └── ErrorDetected.ts
│   └── ports/
│       ├── primary/
│       │   ├── IMissionUseCase.ts
│       │   ├── IExerciseUseCase.ts
│       │   └── IProgressUseCase.ts
│       └── secondary/
│           ├── IMissionRepository.ts
│           ├── IExerciseRepository.ts
│           ├── IProgressRepository.ts
│           └── IContentProvider.ts
├── application/
│   ├── commands/
│   │   ├── StartMissionCommand.ts
│   │   ├── SubmitExerciseResultCommand.ts
│   │   └── UpdateProgressCommand.ts
│   ├── queries/
│   │   ├── GetAvailableMissionsQuery.ts
│   │   ├── GetMissionProgressQuery.ts
│   │   └── GetExercisesByMissionQuery.ts
│   └── handlers/
│       ├── StartMissionHandler.ts
│       ├── SubmitExerciseResultHandler.ts
│       └── ErrorDetectionHandler.ts
└── infrastructure/
    ├── adapters/
    │   ├── primary/
    │   │   ├── LearningController.ts
    │   │   └── MissionApiRoutes.ts
    │   └── secondary/
    │       ├── SupabaseMissionRepository.ts
    │       ├── SupabaseProgressRepository.ts
    │       └── ContentCDNProvider.ts
    └── persistence/
        ├── MissionMapper.ts
        └── ExerciseMapper.ts
```

### Agrégat Progress

```typescript
// Progress.ts (Agrégat racine)
class Progress {
  private exercises: ExerciseResult[] = [];
  
  constructor(
    private readonly id: ProgressId,
    private readonly childId: ProfileId,
    private readonly missionId: MissionId,
    private completionRate: number,
    private totalScore: number,
    private timeSpent: Duration
  ) {}

  addExerciseResult(result: ExerciseResult): void {
    this.exercises.push(result);
    this.recalculateMetrics();
    
    // Détection d'erreurs récurrentes
    const errors = this.detectRecurrentErrors();
    if (errors.length > 0) {
      DomainEvents.raise(new ErrorDetected(this.childId, errors));
    }
  }

  private recalculateMetrics(): void {
    const completed = this.exercises.filter(e => e.isCompleted).length;
    this.completionRate = (completed / this.exercises.length) * 100;
    this.totalScore = this.exercises.reduce((sum, e) => sum + e.score, 0);
  }

  private detectRecurrentErrors(): ErrorType[] {
    // Logique de détection (ex: confusion b/d)
  }
}
```

---

## Module 4 : Gamification

### Structure du Module

```
modules/gamification/
├── domain/
│   ├── entities/
│   │   ├── PlayerProfile.ts
│   │   ├── Badge.ts
│   │   ├── Achievement.ts
│   │   └── Avatar.ts
│   ├── value-objects/
│   │   ├── ExperiencePoints.ts
│   │   ├── Level.ts
│   │   ├── BadgeId.ts
│   │   └── Streak.ts
│   ├── services/
│   │   ├── XPCalculationService.ts
│   │   ├── LevelProgressionService.ts
│   │   └── BadgeUnlockService.ts
│   ├── events/
│   │   ├── XPAwarded.ts
│   │   ├── BadgeUnlocked.ts
│   │   ├── LevelUp.ts
│   │   └── StreakUpdated.ts
│   └── ports/
│       ├── primary/
│       │   ├── IRewardUseCase.ts
│       │   └── IAvatarUseCase.ts
│       └── secondary/
│           ├── IPlayerProfileRepository.ts
│           ├── IBadgeRepository.ts
│           └── IAchievementRepository.ts
├── application/
│   ├── commands/
│   │   ├── AwardXPCommand.ts
│   │   ├── UnlockBadgeCommand.ts
│   │   └── CustomizeAvatarCommand.ts
│   ├── queries/
│   │   ├── GetPlayerStatsQuery.ts
│   │   ├── GetAvailableBadgesQuery.ts
│   │   └── GetLeaderboardQuery.ts
│   └── handlers/
│       ├── AwardXPHandler.ts
│       ├── BadgeUnlockHandler.ts
│       └── LevelUpHandler.ts
└── infrastructure/
    ├── adapters/
    │   ├── primary/
    │   │   └── GamificationController.ts
    │   └── secondary/
    │       └── SupabasePlayerRepository.ts
    └── persistence/
        └── PlayerProfileMapper.ts
```

### Service de Calcul XP

```typescript
// XPCalculationService.ts
class XPCalculationService {
  private static readonly BASE_XP = 10;
  private static readonly PERFECT_BONUS = 1.5;
  private static readonly STREAK_MULTIPLIER = 0.1;

  calculateXP(exerciseResult: ExerciseResult, streak: Streak): ExperiencePoints {
    let xp = XPCalculationService.BASE_XP;
    
    // Bonus score parfait
    if (exerciseResult.isPerfect()) {
      xp *= XPCalculationService.PERFECT_BONUS;
    }
    
    // Multiplicateur de série
    const streakBonus = 1 + (streak.days * XPCalculationService.STREAK_MULTIPLIER);
    xp *= streakBonus;
    
    return ExperiencePoints.create(Math.floor(xp));
  }
}
```

---

## Module 5 : Supervision Parentale (Supervision)

### Structure du Module

```
modules/supervision/
├── domain/
│   ├── entities/
│   │   ├── Dashboard.ts
│   │   ├── Alert.ts
│   │   ├── Advice.ts
│   │   └── ActivityLog.ts
│   ├── value-objects/
│   │   ├── AlertType.ts
│   │   ├── AlertSeverity.ts
│   │   ├── Statistic.ts
│   │   └── TimeRange.ts
│   ├── services/
│   │   ├── StatisticsAggregationService.ts
│   │   ├── AlertGenerationService.ts
│   │   └── AdviceGenerationService.ts
│   ├── events/
│   │   ├── AlertGenerated.ts
│   │   └── AdviceGenerated.ts
│   └── ports/
│       ├── primary/
│       │   ├── IDashboardUseCase.ts
│       │   └── IAlertUseCase.ts
│       └── secondary/
│           ├── IStatisticsRepository.ts
│           ├── IAlertRepository.ts
│           └── IActivityLogRepository.ts
├── application/
│   ├── commands/
│   │   ├── GenerateAlertCommand.ts
│   │   ├── DismissAlertCommand.ts
│   │   └── RefreshDashboardCommand.ts
│   ├── queries/
│   │   ├── GetDashboardDataQuery.ts
│   │   ├── GetAlertsQuery.ts
│   │   ├── GetActivityHistoryQuery.ts
│   │   └── GetWeeklyStatsQuery.ts
│   └── handlers/
│       ├── DashboardRefreshHandler.ts
│       ├── AlertGenerationHandler.ts
│       └── AdviceGenerationHandler.ts
└── infrastructure/
    ├── adapters/
    │   ├── primary/
    │   │   └── DashboardController.ts
    │   └── secondary/
    │       ├── SupabaseStatisticsRepository.ts
    │       └── SupabaseActivityRepository.ts
    ├── event-handlers/
    │   ├── OnExerciseCompleted.ts
    │   ├── OnErrorDetected.ts
    │   └── OnBadgeUnlocked.ts
    └── persistence/
        └── DashboardMapper.ts
```

### Service de Génération d'Alertes

```typescript
// AlertGenerationService.ts
class AlertGenerationService {
  generateAlerts(childProgress: Progress, recentErrors: ErrorType[]): Alert[] {
    const alerts: Alert[] = [];
    
    // Alerte confusion b/d
    const bdConfusions = recentErrors.filter(e => e === ErrorType.CONFUSION_BD);
    if (bdConfusions.length >= 3) {
      alerts.push(Alert.create({
        type: AlertType.DANGER,
        title: 'Confusions b/d détectées',
        message: `${bdConfusions.length} confusions b/d dans les derniers exercices`,
        childId: childProgress.childId
      }));
    }
    
    // Conseil contextuel
    if (childProgress.timeSpent > Duration.hours(1)) {
      alerts.push(Alert.create({
        type: AlertType.INFO,
        title: 'Conseil',
        message: 'Une pause de 20 minutes améliore la mémorisation',
        childId: childProgress.childId
      }));
    }
    
    return alerts;
  }
}
```

---

## Module 6 : Accessibilité & Adaptation (Accessibility)

### Structure du Module

```
modules/accessibility/
├── domain/
│   ├── entities/
│   │   ├── ScanRequest.ts
│   │   ├── AdaptedContent.ts
│   │   └── AccessibilitySettings.ts
│   ├── value-objects/
│   │   ├── FontSettings.ts
│   │   ├── ColorScheme.ts
│   │   ├── LineSpacing.ts
│   │   └── SyllableColoring.ts
│   ├── services/
│   │   ├── TextAdaptationService.ts
│   │   └── SyllableHighlightService.ts
│   ├── events/
│   │   ├── DocumentScanned.ts
│   │   ├── ContentAdapted.ts
│   │   └── TextSpoken.ts
│   └── ports/
│       ├── primary/
│       │   ├── IScanUseCase.ts
│       │   ├── IAdaptationUseCase.ts
│       │   └── ITextToSpeechUseCase.ts
│       └── secondary/
│           ├── IOCRProvider.ts
│           ├── IAIAdaptationProvider.ts
│           ├── ITextToSpeechProvider.ts
│           └── IAccessibilitySettingsRepository.ts
├── application/
│   ├── commands/
│   │   ├── ScanDocumentCommand.ts
│   │   ├── AdaptTextCommand.ts
│   │   ├── SpeakTextCommand.ts
│   │   └── UpdateAccessibilitySettingsCommand.ts
│   ├── queries/
│   │   ├── GetAccessibilitySettingsQuery.ts
│   │   └── GetAdaptedContentQuery.ts
│   └── handlers/
│       ├── ScanDocumentHandler.ts
│       ├── AdaptTextHandler.ts
│       └── TextToSpeechHandler.ts
└── infrastructure/
    ├── adapters/
    │   ├── primary/
    │   │   └── AccessibilityController.ts
    │   └── secondary/
    │       ├── GoogleVisionOCRProvider.ts
    │       ├── OpenAIAdaptationProvider.ts
    │       └── AWSPollyTTSProvider.ts
    └── persistence/
        └── AccessibilitySettingsMapper.ts
```

### Service d'Adaptation de Texte

```typescript
// TextAdaptationService.ts
class TextAdaptationService {
  constructor(
    private readonly syllableService: SyllableHighlightService
  ) {}

  adapt(originalText: string, settings: AccessibilitySettings): AdaptedContent {
    let adaptedText = originalText;
    
    // Application des paramètres d'accessibilité
    const styles = {
      fontFamily: settings.font || 'Lexend',
      fontSize: settings.fontSize || 18,
      lineHeight: settings.lineSpacing || 1.7,
      letterSpacing: settings.letterSpacing || 0.05,
      backgroundColor: settings.backgroundColor || '#FFFEF5'
    };
    
    // Coloration des syllabes si activée
    let syllables: SyllableData[] = [];
    if (settings.syllableColoring) {
      syllables = this.syllableService.highlight(originalText);
    }
    
    return AdaptedContent.create({
      originalText,
      adaptedText,
      styles,
      syllables,
      createdAt: new Date()
    });
  }
}
```

---

## Flux de Données entre Modules

### Exemple : Complétion d'un Exercice

```
┌─────────────┐    SubmitResult    ┌─────────────┐
│   UI/View   │ ─────────────────► │  Learning   │
└─────────────┘                    │   Module    │
                                   └──────┬──────┘
                                          │
                    ExerciseCompleted     │
                    ◄─────────────────────┘
                                          │
        ┌─────────────────────────────────┼─────────────────────────────────┐
        │                                 │                                 │
        ▼                                 ▼                                 ▼
┌───────────────┐               ┌─────────────────┐               ┌─────────────────┐
│  Gamification │               │   Supervision   │               │   Accessibility │
│    Module     │               │     Module      │               │     Module      │
└───────┬───────┘               └────────┬────────┘               └─────────────────┘
        │                                │
        │ XPAwarded                       │ AlertGenerated
        │ BadgeUnlocked                  │ StatsUpdated
        ▼                                ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              Event Bus / Message Queue                          │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Conclusion

Cette architecture hexagonale garantit :

1. **Testabilité** : Le domaine peut être testé sans infrastructure
2. **Flexibilité** : Les adaptateurs peuvent être remplacés sans toucher au métier
3. **Évolutivité** : Chaque module peut évoluer indépendamment
4. **Maintenabilité** : Séparation claire des responsabilités
