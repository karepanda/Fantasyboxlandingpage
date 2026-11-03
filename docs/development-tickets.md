# FantasyBox Development Tickets

These tickets are written as independent, reviewable work items. Priority is suggested and can be adjusted during backlog refinement.

## FB-001 — Remove discounts from FantasyBox Classic and Cozy

- **Type:** Product update
- **Suggested priority:** High
- **Status:** implemented

### Objective

Show the standard prices for FantasyBox Classic and FantasyBox Cozy without presenting either product as discounted.

### Scope

- FantasyBox Classic price: **€31.90**.
- FantasyBox Cozy price: **€37.00**.
- Remove the crossed-out/original-price presentation from these two products only.
- Preserve discount behavior for any other product that still has an active discount.
- Keep English and Spanish product content synchronized.

### Implementation steps

1. Update the Classic and Cozy product definitions so each card exposes only one active price.
2. Update the English and Spanish product translations to use the new prices with locale-appropriate formatting.
3. Remove obsolete Classic and Cozy discount translation keys if they are no longer referenced, keeping both locale schemas and `src/i18n/types.ts` in sync.
4. Confirm that the shared product-card component still displays original and sale prices for other discounted products.
5. Review all customer-visible Classic and Cozy price references to ensure they do not contradict the new prices.
6. Verify the affected cards on mobile, tablet, and desktop.

### Acceptance criteria

- [ ] FantasyBox Classic displays one price: `31.90 €` in English and `31,90 €` in Spanish.
- [ ] FantasyBox Cozy displays one price: `37.00 €` in English and `37,00 €` in Spanish.
- [ ] Neither card shows a crossed-out price, discount badge, sale label, or other discount indication.
- [ ] Discounts on unrelated products remain unchanged.
- [ ] English and Spanish translation keys remain identical, and the i18n TypeScript schema matches them.
- [ ] No other product content, request-form behavior, or pricing is changed.

### Completion evidence

- Screenshots of the Classic and Cozy cards in English and Spanish.
- Successful i18n parity check.
- Application build and TypeScript check, or the exact pre-existing toolchain blocker recorded in the handoff.

---

## FB-002 — Make the product catalog a responsive grid on tablet and desktop

- **Type:** Responsive UI improvement
- **Suggested priority:** High
- **Status:** implemented

### Objective

Use the available screen width more effectively by arranging product cards in a responsive grid on iPad/tablet and desktop screens while preserving a clear single-column mobile experience.

### Scope

- Keep one product card per row on narrow mobile screens.
- Show two columns at iPad/tablet widths when space permits.
- Show at least three columns on common desktop widths when space permits.
- Allow the grid to adapt without horizontal scrolling, clipped content, or overlapping controls.
- Preserve existing card interactions, dialogs, responsive images, and keyboard behavior.

### Implementation steps

1. Replace the vertical product-card stack with a dedicated product grid class in `ProductsSection`.
2. Expand the product-section container at tablet and desktop breakpoints while preserving the current mobile width and page gutters.
3. Define responsive grid columns using existing FantasyBox layout tokens and styles; avoid ad-hoc colors or a second layout system.
4. Make cards stretch consistently within each grid row and ensure their action areas remain usable when product descriptions have different lengths.
5. Update responsive image `sizes` metadata so browsers select an image appropriate for the new card widths.
6. Test product cards, image zoom, content dialogs, and request-form dialogs with keyboard and pointer input.
7. Review representative viewport widths and adjust breakpoints only where the visual evidence requires it.

### Acceptance criteria

- [ ] At 375 px viewport width, products render in one column with no horizontal page scroll.
- [ ] At 768 px viewport width (iPad portrait), products render in a usable two-column grid.
- [ ] At 1024 px viewport width (iPad landscape), the grid uses the available width without clipped cards or controls.
- [ ] At 1280 px and 1440 px viewport widths, products render in at least three columns and remain centered within the page layout.
- [ ] Grid gaps and card styling use the existing FantasyBox design system.
- [ ] Product images keep their aspect treatment and do not appear stretched.
- [ ] Every card action remains visible, keyboard accessible, and operable.
- [ ] Image zoom, product-content dialogs, and request forms still open and close correctly.
- [ ] English and Spanish content fit without overlap or truncation.

