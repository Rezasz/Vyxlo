# VyXlo DMS Website — Comprehensive Handoff Document

> Written: 2026-03-30
> Purpose: Complete context for any future session continuing this work. Read this before touching anything.

---

## 1. What This Project Is

**VyXlo DMS** is a React/TypeScript marketing + light product portal website for a Document Management System (DMS) called VyXlo. It is a product of **Vyxlo.com**, a subsidiary of **Kanz.ai**, based in Dubai, UAE.

The DMS product itself (the backend/app) is a separate repo: `/Users/rezasahebozamani/Documents/source/Python-Vyxlo/`. The website is purely marketing + a knowledge base portal + a "request access" form.

**Live demo app:** `https://91.107.255.176:8080/` (opens in new tab from "Try Free" button)
**LinkedIn:** `https://www.linkedin.com/company/kanz-ai/`
**Contact:** contact@vyxlo.com · +971-42327866 · 702 Opal Tower, Business Bay, Dubai, UAE

---

## 2. Deployment

- **Platform:** Vercel (confirmed by error ID format `bom1:bom1::xxx` = Mumbai edge)
- **Repo:** `github.com/Rezasz/Vyxlo` (branch: `main`)
- **Build command:** `tsc && vite build` (via `npm run build`)
- **SPA routing fix:** `vercel.json` exists at project root — rewrites all `/(.*)`→`/index.html`
  - This was added because direct URL access (`/features`, `/security`, etc.) returned Vercel 404
  - **Without this file, direct navigation breaks.** Do not delete it.

---

## 3. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18.2 + TypeScript 5.2 |
| Build | Vite 5.0 |
| Routing | React Router DOM 6.20 |
| Styling | Tailwind CSS 3.3.5 (custom token theme) |
| Icons | lucide-react 0.294.0 |
| SEO | react-helmet-async 1.3.0 |
| Notifications | react-hot-toast 2.4.1 |
| Markdown | react-markdown 8.0.7 |
| Auth | Custom localStorage auth (NOT Firebase — see §9) |
| CRM | HubSpot embedded form (portal `143927153`, form `840f4d63-2d82-40c1-a76d-5920cf9dd81d`) |
| Email | EmailJS + Express server.js (msmtp) |
| Storage | Firebase Storage (for knowledge base documents) |

**Node/npm version:** compatible with node_modules as-is (npm install works cleanly)

---

## 4. Design System — Color Tokens

All colors are defined in `tailwind.config.js`. **Do not use raw hex values or Tailwind's default colors (blue-*, etc.) — use only these tokens.**

```js
// tailwind.config.js
colors: {
  gold: {
    DEFAULT: '#EBBB4A',   // primary CTA, icons, accents
    dark:    '#D9A93A',   // hover state for gold
    50:      '#FDFAF0',   // very light gold background
    100:     '#FBF3D5',   // light gold background (icon containers)
    200:     '#F7EE8B',   // soft yellow (highlight/glow)
  },
  charcoal: {
    DEFAULT: '#3A3A3C',   // primary text, dark section bg
    muted:   '#6B6B6D',   // secondary/body text
    border:  '#D1D2D4',   // borders, dividers
    50:      '#F5F5F5',   // very light gray section bg
    900:     '#1C1C1E',   // hero/darkest section bg, footer bg
  },
  danger: {
    DEFAULT: '#99251D',   // errors and alerts ONLY
    dark:    '#7A1C15',   // hover state for danger
  },
}
```

### Color Usage Rules
- **White (`bg-white`)** — primary page background (80% of sections)
- **`bg-charcoal-50`** — alternate section bg (very light gray)
- **`bg-charcoal` or `bg-charcoal-900`** — hero sections, CTA sections, footer
- **`text-gold`** — icons, overline labels, accent links
- **`bg-gold`** — primary CTA buttons only (always with `text-charcoal-900`)
- **`hover:bg-gold-dark`** — gold button hover state
- **`text-danger`** — form errors only

### CSS Component Classes (defined in `src/index.css`)
```css
.btn-primary     → bg-gold text-charcoal-900 hover:bg-gold-dark
.btn-secondary   → bg-white text-charcoal border border-charcoal hover:bg-charcoal-50
.section-title   → text-charcoal (heading class)
.section-description → text-charcoal-muted
```

