<div align="center">

# ✦ Next.js Portfolio Template

**A blazing-fast, fully customizable developer portfolio — ready to deploy in minutes.**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_GITHUB_USERNAME%2FYOUR_REPO_NAME&env=RESEND_API_KEY,CONTACT_RECEIVER_EMAIL,RESEND_FROM_EMAIL&envDescription=Required%20for%20the%20contact%20form.%20Get%20your%20free%20API%20key%20at%20resend.com&envLink=https%3A%2F%2Fresend.com%2Fdocs)

</div>

---

## ✨ Features

- **App Router & React Server Components** — Built on Next.js 16 with the modern App Router for optimal performance.
- **Single-file Configuration** — Customize your entire portfolio (bio, skills, projects, testimonials) from one file: `src/config/portfolio.config.ts`.
- **Dark / Light Mode** — Elegant system-aware theme switching powered by `next-themes`.
- **Working Contact Form** — Sends emails via [Resend](https://resend.com) with optional rate limiting via [Upstash Redis](https://upstash.com).
- **Google Analytics (GDPR-ready)** — Consent-first GA4 integration with a cookie banner.
- **Glassmorphism UI** — Polished glass-card design system with animated background blobs.
- **Fully Typed** — End-to-end TypeScript with a strict `tsconfig`.
- **Zero Runtime Crashes** — Graceful fallbacks for all optional environment variables.

---

## 🚀 Quick Start in 3 Steps

### Step 1 — Clone & Install

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
```

### Step 2 — Personalize

Open `src/config/portfolio.config.ts` and fill in your details:

```ts
profile: {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  // ...
}
```

### Step 3 — Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your portfolio is live! 🎉

> For the contact form to work, you'll also need to set up a `.env.local` file. See the [Contact Form Setup](#-contact-form-setup) section below.

---

## 🎨 Customization Guide

### 1. Edit Your Content — `src/config/portfolio.config.ts`

This is the **single source of truth** for your entire portfolio. Everything you see on the page is driven by this file.

| Key | What it controls |
|---|---|
| `seo` | Page title, meta description, Open Graph & Twitter card |
| `sections` | Toggle entire sections on/off with `true` / `false` |
| `profile` | Your name, role, email, avatar path, and social links |
| `projects` | Project cards with name, image, description, and live link |
| `skills` | Skill name, proficiency percentage, and logo icon |
| `experiences` | Work history with company, role, period, and achievements |
| `testimonials` | Colleague/client recommendations |
| `contactFields` | The input fields rendered in the contact form |

**Example — hiding the Testimonials section:**

```ts
sections: {
  testimonials: false, // ← set to false to hide it
}
```

---

### 2. Swap Images & Assets — `/public/images/`

All images live under the `public/` directory. Simply replace any file to update it — no code changes needed.

```
public/
├── images/
│   ├── profile.png          ← Your profile photo (recommended: 400×400 px)
│   ├── companies/           ← Company logos used in Experience & Projects
│   ├── projects/            ← Project screenshots
│   ├── skills/              ← Skill logos (SVG recommended)
│   └── testimonials/        ← Headshots for testimonials
└── resume.pdf               ← Your downloadable resume (optional)
```

After replacing a file, update the corresponding path in `portfolio.config.ts`.

---

### 3. Adjust Theme Colors — `src/app/globals.css`

The design system uses CSS custom properties. Edit the `:root` and `.dark` blocks to change the color palette:

```css
:root {
  --background: #f8fafc;   /* Page background (light) */
  --foreground: #0f172a;   /* Primary text */
  --primary:    #14b8a6;   /* Accent / teal */
  --secondary:  #38bdf8;   /* Secondary accent / blue */
  --muted:      #64748b;   /* Subtle text & icons */
}

.dark {
  --background: #020617;   /* Page background (dark) */
  --primary:    #2dd4bf;
  --secondary:  #60a5fa;
  /* ... */
}
```

Changes take effect instantly — no rebuild needed in development.

---

### 4. Contact Form Setup

The contact form requires a free [Resend](https://resend.com) account.

**Create a `.env.local` file in the project root:**

```bash
cp .env.example .env.local
```

Then fill in the values:

```env
# ── Required ──────────────────────────────────────────────────────────────────
# Your Resend API key. Get one free at https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# The email address that receives contact form submissions
CONTACT_RECEIVER_EMAIL=your@email.com

# The sender address shown in the "From" field of the email
# Use "onboarding@resend.dev" for testing, or a verified domain for production
RESEND_FROM_EMAIL=onboarding@resend.dev

# ── Optional ──────────────────────────────────────────────────────────────────
# Upstash Redis — enables rate limiting (2 submissions per IP per hour)
# Get free credentials at https://upstash.com
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here

# Google Analytics 4 measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> **Note:** If `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are omitted, rate limiting is simply skipped — the contact form will still work perfectly.

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── images/                 # All static assets (photos, logos, icons)
│
├── src/
│   ├── app/
│   │   ├── api/contact/        # Contact form API route (Resend + rate limiter)
│   │   ├── globals.css         # Design tokens & global styles
│   │   ├── layout.tsx          # Root layout (metadata, GA, theme provider)
│   │   └── page.tsx            # Home page (assembles all sections)
│   │
│   ├── components/
│   │   ├── forms/              # ContactForm component
│   │   ├── layout/             # Sidebar, nav, cookie banner
│   │   ├── sections/           # Hero, About, Experience, Projects, Skills, etc.
│   │   └── ui/                 # Reusable primitives (Button, Input, Badge…)
│   │
│   ├── config/
│   │   └── portfolio.config.ts # ⭐ The single file you need to edit
│   │
│   ├── lib/
│   │   ├── analytics/          # GA4 consent & event helpers
│   │   ├── theme/              # ThemeProvider wrapper
│   │   ├── validations/        # Zod schema for the contact form
│   │   ├── resend.ts           # Resend client singleton
│   │   └── utils.ts            # cn() and other helpers
│   │
│   └── types/
│       └── portfolio.ts        # TypeScript types for the config
│
├── .env.example                # Template for required environment variables
├── next.config.ts
└── tsconfig.json
```

---

## 🌐 Deploy to Vercel

Click the button below to clone and deploy in one click. Vercel will prompt you for the required environment variables:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_GITHUB_USERNAME%2FYOUR_REPO_NAME&env=RESEND_API_KEY,CONTACT_RECEIVER_EMAIL,RESEND_FROM_EMAIL&envDescription=Required%20for%20the%20contact%20form.%20Get%20your%20free%20API%20key%20at%20resend.com&envLink=https%3A%2F%2Fresend.com%2Fdocs)

> **Before clicking:** replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` in the button URL above with your actual GitHub details.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework (App Router, API Routes, SSR) |
| [React 19](https://react.dev) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Resend](https://resend.com) | Transactional email for the contact form |
| [Upstash Redis](https://upstash.com) | Rate limiting (optional) |
| [Zod](https://zod.dev) | Runtime validation |
| [React Hook Form](https://react-hook-form.com) | Form state management |
| [Sonner](https://sonner.emilkowal.ski) | Toast notifications |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [Swiper](https://swiperjs.com) | Testimonials carousel |

---

## 📄 License

MIT — free to use, modify, and distribute. Attribution appreciated but not required.
