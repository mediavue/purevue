# PureVue website redesign

Why and how purevuewindows.co.uk was redesigned. The new site is built and ready to deploy:
see [README.md](README.md) for how to run it and put it live.

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
| Broken pages | The **Payments** menu link and the **Privacy Policy** footer link both lead to "Page not found". | Customers can't find how to pay, and a site that collects details needs a working privacy policy. |
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

## Technology

The site is built with:

| Part | Choice | Why |
| --- | --- | --- |
| Site framework | **[Astro](https://astro.build)** | Builds plain, very fast HTML pages. Ideal for small business sites, and easy to add pages later (e.g. one page per town for local SEO). |
| Styling | Modern CSS, no theme or page builder | Small, fast and easy to change. |
| Hosting | **Netlify** | Free for a site this size, fast worldwide, automatic HTTPS, goes live every time changes are pushed to GitHub. |
| Quote form | **Netlify Forms** | Emails each request to `info@purevuewindows.co.uk` with no server to maintain. Includes a spam trap. |
| Images | Astro image optimisation | Every photo is automatically resized and converted to AVIF and WebP, so phones download small files (often 40–150 KB instead of 500–750 KB). |
| Photography | Real photos of real jobs (to do) | The site uses 7 AI-generated images as stand-ins (see below). Replace them with real photos of PureVue jobs, the van and before/after shots when possible. |
| Payments | Existing GoCardless link | Already works. The old `/payments` address now redirects there. |
| Local SEO | Business details for Google, sitemap, page titles and descriptions, sharing image | Helps PureVue show up in local searches. Next steps: a Google Business Profile and a page per town. |

Browser features used: `backdrop-filter` frosted glass, the `:has()` selector, variable fonts,
a `<canvas>` animation, automatic dark mode for the light sections, and lazy-loaded responsive
images. Motion is switched off for visitors who ask their device for reduced motion.

## Images

All images are in `src/assets/images/`.

| File | Source | Used for |
| --- | --- | --- |
| `cleaner-at-work.jpg` | Real photo from the current site | Large "Cleaned from the ground" tile |
| `logo-mark.png` | Current PureVue logo | Header and footer |
| `conservatory.jpg` | AI-generated (GPT Image 2.5 via Higgsfield) | "Above conservatories" tile |
| `georgian-window.jpg` | AI-generated | "Georgian and leaded" tile |
| `purity-meter.jpg` | AI-generated | Step 1, Filter |
| `brush-on-glass.jpg` | AI-generated | Step 2, Scrub |
| `rinse.jpg` | AI-generated | Step 3, Rinse |
| `house-front.jpg` | AI-generated | Guarantee section |
| `high-street.jpg` | AI-generated | Areas banner |

The AI images show general scenes only (no people, no named places), so they don't claim to be
PureVue's own work. They're fine as placeholders, but real photos of real jobs build more trust.

## Before going live

See the checklist at the end of [README.md](README.md).
