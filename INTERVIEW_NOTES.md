# Interview Quick-Reference Notes: Apex Medical College Project

A concise study guide for discussing the technical details, architecture decisions, SEO concepts, performance metrics, and accessibility standards implemented in this project.

---

## 💬 60-Second Project Overview

> "I built and optimized a high-performance single-page application for a medical college using Next.js 16 App Router, TypeScript, and Vanilla CSS. My objective was to practically implement and test SEO, performance, accessibility, and security optimizations on a production-deployed site. 
> 
> By refactoring components to React Server Components, preloading critical above-the-fold assets, tree-shaking icon bundles, and updating the compiler target to ES2022, I reduced Total Blocking Time from over 2,200ms down to 60ms. I also implemented Schema.org JSON-LD structured data, dynamic XML sitemaps, WCAG 2.1 AA accessibility features like skip links and ARIA labels, and strict security headers like CSP and HSTS. 
> 
> The final application achieved 96 Performance, 96 Accessibility, 100 Best Practices, and 100 SEO on Chrome Lighthouse."

---

## 🔍 SEO Concepts & Answers

### Q: What is Technical SEO?
**Answer**: Technical SEO refers to website and server optimizations that help search engine spiders crawl, index, and render pages efficiently. It includes infrastructure elements like site speed, mobile responsiveness, XML sitemaps, canonical tags, structured data, and security headers.

### Q: What is a Sitemap and how is it implemented?
**Answer**: A sitemap is an XML file that lists all important URLs on a website, informing search engines about page structure, modification dates, and priorities. In Next.js App Router, it is generated programmatically via `src/app/sitemap.ts`, returning a structured array of URL metadata.

### Q: What is `robots.txt`?
**Answer**: A text file that provides directives to web crawlers regarding which paths can or cannot be processed. In Next.js, `src/app/robots.ts` exports a function returning allowed/disallowed paths and points directly to the sitemap URL.

### Q: What is a Canonical URL?
**Answer**: A canonical URL (`<link rel="canonical" href="...">`) specifies the authoritative version of a web page. It prevents duplicate content issues when a page can be accessed via multiple URLs (e.g., HTTP vs HTTPS or tracking parameter strings).

### Q: What is JSON-LD Structured Data?
**Answer**: JSON-LD (JavaScript Object Notation for Linked Data) is a standardized format (Schema.org) used to annotate web page content with explicit entity meaning. In this project, a `CollegeOrUniversity` JSON-LD payload was injected via `<script type="application/ld+json">` to describe institutional name, accreditation, address, and contact points to search engine knowledge graphs.

### Q: What is Open Graph (OG) Metadata?
**Answer**: A protocol created by Facebook that enables web pages to become rich objects in social feeds. Defining OG tags (`og:title`, `og:description`, `og:image`, `og:url`) ensures proper card previews when links are shared across platforms.

### Q: How does Next.js App Router help with SEO?
**Answer**: Next.js App Router supports Server Components by default, rendering HTML directly on the server so crawlers receive complete content without executing JavaScript. It also provides a built-in `Metadata` API that dynamically injects canonical links, meta tags, and Open Graph objects on the server.

---

## ⚡ Performance Concepts & Answers

### Q: What is Google Lighthouse?
**Answer**: An open-source, automated tool for measuring web page quality across Performance, Accessibility, Best Practices, and SEO metrics based on real synthetic testing environments.

### Q: What is Largest Contentful Paint (LCP)?
**Answer**: Core Web Vitals metric measuring the time it takes for the largest visual element (image, text block, video) in the viewport to finish rendering. Good LCP is under 2.5s. In this project, LCP was optimized by preloading above-the-fold hero images and removing custom font render delays.

### Q: What is First Contentful Paint (FCP)?
**Answer**: Measures the time from navigation start to when the browser renders the first piece of DOM content (text, image, SVG). Good FCP is under 1.8s.

### Q: What is Cumulative Layout Shift (CLS)?
**Answer**: Core Web Vitals metric measuring visual stability by tracking unexpected layout shifts during page loading. Good CLS is 0. In this project, CLS was kept at 0 by defining explicit width/height attributes on `next/image` components and setting fallback fonts.

### Q: What is Total Blocking Time (TBT)?
**Answer**: Measures the total amount of time between FCP and Time to Interactive (TTI) where the main thread was blocked by long tasks (tasks taking > 50ms). In this project, TBT was reduced from 2,280ms to 60ms by converting static sections to Server Components and removing JavaScript scroll listeners.

### Q: Why does client-side JavaScript degrade web performance?
**Answer**: JavaScript must be downloaded, uncompressed, parsed, compiled, and executed on the client browser. Heavy JS execution blocks the single-threaded main thread, delaying input responsiveness and rendering.

### Q: Why can Lighthouse scores vary between runs?
**Answer**: Lighthouse scores fluctuate due to network throttling variance, CPU availability, hosting cold starts, server latency, and browser extension interference (which inject content scripts into the page).

---

## ♿ Accessibility Concepts & Answers

### Q: Why are ARIA labels important?
**Answer**: Accessible Rich Internet Applications (ARIA) attributes provide explicit accessible names and roles to elements (like icon-only buttons or custom widgets) that lack descriptive inner text, allowing screen reader users to understand their purpose.

### Q: What is Semantic HTML?
**Answer**: Using HTML tags according to their native structural meaning (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`, `<a>`) rather than unsemantic `<div>` containers. Semantic HTML provides built-in keyboard accessibility, focus behavior, and screen reader tree mapping.

### Q: Why should `tabindex` values greater than 0 be avoided?
**Answer**: A positive `tabindex` (e.g., `tabindex="3"`) overrides the natural DOM tab ordering, leading to unpredictable navigation flow for screen reader and keyboard users. Interactive elements should rely on standard DOM order (`tabindex="0"` or native focusable elements like `<button>` and `<a>`).

### Q: What is a Skip-to-Content Link?
**Answer**: An accessible anchor link placed at the very top of the HTML document (`href="#main-content"`) that is visually hidden until focused via keyboard navigation. It allows screen reader and keyboard users to bypass repetitive header navigation links and jump directly to primary page content.
