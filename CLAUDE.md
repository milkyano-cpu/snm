# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a **Next.js 16 / React 19** single-page landing site for "Saturday Night Meet" (SNM Melbourne), a car meet event. It uses the **App Router** with JavaScript (not TypeScript).

### Page Structure

`app/page.jsx` composes the full page as a vertical stack of section components:

```
HeroSection → FeatureSection → RulesSection → LimitedDisplaySection →
VIPApplySection → YourCarSection → RegistrationFormV2 → GallerySection
```

The HeroSection sits outside the main background wrapper. All remaining sections are inside a `<section className="bg-entire">` container.

A `Preloader` component (client-side animated logo reveal) wraps the page in `layout.jsx`.

### Component Conventions

- Almost all components are **server components** (default). Only `Preloader.jsx`, `RegistrationFormV2.jsx`, and `ScaleWrapper.js` use `"use client"`.
- Larger sections are split into subdirectories with a `Parts/` folder (e.g., `Hero/HeroSection.jsx` + `Hero/Parts/TextPart.jsx`).
- Layout uses Tailwind utility classes with `container` (max-width 60vw, centered) or `form-container` (max-width 40vw, centered) — both defined in `globals.css`.
- CTA buttons use the shared `Button.jsx` component, which renders as `<a>` when `href` is provided, otherwise `<button>`.

### Asset Management

All static images/icons live in `public/assets/`. The central registry `components/assets.js` exports an `ASSETS` object mapping semantic names to paths. Components import from `ASSETS` rather than using raw paths.

SVG icons are React components in the `icons/` directory using inline SVG with `currentColor`.

### Fonts

Two Google Fonts loaded via `next/font` in `layout.jsx`:
- **Outfit** (`--font-outfit-var` → `font-outfit`) — headings and UI text
- **DM Sans** (`--font-dm-sans-var` → `font-dm-sans`) — body text

Exposed as Tailwind classes via `@theme` variables in `globals.css`.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.js`; theme customization uses CSS `@theme` variables in `globals.css`.
- Custom CSS classes in `globals.css`: `.container`, `.form-container`, `.bg-lorbek`, `.bg-entire`, `.fading-border`, animation utilities (`.animate-fade-in-up`, `.animate-fade-in-right`, `.animate-float`), and preloader styles.

## Key Configuration

- **React Compiler** enabled in `next.config.mjs` (`reactCompiler: true`)
- **Remote images** allowed from `https://s3.milkyano.com/**`
- **Path alias:** `@/*` resolves to the project root (`jsconfig.json`)
- **ESLint:** `eslint-config-next` with core web vitals rules

## Environment Variables

- `NEXT_PUBLIC_SPREADSHEET_URL` — Google Sheets URL for form submissions
- `NEXT_PUBLIC_EMAIL_RECEIVER` — Email address for form notifications
