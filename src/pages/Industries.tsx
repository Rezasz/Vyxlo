import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, FileText, Briefcase, Scale, ArrowRight,
  Globe, Database, Shield, Users, ChevronRight, Factory
} from 'lucide-react';
import SEO from '../components/SEO';

const industries = [
  {
    id: 'industries',
    icon: Factory,
    title: 'Industries',
    description: 'Comprehensive solutions for manufacturing, retail, and other industrial sectors focusing on operational efficiency and digital transformation.',
    benefits: [
      'Streamlined production workflows',
      'Supply chain optimization',
      'Quality control automation',
      'Asset management'
    ],
    metrics: {
      efficiency: '85%',
      automation: '90%',
      optimization: '75%'
    }
  },
  {
    id: 'financial-services',
    icon: Building2,
    title: 'Financial Services',
    description: 'Transform financial operations with AI-powered document management tailored for banks, investment firms, and financial institutions.',
    benefits: [
      'Automated compliance monitoring',
      'Secure document processing',
      'Real-time risk assessment',
      'Streamlined workflows'
    ],
    metrics: {
      efficiency: '90%',
      accuracy: '99.9%',
      compliance: '100%'
    }
  },
  {
    id: 'healthcare',
    icon: FileText,
    title: 'Healthcare',
    description: 'Streamline patient records, medical documentation, and healthcare compliance with intelligent document management.',
    benefits: [
      'HIPAA compliance',
      'Patient data security',
      'Electronic health records',
      'Clinical documentation'
    ],
    metrics: {
      security: '100%',
      accessibility: '24/7',
      integration: '99.9%'
    }
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal',
    description: 'Enhance legal document management with AI-powered search, analysis, and secure collaboration tools.',
    benefits: [
      'Case file management',
      'Legal research automation',
      'Contract analysis',
      'Secure collaboration'
    ],
    metrics: {
      productivity: '85%',
      accuracy: '99.9%',
      savings: '60%'
    }
  },
  {
    id: 'insurance',
    icon: Briefcase,
    title: 'Insurance',
    description: 'Accelerate claims processing and policy management with intelligent document automation.',
    benefits: [
      'Claims automation',
      'Policy management',
      'Risk assessment',
      'Fraud detection'
    ],
    metrics: {
      processing: '5x',
      accuracy: '99.9%',
      detection: '95%'
    }
  }
];

export { industries };

const Industries = () => {
  return (
    <>
      <SEO
        title="Verticals"
        description="Discover how Vyxlo's SecureVault platform transforms document management across different verticals"
        canonical="/verticals"
      />

      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Verticals</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how SecureVault transforms document management across different verticals with tailored solutions for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gold-100 rounded-lg">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">{industry.title}</h3>
                  </div>

                  <p className="text-charcoal-muted mb-6">{industry.description}</p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-4 text-charcoal">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(industry.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-gold">{value}</div>
                        <div className="text-sm text-charcoal-muted capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/verticals/${industry.id}`}
                    className="inline-flex items-center text-gold hover:text-gold-dark font-medium group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us to learn how SecureVault can be tailored to your industry's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gold text-charcoal-900 hover:bg-gold-dark transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
