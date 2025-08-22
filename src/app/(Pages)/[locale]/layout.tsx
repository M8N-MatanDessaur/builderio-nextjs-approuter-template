/**
 * @file Root Layout Component
 * @description Base layout template for all pages
 * @property {Object} metadata - SEO metadata
 * @property {React.ReactNode} children - Page content
 */
// Localized pages template
// This layout is used for all pages that don't have a specific layout
// page.tsx will use this layout to render the page content
// This layout can be customized to include a header, footer, or other common elements
import "../../assets/reset.css";
import "../../assets/brand.css";

// Import shared metadata utility
import { generateSiteMetadata } from "@/utils/metadata";

interface layoutParams {
  locale: string;
  page?: string[];
}

// Generate localized metadata dynamically
export async function generateMetadata({ params }: { params: Promise<layoutParams> }) {
  // Get params in a way that doesn't trigger the dynamic API error
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Use the shared metadata utility with the locale
  return generateSiteMetadata(locale);
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
    <html lang={locale}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
