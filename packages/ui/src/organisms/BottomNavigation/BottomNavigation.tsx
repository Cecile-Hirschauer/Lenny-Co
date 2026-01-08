import React from 'react';
import styles from './BottomNavigation.module.css';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  iconActive?: React.ReactNode;
}

export interface BottomNavigationProps {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export const BottomNavigation = ({
  items,
  activeId,
  onNavigate,
}: BottomNavigationProps) => {
  return (
    <nav className={styles.container}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={styles.icon}>
              {isActive && item.iconActive ? item.iconActive : item.icon}
            </span>
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
