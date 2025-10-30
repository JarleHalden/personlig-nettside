# Personlig Nettsted

Enkel Node/Express-applikasjon skrevet i TypeScript med EJS-visninger og Tailwind CSS for styling. Prosjektet er konfigurert for både rask utvikling med hot reload og en produksjonsklar build.

## Teknologistack
- **Node.js** (anbefalt ≥ 18) med ECMAScript-moduler (`type: module`)
- **Express** for HTTP-server
- **EJS** for server-renderte visninger
- **TypeScript** for type-sikker serverkode
- **Tailwind CSS** + PostCSS/Autoprefixer for styling

## Komme i gang
1. Installer avhengigheter
   ```bash
   npm install
   ```
2. Bygg og start produksjon
   ```bash
   npm run build
   node dist/app.js
   ```
3. Utviklingsmodus med hot reload (server + CSS)
   ```bash
   npm run dev
   ```
   Dette starter to prosesser via `concurrently`:
   - `node --watch --loader ts-node/esm src/app.ts` for å kjøre Express-serveren direkte fra TypeScript-kilde.
   - `tailwindcss --watch` for å generere `public/css/styles.css` fra `src/styles/input.css`.

   > **Merk:** Node vil vise en "ExperimentalWarning" for `--loader ts-node/esm`. Det er forventet og påvirker ikke kjøringen.

4. Stoppe prosesser: trykk `Ctrl+C` i terminalen.

## Prosjektstruktur
```
.
├── public/              # Statisk innhold som serveres direkte (CSS, bilder, dokumenter)
│   └── css/styles.css   # Generert av Tailwind build/watch-kommandoene
├── src/
│   ├── app.ts           # Express-app og rutehåndtering
│   ├── styles/input.css # Tailwind-inngang (legg til globale stilregler/utility-utvidelser)
│   └── views/           # EJS-visninger
│       ├── index.ejs    # Forside
│       ├── projects.ejs # Prosjekter-side
│       ├── about.ejs    # Om meg-side
│       └── partials/    # Delte EJS-partials (head, navbar, footer)
├── tailwind.config.js   # Hvilke filer Tailwind skal scanne etter klasser
├── postcss.config.js    # PostCSS-konfig med Tailwind og Autoprefixer
├── tsconfig.json        # TypeScript-kompilatorinnstillinger
└── package.json         # Skript og avhengigheter
```

## Redigere innhold
- **Visninger** (`src/views/*.ejs`): Oppdater tekst og layout for hver side. Bruk `<%- include("partials/_nav") %>`-mønsteret for å gjenbruke partials.
- **Partials** (`src/views/partials/`): `_head.ejs` inneholder `<head>`-metadata, `_navbar.ejs` og `_footer.ejs` brukes på alle sider.
- **Stilark**: Legg Tailwind-direktiv eller egendefinerte klasser i `src/styles/input.css`. Kjør `npm run dev` eller `npm run build:css` for å generere oppdatert `public/css/styles.css`.
- **Statisk innhold** (`public/`): Legg til ressurser som bilder, PDF-er (f.eks. `public/cv.pdf`) eller faviconer. De blir tilgjengelige via samme sti, i.e. `/cv.pdf`.

## Ny funksjonalitet
- Legg til nye ruter i `src/app.ts` med `app.get("/ny", ...)` og opprett en tilhørende EJS-fil under `src/views/`.
- Etter endringer i TypeScript-koden: `npm run build:ts` for å generere oppdatert `dist/`.

## Feilsøking
- **Tailwind CLI ikke funnet**: Sørg for at `npm install` har blitt kjørt; `node_modules/.bin` får shims automatisk ved installasjon.
- **caniuse-lite advarsel**: Kjør `npx update-browserslist-db@latest` når du har write-tilgang/ønsker å oppdatere browserdata.
- **Node ESM advarsel**: Kan ignoreres, men du kan eventuelt bytte til `tsx` eller tilsvarende hvis du foretrekker en annen dev-runner.

## Distribusjon
1. Bygg prosjektet: `npm run build`
2. Deploy `dist/`, `public/` og `package.json`/`package-lock.json` til server.
3. Installer prod-avhengigheter (`npm install --omit=dev`) og start med `node dist/app.js` (eller sett opp en prosess-manager som PM2). 

Ta kontakt hvis du trenger flere detaljer eller automatisering rundt bygg/deploy.
