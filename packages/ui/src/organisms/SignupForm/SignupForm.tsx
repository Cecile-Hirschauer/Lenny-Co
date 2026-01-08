'use client';

import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';

export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupFormProps {
  /** Callback lors de la soumission */
  onSubmit?: (data: SignupFormData) => void;
  /** Callback pour basculer vers connexion */
  onSwitchToLogin?: () => void;
  /** Chargement en cours */
  isLoading?: boolean;
  /** Erreur generale */
  error?: string;
}

export const SignupForm = ({
  onSubmit,
  onSwitchToLogin,
  isLoading = false,
  error,
}: SignupFormProps) => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormData | 'terms', string>>>({});

  const handleChange = (field: keyof SignupFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof SignupFormData | 'terms', string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prenom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmez le mot de passe';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    if (!acceptTerms) {
      newErrors.terms = 'Vous devez accepter les conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit?.(formData);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <div className={styles.row}>
          <Input
            label="Prenom"
            type="text"
            placeholder="Votre prenom"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            error={!!errors.firstName}
            errorMessage={errors.firstName}
          />

          <Input
            label="Nom"
            type="text"
            placeholder="Votre nom"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            error={!!errors.lastName}
            errorMessage={errors.lastName}
          />
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange('email')}
          error={!!errors.email}
          errorMessage={errors.email}
        />

        <Input
          label="Mot de passe"
          type="password"
          placeholder="Minimum 8 caracteres"
          value={formData.password}
          onChange={handleChange('password')}
          error={!!errors.password}
          errorMessage={errors.password}
        />

        <Input
          label="Confirmer le mot de passe"
          type="password"
          placeholder="Retapez votre mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          error={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
        />

        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="accept-terms"
            className={styles.checkboxInput}
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="accept-terms" className={styles.checkboxLabel}>
            J'accepte les{' '}
            <a href="#" className={styles.checkboxLink}>conditions d'utilisation</a>
            {' '}et la{' '}
            <a href="#" className={styles.checkboxLink}>politique de confidentialite</a>
          </label>
        </div>
        {errors.terms && <span className={styles.errorText}>{errors.terms}</span>}
      </div>

      {error && (
        <Typography variant="caption" component="p" style={{ color: 'var(--color-error, #E11D48)', textAlign: 'center' }}>
          {error}
        </Typography>
      )}

      <div className={styles.actions}>
        <Button
          label={isLoading ? 'Inscription...' : 'S\'inscrire'}
          variant="primary"
          type="submit"
          disabled={isLoading}
        />
      </div>

      {onSwitchToLogin && (
        <div className={styles.switchText}>
          <Typography variant="bodyMD" component="span">
            Deja un compte ?{' '}
          </Typography>
          <button
            type="button"
            className={styles.switchLink}
            onClick={onSwitchToLogin}
          >
            Se connecter
          </button>
        </div>
      )}
    </form>
  );
};
