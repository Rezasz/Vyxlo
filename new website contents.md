# VyXlo DMS — New Website Contents & Links

> Complete content architecture, copy, and internal link map for the redesigned VyXlo DMS website.
> Tone: Direct · Technical where useful · Concrete over vague · Confident, not salesy.

---

## SITE ARCHITECTURE

```
/                       → Home (Landing Page)
/features               → Features (full grouped list)
/features/:featureId    → Feature Detail (dynamic)
/features/ai-automation → AI Automation deep-dive
/features/collaboration → Collaboration deep-dive
/how-it-works           → How It Works (6 steps)
/security               → Security (NEW PAGE)
/use-cases              → Use Cases (team-based, 5 cards)
/use-cases/:id          → Use Case Detail (dynamic)
/verticals              → Industry Verticals
/verticals/:id          → Industry Detail (dynamic)
/about                  → About
/contact                → Contact
/request-access         → Request Early Access
/knowledge-base         → Knowledge Base (auth-gated)
```

---

## NAVIGATION

**Logo:** VyXlo mark (square doc icon with V chevron) + "VyXlo" wordmark + "DMS" badge

**Nav links:**
- Features → `/features`
- How It Works → `/how-it-works`
- Security → `/security`
- Use Cases → `/use-cases`
- About → `/about`
- Contact → `/contact`

**Primary CTA:** "Request Early Access" → `/request-access`

**External CTA:** "Try Free" → `https://91.107.255.176:8080/` (opens in new tab)

---

## PAGE: Home `/`

### Section 1 — Hero
**Background:** `bg-charcoal-900` (dark, with subtle dot grid overlay)

**H1:** The Document Intelligence Platform Built for Teams That Can't Afford to Lose Control

**Subheadline:** VyXlo replaces scattered drives, fragile approvals, and manual compliance with a single intelligent system. Upload, organize, collaborate, and audit — with AI doing the heavy lifting.

**CTA Primary:** "Request Early Access" → `/request-access`
**CTA Secondary:** "See How It Works →" → `/how-it-works`

**Social proof line:** Trusted by teams who treat documents as infrastructure.

---

### Section 2 — Problem Statement
**Background:** `bg-white`
**Overline:** Why teams outgrow their current tools

**Column 1 — Files everywhere, context nowhere**
Your team uses shared drives, email attachments, Slack threads, and Notion pages to manage the same document. Nobody knows which version is current or who approved it.

**Column 2 — Approvals that disappear into inboxes**
Multi-step approvals are done over email. Steps are forgotten, deadlines missed, and there's no audit trail if something goes wrong.

**Column 3 — Compliance is an afterthought**
When the auditor asks who accessed what and when, you're piecing together logs from three different tools. That's not a process — it's a risk.

---

### Section 3 — Product Overview
**Background:** `bg-charcoal-50`

**H2:** One platform. Every document. Every action. Every audit.

**Body:** VyXlo is a cloud-native document management system that combines structured storage, AI-powered processing, multi-step workflow automation, and immutable audit logging in a single platform. Your documents don't just live here — they work here.

---

### Section 4 — Core Features (6-grid)
**Background:** `bg-white`
**Overline:** What VyXlo does

1. **Organized by Design** (FolderTree icon) — Unlimited folder hierarchy with permissions and version control
2. **AI That Works While You Don't** (Brain icon) — Classification, summaries, entity extraction, semantic embeddings on every upload
3. **Find Anything, Instantly** (Search icon) — Full-text + semantic search, both respecting permissions
4. **Approval Workflows That Actually Work** (GitBranch icon) — Sequential + parallel steps, deadlines, escalations, auto-logging
5. **Compliance You Can Prove** (ShieldCheck icon) — Immutable audit log, before/after state, SHA-256 checksums, CSV export
6. **Real-Time Collaboration** (Users icon) — Live presence, threaded comments, @mentions, document locking

**Links from feature cards:** "Learn more →" → `/features`

---

### Section 5 — AI Deep Dive
**Background:** `bg-charcoal-900` (dark section)

**Overline:** Powered by AI
**H2:** Your documents are processed before you even open them.

**Body:** Upload a contract at 9am. By 9:05am, VyXlo has read it. The AI has identified it as a contract, extracted key dates and parties, written a 3-sentence summary, tagged it with relevant topics, and generated a semantic embedding so it surfaces in searches — even searches that don't use the exact words inside it.

