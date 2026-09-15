# ED TATTOO STUDIO — Project Guidelines & Architecture

## Overview
**ED Tattoo Studio** is a premier web application for an elite contemporary fine art and bespoke tattoo gallery with resident masters in Tokyo, New York, and London. The application emphasizes classical Renaissance chiaroscuro realism, dark ornamental anatomy, and single-needle precision.

## Technology Stack
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React (clean 1.5px/2.0px vector outlines, anti-AI-slop policy)
- **Deployment Platform**: Cloudflare Pages / Workers Static Edge

## Active Workspace Standards & Rules
- [Project Standards](.agents/rules/project-standards.md) — Visual hierarchy, typography, form accessibility, and anti-AI-slop guidelines.
- [Cloudflare Setup](.agents/rules/cloudflare-setup.md) — Edge headers, CSP policies, SPA routing, and build workflow.
- [Contact Details](.agents/rules/contact-details.md) — Official studio contact hotline (`+60 11-3071 9502`) and WhatsApp concierge specifications.
- [Cloudflare Deployment Reference](CLOUDFLARE.md) — Quick reference for static header and redirect configurations.

## Contact Hotline & WhatsApp
- **Official Contact Number**: `+60 11-3071 9502`
- **WhatsApp Concierge**: `https://wa.me/601130719502`

## Key Commands
- `npm run dev`: Start local Vite development server
- `npm run build`: Compile TypeScript and build production bundle
- `npm run lint`: Lint source files using Oxlint
- `npm run preview`: Preview production build locally
