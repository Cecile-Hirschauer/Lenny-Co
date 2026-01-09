import React, { memo } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Le style visuel du bouton */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Le texte à afficher */
  label: string;
}

export const Button = memo(({
  variant = 'primary',
  label,
  className,
  ...props
}: ButtonProps) => {
  // Construction dynamique des classes
  const classes = [
    styles.button,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
});

Button.displayName = 'Button';
