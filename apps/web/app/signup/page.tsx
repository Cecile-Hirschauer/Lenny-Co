'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignupForm, Typography, Header, SignupFormData } from '@lenny/ui';
import { AuthService, getAuthErrorMessage } from '../../services/AuthService';
import styles from './page.module.css';

// Icône check pour les features
const CheckIcon = () => (
  <svg
    className={styles.featureIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

/**
 * SignupPage - Page d'inscription
 *
 * Patterns utilisés:
 * - Container/Presentational: Cette page orchestre le SignupForm
 * - Service Layer: Utilise AuthService pour la logique métier
 */
export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      await AuthService.register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      router.push('/dashboard');
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToLogin = () => {
    router.push('/login');
  };

  const features = [
    'Suivi personnalisé des progrès',
    'Exercices adaptés à la dyslexie',
    'Rapports détaillés hebdomadaires',
    'Support pédagogique inclus',
  ];

  return (
    <div className={styles.page}>
      <Header
        logoSrc="/images/LennyCo_logo.png"
        links={[{ label: 'Accueil', href: '/' }]}
        onLoginClick={handleSwitchToLogin}
        onSignupClick={() => {}}
      />

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <Typography variant="headingLG">Créer un compte Famille</Typography>
          <Typography variant="bodyMD" className={styles.subtitle}>
            Rejoignez l&apos;aventure Lenny & Co et aidez votre enfant à progresser.
          </Typography>
        </div>

        {/* Signup Form */}
        <div className={styles.formWrapper}>
          <SignupForm
            onSubmit={handleSignup}
            isLoading={isLoading}
            error={error || undefined}
            onSwitchToLogin={handleSwitchToLogin}
          />

          {/* Features List */}
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <CheckIcon />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
