import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Valeur à afficher (grosse typographie colorée)',
    },
    label: {
      control: 'text',
      description: 'Libellé de la statistique',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'neutral'],
      description: 'Couleur de la valeur',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Carte de statistique avec une grosse valeur colorée et un label. Utilisé dans le dashboard parent.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

// Temps total - Primary (Bleu)
export const TempsTotal: Story = {
  args: {
    value: '2h 15',
    label: 'Temps total',
    variant: 'primary',
  },
};

// Missions - Success (Vert)
export const Missions: Story = {
  args: {
    value: '12/15',
    label: 'Missions',
    variant: 'success',
  },
};

// Réussite - Warning (Orange)
export const Reussite: Story = {
  args: {
    value: '85%',
    label: 'Réussite',
    variant: 'warning',
  },
};

// Badges - Neutral (Gris)
export const Badges: Story = {
  args: {
    value: '3',
    label: 'Badges',
    variant: 'neutral',
  },
};

// Grille 2x2 comme dans le dashboard
export const DashboardGrid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        maxWidth: '340px',
      }}
    >
      <StatCard value="2h 15" label="Temps total" variant="primary" />
      <StatCard value="12/15" label="Missions" variant="success" />
      <StatCard value="85%" label="Réussite" variant="warning" />
      <StatCard value="3" label="Badges" variant="neutral" />
    </div>
  ),
};

// Sans variant (défaut: primary)
export const Default: Story = {
  args: {
    value: '42',
    label: 'Score',
  },
};
