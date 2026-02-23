# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js single-page event marketing site** for Saturday Night Meet (SNM) Melbourne — a premium automotive event. It handles event information display and registration.

## Commands

```bash
# Development
npm run dev       # Start dev server

# Build & production
npm run build     # Build for production
npm run start     # Start production server

# Code quality
npm run lint      # Run ESLint
npm run format    # Prettier format src/
```

No test framework is configured.

## Architecture

**Framework:** Next.js 16 + React 19 with App Router, Tailwind CSS v4.

### Page Structure

The site is a single scrollable page ([src/app/page.jsx](src/app/page.jsx)) with sections rendered sequentially:
1. `HeroSection` — Full-bleed with Lorbek background
2. Dark background wrapper (`bg-entire`) containing: `FeatureSection`, `RulesSection`, `LimitedDisplaySection`, `VIPApplySection`, `YourCarSection`, `RegistrationFormV3`
3. `GallerySection` + footer

### Component Pattern

Every major section follows a **"Parts" pattern**:
```
SectionName/
  SectionNameSection.jsx   ← layout/container
  Parts/
    SomePart.jsx           ← individual composable sub-components
```

### Client vs Server Components

- All section components are **Server Components** by default.
- Only two components use `"use client"`:
  - [src/components/Preloader.jsx](src/components/Preloader.jsx) — preloader animation state
  - [src/components/RegistrationForm/RegistrationFormV3.jsx](src/components/RegistrationForm/RegistrationFormV3.jsx) — form with API calls

### Form Submission

The registration form (`RegistrationFormV3.jsx`) submits to two external endpoints:
- REST API: `https://api.alphaomegamensgrooming.com/api/form-submissions`
- Pabbly webhook for automation
- Uses env vars: `NEXT_PUBLIC_SPREADSHEET_URL`, `NEXT_PUBLIC_EMAIL_RECEIVER`
- Uses `react-international-phone` for the phone input field

### Asset Management

- [src/components/assets.js](src/components/assets.js) is the centralized export for all asset paths.
- Local static assets live in `public/` organized by section (e.g., `public/hero/`, `public/gallery/`).
- Remote images served from `s3.milkyano.com` (whitelisted in [next.config.mjs](next.config.mjs)).

### Styling

Tailwind CSS v4 configured via PostCSS. Custom theme, fonts, and animations are defined in [src/app/globals.css](src/app/globals.css):
- Fonts: `--font-outfit` (headings), `--font-dm-sans` (body), loaded from Google Fonts in the root layout.
- Responsive containers: `.hero-container` (1200px max), `.container` (60vw), `.form-container` (40vw).
- Animations: `fadeInUp`, `fadeInRight`, `float`, `glow`, `sweep`, preloader multi-phase overlay.

## ESLint Rules

The project enforces strict linting ([eslint.config.mjs](eslint.config.mjs)):
- No `console.log` (only `warn`/`error` allowed), no `debugger`, no `var`
- Strict equality (`===`) required, curly braces required
- Import ordering: builtin → external → internal → parent → sibling
- Unused imports are flagged as errors (`eslint-plugin-unused-imports`)
- Exhaustive deps enforced for React hooks
