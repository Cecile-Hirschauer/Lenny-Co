import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Titre du Modal',
    isOpen: true,
    onClose: () => {},
    children: (
      <Typography variant="bodyMD">
        Contenu du modal. Vous pouvez mettre n'importe quel contenu ici.
      </Typography>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Confirmation',
    isOpen: true,
    onClose: () => {},
    children: (
      <Typography variant="bodyMD">
        Etes-vous sur de vouloir continuer ?
      </Typography>
    ),
    footer: (
      <>
        <Button label="Confirmer" variant="primary" />
        <Button label="Annuler" variant="outline" />
      </>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <Button label="Ouvrir le modal" variant="primary" onClick={() => setIsOpen(true)} />
        <Modal
          title="Modal Interactif"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footer={
            <Button label="Fermer" variant="outline" onClick={() => setIsOpen(false)} />
          }
        >
          <Typography variant="bodyMD">
            Ce modal peut etre ouvert et ferme. Essayez de cliquer sur l'overlay ou appuyez sur Escape.
          </Typography>
        </Modal>
      </div>
    );
  },
};
