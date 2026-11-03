# FantasyBox GA4 analytics

FantasyBox uses a strict opt-in Google Analytics 4 integration. The Google tag is not requested and no application analytics events are queued until the visitor accepts analytics. Rejecting analytics, omitting configuration, or blocking Google domains does not affect the landing page or quotation form.

## Configuration

Set the web-stream Measurement ID through Vite configuration:

```dotenv
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

- Use `.env.local` for a local production build. It is ignored by Git.
- Configure the same variable in the production build/deployment environment.
- `.env.example` documents the variable without containing the production value.
- Missing values and values that do not match `G-...` disable analytics and suppress the consent banner.
- The Measurement ID is client-visible configuration, not an authentication secret, but the environment-specific value is intentionally not hardcoded in application source.

No analytics package is required. The site loads the official `gtag.js` script directly after consent.

## Consent behavior

The versioned choice is stored under `fantasybox.analyticsConsent.v1` with one of two values:

- `granted`: initialize the Google tag and allow the documented events.
- `denied`: do not initialize the Google tag or emit application analytics events.

Before a choice, the bilingual banner offers equally available accept and reject actions. After either choice, the banner disappears and no floating analytics control remains. The stored choice is reused on later visits. A permanent bilingual **Privacy and analytics / Privacidad y analítica** notice at the bottom of the page explains what the site measures and confirms that form contents are not sent.

Advertising storage, ad user data, ad personalization, personalized-ad signals, and Google Signals are not enabled by the application. The GA4 property owner must separately confirm that advertising features and unapproved Enhanced Measurement options are disabled in the Google Analytics administration interface.

The banner copy is the application's operational consent wording. The privacy owner remains responsible for approving it and for maintaining any broader privacy/cookie policy required for the markets where the site operates.

## Event contract

| Event | Trigger | Application parameters | Purpose |
| --- | --- | --- | --- |
| `page_view` | Once per document after analytics is granted | `page_location` without query/fragment; `page_title` | Landing-page usage |
| `product_request_opened` | An explicit action opens a quotation form | `product_id` | Product interest |
| `quote_request_submitted` | The existing browser `fetch` resolves | `product_id` | Quotation engagement |
| `language_changed` | A user-initiated language change completes | `language_code` (`en` or `es`) | Language preference |

Google may add its standard protocol and device fields. The application does not add names, email addresses, phone numbers, postal addresses, cities, postal codes, book titles, comments, designs, colors, translated product labels, or other form values.

`quote_request_submitted` means the browser handed the request to the existing `no-cors` endpoint. A `no-cors` response cannot prove that the receiving Google Apps Script processed the request.

### Approved product identifiers

- `classic_box`
- `cozy_box`
- `bookmarks`
- `tote_bags`
- `knitted_sleeve`
- `black_white_sleeve`
- `red_white_sleeve`
- `pink_green_cover`
- `kindle_vmb_sleeve`

## Manual verification

Build and serve the production application:

```powershell
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

Use GA4 DebugView or Realtime together with the browser Network panel.

1. **Granted:** clear `fantasybox.analyticsConsent.v1`, reload, accept, and confirm one Google tag request and one `page_view`. Open a product request, submit approved test data, and change language. Confirm exactly one matching event per action.
2. **Denied:** clear the choice, reload, reject, and confirm there are no requests to `googletagmanager.com` or `google-analytics.com`.
3. **Missing configuration:** build without `VITE_GA4_MEASUREMENT_ID`; confirm no banner, Google request, console error, or loss of site/form behavior.
4. **Blocked analytics:** block the two Google domains in browser developer tools; accept and confirm the site, language switcher, dialogs, and form still work.
5. **Privacy:** inspect every `g/collect` request and confirm that none of the prohibited form field names or entered values appears in its URL or payload.
6. **Duplicates:** double-click a request action and submit button where possible and close/reopen dialogs. Confirm one event for each completed user action.
7. **UI:** verify the initial banner and footer notice with keyboard input at 375 px, 768 px, and 1440 px in English and Spanish. Confirm that accepting or rejecting removes all floating analytics UI.

Save redacted DebugView/Realtime screenshots and Network evidence with the ticket. Do not commit customer data or the production Measurement ID in verification artifacts.
