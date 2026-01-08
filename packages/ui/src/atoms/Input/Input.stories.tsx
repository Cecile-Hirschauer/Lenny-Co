import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'votre@email.com',
    type: 'email',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Prenom',
    value: 'Lenny',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    label: 'Mot de passe',
    placeholder: 'Entrez votre mot de passe',
    type: 'password',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    value: 'email-invalide',
    type: 'email',
    error: true,
    errorMessage: 'Veuillez entrer un email valide',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Champ desactive',
    value: 'Non modifiable',
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: 'Rechercher...',
    type: 'text',
  },
};
