import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Search, Brain, Shield, GitBranch, Share2,
  Users, Bell, ShieldCheck, Settings, Check, ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';

type FeatureGroup = {
  id: string;
  label: string;
  icon: React.ElementType;
  items: string[];
  deepDive?: string;
};

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: 'document-management',
    label: 'Document Management',
    icon: FileText,
    items: [
      'Unlimited file types (PDF, DOCX, XLSX, PPTX, images, and more)',
      'Configurable max file size per organization',
      'Status lifecycle: DRAFT \u2192 IN_REVIEW \u2192 PENDING_APPROVAL \u2192 APPROVED \u2192 PUBLISHED \u2192 ARCHIVED',
      'Full version history \u2014 every upload creates a version; any version can be restored',
      'Document duplication (metadata + file copy)',
      'Move documents between folders',
      'Soft delete with admin recovery',
      'View count and download count tracking',
      'Document locking (auto-expires after 1 hour)',
    ],
  },
  {
    id: 'search',
    label: 'Search & Organization',
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
  {
    id: 'ai',
    label: 'AI Processing',
    icon: Brain,
    deepDive: '/features/ai-automation',
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
  {
    id: 'access-control',
    label: 'Access Control',
    icon: Shield,
    items: [
      '8-level permission system: NONE \u00b7 READ \u00b7 DOWNLOAD \u00b7 COMMENT \u00b7 CONTRIBUTOR \u00b7 WRITE \u00b7 EDITOR \u00b7 ADMIN',
      'Target individual users or entire departments',
      'Permission expiration dates',
      'Effective permission = max of all applicable grants',
      'Document owner always has ADMIN access',
      'Public documents visible to all authenticated users in the org',
    ],
  },
  {
    id: 'workflows',
    label: 'Workflow Engine',
    icon: GitBranch,
    items: [
      'Multi-step approval chains with configurable step order',
      'Sequential and parallel step execution',
      'Per-step deadline tracking',
      'Workflow hold, resume, and escalation',
      'Full workflow state history',
    ],
  },
  {
    id: 'sharing',
    label: 'Secure Sharing',
    icon: Share2,
    items: [
      'Secure share links (cryptographically random tokens, \u226532 bytes entropy)',
      'Optional expiry date, access count limit, password protection, email allowlist',
      'Per-link access analytics (access count, last accessed)',
      'One-click revoke',
    ],
  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    icon: Users,
    deepDive: '/features/collaboration',
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
  {
    id: 'notifications',
    label: 'Notifications',
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
  {
    id: 'audit',
    label: 'Audit & Compliance',
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
  {
    id: 'admin',
    label: 'Administration',
    icon: Settings,
    items: [
      'Organization settings (name, logo, timezone, storage quota, feature flags)',
      'User invitation and role management',
      'Department management',
      'Storage usage dashboard',
      'Platform-level admin for managing organizations (SUPER_ADMIN)',
    ],
  },
];

const Features = () => {
  const [activeId, setActiveId] = useState<string>('document-management');
  const current = FEATURE_GROUPS.find((g) => g.id === activeId) ?? FEATURE_GROUPS[0];
  const CurrentIcon = current.icon;

  return (
    <>
      <SEO
        title="Features — VyXlo DMS"
        description="60+ production-ready features across 10 categories. AI processing, multi-step workflows, immutable audit logs, fine-grained permissions, real-time collaboration — all included in every plan."
        canonical="/features"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                Platform Capabilities
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Every Capability. One Platform.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                VyXlo DMS ships with 60+ features across 10 categories &mdash; all production-ready and included in every plan.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {FEATURE_GROUPS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={g.id === activeId}
                  onClick={() => setActiveId(g.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/70 hover:border-gold hover:text-gold transition-colors"
                >
                  {g.label}
                  <span className="text-white/40">{g.items.length}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE BROWSER */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">

              {/* Left sidebar — tab navigation */}
              <aside className="lg:w-72 flex-shrink-0 lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-3 px-3">
                  Categories
                </p>
                <nav className="space-y-0.5">
                  {FEATURE_GROUPS.map((g) => {
                    const Icon = g.icon;
                    const isActive = g.id === activeId;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        aria-pressed={g.id === activeId}
                        onClick={() => setActiveId(g.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                          isActive
                            ? 'bg-gold text-charcoal-900'
                            : 'text-charcoal hover:bg-charcoal-50'
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="flex-1">{g.label}</span>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-md font-medium ${
                            isActive
                              ? 'bg-charcoal-900/20 text-charcoal-900'
                              : 'bg-charcoal-50 text-charcoal-muted'
                          }`}
                        >
                          {g.items.length}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Right panel — feature list */}
              <div className="flex-1 min-w-0">
                {/* Panel header */}
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-charcoal-border">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-charcoal">{current.label}</h2>
                      <p className="text-sm text-charcoal-muted mt-0.5">
                        {current.items.length} features included
                      </p>
                    </div>
                  </div>
                  {current.deepDive && (
                    <Link
                      to={current.deepDive}
                      className="inline-flex items-center text-gold font-semibold text-sm hover:text-gold-dark transition-colors flex-shrink-0"
                    >
                      Deep dive <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>

                {/* Feature checklist */}
                <ul className="space-y-3">
                  {current.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-lg border border-charcoal-border bg-white hover:border-gold/40 hover:bg-gold-50 transition-colors"
                    >
                      <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* AT A GLANCE — capability grid */}
        <section className="bg-charcoal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal">All capability areas</h2>
              <p className="text-charcoal-muted mt-3">
                Browse every category or click to jump directly to it.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {FEATURE_GROUPS.map((g) => {
                const Icon = g.icon;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => {
                      setActiveId(g.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white border border-charcoal-border rounded-xl p-5 text-left hover:border-gold hover:shadow-md transition-all group"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold mb-4 group-hover:bg-gold group-hover:text-charcoal-900 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-charcoal leading-snug">{g.label}</p>
                    <p className="text-xs text-charcoal-muted mt-1">{g.items.length} features</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal-900 text-white py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See VyXlo in action</h2>
            <p className="text-white/70 text-lg mb-10">
              Request early access or get in touch to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Request Early Access <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Features;
