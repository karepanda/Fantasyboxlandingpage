import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";
import type { ProductContents } from "../../data/landing-data";
import { FantasyButton } from "./FantasyButton";

interface BoxContentsDialogProps {
  contents: ProductContents;
}

export function BoxContentsDialog({ contents }: BoxContentsDialogProps) {
  const { t } = useTranslation("products");

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <FantasyButton variant="secondary">
          {t("contentDialog.trigger")}
        </FantasyButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fb-dialog-overlay" />
        <Dialog.Content className="fb-dialog-content">
          <div className="fb-dialog-header">
            <Dialog.Title className="fb-heading fb-dialog-title">
              {t(contents.title)}
            </Dialog.Title>
            <Dialog.Description className="fb-dialog-description">
              {t("contentDialog.description")}
            </Dialog.Description>
          </div>

          <div className="fb-dialog-scroll">
            <div className="fb-content-list">
              {contents.items.map((item) => (
                <article className="fb-content-item" key={item.title}>
                  <span className="fb-content-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="fb-heading fb-content-title">{t(item.title)}</h3>
                    <p className="fb-content-description">{t(item.description)}</p>
                    {item.details && (
                      <ul className="fb-content-details">
                        {item.details.map((detail) => (
                          <li key={detail}>{t(detail)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <aside className="fb-important-note">
              <h3 className="fb-heading fb-important-title">
                {t(contents.importantTitle)}
              </h3>
              {contents.importantText.map((paragraph) => (
                <p key={paragraph}>{t(paragraph)}</p>
              ))}
            </aside>
          </div>

          <Dialog.Close asChild>
            <FantasyButton variant="coffee" className="fb-dialog-close">
              {t("contentDialog.close")}
            </FantasyButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
