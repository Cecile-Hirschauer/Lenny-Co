'use client';

import React from 'react';
import {
  ParentDashboardLayout,
  Typography,
  Avatar,
  Tag,
  StatCard,
  AlertCard,
  NavItem,
  SidebarNavItem,
} from '@lenny/ui';
import styles from './page.module.css';

// ============================================
// SVG ICONS
// ============================================

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HomeIconFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const ChildrenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ============================================
// MOCK DATA
// ============================================

// Avatars dicebear (même source que Storybook)
const AVATARS = {
  lenny: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lenny',
  parent: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Parent',
};

const childProfile = {
  name: 'Lenny',
  avatarUrl: AVATARS.lenny,
  isOnline: true,
  level: 12,
};

const stats = [
  { label: 'Temps total', value: '2h 15', variant: 'primary' as const },
  { label: 'Missions', value: '12/15', variant: 'success' as const },
  { label: 'Réussite', value: '85%', variant: 'warning' as const },
  { label: 'Badges', value: '3', variant: 'neutral' as const },
];

const recentActivity = [
  {
    icon: <StarIcon />,
    iconType: 'success' as const,
    text: 'Badge "Explorateur" débloqué',
    time: 'Il y a 2h',
  },
  {
    icon: <BookIcon />,
    iconType: 'primary' as const,
    text: 'Mission "Les sons complexes" terminée',
    time: 'Il y a 4h',
  },
  {
    icon: <ClockIcon />,
    iconType: 'warning' as const,
    text: '30 minutes de pratique aujourd\'hui',
    time: 'Aujourd\'hui',
  },
];

/**
 * DashboardPage - Dashboard Parent
 *
 * Design Patterns utilisés:
 * - Composite Pattern: ParentDashboardLayout compose plusieurs sections
 * - Slot Pattern: children et sidebarContent comme slots
 * - Container/Presentational: Page comme container, composants UI comme presentational
 * - Service Layer: Données mockées (préparées pour intégration avec DataService)
 */
export default function DashboardPage() {
  // Navigation items pour la sidebar desktop
  const sidebarNavItems: SidebarNavItem[] = [
    { id: 'dashboard', label: 'Tableau de bord', icon: <HomeIcon /> },
    { id: 'children', label: 'Enfants', icon: <ChildrenIcon /> },
  ];

  // Navigation items pour le bottom nav mobile
  const bottomNavItems: NavItem[] = [
    { id: 'home', label: 'Accueil', icon: <HomeIcon />, iconActive: <HomeIconFilled /> },
    { id: 'missions', label: 'Missions', icon: <TrophyIcon /> },
    { id: 'progress', label: 'Progrès', icon: <ChartIcon /> },
    { id: 'profile', label: 'Profil', icon: <ProfileIcon /> },
  ];

  const handleNavigate = (id: string) => {
    console.log('Navigate to:', id);
    if (id === 'settings') {
      console.log('Opening settings...');
    }
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  // ============================================
  // MAIN CONTENT (Gauche)
  // ============================================
  const mainContent = (
    <>
      {/* Section: Profil Enfant */}
      <section className={styles.section}>
        <div className={styles.profileCard}>
          <Avatar src={childProfile.avatarUrl} alt={childProfile.name} size="large" />
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{childProfile.name}</span>
            <div className={styles.onlineStatus}>
              <span className={styles.onlineDot} />
              En ligne
            </div>
            <Tag label={`Niveau ${childProfile.level}`} variant="primary" />
          </div>
        </div>
      </section>

      {/* Section: Graphique de progression */}
      <section className={styles.section}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTitle}>Progression hebdomadaire</span>
            <span className={styles.chartPeriod}>Cette semaine</span>
          </div>
          <div className={styles.chartPlaceholder}>
            <div className={styles.chartBars}>
              <div className={styles.chartBar} />
              <div className={styles.chartBar} />
              <div className={styles.chartBar} />
              <div className={styles.chartBar} />
              <div className={styles.chartBar} />
              <div className={styles.chartBar} />
              <div className={styles.chartBar} />
            </div>
            <span className={styles.chartLabel}>Lun - Dim</span>
          </div>
        </div>
      </section>

      {/* Section: Alertes et Conseils (CRITIQUE) */}
      <section className={styles.alertsSection}>
        <AlertCard
          variant="danger"
          title="Attention requise"
          message="Confusions b/d fréquentes détectées. Nous recommandons des exercices ciblés."
        />
        <AlertCard
          variant="info"
          title="Conseil du jour"
          message="Fais une pause de 20 minutes entre chaque session pour une meilleure mémorisation."
        />
      </section>
    </>
  );

  // ============================================
  // SIDEBAR CONTENT (Droite - Stats)
  // ============================================
  const sidebarContent = (
    <div className={styles.statsSection}>
      {/* Stats Grid 2x2 */}
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <div className={styles.activityCard}>
        <Typography variant="bodyLG" component="h3" className={styles.activityTitle}>
          Activité récente
        </Typography>
        <div className={styles.activityList}>
          {recentActivity.map((activity, index) => (
            <div key={index} className={styles.activityItem}>
              <div
                className={`${styles.activityIcon} ${
                  activity.iconType === 'success'
                    ? styles.activityIconSuccess
                    : activity.iconType === 'primary'
                    ? styles.activityIconPrimary
                    : styles.activityIconWarning
                }`}
              >
                {activity.icon}
              </div>
              <div className={styles.activityContent}>
                <div className={styles.activityText}>{activity.text}</div>
                <div className={styles.activityTime}>{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <ParentDashboardLayout
      userName="Marie"
      avatarSrc={AVATARS.parent}
      logoSrc="/images/LennyCo_logo.png"
      sidebarNavItems={sidebarNavItems}
      activeNavId="dashboard"
      bottomNavItems={bottomNavItems}
      activeBottomNavId="home"
      onNavigate={handleNavigate}
      onSettingsClick={handleSettingsClick}
      sidebarContent={sidebarContent}
    >
      {mainContent}
    </ParentDashboardLayout>
  );
}