### Section Rhythm Pattern
```
Hero        → bg-charcoal-900
Section 1   → bg-white
Section 2   → bg-charcoal-50
Section 3   → bg-white
Dark CTA    → bg-charcoal-900
Footer      → bg-charcoal-900
```

---

## 5. Logo

**File:** `src/components/Logo.tsx`
**Type:** Inline SVG React component — no external file dependency (public/logo.svg is obsolete)
**Design:** Gold square badge (36×36, rx=9) with white V-chevron + intelligence node dot + two document lines
**Usage:**
```tsx
<Logo size={9} className="text-gold" />
// size maps to Tailwind h-{size} w-{size} (size=9 → 36px)
// className sets color via currentColor
```
**In Navbar:** Logo + `"VyXlo"` wordmark (font-extrabold) + `"DMS"` badge (small, uppercase, bordered)

---

## 6. Navigation Structure

**Navbar** (`src/components/Navbar.tsx`):
- Scroll behavior: hides on scroll-down, shows on scroll-up (after 80px)
- Links: Features · How It Works · Security · Use Cases · About · Contact
- Secondary CTA: "Request Early Access" → `/request-access` (charcoal button)
- Primary CTA: "Try Free" → `https://91.107.255.176:8080/` (gold button, new tab)
- Mobile: hamburger menu with same links

**Footer** (`src/components/Footer.tsx`):
- 4 columns: Brand | Product | Company | Connect
- Product links: Features, How It Works, Security, Use Cases, Request Early Access
- Company links: About, Contact, Knowledge Base
- Connect: email, phone, address, LinkedIn

---

## 7. Complete Route Map

```
App.tsx routes (all registered):

/                     → pages/Home.tsx               ✅ FULLY REWRITTEN
/about                → pages/About.tsx              ✅ FULLY REWRITTEN
/features             → pages/Features.tsx           ✅ FULLY REWRITTEN (interactive tab browser)
/features/:featureId  → pages/FeatureDetails.tsx     ⚠️  OLD CONTENT (needs rewrite)
/features/ai-automation → pages/features/AIAutomation.tsx  ⚠️  OLD CONTENT (colors updated)
/features/collaboration → pages/features/Collaboration.tsx ⚠️  OLD CONTENT (colors updated)
/how-it-works         → pages/HowItWorks.tsx         ✅ FULLY REWRITTEN
/security             → pages/Security.tsx           ✅ NEW PAGE (fully written)
/use-cases            → pages/UseCases.tsx           ✅ FULLY REWRITTEN (team-based)
/use-cases/:industryId → pages/UseCaseDetails.tsx    ⚠️  OLD CONTENT (needs rewrite)
/verticals            → pages/Industries.tsx         ⚠️  OLD CONTENT (needs rewrite)
/verticals/:industryId → pages/IndustryDetails.tsx   ⚠️  OLD CONTENT (needs rewrite)
/knowledge-base       → pages/KnowledgeBase.tsx      ⚠️  FUNCTIONAL but tied to old auth
/contact              → pages/Contact.tsx            ⚠️  MINOR: still uses EditableContent
/request-access       → pages/RequestAccess.tsx      ⚠️  MINOR: old "SecureVault" description
```

**Not in router (orphaned pages — exist but unreachable):**
- `pages/Blog.tsx` — exists, not routed
- `pages/StayTuned.tsx` — exists, not routed
- `pages/Login.tsx` — exists, not routed (KnowledgeBase handles auth inline)

---

## 8. File Status — What's Done, What Needs Work

### ✅ Complete (rewritten this session)

| File | Notes |
|------|-------|
| `tailwind.config.js` | Gold/charcoal/danger token system. Complete. |
| `src/index.css` | Global styles, .btn-primary, .btn-secondary, HubSpot overrides. Complete. |
| `src/App.tsx` | Security route added. All routes registered. |
| `src/components/Logo.tsx` | Inline SVG redesign. No external dependency. |
| `src/components/Navbar.tsx` | New brand, new nav items (incl. Security). |
| `src/components/Footer.tsx` | 4-column layout, all links, proper tagline. |
| `src/pages/Home.tsx` | 12 sections, comprehensive. All data as const arrays at top. |
| `src/pages/Features.tsx` | Interactive tab browser, 10 groups, 65 features. |
| `src/pages/HowItWorks.tsx` | 6-step alternating layout, sticky nav bar, architecture summary. |
| `src/pages/Security.tsx` | NEW. 8 security sections, stats, full content from website.md. |
| `src/pages/About.tsx` | New mission/vision/values aligned to DMS product. |
| `src/pages/UseCases.tsx` | 5 team-based use cases (not industry-based). |
| `vercel.json` | SPA rewrite rule. Critical — do not remove. |
| `new website contents.md` | Full site content document (in project root). |

