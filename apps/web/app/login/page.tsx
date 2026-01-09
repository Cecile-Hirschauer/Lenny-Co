'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm, Typography, Header } from '@lenny/ui';
import { AuthService, getAuthErrorMessage } from '../../services/AuthService';
import styles from './page.module.css';

/**
 * LoginPage - Page de connexion
 *
 * Patterns utilisés:
 * - Container/Presentational: Cette page orchestre le LoginForm
 * - Service Layer: Utilise AuthService pour la logique métier
 */
export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    setError(null);

    try {
      await AuthService.login({ email: data.email, password: data.password });
      router.push('/dashboard');
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToSignup = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.page}>
      <Header
        logoSrc="/images/LennyCo_logo.png"
        links={[{ label: 'Accueil', href: '/' }]}
        onLoginClick={() => {}}
        onSignupClick={handleSwitchToSignup}
      />

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <Typography variant="headingLG">Ravi de vous revoir !</Typography>
          <Typography variant="bodyMD" className={styles.subtitle}>
            Connectez-vous pour suivre les progrès de votre enfant.
          </Typography>
        </div>

        {/* Login Form */}
        <div className={styles.formWrapper}>
          <LoginForm
            onSubmit={handleLogin}
            isLoading={isLoading}
            error={error || undefined}
            onSwitchToSignup={handleSwitchToSignup}
            onForgotPassword={() => router.push('/forgot-password')}
          />

          {/* Demo Credentials */}
          <div className={styles.demoBox}>
            <div className={styles.demoTitle}>Compte démo</div>
            <div className={styles.demoCredentials}>
              Email: <code>parent@demo.com</code>
              <br />
              Mot de passe: <code>password123</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
