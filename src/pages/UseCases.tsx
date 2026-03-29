import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, BarChart3, Users, Code2, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const CASES = [
  {
    id: 'legal-compliance',
    icon: Scale,
    title: 'Legal & Compliance Teams',
    description: 'Manage contracts, NDAs, and policies with full version history and immutable audit trails. Route documents through multi-step legal review workflows. Generate share links for external parties without giving them system access. Export audit logs for regulators in one click.',
    benefits: [
      'Full version history — any version restorable',
      'Multi-step legal review with sequential and parallel approvers',
      'Password-protected share links for external counsel',
      'Immutable audit log: SHA-256 checksums, CSV export on demand',
      'Document status lifecycle: DRAFT → IN_REVIEW → APPROVED → PUBLISHED',
    ],
  },
  {
    id: 'finance-operations',
    icon: BarChart3,
    title: 'Finance & Operations',
    description: 'Organize invoices, purchase orders, and financial reports with AI-powered classification. Approve documents with parallel sign-off from multiple stakeholders. Configure retention policies and let VyXlo purge automatically when the window closes.',
    benefits: [
      'AI classifies every upload as INVOICE, REPORT, CONTRACT, or 7 other categories',
      'Parallel approval workflows for multi-stakeholder sign-off',
      'Retention policies with automatic purge at window close',
      'Entity extraction: amounts, dates, counterparty names extracted automatically',
      'Search across all documents by amount, date range, or counterparty',
    ],
  },
  {
    id: 'hr-people',
    icon: Users,
    title: 'HR & People Teams',
    description: 'Manage employee documents with fine-grained permissions — visible only to the right people. Onboarding workflows that route documents for acknowledgment. Retention policies that comply with employment law.',
    benefits: [
      '8-level permissions: employee docs visible only to authorized people',
      'Onboarding workflows with sequential acknowledgment steps',
      'Department-level permissions for HR team access',
      'Configurable retention periods aligned to employment law',
      'Complete audit trail of who viewed each employee document',
    ],
  },
  {
    id: 'product-engineering',
    icon: Code2,
    title: 'Product & Engineering Teams',
    description: 'Store specs, RFCs, runbooks, and design docs alongside code. Search semantically — "our incident response procedure" returns the right doc even if it\'s titled "On-Call Handbook." Tag and filter by project.',
    benefits: [
      'Semantic search: find docs by meaning, not just keyword match',
      'Tag system with project-scoped namespaces and color coding',
      'REST API for automated doc ingestion from CI/CD pipelines',
      'Threaded comments and @mentions on technical documents',
      'Version history — compare any two versions of a spec',
    ],
  },
  {
    id: 'agencies',
    icon: Briefcase,
    title: 'Agencies & Consultancies',
    description: 'Manage client deliverables with per-client folder isolation. Share final versions via password-protected links with download tracking. No client ever sees another client\'s work.',
    benefits: [
      'Per-client folder isolation enforced at the database query level',
      'Password-protected share links with optional email allowlist',
      'Per-link download analytics (access count, last accessed)',
      'One-click link revocation when the engagement ends',
      'Multiple organizations with complete data separation',
    ],
  },
];

const UseCases = () => {
  return (
    <>
      <SEO
        title="Use Cases — VyXlo DMS"
        description="VyXlo DMS for Legal & Compliance, Finance & Operations, HR & People, Product & Engineering, and Agencies. Team-specific document intelligence."
        canonical="/use-cases"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Built for the teams that can't afford to lose control.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                VyXlo isn't a generic file storage tool. Each team type has specific needs — approval chains, retention rules, permission granularity, search patterns. Here's how VyXlo addresses each one.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASE CARDS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {CASES.map((uc, i) => (
                <div
                  key={uc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-8 rounded-xl border border-charcoal-border hover:border-gold/40 hover:shadow-md transition-all ${
                    i % 2 === 0 ? 'bg-white' : 'bg-charcoal-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-100 text-gold">
                        <uc.icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-charcoal">{uc.title}</h2>
                    </div>
                    <p className="text-charcoal-muted leading-relaxed">{uc.description}</p>
                    <Link
                      to={`/use-cases/${uc.id}`}
                      className="inline-flex items-center mt-5 text-gold font-semibold hover:text-gold-dark transition-colors text-sm"
                    >
                      Learn more <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-3">Key capabilities</p>
                    <ul className="space-y-2.5">
                      {uc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-charcoal leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="py-12 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-charcoal-muted text-sm mb-6">Jump to a team type</p>
            <div className="flex flex-wrap justify-center gap-3">
              {CASES.map((uc) => (
                <a
                  key={uc.id}
                  href={`#`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(uc.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal-border bg-white text-sm font-medium text-charcoal-muted hover:border-gold hover:text-gold transition-colors"
                >
                  <uc.icon className="h-3.5 w-3.5" />
                  {uc.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-charcoal-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Not sure if VyXlo fits your team?</h2>
            <p className="text-white/70 mb-8">Talk to us. We can walk through your specific document workflows and show you exactly how VyXlo handles them.</p>
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
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default UseCases;
