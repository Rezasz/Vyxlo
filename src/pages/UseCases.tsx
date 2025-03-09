import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileText, Briefcase, Scale, ArrowRight } from 'lucide-react';
import EditableContent from '../components/EditableContent';
import SEO from '../components/SEO';

const UseCases = () => {
  const cases = [
    {
      id: 'banking-finance',
      icon: Building2,
      title: 'Banking & Finance',
      description: "Transform your financial institution's document management with our AI-powered solutions. Streamline loan processing, automate KYC procedures, and ensure regulatory compliance while maintaining the highest security standards.",
      benefits: [
        'Reduce loan processing time by up to 90%',
        'Automate compliance checks with 99.9% accuracy',
        'Eliminate manual data entry errors',
        'Enhance customer onboarding experience',
        'Secure sensitive financial information'
      ],
    },
    {
      id: 'legal-services',
      icon: Scale,
      title: 'Legal Services',
      description: 'Revolutionize your legal practice with intelligent document management. Our AI-powered system helps law firms organize, analyze, and secure case files, contracts, and legal documents with unprecedented efficiency.',
      benefits: [
        'Instant document retrieval and analysis',
        'Advanced contract review automation',
        'Military-grade document security',
        'Real-time collaboration tools',
        'Comprehensive audit trails'
      ],
    },
    {
      id: 'insurance',
      icon: Briefcase,
      title: 'Insurance',
      description: 'Accelerate claims processing and transform policy management with our intelligent document handling system. Reduce processing times, improve accuracy, and enhance customer satisfaction through automated workflows.',
      benefits: [
        'Process claims 5x faster',
        'Reduce operational costs by 60%',
        'Automate policy renewals',
        'Enhance fraud detection',
        'Improve customer response time'
      ],
    },
    {
      id: 'government',
      icon: FileText,
      title: 'Government',
      description: 'Modernize public sector document management with our secure, efficient, and transparent solutions. Handle large-scale document processing while ensuring compliance with government regulations and security requirements.',
      benefits: [
        'Streamline administrative processes',
        'Ensure regulatory compliance',
        'Enhance public service delivery',
        'Maintain complete audit trails',
        'Secure sensitive information'
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="Use Cases"
        description="Discover how different industries benefit from Vyxlo's document management solutions"
        canonical="/use-cases"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry-Specific Solutions</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how Vyxlo's intelligent document management platform transforms operations across different industries. Our tailored solutions address unique challenges while delivering measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transforming Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered document management solutions are designed to meet the specific needs of various industries, delivering efficiency, security, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_) => (
              <div key={case_.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <case_.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{case_.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{case_.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {case_.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/use-cases/${case_.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Explore {case_.title} Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations across different industries have transformed their operations with Vyxlo's solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Vyxlo has revolutionized our loan processing workflow. We've reduced processing time by 85% while improving accuracy."
              </p>
              <p className="font-semibold">- Leading Regional Bank</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The AI-powered document analysis has transformed how we handle case files. Document retrieval is now instant and precise."
              </p>
              <p className="font-semibold">- International Law Firm</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Our claims processing efficiency has improved dramatically. What took days now takes hours."
              </p>
              <p className="font-semibold">- Major Insurance Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us to learn how Vyxlo can be tailored to your industry's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
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

export default UseCases;