### ⚠️ Partially done (colors updated, content still old)

| File | What's wrong | Priority |
|------|-------------|----------|
| `src/pages/FeatureDetails.tsx` | Content is old product (TensorFlow, PyTorch, "SecureVault"). Routes like `/features/enterprise-security`, `/features/ai-automation` go here. Needs rewrite using VyXlo DMS feature data. | High |
| `src/pages/UseCaseDetails.tsx` | 4 old cases: banking-finance, legal-services, insurance, government. Should be updated to match new 5 team-based use cases from UseCases.tsx (legal-compliance, finance-operations, hr-people, product-engineering, agencies). | High |
| `src/pages/Industries.tsx` | Old industry grid. Route `/verticals`. Content is old product. Could either rewrite or remove route. | Medium |
| `src/pages/IndustryDetails.tsx` | Old industry detail pages. Route `/verticals/:id`. | Medium |
| `src/pages/features/AIAutomation.tsx` | Colors updated. Content is old (TensorFlow/PyTorch) — should reflect VyXlo DMS AI features (pgvector, ZITADEL, etc.). | Medium |
| `src/pages/features/Collaboration.tsx` | Colors updated. Content is generic. Should reflect real-time WebSocket collaboration features. | Medium |
| `src/pages/Contact.tsx` | Still uses `EditableContent` wrapper. Works fine but description says "Kanz.ai" not "VyXlo DMS". Low priority. | Low |
| `src/pages/RequestAccess.tsx` | SEO description still says "SecureVault's intelligent platform". One-line fix. | Low |

### ⚠️ Orphaned (exist but not in router)

| File | Action needed |
|------|--------------|
| `src/pages/Blog.tsx` | Add `/blog` route in App.tsx, or remove the file |
| `src/pages/StayTuned.tsx` | Add `/stay-tuned` route, or remove |
| `src/pages/Login.tsx` | Knowledge base auth is inline — this is unused. Consider removing. |

---

## 9. Known Security Issues (Pre-existing — NOT introduced here)

These exist in the codebase and should be addressed before going fully public. They are flagged here, not fixed.

1. **Hardcoded admin credentials** in `src/contexts/AuthContext.tsx` line 28:
   ```ts
   if (username === 'admin' && password === 'soli1362@') {
   ```
   This guards the knowledge base upload feature. Anyone reading the source code can gain admin access.

2. **Firebase config exposed** in `src/config/firebase.ts` — API keys, project ID, etc. are in the source. This is a common pattern for Firebase but keys should be restricted to this domain only in Firebase Console.

3. **Email server config** in `server.js` — uses msmtp with hardcoded sender address. The server.js is backend-only and not deployed to Vercel (Vercel hosts the static SPA only), so this is lower risk.

4. **localStorage auth** — `auth: 'true'` stored in localStorage. Trivial to forge. Only guards document upload in knowledge base.

5. **Command injection risk** in `server.js` line 56:
   ```js
   exec(`echo "${emailBody}" | msmtp -t`, ...)
   ```
   The `emailBody` contains unsanitized form fields. If this server runs anywhere, it has a command injection vulnerability.

---

## 10. Content Reference Files

### Primary content source
**`/Users/rezasahebozamani/Documents/source/Python-Vyxlo/website.md`**
This is the authoritative content document for the DMS product. All page copy, feature descriptions, use cases, security details, pricing, and tone guidelines live here. **Read this before writing any new content.**

### Site content map
**`/Users/rezasahebozamani/Documents/source/Vyxlo-website/new website contents.md`**
Maps every page's content, all internal links, CTAs and their targets, SEO metadata, navigation structure, and full content for each page. Generated in this session.

