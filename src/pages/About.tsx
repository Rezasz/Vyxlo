import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Brain, Globe, Lock, ArrowRight, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const VALUES = [
  {
    icon: Lock,
    title: 'Control',
    body: 'Fine-grained permissions and immutable records because trust should be verifiable, not assumed. Every access, every decision — logged and provable.',
  },
  {
    icon: Brain,
    title: 'Intelligence',
    body: 'AI that works on every document automatically, without configuration. Classification, extraction, summarization, and semantic search — by the time you open a file, the work is done.',
  },
  {
    icon: Globe,
    title: 'Openness',
    body: 'Open source core, self-hostable with a single docker compose up, no per-seat callbacks to our servers. Your data stays where you put it.',
  },
  {
    icon: Shield,
    title: 'Precision',
    body: 'Specific features with exact constraints and real numbers. No vague promises. "Tamper-evident SHA-256 checksums" is better than "robust audit capabilities."',
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About — VyXlo DMS"
        description="VyXlo DMS is built for organizations that treat documents as infrastructure. A Kanz.ai product, built in Dubai."
        canonical="/about"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Built for organizations that treat documents as infrastructure.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                VyXlo DMS is the document platform for teams that need control, auditability, and intelligence — not another tool to wrangle.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 text-gold mb-5">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h2>
                <p className="text-charcoal-muted leading-relaxed">
                  To give organizations complete control over their documents — structured storage, intelligent processing, and a complete audit trail — in a single system that doesn't require three tools and an intern to hold together.
                </p>
                <p className="text-charcoal-muted leading-relaxed mt-4">
                  We believe compliance should be built-in, not bolted-on. That AI should handle the reading so humans can focus on the deciding. That every action on every document should be known, auditable, and recoverable.
                </p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 text-gold mb-5">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h2>
                <p className="text-charcoal-muted leading-relaxed">
                  A world where every organization has a document platform that's as reliable as their database and as transparent as their code history. Where "where is that file?" and "who approved this?" are questions that answer themselves.
                </p>
                <p className="text-charcoal-muted leading-relaxed mt-4">
                  We're building VyXlo to be the platform that organizations trust not because they have to, but because it earns it — with immutable records, verifiable permissions, and AI that does what it says.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-3">What we build toward</h2>
              <p className="text-charcoal-muted">Four principles that guide every product decision we make.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-white p-6 rounded-lg border border-charcoal-border border-t-4 border-t-gold hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold mb-4">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT THE COMPANY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-charcoal mb-5">About Vyxlo.com</h2>
              <p className="text-charcoal-muted leading-relaxed mb-4">
                VyXlo DMS is a product of <strong className="text-charcoal">Vyxlo.com</strong>, a subsidiary of <strong className="text-charcoal">Kanz.ai</strong>, based in Dubai, UAE. We build enterprise software for organizations that operate in complex, regulated environments.
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                Our team combines expertise in enterprise architecture, applied AI, and regulated-industry software. We build in the open — the VyXlo backend is open source and designed to be auditable, not just functional.
              </p>
              <div className="mt-8 p-5 bg-charcoal-50 rounded-lg border border-charcoal-border text-sm text-left inline-block">
                <p className="font-semibold text-charcoal mb-2">Contact</p>
                <p className="text-charcoal-muted">contact@vyxlo.com</p>
                <p className="text-charcoal-muted">+971-42327866</p>
                <p className="text-charcoal-muted">702 Opal Tower, Business Bay, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-charcoal text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Work with us</h2>
            <p className="text-white/70 mb-6">Questions, partnerships, or enterprise inquiries — reach out.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Request Early Access <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
