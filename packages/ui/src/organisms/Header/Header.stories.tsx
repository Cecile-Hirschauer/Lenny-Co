import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#F8FAFC' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    userName: {
      control: 'text',
      description: 'Prénom de l\'utilisateur',
    },
    avatarSrc: {
      control: 'text',
      description: 'URL de l\'avatar',
    },
    onSettingsClick: { action: 'settings clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    userName: 'Lenny',
    avatarSrc: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lenny',
  },
};

export const WithoutAvatar: Story = {
  args: {
    userName: 'Emma',
  },
};

export const LongName: Story = {
  args: {
    userName: 'Jean-Baptiste',
    avatarSrc: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JB',
  },
};
