import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FileText, Search, Brain, Shield, GitBranch, Share2,
  Users, Bell, ShieldCheck, Settings, Check, ArrowRight, ChevronLeft,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';

interface FeatureDetail {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  deepDiveLink?: string;
  deepDiveLabel?: string;
}

const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  'document-management': {
    title: 'Document Management',
    subtitle: 'Every file type. Every version. Every status.',
    description: 'VyXlo handles the full lifecycle of documents from first upload through archival.',
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
  'search': {
    title: 'Search & Organization',
    subtitle: 'Find anything. Organize everything.',
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
    deepDiveLabel: 'AI Automation Deep Dive',
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
      '8-level permission system: NONE \u00b7 READ \u00b7 DOWNLOAD \u00b7 COMMENT \u00b7 CONTRIBUTOR \u00b7 WRITE \u00b7 EDITOR \u00b7 ADMIN',
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
      'Secure share links (cryptographically random tokens, \u226532 bytes entropy)',
      'Optional expiry date, access count limit, password protection, email allowlist',
      'Per-link access analytics (access count, last accessed)',
      'One-click revoke',
    ],
  },
  'collaboration': {
    title: 'Real-Time Collaboration',
    subtitle: 'See who is there. Say what you mean.',
    description: 'Live presence, threaded comments, and real-time WebSocket delivery.',
    icon: Users,
    deepDiveLink: '/features/collaboration',
    deepDiveLabel: 'Collaboration Deep Dive',
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

const FeatureDetails: React.FC = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const feature = featureId ? FEATURE_DETAILS[featureId] : undefined;

  if (!feature) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal-900 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-white mb-4">Feature not found</h1>
          <p className="text-white/60 mb-8">The feature you are looking for does not exist.</p>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to All Features
          </Link>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="pt-20">
      <SEO
        title={`${feature.title} \u2014 VyXlo DMS`}
        description={feature.description}
        canonical={`/features/${featureId}`}
      />

      {/* Hero */}
      <div className="bg-charcoal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10"
          >
            <ChevronLeft className="h-4 w-4" />
            All Features
          </Link>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-100 text-gold mb-6">
            <Icon className="h-7 w-7" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{feature.title}</h1>
          <p className="text-xl text-white/70">{feature.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-charcoal-muted mb-10">{feature.description}</p>

          <ul className="space-y-4 mb-12">
            {feature.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-charcoal">{item}</span>
              </li>
            ))}
          </ul>

          {feature.deepDiveLink && feature.deepDiveLabel && (
            <div className="rounded-xl border border-charcoal-border bg-charcoal-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-1">
                  Deep Dive
                </p>
                <p className="text-charcoal font-medium">{feature.deepDiveLabel}</p>
              </div>
              <Link
                to={feature.deepDiveLink}
                className="inline-flex items-center gap-2 bg-gold text-charcoal-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-dark transition-colors flex-shrink-0"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8">
            See {feature.title} in action with a live demo or talk to the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gold text-charcoal-900 font-semibold hover:bg-gold-dark transition-colors"
            >
              Request Access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
