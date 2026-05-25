# TallyKonnect — Next.js Landing Page

> **Intelligent automation suite for Tally Prime & Tally ERP 9** — bank integrations, GST reconciliation, TDS automation, OCR invoicing, and smart reports — all in one platform.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Features](#live-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Page Sections](#page-sections)
- [Components Deep Dive](#components-deep-dive)
- [Navigation & Routing](#navigation--routing)
- [Animation Architecture](#animation-architecture)
- [SEO & Metadata](#seo--metadata)
- [Deployment](#deployment)
- [Future Roadmap](#future-roadmap)

---

## Project Overview

TallyKonnect is a **component-based Next.js 16 landing page** built using the App Router. It is a marketing and lead-generation website for the TallyKonnect SaaS product — an automation platform that enhances Tally Prime and Tally ERP 9 with modern financial tools.

The original single-file JSX landing page was refactored into a clean, scalable component architecture with:

- **Server-rendered** route files for SEO, metadata, and canonical URLs
- **Client Component** sections for GSAP + Framer Motion animations
- Modular section isolation so each page block is independently maintainable
- Full mobile responsiveness with hamburger navigation and scroll-snap carousels

**Trusted by 1M+ businesses and banks across India** — the platform boasts 99% accuracy in automation workflows.

---

## Live Features

### Solutions
| Feature | Description |
|---|---|
| **Purchase Invoice Automation** | OCR-powered invoice capture; auto-matches vendor GSTIN, selects ledger, and posts vouchers into Tally |
| **Smart TDS** | Auto-creates TDS vouchers, calculates section-wise tax, and generates Form 24Q / 26Q in one click |
| **Smart Bank Recon** | Upload any bank PDF; achieves zero-difference reconciliation automatically against Tally entries |
| **GST Recon** | Imports GSTR-2A and GSTR-2B, identifies ITC mismatches, and generates compliance reports |

### Connected Banking (Bank Plugins)
| Bank | Status | Capabilities |
|---|---|---|
| **Yes Bank** | ✅ Live | Balance view, RTGS, NEFT, IMPS payments directly inside Tally |
| **Canara Bank** | ✅ Live | Account features, statement sync, transfers inside Tally |
| **AU Small Finance Bank** | ✅ Live | Balance checks, auto-reconciliation |
| **RBL Bank** | 🔄 In Progress | Full banking integration coming soon |

### Reports & Compliance
| Report | Description |
|---|---|
| **Smart Reports** | Sales analytics, audit reports, MSME reports from Tally data |
| **Clause 44 Audit** | Audit-ready Clause 44 reports in minutes |
| **WhatsApp Reports** | Share reports and payment reminders via WhatsApp |
| **ITC Tracking** | Track GST input tax credit mismatches, reduce ITC loss |

### Coming Soon
- **AnyWhereTally** — remote/cloud access to Tally (marked `COMING SOON` in navbar)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | `^16.2.6` |
| **UI Library** | React | `^19.2.6` |
| **Styling** | Tailwind CSS v4 | `^4.3.0` |
| **Animation** | Framer Motion | `^12.40.0` |
| **Animation** | GSAP (GreenSock) | `^3.15.0` |
| **Icons** | Lucide React | `^1.16.0` |
| **Linting** | ESLint + eslint-config-next | `^9.39.4` |
| **CSS Processing** | PostCSS + `@tailwindcss/postcss` | `^4.3.0` |
| **Language** | JavaScript (JSX, no TypeScript) | — |

---

## Project Structure

```
tallykonnect/
│
├── app/                          # Next.js App Router (Server Components)
│   ├── layout.jsx                # Root layout — global metadata, Navbar, Footer
│   ├── page.jsx                  # Homepage — composes all sections + JSON-LD
│   ├── globals.css               # Global styles & Tailwind base
│   ├── icon.jsx                  # Favicon generator (dynamic)
│   ├── opengraph-image.jsx       # OG image generator for social sharing
│   ├── robots.js                 # robots.txt generator
│   └── sitemap.js                # XML sitemap generator
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx            # Sticky top nav with dropdowns + mobile menu
│   │   └── SiteFooter.jsx        # Site footer
│   │
│   ├── sections/                 # All page sections (Client Components)
│   │   ├── HeroSection.jsx       # Landing hero with animated gradient orbs + counter
│   │   ├── ScaleWithConfidenceSection.jsx  # Trust/scale metrics section
│   │   ├── ProductStackSection.jsx         # Stacking tab panels (Solutions/Banking/Reports/Setup)
│   │   ├── TestimonialsSection.jsx         # Customer testimonials
│   │   ├── IntegrationPathsSection.jsx     # 3-step onboarding visuals
│   │   ├── NoCodeProductsSection.jsx       # No-code product highlights
│   │   ├── ConnectSystemsSection.jsx       # Systems integration visual
│   │   └── ContactSection.jsx             # Contact form + support cards
│   │
│   └── ui/
│       └── Button.jsx            # Reusable CTA button component
│
├── public/
│   └── partners/                 # Partner/bank logo assets (~3.4MB)
│
├── .env.example                  # Environment variable template
├── next.config.mjs               # Next.js config
├── postcss.config.mjs            # PostCSS config for Tailwind v4
├── jsconfig.json                 # Path aliases (@/ → root)
├── eslint.config.mjs             # ESLint flat config
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/satyamjha09/tallyKonnect.git
cd tallyKonnect

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Create production build
npm run start     # Start production server (after build)
npm run lint      # Run ESLint checks
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | ✅ Yes (for production) | Your live domain e.g. `https://www.tallykonnect.com` |

> ⚠️ **Important:** Set `NEXT_PUBLIC_SITE_URL` before deploying. It is used for canonical URLs, sitemap, robots.txt, structured data (JSON-LD), and OpenGraph image URLs. Without it, the fallback `https://www.tallykonnect.example` will be used.

**.env.local example:**
```env
NEXT_PUBLIC_SITE_URL=https://www.tallykonnect.com
```

---

## Page Sections

The homepage (`app/page.jsx`) composes 8 sections in order:

```
1. HeroSection                 → Above-the-fold landing with animated gradient + logo ticker
2. ScaleWithConfidenceSection  → Scale/trust metrics
3. ProductStackSection         → 4 stacking panels (Solutions, Banking, Reports, Setup)
4. TestimonialsSection         → Social proof carousel
5. IntegrationPathsSection     → 3-step setup guide with code + visual previews
6. NoCodeProductsSection       → No-code highlights
7. ConnectSystemsSection       → Bank/system integration visual
8. ContactSection              → Lead capture form + support options
```

---

## Components Deep Dive

### `HeroSection.jsx`

The primary above-the-fold section. Features:

- **Animated gradient orbs** — 3 `motion.div` elements with infinite rotation/scale using Framer Motion
- **Scroll parallax** — `useScroll` + `useTransform` to give the artwork a `y` offset on scroll
- **GSAP entrance animation** — staggered reveal of kicker text, headline lines, CTA buttons, and trust logos using `gsap.from()` inside `useLayoutEffect`
- **Live counter** — GSAP `gsap.to()` animates a number from 92% → 99% on load (accuracy stat)
- **Logos ticker bar** — horizontally repeating list of integrations (Tally Prime, Yes Bank, GST Recon, etc.) using CSS overflow scroll

**Key props/data:**
```js
const logos = ["Tally Prime", "Tally ERP 9", "YES BANK", "CANARA BANK", "AU BANK", "GST Recon", "Smart TDS"];
```

---

### `ProductStackSection.jsx`

The most complex section — a **sticky scroll-driven stacking panel system** with 4 tabs.

**How it works:**
1. A `StackingStage` component creates a tall scroll track (`stageHeight × (totalPanels + 1)` pixels)
2. The inner container is `position: sticky` — it stays in view while the user scrolls
3. Each `EnteringPanel` uses `useTransform` to slide up from `103%` to `0%` as scroll progresses
4. A sticky `<header>` nav bar tracks `activeIndex` via `useMotionValueEvent` and highlights the current tab with a green `layoutId` underline

**4 Panels:**
| Panel ID | Label | Cards |
|---|---|---|
| `solutions` | Our Solutions | Purchase Invoice, Smart TDS, Bank Recon, GST Recon |
| `banking` | Connected Banking | Yes Bank, Canara Bank, AU Bank, RBL Bank |
| `reports` | Reports & Compliance | Smart Reports, Clause 44 Audit, WhatsApp Reports, ITC Tracking |
| `setup` | Easy Setup | Choose Plan, Download TDL, Install in Tally, You're All Set |

Each card has a custom **CardVisual** component with inline SVG-like UI mockups built from Tailwind + Lucide icons.

---

### `IntegrationPathsSection.jsx`

A 3-step onboarding explainer with 3 visual panels:

| Step | Visual Type | Description |
|---|---|---|
| Choose Your Plan | `ChatCheckoutVisual` | Mock Smart Bank Recon UI showing 98% transaction match |
| Download the TDL | `PlatformGridVisual` | Animated grid of platform logos (GSAP float animation) |
| Install and Automate | `CodeVisual` | Fake code editor showing `tallykonnect-sdk` usage |

The `PlatformGridVisual` uses a `useRef` passed to a GSAP context that runs `gsap.fromTo()` with `yoyo: true, repeat: -1` for a perpetual floating tile animation.

---

### `Navbar.jsx`

Fully responsive navigation:

**Desktop:**
- Logo (`TK` icon + `TallyKonnect` text)
- `Home`, `Solutions` dropdown, `Demo`, `Contact Us` links
- `Login` CTA button (blue, with shadow)
- **Solutions dropdown** → hover-triggered, with a **nested `Connected Banking` sub-dropdown** (flyout to the right)

**Mobile:**
- Hamburger (`Menu` icon) / Close (`X` icon) toggle
- Accordion-style `Solutions` + `Connected Banking` expandable menus
- Full-width `Login` button at bottom of mobile menu

**Badges:**
- `COMING SOON` (amber) on `AnyWhereTally`
- `IN PROGRESS` (blue) on `RBL Bank Plugin`

---

### `ContactSection.jsx`

Lead capture section with two columns:

**Left column — 3 contact cards:**
- Talk to sales
- Get support
- Global offices

Each card has a hover lift (`whileHover={{ y: -3 }}`) and an animated arrow link.

**Right column — Contact form:**
- Fields: First name, Last name, Work email, Company, Business size (dropdown), How can we help (textarea)
- On submit: shows a success confirmation state with a `✓` icon (no actual API call — client-side state only)
- Privacy notice included below submit button

---

### `Button.jsx`

Reusable CTA button rendered as a `<Link>` (Next.js) for internal navigation or a plain `<a>` for external URLs.

---

## Navigation & Routing

This is a **single-page application** layout — all section links use hash anchors (`/#solutions`, `/#contact`, `/#demo`).

| Route | File | Type |
|---|---|---|
| `/` | `app/page.jsx` | Server Component |
| `/login` | Not yet implemented (linked in Navbar) | — |

The `ProductStackSection` implements its own **programmatic scroll-to-panel** navigation:
```js
const scrollToPanel = (index) => {
  const track = document.getElementById("stack-track");
  const targetY = track.getBoundingClientRect().top + window.scrollY + index * stageHeight;
  window.scrollTo({ top: targetY, behavior: "smooth" });
};
```

---

## Animation Architecture

All animated sections are **Client Components** (`"use client"`). This is intentional — they use browser APIs, refs, scroll measurements, and state.

| Animation Tool | Used For |
|---|---|
| **GSAP** | Entrance animations (stagger, opacity, y-translate), counter roll-up, floating tile loop |
| **Framer Motion** | Scroll-driven panel stacking, hover micro-interactions, viewport-triggered reveals, layout animations (tab underline) |
| **CSS** | Tailwind `transition`, `group-hover`, `animate-pulse` for simple states |

### GSAP Pattern
All GSAP animations are wrapped in `gsap.context()` inside `useLayoutEffect`, and cleaned up with `context.revert()`:

```js
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".hero-title .line", { y: 52, opacity: 0, stagger: 0.1, duration: 0.85 });
  }, rootRef);
  return () => ctx.revert();
}, []);
```

### Framer Motion Pattern
Scroll-driven transforms use `useScroll` + `useTransform`:

```js
const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
const y = useTransform(progress, [0, 1], ["103%", "0%"]);
```

---

## SEO & Metadata

SEO is handled entirely in **Server Components** for clean, crawlable HTML.

### Metadata (`app/layout.jsx`)
- `title.default` and `title.template` for consistent page titles
- Full `openGraph` and `twitter` card metadata
- `keywords` array for Tally-specific terms
- `metadataBase` set from `NEXT_PUBLIC_SITE_URL`

### JSON-LD Structured Data (`app/page.jsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TallyKonnect",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Tally Prime, Tally ERP 9"
}
```

### Auto-generated SEO Files
| File | Output |
|---|---|
| `app/sitemap.js` | `/sitemap.xml` |
| `app/robots.js` | `/robots.txt` |
| `app/opengraph-image.jsx` | `/opengraph-image` (1200×630) |
| `app/icon.jsx` | `/icon` (favicon) |

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable in Vercel dashboard:
# NEXT_PUBLIC_SITE_URL = https://www.tallykonnect.com
```

### Self-hosted

```bash
npm run build
npm run start
```

### Important Pre-Deployment Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to your live domain
- [ ] Verify `app/sitemap.js` generates correct URLs
- [ ] Check `app/robots.js` allows indexing
- [ ] Test OG image at `/opengraph-image`
- [ ] Confirm `/login` page is implemented or the link is updated
- [ ] Validate JSON-LD at [schema.org validator](https://validator.schema.org/)

---

## Future Roadmap

Based on codebase analysis, the following features are referenced but not yet implemented:

| Feature | Status | Notes |
|---|---|---|
| **RBL Bank Plugin** | 🔄 In Progress | Marked "IN PROGRESS" in navbar badge |
| **AnyWhereTally** | 🔜 Coming Soon | Remote/cloud Tally access; marked "COMING SOON" |
| **`/login` page** | ❌ Not built | Navbar Login button links to `/login` — no route exists yet |
| **Contact form API** | ❌ Not connected | Form submits client-side only; needs backend/email service |
| **Demo page** | ❌ Not built | `/#demo` anchor referenced but no dedicated section |

---

## Contributing

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes, then lint
npm run lint

# Build to verify no errors
npm run build

# Push and open a PR
git push origin feature/your-feature-name
```

---

## License

Private repository — © TallyKonnect. All rights reserved.

---

*README generated from full codebase analysis — covers all 889 files, 8 page sections, and complete component architecture.*
