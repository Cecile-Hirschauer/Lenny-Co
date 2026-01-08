import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'primary'],
      description: 'Couleur du tag',
    },
    label: {
      control: 'text',
      description: 'Texte du tag',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Difficulty: Story = {
  args: { label: 'Facile', variant: 'success' },
};

export const Duration: Story = {
  args: { label: '5 min', variant: 'neutral' },
};

export const Warning: Story = {
  args: { label: 'Attention', variant: 'warning' },
};

export const Primary: Story = {
  args: { label: 'Nouveau', variant: 'primary' },
};
