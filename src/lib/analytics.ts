export const ANALYTICS_PRODUCT_IDS = [
  "classic_box",
  "cozy_box",
  "bookmarks",
  "tote_bags",
  "knitted_sleeve",
  "black_white_sleeve",
  "red_white_sleeve",
  "pink_green_cover",
  "kindle_vmb_sleeve",
] as const;

export type AnalyticsProductId = (typeof ANALYTICS_PRODUCT_IDS)[number];
export type AnalyticsLanguageCode = "en" | "es";

type DataLayerEntry = [command: string, ...values: unknown[]];
type AnalyticsWindow = Window & Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
    gtag?: (...args: DataLayerEntry) => void;
  }
}

const rawMeasurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() ?? "";
const measurementId = /^G-[A-Z0-9]+$/.test(rawMeasurementId) ? rawMeasurementId : null;
const scriptId = "fantasybox-ga4";

let initialized = false;
let enabled = false;
let pageViewTracked = false;

export function isAnalyticsConfigured(): boolean {
  return measurementId !== null;
}

function setGaDisabled(disabled: boolean): void {
  if (!measurementId) return;
  (window as AnalyticsWindow)[`ga-disable-${measurementId}`] = disabled;
}

function ensureGtag(): void {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? ((...args: DataLayerEntry) => {
    window.dataLayer?.push(args);
  });
}

function loadGoogleTag(): void {
  if (!measurementId || document.getElementById(scriptId)) return;

  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function enableAnalytics(): boolean {
  if (!measurementId) return false;

  ensureGtag();
  setGaDisabled(false);
  enabled = true;

  if (!initialized) {
    window.gtag?.("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag?.("js", new Date());
    window.gtag?.("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    loadGoogleTag();
    initialized = true;
  } else {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
  }

  return true;
}

function expireGoogleAnalyticsCookies(): void {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  }
}

export function disableAnalytics(): void {
  enabled = false;

  if (!measurementId || !initialized) return;

  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  setGaDisabled(true);
  expireGoogleAnalyticsCookies();
}

export function trackPageView(): void {
  if (!measurementId || !enabled || !initialized || pageViewTracked) return;

  window.gtag?.("event", "page_view", {
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_title: document.title,
  });
  pageViewTracked = true;
}

export function trackProductRequestOpened(productId: AnalyticsProductId): void {
  if (!enabled || !initialized) return;
  window.gtag?.("event", "product_request_opened", { product_id: productId });
}

export function trackQuoteRequestSubmitted(productId: AnalyticsProductId): void {
  if (!enabled || !initialized) return;
  window.gtag?.("event", "quote_request_submitted", { product_id: productId });
}

export function trackLanguageChanged(languageCode: AnalyticsLanguageCode): void {
  if (!enabled || !initialized) return;
  window.gtag?.("event", "language_changed", { language_code: languageCode });
}
