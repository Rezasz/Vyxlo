import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, CheckCircle, Users, Building2, ArrowRight, Brain } from 'lucide-react';
import SEO from '../components/SEO';

const PRINCIPLES = [
  {
    icon: Shield,
    title: 'Security First',
    body: 'Every feature is designed with security as a constraint, not an afterthought. Access control, audit logging, and encryption are core infrastructure.',
  },
  {
    icon: Zap,
    title: 'No Lock-In',
    body: 'VyXlo works with any AI provider — OpenAI, Azure, Anthropic, Gemini, or your own Ollama instance. Switch without losing data.',
  },
  {
    icon: CheckCircle,
    title: 'Production Ready',
    body: '327 automated tests. Docker Compose deployment. Real monitoring. VyXlo ships as production software, not a prototype.',
  },
  {
    icon: Users,
    title: 'Team-Scale',
    body: 'Built for teams of 10 to 500+. Permissions, departments, and workflows scale without configuration bloat.',
  },
];

const STATS = [
  { value: '327', label: 'Automated tests' },
  { value: '7', label: 'Docker services in production stack' },
  { value: '8', label: 'Permission levels' },
  { value: '< 5 min', label: 'AI processing time per document' },
];

const About = () => {
  return (
    <>
      <SEO
        title="About — VyXlo DMS"
        description="VyXlo DMS is an AI-powered document management platform built by Kanz.ai in Dubai. Learn about our mission, principles, and the team."
        canonical="/about"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Brain className="h-4 w-4" />
                About VyXlo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Document Intelligence for Modern Teams
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                VyXlo DMS is an AI-powered document management platform built to give teams complete control over their documents {"—"} from upload to archive.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                OUR MISSION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                Built by Engineers Who Needed This Themselves
              </h2>
              <p className="text-lg text-charcoal-muted leading-relaxed mb-6">
                VyXlo started as an internal tool at Kanz.ai. We needed a document management system that could handle real compliance requirements, work with any AI provider, and actually integrate with how engineering teams work. We {"couldn't"} find one. So we built it.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-charcoal-muted bg-charcoal-50 border border-charcoal-border px-4 py-2 rounded-md">
                <Building2 className="h-4 w-4 text-charcoal-muted shrink-0" />
                VyXlo is a product of Kanz.ai, based in Dubai.
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT VALUES */}
        <section className="py-20 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                HOW WE BUILD
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900">
                Our Product Principles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  className="bg-white p-6 rounded-lg border border-charcoal-border border-t-4 border-t-gold hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold mb-4">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL HONESTY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                BY THE NUMBERS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                What 327 Tests Actually Cover
              </h2>
              <p className="text-charcoal-muted leading-relaxed">
                We publish our test coverage because we believe in transparency about what the platform can and cannot do.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-charcoal-50 border border-charcoal-border rounded-lg p-6"
                >
                  <p className="text-4xl font-bold text-gold mb-2">{s.value}</p>
                  <p className="text-sm text-charcoal-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-20 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                THE TEAM
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                A Small Team, Serious Software
              </h2>
              <p className="text-lg text-charcoal-muted leading-relaxed mb-6">
                VyXlo is built by a focused team at Kanz.ai. We believe great software comes from small teams with clear ownership {"—"} not from large organizations with diffuse responsibility.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-charcoal-muted bg-white border border-charcoal-border px-4 py-2 rounded-md">
                <Building2 className="h-4 w-4 text-charcoal-muted shrink-0" />
                Kanz.ai is based in Dubai. VyXlo is our flagship product.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-charcoal-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Want to Work Together?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Request Access
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