### Completion evidence

- Screenshots at 375, 768, 1024, and 1440 px in both supported languages where text length materially differs.
- Keyboard walkthrough of every card action and dialog.
- Browser console checked with no new errors or warnings caused by the change.
- Application build and TypeScript check, or the exact pre-existing toolchain blocker recorded in the handoff.

---

## FB-003 — Add privacy-aware Google Analytics 4 measurement

- **Type:** Analytics integration
- **Suggested priority:** Medium
- **Status:** implemented

### Objective

Add Google Analytics 4 (GA4) so FantasyBox can measure landing-page usage and quotation-request engagement without collecting form content or other personally identifiable information.

### Required inputs

- GA4 Measurement ID for the production property.
- Approved analytics-consent approach and privacy-policy wording for the markets where the site operates.
- Confirmation of which engagement events are needed for the first release.

### Proposed initial event set

- `page_view`
- `product_request_opened`, with a non-personal product identifier
- `quote_request_submitted`, emitted once per user submission after the browser hands the request to the existing endpoint
- `language_changed`, with `en` or `es`

### Implementation steps

1. Confirm the GA4 property, data stream, Measurement ID, data-retention settings, and authorized stakeholders.
2. Document the event names, allowed parameters, trigger points, and business purpose before adding tracking code.
3. Add the Measurement ID through Vite environment configuration; do not commit credentials or environment-specific identifiers directly in application code.
4. Integrate GA4 using the smallest maintainable approach. Any new package requires explicit approval before installation.
5. Implement the approved consent behavior so analytics storage and measurement follow the user's choice; add bilingual consent copy if a site control is required.
6. Track the approved events without sending names, email addresses, phone numbers, postal addresses, book titles, free-text comments, or other form values.
7. Prevent duplicate events caused by re-renders, repeated handlers, or dialog state changes.
8. Validate production-mode behavior with GA4 DebugView or Realtime and verify the analytics-disabled and consent-denied paths.
9. Update the project's setup and privacy documentation with configuration and verification instructions.

### Acceptance criteria

- [ ] GA4 loads only when a valid Measurement ID is configured and the approved consent conditions are satisfied.
- [ ] The application remains functional when the Measurement ID is missing, analytics is blocked, or consent is denied.
- [ ] Each approved event appears in GA4 DebugView or Realtime with the documented, non-personal parameters.
- [ ] A single user action produces a single corresponding analytics event.
- [ ] No form values or personally identifiable information are present in analytics requests.
- [ ] The consent choice can be applied as agreed with the privacy owner and is available in both English and Spanish if exposed in the UI.
- [ ] No analytics secret or production-only configuration is committed to the repository.
- [ ] Setup, event definitions, consent behavior, and manual verification steps are documented.
- [ ] No dependency is added without explicit approval.

### Out of scope

- Advertising audiences, remarketing, and ad-platform integrations.
- Sending raw customer-request data to GA4.
- Building a reporting dashboard beyond the standard GA4 property.

### Completion evidence

- DebugView or Realtime evidence for each accepted event.
- Network inspection showing that prohibited form fields are absent.
- Consent-granted, consent-denied, missing-configuration, and analytics-blocked test results.
- Application build and TypeScript check, or the exact pre-existing toolchain blocker recorded in the handoff.

---

## FB-004 — Discovery: AI-assisted Gmail quotation drafts with mandatory human approval

- **Type:** Technical and product discovery
- **Suggested priority:** Medium
- **Status:** Ready for discovery; not approved for production implementation

### Objective

Evaluate a safe automation that uses request data to prepare personalized quotation emails in Gmail while ensuring that a human reviews and explicitly sends every message.

### Guiding constraint

The automation may create or update a Gmail draft, but it must never send an email automatically. A human remains responsible for checking the customer, prices, shipping, language, and final wording before sending.

### Discovery steps

