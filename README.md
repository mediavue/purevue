# PureVue Window Cleaning website

The new website for [purevuewindows.co.uk](https://purevuewindows.co.uk), built with
[Astro](https://astro.build) and hosted on [Netlify](https://www.netlify.com).

- Fast: plain HTML pages, images automatically resized and converted to AVIF/WebP.
- The quote form emails you each request (through Netlify Forms). No server to look after.
- Search-engine ready: page titles, descriptions, sitemap, and business details Google understands.

See [REDESIGN.md](REDESIGN.md) for why the site was redesigned and what changed.

---

## Run it on your computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install      # download the tools (first time only)
npm run dev      # start a local copy at http://localhost:4321
```

The page reloads by itself whenever you save a file. Press `Ctrl + C` to stop.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the finished site into the `dist/` folder |
| `npm run preview` | Shows the built site, exactly as it will be online |
| `npm run check` | Checks the code for mistakes |

---

## Where things are

```
src/
├── data/business.ts       ← phone number, email, towns, Direct Debit link (change them here)
├── pages/                 ← one file per page
│   ├── index.astro        ← home page
│   ├── privacy-policy.astro
│   ├── thank-you.astro    ← shown after someone sends the quote form
│   └── 404.astro          ← "page not found"
├── components/            ← the sections each page is built from (Hero, Areas, Footer…)
├── layouts/Base.astro     ← the shared page frame: <head>, header, footer
├── styles/global.css      ← colours, fonts, buttons
└── assets/images/         ← photos (Astro makes the small/fast versions for you)
public/                    ← files copied as-is: fonts, favicon, robots.txt, sharing image
netlify.toml               ← Netlify settings and redirects from the old site's links
```

### Common changes

- **Phone number, email or towns:** edit `src/data/business.ts`. Every page updates.
- **Change a photo:** replace the file in `src/assets/images/` with one of the same name.
  Use a large, sharp photo (at least 1600 pixels wide); the site makes smaller copies itself.
- **Change wording:** find the text in `src/components/` and edit it.

---

## Put it live (first time)

1. **Create a Netlify account** at [app.netlify.com](https://app.netlify.com/signup) (the free plan is enough).
2. **Add the site:** choose *Add new project* (older screens say *Add new site*) → *Import an existing project* → *GitHub*, then pick the
   `mediavue/purevue` repository and the branch you want to publish. Netlify reads `netlify.toml`,
   so the build settings fill themselves in. Click **Deploy**.
3. **Check the preview address** Netlify gives you (something like `purevue.netlify.app`).
   Send yourself a test quote.
4. **Get quote emails:** in your project's *configuration → Notifications → Emails and webhooks*,
   find *Form submission notifications* → *Add notification* → *Email notification*.
   Choose the `quote` form and enter `info@purevuewindows.co.uk`.
5. **Connect the domain:** *Domain management → Add a domain* → `purevuewindows.co.uk`.
   Netlify shows the DNS records to set at your domain company (where the domain is registered).
   HTTPS is set up automatically.
6. **Turn off the old WordPress hosting** only once the new site shows on the real address.

After that, every change pushed to GitHub goes live automatically within a minute or two.

---

## Before going live

- [ ] **Confirm the phone number.** The old site's main button dialled `07889 868568`, but the
      number shown everywhere was `075 076 77 222`. The new site uses `075 076 77 222`
      (set in `src/data/business.ts`).
- [ ] **Read the privacy policy** (`src/pages/privacy-policy.astro`) and make sure it matches how
      you actually handle customer details.
- [ ] **Replace the AI-generated photos** with real job photos when you can (see REDESIGN.md).
- [ ] Ask happy customers for Google reviews, then add a reviews section.
