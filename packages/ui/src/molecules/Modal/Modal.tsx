'use client';

import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { Typography } from '../../atoms/Typography/Typography';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export interface ModalProps {
  /** Titre du modal */
  title?: string;
  /** Contenu du modal */
  children: React.ReactNode;
  /** Modal ouvert ou ferme */
  isOpen: boolean;
  /** Callback de fermeture */
  onClose: () => void;
  /** Footer optionnel */
  footer?: React.ReactNode;
  /** Fermer en cliquant sur l'overlay */
  closeOnOverlay?: boolean;
}

export const Modal = ({
  title,
  children,
  isOpen,
  onClose,
  footer,
  closeOnOverlay = true,
}: ModalProps) => {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlay && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        {title && (
          <div className={styles.header}>
            <Typography variant="headingLG" component="h2" className={styles.title}>
              {title}
            </Typography>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Fermer"
            >
              <CloseIcon />
            </button>
          </div>
        )}

        <div className={styles.content}>
          {children}
        </div>

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
