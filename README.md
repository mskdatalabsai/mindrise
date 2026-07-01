# TheMindRise.ai — Marketing Homepage

A Next.js recreation of the TheMindRise.ai homepage (AI training, consulting,
and product innovation — a brand of MSKDATALABS PRIVATE LIMITED).

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-based theme, see `src/app/globals.css`)
- **lucide-react** for icons
- Fonts self-hosted via `next/font/google` (Manrope for headings, Inter for body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

> Fonts are fetched from Google Fonts at build time (standard `next/font`
> behavior) and then self-hosted by Next.js — no Google Fonts requests happen
> at runtime. This just means the machine running `npm run build`/`npm run dev`
> needs normal internet access, same as any `npm install`.

## Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, <head> metadata, Navbar/Footer
    page.tsx             Homepage — assembles all sections in order
    globals.css          Design tokens (colors, fonts, keyframes) + Tailwind
    icon.tsx              Generated favicon (gradient "M" monogram)
    api/contact/route.ts  Contact form submission handler
  components/
    layout/               Navbar, Footer
    sections/             One file per homepage section (Hero, About, ...)
    ui/                    Reusable primitives: Button, Badge, SectionHeading
  lib/
    data.ts               All site copy — edit this to change content
    utils.ts               cn() classname helper (clsx + tailwind-merge)
  types/
    index.ts               Shared TypeScript types
```

## Editing content

Almost all copy — nav links, hero text, course details, consulting services,
testimonials, contact info, footer links — lives in **`src/lib/data.ts`**.
Change it there rather than hunting through components; every section reads
from this file.

A few things worth knowing:

- The **"Weekend Gen AI & Agentic AI Bootcamp"** card doesn't list an
  instructor in the original design, so its `instructor` field is left out.
  The **NLP-First Path** card carries the placeholder instructor label
  `"Dr. AI Expert — 15+ Years in AI & Data Science"` from the source design —
  swap in a real name whenever you have one.
- A couple of source sections (the third "AI Productization & Innovation"
  consulting card, the "Generative AI" / "Retrieval-Augmented Generation"
  panels, and the About section's closing paragraph) were faded/cut off in
  the supplied design file. I've written copy that fits the surrounding tone
  — treat it as a first draft and adjust freely in `data.ts`.

## Contact form

`src/components/sections/ContactForm.tsx` posts to `src/app/api/contact/route.ts`,
which validates the payload server-side and returns a proper success/error
response — but it doesn't send an email yet, since no email provider or API
key was supplied. The route has a ready-to-uncomment example using
[Resend](https://resend.com); Nodemailer/SMTP or any CRM webhook works just
as well. Until that's wired up, submissions are only logged to the server
console.

## Design notes

- Colors, fonts, and animation keyframes are defined once as CSS variables in
  `globals.css` under `@theme inline` (Tailwind v4's config format) — change
  a value there and it updates everywhere.
- Dark sections (Hero, Consulting, Products, Testimonials, Contact) use
  `bg-midnight` / `bg-panel-solid`; light sections (About, Programs, Courses)
  use `bg-frost` / `bg-cloud`, matching the alternating rhythm in the source
  design.
- Respects `prefers-reduced-motion` and includes visible focus states
  throughout for keyboard navigation.

## Assets to swap in

- **Startup India certificate**: the hero currently shows a stylized badge
  tile (gradient square + award icon) rather than a scanned certificate,
  since none was supplied. Drop a real image into `public/` and swap it into
  `src/components/sections/Hero.tsx` when you have one.
- **Social links**: `socialLinks` in `data.ts` point to `#` placeholders —
  update with real profile URLs.

## Deployment

This is a stock Next.js App Router project, so it deploys as-is to
[Vercel](https://vercel.com) (`vercel deploy`) or any Node/Docker host that
runs `npm run build && npm run start`.
