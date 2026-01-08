import React from 'react';
import styles from './Tag.module.css';

export interface TagProps {
  label: string;
  variant?: 'neutral' | 'success' | 'warning' | 'primary';
}

export const Tag = ({ label, variant = 'neutral' }: TagProps) => {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {label}
    </span>
  );
};
