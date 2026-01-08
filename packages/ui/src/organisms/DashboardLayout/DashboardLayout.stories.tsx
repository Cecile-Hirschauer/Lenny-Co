import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';

// Icônes SVG
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

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const navItems = [
  { id: 'home', label: 'Accueil', icon: <HomeIcon />, iconActive: <HomeIconFilled /> },
  { id: 'trophies', label: 'Trophées', icon: <TrophyIcon /> },
  { id: 'chat', label: 'Chat', icon: <ChatIcon /> },
  { id: 'profile', label: 'Profil', icon: <ProfileIcon /> },
];

const stats = [
  { value: '12', label: 'Missions faites' },
  { value: '85%', label: 'Réussite' },
  { value: '5', label: 'Badges' },
];

const missions = [
  { title: 'La chasse aux mots', duration: '5 min', difficulty: 'Facile' as const, icon: '🦁' },
  { title: 'Compter les étoiles', duration: '10 min', difficulty: 'Moyen' as const, icon: '⭐' },
  { title: 'Le grand défi', duration: '15 min', difficulty: 'Difficile' as const, icon: '🏆' },
];

const meta: Meta<typeof DashboardLayout> = {
  title: 'Organisms/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {
  args: {
    userName: 'Lenny',
    avatarSrc: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lenny',
    stats,
    missions,
    navItems,
    activeNavId: 'home',
  },
};

// Story interactive complète
export const Interactive: Story = {
  render: () => {
    const [activeNavId, setActiveNavId] = useState('home');
    return (
      <DashboardLayout
        userName="Lenny"
        avatarSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=Lenny"
        stats={stats}
        missions={missions}
        navItems={navItems}
        activeNavId={activeNavId}
        onNavigate={setActiveNavId}
        onMissionClick={(index) => alert(`Mission ${index + 1} sélectionnée !`)}
        onSettingsClick={() => alert('Paramètres')}
      />
    );
  },
};

export const NewUser: Story = {
  args: {
    userName: 'Emma',
    stats: [
      { value: '0', label: 'Missions faites' },
      { value: '-', label: 'Réussite' },
      { value: '0', label: 'Badges' },
    ],
    missions: [
      { title: 'Première aventure', duration: '3 min', difficulty: 'Facile' as const, icon: '🌟' },
    ],
    navItems,
    activeNavId: 'home',
  },
};
