'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
import { BurgerButton } from '../../atoms/BurgerButton/BurgerButton';

export interface HeaderProps {
  /** URL ou chemin de l'image du logo */
  logoSrc: string;
  /** Liens de navigation (ex: [{ label: 'Accueil', href: '#' }]) */
  links: Array<{ label: string; href: string }>;
  /** Actions aux clics des boutons */
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export const Header = ({ logoSrc, links, onLoginClick, onSignupClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* LOGO */}
        <div className={styles.logoWrapper}>
          <img src={logoSrc} alt="Logo" style={{ height: 40 }} />
        </div>

        {/* --- NAVIGATION DESKTOP --- */}
        <nav className={styles.desktopNav}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.desktopActions}>
          <button className={styles.textLink} onClick={onLoginClick}>Connexion</button>
          <Button label="S'inscrire" variant="primary" onClick={onSignupClick} />
        </div>

        {/* --- MOBILE --- */}

        {/* 1. L'Atome Burger */}
        <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />

        {/* 2. Le Menu Overlay (Visible uniquement si isMenuOpen est true) */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNavLinks}>
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={toggleMenu}>
                <Typography variant="headingMD">{link.label}</Typography>
              </a>
            ))}
            <hr style={{ width: '100%', borderColor: '#E2E8F0', margin: '24px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
              <Button label="Connexion" variant="outline" onClick={onLoginClick} />
              <Button label="S'inscrire" variant="primary" onClick={onSignupClick} />
            </div>
          </nav>
        </div>

      </div>
    </header>
  );
};