**4 sub-features:**
- AI Classification — 10 categories (INVOICE, CONTRACT, REPORT, POLICY, MEMO, LETTER, FORM, PRESENTATION, MANUAL, OTHER) with confidence score
- Entity Extraction — People, organizations, dates, monetary amounts extracted automatically
- Semantic Search — pgvector 1536-dimensional embeddings; "supplier agreements from last quarter" finds "vendor contract" docs
- Multi-Provider Support — OpenAI · Azure OpenAI · Anthropic Claude · Google Gemini · Ollama (local/private)

**CTA:** "See all AI features →" → `/features`

---

### Section 6 — Workflow Engine
**Background:** `bg-white`

**Overline:** Workflow Engine
**H2:** Approvals that enforce themselves.

**Body:** Define a workflow once. Assign steps to individuals or departments. Set deadlines. VyXlo handles routing, reminders, escalations, and decision recording.

**5 numbered steps:**
1. **Initiate** — any user with WRITE permission starts a workflow
2. **Route** — sequential steps flow one by one; parallel steps activate simultaneously
3. **Approve or reject** — each assignee reviews with optional comment; rejection terminates workflow
4. **Complete** — approved documents auto-promoted to APPROVED status
5. **Notify** — every transition triggers in-app and email notifications

**Supported scenarios:** Legal review → Finance sign-off → Executive approval. Parallel department head review. All-hands policy sign-off.

---

### Section 7 — Security Summary
**Background:** `bg-charcoal-50`
**Overline:** Built for regulated environments
**H2:** Fine-grained control. Immutable records. Nothing hidden.

**3 key points:**
- 8 permission levels per document and folder (NONE → READ → DOWNLOAD → COMMENT → CONTRIBUTOR → WRITE → EDITOR → ADMIN)
- Immutable audit log — every action logged with before/after state and SHA-256 tamper-evident checksum
- ZITADEL identity — OIDC/PKCE/SAML/LDAP/social login; passwords never touch VyXlo's servers

**CTA:** "Read the full security model →" → `/security`

---

### Section 8 — Metrics
**Background:** `bg-charcoal-900`
**H2:** Built to handle serious workloads.

| Metric | Value |
|--------|-------|
| 327 | automated tests, ≥72% coverage |
| 8 | permission levels per document |
| 4 | AI providers supported |
| 7 | Docker services, single `compose up` |
| <300ms | p95 API response time target |
| <5 min | AI document processing time |
| 500 | concurrent users per organization |
| ∞ | version history preserved |

---

### Section 9 — Use Cases
**Background:** `bg-white`
**Overline:** Who uses VyXlo

**5 cards:**
1. **Legal & Compliance Teams** — Contracts, NDAs, policies; multi-step review; share links for external parties; one-click audit export
2. **Finance & Operations** — AI classification of invoices/POs; parallel stakeholder sign-off; retention + auto-purge
3. **HR & People Teams** — Fine-grained permissions per employee; onboarding workflows; employment law retention
4. **Product & Engineering Teams** — Specs, RFCs, runbooks; semantic search for "incident response procedure" finds "On-Call Handbook"
5. **Agencies & Consultancies** — Per-client folder isolation; password-protected share links with download tracking

**Links from cards:** → `/use-cases`

---

### Section 10 — Tech Stack
**Background:** `bg-charcoal-50`
**Overline:** Open stack, no lock-in
**H2:** Built on standards you already know.

- **Backend:** FastAPI · Python 3.12 · PostgreSQL 16 + pgvector · Redis 7 · Celery · MinIO · Alembic · Pydantic v2 · SQLAlchemy 2
- **Frontend:** Next.js 16 · React 19 · TypeScript · TanStack Query v5 · Zustand · TipTap · shadcn/ui · Tailwind CSS
- **Identity:** ZITADEL (OIDC, PKCE, SAML, LDAP, social login, TOTP 2FA)
- **AI:** OpenAI · Azure OpenAI · Anthropic Claude · Google Gemini · Ollama
- **Deployment:** Docker Compose · Kubernetes-ready · Bring your own Postgres + Redis + S3

---

### Section 11 — Pricing
**Background:** `bg-white`
**Overline:** Pricing
**H2:** Simple pricing. No per-feature gates.