---

## 11. Key Content Details (Quick Reference)

### Tone rules (from website.md)
- **Direct.** No "empower", "leverage", "seamless", "robust", "world-class"
- **Technical when useful** — audience includes engineers and compliance leads. Use specifics: "bcrypt cost factor ≥ 12", "RS256", "pgvector"
- **Concrete over vague** — "immutable audit log entry with before/after state" not "robust audit capabilities"
- **Use**: specific numbers, exact feature names, actual constraints

### Product name conventions
- Full name: **VyXlo DMS**
- Short: **VyXlo**
- Never: "Vyxlo.com" (old), "SecureVault" (old product name), "kanz-ai" (internal project name)

### Key numbers to use in content
- 327 automated tests, ≥72% coverage
- 8 permission levels per document
- 4 AI providers supported (OpenAI, Azure OpenAI, Anthropic Claude, Google Gemini, + Ollama local)
- 7 Docker services, single `compose up`
- <300ms p95 API response time (target)
- <5 min AI processing per document
- 500 concurrent users per organization
- ∞ version history

### AI classification categories (exact)
INVOICE · CONTRACT · REPORT · POLICY · MEMO · LETTER · FORM · PRESENTATION · MANUAL · OTHER

### Permission levels (exact, in order)
NONE · READ · DOWNLOAD · COMMENT · CONTRIBUTOR · WRITE · EDITOR · ADMIN

### Document status lifecycle (exact)
DRAFT → IN_REVIEW → PENDING_APPROVAL → APPROVED → PUBLISHED → ARCHIVED

### HubSpot form credentials
- Region: `eu1`
- Portal ID: `143927153`
- Form ID: `840f4d63-2d82-40c1-a76d-5920cf9dd81d`
- External form URL: `https://share-eu1.hsforms.com/2hA9NYy2CQMGnbVkgz53YHQ2douwh`

---

## 12. Component Library Reference

### Shared components

| Component | Path | Purpose | Notes |
|-----------|------|---------|-------|
| `Logo` | `components/Logo.tsx` | Inline SVG brand mark | `size` prop = Tailwind size unit; `className` for color |
| `Navbar` | `components/Navbar.tsx` | Fixed top nav | Scroll-hide behavior. Has "Try Free" external link. |
| `Footer` | `components/Footer.tsx` | Site footer | 4-column layout |
| `SEO` | `components/SEO.tsx` | Helmet wrapper | Use on every page |
| `HubSpotForm` | `components/HubSpotForm.tsx` | Embedded HubSpot form | Loads async via script tag |
| `EditableContent` | `components/EditableContent.tsx` | In-place edit (admin only) | Saves to localStorage. Used on Contact. Effectively deprecated — don't use in new pages. |
| `ProcessStep` | `components/ProcessStep.tsx` | Numbered step with icon | bg-gold circle, connector line |
| `ProcessFlow` | `components/ProcessFlow.tsx` | Horizontal step flow | bg-gold circles |
| `WorkflowDiagram` | `components/WorkflowDiagram.tsx` | Step diagram | border-t-2 border-gold |
| `FeatureHighlight` | `components/FeatureHighlight.tsx` | Icon + title + bullets | icon text-gold, bullets bg-gold |
| `CategoryFilter` | `components/CategoryFilter.tsx` | Tag filter buttons | Selected = bg-gold text-charcoal-900 |
| `ArticleCard` | `components/ArticleCard.tsx` | Blog article card | Read More = text-gold |
| `TechnologyStack` | `components/TechnologyStack.tsx` | 4-icon tech grid | icons text-gold |
| `DataFlowDiagram` | `components/DataFlowDiagram.tsx` | 3-step flow | icons text-gold |

### Knowledge base components (in `components/knowledge-base/`)

| Component | Purpose |
|-----------|---------|
| `LoginPrompt` | Shown when not authenticated. bg-charcoal, gold button. |
| `DocumentUpload` | Admin upload form. Focus rings = gold. |
| `DocumentList` | KB document list. border-l-4 border-gold, download icon text-gold. |

### Also: `src/components/DocumentList.tsx` (non-KB)
Different from the KB version. Uses `src/types/document.ts` and `src/utils/documentStorage.ts`. Download icon = text-gold.

