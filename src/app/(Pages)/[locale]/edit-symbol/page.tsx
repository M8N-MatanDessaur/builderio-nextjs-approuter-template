export const dynamic = 'force-static'
export const revalidate = 10

/**
 * @file Symbol Preview Page
 * @description Server component for rendering symbol previews dynamically
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
 * @file Symbol Preview Page
 * @description Server component for rendering symbol previews dynamically
 */
export default async function Page({ params }: { params: PageProps['params'] }) {
  const resolvedParams = await params; // Wait for params to resolve
  const locale = resolvedParams.locale; // Get locale from params

  // Get URL path and validate locale
  const { isLocaleValid } = await getLocaleFromParams({ 
    page: resolvedParams.page,
    locale: locale
  });

  // Handle invalid locales at the server level
  if (!isLocaleValid) {
    // This will trigger Next.js to show the 404 page
    notFound();
  }

  const urlPath = "/edit-symbol";
  const builderModelName = "symbol"; // Model name for the symbol
  const content = await fetchBuilderContent(urlPath, locale, builderModelName);
  
  return (
      <BuilderPageRenderer 
        content={content} 
        locale={locale} 
        model={builderModelName}
      />
  );
}
