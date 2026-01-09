'use client';

import * as React from 'react';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';

// Types
export type Theme = 'light' | 'dark';
export type ThemePreference = Theme | 'system';

interface ThemeContextValue {
  /** Thème actuellement appliqué (light ou dark) */
  theme: Theme;
  /** Préférence utilisateur (light, dark ou system) */
  preference: ThemePreference;
  /** Change la préférence de thème */
  setPreference: (preference: ThemePreference) => void;
  /** Bascule entre light et dark */
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  /** Clé localStorage pour persister la préférence */
  storageKey?: string;
  /** Préférence par défaut si aucune n'est sauvegardée */
  defaultPreference?: ThemePreference;
}

// Constantes
const STORAGE_KEY_DEFAULT = 'lenny-theme-preference';
const DEFAULT_PREFERENCE: ThemePreference = 'system';

// Context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Récupère la préférence système (prefers-color-scheme)
 */
function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/**
 * Résout la préférence en thème concret
 */
function resolveTheme(preference: ThemePreference): Theme {
  if (preference === 'system') {
    return getSystemTheme();
  }
  return preference;
}

/**
 * Récupère la préférence depuis localStorage
 */
function getStoredPreference(storageKey: string): ThemePreference | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(storageKey);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return null;
}

/**
 * ThemeProvider - Fournit le contexte de thème à l'application
 *
 * Responsabilités :
 * - Gère l'état du thème (light/dark)
 * - Persiste la préférence dans localStorage
 * - Écoute les changements de préférence système
 * - Applique la classe CSS sur le document
 */
export function ThemeProvider({
  children,
  storageKey = STORAGE_KEY_DEFAULT,
  defaultPreference = DEFAULT_PREFERENCE,
}: ThemeProviderProps) {
  // État : préférence utilisateur
  const [preference, setPreferenceState] = useState<ThemePreference>(() => {
    // SSR : retourne la valeur par défaut
    if (typeof window === 'undefined') return defaultPreference;
    // Client : récupère depuis localStorage ou utilise la valeur par défaut
    return getStoredPreference(storageKey) ?? defaultPreference;
  });

  // État : thème résolu (light ou dark)
  const [theme, setTheme] = useState<Theme>(() => resolveTheme(preference));

  // Applique le thème sur le document
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Écoute les changements de préférence système
  useEffect(() => {
    if (preference !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [preference]);

  // Met à jour le thème quand la préférence change
  useEffect(() => {
    setTheme(resolveTheme(preference));
  }, [preference]);

  // Sauvegarde la préférence dans localStorage
  const setPreference = useCallback(
    (newPreference: ThemePreference) => {
      setPreferenceState(newPreference);
      localStorage.setItem(storageKey, newPreference);
    },
    [storageKey]
  );

  // Bascule entre light et dark
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setPreference(newTheme);
  }, [theme, setPreference]);

  // Valeur du contexte mémorisée
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      preference,
      setPreference,
      toggleTheme,
    }),
    [theme, preference, setPreference, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook pour accéder au contexte de thème
 * @throws Error si utilisé hors du ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

