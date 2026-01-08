import type { Metadata } from 'next'
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
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
