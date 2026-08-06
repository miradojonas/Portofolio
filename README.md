# Portfolio — Mirado

Site portfolio Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Serveur de développement (webpack) |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint |
| `npm run typecheck` | Vérification TypeScript (`tsc --noEmit`) |
| `npm test` | Vitest (exécution unique) |
| `npm run test:watch` | Vitest (mode watch) |
| `npm run test:coverage` | Vitest avec rapport de couverture |

## Architecture

```
src/
├── app/                  # App Router : routing uniquement
│   ├── layout.tsx
│   ├── page.tsx          # composition des sections
│   ├── globals.css
│   ├── page.module.css   # chrome de page (arrière-plans, animations)
│   └── api/contact/      # route handler (formulaire de contact)
├── components/
│   ├── layout/           # Header, Footer, Container
│   ├── sections/         # Hero, About, Skills, Projects, Formations, Contact
│   ├── ui/               # primitives : Button, Badge, Tag, Section, RevealOnScroll
│   └── forms/            # ContactForm
├── data/                 # contenu du site (content.ts)
├── lib/                  # logique métier testable (validation)
└── types/                # types partagés du contenu
```

Chaque composant est colocalisé avec son module CSS (`ComponentName.module.css`).

## Formulaire de contact

Le formulaire envoie un POST vers `/api/contact` (route handler), qui valide la
charge puis la transmet à un webhook n8n. Variables d'environnement requises :

```
N8N_WEBHOOK_URL=https://...
N8N_SHARED_SECRET=...
```

## Tests

Les tests (Vitest + Testing Library) couvrent le formulaire, l'animation au
scroll, les sections et la validation de l'API :

```bash
npm test
npm run test:coverage
```

## Conventions

- **Composants** : `PascalCase.tsx`, fichier = composant exporté ; `"use client"` en tête pour les composants client
- **Fonctions** : `camelCase`, verb-first (`handleSubmit`)
- **Types** : `PascalCase` exportés dans `src/types/`
- **CSS Modules** : `ComponentName.module.css`, classes en `camelCase`
- **Imports** : React → next → `@/components` → `@/data` → `@/lib` → CSS
