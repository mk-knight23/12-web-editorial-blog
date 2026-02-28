# 12-web-editorial-blog

A sophisticated, high-performance blog platform designed for modern storytellers. Featuring dynamic content rendering, advanced typography, and a seamless React architecture.

## Description

A premium React editorial blog template modernized with React 19, Vite 6, and Tailwind CSS v4. Features dynamic content rendering, sophisticated typography, and smooth animations powered by Framer Motion.

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS v4 |
| **Build Tool** | Vite 6 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion 12 |
| **Routing** | React Router 7 |
| **Testing** | Vitest, React Testing Library |
| **Linting** | ESLint 9 |

---

## 🏗️ Architecture

### Project Structure

```
12-web-editorial-blog/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Typography.tsx
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Articles.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── Footer.tsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Container.tsx
│   │   └── features/     # Feature-specific components
│   │       ├── ScrollProgress.tsx
│   │       ├── ReadingTime.tsx
│   │       └── ShareButtons.tsx
│   ├── data/             # Content data
│   │   ├── articles.ts
│   │   └── categories.ts
│   ├── hooks/            # Custom hooks
│   │   ├── useScroll.ts
│   │   ├── useReadingTime.ts
│   │   └── useMediaQuery.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── utils/            # Utility functions
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── docs/                 # Documentation
│   ├── ARCHITECTURE.md   # Detailed architecture
│   ├── DESIGN.md         # Design system
│   └── DEPLOY.md         # Deployment guide
├── public/               # Static assets
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind config
├── render.yaml           # Render deployment config
└── README.md             # This file
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 12 |
| **Routing** | React Router 7 |
| **Build Tool** | Vite 6 |
| **Testing** | Vitest, React Testing Library |

### Key Architectural Patterns

- **Component-First**: Reusable, composable UI components
- **Type Safety**: Full TypeScript coverage
- **Scroll-Linked Motion**: Real-time reading progress via Framer Motion
- **Editorial Grid**: Dynamic article layout with transitions
- **Performance-First**: Sub-second page loads, tree-shaken bundles
- **Accessibility-First**: ARIA labels, semantic HTML

### Core Features

```typescript
{
  scrollProgress: {
    hook: "useScroll",
    indicator: "Real-time reading progress bar",
    performance: "GPU-accelerated"
  },
  editorialGrid: {
    layout: "Dynamic article cards",
    transition: "Grayscale to color on hover",
    responsive: "Multi-resolution support"
  },
  newsletter: {
    design: "High-contrast CTA",
    effects: "Backdrop blur",
    integration: "Ready for email service"
  }
}
```

### Multi-Platform Deployment

| Platform | URL | Auto-Deploy |
|----------|-----|-------------|
| Vercel | https://12-web-editorial-blog.vercel.app | ✅ |
| Render | https://12-web-editorial-blog.onrender.com | ✅ |
| Firebase | https://web-editorial-blog.web.app | ✅ |
| AWS Amplify | https://main.d12-web-editorial-blog.amplifyapp.com | ✅ |
| GitHub Pages | https://mk-knight23.github.io/12-web-editorial-blog/ | ✅ |

### Performance Optimizations

- **Sub-second Loads**: Vite 6 optimization
- **GPU Filtering**: Grayscale images via CSS (zero JS overhead)
- **Tree Shaking**: Icon library and dependencies
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: Responsive images

### Design System

```typescript
// Editorial Theme
{
  typography: {
    heading: "Massive, serif headings",
    body: "Clean, readable sans-serif",
    mono: "Technical code blocks"
  },
  color: {
    primary: "slate-900",
    secondary: "slate-600",
    accent: "emerald-500",
    neutral: "slate-50"
  },
  spacing: {
    editorial: "Generous whitespace",
    article: "Optimal line length (65-75 chars)"
  }
}
```

*See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed documentation.*

---

- Professional content management interface
- Sophisticated typography and layout options
- Responsive multi-resolution support
- Smooth scroll progress indicator
- Newsletter subscription section
- Mobile-responsive navigation with hamburger menu
- Accessibility-first design with ARIA labels
- Error boundary for graceful error handling
- Comprehensive test coverage

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm run test
```

## Live Links

- **Vercel**: https://12-web-editorial-blog.vercel.app
- **Render**: https://12-web-editorial-blog.onrender.com
- **Firebase**: https://web-editorial-blog.web.app
- **AWS Amplify**: https://main.d12-web-editorial-blog.amplifyapp.com
- **GitHub Pages**: https://mk-knight23.github.io/12-web-editorial-blog/

Auto-deployed from GitHub main branch.

## Deployment

### Render (One-Click Deploy)
This repository includes a `render.yaml` blueprint for automated deployment:
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect repository: `mk-knight23/12-web-editorial-blog`
4. Render will auto-detect and apply the blueprint configuration

### Vercel
Connect the repository to Vercel for automatic deployments on every push to main.

### Firebase Hosting
Run `firebase deploy` to deploy to Firebase Hosting.

### AWS Amplify
Connect the repository in AWS Amplify Console for automatic deployments.

### Manual Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Design System](docs/DESIGN.md)
- [Deployment Guide](docs/DEPLOY.md)

---

*Maintained by [Kazi Musharraf](https://github.com/mk-knight23)*

Last Updated: 2026-02-28
