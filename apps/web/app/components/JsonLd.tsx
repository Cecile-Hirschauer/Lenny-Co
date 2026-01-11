'use client'

import { useSyncExternalStore } from 'react'

interface JsonLdProps {
  data: Record<string, unknown>
}

const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export function JsonLd({ data }: JsonLdProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  )

  if (!isClient) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const SITE_URL = 'https://lenny-and-co.vercel.app'

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lenny & Co',
  applicationCategory: 'EducationalApplication',
  applicationSubCategory: 'Learning Application',
  operatingSystem: 'Web, iOS, Android',
  url: SITE_URL,
  description:
    'Application éducative innovante conçue pour aider les enfants dyslexiques à améliorer leurs compétences en lecture. Utilise la technologie OCR pour scanner des textes et propose des exercices ludiques adaptés.',
  inLanguage: 'fr',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Scan OCR intelligent pour numériser des textes',
    'Exercices de lecture gamifiés et adaptatifs',
    'Suivi de progression pour les parents',
    'Interface adaptée aux enfants dyslexiques',
    'Tableau de bord orthophoniste',
    'Système de récompenses et badges',
    'Police de caractères optimisée pour la dyslexie',
  ],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Enfants dyslexiques (6-12 ans)',
  },
  author: {
    '@type': 'Organization',
    name: 'Lenny & Co',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lenny & Co',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/LennyCo_logo.png`,
    },
  },
  screenshot: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/LennyCo_logo.png`,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lenny & Co',
  url: SITE_URL,
  logo: `${SITE_URL}/images/LennyCo_logo.png`,
  description:
    'Plateforme éducative collaborative pour accompagner les enfants dyslexiques dans leur apprentissage de la lecture.',
  foundingDate: '2024',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['French'],
  },
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lenny & Co',
  url: SITE_URL,
  description:
    'Application d\'aide à la lecture pour enfants dyslexiques avec scan OCR et exercices gamifiés.',
  inLanguage: 'fr',
  publisher: {
    '@type': 'Organization',
    name: 'Lenny & Co',
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export function JsonLdSchemas() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
    </>
  )
}
