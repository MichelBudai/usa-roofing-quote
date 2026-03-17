import { roofingConfig } from "./sites/roofing";

const SITE_CONFIGS_BY_SLUG = {
  "roofing": roofingConfig,
} as const;

const SITE_CONFIGS_BY_HOST: Record<string, typeof roofingConfig> = {
  "usa-roofing-quote.com": roofingConfig,
  "www.usa-roofing-quote.com": roofingConfig,
  "localhost:3000": roofingConfig,
};

export type SiteConfig = typeof roofingConfig;

export function getSiteConfig(hostname: string): SiteConfig {
  return SITE_CONFIGS_BY_HOST[hostname] ?? roofingConfig;
}

export function getSiteConfigBySlug(slug: string): SiteConfig {
  return SITE_CONFIGS_BY_SLUG[slug as keyof typeof SITE_CONFIGS_BY_SLUG] ?? roofingConfig;
}
