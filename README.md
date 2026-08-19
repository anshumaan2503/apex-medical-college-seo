# Apex Medical College – SEO & Performance Optimization

A high-performance, accessible, and SEO-optimized single-page web application built with Next.js App Router, TypeScript, and Vanilla CSS. This project serves as a practical implementation and demonstration of modern web performance optimization, technical SEO, digital accessibility (WCAG 2.1 AA), and enterprise security headers.

---

## 📋 Project Overview

This project was built to test and execute production-grade frontend optimization techniques on a real deployed application. Rather than focusing solely on visual UI implementation, the objective was to analyze technical bottlenecks, optimize client-side bundle execution, harden security, and achieve optimal Google Lighthouse scores across all metrics.

### Key Engineering Workflows Executed:
- **Architecture & Component Refactoring**: Migrated static sections to React Server Components (RSC) to reduce client-side JavaScript hydration overhead.
- **Technical SEO Implementation**: Automated XML sitemap generation, robots.txt configuration, metadata tags, and JSON-LD structured data.
- **Accessibility Engineering**: Enforced semantic HTML, ARIA control labeling, skip-to-content keyboard navigation, and WCAG AA contrast compliance.
- **Security Hardening**: Implemented strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and frame protection headers in `next.config.ts`.
- **Performance Tuning**: Addressed LCP, TBT, and script execution delays using image preloading, package import optimization (`lucide-react`), modern build target compilation (`ES2022`), and font optimization.
- **Auditing & Iterative Validation**: Measured and verified improvements using Lighthouse audits in clean environment conditions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (`src/app/globals.css`)
- **Metadata & SEO**: Next.js Metadata API
- **Asset Optimization**: `next/image`
- **Iconography**: [Lucide React](https://lucide.dev/)

---

## 🔍 SEO Implementation

The application implements a comprehensive technical SEO foundation:

- **Dynamic Metadata**: Title tags, meta descriptions, and targeted keywords configured via Next.js `Metadata` API in `layout.tsx`.
- **Canonical URLs**: Explicit canonical tags (`https://apex-medical-college-seo.onrender.com`) to prevent duplicate indexing issues.
- **Open Graph & Twitter Cards**: Formatted OG and Twitter metadata for social sharing previews.
- **Automated Sitemap (`src/app/sitemap.ts`)**: Generates an XML sitemap defining route priorities and update frequencies.
- **Robots Configuration (`src/app/robots.ts`)**: Defines crawler permissions and points search engines directly to the XML sitemap.
- **Structured Data (`src/components/StructuredData.tsx`)**: Injects Schema.org `CollegeOrUniversity` JSON-LD payload describing institution name, address, contact details, and accreditation.
- **Semantic HTML Structure**: Hierarchical structure utilizing `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` tags with a single `<h1>` tag per page.
- **Accessible Asset Metadata**: Descriptive `alt` tags on all non-decorative images.

---

## ⚡ Performance Optimization

The following optimizations were implemented to minimize main-thread work and speed up initial page render:

- **React Server Components (RSC)**: Converted static sections (`HeroSection`, `AboutSection`, `CoursesSection`, `WhyChooseSection`, `CampusSection`, `AdmissionsSection`, `Footer`) to Server Components. Hydration JavaScript is executed only for the mobile navbar toggle (`Navbar.tsx`).
- **Scroll Event Listener Removal**: Replaced JavaScript scroll listeners with CSS position and backdrop filters to keep the main thread free.
- **LCP Image Preloading**: Added `<link rel="preload" as="image">` for the hero image (`/images/hero.jpg`) alongside `priority` and explicit `sizes` attributes.
- **Modern Build Compilation**: Set TypeScript compiler target to `ES2022` in `tsconfig.json` to eliminate unnecessary polyfills (`Array.prototype.at`, `Object.hasOwn`).
- **Package Import Optimization**: Configured `experimental: { optimizePackageImports: ["lucide-react"] }` in `next.config.ts` to tree-shake unused icons from the production JS bundle.
- **Font Optimization**: Utilized `next/font/google` for self-hosted font loading with explicit `display: "swap"` and pre-calculated fallback font metrics to avoid layout shifts.

---

## ♿ Accessibility Improvements (WCAG 2.1 AA)

- **ARIA Controls & Labels**: Added explicit `aria-label` attributes to mobile menu triggers and social media icon links.
- **Decorative Icon Hiding**: Applied `aria-hidden="true"` to SVG icons across all sections to prevent screen reader noise.
- **Rating Container Semantics**: Applied `role="img"` and `aria-label` to star rating groups.
- **Keyboard Navigation**: Implemented a visible-on-focus `.skip-link` pointing directly to `#main-content`.
- **Focus Indicators**: Standardized high-contrast `:focus-visible` outline rings across all interactive buttons and links.
- **Contrast & Hierarchy**: Hardened text colors to achieve 4.5:1+ contrast ratios and removed all `tabindex` values greater than `0`.

---

## 🛡️ Security & Best Practices

Configured custom security headers in `next.config.ts`:

- **Content-Security-Policy (CSP)**: Restricts script, style, font, and frame source origins.
- **X-Content-Type-Options**: Set to `nosniff` to prevent MIME-type sniffing.
- **X-Frame-Options**: Set to `DENY` to protect against clickjacking attacks.
- **Referrer-Policy**: Configured to `strict-origin-when-cross-origin`.
- **Permissions-Policy**: Restricted unused browser APIs (`camera=()`, `microphone=()`, `geolocation=()`).
- **Strict-Transport-Security (HSTS)**: Configured with `max-age=63072000; includeSubDomains; preload`.

---

## 📊 Lighthouse Audit Results

Final Chrome Lighthouse audit scores (Mobile profile):

| Category | Score | Status |
|----------|------:|:------:|
| **Performance** | **96** | 🟢 |
| **Accessibility** | **96** | 🟢 |
| **Best Practices** | **100** | 🟢 |
| **SEO** | **100** | 🟢 |

> *Note: Lighthouse scores can vary slightly depending on network latency, host response times (e.g., free-tier cold starts), device capabilities, and browser extensions.*

---

## 📈 Optimization Journey (Before vs After)

| Metric / Audit | Initial Audit | Final Audit | Key Optimization Drivers |
|---|:---:|:---:|---|
| **Performance** | 44 | **96** | RSC migration, polyfill elimination (`ES2022`), icon tree-shaking, LCP preload |
| **Accessibility** | 87 | **96** | Added ARIA labels, `skip-link`, `aria-hidden` decorative icons, contrast fixes |
| **Best Practices** | 96 | **100** | Implemented CSP, HSTS, X-Frame-Options, nosniff headers |
| **SEO** | 100 | **100** | Structured JSON-LD data, `sitemap.ts`, `robots.ts`, semantic tags |
| **Total Blocking Time (TBT)** | 2,280 ms | **60 ms** | Removed client hydration overhead and scroll JS listeners |
| **First Contentful Paint (FCP)**| 3.1 s | **1.3 s** | Font preloading, static asset serving, reduced CSS payload |

---

## 📁 Repository Structure

```text
medical-college-seo/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── campus.jpg
│       ├── course-1.jpg
│       ├── course-2.jpg
│       ├── course-3.jpg
│       └── hero.jpg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/
│       ├── AboutSection.tsx
│       ├── AdmissionsSection.tsx
│       ├── CampusSection.tsx
│       ├── CoursesSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── Navbar.tsx
│       ├── StructuredData.tsx
│       └── WhyChooseSection.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anshumaan2503/apex-medical-college-seo.git
   cd medical-college-seo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

---

## 🚀 Deployment

The application is deployed live on Render:
- **Live URL**: [https://apex-medical-college-seo.onrender.com](https://apex-medical-college-seo.onrender.com)