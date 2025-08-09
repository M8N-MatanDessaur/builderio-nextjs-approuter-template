export const dynamic = 'force-static'
export const revalidate = 10

/**
 * @file Symbol Preview Page
 * @description Server component for rendering symbol previews dynamically
 */

import React from "react";
import { fetchBuilderContent } from "@/utils/builderUtils";
import { getLocaleFromParams } from "@/utils/localeUtils";
import ClientPage from "./ClientPage";

interface PageParams {
  locale: string;
}

// Page component props
interface PageProps {
  params: Promise<PageParams>;
}

// Server component for the Symbol Preview Page
const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  const { locale, isLocaleValid } = await getLocaleFromParams({ 
    locale: resolvedParams.locale
  });

  const urlPath = "/symbol-preview/symbol";

  const builderModelName = "symbol";
  const content = await fetchBuilderContent(urlPath, locale, builderModelName);
  
  return (
    <>
      <ClientPage 
        content={content} 
        locale={locale} 
        isValidLocale={isLocaleValid}
      />
    </>
  );
}

export default Page;
