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

**Look.** Night-blue and glassy at the top and bottom, bright in between. The two blues come
straight from the PureVue logo, so the brand stays recognisable. Headings use Bricolage
Grotesque, a bold, slightly quirky typeface with real personality; body text uses Figtree.
Both fonts are stored with the site, so they always load and no visitor data goes to Google.

**The hero: rain on glass.** The top of the page is a dark window pane covered in water
droplets, with a few drops slowly running down. It's drawn in code, so it stays sharp on every
screen, pauses when scrolled away (saves battery) and stays still for visitors who turn off
motion. The quote form sits right in the hero on a frosted-glass panel, so visitors can ask
for a price without scrolling.

**Page sections, in order:**

1. Header that floats over the hero and turns solid as you scroll, with a phone button.
2. Hero: headline, two buttons (free quote, call), three key facts (0 ppm pure water, 100% guarantee, monthly rounds) and the quote form.
3. "Every visit" bento grid: the real photo of the cleaner, a big 0 ppm tile, frames/sills/doors, above conservatories, Georgian and leaded.
4. How pure water cleaning works: Filter, Scrub, Rinse, plus the benefits of no ladders.
5. The 100% guarantee as a big typographic statement.
6. A scrolling ribbon of town names, then the towns with postcodes and a "check your postcode" box.
7. Closing call-to-action with the phone number and Direct Debit link, then the footer.
8. On phones, a bar fixed to the bottom of the screen with **Call** and **Free quote**.

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
| Images | WebP/AVIF, resized per screen | The photo in this prototype is already converted to WebP and is about 5x smaller than the original. |
| Photography | New photos of real jobs | The current photos are low resolution. A few sharp landscape shots (clean house fronts, the van, before/after) would lift the whole site more than any code change. |
| Payments | Keep the existing GoCardless link | Already works; no change needed. |
| Local SEO | `LocalBusiness` structured data (included in the prototype), a Google Business Profile, a page per town | Helps PureVue show up in Google Maps and local searches. |

Modern browser features already used in the prototype: `backdrop-filter` frosted glass,
the `:has()` selector, variable fonts, a `<canvas>` animation, automatic dark mode for the
light sections, and structured business data for Google. Motion is switched off for visitors
who ask their device for reduced motion.

## Before going live

- [ ] Confirm the correct phone number (`07507 677222` vs `07889 868568`).
- [ ] Connect the quote form to a real form service (it currently only shows a summary on screen).
- [ ] Ask existing customers for Google reviews and add a reviews section.
- [ ] Add a couple of before/after photos from real jobs.
- [ ] Decide whether to show starting prices (e.g. "from £X for a 3-bed semi").
- [ ] Keep or move the privacy policy page (the footer links to `/privacy-policy`).
- [ ] Set up redirects from old WordPress URLs (`/contact`, `/payments`) so Google links keep working.
