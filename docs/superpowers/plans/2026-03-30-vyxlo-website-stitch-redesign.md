# VyXlo Website — Stitch Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild all VyXlo marketing website pages in React/TSX by using the Stitch designs (project `6634809109455924272`) as visual reference, replacing any placeholder content with real VyXlo DMS copy from `new website contents.md`.

**Architecture:** Each task fetches the Stitch HTML via `mcp__stitch__get_screen`, extracts the visual layout/sections/component structure, then rewrites the corresponding `.tsx` page using the project's existing Tailwind token system (`gold`, `charcoal`, `danger`) and React Router links. Content is sourced from `/Users/rezasahebozamani/Documents/source/Vyxlo-website/new website contents.md`. No new dependencies. All pages share the existing `Navbar` and `Footer`.

**Tech Stack:** React 18, TypeScript, Vite 5, React Router DOM 6, Tailwind CSS 3 (custom tokens: gold/charcoal/danger), Lucide React 0.294.0, react-helmet-async (SEO)

---

## Stitch Reference IDs

All screens are in project `6634809109455924272`. Use `mcp__stitch__get_screen` with:
- `name`: `projects/6634809109455924272/screens/<screenId>`
- `projectId`: `6634809109455924272`
- `screenId`: the ID below

| Page | Desktop Screen ID | Mobile Screen ID |
|------|------------------|-----------------|
| Home | `3e0576feee78471fabf5775fbfa6ac37` | `bfd4c05e34d3402e8570b2d106b32205` |
| Features | `23ee995b932d4d8987f792c2e78df30c` | `956c1f8d03634a85a17ce1a0d0ca3297` |
| AI Automation | `96ebacba0164426f80c5cfbf10afa450` | `9c8a4ee6d3ff4cb497e931697cad1dde` |
| Collaboration | `c38a280cef224896924fe3779073e960` | `6b20e717ff994a78ac3228891006e0e2` |
| How It Works | `568e1aebcabb4077a88da6c72319f3fa` | `25f2a52169e648d9bf633294b6465b20` |
| Security | `90aaddea50fb41b1a4da24271a71e533` | `27b8d04b4c934c2182fc487403b854d6` |
| Use Cases | `9e045df5a79d4976822cb0e046ab5f55` | `5c9e59e84ac3405ba6201a175e6df446` |
| Use Case Detail (Legal) | `a878291209ad4c7f8a1fda8ba704b2b6` | `d5b0aa8e69a243f1830b63c9681453f1` |
| Industry Verticals | `d74840b98ae04e509ee41454454144e8` | `d824af83a3ec4c6486d330a03c3b966a` |
| About | `36418a470bdd4be38d177535fc2942fb` | `da30a3d929264b8a99d995c1e7670185` |
| Contact | `8563b3afc293406bbb8f10ad647f6fd4` | `b23b191b66044f33bfc2fb94acd99767` |
| Request Access | `6ddcc618223644ef9d08a97e4db8f8ed` | `45b4622b08da4b868e7c78e219f5c0a9` |
| Technical Specs | `3353719219f0463f8db33cda273734c9` | `8cab2507f6f644809757dfbff7a865cd` |
| Knowledge Base | `4093cf5a46604b2eb7c457c8d91667f4` | `df8968e8fea04b4dadc5a58d8156ff2e` |
| KB: Getting Started | `02bf12c1f2d841fdab699c8c98e58201` | `36660dc6b3b8486c91b6682aee966aa4` |
| KB: Features | `bc48d6fea5fe4619a154c3be59cec0a6` | `1548d845bd1a4fa5820490508e21cd18` |
| KB: API Docs | `d853c727f2184666afaebe408ba3b51d` | `20468e4a0ce541e589c7c7fc05048d53` |
| KB: Troubleshooting | `4b6f949a655c4b59b05bc882b6dae630` | `cf9c447d94ed42439bf58145b8506e6e` |

---

## Color Token Reference

Do NOT use raw hex values or default Tailwind colors. Only these tokens:

```
gold.DEFAULT       #EBBB4A   → text-gold, bg-gold (primary CTA buttons)
gold.dark          #D9A93A   → hover:bg-gold-dark
gold.50            #FDFAF0   → bg-gold-50
gold.100           #FBF3D5   → bg-gold-100 (icon containers)
charcoal.DEFAULT   #3A3A3C   → text-charcoal, bg-charcoal (dark sections)
charcoal.muted     #6B6B6D   → text-charcoal-muted (body text)
charcoal.border    #D1D2D4   → border-charcoal-border
charcoal.50        #F5F5F5   → bg-charcoal-50 (alternating light sections)
charcoal.900       #1C1C1E   → bg-charcoal-900 (hero, CTA, footer)
danger.DEFAULT     #99251D   → text-danger (form errors only)
```

## Page Structure Pattern (apply to ALL pages)

```tsx
<>
  <SEO title="Page Title — VyXlo DMS" description="..." canonical="/path" />
  <div className="pt-20">
    {/* Hero: bg-charcoal or bg-charcoal-900 */}
    {/* Sections: alternating bg-white / bg-charcoal-50 */}
    {/* Final CTA: bg-charcoal-900 */}
  </div>
</>
```

## Button Patterns

```tsx
// Gold primary (on dark bg):
"inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"

// Outlined secondary (on dark bg):
"inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"

// Dark primary (on light bg):
"inline-flex items-center justify-center px-7 py-3.5 bg-charcoal text-white font-semibold rounded-md hover:bg-charcoal-900 transition-colors"

// Gold text link:
"inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors"
```

## Icon Container Pattern

```tsx
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold">
  <SomeIcon className="h-5 w-5" />
</div>
```

## Overline Pattern

```tsx
<p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Label</p>
```

## Critical Rules

