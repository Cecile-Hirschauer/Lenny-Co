import React, { memo } from 'react';
import styles from './StatCard.module.css';
import { Typography } from '../../atoms/Typography/Typography';

export type StatCardVariant = 'primary' | 'success' | 'warning' | 'neutral';

export interface StatCardProps {
  value: string | number;
  label: string;
  variant?: StatCardVariant;
  icon?: React.ReactNode;
}

/**
 * StatCard - Affiche une statistique avec une grosse valeur colorée
 * Pattern: Molecule (compose Typography atom)
 *
 * Variants:
 * - primary: Bleu (#3B82F6) - Défaut
 * - success: Vert (#22C55E)
 * - warning: Orange (#F59E0B)
 * - neutral: Gris (#64748B)
 */
export const StatCard = memo(({
  value,
  label,
  variant = 'primary',
  icon,
}: StatCardProps) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <div className={`${styles.value} ${variantClass}`}>
        <Typography variant="headingXL" component="span">
          {value}
        </Typography>
      </div>
      <Typography variant="caption" component="span" className={styles.label}>
        {label}
      </Typography>
    </div>
  );
});

StatCard.displayName = 'StatCard';
