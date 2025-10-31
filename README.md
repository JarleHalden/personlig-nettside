# Personlig Nettsted

Prosjektet er modernisert til [Next.js](https://nextjs.org/) med TypeScript, React og Tailwind CSS. Strukturen bruker Next.js `app`-router med route-groups for å holde layout og sider ryddige.

## Teknologistack
- **Next.js 14** – filbasert routing, server-rendering og SEO-metadata
- **React 18 + TypeScript** – komponenter med typesikkerhet og god editor-støtte
- **Tailwind CSS** – utility-first styling, bygget via PostCSS/Autoprefixer
- **ESLint** – `next/core-web-vitals`-regler for å fange vanlige frontend-feil

## Komme i gang
1. Installer avhengigheter
   ```bash
   npm install
   ```
2. Start utviklingsserver (hot reload)
   ```bash
   npm run dev
   ```
   Kjører på `http://localhost:3000`.
3. Produksjonsbuild
   ```bash
   npm run build
   npm start
   ```
   Dette genererer `.next/` og starter appen i produksjonsmodus.

## Mappestruktur
```
.
├── next.config.mjs         # Next.js-konfig (placeholder; utvid ved behov)
├── package.json            # Skript og avhengigheter
├── package-lock.json       # Låste versjoner for reproduserbare installs
├── postcss.config.js       # PostCSS med Tailwind + Autoprefixer
├── tailwind.config.js      # Tailwind-innhold og tema
├── tsconfig.json           # TypeScript-oppsett inkl. '@/…'-alias
├── .eslintrc.json          # ESLint-konfig (Next core web vitals)
└── src/
    ├── app/
    │   ├── globals.css     # Globale Tailwind-direktiv + basisstil
    │   ├── layout.tsx      # Rotlayout som setter `<html>`, font og body
    │   └── (site)/         # Route group for offentlige sider
    │       ├── layout.tsx  # Deler sidekrom (sidebar + footer)
    │       ├── page.tsx    # Forside
    │       ├── about/page.tsx
    │       └── projects/page.tsx
    └── components/
        ├── layout/Footer.tsx
        └── navigation/Sidebar.tsx
```
> Trenger du statiske filer (PDF, bilder osv.), opprett en `public/`-mappe. Alt i `public/` blir tilgjengelig direkte fra rot-URL (`/filnavn`).

## Layout-oversikt
- `src/app/layout.tsx` kjører rundt **alle** routes. Her bytter du font, språk-attributt, globale meta-tags osv.
- `src/app/(site)/layout.tsx` rammer inn sidene i `(site)`-gruppen og rendrer sidebar, hovedinnhold og footer. Alle sider under `(site)` arver dette automatisk.

## Endre innhold
- Oppdater tekst eller logikk direkte i sidene under `src/app/(site)/**/page.tsx`.
- Legg til nye sider ved å opprette en ny mappe med `page.tsx` under `src/app/(site)/` (f.eks. `src/app/(site)/kontakt/page.tsx`).
- Globale stilendringer gjøres i `src/app/globals.css` eller via Tailwind-konfigurasjonen.

## Kvalitet og deploy
- Kjør `npm run lint` før commit for å sjekke at Next/React-reglene følges.
- Deploy enkelt til Vercel (`vercel deploy`) eller en annen Node-host (bygg med `npm run build`, start med `npm start`).
- Ønsker du API-endepunkter senere, kan de legges i `src/app/api/<navn>/route.ts` og bruker samme layoutstruktur.

Ta gjerne kontakt hvis du trenger hjelp med videre utbygging eller deploy-oppsett.
