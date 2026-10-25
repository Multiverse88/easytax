# SPT Bulanan Meta Ads Next.js Migration Design

## Status

Approved for implementation on 2026-10-25.

## Goal

Move the existing `LP - ET2` Meta Ads conversion funnel into the EasyTax Next.js application while preserving its public URLs, campaign data contract, and conversion tracking. Refresh the presentation with the current EasyTax brand system without introducing new dependencies or changing regular website pages.

## Public routes

- `/spt-bulanan-metaads-2`: campaign landing page.
- `/thankyoupage-spt-bulanan-metaads-2`: post-submit confirmation and WhatsApp transition.
- `/api/lead/spt-bulanan-metaads`: validated server-side lead and Meta CAPI endpoint.

The two page URLs remain unchanged to avoid breaking existing ads, bookmarks, and analytics. Both pages use a dedicated campaign root layout rather than the regular website navbar and footer.

## Route architecture

Create a new `(campaign)` route group with its own root layout. The layout imports the existing global Tailwind stylesheet and uses the existing self-hosted Outfit and Plus Jakarta Sans definitions, EasyTax favicon, logo assets, and brand tokens. It renders no global site navigation or footer.

The landing page remains a Server Component. Static sections render on the server. Small Client Components own only interactive state:

- lead form submission and inline feedback;
- shared selected omzet state between pricing actions and the lead form;
- end-of-day countdown;
- thank-you countdown and WhatsApp redirect;
- Meta Pixel initialization and browser-side events.

A small campaign context is justified because the pricing actions and hero form are separate components that share the selected omzet. It contains only the current omzet and its setter.

## Visual direction

Interpretation: a focused Meta Ads landing page for Indonesian PT owners, with a trustworthy and decisive EasyTax visual language.

Design dials:

- design variance: 7;
- motion intensity: 4;
- visual density: 5.

The page uses one light theme, official EasyTax navy `#152269`, official EasyTax yellow `#f4c922`, and the existing neutral/status tokens. Buttons are pill-shaped, cards use the existing 18–24px radius scale, and focus states reuse the global high-contrast treatment.

Page sequence:

1. Slim promotion bar and campaign header with EasyTax logo plus one consultation CTA.
2. Asymmetric split hero. The offer and lead form remain visible without scrolling on a typical desktop viewport; mobile places the form immediately after the headline.
3. Compact real-client testimonial wall.
4. Benefits presented as an asymmetric numbered grid rather than six identical cards.
5. Staff-cost versus EasyTax comparison.
6. Responsive omzet pricing list with package-selection actions.
7. Included services, countdown, native disclosure FAQ, and closing CTA.
8. Minimal campaign footer with company identity plus links to the EasyTax home and contact pages.

Copy, testimonials, pricing, field order, anchor IDs, and campaign source values stay compatible with the existing funnel. Visible em dashes are replaced with punctuation that matches the current design standard. Decorative emoji are replaced with the project's existing icon treatment or plain text.

## Pricing contract

The campaign keeps the existing promotion framing and uses the complete ten omzet options already established for the EasyTax monthly tax and financial reporting service:

1. no operation;
2. Rp0–50 million;
3. Rp50–100 million;
4. Rp100–200 million;
5. Rp200–300 million;
6. Rp300–400 million;
7. Rp400–500 million;
8. Rp500 million–1 billion;
9. Rp1–2.5 billion;
10. above Rp2.5 billion.

The displayed prices and feature descriptions use the current source data already maintained for `laporan-perpajakan-keuangan`. Campaign-specific normal-price strike-through values remain display-only. The Rp50–100 million option remains the highlighted recommendation.

Clicking a pricing action updates the form's omzet value, moves focus to the form section, and does not submit automatically.

## Lead request contract

The browser sends JSON to `/api/lead/spt-bulanan-metaads` with:

```ts
{
  submissionId: string;
  nama: string;
  whatsapp: string;
  layanan: "Laporan Perpajakan & Keuangan Badan";
  omzet: string;
  source: "konsultasi easytax 2";
}
```

The client creates one `submissionId` per attempted form submission and reuses it for a retry until the form fields change. The server treats this value as the Meta `event_id` and the Apps Script submission ID.

Server validation:

