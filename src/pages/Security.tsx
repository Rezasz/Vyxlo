import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Key, Lock, Eye, Users, FileText, CheckCircle, ArrowRight, AlertTriangle, Server,
} from 'lucide-react';
import SEO from '../components/SEO';

const SECURITY_SECTIONS = [
  {
    icon: Key,
    title: 'Identity — ZITADEL',
    body: 'Authentication is handled by ZITADEL, an enterprise-grade open-source identity platform. VyXlo never stores passwords. OIDC with PKCE is the default flow. SAML, LDAP, and social login are available out of the box. JWTs are validated against ZITADEL\'s JWKS endpoint using RS256 — VyXlo trusts no token it cannot verify.',
    bullets: [
      'OIDC with PKCE — industry-standard, no implicit flow',
      'SAML 2.0 for enterprise SSO',
      'LDAP for directory integration',
      'Social login (Google, GitHub, and more)',
      'RS256 JWT validation against JWKS endpoint',
      'Passwords never touch VyXlo\'s servers',
    ],
  },
  {
    icon: Shield,
    title: 'Authorization — Fine-Grained',
    body: '8 permission levels per document and per folder: NONE, READ, DOWNLOAD, COMMENT, CONTRIBUTOR, WRITE, EDITOR, ADMIN. Apply to individual users or entire departments. Set expiration dates. Permissions stack — effective access is the maximum of all applicable grants.',
    bullets: [
      '8 levels: NONE · READ · DOWNLOAD · COMMENT · CONTRIBUTOR · WRITE · EDITOR · ADMIN',
      'Per-document and per-folder grants',
      'Apply to individual users or departments',
      'Permission expiration dates',
      'Effective permission = max across all applicable grants',
      'Document owner always has ADMIN access',
    ],
  },
  {
    icon: Lock,
    title: 'Transport Security',
    body: 'All communication happens over HTTPS. WebSocket connections use WSS. Share link tokens use cryptographically random bytes from secrets.token_urlsafe(32). Share link passwords are bcrypt-hashed with cost factor ≥ 12.',
    bullets: [
      'All API communication over HTTPS',
      'WebSocket connections use WSS (encrypted)',
      'Share link tokens: secrets.token_urlsafe(32) — ≥32 bytes entropy',
      'Share link passwords: bcrypt, cost factor ≥ 12',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Input Validation',
    body: 'Every API input is validated by Pydantic schemas before reaching any business logic. SQLAlchemy ORM with parameterized queries — no raw string interpolation, ever. MIME type validation on file uploads; executables are rejected.',
    bullets: [
      'Pydantic v2 schema validation on every endpoint',
      'SQLAlchemy ORM — parameterized queries, no raw SQL string interpolation',
      'MIME type validation on all file uploads',
      'Executable files rejected at upload time',
    ],
  },
  {
    icon: Server,
    title: 'Data Isolation',
    body: 'Every database query is scoped to the caller\'s organization at the service layer. There is no code path that returns data across organization boundaries. Multi-tenancy is enforced in code, not just in routing.',
    bullets: [
      'Organization ID scoped on every database query',
      'No code path crosses organization boundaries',
      'Enforced at service layer, not just routing',
      'Fully isolated: storage quotas, tags, audit logs, user rosters',
    ],
  },
  {
    icon: FileText,
    title: 'Audit Trail',
    body: 'Immutable. Every create, update, delete, login, logout, access, download, permission change, workflow action, and export produces a log entry. Before/after JSONB. SHA-256 tamper-evident checksums. No updates, no deletes — ever.',
    bullets: [
      'Every action produces an audit log entry',
      'Before/after state stored as JSONB',
      'SHA-256 tamper-evident checksums',
      'No updates, no deletes — ever',
      'CSV export (async, returns download URL)',
      'Configurable retention periods',
    ],
  },
  {
    icon: Eye,
    title: 'Two-Factor Authentication',
    body: 'TOTP-based 2FA using any authenticator app — Google Authenticator, Authy, or 1Password. QR code setup flow. Recovery codes generated at setup. Users can view all active sessions and revoke individual devices remotely.',
    bullets: [
      'TOTP-based 2FA (RFC 6238)',
      'QR code setup via any authenticator app',
      'Recovery codes generated at enrollment',
      'Active sessions visible to the user',
      'Remote session revocation',
    ],
  },
  {
    icon: Users,
    title: 'Secure Share Links',
    body: 'Share links are designed for controlled external access without giving external parties system accounts. Every link is independently configurable and every access is tracked.',
    bullets: [
      'Cryptographically random tokens (≥32 bytes entropy)',
      'Optional expiry date',
      'Optional access count limit',
      'Optional bcrypt-hashed password',
      'Optional email allowlist',
      'Per-link access analytics',
      'One-click revoke',
    ],
  },
];

const Security = () => {
  return (
    <>
      <SEO
        title="Security — VyXlo DMS"
        description="VyXlo is built on ZITADEL identity, 8-level fine-grained permissions, immutable SHA-256 audit logs, bcrypt share passwords, and Pydantic-validated API inputs. Security is not a checkbox."
        canonical="/security"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal-900 text-white py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #EBBB4A 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <Shield className="h-4 w-4 text-gold" />
                <span className="text-gold text-sm font-medium">Security Architecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Security is not a checkbox. It's the foundation.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                VyXlo is built for organizations where document security isn't optional — legal, finance, HR, compliance. Every layer of the stack reflects that.
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY OVERVIEW STATS */}
        <section className="py-12 bg-white border-b border-charcoal-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '8', label: 'Permission levels', sub: 'per document and folder' },
                { value: 'RS256', label: 'JWT validation', sub: 'via ZITADEL JWKS' },
                { value: 'SHA-256', label: 'Audit checksums', sub: 'tamper-evident' },
                { value: 'bcrypt ≥12', label: 'Share link passwords', sub: 'cost factor' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4">
                  <p className="text-2xl font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-charcoal">{stat.label}</p>
                  <p className="text-xs text-charcoal-muted mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY SECTIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {SECURITY_SECTIONS.map((sec, i) => (
                <div
                  key={sec.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-10 ${
                    i < SECURITY_SECTIONS.length - 1 ? 'border-b border-charcoal-border' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold">
                        <sec.icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-charcoal">{sec.title}</h2>
                    </div>
                    <p className="text-charcoal-muted leading-relaxed">{sec.body}</p>
                  </div>
                  <div className="bg-charcoal-50 rounded-xl p-5 border border-charcoal-border">
                    <ul className="space-y-2.5">
                      {sec.bullets.map((b) => (
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

        {/* COMPLIANCE NOTE */}
        <section className="py-16 bg-charcoal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-10 w-10 text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-charcoal mb-3">Built for regulated environments</h2>
            <p className="text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
              VyXlo's audit trail, fine-grained permissions, and immutable logging are designed to satisfy audit requirements in legal, financial, healthcare, and government contexts. The immutable log means you can answer "who did what, to which document, and when" in seconds — not hours.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-charcoal-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions about our security model?</h2>
            <p className="text-white/70 mb-8">Talk to us. We can walk you through the specifics for your compliance requirements.</p>
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

export default Security;
