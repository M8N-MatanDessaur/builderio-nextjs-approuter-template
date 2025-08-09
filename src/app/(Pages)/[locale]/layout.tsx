/**
 * @file Root Layout Component
 * @description Base layout template for all pages
 * @property {Object} metadata - SEO metadata
 * @property {React.ReactNode} children - Page content
 */
// Default pages template
// This layout is used for all pages that don't have a specific layout
// page.tsx will use this layout to render the page content
// This layout can be customized to include a header, footer, or other common elements

import "../../assets/fonts.css";
import "../../assets/reset.css";
import "../../assets/brand.css";

interface layoutParams {
  locale: string;
  page?: string[];
}

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<layoutParams> }) {
  // Get params in a way that doesn't trigger the dynamic API error
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  return {
    title: `Next.js Builder.io Template | ${locale}`,
    description: "A clean, optimized Next.js and Builder.io template",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
    formatDetection: {
      telephone: false, // Disable automatic phone number detection
    },
    openGraph: {
      title: `Next.js Builder.io Template | ${locale}`,
      description: "A clean, optimized Next.js and Builder.io template",
      locale: locale.replace('-', '_')
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
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<layoutParams>;
}) {
  // Get params in a way that doesn't trigger the dynamic API error
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  return (
    <html lang={locale.split('-')[1]}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
