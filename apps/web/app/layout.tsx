import type { Metadata } from 'next'
import { getThemeInitScript } from '@lenny/ui'
import { Providers } from './providers'
import './globals.css'
import '@lenny/ui/tokens.css'

export const metadata: Metadata = {
  title: 'Lenny & Co',
  description: 'Apprendre à lire en s\'amusant - Plateforme ludique pour enfants dyslexiques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Script pour éviter le flash de thème incorrect */}
        <script
          dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
