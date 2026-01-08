import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { Modal } from '../../molecules/Modal/Modal';
import { Button } from '../../atoms/Button/Button';

const meta: Meta<typeof LoginForm> = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 380, padding: 24, backgroundColor: '#fff', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => alert(`Connexion: ${data.email}`),
    onForgotPassword: () => alert('Mot de passe oublie'),
    onSwitchToSignup: () => alert('Vers inscription'),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Email ou mot de passe incorrect',
    onSubmit: (data) => alert(`Connexion: ${data.email}`),
  },
};

export const InModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <Button label="Ouvrir Connexion" variant="primary" onClick={() => setIsOpen(true)} />
        <Modal
          title="Connexion"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <LoginForm
            onSubmit={(data) => {
              alert(`Connexion: ${data.email}`);
              setIsOpen(false);
            }}
            onForgotPassword={() => alert('Mot de passe oublie')}
            onSwitchToSignup={() => alert('Vers inscription')}
          />
        </Modal>
      </>
    );
  },
};
