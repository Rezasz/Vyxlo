import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Lock,
  Share2,
  Eye,
  Bell,
  Check,
  ChevronLeft,
  ArrowRight,
  Zap,
  Shield,
  RefreshCw,
} from 'lucide-react';
import SEO from '../../components/SEO';

const Collaboration = () => {
  const presenceCards = [
    {
      icon: Users,
      title: 'Real-Time Viewers',
      description: 'Live list of all users currently viewing the document',
    },
    {
      icon: Zap,
      title: 'WebSocket Delivery',
      description: 'Presence updates pushed instantly, no page refresh required',
    },
    {
      icon: RefreshCw,
      title: 'Automatic Cleanup',
      description: 'Presence removed immediately when a user closes the tab',
    },
  ];

  const commentFeatures = [
    'Unlimited nesting depth — thread as deep as the conversation goes',
    '@mentions — tag any team member for instant notification',
    'Edit within 15 minutes of posting — fix typos before anyone notices',
    'Comment resolution — owner or ADMIN marks threads as resolved',
    'Emoji reactions — quick feedback without a full reply',
    'Inline annotations — link comments to specific page and position coordinates',
  ];

  const lockingCards = [
    {
      icon: RefreshCw,
      title: 'Auto-Expiry',
      description: 'Lock releases after 1 hour even if the editor forgets',
    },
    {
      icon: Shield,
      title: 'Manual Release',
      description: 'Any ADMIN can release a lock immediately',
    },
  ];

  const sharingCards = [
    {
      icon: Bell,
      title: 'Expiry Dates',
      description: 'Share links expire on a date you set',
    },
    {
      icon: Lock,
      title: 'Password Protection',
      description: 'Require a password to access the shared document',
    },
    {
      icon: Eye,
      title: 'Email Allowlist',
      description: 'Restrict access to specific email addresses',
    },
    {
      icon: Share2,
      title: 'Access Analytics',
      description: 'See how many times and when a link was accessed',
    },
  ];

  const reliabilityCards = [
    {
      icon: Zap,
      stat: 'Auto',
      title: 'Automatic Reconnection',
      description: 'Reconnects instantly on connection drop',
    },
    {
      icon: RefreshCw,
      stat: 'Smart',
      title: 'Exponential Backoff',
      description: 'Retry intervals increase to avoid thundering herd',
    },
    {
      icon: Shield,
      stat: 'Sync',
      title: 'State Sync on Reconnect',
      description: 'Catches up on missed events after reconnect',
    },
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Collaboration — VyXlo DMS"
        description="Live presence indicators, threaded comments, document locking, and secure sharing — all delivered in real time over WebSocket."
        canonical="/features/collaboration"
      />

      {/* Section 1 — Hero */}
      <section className="bg-charcoal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/features"
            className="inline-flex items-center text-gold hover:text-gold-dark font-medium mb-10 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Features
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
              Real-Time Collaboration
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {"See Who's There. Say What You Mean."}
            </h1>
            <p className="text-lg text-charcoal-muted mb-10 leading-relaxed">
              VyXlo brings your whole team together on every document — live presence, threaded
              discussions, and instant notifications, all delivered over WebSocket.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Live WebSocket', 'Unlimited threads', '<2 min email delivery', 'Auto-reconnect'].map(
                (pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-sm font-medium bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold inline-block" />
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Live Presence */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Live Presence
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Always Know Who Is Working on What
          </h2>
          <p className="text-charcoal-muted text-lg mb-12 max-w-2xl">
            Presence indicators show every user currently viewing a document in real time. No
            polling, no guessing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {presenceCards.map((card) => (
              <div
                key={card.title}
                className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-border hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{card.title}</h3>
                <p className="text-charcoal-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Threaded Comments */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                Threaded Comments
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Conversations That Stay With the Document
              </h2>
            </div>

            <div className="space-y-4">
              {commentFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <span className="text-charcoal leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Document Locking */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Document Locking
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            One Editor at a Time
          </h2>
          <p className="text-charcoal-muted text-lg mb-12 max-w-2xl">
            Prevent conflicting edits by locking a document while editing. Locks expire automatically
            after 1 hour — no stuck locks, no manual cleanup.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {lockingCards.map((card) => (
              <div
                key={card.title}
                className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-border hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{card.title}</h3>
                <p className="text-charcoal-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Secure Sharing */}
      <section className="bg-charcoal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Secure Sharing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">
            Share Outside Your Organization Safely
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sharingCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border border-charcoal-border hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <card.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-base font-bold text-charcoal mb-1.5">{card.title}</h3>
                <p className="text-charcoal-muted text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — WebSocket Reliability */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Real-Time Delivery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for Unreliable Networks
          </h2>
          <p className="text-charcoal-muted text-lg mb-12 max-w-2xl">
            {"VyXlo's WebSocket layer handles dropped connections gracefully so your team never misses a message."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reliabilityCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/8 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-gold/15 flex items-center justify-center mb-5">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="text-2xl font-bold text-gold mb-1">{card.stat}</div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-charcoal-muted text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="bg-charcoal-900 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Collaborate in Real Time?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-gold text-charcoal-900 font-semibold hover:bg-gold-dark transition-colors"
            >
              Request Access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;
