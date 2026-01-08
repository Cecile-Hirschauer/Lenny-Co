import React from 'react';
import styles from './Typography.module.css';

type Variant = 'headingXL' | 'headingLG' | 'headingMD' | 'bodyLG' | 'bodyMD' | 'caption';

export interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  /** Permet de changer la balise HTML (h1, p, span) sémantiquement */
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography = ({
  variant = 'bodyMD',
  children,
  component,
  className = '',
  style,
}: TypographyProps) => {
  // Mapping automatique : si c'est un titre -> h2, sinon p
  const Component = component || (variant.startsWith('heading') ? 'h2' : 'p');

  return (
    <Component className={`${styles.text} ${styles[variant]} ${className}`} style={style}>
      {children}
    </Component>
  );
};
