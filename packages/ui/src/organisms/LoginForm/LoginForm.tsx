'use client';

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';

export interface LoginFormProps {
  /** Callback lors de la soumission */
  onSubmit?: (data: { email: string; password: string }) => void;
  /** Callback pour mot de passe oublie */
  onForgotPassword?: () => void;
  /** Callback pour basculer vers inscription */
  onSwitchToSignup?: () => void;
  /** Chargement en cours */
  isLoading?: boolean;
  /** Erreur generale */
  error?: string;
}

export const LoginForm = ({
  onSubmit,
  onForgotPassword,
  onSwitchToSignup,
  isLoading = false,
  error,
}: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalide';
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit?.({ email, password });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <Input
          label="Email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          errorMessage={errors.email}
        />

        <Input
          label="Mot de passe"
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          errorMessage={errors.password}
        />

        {onForgotPassword && (
          <div className={styles.forgotPassword}>
            <button
              type="button"
              className={styles.forgotPasswordLink}
              onClick={onForgotPassword}
            >
              Mot de passe oublie ?
            </button>
          </div>
        )}
      </div>

      {error && (
        <Typography variant="caption" component="p" style={{ color: 'var(--color-error, #E11D48)', textAlign: 'center' }}>
          {error}
        </Typography>
      )}

      <div className={styles.actions}>
        <Button
          label={isLoading ? 'Connexion...' : 'Se connecter'}
          variant="primary"
          type="submit"
          disabled={isLoading}
        />
      </div>

      {onSwitchToSignup && (
        <div className={styles.switchText}>
          <Typography variant="bodyMD" component="span">
            Pas encore de compte ?{' '}
          </Typography>
          <button
            type="button"
            className={styles.switchLink}
            onClick={onSwitchToSignup}
          >
            S'inscrire
          </button>
        </div>
      )}
    </form>
  );
};
