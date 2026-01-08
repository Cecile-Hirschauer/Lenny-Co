import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ParentDashboardLayout } from './ParentDashboardLayout';
import { StatCard } from '../../molecules/StatCard/StatCard';
import { AlertCard } from '../../molecules/AlertCard/AlertCard';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Tag } from '../../atoms/Tag/Tag';
import { Typography } from '../../atoms/Typography/Typography';

// ============================================
// SVG ICONS (identiques au dashboard Next.js)
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

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
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
// MOCK DATA (identique au dashboard Next.js)
// ============================================

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
  { icon: <StarIcon />, iconType: 'success', text: 'Badge "Explorateur" débloqué', time: 'Il y a 2h' },
  { icon: <BookIcon />, iconType: 'primary', text: 'Mission "Les sons complexes" terminée', time: 'Il y a 4h' },
  { icon: <ClockIcon />, iconType: 'warning', text: "30 minutes de pratique aujourd'hui", time: "Aujourd'hui" },
];

const sidebarNavItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: <HomeIcon /> },
  { id: 'children', label: 'Enfants', icon: <ChildrenIcon /> },
  { id: 'settings', label: 'Paramètres', icon: <SettingsIcon /> },
];

const bottomNavItems = [
  { id: 'home', label: 'Accueil', icon: <HomeIcon />, iconActive: <HomeIconFilled /> },
  { id: 'missions', label: 'Missions', icon: <TrophyIcon /> },
  { id: 'progress', label: 'Progrès', icon: <ChartIcon /> },
  { id: 'profile', label: 'Profil', icon: <ProfileIcon /> },
];

// ============================================
// STYLES (inline pour Storybook)
// ============================================

const styles = {
  section: { display: 'flex', flexDirection: 'column' as const, gap: '16px' },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
  profileInfo: { display: 'flex', flexDirection: 'column' as const, gap: '4px' },
  profileName: { fontSize: '18px', fontWeight: 600, color: '#1E293B' },
  onlineStatus: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#22C55E' },
  onlineDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#22C55E',
    borderRadius: '50%',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
  chartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  chartTitle: { fontSize: '16px', fontWeight: 600, color: '#1E293B' },
  chartPeriod: {
    fontSize: '13px',
    color: '#64748B',
    padding: '4px 10px',
    backgroundColor: '#F1F5F9',
    borderRadius: '8px',
  },
  chartPlaceholder: {
    height: '180px',
    background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#3B82F6',
  },
  chartBars: { display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px' },
  chartBar: (height: string) => ({
    width: '24px',
    height,
    background: 'linear-gradient(180deg, #3B82F6 0%, #60A5FA 100%)',
    borderRadius: '4px 4px 0 0',
  }),
  alertsSection: { display: 'flex', flexDirection: 'column' as const, gap: '12px' },
  statsSection: { display: 'flex', flexDirection: 'column' as const, gap: '16px' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
  activityTitle: { fontSize: '16px', fontWeight: 600, color: '#1E293B', marginBottom: '16px' },
  activityList: { display: 'flex', flexDirection: 'column' as const, gap: '12px' },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: '#F8FAFC',
    borderRadius: '10px',
  },
  activityIcon: (type: string) => ({
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'success' ? '#DCFCE7' : type === 'primary' ? '#DBEAFE' : '#FEF3C7',
    color: type === 'success' ? '#16A34A' : type === 'primary' ? '#2563EB' : '#D97706',
  }),
  activityContent: { flex: 1 },
  activityText: { fontSize: '14px', color: '#1E293B', fontWeight: 500 },
  activityTime: { fontSize: '12px', color: '#64748B', marginTop: '2px' },
};

// ============================================
// MAIN CONTENT COMPONENT
// ============================================

const MainContent = () => (
  <>
    {/* Profil Enfant */}
    <section style={styles.section}>
      <div style={styles.profileCard}>
        <Avatar src={childProfile.avatarUrl} alt={childProfile.name} size="large" />
        <div style={styles.profileInfo}>
          <span style={styles.profileName}>{childProfile.name}</span>
          <div style={styles.onlineStatus}>
            <span style={styles.onlineDot} />
            En ligne
          </div>
          <Tag label={`Niveau ${childProfile.level}`} variant="primary" />
        </div>
      </div>
    </section>

    {/* Graphique */}
    <section style={styles.section}>
      <div style={styles.chartCard}>
        <div style={styles.chartHeader}>
          <span style={styles.chartTitle}>Progression hebdomadaire</span>
          <span style={styles.chartPeriod}>Cette semaine</span>
        </div>
        <div style={styles.chartPlaceholder}>
          <div style={styles.chartBars}>
            <div style={styles.chartBar('40%')} />
            <div style={styles.chartBar('65%')} />
            <div style={styles.chartBar('45%')} />
            <div style={styles.chartBar('80%')} />
            <div style={styles.chartBar('55%')} />
            <div style={styles.chartBar('90%')} />
            <div style={styles.chartBar('70%')} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: 500 }}>Lun - Dim</span>
        </div>
      </div>
    </section>

    {/* Alertes */}
    <section style={styles.alertsSection}>
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
// SIDEBAR CONTENT COMPONENT
// ============================================

