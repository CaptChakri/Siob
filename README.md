# Síob — public website

The public-facing marketing, safety, investor and legal site for **Síob**, Ireland's
car-sharing community. Static HTML/CSS/JS, no build step — served via GitHub Pages at
**[siob.ie](https://siob.ie)** (see [`CNAME`](CNAME)).

This is a separate surface from the mobile app (private beta on TestFlight). The site's
jobs, in order: build credibility/trust, attract investors, drive beta sign-ups.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Landing / marketing |
| `safety.html` | Safety & trust |
| `investors.html` | Investor brief (pre-revenue framing) |
| `careers.html` | Careers & culture |
| `contact.html` | Topic-routed contact form |
| `privacy.html` | Privacy Policy (GDPR / Irish-law template) |
| `terms.html` | Terms of Service (cost-sharing framing) |
| `cookies.html` | Cookie Policy (GDPR / ePrivacy template) |

## Structure
- `assets/site.css` — the full design system (tokens, components) shared with the app brand.
- `assets/site.js` — injects shared nav/footer, mobile menu, icon fills, scroll-reveal.
- `assets/app-screens.js` — `window.SIOB` phone-mockup helpers (decorative app-screen recreations).

Each page is standalone and links the shared CSS/JS. Nav and footer are injected at runtime
from `data-page` / `data-nav` attributes on `<body>`.

## Local preview
No build step. Serve the folder and open it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Hosting (GitHub Pages)
Settings → Pages → Source: `main` branch, root (`/`). `CNAME` points the site at `siob.ie`;
`.nojekyll` disables Jekyll processing so files are served verbatim.

## Still to do before public launch
The design is high-fidelity but a few items intentionally need real data / decisions:

1. **Replace `[bracketed placeholders]`** — company registration, address, investor metrics,
   retention periods, team members. They render highlighted so they're easy to spot.
2. **Legal review** — privacy / terms / cookies are drafting templates; a qualified Irish
   solicitor must review and complete them. Each page carries that notice.
3. **Wire the contact form** (`contact.html`) — currently front-end only (shows a confirmation,
   sends nothing). Point it at an email/CRM/serverless endpoint. It preselects the topic from
   the URL hash (`#beta`, `#investors`, `#press`, `#careers`, `#support`).
4. **Beta capture** — beta CTAs link to `contact.html#beta`; the real flow should capture an
   email and trigger a TestFlight invite. Android shows "Coming soon."
5. **Decide on the live hero stats** — `index.html`'s hero shows an illustrative
   "214 lifts on Irish roads right now". Either wire it to a real stats endpoint or soften it
   to a non-numeric "Now in private beta across Ireland" line, since scale claims at beta stage
   can mislead. Investor/traction numbers are all bracketed placeholders.
6. **Add real photography** to the `.imgslot` / `.ph-img` slots, plus a logo/favicon.
7. **Add `<meta>` Open Graph/Twitter cards, sitemap, robots.txt, analytics + a cookie-consent
   banner** (the Cookie Policy assumes one exists).
8. **Set real social + media-kit links** in the footer / contact page.

> The landing page's dev-only "Tweaks" panel (hero/accent/headline explorer, React + Babel)
> has been removed for production. Hero layout **A (Split)** is the chosen, hard-coded hero.
