import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../../context/ThemeContext';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider defaultPreference="light">
        <div style={{ padding: '2rem', background: 'var(--color-bg-paper)' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle pour basculer entre le mode clair et sombre. Adapté aux enfants avec des icônes visuelles claires.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille du toggle',
    },
    showLabels: {
      control: 'boolean',
      description: 'Afficher le label textuel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

/**
 * Toggle par défaut en taille medium
 */
export const Default: Story = {
  args: {
    size: 'md',
    showLabels: false,
  },
};

/**
 * Petite taille - idéal pour les headers compacts
 */
export const Small: Story = {
  args: {
    size: 'sm',
    showLabels: false,
  },
};

/**
 * Grande taille - plus facile à cliquer pour les enfants
 */
export const Large: Story = {
  args: {
    size: 'lg',
    showLabels: false,
  },
};

/**
 * Avec label textuel pour plus de clarté
 */
export const WithLabel: Story = {
  args: {
    size: 'md',
    showLabels: true,
  },
};

/**
 * Toutes les tailles côte à côte
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <ThemeToggle size="sm" />
        <p style={{ marginTop: '0.5rem', fontSize: '12px', color: 'var(--color-neutral-mid)' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeToggle size="md" />
        <p style={{ marginTop: '0.5rem', fontSize: '12px', color: 'var(--color-neutral-mid)' }}>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeToggle size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '12px', color: 'var(--color-neutral-mid)' }}>Large</p>
      </div>
    </div>
  ),
};

/**
 * Démonstration interactive du changement de thème
 */
export const Interactive: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '2rem',
      borderRadius: 'var(--radius-card)',
      background: 'var(--color-surface)',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-family-base)',
        color: 'var(--color-neutral-dark)',
        margin: 0,
      }}>
        Choisis ton mode !
      </h3>
      <ThemeToggle size="lg" showLabels />
      <p style={{
        fontFamily: 'var(--font-family-base)',
        color: 'var(--color-neutral-mid)',
        fontSize: 'var(--text-caption)',
        margin: 0,
      }}>
        Clique pour changer
      </p>
    </div>
  ),
};