const SidebarContent = () => (
  <div style={styles.statsSection}>
    {/* Stats Grid */}
    <div style={styles.statsGrid}>
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} variant={stat.variant} />
      ))}
    </div>

    {/* Recent Activity */}
    <div style={styles.activityCard}>
      <Typography variant="bodyLG" component="h3" style={styles.activityTitle}>
        Activité récente
      </Typography>
      <div style={styles.activityList}>
        {recentActivity.map((activity, index) => (
          <div key={index} style={styles.activityItem}>
            <div style={styles.activityIcon(activity.iconType)}>{activity.icon}</div>
            <div style={styles.activityContent}>
              <div style={styles.activityText}>{activity.text}</div>
              <div style={styles.activityTime}>{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================
// META & STORIES
// ============================================

const meta: Meta<typeof ParentDashboardLayout> = {
  title: 'Organisms/ParentDashboardLayout',
  component: ParentDashboardLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Layout composite pour le Dashboard Parent. Inclut une sidebar desktop fixe, un header avec avatar, et un système de slots pour le contenu principal et la sidebar droite.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ParentDashboardLayout>;

// Story par défaut - identique au dashboard Next.js
export const Default: Story = {
  args: {
    userName: 'Marie',
    avatarSrc: AVATARS.parent,
    sidebarNavItems,
    activeNavId: 'dashboard',
    bottomNavItems,
    activeBottomNavId: 'home',
  },
  render: (args) => (
    <ParentDashboardLayout {...args} sidebarContent={<SidebarContent />}>
      <MainContent />
    </ParentDashboardLayout>
  ),
};

// Story interactive avec navigation
export const Interactive: Story = {
  render: () => {
    const [activeNavId, setActiveNavId] = useState('dashboard');
    const [activeBottomNavId, setActiveBottomNavId] = useState('home');

    return (
      <ParentDashboardLayout
        userName="Marie"
        avatarSrc={AVATARS.parent}
        sidebarNavItems={sidebarNavItems}
        activeNavId={activeNavId}
        bottomNavItems={bottomNavItems}
        activeBottomNavId={activeBottomNavId}
        onNavigate={(id) => {
          setActiveNavId(id);
          setActiveBottomNavId(id === 'dashboard' ? 'home' : id);
          alert(`Navigation vers: ${id}`);
        }}
        onSettingsClick={() => alert('Paramètres ouverts')}
        sidebarContent={<SidebarContent />}
      >
        <MainContent />
      </ParentDashboardLayout>
    );
  },
};

// Story mobile (sans sidebar desktop visible)
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    userName: 'Marie',
    avatarSrc: AVATARS.parent,
    sidebarNavItems,
    activeNavId: 'dashboard',
    bottomNavItems,
    activeBottomNavId: 'home',
  },
  render: (args) => (
    <ParentDashboardLayout {...args} sidebarContent={<SidebarContent />}>
      <MainContent />
    </ParentDashboardLayout>
  ),
};

// Story nouvel utilisateur (sans enfant)
export const NewUser: Story = {
  args: {
    userName: 'Sophie',
    avatarSrc: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    sidebarNavItems,
    activeNavId: 'dashboard',
    bottomNavItems,
    activeBottomNavId: 'home',
  },
  render: (args) => (
    <ParentDashboardLayout {...args}>
      <div
        style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
        }}
      >
        <Typography variant="headingLG">Bienvenue sur Lenny & Co !</Typography>
        <Typography variant="bodyMD" style={{ color: '#64748B', marginTop: '8px' }}>
          Ajoutez votre premier enfant pour commencer l&apos;aventure.
        </Typography>
      </div>
    </ParentDashboardLayout>
  ),
};
