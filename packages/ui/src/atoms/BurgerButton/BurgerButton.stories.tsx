import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BurgerButton } from './BurgerButton';

const meta: Meta<typeof BurgerButton> = {
  title: 'Atoms/BurgerButton',
  component: BurgerButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
    docs: {
      description: {
        component: 'Bouton hamburger pour la navigation mobile. Visible uniquement sur les petits écrans (< 1024px) dans le Header.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Etat ouvert/ferme du menu. Quand ouvert, les lignes forment une croix.',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback appele au clic pour toggle le menu mobile.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BurgerButton>;

/**
 * Etat ferme (par defaut) : 3 lignes horizontales
 */
export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

/**
 * Etat ouvert : les lignes forment une croix (X)
 * Animation fluide entre les deux etats
 */
export const Open: Story = {
  args: {
    isOpen: true,
  },
};

/**
 * Demo interactive : cliquez pour voir l'animation
 */
export const Interactive: Story = {
  args: {
    isOpen: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Cliquez sur le bouton pour voir l\'animation de transition entre les etats.',
      },
    },
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = React.useState(args.isOpen);
    return (
      <BurgerButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
    );
  },
};
