export const dynamic = 'force-static'
export const revalidate = 10

/**
 * @file Dynamic Page Router
 * @description Handles dynamic routing and content fetching from Builder.io
 */

import React from "react";
import { fetchBuilderContent} from "@/utils/builderUtils";
import { getLocaleFromParams } from "@/utils/localeUtils";
import { notFound } from "next/navigation";
import ClientPage from "./ClientPage";

interface PageParams {
  locale: string;
  page?: string[];
}

interface PageProps {
  params: Promise<PageParams>;
}

// Server component for dynamic routing
export default async function Page({ params }: { params: PageProps['params'] }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  const { urlPath, isLocaleValid } = await getLocaleFromParams({
    page: resolvedParams.page,
    locale
  });

  console.log(urlPath, isLocaleValid, locale);
  
  // Handle invalid locales at the server level
  if (!isLocaleValid) {
    // This will trigger Next.js to show the 404 page
    notFound();
  }
  
  // Fetch content with appropriate cache strategy based on URL path type
  const content = await fetchBuilderContent(urlPath, locale, "page");
  
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
