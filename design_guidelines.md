# Design Guidelines: Premium DevOps Portfolio

## Design Approach

**Reference-Based Hybrid**: Combining Linear's minimalist tech aesthetic with Stripe's sophisticated restraint, enhanced by glassmorphism and terminal-inspired elements. Drawing from modern developer portfolios while maintaining a unique identity through the glass morphic treatment.

## Core Design Principles

1. **Premium Glassmorphism**: Frosted glass cards with subtle transparency, backdrop blur, and refined borders
2. **Terminal Authenticity**: Monospace accents, cursor effects, and subtle scan lines for tech credibility
3. **Depth Through Layers**: Strategic use of z-index and blur to create spatial hierarchy
4. **Restrained Motion**: Subtle entrance animations only; avoid distracting effects

## Typography System

**Primary Font**: Inter (Google Fonts) - Clean, modern sans-serif for body text and headings  
**Accent Font**: JetBrains Mono (Google Fonts) - Monospace for terminal elements, code snippets, technical labels

**Hierarchy**:
- Hero Title: 4xl to 6xl, font-bold, tracking-tight
- Section Headings: 2xl to 3xl, font-semibold  
- Subsection Titles: xl, font-medium
- Body Text: base, font-normal, leading-relaxed
- Terminal Text: JetBrains Mono, sm to base
- Labels/Tags: xs to sm, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm  
**Container Strategy**: max-w-6xl for content sections, full-width for hero/backgrounds  
**Section Padding**: py-16 md:py-24 for major sections, py-8 md:py-12 for subsections  
**Component Gaps**: gap-6 for cards, gap-4 for lists, gap-8 for section spacing

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with gradient background
- Centered glassmorphism card containing name, title, location
- Floating geometric shapes in background (subtle, blurred)
- Terminal-style cursor blink effect on title
- No large hero image - rely on glassmorphism and gradients for visual impact

### Navigation
- Fixed glassmorphism navbar with backdrop-blur-lg
- Smooth scroll behavior with active section highlighting
- Mobile: Hamburger menu with slide-in panel
- Desktop: Horizontal links with terminal-style underline hover

### About/Profile Section
- Terminal window mockup with typed text animation
- Glassmorphism container with simulated terminal header (dots, title bar)
- Profile summary displayed as if being typed in terminal
- Subtle scan line overlay effect

### Experience Timeline
- Vertical timeline with glassmorphism cards for each role
- Company logo placeholders (circular, frosted backgrounds)
- Expandable achievement lists with bullet points
- Date ranges displayed in monospace font
- Alternating card positions (desktop only)

### Skills Matrix
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Glassmorphism badges for each skill category
- Icon placeholders from Heroicons (use Terminal, Server, Cloud, Shield, Code icons)
- Hover: subtle lift effect (transform scale-105)
- Organized by categories as headings with tags beneath

### Certifications & Education
- Horizontal card layout for certificates
- Glassmorphism cards with border gradients
- Badge/shield icons from Heroicons
- Institution and year in monospace

### Contact Section
- Two-column layout: Contact info + Form (if needed) or centered card
- Glassmorphism contact cards with icons (Email, Phone, Location)
- Terminal-style hover states on contact buttons
- Social links with icon-only display

### Footer
- Minimal, centered text
- Terminal prompt styling: "portfolio@syed-ahamed:~$"
- Copyright and small tech stack badge

## Glassmorphism Treatment

**Standard Glass Card**:
- Background: rgba with 10-15% opacity over dark base
- Backdrop filter: blur(16px) to blur(24px)
- Border: 1px solid with rgba white/cyan at 20% opacity
- Border radius: rounded-xl to rounded-2xl
- Shadow: Multiple layers for depth (sm + lg with low opacity)

**Gradient Backgrounds**:
- Dark base (slate-900 to slate-950)
- Radial gradients with cyan-500/10, emerald-500/10 for terminal glow
- Mesh gradients for hero section depth

## Animation Guidelines

**Entrance Only** (using Framer Motion):
- Fade-in on scroll: opacity 0 to 1, y: 20 to 0, duration 0.5s
- Stagger children in lists by 0.1s
- Terminal typing effect: Character-by-character reveal in about section
- NO hover animations beyond subtle scale/opacity changes
- NO continuous/looping animations

## Responsive Strategy

**Breakpoints**:
- Mobile: base (< 768px) - Single column, stacked sections
- Tablet: md (768px+) - Two-column grids where applicable
- Desktop: lg (1024px+) - Full multi-column layouts, timeline alternates

**Mobile Adjustments**:
- Reduce glass blur intensity for performance
- Simplify timeline to vertical-only
- Stack contact cards
- Reduce spacing: py-12 instead of py-24

## Technical Implementation Notes

- Use `backdrop-blur-md` to `backdrop-blur-xl` for glass effects
- Terminal cursor: Simple CSS animation with blink keyframes
- Smooth scroll: CSS `scroll-behavior: smooth`
- Icons: Heroicons via CDN (outline style for consistency)
- Avoid heavy JavaScript animations; prefer CSS transitions

## Images

**No large hero image**. Rely on:
- Gradient backgrounds with geometric shapes
- Abstract tech-themed SVG patterns (circuit boards, nodes)
- Company logos as small circular placeholders in experience timeline
- Certification badge graphics (AWS, Azure logos)

Position abstract geometric elements (circles, rectangles with gradients) scattered in hero background with blur and low opacity for depth without imagery.