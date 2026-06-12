# OrbynexOS

School management app — starting with a production-ready login page built with React, TypeScript, Tailwind CSS 4, and Vitest.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 4** with shadcn-style `components/ui` structure
- **lucide-react** icons
- **Vitest** + **React Testing Library** for unit tests

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the login page.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Type-check and build     |
| `npm run preview` | Preview production build |
| `npm run test`    | Run unit tests           |

## Project structure

```
src/
  components/ui/sign-in.tsx                 # Auth form (left panel)
  components/ui/animated-characters-hero.tsx # Interactive hero (right panel)
  pages/LoginPage.tsx                        # OrbynexOS login page
  lib/utils.ts                               # cn() utility (shadcn convention)
```
