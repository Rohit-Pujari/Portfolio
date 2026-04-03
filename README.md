# Portfolio

Personal portfolio built with Next.js App Router and deployed at `https://rohit-pujari.vercel.app`.

## Overview

This repo powers a single-page developer portfolio with:

- a hero section with a tilted profile card
- a tools carousel built from local portfolio data
- a projects grid populated from live GitHub repositories
- a contact section with direct links and resume download
- animated background particles and glassmorphism-style UI

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP
- OGL
- Three.js / React Three Fiber / Drei
- Vercel Speed Insights

## How project data works

The homepage fetches repositories from the `Rohit-Pujari` GitHub account through [`lib/github.ts`](./lib/github.ts). The fetch layer:

- loads public repositories from the GitHub API
- filters out forks and archived repos
- sorts by most recently updated
- limits the portfolio grid to the latest 8 repositories
- tries to summarize each repo README for better project descriptions

If GitHub is temporarily unavailable, the site falls back to an empty project state instead of failing the page render.

## Routes

- `/` renders the portfolio homepage
- `/api/projects` returns the GitHub-backed project list as JSON
- `/resume` serves `RohitPujariResume.pdf` as a downloadable file

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project structure

```text
app/             App Router pages, layout, and route handlers
components/      UI sections and interactive visual components
constants/       Static content such as the tools list
lib/             Data-fetching and transformation utilities
public/          Images and font assets
RohitPujariResume.pdf
```

## Notes

- No environment variables are required for the current GitHub integration.
- GitHub requests are revalidated hourly in both the homepage data layer and `/api/projects`.

## Links

- Live site: `https://rohit-pujari.vercel.app`
- Repository: `https://github.com/Rohit-Pujari/Portfolio`
