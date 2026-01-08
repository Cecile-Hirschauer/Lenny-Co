import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Style visuel du bouton',
    },
    label: {
      control: 'text',
      description: 'Texte du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'État désactivé',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Scénario 1 : Le bouton principal (Bleu)
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: "Commencer l'aventure",
  },
};

// Scénario 2 : Le bouton secondaire (Orange - Mascotte)
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Débloquer Badge',
  },
};

// Scénario 3 : Le bouton contour (Connexion)
export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Se connecter',
  },
};

// Scénario 4 : Bouton désactivé
export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Indisponible',
    disabled: true,
  },
};