1. **`pt-20`** on every page root div (navbar is fixed h-20)
2. **Double-quote strings** that contain apostrophes — single quotes break the Vite build
3. **`hover:bg-gold-dark`** not `hover:bg-gold-hover`
4. **Links**: use React Router `<Link to="/path">` for internal, `<a href="..." target="_blank">` for external
5. **Route conflict**: `/features/ai-automation` and `/features/collaboration` must be declared BEFORE `/features/:featureId` in App.tsx
6. After every page task, run `npm run build` to verify no TypeScript/ESBuild errors

---

## File Map

| File | Action | Notes |
|------|--------|-------|
| `src/pages/Home.tsx` | Modify | Full redesign from Stitch |
| `src/pages/Features.tsx` | Modify | Full redesign from Stitch |
| `src/pages/FeatureDetails.tsx` | Modify | Rewrite with VyXlo feature data |
| `src/pages/features/AIAutomation.tsx` | Modify | Rewrite from Stitch |
| `src/pages/features/Collaboration.tsx` | Modify | Rewrite from Stitch |
| `src/pages/HowItWorks.tsx` | Modify | Redesign from Stitch |
| `src/pages/Security.tsx` | Modify | Redesign from Stitch |
| `src/pages/UseCases.tsx` | Modify | Redesign from Stitch |
| `src/pages/UseCaseDetails.tsx` | Modify | Rewrite with new 5 use cases |
| `src/pages/Industries.tsx` | Modify | Rewrite from Stitch verticals screen |
| `src/pages/IndustryDetails.tsx` | Modify | Rewrite with VyXlo industry content |
| `src/pages/About.tsx` | Modify | Redesign from Stitch |
| `src/pages/Contact.tsx` | Modify | Clean up + redesign from Stitch |
| `src/pages/RequestAccess.tsx` | Modify | Fix SEO + redesign from Stitch |
| `src/pages/TechnicalSpecs.tsx` | **Create** | New page from Stitch Technical Specs screen |
| `src/pages/KnowledgeBase.tsx` | Modify | Redesign from Stitch KB screens |
| `src/App.tsx` | Modify | Add `/technical-specs` route |

---

## Task 1: Home Page

**Stitch screens:** Desktop `3e0576feee78471fabf5775fbfa6ac37`, Mobile `bfd4c05e34d3402e8570b2d106b32205`
**Files:** Modify `src/pages/Home.tsx`
**Content source:** `new website contents.md` → PAGE: Home `/`

- [ ] **Step 1: Fetch the desktop Stitch design**

```
Use mcp__stitch__get_screen:
  name: "projects/6634809109455924272/screens/3e0576feee78471fabf5775fbfa6ac37"
  projectId: "6634809109455924272"
  screenId: "3e0576feee78471fabf5775fbfa6ac37"
```

Read the HTML output. Identify: section count, hero layout, feature grid columns, metrics layout, workflow steps, pricing table structure, CTA section.

- [ ] **Step 2: Also fetch the mobile Stitch design**

```
Use mcp__stitch__get_screen:
  name: "projects/6634809109455924272/screens/bfd4c05e34d3402e8570b2d106b32205"
  projectId: "6634809109455924272"
  screenId: "bfd4c05e34d3402e8570b2d106b32205"
```

Note how the Stitch mobile layout handles the hero, feature cards, and metrics grid.

- [ ] **Step 3: Read the current Home.tsx**

Read `src/pages/Home.tsx`. Note existing section structure and const arrays to preserve or adapt.

- [ ] **Step 4: Read the content for the Home page**

Read `new website contents.md`, sections "PAGE: Home `/`" through all 12 sections. Key data:
- Hero H1: "The Document Intelligence Platform Built for Teams That Can't Afford to Lose Control"
- 3 problem columns (Files everywhere, Approvals, Compliance)
- 6 core features (FolderTree, Brain, Search, GitBranch, ShieldCheck, Users icons)
- 4 AI sub-features
- 5 workflow steps (numbered)
- 3 security bullet points
- 8 metrics (327 tests, 8 permissions, 4 AI providers, 7 Docker services, <300ms, <5min, 500 users, ∞)
- 5 use case cards
- Tech stack (Backend/Frontend/Identity/AI/Deployment)
- 4 pricing tiers
- Final CTA section

- [ ] **Step 5: Rewrite Home.tsx**

Implement 12 sections matching the Stitch visual layout. Use `new website contents.md` for ALL text. Apply gold/charcoal tokens. Key structure:

```tsx
// Section rhythm:
// 1. Hero           → bg-charcoal-900
// 2. Problem        → bg-white
// 3. Product Overview → bg-charcoal-50
// 4. Core Features  → bg-white (6-col grid)
// 5. AI Deep Dive   → bg-charcoal-900
// 6. Workflow Engine → bg-white
// 7. Security Summary → bg-charcoal-50
// 8. Metrics        → bg-charcoal-900
// 9. Use Cases      → bg-white
// 10. Tech Stack    → bg-charcoal-50
// 11. Pricing       → bg-white
// 12. Final CTA     → bg-charcoal-900
```

All data as const arrays at top of file (METRICS, CORE_FEATURES, AI_SUBFEATURES, WORKFLOW_STEPS, SECURITY_POINTS, USE_CASES, TECH_STACKS, PRICING_TIERS).

Hero badge pattern:
```tsx
<div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
  <span className="w-2 h-2 bg-gold rounded-full" />
  <span className="text-gold text-sm font-medium">Document Intelligence Platform</span>
</div>
```

Metrics grid: `grid grid-cols-2 md:grid-cols-4 gap-6` — each card: value in `text-4xl font-bold text-gold`, label in `text-white`, sub in `text-white/60 text-sm`.

