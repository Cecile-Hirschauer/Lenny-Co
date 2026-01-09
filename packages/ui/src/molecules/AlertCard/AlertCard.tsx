import React, { memo } from 'react';
import styles from './AlertCard.module.css';
import { Typography } from '../../atoms/Typography/Typography';

export type AlertCardVariant = 'danger' | 'info' | 'success' | 'warning';

export interface AlertCardProps {
  variant: AlertCardVariant;
  title: string;
  message: string;
  icon?: React.ReactNode;
}

// Icônes par défaut pour chaque variant (extracted as constant)
const DEFAULT_ICONS: Record<AlertCardVariant, React.ReactNode> = {
  danger: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  info: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};

/**
 * AlertCard - Composant pour afficher des alertes et conseils
 * Pattern: Molecule (compose Typography atom)
 *
 * Variants:
 * - danger: Alertes critiques (rouge) - ex: "Attention requise"
 * - info: Conseils et informations (bleu) - ex: "Conseil du jour"
 * - success: Messages de succès (vert)
 * - warning: Avertissements (orange)
 */
export const AlertCard = memo(({
  variant,
  title,
  message,
  icon,
}: AlertCardProps) => {
  const variantClass = styles[variant];
  const displayIcon = icon || DEFAULT_ICONS[variant];

  return (
    <div className={`${styles.card} ${variantClass}`} role="alert">
      <div className={styles.iconWrapper}>
        {displayIcon}
      </div>
      <div className={styles.content}>
        <Typography variant="bodyLG" component="strong" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="bodyMD" component="p" className={styles.message}>
          {message}
        </Typography>
      </div>
    </div>
  );
});

AlertCard.displayName = 'AlertCard';
