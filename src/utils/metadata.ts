/**
 * @file Metadata Utilities
 * @description Shared functions for metadata generation
 */

/**
 * Generate metadata for the site with optional locale support
 * 
 * @param locale Optional locale string (e.g., 'en', 'fr')
 * @returns Metadata object for Next.js
 */
export function generateSiteMetadata(locale?: string) {
  const baseTitle = 'Next.js Builder.io Template';
  const baseDescription = 'A clean, optimized Next.js and Builder.io template';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

  // Base metadata that's shared between all pages
  const baseMetadata = {
    description: baseDescription,
    metadataBase: new URL(baseUrl),
    formatDetection: {
      telephone: false, // Disable automatic phone number detection
    },
    robots: {
      index: true,
      follow: true
    },
    authors: [
      { name: 'Next.js Builder.io Template' }
    ],
    keywords: ['nextjs', 'builder.io', 'template'],
    icons: {
      icon: '/favicon.ico',
    },
    other: {
      'dns-prefetch': [
        'https://cdn.builder.io',
      ],
      preconnect: [
        'https://cdn.builder.io',
      ]
    }
  };

  // If no locale is provided, return the base metadata
  if (!locale) {
    return {
      title: baseTitle,
      openGraph: {
        title: baseTitle,
        description: baseDescription,
      },
      ...baseMetadata
    };
  }

  // Add locale-specific metadata
  return {
    title: `${baseTitle} | ${locale}`,
    openGraph: {
      title: `${baseTitle} | ${locale}`,
      description: baseDescription,
      locale: locale.replace('-', '_')
    },
    ...baseMetadata
  };
}