- [ ] **Step 6: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no TypeScript errors.

- [ ] **Step 7: Commit**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website
git add src/pages/Home.tsx
git commit -m "redesign: Home page from Stitch design with VyXlo content"
```

---

## Task 2: Features Page

**Stitch screens:** Desktop `23ee995b932d4d8987f792c2e78df30c`, Mobile `956c1f8d03634a85a17ce1a0d0ca3297`
**Files:** Modify `src/pages/Features.tsx`
**Content source:** `new website contents.md` → PAGE: Features `/features`

- [ ] **Step 1: Fetch the Stitch design**

```
Use mcp__stitch__get_screen:
  name: "projects/6634809109455924272/screens/23ee995b932d4d8987f792c2e78df30c"
  projectId: "6634809109455924272"
  screenId: "23ee995b932d4d8987f792c2e78df30c"
```

Identify: tab/category navigation, feature list layout, how feature groups are presented.

- [ ] **Step 2: Read current Features.tsx and content**

Read `src/pages/Features.tsx` (the existing interactive tab browser). Read `new website contents.md` → PAGE: Features section — 10 feature groups with their items.

- [ ] **Step 3: Rewrite Features.tsx**

Keep the interactive category tab pattern if Stitch confirms it, adapting visual style. The 10 groups:

```tsx
const FEATURE_GROUPS = [
  { id: 'document-management', label: 'Document Management', icon: FileText, count: 9, items: [...] },
  { id: 'search', label: 'Search & Organization', icon: Search, count: 8, items: [...] },
  { id: 'ai', label: 'AI Processing', icon: Brain, count: 7, items: [...] },
  { id: 'access-control', label: 'Access Control', icon: Shield, count: 6, items: [...] },
  { id: 'workflows', label: 'Workflow Engine', icon: GitBranch, count: 5, items: [...] },
  { id: 'sharing', label: 'Sharing', icon: Share2, count: 4, items: [...] },
  { id: 'collaboration', label: 'Collaboration', icon: Users, count: 8, items: [...] },
  { id: 'notifications', label: 'Notifications', icon: Bell, count: 6, items: [...] },
  { id: 'audit', label: 'Audit & Compliance', icon: ShieldCheck, count: 7, items: [...] },
  { id: 'admin', label: 'Administration', icon: Settings, count: 5, items: [...] },
];
```

Each item is a string from `new website contents.md`. Selected tab gets `bg-gold text-charcoal-900`, others get hover state.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/Features.tsx
git commit -m "redesign: Features page from Stitch design with 10 feature groups"
```

---

## Task 3: Feature Details Page

**Stitch screens:** Use the same desktop Features screen for context (`23ee995b932d4d8987f792c2e78df30c`)
**Files:** Modify `src/pages/FeatureDetails.tsx`
**Content source:** `new website contents.md` feature group descriptions

The dynamic route `/features/:featureId` renders details for each of the 10 feature groups. IDs: `document-management`, `search`, `ai`, `access-control`, `workflows`, `sharing`, `collaboration`, `notifications`, `audit`, `admin`.

- [ ] **Step 1: Read current FeatureDetails.tsx**

Read `src/pages/FeatureDetails.tsx`. Note the current data structure (keyed object). It currently has old TensorFlow/PyTorch content — full rewrite needed.

- [ ] **Step 2: Rewrite FeatureDetails.tsx with VyXlo data**

Structure the FEATURE_DETAILS object with one entry per group ID. Each entry:
```tsx
interface FeatureDetail {
  title: string;
  subtitle: string;
  description: string;
  items: string[];        // feature bullet points from new website contents.md
  icon: LucideIcon;
  deepDiveLink?: string;  // "/features/ai-automation" or "/features/collaboration" where applicable
}
```

Full data for all 10 groups from `new website contents.md`:

