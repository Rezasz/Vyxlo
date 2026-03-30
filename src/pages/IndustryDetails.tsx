import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Scale, DollarSign, Heart, Building2, GraduationCap, Code,
  Check, ChevronLeft, ArrowRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';

interface IndustryDetail {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  painPoints: string[];
  capabilities: string[];
  outcome: string;
}

const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  legal: {
    id: 'legal',
    title: 'Legal',
    description: 'Law firms and in-house legal teams use VyXlo to manage the full contract and matter lifecycle — with version control, parallel approval chains, and immutable records for every document.',
    icon: Scale,
    painPoints: [
      'Contract versions emailed back and forth with no clear record',
      'Approval chains managed outside the document system',
      'No audit trail when regulators or courts require proof',
    ],
    capabilities: [
      'Version history with one-click restore on every contract',
      'Parallel and sequential approval chains with deadlines',
      'Immutable audit log with SHA-256 tamper-evident checksums',
      'Document locking during active review',
      'Secure external share links with expiry and password protection',
    ],
    outcome: 'Legal teams close matters faster with a complete, provable record.',
  },
  'financial-services': {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Banks, asset managers, and financial institutions use VyXlo to meet regulatory document requirements — with AI classification, automated workflows, and audit-ready export.',
    icon: DollarSign,
    painPoints: [
      'Regulatory filings managed across disconnected systems',
      'Invoices and financial reports routed manually',
      'Audit preparation requires weeks of document retrieval',
    ],
    capabilities: [
      'AI auto-classifies financial documents on upload',
      'Automated approval workflows with configurable step order',
      'CSV export for regulatory submission',
      'Tamper-evident SHA-256 audit log',
      'Configurable retention and automatic purge',
    ],
    outcome: 'Financial teams meet compliance requirements without a scramble.',
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Healthcare organizations use VyXlo to manage clinical documentation and compliance records with role-based access controls that keep sensitive data in the right hands.',
    icon: Heart,
    painPoints: [
      'Patient records and clinical protocols stored without access controls',
      'No audit trail for who accessed sensitive documents',
      'Compliance documentation scattered across systems',
    ],
    capabilities: [
      'Eight-level permission system for precise access control',
      'Immutable audit log for every document access and change',
      'Department-level permissions for clinical teams',
      'Secure share links with email allowlists for external providers',
      'Status lifecycle from DRAFT to ARCHIVED for every protocol',
    ],
    outcome: 'Healthcare organizations maintain audit-ready compliance documentation with zero manual overhead.',
  },
  government: {
    id: 'government',
    title: 'Government',
    description: 'Public sector agencies use VyXlo for multi-department document management — with immutable audit trails, compliance export, and role-based access across teams.',
    icon: Building2,
    painPoints: [
      'Documents shared across departments without access control',
      'No single system of record for compliance documentation',
      'Manual export processes for FOIA and audit requests',
    ],
    capabilities: [
      'Department-level access control with inherited permissions',
      'Immutable audit log with before/after state for every action',
      'CSV export for FOIA and compliance requests',
      'Configurable retention policies with automatic purge',
      'Two-factor authentication and remote session revoke',
    ],
    outcome: 'Government agencies respond to audit and FOIA requests in hours, not days.',
  },
  education: {
    id: 'education',
    title: 'Education',
    description: 'Universities and educational institutions use VyXlo to manage academic records, research documentation, and institutional policies with version control and controlled access.',
    icon: GraduationCap,
    painPoints: [
      'Research documents managed in shared drives without versioning',
      'Academic records stored in systems without audit trails',
      'Policy documents published without approval workflows',
    ],
    capabilities: [
      'Version history with full restore on every document',
      'Approval workflows for policy and publication sign-off',
      'Department-scoped access for research groups',
      'Full-text and semantic search across all institutional documents',
      'AI classification for automatic document organization',
    ],
    outcome: 'Educational institutions maintain organized, version-controlled records for every stakeholder.',
  },
  technology: {
    id: 'technology',
    title: 'Technology',
    description: 'Technology companies use VyXlo to keep technical documentation discoverable, current, and collaborative — with semantic search and real-time collaboration built in.',
    icon: Code,
    painPoints: [
      'Runbooks buried in wikis that nobody maintains',
      'Architecture docs overwritten without version history',
      'Incident post-mortems scattered across tools',
    ],
    capabilities: [
      'Semantic search finds related docs without exact keyword matches',
      'Auto-versioning on every document re-upload',
      'Real-time collaboration with @mentions for incident response',
      'Department-scoped access for sensitive architecture docs',
      'AI entity extraction surfaces people, dates, and systems in docs',
    ],
    outcome: 'Engineering teams find the right doc in seconds and keep it up to date.',
  },
};

const IndustryDetails = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const detail = industryId ? INDUSTRY_DETAILS[industryId] : undefined;

  if (!detail) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-charcoal mb-4">Industry not found</h1>
          <p className="text-charcoal-muted mb-8">
            {"We couldn't find that industry vertical."}
          </p>
          <Link
            to="/verticals"
            className="inline-flex items-center text-gold hover:text-gold-dark font-medium"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Industry Verticals
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
        canonical={`/verticals/${detail.id}`}
      />

      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/verticals"
            className="inline-flex items-center text-charcoal-border hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Industry Verticals
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gold/20 rounded-xl">
              <Icon className="h-10 w-10 text-gold" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{detail.title}</h1>
          <p className="text-xl text-charcoal-border max-w-3xl leading-relaxed">
            {detail.description}
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-gold uppercase mb-3">THE CHALLENGE</p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            What Gets in the Way
          </h2>
          <div className="space-y-6">
            {detail.painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 p-6 rounded-xl border border-charcoal-border bg-charcoal-50"
              >
                <div className="p-2 bg-white rounded-lg border border-charcoal-border flex-shrink-0">
                  <Icon className="h-5 w-5 text-charcoal-muted" />
                </div>
                <p className="text-charcoal leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-gold uppercase mb-3">HOW VYXLO HELPS</p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            Built for {detail.title} Teams
          </h2>
          <div className="space-y-4">
            {detail.capabilities.map((capability) => (
              <div key={capability} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 p-1 rounded-full bg-gold/10">
                  <Check className="h-4 w-4 text-gold" />
                </div>
                <p className="text-charcoal leading-relaxed">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome + CTA */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white mb-10 leading-snug">
            {detail.outcome}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gold text-charcoal-900 font-semibold hover:bg-gold-dark transition-colors"
            >
              Request Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetails;
