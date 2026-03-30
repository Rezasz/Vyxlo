import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Database,
  Zap,
  Brain,
  Cloud,
  Code,
  Shield,
  Check,
  ArrowRight,
  Package,
} from 'lucide-react';
import SEO from '../components/SEO';

interface ServiceCard {
  icon: React.ElementType;
  name: string;
  version: string;
  desc: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Server,
    name: 'FastAPI',
    version: 'Python 3.11',
    desc: 'REST API, WebSocket, background tasks',
  },
  {
    icon: Database,
    name: 'PostgreSQL 16',
    version: 'Primary DB',
    desc: 'Full-text search (tsvector), vector store (pgvector)',
  },
  {
    icon: Zap,
    name: 'Redis 7',
    version: 'Cache',
    desc: 'Session cache, rate limiting, WebSocket pub/sub',
  },
  {
    icon: Package,
    name: 'Celery',
    version: 'Task Queue',
    desc: 'Async task queue for AI processing and email delivery',
  },
  {
    icon: Cloud,
    name: 'MinIO',
    version: 'Object Storage',
    desc: 'S3-compatible object storage for document files',
  },
  {
    icon: Shield,
    name: 'Nginx',
    version: 'Reverse Proxy',
    desc: 'Reverse proxy and static file serving',
  },
  {
    icon: Code,
    name: 'React (Vite)',
    version: 'Frontend',
    desc: 'Single-page frontend application',
  },
];

interface StatCard {
  value: string;
  label: string;
}

const API_STATS: StatCard[] = [
  { value: '327', label: 'Automated tests' },
  { value: '100%', label: 'API endpoints tested' },
  { value: 'pytest', label: 'Test framework' },
  { value: 'httpx', label: 'Async HTTP test client' },
];

interface ProviderRow {
  provider: string;
  model: string;
  useCases: string;
}

const AI_PROVIDERS: ProviderRow[] = [
  {
    provider: 'OpenAI',
    model: 'GPT-4 / GPT-4o',
    useCases: 'Classification, extraction, summarization',
  },
  {
    provider: 'Azure OpenAI',
    model: 'GPT-4 (Azure)',
    useCases: 'Enterprise deployment, compliance',
  },
  {
    provider: 'Anthropic',
    model: 'Claude',
    useCases: 'Long document analysis',
  },
  {
    provider: 'Google Gemini',
    model: 'Gemini Pro',
    useCases: 'Multimodal document processing',
  },
  {
    provider: 'Ollama',
    model: 'Any local model',
    useCases: 'Air-gapped, on-premise deployments',
  },
];

const PERF_STATS: StatCard[] = [
  { value: '< 300ms', label: 'API response time (p95)' },
  { value: '< 5 min', label: 'AI processing time per document' },
  { value: '1536', label: 'Vector embedding dimensions' },
  { value: '500+', label: 'Concurrent users supported' },
];

interface StorageDetail {
  label: string;
  desc: string;
}

const STORAGE_DETAILS: StorageDetail[] = [
  {
    label: 'MinIO',
    desc: 'S3-compatible, supports any AWS S3-compatible provider',
  },
  {
    label: 'pgvector',
    desc: 'IVFFlat index for fast approximate nearest neighbor search',
  },
  {
    label: 'PostgreSQL',
    desc: 'tsvector with GIN index for full-text search',
  },
];

interface DeployOption {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const DEPLOY_OPTIONS: DeployOption[] = [
  {
    icon: Cloud,
    title: 'Cloud Hosted',
    desc: 'Managed by the Kanz.ai team. Zero ops.',
  },
  {
    icon: Server,
    title: 'Self-Hosted',
    desc: 'Docker Compose on any Linux server. Full data ownership.',
  },
  {
    icon: Shield,
    title: 'Enterprise',
    desc: 'Custom SLA, compliance configuration, dedicated support.',
  },
];

const TechnicalSpecs = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Technical Specifications — VyXlo DMS"
        description="Full technical stack: FastAPI, PostgreSQL, Redis, Celery, MinIO, React. 327 automated tests. Docker Compose deployment. Support for OpenAI, Anthropic, Gemini, and Ollama."
        canonical="/technical-specs"
      />