```tsx
const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  'document-management': {
    title: 'Document Management',
    subtitle: 'Every file type. Every version. Every status.',
    description: 'VyXlo handles the full lifecycle of documents from first upload through archival.',
    icon: FileText,
    items: [
      'Unlimited file types (PDF, DOCX, XLSX, PPTX, images, and more)',
      'Configurable max file size per organization',
      'Status lifecycle: DRAFT → IN_REVIEW → PENDING_APPROVAL → APPROVED → PUBLISHED → ARCHIVED',
      'Full version history — every upload creates a version; any version can be restored',
      'Document duplication (metadata + file copy)',
      'Move documents between folders',
      'Soft delete with admin recovery',
      'View count and download count tracking',
      'Document locking (auto-expires after 1 hour)',
    ],
  },
  'search': {
    title: 'Search & Organization',
    subtitle: "Find anything. Organize everything.",
    description: 'Full-text and semantic search with unlimited folder hierarchy and tag system.',
    icon: Search,
    items: [
      'Unlimited folder hierarchy',
      'Materialized path for efficient tree queries',
      'Folder-level permissions inherited by documents',
      'Full-text search (PostgreSQL tsvector)',
      'Semantic search (pgvector, cosine similarity)',
      'Search filters: folder, type, status, owner, date range, tags, AI classification',
      'Autocomplete suggestions',
      'Tag system with organization-scoped namespaces and color coding',
    ],
  },
  'ai': {
    title: 'AI Processing',
    subtitle: 'Your documents are processed before you even open them.',
    description: 'Every uploaded document is automatically classified, summarized, and made searchable.',
    icon: Brain,
    deepDiveLink: '/features/ai-automation',
    items: [
      'Automatic classification into 10 categories',
      'Keyword and entity extraction (people, organizations, dates, monetary amounts)',
      'AI-generated document summaries',
      'Semantic embedding generation for similarity search',
      'Content moderation flag',
      'Re-process any document on demand',
      'Works with OpenAI, Azure OpenAI, Anthropic, Gemini, or Ollama',
    ],
  },
  'access-control': {
    title: 'Access Control',
    subtitle: 'Eight levels of precision.',
    description: 'Fine-grained permissions at document, folder, and organization level.',
    icon: Shield,
    items: [
      '8-level permission system: NONE · READ · DOWNLOAD · COMMENT · CONTRIBUTOR · WRITE · EDITOR · ADMIN',
      'Target individual users or entire departments',
      'Permission expiration dates',
      'Effective permission = max of all applicable grants',
      'Document owner always has ADMIN access',
      'Public documents visible to all authenticated users in the org',
    ],
  },
  'workflows': {
    title: 'Workflow Engine',
    subtitle: 'Approvals that enforce themselves.',
    description: 'Multi-step approval chains with sequential and parallel execution, deadlines, and audit trails.',
    icon: GitBranch,
    items: [
      'Multi-step approval chains with configurable step order',
      'Sequential and parallel step execution',
      'Per-step deadline tracking',
      'Workflow hold, resume, and escalation',
      'Full workflow state history',
    ],
  },
  'sharing': {
    title: 'Secure Sharing',
    subtitle: 'Share with confidence.',
    description: 'Cryptographically secure share links with expiry, passwords, and access analytics.',
    icon: Share2,
    items: [
      'Secure share links (cryptographically random tokens, ≥32 bytes entropy)',
      'Optional expiry date, access count limit, password protection, email allowlist',
      'Per-link access analytics (access count, last accessed)',
      'One-click revoke',
    ],
  },
  'collaboration': {
    title: 'Real-Time Collaboration',
    subtitle: "See who's there. Say what you mean.",
    description: 'Live presence, threaded comments, and real-time WebSocket delivery.',
    icon: Users,
    deepDiveLink: '/features/collaboration',
    items: [
      'Live presence indicators (who is viewing right now)',
      'Threaded comments with unlimited nesting',
      '@mentions with instant notifications',
      'Comment editing within 15 minutes of posting',
      'Comment resolution by document owner or ADMIN',
      'Emoji reactions',
      'Inline annotation support (page + position coordinates)',
      'WebSocket with automatic reconnection and exponential backoff',
    ],
  },
  'notifications': {
    title: 'Notifications',
    subtitle: 'Right person. Right message. Right time.',
    description: 'Real-time in-app and async email notifications with per-channel preferences.',
    icon: Bell,
    items: [
      'In-app notifications with real-time WebSocket delivery',
      'Email notifications (async, within 2 minutes)',
      'Daily digest email for unread notifications',
      'Per-channel preferences per notification type',
      '8 notification event types',
      'Notification read/unread state management',
    ],
  },
  'audit': {
    title: 'Audit & Compliance',
    subtitle: 'Compliance you can prove.',
    description: 'Immutable audit log with tamper-evident checksums and CSV export.',
    icon: ShieldCheck,
    items: [
      'Immutable audit log for every action type',
      'Before/after state stored as JSONB',
      'Tamper-evident SHA-256 checksums',
      'CSV export (async, returns download URL)',
      'Configurable retention periods with automatic purge',
      'Two-factor authentication (TOTP) with recovery codes',
      'Active session management with remote revoke',
    ],
  },
  'admin': {
    title: 'Administration',
    subtitle: 'Full control. Clean interface.',
    description: 'Org settings, user management, departments, and storage dashboard.',
    icon: Settings,
    items: [
      'Organization settings (name, logo, timezone, storage quota, feature flags)',
      'User invitation and role management',
      'Department management',
      'Storage usage dashboard',
      'Platform-level admin for managing organizations (SUPER_ADMIN)',
    ],
  },
};
```

The page renders the matching entry by `useParams({ featureId })`. Show a 404-style "Feature not found" for unknown IDs. Layout: hero with feature title, then icon + description, then a checklist of items with gold checkmarks, then a CTA to `/request-access`.

- [ ] **Step 3: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/FeatureDetails.tsx
git commit -m "rewrite: FeatureDetails with all 10 VyXlo DMS feature groups"
```

---

## Task 4: AI Automation Deep-Dive

**Stitch screens:** Desktop `96ebacba0164426f80c5cfbf10afa450`, Mobile `9c8a4ee6d3ff4cb497e931697cad1dde`
**Files:** Modify `src/pages/features/AIAutomation.tsx`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/96ebacba0164426f80c5cfbf10afa450"
  projectId: "6634809109455924272"
  screenId: "96ebacba0164426f80c5cfbf10afa450"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/9c8a4ee6d3ff4cb497e931697cad1dde"
  projectId: "6634809109455924272"
  screenId: "9c8a4ee6d3ff4cb497e931697cad1dde"
```

- [ ] **Step 2: Rewrite AIAutomation.tsx**

Route: `/features/ai-automation`. Deep-dive into VyXlo's AI pipeline. Content from `new website contents.md` (AI Automation section). Key sections:
- Hero: "AI That Works While You Don't" + subtitle about processing pipeline
- The pipeline: Upload → Classify → Extract → Summarize → Embed (5-step visual)
- Classification categories: INVOICE, CONTRACT, REPORT, POLICY, MEMO, LETTER, FORM, PRESENTATION, MANUAL, OTHER — with confidence scores
- Entity extraction: people, organizations, dates, monetary amounts
- Semantic search: pgvector 1536-dimensional embeddings, cosine similarity
- Multi-provider: OpenAI · Azure OpenAI · Anthropic Claude · Google Gemini · Ollama — table showing provider, model, use case
- Stats: <5 min processing, 10 document categories, 4 AI providers, 1536 embedding dimensions
- CTA → `/request-access`

Use `Brain`, `Zap`, `Search`, `Database`, `Cloud` icons from Lucide.