---

## 13. Page Architecture Patterns

### All new pages use this structure:
```tsx
import SEO from '../components/SEO';

const PageName = () => {
  return (
    <>
      <SEO title="Page Title — VyXlo DMS" description="..." canonical="/path" />
      <div className="pt-20">  {/* pt-20 clears the fixed navbar */}

        {/* HERO — always bg-charcoal or bg-charcoal-900 */}
        <section className="bg-charcoal text-white py-20">...</section>

        {/* SECTIONS — alternating bg-white / bg-charcoal-50 */}
        <section className="py-16 bg-white">...</section>
        <section className="py-16 bg-charcoal-50">...</section>

        {/* FINAL CTA — always bg-charcoal-900 */}
        <section className="py-20 bg-charcoal-900 text-white">
          {/* CTA buttons: bg-gold text-charcoal-900 | border border-white/30 text-white */}
        </section>

      </div>
    </>
  );
};
```

### Button patterns:
```tsx
// Primary on dark background:
className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"

// Secondary on dark background:
className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"

// Primary on light background:
className="inline-flex items-center justify-center px-7 py-3.5 bg-charcoal text-white font-semibold rounded-md hover:bg-charcoal-900 transition-colors"

// Text link:
className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors"
```

### Icon container pattern:
```tsx
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold">
  <SomeIcon className="h-5 w-5" />
</div>
```

### Overline label pattern:
```tsx
<p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Section label</p>
```

### Hero badge/pill pattern:
```tsx
<div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
  <span className="w-2 h-2 bg-gold rounded-full" />
  <span className="text-gold text-sm font-medium">Label text</span>
</div>
```

---

## 14. Common Gotchas

### 1. Apostrophes in single-quoted JS strings WILL break the build
```tsx
// ❌ BREAKS BUILD
title: 'AI That Works While You Don't',

// ✅ Use double quotes when string contains apostrophe
title: "AI That Works While You Don't",
```
This caused one Vercel build failure. ESBuild (Vite's transformer) treats the apostrophe as a string terminator.

### 2. `pt-20` is required on page root divs
The navbar is `fixed` with `h-20`. All pages need `<div className="pt-20">` as their outermost wrapper or content will sit under the navbar.

### 3. `hover:bg-gold-dark` not `hover:bg-gold-hover`
The dark variant of gold is named `dark` (not `hover`). `gold.hover` would conflict with Tailwind's `hover:` variant prefix.

### 4. Route conflict: `/features/ai-automation` vs `/features/:featureId`
Both routes exist in App.tsx. React Router evaluates them in order — `/features/ai-automation` is declared before `/:featureId` so it takes priority. If you add more `/features/xxx` static routes, put them **before** the `:featureId` dynamic route.

### 5. `EditableContent` on old pages stores to localStorage
If a user ever clicked "edit" on the old pages, values are saved in localStorage under `content_{id}`. This can override what's shown. Not a problem for new pages (which don't use EditableContent), but relevant if debugging Contact page.

### 6. `lucide-react` version is 0.294.0
This is a relatively old version. Some newer icon names (like `BrainCircuit`, `FolderTree`) may or may not be available. Safe icons that definitely exist in this version: ArrowRight, Brain, Search, GitBranch, ShieldCheck, Users, Shield, Key, Lock, Eye, Database, Cloud, Code2, Network, Activity, FileText, Bell, Settings, CheckCircle, Upload, Share2, BarChart3, Zap.

---

## 15. What Still Needs To Be Done

### High priority

**A. Rewrite `FeatureDetails.tsx`**
This is the dynamic detail page at `/features/:featureId`. It currently has hardcoded data for old product features (TensorFlow, "99.9% accuracy", etc.). It needs to be rewritten with VyXlo DMS feature data. The data object keys that will be linked from `Features.tsx` are the 10 group IDs: `document-management`, `search`, `ai`, `access-control`, `workflows`, `sharing`, `collaboration`, `notifications`, `audit`, `admin`. The content for each is in `new website contents.md` and `website.md`.

**B. Rewrite `UseCaseDetails.tsx`**
Currently has 4 old use cases (banking-finance, legal-services, insurance, government). The new `UseCases.tsx` links to 5 new IDs: `legal-compliance`, `finance-operations`, `hr-people`, `product-engineering`, `agencies`. The detail page data needs to be updated to match. Full content is in `new website contents.md` (Use Cases section) and `website.md`.

