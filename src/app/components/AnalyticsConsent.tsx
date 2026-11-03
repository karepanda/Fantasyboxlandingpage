import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  disableAnalytics,
  enableAnalytics,
  isAnalyticsConfigured,
  trackPageView,
} from "@/lib/analytics";
import { FantasyButton } from "./landing/FantasyButton";

type AnalyticsConsent = "granted" | "denied";

const consentStorageKey = "fantasybox.analyticsConsent.v1";

function readStoredConsent(): AnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(consentStorageKey);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function storeConsent(value: AnalyticsConsent): void {
  try {
    window.localStorage.setItem(consentStorageKey, value);
  } catch {
    // Storage can be unavailable in privacy modes. The in-memory choice still applies.
  }
}

export function AnalyticsConsentBanner() {
  const { t } = useTranslation("privacy");
  const [consent, setConsent] = useState<AnalyticsConsent | null>(readStoredConsent);

  useEffect(() => {
    if (consent === "granted") {
      if (enableAnalytics()) trackPageView();
      return;
    }

    disableAnalytics();
  }, [consent]);

  if (!isAnalyticsConfigured() || consent !== null) return null;

  const applyConsent = (nextConsent: AnalyticsConsent) => {
    storeConsent(nextConsent);
    setConsent(nextConsent);
  };

  return (
    <section
      className="fb-consent-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div className="fb-consent-content">
        <div>
          <h2 id="analytics-consent-title" className="fb-heading fb-consent-title">
            {t("title")}
          </h2>
          <p id="analytics-consent-description" className="fb-consent-description">
            {t("description")}
          </p>
        </div>

        <div className="fb-consent-actions">
          <FantasyButton variant="secondary" onClick={() => applyConsent("denied")}>
            {t("reject")}
          </FantasyButton>
          <FantasyButton variant="coffee" onClick={() => applyConsent("granted")}>
            {t("accept")}
          </FantasyButton>
        </div>
      </div>
    </section>
  );
}
