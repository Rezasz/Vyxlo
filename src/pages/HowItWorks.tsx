import React from 'react';
import { Link } from 'react-router-dom';
import {
  Upload,
  Brain,
  Users,
  Archive,
  Search,
  Server,
  Cloud,
  Building2,
  ArrowRight,
  Check,
} from 'lucide-react';
import SEO from '../components/SEO';

const PHASES = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload & Organize',
    description:
      'Drop files in. Assign them to folders. Set initial status to DRAFT.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Automatic AI Processing',
    description:
      'VyXlo classifies, extracts entities, summarizes, and embeds the document. Runs in the background. Done in under 5 minutes.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Collaborate & Review',
    description:
      'Your team comments, annotates, and @mentions. Approval workflows route documents through the right hands.',
  },
  {
    number: '04',
    icon: Archive,
    title: 'Publish & Archive',
    description:
      'Approved documents move to PUBLISHED. Older versions are archived and fully retrievable.',
  },
];

const STATUS_STAGES = [
  {
    label: 'DRAFT',
    description: 'Initial upload state. Visible only to the uploader and admins.',
  },
  {
    label: 'IN_REVIEW',
    description: 'Shared with reviewers. Comments and annotations open.',
  },
  {
    label: 'PENDING_APPROVAL',
    description: 'Awaiting sign-off from the approval workflow.',
  },
  {
    label: 'APPROVED',
    description: 'Signed off. Ready to publish.',
  },
  {
    label: 'PUBLISHED',
    description: 'Live and searchable by the full team.',
  },
  {
    label: 'ARCHIVED',
    description: 'Retained for compliance. Read-only.',
  },
];

const SEARCH_CARDS = [
  {
    icon: Search,
    title: 'Full-Text Search',
    description:
      'PostgreSQL tsvector. Matches exact words and phrases. Filtered by folder, type, status, owner, date range, tags.',
  },
  {
    icon: Brain,
    title: 'Semantic Search',
    description:
      'pgvector cosine similarity. Finds related documents even without exact keyword matches. Powered by 1536-dimensional embeddings.',
  },
];

const PERMISSION_LEVELS = [
  { value: 'NONE', description: 'No access' },
  { value: 'READ', description: 'View document content' },
  { value: 'DOWNLOAD', description: 'Download the file' },
  { value: 'COMMENT', description: 'Leave comments' },
  { value: 'CONTRIBUTOR', description: 'Upload new versions' },
  { value: 'WRITE', description: 'Edit metadata and move' },
  { value: 'EDITOR', description: 'Full edit access' },
  { value: 'ADMIN', description: 'Full control including permissions' },
];

const DEPLOYMENT_OPTIONS = [
  {
    icon: Cloud,
    title: 'Cloud Hosted',
    description: 'Managed by the Kanz.ai team. Zero ops, automatic updates.',
  },
  {
    icon: Server,
    title: 'Self-Hosted',
    description: 'Your own infrastructure. Docker Compose. Full data ownership.',
  },
  {
    icon: Building2,
    title: 'Enterprise',
    description:
      'Custom SLA, dedicated support, compliance-ready configuration.',
  },
];

const HowItWorks = () => {
  return (
    <div className="pt-20">
      <SEO
        title="How It Works — VyXlo DMS"
        description="From upload to published in under 5 minutes — learn how VyXlo automates document classification, approval workflows, and team collaboration."
        canonical="/how-it-works"
      />

      {/* Section 1 — Hero */}
      <section className="bg-charcoal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30 bg-gold/10 rounded-full px-4 py-1.5 mb-6">
            How It Works
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            From Upload to Insight in Under 5 Minutes
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {"VyXlo is built to reduce friction at every step — from the moment a file lands to the moment your team finds it."}
          </p>
        </div>
      </section>

      {/* Section 2 — Overview Steps */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              THE WORKFLOW
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Four Phases of Document Intelligence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.number}
                  className="bg-charcoal-50 border border-charcoal-border rounded-xl p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-black text-charcoal-border select-none leading-none">
                        {phase.number}
                      </span>
                    </div>
                    <div>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-charcoal-muted leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 — Document Status Flow */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              STATUS LIFECYCLE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Every Document Has a Clear State
            </h2>
            <p className="text-charcoal-muted max-w-xl mx-auto leading-relaxed">
              VyXlo tracks exactly where each document is in its lifecycle. Every transition is logged.
            </p>
          </div>

          {/* Flow — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {STATUS_STAGES.map((stage, i) => (
              <React.Fragment key={stage.label}>
                <div className="flex-1 bg-white border border-charcoal-border rounded-xl p-5 text-center">
                  <span className="inline-block text-xs font-bold text-gold bg-gold-50 border border-gold/20 rounded-full px-3 py-1 mb-3">
                    {stage.label}
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {stage.description}
                  </p>
                </div>
                {i < STATUS_STAGES.length - 1 && (
                  <div aria-hidden="true" className="flex items-center justify-center px-1 py-2 md:py-0 text-charcoal-border">
                    <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Search & Discovery */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              FIND ANYTHING
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Two Ways to Search Every Document
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SEARCH_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="border border-charcoal-border rounded-xl p-8"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-100 text-gold mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {card.title}
                  </h3>
                  <p className="text-charcoal-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — Permissions & Access */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              ACCESS CONTROL
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Eight Levels. Zero Guesswork.
            </h2>
            <p className="text-charcoal-muted max-w-xl mx-auto leading-relaxed">
              {"Permissions are additive — effective access is the maximum of all applicable grants."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERMISSION_LEVELS.map((level) => (
              <div
                key={level.value}
                className="bg-white border border-charcoal-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 text-gold flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-bold text-gold">
                    {level.value}
                  </span>
                </div>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Deployment */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              DEPLOYMENT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              One Command. Any Environment.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              VyXlo ships as a production-ready Docker Compose stack. Seven services, fully configured.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPLOYMENT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 text-white"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 text-gold mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="bg-charcoal-900 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See It in Action?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
            >
              Request Early Access <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
