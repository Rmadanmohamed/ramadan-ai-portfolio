# Ramadan Mohamed Hassan - AI Portfolio

Premium React, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber portfolio website generated from `Ramadan_Mohamed_CV.docx`.

Live portfolio: https://ramadan-ai-portfolio.vercel.app

Author links:

- GitHub: https://github.com/Rmadanmohamed
- LinkedIn: https://www.linkedin.com/in/ramadan-mohamed-657686365
- Portfolio: https://ramadan-ai-portfolio.vercel.app

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Three.js / React Three Fiber
- GSAP dependency included for future advanced animation work
- Lucide React icons

## Project Structure

```txt
src/
  components/
    Hero.tsx
    About.tsx
    Experience.tsx
    Education.tsx
    Projects.tsx
    Skills.tsx
    Awards.tsx
    Research.tsx
    Contact.tsx
    Navbar.tsx
    Footer.tsx
    AnimatedBackground.tsx
    LoadingScreen.tsx
    ProjectModal.tsx
  data/
    portfolioData.ts
  assets/
  styles/
    index.css
  App.tsx
  main.tsx
public/
  assets/
    Ramadan_Mohamed_CV.docx
    profile-placeholder.svg
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Replace Photo and CV

- Add your personal photo at `public/assets/my-photo.jpg`. The site is already wired to use this path in `src/data/portfolioData.ts`.
- Replace the downloadable CV at `public/assets/Ramadan_Mohamed_CV.docx` when you update the CV.
- If you prefer a different photo filename, update `profile.photoUrl` in `src/data/portfolioData.ts`.
- Update `profile.github`, `profile.linkedin`, and project links in `src/data/portfolioData.ts` and `src/data/projects.ts` when verified links change.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Create a new Vercel project.
3. Use these settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Deploy to Netlify

1. Push this folder to GitHub.
2. Create a new Netlify site from the repository.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.
