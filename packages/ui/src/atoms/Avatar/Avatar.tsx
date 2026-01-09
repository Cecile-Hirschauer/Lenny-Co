import React, { memo } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}

const FALLBACK_FONT_SIZE = {
  small: 12,
  medium: 20,
  large: 20,
} as const;

export const Avatar = memo(({ src, alt = 'Avatar', size = 'medium' }: AvatarProps) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.fallback} style={{ fontSize: FALLBACK_FONT_SIZE[size] }}>🦁</span>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';
