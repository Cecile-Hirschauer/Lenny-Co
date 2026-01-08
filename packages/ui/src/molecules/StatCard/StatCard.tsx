import React from 'react';
import styles from './StatCard.module.css';
import { Typography } from '../../atoms/Typography/Typography';

export interface StatCardProps {
  value: string | number;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.value}>
        <Typography variant="headingXL" component="span">
          {value}
        </Typography>
      </div>
      <Typography variant="caption" component="span">
        {label}
      </Typography>
    </div>
  );
};
