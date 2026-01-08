import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    logoSrc: {
      description: 'URL ou chemin de l\'image du logo (grande taille recommandée: 200px+)',
      control: 'text',
    },
    links: {
      description: 'Liens de navigation',
    },
    onLoginClick: {
      description: 'Callback au clic sur "Connexion"',
      action: 'login clicked',
    },
    onSignupClick: {
      description: 'Callback au clic sur "S\'inscrire"',
      action: 'signup clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Logo placeholder grande taille pour simuler le vrai logo
const largeLogo = 'https://placehold.co/300x200/3B82F6/FFFFFF?text=Lenny+%26+Co';

export const Default: Story = {
  args: {
    logoSrc: largeLogo,
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => console.log('Connexion cliquee'),
    onSignupClick: () => console.log('Inscription cliquee'),
  },
};

export const WithManyLinks: Story = {
  args: {
    logoSrc: largeLogo,
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Tarifs', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => console.log('Connexion'),
    onSignupClick: () => console.log('Inscription'),
  },
};

export const MinimalLinks: Story = {
  args: {
    logoSrc: largeLogo,
    links: [
      { label: 'Accueil', href: '#' },
    ],
  },
};

/**
 * Vue mobile : le burger menu est visible et la navigation desktop est cachée.
 * Cliquez sur le burger pour ouvrir le menu overlay.
 */
export const Mobile: Story = {
  args: {
    logoSrc: largeLogo,
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => console.log('Connexion'),
    onSignupClick: () => console.log('Inscription'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'En mode mobile, le burger menu apparaît et permet d\'accéder à la navigation.',
      },
    },
  },
};

/**
 * Vue tablette : comportement intermédiaire
 */
export const Tablet: Story = {
  args: {
    logoSrc: largeLogo,
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => console.log('Connexion'),
    onSignupClick: () => console.log('Inscription'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
