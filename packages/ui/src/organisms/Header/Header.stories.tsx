import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logoSrc: 'https://placehold.co/120x40?text=LennyLogo',
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => alert('Connexion cliquee'),
    onSignupClick: () => alert('Inscription cliquee'),
  },
};

export const WithManyLinks: Story = {
  args: {
    logoSrc: 'https://placehold.co/120x40?text=Logo',
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Tarifs', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => alert('Connexion'),
    onSignupClick: () => alert('Inscription'),
  },
};

export const MinimalLinks: Story = {
  args: {
    logoSrc: 'https://placehold.co/100x40?text=Mini',
    links: [
      { label: 'Accueil', href: '#' },
    ],
  },
};

export const Mobile: Story = {
  args: {
    logoSrc: 'https://placehold.co/120x40?text=LennyLogo',
    links: [
      { label: 'Accueil', href: '#' },
      { label: 'A propos', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    onLoginClick: () => alert('Connexion'),
    onSignupClick: () => alert('Inscription'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
