import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Scale, ShieldCheck, DollarSign, Users, Code,
  Check, ChevronLeft, ArrowRight, AlertCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';

interface UseCaseDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  challenges: string[];
  capabilities: string[];
  outcome: string;
}

const USE_CASE_DETAILS: Record<string, UseCaseDetail> = {
  legal: {
    id: 'legal',
    title: 'Legal Teams',
    tagline: 'Contracts that sign themselves off. Almost.',
    description: 'VyXlo gives legal teams full control over the contract lifecycle — from first draft through final execution — with version-controlled documents, parallel approval chains, and a tamper-proof audit trail.',
    icon: Scale,
    challenges: [
      'Contracts emailed back and forth with no clear version of record',
      'Approval chains managed in spreadsheets or Slack threads',
      'No audit trail when regulators ask what changed and when',
    ],
    capabilities: [
      'Version history on every contract — any version can be restored in one click',
      'Parallel and sequential approval chains with per-step deadlines',
      'Immutable audit log with SHA-256 checksums for every action',
      'Document locking prevents conflicting edits during review',
      'Secure share links with expiry for external counsel',
    ],
    outcome: 'Legal teams close deals faster and prove compliance without hunting for the right version.',
  },
  compliance: {
    id: 'compliance',
    title: 'Compliance & Audit',
    tagline: 'Prove everything. Explain nothing twice.',
    description: 'Compliance teams use VyXlo to maintain audit-ready documentation at all times — with SHA-256-verified records, CSV export, and configurable retention policies that meet regulatory requirements.',
    icon: ShieldCheck,
    challenges: [
      'Audit requests require hours of manual document collection',
      'No centralized record of who approved what and when',
      'Retention policies enforced manually — files deleted or kept inconsistently',
    ],
    capabilities: [
      'Every action logged with before/after state and SHA-256 checksum',
      'CSV export for regulatory submission, available on demand',
      'Configurable retention periods with automatic purge',
      'Two-factor authentication and active session management',
      'AI classification makes document discovery instant during audits',
    ],
    outcome: 'Compliance teams walk into audits prepared, not scrambling.',
  },
  finance: {
    id: 'finance',
    title: 'Finance & Accounting',
    tagline: 'Every invoice, accounted for.',
    description: 'Finance teams use VyXlo to eliminate manual document routing — invoices are classified on upload, approval workflows run automatically, and every financial document is searchable and version-tracked.',
    icon: DollarSign,
    challenges: [
      'Invoices arrive by email and get lost before approval',
      'No system of record for which invoices have been approved vs. pending',
      'Manual routing causes payment delays and missed discount windows',
    ],
    capabilities: [
      'AI auto-classifies invoices and financial reports on upload',
      'Automated approval routing with configurable step order',
      'Full version history on every financial document',
      'Search by type, status, date range, or amount-related entities',
      'Notification on every approval action — no chasing approvers',
    ],
    outcome: 'Finance teams process invoices faster and maintain a clean paper trail without manual overhead.',
  },
  hr: {
    id: 'hr',
    title: 'HR & People Ops',
    tagline: 'Employee records that stay current.',
    description: 'HR teams use VyXlo to manage the full employee document lifecycle — from offer letters to exit paperwork — with role-based access ensuring only the right people see sensitive records.',
    icon: Users,
    challenges: [
      'Employee files scattered across shared drives with no access control',
      'No audit trail for who accessed sensitive HR documents',
      'Onboarding packets version-managed in email attachments',
    ],
    capabilities: [
      'Role-based access at document, folder, and department level',
      'Status lifecycle tracking from DRAFT through ARCHIVED',
      'Immutable audit log for every access and change',
      'Secure share links for onboarding packet delivery',
      'AI classification automatically organizes uploaded HR documents',
    ],
    outcome: 'HR teams run onboarding and offboarding with confidence, knowing every document is in its right place.',
  },
  engineering: {
    id: 'engineering',
    title: 'IT & Engineering',
    tagline: 'Technical docs your team will actually use.',
    description: 'Engineering teams use VyXlo to keep runbooks, architecture documents, and incident reports discoverable and up to date — with semantic search and automatic versioning on every re-upload.',
    icon: Code,
    challenges: [
      'Runbooks buried in wikis that nobody updates',
      'Architecture docs overwritten with no version history',
      'Incident reports scattered across ticketing systems and email',
    ],
    capabilities: [
      'Semantic search finds relevant docs even without exact keyword matches',
      'Auto-versioning on every re-upload — full diff history preserved',
      'Department-scoped access control for sensitive architecture docs',
      'AI classification and entity extraction for technical document metadata',
      'Real-time collaboration with @mentions for incident post-mortems',
    ],
    outcome: 'Engineering teams spend time building, not searching for the doc they need.',
  },
};

const UseCaseDetails: React.FC = () => {
  const { useCaseId } = useParams<{ useCaseId: string }>();
  const detail = useCaseId ? USE_CASE_DETAILS[useCaseId] : undefined;

  if (!detail) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-charcoal mb-4">Use case not found</h1>
          <p className="text-charcoal-muted mb-8">
            {"The use case you're looking for doesn't exist or has been moved."}
          </p>
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Use Cases
          </Link>
        </div>
      </div>
    );
  }

  const Icon = detail.icon;

  return (
    <div className="pt-20">
      <SEO
        title={`${detail.title} — VyXlo DMS`}
        description={detail.description}
        canonical={`/use-cases/${detail.id}`}
      />

      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-1.5 text-gold hover:text-gold-dark font-medium transition-colors mb-10"
          >
            <ChevronLeft className="h-4 w-4" />
            All Use Cases
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-14 h-14 bg-gold-100 text-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{detail.title}</h1>
              <p className="mt-2 text-xl text-gold font-medium">{detail.tagline}</p>
            </div>
          </div>
          <p className="mt-8 text-lg text-white/80 max-w-3xl leading-relaxed">
            {detail.description}
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">The Problem</h2>
          <p className="text-charcoal-muted mb-10">
            {"What teams deal with before VyXlo."}
          </p>
          <ul className="space-y-4">
            {detail.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex items-start gap-3 bg-charcoal-50 border border-charcoal-border rounded-xl px-6 py-5"
              >
                <AlertCircle className="h-4 w-4 text-charcoal-muted flex-shrink-0 mt-0.5" />
                <span className="text-charcoal leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">How VyXlo Helps</h2>
          <p className="text-charcoal-muted mb-10">
            {"Purpose-built features that solve each pain point."}
          </p>
          <ul className="space-y-4">
            {detail.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 bg-white border border-charcoal-border rounded-xl px-6 py-5"
              >
                <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-charcoal leading-relaxed">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcome + CTA */}
      <section className="bg-charcoal-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
            {detail.outcome}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gold text-charcoal-900 font-semibold hover:bg-gold-dark transition-colors"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCaseDetails;