1. Map the current flow from the website request form to Google Apps Script and the destination spreadsheet or inbox.
2. Identify the authoritative sources and owners for product price, selected book price, shipping cost, taxes, discounts, and delivery terms.
3. Separate deterministic quotation calculations from AI-written prose: approved business rules calculate monetary values; AI may format and personalize the draft but must not invent or calculate prices.
4. Define the minimum customer data required to create a draft and a retention policy for request data, prompts, outputs, and logs.
5. Compare at least two implementation options, including extending the existing Google Apps Script flow to create Gmail drafts and using a separate secured service with Gmail API access.
6. For each option, assess permissions, secret storage, data processing, cost, reliability, monitoring, vendor lock-in, and maintenance effort.
7. Define a bilingual draft template with explicit placeholders for customer, product, itemized price, shipping, validity period, and terms.
8. Design the human-review state model, for example: `request received → calculation prepared → draft generated → pending human review → sent by human / rejected`.
9. Define safeguards for missing data, implausible totals, prompt injection in customer-supplied text, duplicate requests, provider failure, and unauthorized access.
10. Build a limited proof of concept with synthetic or approved test data that creates a clearly labeled Gmail draft but has no automatic-send capability.
11. Run a small evaluation set covering Classic, Cozy, other products, both languages, missing information, and unusual customer comments.
12. Produce a recommendation with estimated implementation effort, operating cost, risks, success metrics, and a go/no-go decision for a later production ticket.

### Acceptance criteria

- [ ] The current request-to-quotation workflow and its data owners are documented.
- [ ] At least two architecture options are compared with security, privacy, cost, reliability, and maintenance trade-offs.
- [ ] Monetary calculations are explicitly outside the AI model and rely on approved deterministic rules or human-entered values.
- [ ] The proof of concept uses synthetic or explicitly approved test data only.
- [ ] The proof of concept creates a Gmail draft and cannot send the draft without an explicit human action in the approved review flow.
- [ ] Drafts clearly show all quote inputs a reviewer must validate, including recipient, product, price components, shipping, language, and terms.
- [ ] Customer-provided free text is treated as untrusted input and cannot change pricing rules, approval rules, recipients, or system instructions.
- [ ] Failure, retry, duplicate-request, audit-log, access-control, and secret-management requirements are documented.
- [ ] No customer data is sent to an AI provider until the provider, data-processing terms, and permitted fields are approved.
- [ ] The evaluation report includes quality findings, time-saved estimates, operating-cost estimates, unresolved risks, and a clear go/no-go recommendation.
- [ ] Production rollout is represented by a separate ticket and requires approval of the discovery recommendation.

### Out of scope

- Automatically sending quotation emails.
- Allowing an AI model to determine or modify prices, discounts, shipping charges, recipients, or legal terms.
- Processing real customer data before privacy, security, and access approvals are complete.
- Implementing a production automation as part of this discovery ticket.

### Completion evidence

- Current-state data-flow diagram.
- Architecture comparison and recommendation document.
- Bilingual draft template and reviewer checklist.
- Proof-of-concept demonstration using test data.
- Evaluation results and proposed production backlog items.

---

## FB-005 — Offer optional add-ons in the FantasyBox request form

- **Type:** Product feature
- **Suggested priority:** High
- **Status:** Needs refinement before implementation

### Objective

Allow a customer who is requesting a FantasyBox package to add eligible complementary products, such as a reading tote bag or a bookmark set, while clearly showing the additional price of each selected item.

### Proposed initial scope

- Show the add-on section when requesting FantasyBox Classic or FantasyBox Cozy.
- Offer the reading tote bag and bookmark set as the initial add-ons.
- Allow the customer to continue without selecting an add-on.
- Allow one or more eligible add-ons, subject to the product decisions listed under Open questions.
- Show each add-on price as an amount added to the package price, with shipping and the selected book still calculated separately.
- Capture any required add-on option, such as tote-bag design or bookmark collection.
- Include the selected add-ons and their options in the quotation-request payload.

### Implementation steps

