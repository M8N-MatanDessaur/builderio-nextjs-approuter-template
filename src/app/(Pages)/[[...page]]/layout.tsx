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
import "../../assets/reset.css";
import "../../assets/brand.css";

// Import shared metadata utility
import { generateSiteMetadata } from "@/utils/metadata";

// Generate default metadata
export async function generateMetadata() {
  return generateSiteMetadata();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultLocale = "en"; // Default locale for pages without a specific locale
  return (
    <html lang={defaultLocale}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