### Medium priority

**C. Rewrite `Industries.tsx` and `IndustryDetails.tsx`**
Route is `/verticals` and `/verticals/:id`. This is an older structure (industry-based rather than team-based). Options: (a) remove from router and the nav, or (b) rewrite with industry-specific content (Banking, Healthcare, Legal, Insurance, Government). Since these routes aren't in the navbar, low urgency.

**D. Update `AIAutomation.tsx` and `Collaboration.tsx`**
Located at `src/pages/features/`. Colors are correct but content is old. Both should reflect the actual VyXlo DMS capabilities described in `website.md`. These are linked from the Features page's "Deep dives" section.

**E. Update `RequestAccess.tsx`**
One-line fix: SEO description still says `"Get early access to SecureVault's intelligent platform"`. Should say `"Get early access to VyXlo DMS — the document intelligence platform."`.

**F. Update `Contact.tsx`**
Remove `EditableContent` wrappers and replace with plain JSX. Update description from "learn more about Kanz.ai" to "learn more about VyXlo DMS". Otherwise the page works fine.

### Low priority / Optional

**G. Add Blog and StayTuned to router**
`Blog.tsx` and `StayTuned.tsx` exist but aren't routed. If the user wants them, add:
```tsx
// In App.tsx
import Blog from './pages/Blog';
import StayTuned from './pages/StayTuned';
// In <Routes>
<Route path="/blog" element={<Blog />} />
<Route path="/stay-tuned" element={<StayTuned />} />
```
Then update Footer to link to them.

**H. Address security issues**
See §9. Most pressing is the hardcoded admin credentials in `AuthContext.tsx`.

**I. Add `/pricing` as standalone page**
Currently pricing is a section in the Home page only. Could be extracted as `/pricing` for direct linking.

**J. Add `/self-host` page**
`website.md` has a full "Open Source / Self-Host" page spec. Not yet built.

---

## 16. Session History Summary

