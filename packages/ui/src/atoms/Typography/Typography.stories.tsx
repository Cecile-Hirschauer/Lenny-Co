import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['headingXL', 'headingLG', 'headingMD', 'bodyLG', 'bodyMD', 'caption'],
      description: 'Style typographique',
    },
    children: {
      control: 'text',
      description: 'Contenu textuel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const HeadingXL: Story = {
  args: {
    variant: 'headingXL',
    children: 'Bienvenue Lenny !',
  },
};

export const HeadingLG: Story = {
  args: {
    variant: 'headingLG',
    children: 'Titre de section',
  },
};

export const HeadingMD: Story = {
  args: {
    variant: 'headingMD',
    children: 'Titre de carte',
  },
};

export const BodyDys: Story = {
  args: {
    variant: 'bodyLG',
    children:
      "Voici un texte long optimisé pour la lecture. L'interligne est de 1.7 pour bien aérer les mots.",
  },
};

export const BodyMD: Story = {
  args: {
    variant: 'bodyMD',
    children: 'Texte standard pour le contenu général.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Mention légale ou note discrète',
  },
};
