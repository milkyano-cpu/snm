# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 / React 19** single-page landing site for "Saturday Night Meet" (SNM Melbourne), a car meet event. It uses the **App Router** with JavaScript (not TypeScript).

### Fixed-Canvas Scaling Model

The site is built on a **1920×10846px fixed canvas** that scales to fit any viewport width. `ScaleWrapper` (the only `"use client"` component) applies a CSS `transform: scale()` based on `clientWidth / 1920`. All child sections use **absolute positioning with pixel values** derived from a Figma design — there is no responsive/flex layout within the canvas.

When adding or modifying sections:
- Use absolute positioning with explicit `top`, `left`, `width`, `height` in pixels
- Coordinates correspond to the 1920px-wide Figma canvas
- If total page height changes, update `CANVAS_H` in `ScaleWrapper.js`

### Page Structure

`app/page.js` composes the full page as a vertical stack of section components inside `ScaleWrapper`:

HeroSection → FeaturesBar → AtmosphereSection → CommunityRulesSection → VIPCriteriaSection → VIPApplySection → YourCarSection → PhotoProcessSection → RegistrationForm → GallerySection → FooterSection

All section components are in `app/components/` and are server components (no `"use client"` except `ScaleWrapper`).

### Asset Management

All static images/icons live in `public/assets/`. The central registry `app/components/assets.js` exports an `ASSETS` object mapping semantic names to paths. Components import from `ASSETS` rather than using raw paths.

### Fonts

Two Google Fonts loaded via `next/font` in `layout.js`:
- **Outfit** (`--font-outfit`) — headings and UI text
- **DM Sans** (`--font-dm-sans`) — body text

Exposed as Tailwind classes `font-outfit` and `font-dm-sans` via `@theme` variables in `globals.css`.

## Key Configuration

- **next.config.mjs** — React Compiler enabled (`reactCompiler: true`)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.js`; theme customization is done with CSS `@theme` variables in `globals.css`
- **ESLint** — `eslint-config-next` (core web vitals rules)
- **Path alias:** `@/*` resolves to the project root (configured in `jsconfig.json`)