- [ ] **Step 3: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/features/AIAutomation.tsx
git commit -m "rewrite: AI Automation deep-dive with VyXlo AI pipeline content"
```

---

## Task 5: Collaboration Deep-Dive

**Stitch screens:** Desktop `c38a280cef224896924fe3779073e960`, Mobile `6b20e717ff994a78ac3228891006e0e2`
**Files:** Modify `src/pages/features/Collaboration.tsx`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/c38a280cef224896924fe3779073e960"
  projectId: "6634809109455924272"
  screenId: "c38a280cef224896924fe3779073e960"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/6b20e717ff994a78ac3228891006e0e2"
  projectId: "6634809109455924272"
  screenId: "6b20e717ff994a78ac3228891006e0e2"
```

- [ ] **Step 2: Rewrite Collaboration.tsx**

Route: `/features/collaboration`. Sections:
- Hero: "Real-Time Collaboration" — see who's there, say what you mean
- Live presence: WebSocket, presence avatars, who is viewing right now
- Threaded comments: unlimited nesting, @mentions, editing within 15 min, resolution, emoji reactions
- Inline annotations: page + position coordinates
- Document locking: auto-expires 1 hour, prevents conflicting edits
- Secure sharing: share links with expiry, password, email allowlist, analytics
- WebSocket reliability: automatic reconnection, exponential backoff
- CTA → `/request-access`

Use `Users`, `MessageSquare`, `Lock`, `Share2`, `Eye`, `Bell` icons.

- [ ] **Step 3: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/features/Collaboration.tsx
git commit -m "rewrite: Collaboration deep-dive with real-time features content"
```

---

## Task 6: How It Works

**Stitch screens:** Desktop `568e1aebcabb4077a88da6c72319f3fa`, Mobile `25f2a52169e648d9bf633294b6465b20`
**Files:** Modify `src/pages/HowItWorks.tsx`
**Content source:** `new website contents.md` → PAGE: How It Works `/how-it-works`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/568e1aebcabb4077a88da6c72319f3fa"
  projectId: "6634809109455924272"
  screenId: "568e1aebcabb4077a88da6c72319f3fa"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/25f2a52169e648d9bf633294b6465b20"
  projectId: "6634809109455924272"
  screenId: "25f2a52169e648d9bf633294b6465b20"
```

- [ ] **Step 2: Read current HowItWorks.tsx and content**

Read `src/pages/HowItWorks.tsx`. Read the 6-step content from `new website contents.md`.

- [ ] **Step 3: Rewrite HowItWorks.tsx**

Six alternating sections (left/right layout on desktop, stacked on mobile):
1. Upload — Drop it in. We'll handle the rest. — `Upload` icon
2. AI Processing — The AI reads it so your team doesn't have to. — `Brain` icon
3. Organize — Put it where it belongs. — `FolderTree` icon
4. Collaborate — Work on it together. — `Users` icon
5. Approve — Nothing slips through. — `GitBranch` icon
6. Audit — Prove everything. — `ShieldCheck` icon

Architecture summary section below: Backend tech stack visual (FastAPI, PostgreSQL/pgvector, Redis, Celery, MinIO). Final CTA → `/request-access`.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/HowItWorks.tsx
git commit -m "redesign: How It Works from Stitch design"
```

---

## Task 7: Security Page

**Stitch screens:** Desktop `90aaddea50fb41b1a4da24271a71e533`, Mobile `27b8d04b4c934c2182fc487403b854d6`
**Files:** Modify `src/pages/Security.tsx`
**Content source:** `new website contents.md` → PAGE: Security `/security`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/90aaddea50fb41b1a4da24271a71e533"
  projectId: "6634809109455924272"
  screenId: "90aaddea50fb41b1a4da24271a71e533"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/27b8d04b4c934c2182fc487403b854d6"
  projectId: "6634809109455924272"
  screenId: "27b8d04b4c934c2182fc487403b854d6"
```

- [ ] **Step 2: Read content and current Security.tsx**

Read `src/pages/Security.tsx`. Read `new website contents.md` → PAGE: Security. Key sections: Identity (ZITADEL), Permissions (8 levels), Audit Log, Encryption, Secrets Management, Network, Deployment, Compliance.

- [ ] **Step 3: Redesign Security.tsx from Stitch layout**

8 security sections as cards or alternating rows. Stats strip: bcrypt cost ≥12, RS256, SHA-256, PKCE, 8 permission levels. Each section: icon + title + description + bullet points. CTA → `/request-access`.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/Security.tsx
git commit -m "redesign: Security page from Stitch design"
```

---

## Task 8: Use Cases

**Stitch screens:** Desktop `9e045df5a79d4976822cb0e046ab5f55`, Mobile `5c9e59e84ac3405ba6201a175e6df446`
**Files:** Modify `src/pages/UseCases.tsx`
**Content source:** `new website contents.md` → PAGE: Use Cases `/use-cases`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/9e045df5a79d4976822cb0e046ab5f55"
  projectId: "6634809109455924272"
  screenId: "9e045df5a79d4976822cb0e046ab5f55"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/5c9e59e84ac3405ba6201a175e6df446"
  projectId: "6634809109455924272"
  screenId: "5c9e59e84ac3405ba6201a175e6df446"
```

- [ ] **Step 2: Read current UseCases.tsx and content**

Read `src/pages/UseCases.tsx`. Read `new website contents.md` → Use Cases section.

- [ ] **Step 3: Redesign UseCases.tsx**

5 team-based use cases. Each card links to `/use-cases/:id`:

```tsx
const USE_CASES = [
  { id: 'legal-compliance', title: 'Legal & Compliance Teams', icon: Shield, description: '...', bullets: [...] },
  { id: 'finance-operations', title: 'Finance & Operations', icon: BarChart3, description: '...', bullets: [...] },
  { id: 'hr-people', title: 'HR & People Teams', icon: Users, description: '...', bullets: [...] },
  { id: 'product-engineering', title: 'Product & Engineering Teams', icon: Code2, description: '...', bullets: [...] },
  { id: 'agencies', title: 'Agencies & Consultancies', icon: Briefcase, description: '...', bullets: [...] },
];
```

Use content from `new website contents.md`. Cards link to `/use-cases/:id`.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/UseCases.tsx
git commit -m "redesign: Use Cases page from Stitch design"
```

---

## Task 9: Use Case Details Page

**Stitch screens:** Use Legal & Compliance desktop `a878291209ad4c7f8a1fda8ba704b2b6`, mobile `d5b0aa8e69a243f1830b63c9681453f1` (as template for all 5 detail pages)
**Files:** Modify `src/pages/UseCaseDetails.tsx`
**Content source:** `new website contents.md` → Use Case detail sections

- [ ] **Step 1: Fetch Stitch Legal detail design**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/a878291209ad4c7f8a1fda8ba704b2b6"
  projectId: "6634809109455924272"
  screenId: "a878291209ad4c7f8a1fda8ba704b2b6"
```

- [ ] **Step 2: Read content for all 5 use case detail pages**

Read `new website contents.md` → Use Cases detail content for: `legal-compliance`, `finance-operations`, `hr-people`, `product-engineering`, `agencies`.

- [ ] **Step 3: Rewrite UseCaseDetails.tsx**

Dynamic page at `/use-cases/:industryId`. Data object keyed by use case ID. Each entry:

```tsx
interface UseCaseDetail {
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];    // Pain points this team faces
  solutions: { title: string; body: string }[];  // How VyXlo solves each
  features: string[];     // Specific VyXlo features used
  quote?: { text: string; author: string; role: string };
}
```

For unknown IDs, redirect to `/use-cases`. CTA → `/request-access`.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/UseCaseDetails.tsx
git commit -m "rewrite: UseCaseDetails with 5 team-based use cases"
```

---

## Task 10: Industry Verticals

**Stitch screens:** Desktop `d74840b98ae04e509ee41454454144e8`, Mobile `d824af83a3ec4c6486d330a03c3b966a`
**Files:** Modify `src/pages/Industries.tsx`, `src/pages/IndustryDetails.tsx`
**Content source:** `new website contents.md` → Verticals section (if present), otherwise use relevant industry content

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/d74840b98ae04e509ee41454454144e8"
  projectId: "6634809109455924272"
  screenId: "d74840b98ae04e509ee41454454144e8"
```

- [ ] **Step 2: Read content**

Read `new website contents.md` for verticals/industries content. Read the existing `src/pages/Industries.tsx` and `src/pages/IndustryDetails.tsx`.

- [ ] **Step 3: Rewrite Industries.tsx**

Route `/verticals`. 5 industry verticals based on VyXlo DMS real markets:

```tsx
const INDUSTRIES = [
  { id: 'legal', title: 'Legal Services', icon: Scale, description: 'Contract management, NDA workflows, court document handling', color: 'gold' },
  { id: 'financial-services', title: 'Financial Services', icon: BarChart3, description: 'Regulatory filings, audit trails, investment document workflows', color: 'gold' },
  { id: 'healthcare', title: 'Healthcare', icon: Heart, description: 'HIPAA-compliant document storage, patient record management', color: 'gold' },
  { id: 'government', title: 'Government & Public Sector', icon: Building, description: 'Freedom of information, policy document management, audit compliance', color: 'gold' },
  { id: 'insurance', title: 'Insurance', icon: Shield, description: 'Policy documents, claims processing, regulatory compliance', color: 'gold' },
];
```

Each card links to `/verticals/:id`.

- [ ] **Step 4: Rewrite IndustryDetails.tsx**

Route `/verticals/:industryId`. Similar structure to UseCaseDetails but industry-focused. Include industry-specific compliance requirements, use of VyXlo features, and a CTA to `/contact`.

- [ ] **Step 5: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/Industries.tsx src/pages/IndustryDetails.tsx
git commit -m "rewrite: Industry Verticals pages with VyXlo DMS industry content"
```

---

## Task 11: About Page

**Stitch screens:** Desktop `36418a470bdd4be38d177535fc2942fb`, Mobile `da30a3d929264b8a99d995c1e7670185`
**Files:** Modify `src/pages/About.tsx`
**Content source:** `new website contents.md` → PAGE: About `/about`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/36418a470bdd4be38d177535fc2942fb"
  projectId: "6634809109455924272"
  screenId: "36418a470bdd4be38d177535fc2942fb"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/da30a3d929264b8a99d995c1e7670185"
  projectId: "6634809109455924272"
  screenId: "da30a3d929264b8a99d995c1e7670185"
```

- [ ] **Step 2: Read content and current About.tsx**

Read `src/pages/About.tsx`. Read `new website contents.md` → About section. Key content: mission, product origin, team (subsidiary of Kanz.ai, Dubai), values, contact: contact@vyxlo.com · +971-42327866 · 702 Opal Tower, Business Bay, Dubai, UAE.

- [ ] **Step 3: Redesign About.tsx from Stitch layout**

Sections: Mission statement, Why we built this, Our values (3-4), The team (Dubai, Kanz.ai subsidiary), Contact info. CTA → `/contact`.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/About.tsx
git commit -m "redesign: About page from Stitch design"
```

---

## Task 12: Contact & Request Access

**Stitch screens:** Contact desktop `8563b3afc293406bbb8f10ad647f6fd4`, mobile `b23b191b66044f33bfc2fb94acd99767`. Request Access desktop `6ddcc618223644ef9d08a97e4db8f8ed`, mobile `45b4622b08da4b868e7c78e219f5c0a9`
**Files:** Modify `src/pages/Contact.tsx`, `src/pages/RequestAccess.tsx`

- [ ] **Step 1: Fetch Stitch designs for both pages**

```
Contact desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/8563b3afc293406bbb8f10ad647f6fd4"
  projectId: "6634809109455924272"
  screenId: "8563b3afc293406bbb8f10ad647f6fd4"

