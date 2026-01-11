import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'
import { getThemeInitScript } from '@lenny/ui'
import { Providers } from './providers'
import { JsonLdSchemas } from './components/JsonLd'
import './globals.css'
import '@lenny/ui/tokens.css'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-family-base',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const SITE_URL = 'https://lenny-and-co.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lenny & Co | Application d\'aide à la lecture pour enfants dyslexiques',
    template: '%s | Lenny & Co',
  },
  description:
    'Lenny & Co est une application éducative qui aide les enfants dyslexiques à améliorer leur lecture grâce à des exercices ludiques, un scan OCR intelligent et un suivi personnalisé pour parents et orthophonistes.',
  keywords: [
    'dyslexie',
    'aide lecture',
    'enfants dyslexiques',
    'application éducative',
    'orthophonie',
    'apprentissage lecture',
    'exercices dyslexie',
    'OCR éducatif',
    'suivi parental',
    'gamification éducation',
  ],
  authors: [{ name: 'Lenny & Co Team' }],
  creator: 'Lenny & Co',
  publisher: 'Lenny & Co',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Lenny & Co',
    title: 'Lenny & Co | Aide à la lecture pour enfants dyslexiques',
    description:
      'Application éducative ludique pour aider les enfants dyslexiques à progresser en lecture avec scan OCR, exercices gamifiés et suivi parental.',
    images: [
      {
        url: '/images/LennyCo_logo.png',
        width: 1200,
        height: 630,
        alt: 'Lenny & Co - Application d\'aide à la lecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenny & Co | Aide à la lecture pour enfants dyslexiques',
    description:
      'Application éducative ludique pour aider les enfants dyslexiques à progresser en lecture.',
    images: ['/images/LennyCo_logo.png'],
    creator: '@lennyandco',
  },
  category: 'education',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={lexend.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
        />
        <JsonLdSchemas />
      </head>
      <body className={lexend.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
