import React from 'react';
import styles from './ParentDashboardLayout.module.css';
import { BottomNavigation, NavItem } from '../BottomNavigation/BottomNavigation';
import { Typography } from '../../atoms/Typography/Typography';
import { Avatar } from '../../atoms/Avatar/Avatar';

// Icônes SVG
const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export interface SidebarNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
}

export interface ParentDashboardLayoutProps {
  /** Nom de l'utilisateur pour le greeting */
  userName: string;
  /** URL de l'avatar (optionnel) */
  avatarSrc?: string;
  /** URL du logo pour la sidebar (optionnel) */
  logoSrc?: string;
  /** Contenu principal (gauche sur desktop) */
  children: React.ReactNode;
  /** Contenu de la sidebar droite (stats, activités) */
  sidebarContent?: React.ReactNode;
  /** Items de navigation pour la sidebar desktop */
  sidebarNavItems?: SidebarNavItem[];
  /** ID de la nav active */
  activeNavId?: string;
  /** Items de navigation pour le bottom nav mobile */
  bottomNavItems: NavItem[];
  /** ID du bottom nav actif */
  activeBottomNavId: string;
  /** Callback navigation */
  onNavigate?: (id: string) => void;
  /** Callback settings */
  onSettingsClick?: () => void;
}

/**
 * ParentDashboardLayout - Layout composite pour le Dashboard Parent
 *
 * Pattern: Composite / Layout Pattern
 * - Mobile: Header + Content + BottomNavigation
 * - Desktop: Sidebar fixe + Header + Content (2 colonnes)
 *
 * Architecture:
 * - Slot pattern avec children pour le contenu principal
 * - sidebarContent pour les stats (partie droite desktop)
 */
export const ParentDashboardLayout = ({
  userName,
  avatarSrc,
  logoSrc,
  children,
  sidebarContent,
  sidebarNavItems = [],
  activeNavId,
  bottomNavItems,
  activeBottomNavId,
  onNavigate,
  onSettingsClick,
}: ParentDashboardLayoutProps) => {
  return (
    <div className={styles.layout}>
      {/* Sidebar Desktop (fixe à gauche) */}
      {sidebarNavItems.length > 0 && (
        <aside className={styles.desktopSidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.logoWrapper}>
              {logoSrc ? (
                <img src={logoSrc} alt="Lenny & Co" className={styles.logoImage} />
              ) : (
                <>
                  <span className={styles.logoEmoji}>🦁</span>
                  <Typography variant="headingMD" component="span">
                    Lenny & Co
                  </Typography>
                </>
              )}
            </div>
          </div>

          <nav className={styles.sidebarNav}>
            {sidebarNavItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.sidebarNavItem} ${activeNavId === item.id ? styles.active : ''}`}
                onClick={() => onNavigate?.(item.id)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className={styles.sidebarFooter}>
            <button className={styles.settingsBtn} onClick={onSettingsClick}>
              <SettingsIcon />
              <span>Paramètres</span>
            </button>
          </div>
        </aside>
      )}

      {/* Main Container */}
      <div className={styles.mainContainer}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <Avatar src={avatarSrc} alt={userName} size="medium" />
            <div className={styles.greeting}>
              <Typography variant="caption" component="span">
                Bonjour
              </Typography>
              <Typography variant="headingMD" component="h1">
                {userName}
              </Typography>
            </div>
          </div>
          <div className={styles.headerRight}>
            <button
              className={styles.settingsButton}
              onClick={onSettingsClick}
              aria-label="Paramètres"
            >
              <SettingsIcon />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className={styles.contentWrapper}>
          {/* Main Content (gauche) */}
          <main className={styles.mainContent}>
            {children}
          </main>

          {/* Sidebar Content (droite - stats) */}
          {sidebarContent && (
            <aside className={styles.rightSidebar}>
              {sidebarContent}
            </aside>
          )}
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <BottomNavigation
        items={bottomNavItems}
        activeId={activeBottomNavId}
        onNavigate={onNavigate || (() => {})}
      />
    </div>
  );
};
