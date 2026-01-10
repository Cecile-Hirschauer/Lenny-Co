import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'
import { getThemeInitScript } from '@lenny/ui'
import { Providers } from './providers'
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

export const metadata: Metadata = {
  title: 'Lenny & Co',
  description: 'Apprendre à lire en s\'amusant - Plateforme ludique pour enfants dyslexiques',
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
      </head>
      <body className={lexend.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