### Session 1 (color strategy overhaul)
- Replaced entire Tailwind color system. Removed: `primary` (blue #486FE7), `accent` (orange #F79517), `neutral` custom tokens
- Added: `gold`, `charcoal`, `danger` token system (see §4)
- Updated every page and every component to use new tokens
- Fixed all `blue-*`, `primary-*`, `neutral-*` class references

**Files updated in Session 1 (colors only):**
Navbar, Footer, Home, About, Features, HowItWorks, UseCases, Industries, Contact, Login, RequestAccess, FeatureDetails, UseCaseDetails, IndustryDetails, KnowledgeBase, StayTuned, Blog, AIAutomation, Collaboration, WorkflowDiagram, ProcessFlow, LoginPrompt (KB), DocumentUpload (KB), DocumentList (KB), EditableContent, TechnologyStack, FeatureHighlight, DataFlowDiagram, CategoryFilter, ProcessStep, HubSpotForm, DocumentList, ArticleCard, DocumentHubLogo, DocumentUploadForm

### Session 2 (website reconstruction)
- Added `vercel.json` — fixed 404 on direct URL navigation
- Rewrote `Logo.tsx` — new inline SVG design
- Rewrote `Navbar.tsx` — new brand, new nav items, Security link added
- Rewrote `Footer.tsx` — 4 columns, proper links
- Complete rewrite: `Home.tsx`, `Features.tsx`, `HowItWorks.tsx`, `About.tsx`, `UseCases.tsx`
- New page: `Security.tsx`
- Updated `App.tsx` — added `/security` route
- Created `new website contents.md` — full content document
- Fixed build error: unescaped apostrophes in `Home.tsx` single-quoted strings

---

## 17. File Tree (Key Files Only)

```
Vyxlo-website/
├── vercel.json                        ← SPA routing fix (critical)
├── new website contents.md            ← full content map
├── handoff.md                         ← this file
├── tailwind.config.js                 ← color tokens (gold/charcoal/danger)
├── vite.config.ts                     ← minimal, no customization
├── package.json                       ← name: "kanz-ai" (ignore), React 18, Vite 5
├── server.js                          ← email backend (not deployed to Vercel)
├── public/
│   ├── logo.svg                       ← obsolete (Logo.tsx is inline SVG now)
│   ├── robots.txt
│   └── sitemap.xml                    ← needs updating with new routes
├── src/
│   ├── App.tsx                        ← all routes
│   ├── main.tsx
│   ├── index.css                      ← global styles + @layer components
│   ├── contexts/
│   │   └── AuthContext.tsx            ← ⚠️ hardcoded credentials (admin/soli1362@)
│   ├── components/
│   │   ├── Logo.tsx                   ← inline SVG brand mark ✅
│   │   ├── Navbar.tsx                 ✅
│   │   ├── Footer.tsx                 ✅
│   │   ├── SEO.tsx                    ← use on every page
│   │   ├── HubSpotForm.tsx            ← async HubSpot embed
│   │   ├── EditableContent.tsx        ← localStorage in-place editing (deprecated)
│   │   ├── ProcessStep.tsx
│   │   ├── ProcessFlow.tsx
│   │   ├── WorkflowDiagram.tsx
│   │   ├── FeatureHighlight.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── TechnologyStack.tsx
│   │   ├── DataFlowDiagram.tsx
│   │   ├── DocumentList.tsx           ← non-KB version
│   │   ├── DocumentUploadForm.tsx
│   │   ├── DocumentHubLogo.tsx
│   │   └── knowledge-base/
│   │       ├── LoginPrompt.tsx
│   │       ├── DocumentUpload.tsx
│   │       └── DocumentList.tsx
│   └── pages/
│       ├── Home.tsx                   ✅ 12-section landing page
│       ├── Features.tsx               ✅ interactive tab browser, 10 groups
│       ├── HowItWorks.tsx             ✅ 6-step flow
│       ├── Security.tsx               ✅ NEW — 8 security sections
│       ├── About.tsx                  ✅ mission/vision/values
│       ├── UseCases.tsx               ✅ 5 team-based use cases
│       ├── Contact.tsx                ⚠️ uses EditableContent, minor update needed
│       ├── RequestAccess.tsx          ⚠️ SEO desc says "SecureVault"
│       ├── FeatureDetails.tsx         ⚠️ old content, needs rewrite
│       ├── UseCaseDetails.tsx         ⚠️ old use cases, needs rewrite
│       ├── Industries.tsx             ⚠️ old content
│       ├── IndustryDetails.tsx        ⚠️ old content
│       ├── KnowledgeBase.tsx          ⚠️ functional, tied to old auth
│       ├── Login.tsx                  ← orphaned (not in router)
│       ├── Blog.tsx                   ← orphaned (not in router)
│       ├── StayTuned.tsx              ← orphaned (not in router)
│       └── features/
│           ├── AIAutomation.tsx       ⚠️ colors ok, content old
│           └── Collaboration.tsx      ⚠️ colors ok, content old
```

---

## 18. External Dependencies & Credentials (Reference Only)

| Service | Credential location | Notes |
|---------|-------------------|-------|
| HubSpot | Hardcoded in HubSpotForm.tsx | portal 143927153, form 840f4d63... |
| Firebase | src/config/firebase.ts | Auth + Storage for knowledge base |
| Demo app | Navbar "Try Free" button | https://91.107.255.176:8080/ |
| LinkedIn | Footer | https://www.linkedin.com/company/kanz-ai/ |
| HubSpot CRM form | Contact page link | https://share-eu1.hsforms.com/2hA9NYy2CQMGnbVkgz53YHQ2douwh |

---

## 19. Quick Start for Next Session

1. **Read this file** (done ✓)
2. **Read `/new website contents.md`** for full content of every page
3. **Read `/Users/rezasahebozamani/Documents/source/Python-Vyxlo/website.md`** for product content
4. The build is clean (`npm run build` passes — 1400 modules, 362KB JS bundle)
5. The site is on Vercel, auto-deploys on push to `main`
6. Start with **FeatureDetails.tsx** rewrite (highest priority remaining work)
7. Then **UseCaseDetails.tsx** (links from the new UseCases.tsx)

---

*Last updated: 2026-03-30 — VyXlo DMS website rebuild complete (core pages). Remaining: detail pages, orphaned pages, security hardening.*
