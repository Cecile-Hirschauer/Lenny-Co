import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Valeur à afficher',
    },
    label: {
      control: 'text',
      description: 'Libellé de la statistique',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Missions: Story = {
  args: { value: '12', label: 'Missions faites' },
};

export const SuccessRate: Story = {
  args: { value: '85%', label: 'Réussite' },
};

export const Badges: Story = {
  args: { value: '5', label: 'Badges gagnés' },
};
