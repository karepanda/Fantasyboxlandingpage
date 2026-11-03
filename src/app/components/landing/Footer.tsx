import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="fb-footer">
      <div className="fb-footer-content">
        <div>
          <p className="fb-footer-tagline">{t("tagline")}</p>
          <p className="fb-footer-copyright">{t("copyright")}</p>
        </div>

        <section aria-labelledby="footer-privacy-title">
          <h2 id="footer-privacy-title" className="fb-heading fb-footer-title">
            {t("privacyTitle")}
          </h2>
          <p className="fb-footer-privacy-text">{t("privacyText")}</p>
        </section>
      </div>
    </footer>
  );
}
