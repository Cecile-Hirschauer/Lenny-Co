import type { Meta, StoryObj } from '@storybook/react';
import { BurgerButton } from './BurgerButton';

const meta: Meta<typeof BurgerButton> = {
  title: 'Atoms/BurgerButton',
  component: BurgerButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Etat ouvert/ferme du menu',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof BurgerButton>;

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
