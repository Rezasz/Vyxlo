import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, FolderTree, Brain, Search, GitBranch, ShieldCheck, Users,
  Shield, Cloud, Code2, Network, FileText, Zap, Lock, Key, Activity, BarChart3,
} from 'lucide-react';
import SEO from '../components/SEO';

const METRICS = [
  { value: '327', label: 'automated tests', sub: '≥72% coverage' },
  { value: '8', label: 'permission levels', sub: 'per document' },
  { value: '4', label: 'AI providers', sub: 'supported' },
  { value: '7', label: 'Docker services', sub: 'single compose up' },
  { value: '<300ms', label: 'p95 API response', sub: 'time target' },
  { value: '<5 min', label: 'AI processing', sub: 'per document' },
  { value: '500', label: 'concurrent users', sub: 'per organization' },
  { value: '∞', label: 'version history', sub: 'preserved' },
];

const CORE_FEATURES = [
  {
    icon: FolderTree,
    title: 'Organized by Design',
    body: 'Build an unlimited folder hierarchy. Move documents, set folder-level permissions, and let structure enforce clarity — not hope.',
  },
  {
    icon: Brain,
    title: "AI That Works While You Don't",
    body: 'Every uploaded document is automatically classified, summarized, and tagged. Keywords and entities are extracted. Semantic embeddings are generated. By the time you open a document, the AI has already done the reading.',
  },
  {
    icon: Search,
    title: 'Find Anything, Instantly',
    body: 'Two search modes in one interface. Full-text search finds exact matches. Semantic search finds what you meant, not just what you typed. Both respect permissions.',
  },
  {
    icon: GitBranch,
    title: 'Approval Workflows That Actually Work',
    body: 'Multi-step approval chains with sequential and parallel steps, assignees, deadlines, and escalation logic. Each step is tracked, every decision logged.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance You Can Prove',
    body: 'Every action produces an immutable audit log entry with before/after state and a tamper-evident SHA-256 checksum. Export to CSV for regulators.',
  },
  {
    icon: Users,
    title: 'Real-Time Collaboration',
    body: "See who's in a document right now. Threaded comments with @mentions. Lock sections to prevent conflicting edits. Secure share links with analytics.",
  },
];

const AI_SUBFEATURES = [
  {
    title: 'AI Classification',
    body: '10 categories with confidence score: INVOICE, CONTRACT, REPORT, POLICY, MEMO, LETTER, FORM, PRESENTATION, MANUAL, OTHER',
  },
  {
    title: 'Entity Extraction',
    body: 'People, organizations, dates, and monetary amounts extracted automatically.',
  },
  {
    title: 'Semantic Search',
    body: "pgvector 1536-dimensional embeddings. 'Supplier agreements from last quarter' finds the right contracts even if they say 'vendor contract.'",
  },
  {
    title: 'Multi-Provider Support',
    body: 'OpenAI · Azure OpenAI · Anthropic Claude · Google Gemini · Ollama (local/private). Switch providers without re-architecture.',
  },
];

const WORKFLOW_STEPS = [
  { n: '1', title: 'Initiate', body: 'Any user with WRITE permission starts a workflow against one or more documents.' },
  { n: '2', title: 'Route', body: 'Documents flow through sequential steps; parallel steps activate simultaneously and can require any one or all approvers.' },
  { n: '3', title: 'Approve or Reject', body: 'Each assignee reviews and responds with an optional comment. Rejection immediately terminates the workflow.' },
  { n: '4', title: 'Complete', body: 'Approved documents are automatically promoted to APPROVED status. The audit log captures the full decision chain.' },
  { n: '5', title: 'Notify', body: 'Every transition triggers real-time in-app and email notifications to relevant users.' },
];

const SECURITY_POINTS = [
  {
    icon: Key,
    title: '8 Permission Levels',
    body: '8 permission levels per document and folder (NONE → READ → DOWNLOAD → COMMENT → CONTRIBUTOR → WRITE → EDITOR → ADMIN)',
  },
  {
    icon: Lock,
    title: 'Immutable Audit Log',
    body: 'Immutable audit log — every action logged with before/after state and SHA-256 tamper-evident checksum',
  },
  {
    icon: Shield,
    title: 'ZITADEL Identity',
    body: 'ZITADEL identity — OIDC/PKCE/SAML/LDAP/social login; passwords never touch VyXlo\'s servers',
  },
];

const USE_CASES = [
  {
    icon: Shield,
    title: 'Legal & Compliance Teams',
    body: 'Contracts, NDAs, policies; multi-step review; share links for external parties; one-click audit export',
  },
  {
    icon: BarChart3,
    title: 'Finance & Operations',
    body: 'AI classification of invoices/POs; parallel stakeholder sign-off; retention + auto-purge',
  },
  {
    icon: Users,
    title: 'HR & People Teams',
    body: 'Fine-grained permissions per employee; onboarding workflows; employment law retention',
  },
  {
    icon: Code2,
    title: 'Product & Engineering Teams',
    body: "Specs, RFCs, runbooks; semantic search for 'incident response procedure' finds 'On-Call Handbook'",
  },
  {
    icon: Network,
    title: 'Agencies & Consultancies',
    body: 'Per-client folder isolation; password-protected share links with download tracking',
  },
];