**Body:** VyXlo is available as a self-hosted deployment or managed cloud service. All plans include the full feature set — AI, workflows, audit log, collaboration, and multi-tenancy.

| Plan | Who it's for | Price |
|------|-------------|-------|
| **Self-Hosted** | Engineering teams who want full control | Free — bring your own infrastructure |
| **Cloud Starter** | Small teams up to 25 users | Contact us |
| **Cloud Business** | Up to 250 users, SLA, managed backups | Contact us |
| **Enterprise** | Unlimited users, SSO, dedicated support | Contact us |

**CTA:** "Talk to us about pricing →" → `/contact`

---

### Section 12 — Final CTA
**Background:** `bg-charcoal-900`

**H2:** Ready to put your documents to work?

**Body:** VyXlo is open source and self-hostable. Run the full stack on your own infrastructure in under 10 minutes with Docker Compose. Or let us host it for you.

**CTA Primary:** "Request Early Access" → `/request-access`
**CTA Secondary:** "Read the Documentation" → (external docs link, placeholder)

---

## PAGE: Features `/features`

### Hero
**Background:** `bg-charcoal`

**H1:** Every feature a document management platform needs. Nothing it doesn't.

**Subheadline:** VyXlo is purpose-built for organizations that need structure, control, and intelligence — not another shared drive.

---

### Feature Groups (10 categories)

#### Document Management (9 items)
- Unlimited file types (PDF, DOCX, XLSX, PPTX, images, and more)
- Configurable max file size per organization
- Status lifecycle: DRAFT → IN_REVIEW → PENDING_APPROVAL → APPROVED → PUBLISHED → ARCHIVED
- Full version history — every upload creates a version; any version can be restored
- Document duplication (metadata + file copy)
- Move documents between folders
- Soft delete with admin recovery
- View count and download count tracking
- Document locking (auto-expires after 1 hour)

#### Organization & Search (8 items)
- Unlimited folder hierarchy
- Materialized path for efficient tree queries
- Folder-level permissions inherited by documents
- Full-text search (PostgreSQL tsvector)
- Semantic search (pgvector, cosine similarity)
- Search filters: folder, type, status, owner, date range, tags, AI classification
- Autocomplete suggestions
- Tag system with organization-scoped namespaces and color coding

#### AI Processing (7 items)
- Automatic classification into 10 categories
- Keyword and entity extraction (people, organizations, dates, monetary amounts)
- AI-generated document summaries
- Semantic embedding generation for similarity search
- Content moderation flag
- Re-process any document on demand
- Works with OpenAI, Azure OpenAI, Anthropic, Gemini, or Ollama

#### Access Control (6 items)
- 8-level permission system: NONE · READ · DOWNLOAD · COMMENT · CONTRIBUTOR · WRITE · EDITOR · ADMIN
- Target individual users or entire departments
- Permission expiration dates
- Effective permission = max of all applicable grants
- Document owner always has ADMIN access
- Public documents visible to all authenticated users in the org

#### Workflow Engine (5 items)
- Multi-step approval chains with configurable step order
- Sequential and parallel step execution
- Per-step deadline tracking
- Workflow hold, resume, and escalation
- Full workflow state history

#### Sharing (4 items)
- Secure share links (cryptographically random tokens, ≥32 bytes entropy)
- Optional expiry date, access count limit, password protection, email allowlist
- Per-link access analytics (access count, last accessed)
- One-click revoke

#### Collaboration (8 items)
- Live presence indicators (who is viewing right now)
- Threaded comments with unlimited nesting
- @mentions with instant notifications
- Comment editing within 15 minutes of posting
- Comment resolution by document owner or ADMIN
- Emoji reactions
- Inline annotation support (page + position coordinates)
- WebSocket with automatic reconnection and exponential backoff

#### Notifications (6 items)
- In-app notifications with real-time WebSocket delivery
- Email notifications (async, within 2 minutes)
- Daily digest email for unread notifications
- Per-channel preferences per notification type
- 8 notification event types
- Notification read/unread state management

#### Audit & Compliance (7 items)
- Immutable audit log for every action type
- Before/after state stored as JSONB
- Tamper-evident SHA-256 checksums
- CSV export (async, returns download URL)
- Configurable retention periods with automatic purge
- Two-factor authentication (TOTP) with recovery codes
- Active session management with remote revoke

