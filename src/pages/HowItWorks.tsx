import React from 'react';
import { Link } from 'react-router-dom';
import {
  Upload, Brain, FolderOpen, Users, GitBranch, Activity,
  ArrowRight, CheckCircle, ChevronRight,
} from 'lucide-react';
import SEO from '../components/SEO';

const STEPS = [
  {
    n: '01',
    icon: Upload,
    title: 'Upload',
    subtitle: 'Drop it in. We\'ll handle the rest.',
    body: 'Upload any file from the browser, drag-and-drop, or via the REST API. VyXlo stores the file in your S3-compatible storage (MinIO, AWS S3, or compatible), creates a version record, and immediately queues it for AI processing.',
    details: [
      'Supported: PDF, DOCX, XLSX, PPTX, images, and more',
      'Every upload creates an immutable version record',
      'REST API available for automated ingestion pipelines',
      'File stored in your S3-compatible object storage',
    ],
  },
  {
    n: '02',
    icon: Brain,
    title: 'AI Processing',
    subtitle: 'The AI reads it so your team doesn\'t have to.',
    body: 'Within 5 minutes, the AI pipeline classifies your document, extracts keywords and named entities, generates a plain-language summary, and builds a semantic embedding. All of this is stored alongside the document and immediately available in search.',
    details: [
      'Classification into 10 categories with confidence score',
      'Entity extraction: people, organizations, dates, monetary amounts',
      'Plain-language summary (3 sentences)',
      'Semantic embedding for similarity search',
    ],
  },
  {
    n: '03',
    icon: FolderOpen,
    title: 'Organize',
    subtitle: 'Put it where it belongs.',
    body: 'Assign the document to a folder, tag it, and set its status. Apply permissions to control who can view, download, comment, or edit. Documents inherit folder-level permissions automatically.',
    details: [
      'Unlimited folder hierarchy with materialized path queries',
      'Tag system with organization-scoped namespaces',
      'Status: DRAFT → IN_REVIEW → PENDING_APPROVAL → APPROVED → PUBLISHED → ARCHIVED',
      'Permissions inherited from folder or set directly',
    ],
  },
  {
    n: '04',
    icon: Users,
    title: 'Collaborate',
    subtitle: 'Work on it together.',
    body: 'Share the document with your team. Leave threaded comments with @mentions. See who else is in the document right now via live presence indicators. Lock a section if you need to work without interruption.',
    details: [
      'Live presence: see who is in the document right now',
      'Threaded comments with unlimited nesting and @mentions',
      'Document locking to prevent conflicting edits',
      'Secure share links with optional password, expiry, and email allowlist',
    ],
  },
  {
    n: '05',
    icon: GitBranch,
    title: 'Approve',
    subtitle: 'Route it for sign-off.',
    body: 'Start an approval workflow. The document moves through sequential and parallel steps automatically. Each approver receives a notification, takes action, and the document advances. When the last step is approved, the document status updates automatically.',
    details: [
      'Sequential and parallel approval steps',
      'Per-step deadlines with escalation logic',
      'Each decision captured in the audit log',
      'Automatic status promotion on final approval',
    ],
  },
  {
    n: '06',
    icon: Activity,
    title: 'Audit',
    subtitle: 'Prove everything that happened.',
    body: 'Every action — upload, view, download, permission change, approval, share — is written to an immutable audit log with full context. Filter by user, document, or date. Export to CSV. Answer auditor questions in seconds.',
    details: [
      'Immutable log: no updates, no deletes, ever',
      'Before/after state stored as JSONB',
      'SHA-256 tamper-evident checksums',
      'CSV export (async, returns download URL)',
    ],
  },
];

const HowItWorks = () => {
  return (
    <>
      <SEO
        title="How It Works — VyXlo DMS"
        description="From upload to insight in under five minutes. Six steps: Upload, AI Processing, Organize, Collaborate, Approve, Audit."
        canonical="/how-it-works"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                From upload to insight in under five minutes.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Six steps that cover the entire lifecycle of a document — from the moment it lands in VyXlo to the moment an auditor asks what happened to it.
              </p>
            </div>
          </div>
        </section>

        {/* STEP PROGRESS BAR */}
        <section className="bg-white border-b border-charcoal-border sticky top-20 z-40 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              {STEPS.map((step, i) => (
                <a
                  key={step.n}
                  href={`#step-${step.n}`}
                  className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-charcoal-muted hover:text-gold transition-colors border-r border-charcoal-border last:border-r-0 hover:bg-gold-50"
                >
                  <span className="text-gold font-bold">{step.n}</span>
                  <span>{step.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="py-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                id={`step-${step.n}`}
                className={`py-16 ${i < STEPS.length - 1 ? 'border-b border-charcoal-border' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-black text-charcoal-50 select-none">{step.n}</span>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold">
                        <step.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">{step.title}</h2>
                    <p className="text-gold font-medium mb-4">{step.subtitle}</p>
                    <p className="text-charcoal-muted leading-relaxed mb-6">{step.body}</p>
                  </div>
                  {/* Details card */}
                  <div className={`bg-charcoal-50 rounded-xl p-6 border border-charcoal-border ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-4">What happens</p>
                    <ul className="space-y-3">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-charcoal leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE SUMMARY */}
        <section className="py-16 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-charcoal">How the platform is wired together</h2>
              <p className="text-charcoal-muted mt-2">All six steps run on a single, coherent platform — no stitching required.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'API Layer',
                  body: 'FastAPI on Python 3.12. Every action — upload, query, approve, share — goes through typed, validated endpoints. Swagger UI at /docs.',
                  sub: '< 300ms p95 response time',
                },
                {
                  title: 'Background Workers',
                  body: 'Celery workers handle AI processing, email dispatch, audit export, and file operations asynchronously — without blocking your requests.',
                  sub: '< 5 min AI processing per document',
                },
                {
                  title: 'Storage',
                  body: 'Files stored in MinIO (S3-compatible). Database in PostgreSQL 16 with pgvector for semantic embeddings. Redis for caching and task queue.',
                  sub: 'Bring your own infrastructure',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-charcoal-border rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed mb-3">{item.body}</p>
                  <span className="inline-block text-xs font-medium text-gold bg-gold-50 border border-gold/20 rounded-full px-3 py-1">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-charcoal-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to see it for yourself?</h2>
            <p className="text-white/70 mb-8">
              Request early access or read the full feature list.
            </p>
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
                Full Feature List <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HowItWorks;
