import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SignupForm } from './SignupForm';
import { Modal } from '../../molecules/Modal/Modal';
import { Button } from '../../atoms/Button/Button';

const meta: Meta<typeof SignupForm> = {
  title: 'Organisms/SignupForm',
  component: SignupForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 420, padding: 24, backgroundColor: '#fff', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => alert(`Inscription: ${data.email}`),
    onSwitchToLogin: () => alert('Vers connexion'),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Cet email est deja utilise',
    onSubmit: (data) => alert(`Inscription: ${data.email}`),
  },
};

export const InModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <Button label="Ouvrir Inscription" variant="primary" onClick={() => setIsOpen(true)} />
        <Modal
          title="Creer un compte"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <SignupForm
            onSubmit={(data) => {
              alert(`Inscription: ${data.email}`);
              setIsOpen(false);
            }}
            onSwitchToLogin={() => alert('Vers connexion')}
          />
        </Modal>
      </>
    );
  },
};