RequestAccess desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/6ddcc618223644ef9d08a97e4db8f8ed"
  projectId: "6634809109455924272"
  screenId: "6ddcc618223644ef9d08a97e4db8f8ed"
```

- [ ] **Step 2: Rewrite Contact.tsx**

Remove all `EditableContent` wrappers. Plain JSX with VyXlo DMS branding. Contact info: contact@vyxlo.com · +971-42327866 · 702 Opal Tower, Business Bay, Dubai, UAE · LinkedIn. Embed the HubSpot form using `<HubSpotForm />` component (already exists). Description: "Learn more about VyXlo DMS." (not "Kanz.ai").

- [ ] **Step 3: Fix RequestAccess.tsx SEO**

Fix the SEO description (currently says "SecureVault's intelligent platform"). Change to:
```tsx
<SEO
  title="Request Early Access — VyXlo DMS"
  description="Get early access to VyXlo DMS — the document intelligence platform for modern teams."
  canonical="/request-access"
/>
```

Then redesign the page layout from the Stitch design. Keep the HubSpot form embed.

- [ ] **Step 4: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/Contact.tsx src/pages/RequestAccess.tsx
git commit -m "redesign: Contact and Request Access pages from Stitch"
```

---

## Task 13: Technical Specifications (New Page)

**Stitch screens:** Desktop `3353719219f0463f8db33cda273734c9`, Mobile `8cab2507f6f644809757dfbff7a865cd`
**Files:** Create `src/pages/TechnicalSpecs.tsx`

- [ ] **Step 1: Fetch Stitch designs**

```
Desktop: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/3353719219f0463f8db33cda273734c9"
  projectId: "6634809109455924272"
  screenId: "3353719219f0463f8db33cda273734c9"

Mobile: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/8cab2507f6f644809757dfbff7a865cd"
  projectId: "6634809109455924272"
  screenId: "8cab2507f6f644809757dfbff7a865cd"
```

- [ ] **Step 2: Create TechnicalSpecs.tsx**

New page at route `/technical-specifications`. Content from `new website contents.md` (technical specs section) covering:
- Backend: FastAPI · Python 3.12 · PostgreSQL 16 + pgvector · Redis 7 · Celery · MinIO · Alembic · Pydantic v2 · SQLAlchemy 2
- Frontend: Next.js 16 · React 19 · TypeScript · TanStack Query v5 · Zustand · TipTap · shadcn/ui · Tailwind CSS
- Identity: ZITADEL (OIDC, PKCE, SAML, LDAP, social login, TOTP 2FA)
- AI: OpenAI · Azure OpenAI · Anthropic Claude · Google Gemini · Ollama
- Deployment: Docker Compose · Kubernetes-ready · Bring your own infra
- Performance metrics: <300ms p95, <5min AI processing, 500 concurrent users
- Testing: 327 tests, ≥72% coverage

CTA → `/request-access`.

```tsx
// Basic structure:
const TechnicalSpecs = () => (
  <>
    <SEO title="Technical Specifications — VyXlo DMS" description="Full technical stack: FastAPI, PostgreSQL/pgvector, Redis, ZITADEL, and 4 AI providers." canonical="/technical-specifications" />
    <div className="pt-20">
      {/* Hero */}
      {/* Tech stack sections as cards */}
      {/* Performance table */}
      {/* Deployment options */}
      {/* CTA */}
    </div>
  </>
);
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/TechnicalSpecs.tsx
git commit -m "feat: add Technical Specifications page from Stitch design"
```

---

## Task 14: Knowledge Base

**Stitch screens:** KB main `4093cf5a46604b2eb7c457c8d91667f4`, Getting Started `02bf12c1f2d841fdab699c8c98e58201`, Features `bc48d6fea5fe4619a154c3be59cec0a6`, API Docs `d853c727f2184666afaebe408ba3b51d`, Troubleshooting `4b6f949a655c4b59b05bc882b6dae630`
**Files:** Modify `src/pages/KnowledgeBase.tsx`

- [ ] **Step 1: Fetch Stitch KB main and Getting Started screens**

```
KB main: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/4093cf5a46604b2eb7c457c8d91667f4"
  projectId: "6634809109455924272"
  screenId: "4093cf5a46604b2eb7c457c8d91667f4"

Getting Started: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/02bf12c1f2d841fdab699c8c98e58201"
  projectId: "6634809109455924272"
  screenId: "02bf12c1f2d841fdab699c8c98e58201"
```

- [ ] **Step 2: Fetch remaining KB section screens**

```
Features: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/bc48d6fea5fe4619a154c3be59cec0a6"
  projectId: "6634809109455924272"
  screenId: "bc48d6fea5fe4619a154c3be59cec0a6"

API Docs: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/d853c727f2184666afaebe408ba3b51d"
  projectId: "6634809109455924272"
  screenId: "d853c727f2184666afaebe408ba3b51d"

Troubleshooting: mcp__stitch__get_screen
  name: "projects/6634809109455924272/screens/4b6f949a655c4b59b05bc882b6dae630"
  projectId: "6634809109455924272"
  screenId: "4b6f949a655c4b59b05bc882b6dae630"
```

- [ ] **Step 3: Read current KnowledgeBase.tsx**

