# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start development server (http://localhost:3000)
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # ESLint
pnpm format    # Prettier formatting for src/
```

## Architecture

This is a single-page event marketing site (Saturday Night Meet at Lorbek Luxury Cars). The main page at [src/app/page.jsx](src/app/page.jsx) renders all sections sequentially as a scrollable landing page.

**Section order in page.jsx:**
1. `HeroSection` — full-bleed with Lorbek background texture
2. `FeatureSection`, `RulesSection`, `LimitedDisplaySection`, `VIPApplySection`, `YourCarSection` — wrapped in a shared dark background
3. `RegistrationFormV3` — modal form with international phone input
4. `GallerySection` + `FooterSection`

**Component structure — "Parts" pattern:**
Each section lives in its own folder under [src/components/](src/components/) and decomposes into sub-components inside a `Parts/` subdirectory (e.g. `Hero/Parts/TextPart.jsx`, `Hero/Parts/LogoPart.jsx`). Follow this pattern when adding or modifying sections.

**Client vs Server components:**
Components are Server Components by default. Add `"use client"` only for interactive components (e.g. `Preloader.jsx`, `RegistrationFormV3`).

**Styling:**
Tailwind CSS v4 with utility classes inline. Global animations (fadeInUp, fadeInRight, float, glow/sweep for preloader) are defined in [src/app/globals.css](src/app/globals.css). Custom font variables (`--font-outfit`, `--font-dm-sans`) are set in the root layout.

**Form submission:**
`RegistrationFormV3` posts to an external API (`https://api.alphaomegamensgrooming.com/api/form-submissions`) and a Pabbly webhook. The `SPREADSHEET_URL` and `EMAIL_RECEIVER` env vars are used server-side.

**Image assets:**
Local assets live in `public/` organized by section. Remote images from `s3.milkyano.com` are whitelisted in [next.config.mjs](next.config.mjs) for Next.js Image optimization.

**Path alias:** `@/*` maps to the project root (e.g. `@/src/components/...`).
