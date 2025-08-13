export const dynamic = 'force-static'
export const revalidate = 10

/**
 * @file Dynamic Page Router
 * @description Handles dynamic routing and content fetching from Builder.io
 */

import { fetchBuilderContent} from "@/utils/builderUtils";
import { getLocaleFromParams } from "@/utils/localeUtils";
import { notFound } from "next/navigation";
import BuilderPageRenderer from "@/components/common/BuilderPageRenderer";

// Page parameters interface
interface PageParams {
  locale: string;
  page?: string[];
}

// Page component props
interface PageProps {
  params: Promise<PageParams>;
}

/**
 * @file Dynamic Page Router
 * @description Handles dynamic routing and content fetching from Builder.io
 */
export default async function Page({ params }: { params: PageProps['params'] }) {
  const resolvedParams = await params; // Wait for params to resolve
  const locale = resolvedParams.locale; // Get locale from params
  
  // Get URL path and validate locale
  const { urlPath, isLocaleValid } = await getLocaleFromParams({
    page: resolvedParams.page,
    locale
  });
  
  // Handle invalid locales at the server level
  if (!isLocaleValid) {
    // This will trigger Next.js to show the 404 page
    notFound();
  }
  
  // Fetch content with appropriate cache strategy based on URL path type
  const content = await fetchBuilderContent(urlPath, locale, "page");
  
  return (
      <BuilderPageRenderer 
        content={content} 
        locale={locale} 
      />
  );
}