Read `src/pages/KnowledgeBase.tsx`. Note the auth gate (localStorage `auth: 'true'`), Firebase document list, upload functionality.

- [ ] **Step 4: Redesign KnowledgeBase.tsx**

Keep the existing auth gate and Firebase functionality intact — only redesign the visual layout from the Stitch KB main screen. Add a tab navigation for: Getting Started · Features · API Documentation · Troubleshooting. Each tab shows static content from `new website contents.md` (KB sections) plus the Firebase-backed document list from the existing implementation. The upload admin panel remains unchanged.

- [ ] **Step 5: Verify build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/KnowledgeBase.tsx
git commit -m "redesign: Knowledge Base from Stitch with tabbed KB sections"
```

---

## Task 15: App.tsx Routes + Navigation Audit

**Files:** Modify `src/App.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`

- [ ] **Step 1: Read current App.tsx**

Read `src/App.tsx`. Note all existing routes.

- [ ] **Step 2: Update App.tsx with all routes**

Add missing routes and ensure ordering is correct (static before dynamic):

```tsx
import TechnicalSpecs from './pages/TechnicalSpecs';

// Inside <Routes>:
<Route path="/" element={<Home />} />
<Route path="/features" element={<Features />} />
<Route path="/features/ai-automation" element={<AIAutomation />} />    {/* BEFORE :featureId */}
<Route path="/features/collaboration" element={<Collaboration />} />   {/* BEFORE :featureId */}
<Route path="/features/:featureId" element={<FeatureDetails />} />
<Route path="/how-it-works" element={<HowItWorks />} />
<Route path="/security" element={<Security />} />
<Route path="/use-cases" element={<UseCases />} />
<Route path="/use-cases/:industryId" element={<UseCaseDetails />} />
<Route path="/verticals" element={<Industries />} />
<Route path="/verticals/:industryId" element={<IndustryDetails />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/request-access" element={<RequestAccess />} />
<Route path="/technical-specifications" element={<TechnicalSpecs />} />
<Route path="/knowledge-base" element={<KnowledgeBase />} />
```

- [ ] **Step 3: Verify Navbar links**

Read `src/components/Navbar.tsx`. Ensure all nav links are correct:
- Features → `/features`
- How It Works → `/how-it-works`
- Security → `/security`
- Use Cases → `/use-cases`
- About → `/about`
- Contact → `/contact`
- "Request Early Access" → `/request-access`
- "Try Free" → `https://91.107.255.176:8080/` (new tab)

If Stitch designs show any new nav items (e.g., Tech Specs), add them.

- [ ] **Step 4: Verify Footer links**

Read `src/components/Footer.tsx`. Ensure all footer links are correct:
- Product column: Features, How It Works, Security, Use Cases, Request Early Access, Technical Specifications
- Company: About, Contact, Knowledge Base
- Connect: email (contact@vyxlo.com), phone (+971-42327866), address, LinkedIn

- [ ] **Step 5: Full build + route smoke test**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1 | tail -30
```

Check the build output lists all expected route pages. Expected: `✓ built in` with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx src/components/Navbar.tsx src/components/Footer.tsx
git commit -m "feat: complete route map with TechnicalSpecs, all links verified"
```

---

## Task 16: Final QA Pass

- [ ] **Step 1: Run full production build**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website && npm run build 2>&1
```

Expected: no TypeScript errors, no ESBuild errors, bundle < 500KB JS gzipped.

- [ ] **Step 2: Check for broken internal links**

Grep for any remaining old brand names or incorrect links:

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website/src
grep -r "SecureVault" --include="*.tsx" .
grep -r "kanz-ai" --include="*.tsx" .
grep -r "blue-\|primary-\|accent-" --include="*.tsx" . | grep -v "node_modules"
```

Expected: no results for SecureVault, no raw blue-*/primary-*/accent-* Tailwind classes (use gold/charcoal tokens instead).

- [ ] **Step 3: Check all pages use pt-20**

```bash
grep -L "pt-20" src/pages/*.tsx src/pages/features/*.tsx
```

Expected: empty output — all pages must have `pt-20` on their root div.

- [ ] **Step 4: Check apostrophe safety**

```bash
grep -n "title: '.*'.*'" src/pages/*.tsx src/pages/features/*.tsx || echo "OK"
```

Look for single-quoted strings with apostrophes inside. Fix any found by switching to double quotes.

- [ ] **Step 5: Final commit**

```bash
cd /Users/rezasahebozamani/Documents/source/Vyxlo-website
git add -A
git status  # review what's staged
git commit -m "chore: final QA pass — complete VyXlo website Stitch redesign"
```

---

## Self-Review

**Spec coverage:**
- ✅ Home (12 sections)
- ✅ Features (10 groups)
- ✅ FeatureDetails (10 dynamic routes)
- ✅ AI Automation deep-dive
- ✅ Collaboration deep-dive
- ✅ How It Works (6 steps)
- ✅ Security (8 sections)
- ✅ Use Cases (5 team-based)
- ✅ UseCaseDetails (5 dynamic routes)
- ✅ Industry Verticals (5 industries)
- ✅ IndustryDetails (5 dynamic routes)
- ✅ About
- ✅ Contact (EditableContent removed)
- ✅ Request Access (SEO fixed)
- ✅ Technical Specifications (new page)
- ✅ Knowledge Base (tabbed, auth preserved)
- ✅ App.tsx routes (complete, ordering correct)
- ✅ Navbar + Footer links
- ✅ Build verification on each task
- ✅ Final QA pass

**Placeholder scan:** No TBDs. All task steps have concrete code or explicit Stitch fetch instructions.

**Type consistency:** `FeatureDetail`, `UseCaseDetail` interfaces defined in their respective task. `FEATURE_DETAILS` object keys match the route IDs used in `Features.tsx` cards.
