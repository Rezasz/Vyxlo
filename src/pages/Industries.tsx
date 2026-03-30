import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale, DollarSign, Heart, Building2, GraduationCap, Code,
  ArrowRight, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import type { LucideIcon } from 'lucide-react';

interface Industry {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
}

const INDUSTRIES: Industry[] = [
  {
    id: 'legal',
    title: 'Legal',
    icon: Scale,
    description: 'Contract lifecycle, matter management, and audit trails for law firms and in-house legal teams.',
    tags: ['Contract Management', 'Approval Chains', 'Compliance Audit'],
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    icon: DollarSign,
    description: 'Regulatory document management, audit-ready records, and automated invoice processing for banks and financial institutions.',
    tags: ['Regulatory Compliance', 'Invoice Processing', 'Audit Trail'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    description: 'Secure handling of patient records, clinical protocols, and compliance documentation with role-based access.',
    tags: ['HIPAA-Aligned Access', 'Clinical Protocols', 'Secure Sharing'],
  },
  {
    id: 'government',
    title: 'Government',
    icon: Building2,
    description: 'Public sector document management with immutable audit logs, multi-department access control, and compliance reporting.',
    tags: ['Immutable Audit Log', 'Multi-Department', 'Compliance Export'],
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: 'Academic records, research documentation, and institutional policies managed with version control and controlled access.',
    tags: ['Academic Records', 'Research Docs', 'Controlled Access'],
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: Code,
    description: 'Technical documentation, runbooks, incident reports, and architecture docs with semantic search and real-time collaboration.',
    tags: ['Semantic Search', 'Runbooks', 'Real-Time Collaboration'],
  },
];

const Industries = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Industry Verticals — VyXlo DMS"
        description="VyXlo DMS supports legal, financial services, healthcare, government, education, and technology industries with AI document management."
        canonical="/verticals"
      />

      {/* Hero Section */}
      <section className="bg-charcoal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold tracking-widest text-gold uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10">
            Industry Verticals
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {"VyXlo Fits the Workflow You Already Have"}
          </h1>
          <p className="text-xl text-charcoal-border max-w-3xl mx-auto">
            {"Document management built for the specific compliance, security, and collaboration needs of each industry."}
          </p>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest text-gold uppercase mb-3">INDUSTRIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Where VyXlo Delivers the Most Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.id}
                  to={`/verticals/${industry.id}`}
                  className="group flex flex-col bg-white border border-charcoal-border rounded-xl p-8 hover:shadow-lg hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gold-100 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">{industry.title}</h3>
                  </div>

                  <p className="text-charcoal-muted text-sm leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs font-medium text-charcoal bg-charcoal-50 rounded-full px-3 py-1"
                      >
                        <Check className="h-3 w-3 text-gold flex-shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center text-gold group-hover:text-gold-dark font-medium text-sm transition-colors">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {"Don't See Your Industry?"}
          </h2>
          <p className="text-charcoal-border text-lg mb-10">
            {"VyXlo is flexible enough to fit most document-heavy workflows. Talk to our team."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gold text-charcoal-900 font-semibold hover:bg-gold-dark transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
