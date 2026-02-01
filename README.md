# Delegate AI Agency Website

A modern, animated website for Delegate AI Agency - a UK-based AI automation agency helping SMEs automate their operations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js
- **Icons:** Lucide React
- **Language:** TypeScript

## Features

### UI Components

Custom animated UI components in `/components/ui/`:

- **`flow-gradient-hero-section.tsx`** - WebGL liquid gradient background with Three.js
- **`gradient-text.tsx`** - Animated gradient text effect
- **`shiny-button.tsx`** - Button with shine animation
- **`animated-counter.tsx`** - Numbers that count up on scroll
- **`marquee.tsx`** - Infinite horizontal scroll
- **`testimonial-card.tsx`** - Review cards with star ratings
- **`grid-pattern.tsx`** - SVG grid and dot pattern backgrounds
- **`tilt-card.tsx`** - 3D perspective tilt effect on hover
- **`sparkles-text.tsx`** - Text with floating sparkle SVGs
- **`bento-grid.tsx`** - Interactive solution cards grid
- **`button.tsx`** - Button component with variants (CVA)
- **`badge.tsx`** - Badge component with variants

### Pages

- **Home (`/`)** - Hero with liquid gradient, solutions preview, stats, testimonials
- **Solutions (`/solutions`)** - AI automation solutions with 3D tilt cards
- **About (`/about`)** - Company info, founder, values, technology stack
- **How It Works (`/how-it-works`)** - 5-step process with animated timeline
- **Pricing (`/pricing`)** - Pricing tiers with FAQ accordion
- **Contact (`/contact`)** - Contact form with animated steps

### Animations

- Liquid gradient WebGL background (interactive with mouse/touch)
- Staggered fade-up animations on scroll
- 3D tilt effects on cards
- Animated counters
- Floating shapes and blobs
- Marquee scrolling
- Sparkle effects

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Dependencies

Key packages:
- `framer-motion` - Animation library
- `three` - 3D graphics library
- `class-variance-authority` - Component variants
- `clsx` + `tailwind-merge` - Utility class merging
- `lucide-react` - Icon library
- `react-use-measure` - Measure DOM elements

## Project Structure

```
delegate-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── how-it-works/      # How it works page
│   ├── pricing/           # Pricing page
│   ├── solutions/         # Solutions page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & animations
├── components/
│   ├── ui/                # Reusable UI components
│   ├── Hero.tsx           # Hero section with liquid gradient
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ContactForm.tsx    # Contact form component
│   ├── PricingTier.tsx    # Pricing card component
│   └── SolutionCard.tsx   # Solution card component
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
└── public/                # Static assets
```

## Customization

### Colors

CSS variables are defined in `globals.css`:
- `--foreground` - Primary text color (#171717)
- `--background` - Background color (#ffffff)
- `--muted` - Muted background (#f5f5f5)
- `--muted-foreground` - Muted text (#737373)
- `--border` - Border color (#e5e5e5)

### Liquid Gradient

The hero gradient can be customized in `flow-gradient-hero-section.tsx`:
- Adjust colors in the `uniforms` object
- Modify `uSpeed` for animation speed
- Change `uIntensity` for color vibrancy
- Adjust `uGradientSize` for blob size

## License

Private - Delegate AI Agency
