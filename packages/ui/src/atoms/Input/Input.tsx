import React from 'react';
import styles from './Input.module.css';

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

export interface InputProps {
  /** Label du champ */
  label?: string;
  /** Placeholder */
  placeholder?: string;
  /** Type de l'input */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  /** Valeur */
  value?: string;
  /** Callback de changement */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Etat d'erreur */
  error?: boolean;
  /** Message d'erreur */
  errorMessage?: string;
  /** Desactive l'input */
  disabled?: boolean;
  /** Nom du champ */
  name?: string;
  /** ID du champ */
  id?: string;
}

export const Input = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error = false,
  errorMessage,
  disabled = false,
  name,
  id,
}: InputProps) => {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`${styles.input} ${error ? styles.inputError : ''} ${error ? styles.inputWithIcon : ''}`}
          aria-invalid={error}
          aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
        />
        {error && (
          <div className={styles.errorIcon}>
            <AlertIcon />
          </div>
        )}
      </div>
      {error && errorMessage && (
        <span id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
