# Global Project Standards & UI/UX Guidelines

## 1. Anti-AI-Slop Icon & Visual Policy
- **Vector Icons Only**: Use only clean, single-weight 1.5px/2.0px vector line icons (Lucide React or bespoke SVGs).
- **Prohibited**: Never use generic shiny 3D emoji slop, rainbow sparkle overloads, or tacky clip-art badges.
- **Icon Sizing**: Restrain sizes to `w-3.5 h-3.5` for inline tags, `w-4 h-4` for standard buttons, and `w-5 h-5` for section headers.
- **Visual Purpose**: Every icon must serve a functional action or key metric (e.g. phone call, calendar reservation, measure gauge).

## 2. Editorial Typography & Color Palette
- **Palette**: Obsidian Black (`#09090b`), Graphite Studio Slate (`#121215`, `#18181b`), Brushed Bronze/Gold accents (`#c9a86b`, `#e5c07b`), and Hairline Borders (`#27272a`).
- **Headings**: Serif display typeface (`Cinzel`) paired with sans-serif body (`Plus Jakarta Sans`) and crisp monospaced metadata brackets (`font-mono`, e.g. `[01 // ANATOMICAL MAPPING]`).
- **Contrast**: Maintain strict WCAG AA contrast compliance with clear hierarchy (Tier 1: `text-white`, Tier 2: `text-zinc-300`, Tier 3: `text-zinc-500`, Accent: `text-amber-400`).

## 3. Navigation Bar & Header Standards
- **Logo `#home` Link**: The brand logo anchor MUST link explicitly to `#home`.
- **Top Section**: The hero section must have `id="home"` to accept `#home` anchor scrolling.
- **Uncluttered Single-Line Navigation**: Keep navbar link labels concise, uppercase, and non-wrapping (e.g. `ARTISTS`, `STYLES`, `GALLERY`, `CANVAS STUDIO`, `ESTIMATOR`, `PROCESS`, `AFTERCARE`, `FAQ`, `CONTACT`).
- **Sticky Blur**: Header uses `fixed top-0 inset-x-0 z-50` with subtle backdrop blur and hairline border on scroll.
- **Mobile Menu**: Responsive slide-over menu drawer on mobile (`lg:hidden`) with direct 1-tap call and WhatsApp concierge triggers.

## 4. Form Accessibility & Best Practices
- Every `<input>` and `<textarea>` must have:
  - An explicit `id` and corresponding `<label htmlFor="...">`.
  - An explicit `name` attribute.
  - A browser-standard `autoComplete` attribute (`name`, `email`, `tel`, `off`).
- High-visibility focus indicators (`focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40`).

## 5. Contact Details Standard
- All telephone links: `tel:+601130719502`
- All WhatsApp links: `https://wa.me/601130719502`
- Display format: `+60 11-3071 9502`
