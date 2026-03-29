import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, FolderTree, Brain, Search, GitBranch,
  ShieldCheck, Users, Share2, Bell, Settings, FileText,
} from 'lucide-react';
import SEO from '../components/SEO';

type FeatureGroup = {
  id: string;
  icon: React.ElementType;
  label: string;
  items: string[];
};

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: 'document-management',
    icon: FileText,
    label: 'Document Management',
    items: [
      'Unlimited file types — PDF, DOCX, XLSX, PPTX, images, and more',
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
  {
    id: 'search',
    icon: Search,
    label: 'Organization & Search',
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
  {
    id: 'ai',
    icon: Brain,
    label: 'AI Processing',
    items: [
      'Automatic classification into 10 categories: INVOICE, CONTRACT, REPORT, POLICY, MEMO, LETTER, FORM, PRESENTATION, MANUAL, OTHER',
      'Keyword and entity extraction — people, organizations, dates, monetary amounts',
      'AI-generated document summaries',
      'Semantic embedding generation for similarity search',
      'Content moderation flag',
      'Re-process any document on demand',
      'Works with OpenAI, Azure OpenAI, Anthropic Claude, Gemini, or Ollama',
    ],
  },
  {
    id: 'access-control',
    icon: ShieldCheck,
    label: 'Access Control',
    items: [
      '8-level permission system: NONE · READ · DOWNLOAD · COMMENT · CONTRIBUTOR · WRITE · EDITOR · ADMIN',
      'Apply to individual users or entire departments',
      'Permission expiration dates',
      'Effective permission = maximum across all applicable grants',
      'Document owner always has ADMIN access regardless of explicit records',
      'Public documents visible to all authenticated users in the organization',
    ],
  },
  {
    id: 'workflows',
    icon: GitBranch,
    label: 'Workflow Engine',
    items: [
      'Multi-step approval chains with configurable step order',
      'Sequential and parallel step execution',
      'Per-step deadline tracking',
      'Workflow hold, resume, and escalation for overdue steps',
      'Full workflow state history',
    ],
  },
  {
    id: 'sharing',
    icon: Share2,
    label: 'Sharing',
    items: [
      'Secure share links with cryptographically random tokens (≥32 bytes entropy)',
      'Optional expiry date, access count limit, password protection, email allowlist',
      'Per-link access analytics (access count, last accessed)',
      'One-click revoke',
    ],
  },
  {
    id: 'collaboration',
    icon: Users,
    label: 'Collaboration',
    items: [
      'Live presence indicators — who is viewing this document right now',
      'Threaded comments with unlimited nesting',
      '@mentions with instant notifications',
      'Comment editing within 15 minutes of posting',
      'Comment resolution by document owner or ADMIN',
      'Emoji reactions',
      'Inline annotation support (page + position coordinates)',
      'WebSocket with automatic reconnection and exponential backoff',
    ],
  },
  {
    id: 'notifications',
    icon: Bell,
    label: 'Notifications',
    items: [
      'In-app notifications with real-time WebSocket delivery',
      'Email notifications (async, within 2 minutes)',
      'Daily digest email for unread notifications',
      'Per-channel preferences (in-app, email, digest) per notification type',
      '8 notification event types',
      'Notification read/unread state management',
    ],
  },
  {
    id: 'audit',
    icon: FolderTree,
    label: 'Audit & Compliance',
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
  {
    id: 'admin',
    icon: Settings,
    label: 'Administration',
    items: [
      'Organization settings: name, logo, timezone, storage quota, feature flags',
      'User invitation and role management',
      'Department management',
      'Storage usage dashboard',
      'Platform-level admin for managing organizations (SUPER_ADMIN)',
    ],
  },
];

const Features = () => {
  const [activeGroup, setActiveGroup] = useState<string>('document-management');
  const current = FEATURE_GROUPS.find((g) => g.id === activeGroup) ?? FEATURE_GROUPS[0];

  return (
    <>
      <SEO
        title="Features — VyXlo DMS"
        description="Every feature a document management platform needs. AI processing, multi-step workflows, immutable audit logs, fine-grained permissions, real-time collaboration, and more."
        canonical="/features"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Every feature a document management platform needs. Nothing it doesn't.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                VyXlo is purpose-built for organizations that need structure, control, and intelligence — not another shared drive.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURE BROWSER */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Sidebar */}
              <div className="lg:w-64 flex-shrink-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-3 px-3">Categories</p>
                <nav className="space-y-1">
                  {FEATURE_GROUPS.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setActiveGroup(g.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-left ${
                        activeGroup === g.id
                          ? 'bg-gold-50 text-gold border border-gold/30'
                          : 'text-charcoal-muted hover:bg-gray-50 hover:text-charcoal'
                      }`}
                    >
                      <g.icon className="h-4 w-4 flex-shrink-0" />
                      {g.label}
                      <span className="ml-auto text-xs text-charcoal-muted">{g.items.length}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold">
                    <current.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal">{current.label}</h2>
                    <p className="text-sm text-charcoal-muted">{current.items.length} features</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {current.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-charcoal-border bg-white hover:border-gold/40 transition-colors">
                      <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="py-16 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal text-center mb-10">All capability areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {FEATURE_GROUPS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setActiveGroup(g.id); window.scrollTo({ top: 320, behavior: 'smooth' }); }}
                  className="bg-white border border-charcoal-border rounded-lg p-4 text-left hover:border-gold hover:shadow-sm transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gold-100 text-gold mb-3 group-hover:bg-gold group-hover:text-charcoal-900 transition-colors">
                    <g.icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-charcoal">{g.label}</p>
                  <p className="text-xs text-charcoal-muted mt-1">{g.items.length} features</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* DEEP DIVES */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal text-center mb-2">Deep dives</h2>
            <p className="text-charcoal-muted text-center mb-8">Detailed breakdowns of key capability areas</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <Link
                to="/features/ai-automation"
                className="flex items-start gap-4 p-6 border border-charcoal-border rounded-lg hover:border-gold hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-100 text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal-900 transition-colors">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal group-hover:text-gold transition-colors">AI Automation</h3>
                  <p className="text-sm text-charcoal-muted mt-1 leading-relaxed">Classification, extraction, summarization, semantic search, and multi-provider support.</p>
                  <span className="inline-flex items-center mt-3 text-gold text-sm font-medium">
                    Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
              <Link
                to="/features/collaboration"
                className="flex items-start gap-4 p-6 border border-charcoal-border rounded-lg hover:border-gold hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-100 text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal-900 transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal group-hover:text-gold transition-colors">Collaboration</h3>
                  <p className="text-sm text-charcoal-muted mt-1 leading-relaxed">Live presence, threaded comments, @mentions, annotations, and real-time WebSocket notifications.</p>
                  <span className="inline-flex items-center mt-3 text-gold text-sm font-medium">
                    Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-charcoal-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">See VyXlo in action.</h2>
            <p className="text-white/70 mb-8">Request early access or spin up the self-hosted version in under 10 minutes.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Request Early Access <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Features;
