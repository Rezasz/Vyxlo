import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ShieldCheck,
  Lock,
  Key,
  Database,
  Eye,
  FileText,
  Users,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';

const PERMISSION_LEVELS = [
  { level: 'NONE', desc: 'Completely invisible to the user' },
  { level: 'READ', desc: 'View document content in-browser' },
  { level: 'DOWNLOAD', desc: 'Download the original file' },
  { level: 'COMMENT', desc: 'Leave comments and annotations' },
  { level: 'CONTRIBUTOR', desc: 'Upload new document versions' },
  { level: 'WRITE', desc: 'Edit metadata, move to other folders' },
  { level: 'EDITOR', desc: 'Full editing access' },
  { level: 'ADMIN', desc: 'Manage permissions, lock/unlock' },
];

const AUDIT_FEATURES = [
  {
    icon: FileText,
    title: 'Immutable Log',
    desc: 'Every action creates an append-only audit record',
  },
  {
    icon: ShieldCheck,
    title: 'SHA-256 Checksums',
    desc: 'Each record includes a tamper-evident hash',
  },
  {
    icon: Database,
    title: 'Before/After State',
    desc: 'Full JSONB snapshots of what changed',
  },
  {
    icon: ArrowRight,
    title: 'CSV Export',
    desc: 'Export audit records for compliance reporting',
  },
];

const AUTH_FEATURES = [
  {
    icon: Key,
    title: 'JWT Sessions',
    desc: 'Secure tokens with configurable expiry',
  },
  {
    icon: Lock,
    title: 'TOTP 2FA',
    desc: 'Time-based one-time passwords with any authenticator app',
  },
  {
    icon: AlertCircle,
    title: 'Recovery Codes',
    desc: '10 single-use recovery codes generated at 2FA enrollment',
  },
  {
    icon: Eye,
    title: 'Remote Session Revoke',
    desc: 'Admins can revoke any active session instantly',
  },
];

const DATA_PROTECTION = [
  {
    icon: Shield,
    title: 'Encryption in Transit',
    desc: 'TLS 1.2+ for all connections',
  },
  {
    icon: Database,
    title: 'Object Storage',
    desc: 'Files stored in isolated object storage (S3-compatible)',
  },
  {
    icon: Lock,
    title: 'Database Isolation',
    desc: 'Dedicated PostgreSQL per deployment',
  },
];

const SHARING_CONTROLS = [
  {
    icon: AlertCircle,
    title: 'Link Expiry',
    desc: 'Share links expire on the date you set',
  },
  {
    icon: Lock,
    title: 'Password Protection',
    desc: 'Require a password to access shared documents',
  },
  {
    icon: Users,
    title: 'Email Allowlist',
    desc: 'Restrict access to approved email addresses',
  },
  {
    icon: Eye,
    title: 'Access Analytics',
    desc: 'Track every time a share link is accessed',
  },
];

const Security = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Security — VyXlo DMS"
        description="Enterprise-grade security: 8-level access control, immutable audit log with SHA-256 checksums, TOTP 2FA, and encrypted storage."
        canonical="/security"
      />

      {/* SECTION 1 — Hero */}
      <section className="bg-charcoal-900 text-white py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Shield className="h-4 w-4 text-gold" />
            <span className="text-gold text-sm font-medium">Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto">
            Enterprise-Grade Security, No Compromises
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            VyXlo is built security-first {"—"} from data in transit to audit trails that can hold up in court.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['AES-256 Encryption', 'Immutable Audit Log', 'TOTP + Recovery Codes'].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-white/80"
              >
                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Access Control */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Access Control
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Eight Permission Levels. Granular to the Document.
            </h2>
            <p className="text-charcoal-muted leading-relaxed">
              Every document has an effective permission calculated as the maximum of all applicable grants {"—"} by user, by department, or by organization.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERMISSION_LEVELS.map((p) => (
              <div
                key={p.level}
                className="bg-charcoal-50 border border-charcoal-border rounded-xl p-5"
              >
                <span className="inline-block text-xs font-bold tracking-wider text-gold bg-gold-100 rounded-md px-2.5 py-1 mb-3 font-mono">
                  {p.level}
                </span>
                <p className="text-sm text-charcoal leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Audit & Compliance */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Audit &amp; Compliance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Every Action. Logged. Tamper-Proof.
            </h2>
            <p className="text-charcoal-muted leading-relaxed">
              {"VyXlo's"} audit log records every action with before/after state and a SHA-256 checksum. You can prove what happened.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIT_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-charcoal-border rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold-100 rounded-lg mb-4">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{f.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Authentication */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Authentication
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Strong Auth, Out of the Box
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTH_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-charcoal-50 border border-charcoal-border rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold-100 rounded-lg mb-4">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{f.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Data Protection */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Data Protection
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Your Data, Protected at Rest and in Transit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {DATA_PROTECTION.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-charcoal-border rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold-100 rounded-lg mb-4">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{f.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Sharing Controls */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3">
              Sharing Controls
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Without Losing Control
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHARING_CONTROLS.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold/10 rounded-lg mb-4">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="bg-charcoal-900 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-10 w-10 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Put Security First?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Talk to us about your compliance requirements. We can walk you through every layer.
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

export default Security;