#### Administration (5 items)
- Organization settings (name, logo, timezone, storage quota, feature flags)
- User invitation and role management
- Department management
- Storage usage dashboard
- Platform-level admin for managing organizations (SUPER_ADMIN)

**CTA:** "Request Early Access" → `/request-access`

---

## PAGE: How It Works `/how-it-works`

### Hero
**H1:** From upload to insight in under five minutes.

**6 Steps:**

1. **Upload — Drop it in. We'll handle the rest.**
   Upload any file from the browser, drag-and-drop, or via the REST API. VyXlo stores the file in your S3-compatible storage, creates a version record, and queues it for AI processing.

2. **AI Processing — The AI reads it so your team doesn't have to.**
   Within 5 minutes: classification, keyword/entity extraction, plain-language summary, semantic embedding. All stored, immediately available in search.

3. **Organize — Put it where it belongs.**
   Assign to a folder, tag it, set its status. Apply permissions. Folder permissions are inherited by documents inside.

4. **Collaborate — Work on it together.**
   Share with your team. Threaded comments. @mention the right person. See who's in the document right now. Lock a section if you need uninterrupted focus.

5. **Approve — Route it for sign-off.**
   Start an approval workflow. Sequential and parallel steps. Each approver notified, takes action, document advances. Final approval auto-updates document status.

6. **Audit — Prove everything that happened.**
   Every action — upload, view, download, permission change, approval, share — written to an immutable audit log. Filter, export to CSV, answer auditor questions in seconds.

**CTA:** "Request Early Access" → `/request-access`

---

## PAGE: Security `/security`

### Hero
**H1:** Security is not a checkbox. It's the foundation.

### Sections:

**Identity — ZITADEL**
Authentication via ZITADEL, an enterprise-grade open-source identity platform. VyXlo never stores passwords. OIDC with PKCE is the default. SAML, LDAP, and social login available. JWTs validated against ZITADEL's JWKS endpoint using RS256.

**Authorization — Fine-Grained**
8 permission levels. Per-document and per-folder. Apply to users or departments. Expiration dates. Effective permission = maximum across all applicable grants. Document owners always have ADMIN access.

**Transport Security**
All communication over HTTPS. WebSocket connections use WSS. Share link tokens use `secrets.token_urlsafe(32)`. Share link passwords bcrypt-hashed with cost factor ≥ 12.

**Input Validation**
Every API input validated by Pydantic schemas before reaching business logic. SQLAlchemy ORM with parameterized queries — no raw string interpolation, ever. MIME type validation on uploads; executables are rejected.

**Data Isolation**
Every database query scoped to the caller's organization at the service layer. No code path returns data across organization boundaries. Multi-tenancy enforced in code, not just routing.

**Audit Trail**
Immutable. Every create, update, delete, login, logout, access, download, permission change, workflow action produces a log entry. Before/after JSONB. SHA-256 tamper-evident checksums. No updates, no deletes — ever.

**Two-Factor Authentication**
TOTP-based 2FA. QR code setup via Google Authenticator, Authy, or 1Password. Recovery codes generated at setup. Active sessions visible and revocable by the user.

**CTA:** "Request Early Access" → `/request-access`

---

## PAGE: Use Cases `/use-cases`

**H1:** Built for the teams that can't afford to lose control.

**5 use cases (team-based):**

1. **Legal & Compliance Teams** (`/use-cases/legal-compliance`)
   Contracts, NDAs, policies with version history and immutable audit trails. Multi-step legal review workflows. Secure share links for external parties without system access. One-click audit export for regulators.

2. **Finance & Operations** (`/use-cases/finance-operations`)
   AI-powered classification of invoices, purchase orders, reports. Parallel sign-off from multiple stakeholders. Configurable retention periods with automatic purge.

3. **HR & People Teams** (`/use-cases/hr-people`)
   Fine-grained permissions — employee documents visible only to authorized people. Onboarding workflows routing documents for acknowledgment. Retention policies that comply with employment law.

4. **Product & Engineering Teams** (`/use-cases/product-engineering`)
   Specs, RFCs, runbooks, design docs alongside code. Semantic search: "incident response procedure" returns the right doc even if titled "On-Call Handbook." Tag and filter by project.