- trim and sanitize all text fields;
- require name, WhatsApp number, service, omzet, source, and submission ID;
- normalize Indonesian phone numbers to country-code form;
- reject invalid phone length or unsupported omzet values;
- apply conservative field-length limits;
- return generic public errors without exposing provider responses or credentials.

## Server-side delivery

The endpoint performs two provider operations:

1. Send the validated lead to the existing Google Apps Script endpoint. The endpoint URL moves from the browser-exposed Nuxt variable to server-only `LEAD_ENDPOINT`.
2. Send a `Lead` event to Meta Conversion API using server-only `FB_CONVERSION_TOKEN`, the existing pixel ID, the shared event ID, and SHA-256 hashes of normalized phone and first name.

Lead storage is the primary operation. The request is successful only after Apps Script accepts the request. Meta CAPI failure is logged server-side but does not discard an accepted lead or block the user. Provider requests use finite timeouts.

On success the endpoint returns `{ ok: true, eventId }`. The client then calls `fbq("track", "Lead", {}, { eventID: eventId })` and navigates to the internal thank-you route with URL-encoded `nama` and `omzet` parameters.

The old flow records `Lead` once on form completion and again on the thank-you page. The migrated flow records one browser event paired with one CAPI event by the same ID. The thank-you page records only its normal page view.

## Tracking

The campaign root layout loads:

- Google Tag Manager container `GTM-TPH4VR4H`;
- the existing Meta Pixel;
- matching noscript fallbacks.

Use `next/script` with `afterInteractive` for browser tracking scripts. Tracking is scoped to the campaign root layout so regular site pages are unchanged.

TypeScript declares the minimal `window.fbq` contract used by the client. A missing or blocked Pixel never prevents lead submission or WhatsApp navigation.

## Thank-you flow

The thank-you page is `noindex, nofollow`. It safely reads and length-limits `nama` and `omzet` search parameters, displays a three-second countdown, and then opens the existing internal WhatsApp routing endpoint with a prefilled message and source context.

The page includes a visible manual WhatsApp button for blocked redirects, disabled JavaScript, reduced-motion preferences, or impatient users. It does not hardcode a consultant's personal number.

## Metadata and indexing

The landing route has campaign-specific title, description, canonical URL, Open Graph fields, branded icon metadata, and remains indexable like the current page. The thank-you route is explicitly `noindex, nofollow` and is omitted from the sitemap.

No regular-site metadata, sitemap entries, or redirects change.

## Error handling and accessibility

- Native `required`, `autocomplete`, and `inputMode` attributes remain present.
- Inline validation text is associated with each invalid field.
- Submission feedback uses `aria-live` and preserves the entered values after an error.
- The submit button has distinct idle, submitting, success, and retry states.
- FAQ uses native `details` and `summary`, requiring no JavaScript state.
- Countdown output uses tabular numerals and does not announce every second to screen readers.
- All controls retain visible keyboard focus and AA text contrast.
- Motion is limited to entrance/hover feedback and disabled under `prefers-reduced-motion`.

## Configuration

Add the following documented server-only variables:

- `LEAD_ENDPOINT`;
- `FB_CONVERSION_TOKEN`.

Existing production secret values must be copied into the Next.js deployment environment outside Git. No secret or live endpoint credential is committed.

## Verification

Permanent tests cover behavior that could break consumers:

- accepted and rejected campaign lead payloads;
- Indonesian phone normalization;
- Meta hash/payload construction;
- provider failure precedence: Apps Script failure returns an error, CAPI failure after accepted storage still returns success.

Runtime smoke checks use a local stub provider, never the production Apps Script:

- desktop and 390px layouts;
- pricing action selects the expected omzet and focuses the form;
- invalid form displays inline errors;
- successful stub submit emits one Pixel event and reaches the thank-you route;
- thank-you manual CTA targets the internal WhatsApp router;
- FAQ keyboard interaction and countdown rendering;
- metadata and noindex behavior.

Run the focused tests, `npm run typecheck`, and the production build. Visually inspect both routes in a real browser.

## Non-goals

- No CMS model or admin UI for campaign copy.
- No migration of other Nuxt landing pages.
- No new analytics provider, animation library, form library, or icon dependency.
- No changes to regular EasyTax navigation, footer, services, or contact forms.
- No deployment or deletion of the legacy folder until the migrated route is verified in production and the user requests cleanup.
