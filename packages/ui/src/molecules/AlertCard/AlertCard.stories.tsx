import type { Meta, StoryObj } from '@storybook/react';
import { AlertCard } from './AlertCard';

const meta: Meta<typeof AlertCard> = {
  title: 'Molecules/AlertCard',
  component: AlertCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['danger', 'info', 'success', 'warning'],
      description: 'Type d\'alerte',
    },
    title: {
      control: 'text',
      description: 'Titre de l\'alerte',
    },
    message: {
      control: 'text',
      description: 'Message de l\'alerte',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Composant AlertCard pour afficher des alertes et conseils avec différents variants colorés.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertCard>;

// Alerte Danger (Rouge) - Attention requise
export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Attention requise',
    message: 'Confusions b/d fréquentes détectées. Nous recommandons des exercices ciblés.',
  },
};

// Alerte Info (Bleu) - Conseil du jour
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Conseil du jour',
    message: 'Fais une pause de 20 minutes entre chaque session pour une meilleure mémorisation.',
  },
};

// Alerte Success (Vert)
export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Objectif atteint !',
    message: 'Lenny a terminé toutes ses missions de la semaine avec succès.',
  },
};

// Alerte Warning (Orange)
export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Rappel',
    message: 'Il reste 2 missions à compléter avant la fin de la semaine.',
  },
};

// Toutes les variantes ensemble
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <AlertCard
        variant="danger"
        title="Attention requise"
        message="Confusions b/d fréquentes détectées."
      />
      <AlertCard
        variant="info"
        title="Conseil du jour"
        message="Fais une pause de 20 minutes entre chaque session."
      />
      <AlertCard
        variant="success"
        title="Bravo !"
        message="Mission terminée avec succès."
      />
      <AlertCard
        variant="warning"
        title="Rappel"
        message="N'oublie pas ta session quotidienne."
      />
    </div>
  ),
};
