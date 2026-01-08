/**
 * AuthService - Service Layer Pattern (RNCP 7)
 *
 * Design Patterns utilisés:
 * - Singleton: Instance unique via méthodes statiques
 * - Service Layer: Séparation de la logique métier du framework
 * - Repository Pattern (simulé): Abstraction de la source de données
 *
 * Ce service encapsule toute la logique d'authentification,
 * permettant de découpler Next.js de la logique pure.
 */

// ============================================
// TYPES & INTERFACES
// ============================================

export type UserRole = 'parent' | 'child' | 'admin';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatarUrl?: string;
  children?: ChildProfile[];
  createdAt: Date;
}

export interface ChildProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  age: number;
  level: number;
  isOnline: boolean;
}

export interface UserSession {
  user: User;
  token: string;
  expiresAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthError {
  code: string;
  message: string;
  field?: string;
}

// ============================================
// VALIDATION UTILITIES
// ============================================

class ValidationError extends Error {
  code: string;
  field?: string;

  constructor(code: string, message: string, field?: string) {
    super(message);
    this.code = code;
    this.field = field;
    this.name = 'ValidationError';
  }
}

const Validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  password: (password: string): boolean => {
    return password.length >= 8;
  },

  name: (name: string): boolean => {
    return name.trim().length >= 2;
  },
} as const;

// ============================================
// MOCK DATA (Simule une base de données)
// ============================================

const MOCK_USERS: Map<string, User & { password: string }> = new Map([
  [
    'parent@demo.com',
    {
      id: 'usr_001',
      email: 'parent@demo.com',
      password: 'password123',
      firstName: 'Marie',
      lastName: 'Dupont',
      role: 'parent',
      avatarUrl: '/images/avatars/parent.png',
      children: [
        {
          id: 'child_001',
          name: 'Lenny',
          avatarUrl: '/images/avatars/lenny.png',
          age: 8,
          level: 12,
          isOnline: true,
        },
      ],
      createdAt: new Date('2024-01-15'),
    },
  ],
]);

// ============================================
// AUTH SERVICE CLASS (Singleton Pattern)
// ============================================

export class AuthService {
  private static readonly NETWORK_DELAY = 1000; // Simulation latence réseau
  private static currentSession: UserSession | null = null;

  /**
   * Simule un délai réseau pour plus de réalisme
   */
  private static delay(ms: number = this.NETWORK_DELAY): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Génère un token JWT simulé
   */
  private static generateToken(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 15);
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${timestamp}.${random}`;
  }

  /**
   * Crée une session utilisateur
   */
  private static createSession(user: User): UserSession {
    const session: UserSession = {
      user,
      token: this.generateToken(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
    };
    this.currentSession = session;
    return session;
  }

  // ============================================
  // PUBLIC API
  // ============================================

  /**
   * Authentifie un utilisateur avec email et mot de passe
   *
   * @param credentials - Email et mot de passe
   * @returns Promise<UserSession> - Session utilisateur
   * @throws ValidationError - Si les données sont invalides
   */
  static async login(credentials: LoginCredentials): Promise<UserSession> {
    const { email, password } = credentials;

    // Validation des entrées
    if (!email || !Validators.email(email)) {
      throw new ValidationError('INVALID_EMAIL', 'Email invalide', 'email');
    }

    if (!password || password.length < 1) {
      throw new ValidationError('INVALID_PASSWORD', 'Mot de passe requis', 'password');
    }

    await this.delay();

    // Recherche de l'utilisateur
    const userData = MOCK_USERS.get(email.toLowerCase());

    if (!userData) {
      throw new ValidationError('USER_NOT_FOUND', 'Aucun compte trouvé avec cet email');
    }

    if (userData.password !== password) {
      throw new ValidationError('INVALID_CREDENTIALS', 'Mot de passe incorrect', 'password');
    }

    // Création de la session (sans le mot de passe)
    const { password: _, ...user } = userData;
    console.log(`[AuthService] Login success for ${email}`);

    return this.createSession(user);
  }

  /**
   * Inscrit un nouvel utilisateur
   *
   * @param data - Données d'inscription
   * @returns Promise<UserSession> - Session du nouvel utilisateur
   * @throws ValidationError - Si les données sont invalides ou l'email existe déjà
   */
  static async register(data: RegisterData): Promise<UserSession> {
    const { firstName, lastName, email, password } = data;

    // Validations
    if (!Validators.name(firstName)) {
      throw new ValidationError('INVALID_FIRST_NAME', 'Le prénom doit contenir au moins 2 caractères', 'firstName');
    }

    if (!Validators.name(lastName)) {
      throw new ValidationError('INVALID_LAST_NAME', 'Le nom doit contenir au moins 2 caractères', 'lastName');
    }

    if (!Validators.email(email)) {
      throw new ValidationError('INVALID_EMAIL', 'Format d\'email invalide', 'email');
    }

    if (!Validators.password(password)) {
      throw new ValidationError('WEAK_PASSWORD', 'Le mot de passe doit contenir au moins 8 caractères', 'password');
    }

    await this.delay();

    // Vérification que l'email n'existe pas
    if (MOCK_USERS.has(email.toLowerCase())) {
      throw new ValidationError('EMAIL_EXISTS', 'Un compte existe déjà avec cet email', 'email');
    }

    // Création du nouvel utilisateur
    const newUser: User = {
      id: `usr_${Date.now().toString(36)}`,
      email: email.toLowerCase(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: 'parent',
      children: [],
      createdAt: new Date(),
    };

    // Sauvegarde (simulation)
    MOCK_USERS.set(email.toLowerCase(), { ...newUser, password });
    console.log('[AuthService] User registered:', { email, firstName, lastName });

    return this.createSession(newUser);
  }

  /**
   * Déconnecte l'utilisateur actuel
   */
  static async logout(): Promise<void> {
    await this.delay(300);
    this.currentSession = null;
    console.log('[AuthService] User logged out');
  }

  /**
   * Récupère la session courante
   */
  static getCurrentSession(): UserSession | null {
    if (this.currentSession && this.currentSession.expiresAt > new Date()) {
      return this.currentSession;
    }
    return null;
  }

  /**
   * Vérifie si l'utilisateur est authentifié
   */
  static isAuthenticated(): boolean {
    return this.getCurrentSession() !== null;
  }

  /**
   * Récupère l'utilisateur courant
   */
  static getCurrentUser(): User | null {
    return this.currentSession?.user || null;
  }

  /**
   * Récupère les enfants de l'utilisateur connecté
   */
  static getChildren(): ChildProfile[] {
    return this.currentSession?.user.children || [];
  }
}

// ============================================
// HELPER FUNCTIONS (pour les composants)
// ============================================

/**
 * Hook-ready helper pour gérer les erreurs d'auth
 */
export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof ValidationError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Une erreur inattendue est survenue';
}

/**
 * Vérifie si une erreur est liée à un champ spécifique
 */
export function isFieldError(error: unknown, field: string): boolean {
  return error instanceof ValidationError && error.field === field;
}
