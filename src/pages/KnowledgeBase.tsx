import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Code, HelpCircle, ArrowRight, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginPrompt from '../components/knowledge-base/LoginPrompt';

const docCategories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Set up VyXlo, invite your team, and upload your first documents.',
    articles: [
      'Installation & Docker Setup',
      'Inviting Team Members',
      'Uploading Your First Document',
    ],
  },
  {
    icon: FileText,
    title: 'Feature Guides',
    description: 'Deep dives into every feature — search, AI, workflows, and more.',
    articles: [
      'Setting Up Approval Workflows',
      'Using AI Document Classification',
      'Managing Permissions',
    ],
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Full REST API documentation for developers building on VyXlo.',
    articles: [
      'Authentication & JWT Tokens',
      'Document Endpoints',
      'WebSocket Events',
    ],
  },
  {
    icon: HelpCircle,
    title: 'Troubleshooting',
    description: 'Common issues and how to resolve them.',
    articles: [
      'Connection Issues',
      'AI Processing Failures',
      'Permission Errors',
    ],
  },
];

const quickLinks = [
  { to: '/features', label: 'Feature Overview' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/technical-specs', label: 'Technical Specs' },
  { to: '/contact', label: 'Contact Support' },
];

const KnowledgeBase = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPrompt />;
  }

  return (
    <div className="pt-20">
      {/* Section 1 — Header */}
      <section className="bg-charcoal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Knowledge Base
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            VyXlo Documentation
          </h1>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Everything you need to get up and running with VyXlo DMS.
          </p>
        </div>
      </section>

      {/* Section 2 — Documentation Sections */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="border border-charcoal-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gold-50 rounded-lg">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h2 className="text-xl font-bold text-charcoal-900">{category.title}</h2>
                  </div>
                  <p className="text-charcoal-muted mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-150 font-medium"
                        >
                          <ArrowRight className="h-4 w-4 shrink-0" />
                          <span>{article}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 — Quick Links */}
      <section className="bg-charcoal-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-center gap-2 bg-white border border-charcoal-border rounded-lg px-4 py-4 text-charcoal font-medium hover:border-gold hover:text-gold transition-colors duration-150"
              >
                <ArrowRight className="h-4 w-4 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;
