---
name: Devsiter Next.js 15 SEO & Optimization Rules
description: Core Web Vitals (CWV), performance, rendering strategies, and SEO optimization mandates for Next.js 15.
---

# Next.js 15 SEO & Performance Guidelines

For Devsiter, lightning-fast speed and pristine SEO rankings are **non-negotiable**. Adhere to the following Next.js 15 and Core Web Vitals (CWV) mandates:

## 1. Rendering Architecture (INP & LCP Focus)
- **RSC Default (Server Components):** Keep components as React Server Components (RSC) by default. This ships zero JS to the client, maximizing speed. 
- **Isolated Interactivity:** Only use the `'use client'` directive to wrap specific interactive "leaves" (like standard `useState`, GSAP animations, or `onClick` handlers). Do not make entire layout trees client-side.
- **Dynamic Optimization:** Use `next/dynamic` to lazy-load heavy client-side components that live "below the fold" (e.g., heavy footers, modal dialogs, or complex interactive sections not visible on initial load).

## 2. Media & Asset Optimization
- **Images (`next/image`):** NEVER use raw `<img>` tags. Always use `next/image`. 
  - **LCP Constraint:** If an image is part of the initial viewport (e.g., Hero Background limits), you **MUST** include the `priority={true}` tag to prevent Largest Contentful Paint delays.
- **Fonts (`next/font`):** Only load fonts via `next/font/google` or `next/font/local` in the app layout to ensure they are seamlessly pipelined without layout shifts (improving CLS).
- **Scripts (`next/script`):** Load third-party scripts (analytics, widgets) using `next/script` equipped with the `strategy="afterInteractive"` or `strategy="lazyOnload"` tags so they never block the main thread.

## 3. SEO Fundamentals
- **Metadata API:** Implement SEO directly using the Next.js `generateMetadata` function or `export const metadata` inside `page.tsx` routes. Ensure comprehensive OpenGraph tags, descriptions, and dynamic titles for every route.
- **Semantic HTML:** Never rely heavily on `<div>` soup. Use `<header>`, `<nav>`, `<main>`, `<section>`, and `<article>` tags to grant search engines precise contextual data.
- **Avoid CLS (Cumulative Layout Shift):** When rendering dynamic content or external images, always reserve space immediately by providing strict explicit `width` & `height` properties or utilizing `aspect-ratio` containers. Never allow the page to "jump" while assets load.
