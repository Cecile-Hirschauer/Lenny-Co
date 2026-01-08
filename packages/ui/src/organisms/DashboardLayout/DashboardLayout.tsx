import React from 'react';
import styles from './DashboardLayout.module.css';
import { BottomNavigation, NavItem } from '../BottomNavigation/BottomNavigation';
import { Typography } from '../../atoms/Typography/Typography';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { StatCard } from '../../molecules/StatCard/StatCard';
import { MissionCard, MissionCardProps } from '../../molecules/MissionCard/MissionCard';

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export interface DashboardLayoutProps {
  userName: string;
  avatarSrc?: string;
  stats: { value: string | number; label: string }[];
  missions: Omit<MissionCardProps, 'onClick'>[];
  navItems: NavItem[];
  activeNavId: string;
  onNavigate?: (id: string) => void;
  onSettingsClick?: () => void;
  onMissionClick?: (index: number) => void;
}

export const DashboardLayout = ({
  userName,
  avatarSrc,
  stats = [],
  missions = [],
  navItems = [],
  activeNavId,
  onNavigate,
  onSettingsClick,
  onMissionClick,
}: DashboardLayoutProps) => {
  return (
    <div className={styles.layout}>
      {/* Dashboard Header */}
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
            aria-label="Parametres"
          >
            <SettingsIcon />
          </button>
        </div>
      </header>

      <main className={styles.content}>
        {/* Section Stats */}
        <section className={styles.section}>
          <div className={styles.statsRow}>
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        {/* Section Missions */}
        <section className={styles.section}>
          <Typography variant="headingLG" component="h2" className={styles.sectionTitle}>
            Tes missions
          </Typography>

          <div className={styles.missionsList}>
            {missions.map((mission, index) => (
              <MissionCard
                key={index}
                {...mission}
                onClick={() => onMissionClick?.(index)}
              />
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation
        items={navItems}
        activeId={activeNavId}
        onNavigate={onNavigate || (() => {})}
      />
    </div>
  );
};
