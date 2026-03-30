import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  ShieldCheck,
  DollarSign,
  Users,
  Code,
  Brain,
  Shield,
  FileText,
  ArrowRight,
  Check,
} from 'lucide-react';
import SEO from '../components/SEO';

const USE_CASES = [
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal Teams',
    tagline: 'Contracts that sign themselves off. Almost.',
    description:
      'Track contract versions, route approvals through the right partners, and maintain an immutable record for every amendment.',
    highlights: [
      'Version-controlled contracts',
      'Parallel approval chains',
      'Tamper-proof audit trail',
    ],
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance & Audit',
    tagline: 'Prove everything. Explain nothing twice.',
    description:
      'Maintain audit-ready documentation with SHA-256-verified records, CSV export, and configurable retention policies.',
    highlights: [
      'SHA-256 audit log',
      'CSV export for regulators',
      'Configurable retention',
    ],
  },
  {
    id: 'finance',
    icon: DollarSign,
    title: 'Finance & Accounting',
    tagline: 'Every invoice, accounted for.',
    description:
      'Auto-classify invoices and financial reports on upload. Route payment approvals without manual handoffs.',
    highlights: [
      'AI invoice classification',
      'Automated approval routing',
      'Full version history',
    ],
  },
  {
    id: 'hr',
    icon: Users,
    title: 'HR & People Ops',
    tagline: 'Employee records that stay current.',
    description:
      'Manage employment agreements, performance reviews, and onboarding packets with role-based access and lifecycle tracking.',
    highlights: [
      'Role-based document access',
      'Status lifecycle tracking',
      'Secure employee file sharing',
    ],
  },
  {
    id: 'engineering',
    icon: Code,
    title: 'IT & Engineering',
    tagline: 'Technical docs your team will actually use.',
    description:
      'Keep runbooks, architecture docs, and incident reports discoverable and current with semantic search and automatic versioning.',
    highlights: [
      'Semantic search',
      'Auto-versioning on re-upload',
      'Department-scoped access control',
    ],
  },
];

const CAPABILITIES = [
  {
    icon: Brain,
    title: 'AI Processing',
    description: 'Every document is classified and summarized on upload',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    description: 'Eight permission levels for precise access control',
  },
  {
    icon: FileText,
    title: 'Audit Trail',
    description: 'Every action logged with before/after state',
  },
  {
    icon: Users,
    title: 'Real-Time Collaboration',
    description: 'Live presence, comments, and @mentions',
  },
];

const UseCases = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Use Cases — VyXlo DMS"
        description="See how legal teams, compliance officers, finance, HR, and engineering teams use VyXlo DMS to manage documents with AI and precision access control."
        canonical="/use-cases"
      />

      {/* HERO */}
      <section className="bg-charcoal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/20">
              Use Cases
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Teams That Rely on VyXlo
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {"Whether you handle contracts, run audits, or manage compliance \u2014 VyXlo fits the way your team actually works."}
            </p>
          </div>
        </div>
      </section>

      {/* USE CASE CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              WHO USES VYXLO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Built for Teams With High Document Stakes
            </h2>
          </div>

          <div className="space-y-6">
            {USE_CASES.map((uc) => (
              <div
                key={uc.id}
                className="rounded-2xl border border-charcoal-border bg-white hover:border-gold/40 hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left: Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold-100 text-gold flex-shrink-0">
                        <uc.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">{uc.title}</h3>
                    </div>
                    <p className="text-gold font-medium text-sm mb-3">{uc.tagline}</p>
                    <p className="text-charcoal-muted leading-relaxed mb-6">
                      {uc.description}
                    </p>
                    <Link
                      to={`/use-cases/${uc.id}`}
                      className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Right: Highlights */}
                  <div className="bg-charcoal-50 p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-5">
                      Key Highlights
                    </p>
                    <ul className="space-y-3">
                      {uc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 flex-shrink-0">
                            <Check className="h-3 w-3 text-gold" />
                          </span>
                          <span className="text-sm font-medium text-charcoal">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARED CAPABILITIES */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              ACROSS ALL USE CASES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              The Same Powerful Platform, Configured for Your Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-xl border border-charcoal-border p-6 hover:border-gold/40 hover:shadow-md transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold-100 text-gold mb-4">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-charcoal mb-2">{cap.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {"Not Sure Which Use Case Fits?"}
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            {"Talk to our team \u2014 we\u2019ll help you map VyXlo to your workflow in 30 minutes."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
            >
              Talk to Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
