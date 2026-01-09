import React, { memo } from 'react';
import styles from './Tag.module.css';

export interface TagProps {
  label: string;
  variant?: 'neutral' | 'success' | 'warning' | 'primary';
}

export const Tag = memo(({ label, variant = 'neutral' }: TagProps) => {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {label}
    </span>
  );
});

Tag.displayName = 'Tag';
