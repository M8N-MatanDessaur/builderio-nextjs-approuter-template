// src/utils/builderUtils.ts

import { builder } from "@builder.io/sdk";

// Initialize Builder.io with the public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

/**
 * Fetch content dynamically from Builder.io.
 * Assumes that the locale has already been validated.
 * Optimized with Next.js 15 cache controls.
 *
 * @param urlPath The URL path of the content (e.g., "/blog/search").
 * @param locale The locale of the content
 * @param builderModelName The Builder.io model name (e.g., "page", "blog-search-page").
 * @param options Additional options including revalidation timeframe
 * @returns The fetched content if found, or null if not found.
 */
export const fetchBuilderContent = async (
  urlPath: string,
  locale: string,
  builderModelName: string,
  options?: {
    revalidate?: number;
    tags?: string[];
    noCache?: boolean;
    noStore?: boolean;
  }
) => {
  try {
    const content = await builder
      .get(builderModelName, {
        userAttributes: {
          urlPath,
          locale
        },
        options: {
          locale,
          enrich: true,
          includeRefs: true,
        },
        cacheSeconds: options?.revalidate || 0,
        staleCacheSeconds: 86400,
      })
      .toPromise();

    // If no content found, return null
    if (!content) {
      return null;
    }

    return content;
  } catch (error) {
    console.error(
      "BuilderContentFetchError",
      `Failed to fetch content for ${urlPath} in locale ${locale}: ${error instanceof Error ? error.message : String(error)}`,
      "fetchBuilderContent",
      {
        urlPath,
        locale,
        model: builderModelName,
      }
    );
    if ((error as any)?.response?.status === 404) {
      return null;
    }
    throw error;
  }
};
