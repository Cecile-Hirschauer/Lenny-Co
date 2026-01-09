import React, { memo } from 'react';
import styles from './MissionCard.module.css';
import { Typography } from '../../atoms/Typography/Typography';
import { Tag } from '../../atoms/Tag/Tag';

export interface MissionCardProps {
  title: string;
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  icon?: React.ReactNode;
  onClick?: () => void;
}

const DIFFICULTY_VARIANT = {
  Facile: 'success',
  Moyen: 'warning',
  Difficile: 'primary',
} as const;

export const MissionCard = memo(({
  title,
  duration,
  difficulty,
  icon = '📖',
  onClick,
}: MissionCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {/* 1. Zone Image */}
      <div className={styles.iconWrapper}>{icon}</div>

      {/* 2. Zone Contenu (Typography + Tag) */}
      <div className={styles.content}>
        <Typography variant="headingMD" component="h3">
          {title}
        </Typography>

        <div className={styles.meta}>
          <Tag label={difficulty} variant={DIFFICULTY_VARIANT[difficulty]} />
          <Typography variant="caption" component="span">
            • {duration}
          </Typography>
        </div>
      </div>

      {/* 3. Zone Action (Icône Play) */}
      <div className={styles.action}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      </div>
    </div>
  );
});

MissionCard.displayName = 'MissionCard';
