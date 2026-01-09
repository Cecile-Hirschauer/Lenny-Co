'use client';

import { ThemeProvider } from '@lenny/ui';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers - Centralise tous les providers de l'application
 *
 * Responsabilités :
 * - Encapsule les providers côté client (use client)
 * - Permet d'ajouter facilement d'autres providers (auth, etc.)
 * - Sépare la logique client du layout serveur
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultPreference="light">
      {children}
    </ThemeProvider>
  );
}
