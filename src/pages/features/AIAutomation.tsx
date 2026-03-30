import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Search,
  Database,
  Cloud,
  FileText,
  Users,
  Calendar,
  DollarSign,
  ChevronLeft,
  ArrowRight,
} from 'lucide-react';
import SEO from '../../components/SEO';

const pipelineSteps = [
  {
    number: 1,
    title: 'Upload',
    description: 'File lands in VyXlo. Stored in object storage, metadata recorded.',
    icon: Cloud,
  },
  {
    number: 2,
    title: 'Classify',
    description: 'AI assigns one of 10 document categories with a confidence score.',
    icon: Brain,
  },
  {
    number: 3,
    title: 'Extract',
    description: 'Keywords, entities (people, orgs, dates, amounts) pulled from content.',
    icon: Zap,
  },
  {
    number: 4,
    title: 'Summarize',
    description: 'A concise AI-generated summary is attached to the document.',
    icon: FileText,
  },
  {
    number: 5,
    title: 'Embed',
    description: '1536-dimensional vector stored in pgvector for semantic search.',
    icon: Database,
  },
];

const categories = [
  'INVOICE',
  'CONTRACT',
  'REPORT',
  'POLICY',
  'MEMO',
  'LETTER',
  'FORM',
  'PRESENTATION',
  'MANUAL',
  'OTHER',
];

const entityTypes = [
  {
    icon: Users,
    title: 'People',
    description: 'Names of individuals mentioned in the document',
  },
  {
    icon: Brain,
    title: 'Organizations',
    description: 'Companies, institutions, government bodies',
  },
  {
    icon: Calendar,
    title: 'Dates',
    description: 'Deadlines, effective dates, expiry dates',
  },
  {
    icon: DollarSign,
    title: 'Monetary Amounts',
    description: 'Contract values, invoice totals, budgets',
  },
];

const providers = [
  {
    name: 'OpenAI',
    model: 'GPT-4 series',
    useCase: 'Classification, extraction, summarization',
  },
  {
    name: 'Azure OpenAI',
    model: 'GPT-4 (Azure)',
    useCase: 'Enterprise compliance',
  },
  {
    name: 'Anthropic',
    model: 'Claude',
    useCase: 'Long document analysis',
  },
  {
    name: 'Google Gemini',
    model: 'Gemini Pro',
    useCase: 'Multimodal processing',
  },
  {
    name: 'Ollama',
    model: 'Local models',
    useCase: 'Air-gapped deployments',
  },
];

const stats = [
  { value: '< 5 min', label: 'Processing time per document' },
  { value: '10', label: 'Document classification categories' },
  { value: '1536', label: 'Embedding vector dimensions' },
  { value: '4+', label: 'Supported AI providers' },
];

const AIAutomation = () => {
  return (
    <div className="pt-20">
      <SEO
        title="AI Automation — VyXlo DMS"
        description="VyXlo automatically classifies, summarizes, and embeds every document using your choice of AI provider — OpenAI, Azure, Anthropic, Gemini, or Ollama."
        canonical="/features/ai-automation"
      />

      {/* Section 1 — Hero */}
      <section className="bg-charcoal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/features/ai"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-colors mb-10 text-sm font-medium"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to AI Features
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold border border-gold/40 bg-gold/10 rounded-full px-4 py-1.5 mb-6">
              AI Processing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI That Works While You{"  "}
              {"Don't"}
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed">
              Every document uploaded to VyXlo is automatically classified, summarized, and indexed
              before you open it. Your team searches, not scans.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                '<5 min processing',
                '10 categories',
                '4 AI providers',
                '1536 dimensions',
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Pipeline */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              From Upload to Intelligence in Minutes
            </h2>
            <p className="text-charcoal-muted text-lg max-w-2xl mx-auto">
              Every document passes through a five-stage automated pipeline.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-charcoal-border mx-32" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {pipelineSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative flex flex-col items-center text-center">
                    {/* Numbered circle */}
                    <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-charcoal-900 border-4 border-gold shadow-lg mb-5">
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-gold text-charcoal-900 text-xs font-bold">
                        {step.number}
                      </span>
                      <Icon className="h-9 w-9 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
                    <p className="text-charcoal-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Classification */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              CLASSIFICATION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              10 Document Categories, Zero Manual Tagging
            </h2>
            <p className="text-charcoal-muted text-lg max-w-2xl mx-auto">
              Every document is automatically assigned to one of 10 categories. Confidence scores
              let you filter by certainty.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white border border-charcoal-border text-charcoal font-semibold text-sm shadow-sm tracking-wide"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="text-center text-charcoal-muted text-sm flex items-center justify-center gap-2">
            <Search className="h-4 w-4 text-gold flex-shrink-0" />
            Confidence scores stored — filter by high-confidence classifications only
          </p>
        </div>
      </section>

      {/* Section 4 — Entity Extraction */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              ENTITY EXTRACTION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Know What Your Documents Are About
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entityTypes.map((entity) => {
              const Icon = entity.icon;
              return (
                <div
                  key={entity.title}
                  className="bg-charcoal-50 rounded-xl p-7 border border-charcoal-border hover:border-gold/40 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{entity.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{entity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — Multi-Provider */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              MULTI-PROVIDER
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bring Your Own AI Provider
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              VyXlo works with any of the major AI providers — or your own local Ollama instance.
              Switch providers without changing how the platform works.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-xs font-semibold tracking-widest uppercase text-white/40 pr-8">
                    Provider
                  </th>
                  <th className="pb-4 text-xs font-semibold tracking-widest uppercase text-white/40 pr-8">
                    Model
                  </th>
                  <th className="pb-4 text-xs font-semibold tracking-widest uppercase text-white/40">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider, index) => (
                  <tr
                    key={provider.name}
                    className={`border-b border-white/5 ${index === providers.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <td className="py-5 pr-8">
                      <span className="text-white font-semibold">{provider.name}</span>
                    </td>
                    <td className="py-5 pr-8">
                      <span className="text-gold font-medium">{provider.model}</span>
                    </td>
                    <td className="py-5">
                      <span className="text-white/70 text-sm">{provider.useCase}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6 — Stats */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-8 border border-charcoal-border text-center shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-charcoal-muted text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Let AI Handle the Heavy Lifting?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-gold text-charcoal-900 font-semibold hover:bg-gold-dark transition-colors"
            >
              Request Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
