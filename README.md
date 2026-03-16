# Kirill Tiukin — Vice Chair Campaign Site

Built with **Next.js 14 · TypeScript · Tailwind CSS**

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Your Video

Open `components/Hero.tsx` and find the comment block:

```tsx
{/* ── SWAP THIS DIV FOR YOUR VIDEO ── */}
```

Replace the placeholder `<div>` with either:

**Local video file** (put your file in `/public/`):
```tsx
<video
  src="/your-video.mp4"
  controls
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**YouTube embed:**
```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="absolute inset-0 w-full h-full border-0"
/>
```

## Adding the Vote URL

Open `lib/data.ts` and update:

```ts
export const VOTE_URL = "https://your-voting-link.com";
```

This updates both the hero button and the CTA section button automatically.

## Project Structure

```
kirill-site/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles + CSS utilities
├── components/
│   ├── Navbar.tsx       # Fixed nav with mobile menu
│   ├── Hero.tsx         # Hero + video + CTA buttons
│   ├── StatsStrip.tsx   # 4 key stats
│   ├── Vision.tsx       # Vision cards grid
│   ├── WhyMe.tsx        # Profile card + 4 reasons
│   ├── Experience.tsx   # Timeline
│   ├── Skills.tsx       # Skills grid
│   ├── CTA.tsx          # Bottom CTA section
│   ├── Footer.tsx       # Footer
│   └── useReveal.ts     # Scroll-reveal hook
├── lib/
│   └── data.ts          # All content — edit here
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```
