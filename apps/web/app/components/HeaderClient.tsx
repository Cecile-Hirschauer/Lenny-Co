'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@lenny/ui';

export function HeaderClient() {
  const router = useRouter();

  return (
    <Header
      logoSrc="/images/LennyCo_logo.png"
      links={[
        { label: 'Accueil', href: '#' },
        { label: 'A propos', href: '#' },
        { label: 'Contact', href: '#' },
      ]}
      onLoginClick={() => router.push('/login')}
      onSignupClick={() => router.push('/signup')}
    />
  );
}