const TECH_STACK = [
  {
    icon: Code2,
    label: 'Backend',
    stack: 'FastAPI · Python 3.12 · PostgreSQL 16 + pgvector · Redis 7 · Celery · MinIO · Alembic · Pydantic v2 · SQLAlchemy 2',
  },
  {
    icon: Activity,
    label: 'Frontend',
    stack: 'Next.js 16 · React 19 · TypeScript · TanStack Query v5 · Zustand · TipTap · shadcn/ui · Tailwind CSS',
  },
  {
    icon: Key,
    label: 'Identity',
    stack: 'ZITADEL (OIDC, PKCE, SAML, LDAP, social login, TOTP 2FA)',
  },
  {
    icon: Brain,
    label: 'AI',
    stack: 'OpenAI · Azure OpenAI · Anthropic Claude · Google Gemini · Ollama',
  },
  {
    icon: Cloud,
    label: 'Deployment',
    stack: 'Docker Compose · Kubernetes-ready · Bring your own Postgres + Redis + S3',
  },
];

const PRICING = [
  {
    name: 'Self-Hosted',
    target: 'Engineering teams who want full control',
    price: 'Free',
    sub: 'bring your own infrastructure',
    highlight: false,
  },
  {
    name: 'Cloud Starter',
    target: 'Small teams up to 25 users',
    price: 'Contact us',
    sub: 'Managed, no ops burden',
    highlight: false,
  },
  {
    name: 'Cloud Business',
    target: 'Up to 250 users, SLA, managed backups',
    price: 'Contact us',
    sub: 'SLA + priority support',
    highlight: true,
  },
  {
    name: 'Enterprise',
    target: 'Unlimited users, SSO, dedicated support',
    price: 'Contact us',
    sub: 'Custom deployment options',
    highlight: false,
  },
];

const PROBLEM_CARDS = [
  {
    icon: FileText,
    title: 'Files everywhere, context nowhere',
    body: 'Your team uses shared drives, email attachments, Slack threads, and Notion pages to manage the same document. Nobody knows which version is current or who approved it.',
  },
  {
    icon: Zap,
    title: 'Approvals that disappear into inboxes',
    body: "Multi-step approvals are done over email. Steps are forgotten, deadlines missed, and there's no audit trail if something goes wrong.",
  },
  {
    icon: Activity,
    title: 'Compliance is an afterthought',
    body: "When the auditor asks who accessed what and when, you're piecing together logs from three different tools. That's not a process — it's a risk.",
  },
];