5. **Agencies & Consultancies** (`/use-cases/agencies`)
   Per-client folder isolation. Share final versions via password-protected links with download tracking. No client ever sees another client's work.

---

## PAGE: About `/about`

**H1:** Built for organizations that treat documents as infrastructure.

**Mission:** To give organizations complete control over their documents — structured storage, intelligent processing, and a complete audit trail — in a single system that doesn't require three tools and an intern to hold together.

**Vision:** A world where every action on every document is known, auditable, and recoverable. Where AI handles the reading so humans can focus on the deciding. Where compliance is built-in, not bolted-on.

**Values:**
- **Control** — Fine-grained permissions and immutable records because trust should be verifiable, not assumed
- **Intelligence** — AI that works on every document automatically, without configuration
- **Openness** — Open source core, self-hostable, no vendor lock-in
- **Precision** — Specific features, exact constraints, real numbers — not vague promises

**Built by Vyxlo.com** — a subsidiary of Kanz.ai, based in Dubai, UAE.

**Contact:** contact@vyxlo.com · +971-42327866 · 702 Opal Tower, Business Bay, Dubai, UAE

**CTA:** "Get in Touch" → `/contact`

---

## PAGE: Contact `/contact`

**H1:** Talk to us.

**Contact details:**
- Email: contact@vyxlo.com
- Phone: +971-42327866
- Address: 702 Opal Tower, Business Bay, Dubai, UAE

**HubSpot form embedded (portal: 143927153)**

**CTA:** "Request Early Access" → `/request-access`

---

## PAGE: Request Access `/request-access`

**H1:** Request Early Access

**Subtitle:** Get early access to VyXlo DMS — the document intelligence platform built for teams that need control.

**HubSpot form embedded**

---

## FOOTER

**Logo:** VyXlo mark + "VyXlo" wordmark

**Tagline:** Document management for teams who care about control.

**Column 1 — Product**
- Features → `/features`
- How It Works → `/how-it-works`
- Security → `/security`
- Use Cases → `/use-cases`
- Request Early Access → `/request-access`

**Column 2 — Company**
- About → `/about`
- Contact → `/contact`
- Knowledge Base → `/knowledge-base`

**Column 3 — Connect**
- LinkedIn → `https://www.linkedin.com/company/kanz-ai/`
- Email → `contact@vyxlo.com`
- Phone → `+971-42327866`
- Address → `702 Opal Tower, Business Bay, Dubai, UAE`

**Bottom line:** © 2026 VyXlo DMS. A Kanz.ai product. Built with FastAPI, React, and PostgreSQL.

---

## INTERNAL LINK MAP

| From | To | Anchor text |
|------|----|------------|
| Home hero | `/request-access` | Request Early Access |
| Home hero | `/how-it-works` | See How It Works → |
| Home features | `/features` | Learn more → |
| Home AI section | `/features` | See all AI features → |
| Home security | `/security` | Read the full security model → |
| Home use cases | `/use-cases` | (card click) |
| Home pricing | `/contact` | Talk to us about pricing → |
| Home final CTA | `/request-access` | Request Early Access |
| Features hero | `/request-access` | Request Early Access (CTA) |
| HowItWorks final | `/request-access` | Request Early Access |
| Security final | `/request-access` | Request Early Access |
| UseCases cards | `/use-cases/:id` | (card click) |
| About CTA | `/contact` | Get in Touch |
| Contact CTA | `/request-access` | Request Early Access |
| Navbar all pages | `/request-access` | Request Early Access (button) |
| Navbar "Try Free" | `https://91.107.255.176:8080/` | Try Free (external, new tab) |

---

## SEO

**Home page title:** VyXlo DMS — Document Intelligence for Modern Teams
**Meta description:** VyXlo is a cloud-native document management system with AI-powered classification, multi-step approval workflows, fine-grained permissions, immutable audit logs, and real-time collaboration. Self-hostable with Docker.

**OG title:** VyXlo DMS — The document platform with a brain.
**OG description:** Upload, organize, approve, and audit every document in your organization. AI processes every file automatically. Full audit trail. Real-time collaboration. Open source and self-hostable.

**Keywords:** document management system, DMS, AI document processing, approval workflows, audit trail, self-hosted DMS, enterprise document management, semantic search, ZITADEL SSO
