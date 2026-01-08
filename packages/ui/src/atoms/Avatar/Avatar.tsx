import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({ src, alt = 'Avatar', size = 'medium' }: AvatarProps) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span style={{ fontSize: size === 'small' ? 12 : 20 }}>🦁</span>
      )}
    </div>
  );
};
