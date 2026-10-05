# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focused on conversion, responsive layout, smooth interactions, and clean component architecture.

## Live Demo

- Live URL: Add deployment link after publishing
- Repository: Add GitHub repository link after publishing

## Tech Stack

- Framework: React with Vite
- Styling: Custom CSS with theme variables
- Animations: Framer Motion
- Icons: Lucide React

## Standout Features Implemented

1. Custom Cursor: A pointer-only circular cursor follows mouse movement and reacts to interactive elements.
2. Scroll-Triggered Reveals: Page sections and cards animate into view with short, staggered reveals.
3. Animated Theme Switcher: Light and dark themes are controlled through React state and persisted in localStorage.
4. Scroll Progress Bar: A fixed top progress indicator reflects page scroll depth.

## Getting Started Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Component Architecture Overview

- `src/components/ui/` - Reusable interface pieces such as buttons and stat cards
- `src/components/layout/` - Navbar and footer
- `src/components/sections/` - Homepage sections including hero, academics, campus life, testimonials, and admissions
- `src/components/animation/` - Custom cursor, scroll progress, and reveal animation wrappers
- `src/data/` - Static brand, navigation, statistics, program, and testimonial content

## Brand Identity Retained

The redesign keeps core TIS messaging, official contact details, school statistics, and official website imagery while presenting them in a cleaner, higher-converting single-page experience.