      {/* SECTION 1 — Hero */}
      <section className="bg-charcoal-900 text-white py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Code className="h-4 w-4 text-gold" />
            <span className="text-gold text-sm font-medium">Technical Specifications</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto">
            What VyXlo Is Made Of
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            For engineers evaluating VyXlo — the full technical stack, service architecture, test
            coverage, and deployment details.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Architecture Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Seven Services, One Stack
            </h2>
            <p className="text-charcoal-muted leading-relaxed">
              VyXlo ships as a Docker Compose stack with 7 production services, all pre-configured.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="bg-charcoal-50 border border-charcoal-border rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold-100 rounded-lg mb-4">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">{s.name}</h3>
                <span className="inline-block text-xs font-bold tracking-wider text-gold bg-gold-100 rounded-md px-2 py-0.5 mb-2 font-mono">
                  {s.version}
                </span>
                <p className="text-sm text-charcoal-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — API & Testing */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              API &amp; Testing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              327 Tests. Real Coverage.
            </h2>
            <p className="text-charcoal-muted leading-relaxed">
              VyXlo's test suite covers every API endpoint, access control boundary, and workflow
              transition.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {API_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-charcoal-border rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-gold mb-2 font-mono">{stat.value}</p>
                <p className="text-sm text-charcoal-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto bg-white border border-charcoal-border rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal leading-relaxed">
                Tests use a real PostgreSQL database and MinIO instance — not mocks. Every test that
                matters runs against the real stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AI Provider Support */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              AI Providers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Bring Your Own Model
            </h2>
            <p className="text-charcoal-muted leading-relaxed">
              VyXlo abstracts the AI layer — configure your provider once and the platform handles
              routing.
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden border border-charcoal-border rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-charcoal-50 border-b border-charcoal-border">
                  <th className="text-left px-5 py-3 font-semibold text-charcoal">Provider</th>
                  <th className="text-left px-5 py-3 font-semibold text-charcoal">Model</th>
                  <th className="text-left px-5 py-3 font-semibold text-charcoal">Use Cases</th>
                </tr>
              </thead>
              <tbody>
                {AI_PROVIDERS.map((row, idx) => (
                  <tr
                    key={row.provider}
                    className={
                      idx % 2 === 0
                        ? 'bg-white border-b border-charcoal-border last:border-0'
                        : 'bg-charcoal-50 border-b border-charcoal-border last:border-0'
                    }
                  >
                    <td className="px-5 py-4 font-medium text-charcoal">{row.provider}</td>
                    <td className="px-5 py-4 font-mono text-charcoal-muted">{row.model}</td>
                    <td className="px-5 py-4 text-charcoal-muted">{row.useCases}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Storage & Performance */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Performance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Built for Real Workloads
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {PERF_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-charcoal-border rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-gold mb-2 font-mono">{stat.value}</p>
                <p className="text-sm text-charcoal-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
              Storage Details
            </h3>
            <ul className="space-y-3">
              {STORAGE_DETAILS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 bg-white border border-charcoal-border rounded-lg px-5 py-4"
                >
                  <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">
                    <span className="font-semibold font-mono">{item.label}:</span> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Deployment */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Deployment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              One Command to Production
            </h2>
            <p className="text-white/70 leading-relaxed">
              <code className="font-mono text-gold bg-gold/10 px-2 py-0.5 rounded">
                docker compose up -d
              </code>{' '}
              is all it takes. VyXlo ships with a pre-configured production Compose file.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {DEPLOY_OPTIONS.map((opt) => (
              <div
                key={opt.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold/10 rounded-lg mb-4">
                  <opt.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">{opt.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="bg-charcoal-900 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Brain className="h-10 w-10 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Evaluate VyXlo?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            We're happy to provide a technical walkthrough for your engineering team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors"
            >
              Request Access
              <ArrowRight className="h-5 w-5" />
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
  );
};

export default TechnicalSpecs;
