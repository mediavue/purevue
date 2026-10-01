# PureVue website redesign

A proposal for a new purevuewindows.co.uk, with a working prototype in `index.html`.
Open `index.html` in any browser to see it. It needs no install or build step.

## What the current site does well

- Clear offer: pure water, water-fed pole, monthly rounds, 100% re-clean guarantee.
- Lists the towns it covers.
- Online Direct Debit setup through GoCardless.
- A real photo of the cleaner at work, which builds trust.

## Problems with the current site

| Area | Problem | Why it matters |
| --- | --- | --- |
| **Wrong phone number** | The "Call for a Quote" button dials `07889 868568`, but every number on the page reads `075 076 77 222`. | Customers who tap the main button may reach the wrong phone. **Fix this today, even before a redesign.** |
| Heavy tech | WordPress with the Xtra theme, *two* page builders (WPBakery and Elementor), Slider Revolution and jQuery, all for one page. | Slow on phones, more plugins to keep updated and more security risk. |
| No quote form | Visitors can only phone, text or email. | Many people browse in the evening and won't phone. A short form catches them. |
| No reviews | No testimonials or Google reviews anywhere. | Reviews are the main thing people check before letting someone onto their property. |
| Typos | "tusing ladders", "Need you windows cleaned?" | Small, but they make a cleaning business look less careful. |
| Weak mobile actions | No call button that stays on screen while scrolling. | Most visitors are on phones and want to call in one tap. |
| Unrelated footer links | Links to window cleaners in Saffron Walden, Whitehaven and Caithness, plus scrim suppliers. | Sends customers to other businesses and confuses Google about where PureVue works. |
| Missing local SEO | No structured business data, no postcodes. | Harder to appear for "window cleaner Braintree" searches. |

## The redesign

**Look.** Clean and bright like freshly cleaned glass. The two blues come straight from the
PureVue logo, so the brand stays recognisable. Big, rounded headings echo the chunky letters
in the logo. There's a dark mode for people whose phones are set to dark.

**The hero: a window you can clean.** The first thing visitors see is a "dirty" window over a
photo of the pole and water droplets. Dragging a finger or mouse across it wipes the grime
away. It's memorable, it shows what the business does, and it works on touch screens.

**Page sections, in order:**

1. Header with logo, menu and a phone button.
2. Hero: headline, two buttons (free quote, call), three quick promises, the wipeable window.
3. Promise strip: guarantee, monthly rounds, chemical free, Direct Debit.
4. What's included every visit: frames/sills/doors, above conservatories, Georgian and leaded, cleaner for longer.
5. How pure water cleaning works: three steps beside the real photo of the cleaner.
6. The 100% guarantee in a bold blue band.
7. Areas covered, with postcodes and a "check your postcode" box.
8. Free quote form: name, contact, postcode, property type, how often, extras.
9. Footer with contact details, Direct Debit link and privacy policy.
10. On phones, a bar fixed to the bottom of the screen with **Call** and **Free quote**.

All the wording is rewritten from the current site's own claims. Nothing has been invented
(no fake reviews, no prices).

## Recommended technology

The prototype is a single HTML file so it's easy to open and read. For the real site I'd recommend:

| Need | Recommendation | Why |
| --- | --- | --- |
| Site framework | **[Astro](https://astro.build)** | Builds plain, very fast HTML pages. Ideal for small business sites. Easy to add pages later (e.g. one page per town for local SEO). |
| Styling | Modern CSS (as in the prototype) or **Tailwind CSS v4** | No heavy theme or page builder. |
| Hosting | **Cloudflare Pages** or **Netlify** | Free for a site this size, fast worldwide, automatic HTTPS, deploys every time you push to GitHub. |
| Quote form | **Netlify Forms**, **Formspree** or a Cloudflare Worker | Sends form entries to `info@purevuewindows.co.uk` with no server to maintain. |
| Images | WebP/AVIF, resized per screen | The photos in this prototype are already converted to WebP and are about 5x smaller. |
| Payments | Keep the existing GoCardless link | Already works; no change needed. |
| Local SEO | `LocalBusiness` structured data (included in the prototype), a Google Business Profile, a page per town | Helps PureVue show up in Google Maps and local searches. |

Modern browser features already used in the prototype: OKLCH colours, `color-mix()`,
the `:has()` selector, scroll-driven animations (with a fallback), automatic dark mode,
`backdrop-filter` for the frosted-glass header, and a `<canvas>` for the wipe effect.
Motion is switched off for visitors who ask their device for reduced motion.

## Before going live

- [ ] Confirm the correct phone number (`07507 677222` vs `07889 868568`).
- [ ] Connect the quote form to a real form service (it currently only shows a summary on screen).
- [ ] Ask existing customers for Google reviews and add a reviews section.
- [ ] Add a couple of before/after photos from real jobs.
- [ ] Decide whether to show starting prices (e.g. "from £X for a 3-bed semi").
- [ ] Keep or move the privacy policy page (the footer links to `/privacy-policy`).
- [ ] Set up redirects from old WordPress URLs (`/contact`, `/payments`) so Google links keep working.
