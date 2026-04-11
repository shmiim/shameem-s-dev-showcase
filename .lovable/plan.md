
# Muhammed Shameem K — Developer Portfolio

A premium, dark-themed single-page portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## Design System
- **Background**: Deep navy (#0A0F1E), slate surfaces (#141B2D), electric blue accent (#2A9FD6)
- **Fonts**: Sora (headings) + Plus Jakarta Sans (body) via Google Fonts
- **Style**: Glassmorphism cards, layered shadows, grain texture, animated gradient borders
- **Custom cursor glow** following mouse with blue trail

## Sections (in order)

### 1. Sticky Navbar
Blurred glass navbar with section links, active section highlighting on scroll.

### 2. Hero (Full viewport)
- Staggered text reveal (name → role → CTAs) with Framer Motion
- Typing effect subtitle cycling through roles
- Gradient heading "Muhammed Shameem K"
- Two CTAs: "View Projects" (filled) + "Download Resume" (ghost, placeholder link)
- Right side: auto-typing code block animation
- 3 floating gradient orbs (blue, teal, purple) with infinite CSS animation

### 3. About
- Split layout: bio text left, glassmorphism stat cards right
- Animated number counters (5 Projects, 3 Companies, 1 Chatbot System)

### 4. Skills ("Tech Stack")
- Categorized chips with icons (react-icons): Frontend, Backend, Database, Tools, Automation
- Stagger-in animation with scale + opacity
- Colored left-border accent per category

### 5. Experience (Timeline)
- Vertical glowing timeline (#2A9FD6)
- 3 entries: FitMyJob, Tecron (with WhatsApp green accent + "Automation" badge), Softronics
- Glassmorphism cards with bullet points

### 6. Projects (Grid)
- Responsive grid (1/2/3 columns)
- 5 projects with tilt-on-hover effect (mouse position tracking)
- Tecron card: WhatsApp green (#25D366) left border + green glow on hover
- Tech tags, GitHub link buttons, dramatic shadows

### 7. Contact
- Centered layout with Email, LinkedIn, GitHub as icon+text rows
- "Let's Connect" mailto CTA with glow effect
- Animated dot grid background

## Files to create/modify
- `src/pages/Index.tsx` — main page composing all sections
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Skills.tsx`
- `src/components/Experience.tsx`
- `src/components/Projects.tsx`
- `src/components/Contact.tsx`
- `src/components/CursorGlow.tsx`
- `src/lib/data.ts` — all content as constants
- `src/index.css` — custom CSS (grain texture, scrollbar, cursor, orbs)
- `tailwind.config.ts` — brand colors, custom keyframes
- Install: `framer-motion`, `react-icons`
