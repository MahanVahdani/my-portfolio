# ✦ Mahan Vahdani Sanavi - Developer Portfolio

A production-ready, fully animated Next.js developer portfolio template. Designed to be forked and personalised entirely through a single configuration file — no UI code changes needed.

---

## Features

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion 13](https://www.framer.com/motion/) with `LazyMotion` |
| Form Validation | [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/) |
| Email | [Resend](https://resend.com/) |
| Rate Limiting | [Upstash Redis](https://upstash.com/) |
| Testing | [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) |

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/MahanVahdani/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Resend API key and other secrets

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Configuration Guide

**All personalisation lives in one file:**

```
src/config/portfolio.config.ts
```

You never need to touch the UI code. The config file is structured into named sections, each with a JSDoc comment explaining the available options:

| Section | What it controls |
|---|---|
| `seo` | Title, meta description, Open Graph, Twitter cards |
| `sections` | Toggle sections on/off with `true` / `false` |
| `profile` | Your name, role, email, avatar, and social links |
| `projects` | Project cards with image, description, and live link |
| `skills` | Skill cards with logo and proficiency percentage |
| `experiences` | Work history with company, role, period, and achievements |
| `testimonials` | Recommendations from colleagues or clients |
| `contactFields` | Form field definitions (label, type, placeholder) |

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
# Required for the contact form
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your@email.com

# Required for rate limiting
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...

# Optional — your production domain (used for SEO canonical URLs)
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com

# Optional — Google Analytics measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
npm test           # Run Jest unit tests
npm run test:watch # Run tests in watch mode
```

---

## Folder Structure

```
my-portfolio/
├── public/
│   └── images/              # Static assets (profile, project screenshots, logos)
│       ├── companies/
│       ├── projects/
│       ├── skills/
│       └── testimonials/
├── src/
│   ├── app/                 # Next.js App Router (layout, page, API routes)
│   │   ├── api/contact/     # Contact form API endpoint (Resend + rate limit)
│   │   ├── globals.css      # Global styles and Tailwind base layer
│   │   ├── layout.tsx       # Root layout (fonts, metadata, theme provider)
│   │   └── page.tsx         # Homepage — assembles all sections
│   ├── components/
│   │   ├── forms/           # ContactForm (rendering only — logic in hooks/)
│   │   ├── layout/          # Shell, Sidebar, Navigation, MotionProvider
│   │   ├── sections/        # One folder per page section (hero, experience…)
│   │   └── ui/              # Reusable primitives (GlassCard, Button, motion…)
│   ├── config/
│   │   └── portfolio.config.ts  # ← START HERE to personalise the site
│   ├── hooks/
│   │   └── useContactForm.ts    # Form state & submission logic
│   ├── lib/
│   │   ├── analytics/       # GA event helpers
│   │   ├── theme/           # next-themes provider
│   │   ├── validations/     # Zod schema for the contact form
│   │   └── utils.ts         # cn() Tailwind class merger
│   ├── types/
│   │   └── portfolio.ts     # TypeScript types + Zod schema for the config
│   └── __tests__/           # Jest + RTL test files
│       ├── utils.test.ts
│       └── ContactForm.test.tsx
├── __mocks__/               # Static asset mock for Jest
├── jest.config.ts
├── jest.setup.ts
├── next.config.ts
└── tsconfig.json
```

---

## Deploying

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push your fork to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Add your environment variables in the Vercel dashboard.
4. Click **Deploy**.

---

## License

[MIT](./LICENSE) — free to use for personal and commercial projects.
