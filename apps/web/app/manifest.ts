import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lenny & Co - Aide à la lecture pour enfants dyslexiques',
    short_name: 'Lenny & Co',
    description:
      'Application éducative ludique pour aider les enfants dyslexiques à progresser en lecture avec scan OCR et exercices gamifiés.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'fr',
    categories: ['education', 'kids', 'health'],
    icons: [
      {
        src: '/images/LennyCo_logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/LennyCo_logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
