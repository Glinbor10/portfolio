# Guillermo Linares Borrego · Portfolio

[![CI](https://github.com/Glinbor10/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Glinbor10/portfolio/actions/workflows/ci.yml)
[![Deployed on Vercel](https://img.shields.io/badge/deployed-vercel-black?logo=vercel)](https://guillermo-linares-borrego.vercel.app)

Personal portfolio site. React + TypeScript + Vite, MUI for components and Framer Motion for scroll animations. Bilingual (ES/EN), light/dark theme, live GitHub activity widget.

## Stack

- React 19 + TypeScript + Vite
- MUI for components, Framer Motion for animations
- Vitest + React Testing Library for tests
- Husky + lint-staged for pre-commit checks (oxlint + Prettier)
- GitHub Actions for CI (lint, test, build on every push/PR)
- Vercel Analytics + Speed Insights

## Develop

```
npm install
npm run dev
```

## Test & lint

```
npm run lint
npm test
npm run format:check
```

## Build

```
npm run build
npm run preview
```

## Deploy

Deployed on Vercel (framework preset: Vite, build command `npm run build`, output directory `dist`).
