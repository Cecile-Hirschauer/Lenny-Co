import React from 'react';
import styles from './BurgerButton.module.css';

export interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </button>
  );
};
