'use client';

import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export interface ThemeToggleProps {
  /** Taille du toggle */
  size?: 'sm' | 'md' | 'lg';
  /** Afficher les labels */
  showLabels?: boolean;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * ThemeToggle - Bouton pour basculer entre les thèmes light et dark
 *
 * Accessible et adapté aux enfants dyslexiques avec des icônes claires
 */
export function ThemeToggle({
  size = 'md',
  showLabels = false,
  className = '',
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${styles.toggle} ${styles[size]} ${className}`}
      aria-label={isLight ? 'Activer le mode sombre' : 'Activer le mode clair'}
      title={isLight ? 'Mode sombre' : 'Mode clair'}
    >
      <span className={`${styles.track} ${isLight ? styles.light : styles.dark}`}>
        <span className={styles.thumb}>
          <span className={styles.icon}>
            {isLight ? '☀️' : '🌙'}
          </span>
        </span>
      </span>
      {showLabels && (
        <span className={styles.label}>
          {isLight ? 'Clair' : 'Sombre'}
        </span>
      )}
    </button>
  );
}
