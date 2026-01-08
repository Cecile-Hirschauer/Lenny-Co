import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Taille de l\'avatar',
    },
    src: {
      control: 'text',
      description: 'URL de l\'image',
    },
    alt: {
      control: 'text',
      description: 'Texte alternatif',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Mascotte: Story = {
  args: {
    size: 'large',
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lenny',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Child',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Parent',
  },
};

export const Fallback: Story = {
  args: {
    size: 'large',
  },
};
