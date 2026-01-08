import type { Meta, StoryObj } from '@storybook/react';
import { MissionCard } from './MissionCard';

const meta: Meta<typeof MissionCard> = {
  title: 'Molecules/MissionCard',
  component: MissionCard,
  tags: ['autodocs'],
  argTypes: {
    difficulty: {
      control: 'select',
      options: ['Facile', 'Moyen', 'Difficile'],
      description: 'Niveau de difficulté',
    },
    title: {
      control: 'text',
      description: 'Titre de la mission',
    },
    duration: {
      control: 'text',
      description: 'Durée estimée',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof MissionCard>;

export const Reading: Story = {
  args: {
    title: 'La chasse aux mots',
    duration: '5 min',
    difficulty: 'Facile',
    icon: '🦁',
  },
};

export const Math: Story = {
  args: {
    title: 'Compter les étoiles',
    duration: '10 min',
    difficulty: 'Moyen',
    icon: '⭐',
  },
};

export const Challenge: Story = {
  args: {
    title: 'Le grand défi',
    duration: '15 min',
    difficulty: 'Difficile',
    icon: '🏆',
  },
};
