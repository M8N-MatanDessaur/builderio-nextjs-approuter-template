import { createAdminApiClient } from '@builder.io/admin-sdk';
const adminSDK = createAdminApiClient(process.env.BUILDER_PRIVATE_KEY!);

// List of valid locales in your application from Builder.io settings
const builderSettings = await adminSDK.query({settings: true,});
export const VALID_LOCALES = builderSettings?.data?.settings?.customTargetingAttributes?.locale?.enum || [];
export const DEFAULT_LOCALE = VALID_LOCALES[-1] || 'en';


/**
 * Checks if a given locale is valid by comparing it against the predefined list of valid locales.
 * @param locale The locale string to validate.
 * @returns `true` if the locale is in the VALID_LOCALES list, otherwise `false`.
 */
export const isValidLocale = (locale: string): boolean => {
  return VALID_LOCALES.includes(locale);
};

/**
 * Extract locale and URL path from params
 * @param params Route parameters object
 * @returns Object with locale, urlPath, and isLocaleValid properties
 */
export const getLocaleFromParams = async (params: { page?: string[]; locale?: string }): Promise<{ locale: string; urlPath: string; isLocaleValid: boolean }> => {
  const resolvedParams = await params;
  const pageSegments = resolvedParams.page || [];
  
  // Handle the [locale] route pattern (when locale is explicitly provided in params)
  if (resolvedParams.locale) {
    const isLocaleValid = isValidLocale(resolvedParams.locale);
    return { 
      locale: resolvedParams.locale, // Keep the provided locale for reference
      urlPath: "/" + (pageSegments.join("/") || ""),
      isLocaleValid // This will be false if the locale is invalid
    };
  }
  
  // For [...page] route pattern or default handling
  if (pageSegments.length === 0) {
    // Root URL or empty segments, use default locale
    return {
      locale: DEFAULT_LOCALE,
      urlPath: "/",
      isLocaleValid: true
    };
  }
  
  // Check if first segment is a valid locale
  const firstSegment = pageSegments[0];
  const isFirstSegmentValidLocale = isValidLocale(firstSegment);

  if (isFirstSegmentValidLocale) {
    // First segment is a valid locale
    return {
      locale: firstSegment,
      urlPath: "/" + pageSegments.slice(1).join("/"),
      isLocaleValid: true
    };
  } else {
    // First segment is not a locale, use default
    return {
      locale: DEFAULT_LOCALE,
      urlPath: "/" + pageSegments.join("/"),
      isLocaleValid: true
    };
  }
};