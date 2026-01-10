'use client';

import { memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@lenny/ui';

export const HeaderClient = memo(function HeaderClient() {
  const router = useRouter();

  return (
    <Header
      logoElement={
        <Image
          src="/images/LennyCo_logo.png"
          alt="Logo Lenny & Co"
          width={120}
          height={120}
          priority
          sizes="120px"
        />
      }
      links={[
        { label: 'Accueil', href: '#' },
        { label: 'A propos', href: '#' },
        { label: 'Contact', href: '#' },
      ]}
      onLoginClick={() => router.push('/login')}
      onSignupClick={() => router.push('/signup')}
    />
  );
});
