'use client';

import { Header } from '@lenny/ui';

export function HeaderClient() {
  return (
    <Header
      logoSrc="/images/LennyCo_logo.png"
      links={[
        { label: 'Accueil', href: '#' },
        { label: 'A propos', href: '#' },
        { label: 'Contact', href: '#' },
      ]}
      onLoginClick={() => console.log('Login')}
      onSignupClick={() => console.log('Signup')}
    />
  );
}
