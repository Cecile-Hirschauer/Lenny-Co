import React from 'react';
import styles from './DashboardLayout.module.css';
import { Header } from '../Header/Header';
import { BottomNavigation, NavItem } from '../BottomNavigation/BottomNavigation';
import { Typography } from '../../atoms/Typography/Typography';
import { StatCard } from '../../molecules/StatCard/StatCard';
import { MissionCard, MissionCardProps } from '../../molecules/MissionCard/MissionCard';

export interface DashboardLayoutProps {
  userName: string;
  avatarSrc?: string;
  stats: { value: string | number; label: string }[];
  missions: Omit<MissionCardProps, 'onClick'>[];
  navItems: NavItem[];
  activeNavId: string;
  onNavigate: (id: string) => void;
  onSettingsClick?: () => void;
  onMissionClick?: (index: number) => void;
}

export const DashboardLayout = ({
  userName,
  avatarSrc,
  stats,
  missions,
  navItems,
  activeNavId,
  onNavigate,
  onSettingsClick,
  onMissionClick,
}: DashboardLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header
        userName={userName}
        avatarSrc={avatarSrc}
        onSettingsClick={onSettingsClick}
      />

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
        onNavigate={onNavigate}
      />
    </div>
  );
};