1. Confirm the eligible base packages, initial add-on catalog, allowed quantities, active prices, availability rules, and whether multiple add-ons may be combined.
2. Define a typed add-on model with a stable identifier, bilingual display key, displayed additional price, availability, and optional variant choices.
3. Establish one authoritative source for the add-on information shown in the product catalog and request form so prices and availability cannot silently diverge.
4. Add a bilingual, optional add-ons section to the Classic and Cozy request forms using semantic grouped controls and the existing FantasyBox design system.
5. Display the additional price next to every choice using locale-appropriate formatting, for example `+15.99 €` in English and `+15,99 €` in Spanish.
6. Reuse the existing tote-design and bookmark-collection choices when the corresponding add-on is selected; hide and clear dependent choices when it is deselected.
7. Add a live order summary that lists the base package and selected add-ons separately. Clearly state that the book and shipping are excluded and that the final amount will be confirmed in the quotation.
8. Extend the form's TypeScript data model and validation so required add-on options are enforced only when their parent add-on is selected.
9. Agree on and document the Google Apps Script payload contract before changing it. Send stable add-on identifiers, selected options, quantities, and the displayed unit prices without breaking existing request processing.
10. Update the receiving script and destination sheet or workflow to store and present add-ons clearly for quotation preparation.
11. Add matching English and Spanish i18n keys and update `src/i18n/types.ts`.
12. Test selection, deselection, validation recovery, submission, and reopening behavior across mobile, tablet, and desktop layouts.

### Acceptance criteria

- [ ] The add-on section appears for FantasyBox Classic and FantasyBox Cozy requests and does not appear when requesting a tote bag, bookmark set, sleeve, or another standalone product.
- [ ] A customer can submit a FantasyBox request without choosing an add-on.
- [ ] The initial choices include a reading tote bag and a bookmark set, subject to confirmed availability.
- [ ] Every add-on displays its additional price before the customer selects it.
- [ ] English prices use the approved English format and Spanish prices use the approved Spanish format.
- [ ] Selecting a tote bag requires an available tote design; selecting bookmarks requires an available collection when collections are offered.
- [ ] Deselecting an add-on removes it and any dependent option from the summary and submitted data.
- [ ] The summary identifies the base package and each selected add-on separately and does not present book or shipping costs as included.
- [ ] The submitted request contains stable identifiers, selected variants, quantities, and displayed unit prices for all selected add-ons.
- [ ] Existing Google Apps Script processing continues to accept requests with no add-ons.
- [ ] Add-on names, prices, and options received by the quotation workflow match what the customer saw before submission.
- [ ] Add-on controls are operable by keyboard, have visible focus, expose their selected state to assistive technology, and show accessible validation errors.
- [ ] The section remains readable without horizontal scrolling at 375, 768, 1024, and 1440 px viewport widths.
- [ ] English and Spanish translation keys remain identical, and the i18n TypeScript schema matches them.

### Edge cases

- An add-on or variant becomes unavailable after the form is opened.
- The configured add-on price is missing or invalid.
- A selected add-on requires an option, but no valid option is available.
- The customer selects and then removes an add-on before submitting.
- The receiving Google Apps Script has not yet been updated for the new payload fields.
- The request is retried and must not produce ambiguous duplicate add-on lines.

### Open questions

- [NEEDS CLARIFICATION] Are add-ons available for both Classic and Cozy, or only for specific packages?
- [NEEDS CLARIFICATION] Can customers choose both a tote bag and bookmarks in the same request?
- [NEEDS CLARIFICATION] Are quantities fixed at one, or can customers request multiple units of an add-on?
- [NEEDS CLARIFICATION] Should the tote bag use its current displayed sale price or a separate package add-on price?
- [NEEDS CLARIFICATION] Should the form show an add-on subtotal, or only the individual additional price of each item?
- [NEEDS CLARIFICATION] How should inventory or temporarily unavailable designs and collections be represented?

### Out of scope

- Online payment or checkout.
- Presenting the estimate as a final price including the selected book or shipping.
- Automatically applying bundle discounts unless a separate pricing rule is approved.
- Allowing customers to add an unlimited or unconfigured product to the request.

### Completion evidence

- Screenshots of no-add-on and selected-add-on states in English and Spanish at mobile and desktop widths.
- Keyboard walkthrough covering selection, dependent options, validation, deselection, and submission.
- Captured request payloads for no add-ons, tote bag only, bookmarks only, and all approved combined selections.
- Evidence that the receiving workflow records each add-on and option correctly.
- Successful i18n parity check.
- Application build and TypeScript check, or the exact pre-existing toolchain blocker recorded in the handoff.