const Home = () => {
  return (
    <>
      <SEO
        title="VyXlo DMS — Document Intelligence for Modern Teams"
        description="VyXlo is a cloud-native document management system with AI-powered classification, multi-step approval workflows, fine-grained permissions, immutable audit logs, and real-time collaboration. Self-hostable with Docker."
        canonical="/"
      />
      <div className="pt-20">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-charcoal-900 text-white overflow-hidden">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-gold text-sm font-medium">Document Intelligence Platform</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                The Document Intelligence Platform Built for Teams That Can't Afford to Lose Control
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                VyXlo replaces scattered drives, fragile approvals, and manual compliance with a single intelligent system. Upload, organize, collaborate, and audit — with AI doing the heavy lifting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-access"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                >
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <p className="mt-8 text-white/40 text-sm">
                Trusted by teams who treat documents as infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROBLEM STATEMENT ────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest text-center mb-4">Why teams outgrow their current tools</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {PROBLEM_CARDS.map((item) => (
                <div key={item.title} className="p-6 border border-charcoal-border rounded-lg">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT OVERVIEW ─────────────────────────────────────── */}
        <section className="py-20 bg-charcoal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              One platform. Every document. Every action. Every audit.
            </h2>
            <p className="text-lg text-charcoal-muted leading-relaxed">
              VyXlo is a cloud-native document management system that combines structured storage, AI-powered processing, multi-step workflow automation, and immutable audit logging in a single platform. Your documents don't just live here — they work here.
            </p>
          </div>
        </section>

        {/* ── CORE FEATURES ────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">What VyXlo does</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Every capability. In one system.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_FEATURES.map((f) => (
                <div key={f.title} className="p-6 bg-white border border-charcoal-border rounded-lg hover:shadow-md transition-shadow group flex flex-col">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold mb-4 group-hover:bg-gold group-hover:text-charcoal-900 transition-colors">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{f.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed flex-1">{f.body}</p>
                  <Link
                    to="/features"
                    className="inline-flex items-center mt-4 text-gold text-sm font-semibold hover:text-gold-dark transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI DEEP DIVE ─────────────────────────────────────────── */}
        <section className="py-24 bg-charcoal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Powered by AI</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Your documents are processed before you even open them.</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Upload a contract at 9am. By 9:05am, VyXlo has read it. The AI has identified it as a contract, extracted key dates and parties, written a 3-sentence summary, tagged it with relevant topics, and generated a semantic embedding so it surfaces in searches — even searches that don't use the exact words inside it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {AI_SUBFEATURES.map((f) => (
                <div key={f.title} className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-gold/40 transition-colors">
                  <h3 className="text-base font-semibold text-gold mb-2">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
            <Link to="/features" className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors">
              See all AI features →
            </Link>
          </div>
        </section>

        {/* ── WORKFLOW ENGINE ───────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Workflow Engine</p>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5">Approvals that enforce themselves.</h2>
                <p className="text-charcoal-muted text-lg leading-relaxed">
                  Define a workflow once. Assign steps to individuals or departments. Set deadlines. VyXlo handles routing, reminders, escalations, and decision recording.
                </p>
              </div>
              <div className="space-y-3">
                {WORKFLOW_STEPS.map((step) => (
                  <div key={step.n} className="flex gap-4 p-4 rounded-lg border border-charcoal-border hover:border-gold/40 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-charcoal-900 flex items-center justify-center text-sm font-bold">
                      {step.n}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm mb-0.5">{step.title}</p>
                      <p className="text-charcoal-muted text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECURITY SUMMARY ─────────────────────────────────────── */}
        <section className="py-20 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Built for regulated environments</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Fine-grained control. Immutable records. Nothing hidden.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SECURITY_POINTS.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-6 border border-charcoal-border">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/security" className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors">
                Read the full security model →
              </Link>
            </div>
          </div>
        </section>

        {/* ── METRICS ──────────────────────────────────────────────── */}
        <section className="py-20 bg-charcoal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-14">Built to handle serious workloads.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {METRICS.map((m) => (
                <div key={m.label} className="text-center p-5 border border-white/10 rounded-lg hover:border-gold/40 transition-colors">
                  <p className="text-4xl font-bold text-gold mb-1">{m.value}</p>
                  <p className="text-sm font-medium text-white/80">{m.label}</p>
                  <p className="text-xs text-white/40 mt-1">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Who uses VyXlo</p>
              <h2 className="text-3xl font-bold text-charcoal mb-4">The teams that rely on VyXlo</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map((uc) => (
                <Link
                  key={uc.title}
                  to="/use-cases"
                  className="block p-6 border border-charcoal-border rounded-lg hover:border-gold hover:shadow-md transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold mb-4 group-hover:bg-gold group-hover:text-charcoal-900 transition-colors">
                    <uc.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors">{uc.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{uc.body}</p>
                  <span className="inline-flex items-center mt-4 text-gold text-sm font-medium">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────────── */}
        <section className="py-16 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Open stack, no lock-in</p>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Built on standards you already know.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {TECH_STACK.map((t) => (
                <div key={t.label} className="bg-white p-5 rounded-lg border border-charcoal-border">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gold-100 text-gold mb-3">
                    <t.icon className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-1">{t.label}</p>
                  <p className="text-sm text-charcoal leading-relaxed">{t.stack}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Simple pricing. No per-feature gates.</h2>
              <p className="text-charcoal-muted text-lg max-w-2xl mx-auto">
                VyXlo is available as a self-hosted deployment or managed cloud service. All plans include the full feature set — AI, workflows, audit log, collaboration, and multi-tenancy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRICING.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-lg p-6 border-2 flex flex-col ${
                    plan.highlight
                      ? 'border-gold bg-gold-50'
                      : 'border-charcoal-border bg-white'
                  }`}
                >
                  {plan.highlight && (
                    <span className="text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-1 self-start mb-3">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-charcoal mb-1">{plan.name}</h3>
                  <p className="text-sm text-charcoal-muted mb-4 leading-snug">{plan.target}</p>
                  <p className="text-2xl font-bold text-charcoal mt-auto mb-1">{plan.price}</p>
                  <p className="text-xs text-charcoal-muted mb-5">{plan.sub}</p>
                  {plan.price === 'Free' ? (
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-sm font-semibold py-2 px-4 rounded-md transition-colors bg-charcoal text-white hover:bg-charcoal-900"
                    >
                      View on GitHub
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className={`text-center text-sm font-semibold py-2 px-4 rounded-md transition-colors ${
                        plan.highlight
                          ? 'bg-gold text-charcoal-900 hover:bg-gold-dark'
                          : 'bg-charcoal text-white hover:bg-charcoal-900'
                      }`}
                    >
                      Talk to us
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/contact" className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors">
                Talk to us about pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section className="py-24 bg-charcoal-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to put your documents to work?</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              VyXlo is open source and self-hostable. Run the full stack on your own infrastructure in under 10 minutes with Docker Compose. Or let us host it for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
