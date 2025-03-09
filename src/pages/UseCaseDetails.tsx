import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, FileText, Briefcase, Scale, ArrowLeft,
  ChevronRight, ArrowRight, Shield, Clock, Users,
  FileCheck, Database, Lock, Cloud, Settings
} from 'lucide-react';
import SEO from '../components/SEO';

const useCases = {
  'banking-finance': {
    title: 'Banking & Finance',
    icon: Building2,
    description: 'Transform document management in the banking and financial sector with AI-powered automation and security.',
    challenges: [
      'High volume of sensitive documents',
      'Complex regulatory requirements',
      'Time-consuming manual processes',
      'Risk of human error',
      'Data security concerns'
    ],
    solutions: [
      {
        title: 'Automated Document Processing',
        description: 'AI-powered system for processing loan applications, KYC documents, and financial reports.',
        icon: FileCheck
      },
      {
        title: 'Compliance Management',
        description: 'Automated compliance checks and regulatory reporting capabilities.',
        icon: Shield
      },
      {
        title: 'Secure Document Storage',
        description: 'Bank-grade security for storing and managing sensitive financial documents.',
        icon: Lock
      }
    ],
    benefits: [
      '90% reduction in processing time',
      '99.9% accuracy in document classification',
      'Enhanced regulatory compliance',
      'Improved customer experience',
      'Reduced operational costs'
    ],
    features: [
      {
        title: 'Real-time Processing',
        description: 'Process documents instantly with AI-powered automation',
        icon: Clock
      },
      {
        title: 'Advanced Security',
        description: 'Military-grade encryption and access controls',
        icon: Shield
      },
      {
        title: 'Integration Ready',
        description: 'Connect with existing banking systems seamlessly',
        icon: Settings
      }
    ]
  },
  'legal-services': {
    title: 'Legal Services',
    icon: Scale,
    description: 'Streamline legal document management with intelligent organization and secure collaboration tools.',
    challenges: [
      'Complex document organization',
      'Time-consuming document review',
      'Secure client collaboration',
      'Version control issues',
      'Compliance requirements'
    ],
    solutions: [
      {
        title: 'Smart Document Organization',
        description: 'AI-powered categorization and intelligent search capabilities.',
        icon: Database
      },
      {
        title: 'Secure Collaboration',
        description: 'Protected sharing and real-time collaboration features.',
        icon: Users
      },
      {
        title: 'Version Control',
        description: 'Advanced version tracking and document history.',
        icon: Clock
      }
    ],
    benefits: [
      'Reduced document search time',
      'Enhanced client collaboration',
      'Improved document accuracy',
      'Better case management',
      'Streamlined workflows'
    ],
    features: [
      {
        title: 'Document Analytics',
        description: 'Gain insights from legal document analysis',
        icon: FileCheck
      },
      {
        title: 'Secure Access',
        description: 'Role-based access control and audit trails',
        icon: Lock
      },
      {
        title: 'Cloud Storage',
        description: 'Secure cloud-based document storage',
        icon: Cloud
      }
    ]
  },
  'insurance': {
    title: 'Insurance',
    icon: Briefcase,
    description: 'Accelerate insurance processes with automated document handling and intelligent claims processing.',
    challenges: [
      'High volume of claims documents',
      'Manual data extraction',
      'Policy management complexity',
      'Customer communication',
      'Fraud detection'
    ],
    solutions: [
      {
        title: 'Claims Automation',
        description: 'Automated claims processing and validation system.',
        icon: FileCheck
      },
      {
        title: 'Policy Management',
        description: 'Centralized policy document management and tracking.',
        icon: Database
      },
      {
        title: 'Customer Portal',
        description: 'Self-service document submission and tracking.',
        icon: Users
      }
    ],
    benefits: [
      'Faster claims processing',
      'Reduced operational costs',
      'Improved customer satisfaction',
      'Better fraud detection',
      'Streamlined workflows'
    ],
    features: [
      {
        title: 'Smart Processing',
        description: 'AI-powered document analysis and extraction',
        icon: Settings
      },
      {
        title: 'Secure Storage',
        description: 'Encrypted document storage and backup',
        icon: Lock
      },
      {
        title: 'Integration',
        description: 'Connect with existing insurance systems',
        icon: Cloud
      }
    ]
  },
  'government': {
    title: 'Government',
    icon: FileText,
    description: 'Modernize government document management with secure, efficient, and transparent solutions.',
    challenges: [
      'Large-scale document management',
      'Security requirements',
      'Public accessibility needs',
      'Legacy system integration',
      'Compliance mandates'
    ],
    solutions: [
      {
        title: 'Digital Transformation',
        description: 'Comprehensive digital document management system.',
        icon: Cloud
      },
      {
        title: 'Public Access Portal',
        description: 'Secure public document access and request system.',
        icon: Users
      },
      {
        title: 'Workflow Automation',
        description: 'Automated document routing and approval processes.',
        icon: Settings
      }
    ],
    benefits: [
      'Improved public service delivery',
      'Enhanced transparency',
      'Reduced processing times',
      'Better resource utilization',
      'Increased accessibility'
    ],
    features: [
      {
        title: 'Security',
        description: 'Government-grade security protocols',
        icon: Shield
      },
      {
        title: 'Automation',
        description: 'Streamlined document processing',
        icon: Settings
      },
      {
        title: 'Analytics',
        description: 'Comprehensive reporting and insights',
        icon: Database
      }
    ]
  }
};

const UseCaseDetails = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const useCase = useCases[industryId as keyof typeof useCases];

  if (!useCase) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Use case not found</h1>
            <Link to="/use-cases" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Return to use cases
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = useCase.icon;

  return (
    <>
      <SEO 
        title={`${useCase.title} Solutions`}
        description={useCase.description}
        canonical={`/use-cases/${industryId}`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Icon className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{useCase.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{useCase.description}</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCase.solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <SolutionIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCase.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <FeatureIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your {useCase.title} Operations?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get started with our industry-leading document management solutions today.
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

      {/* Navigation */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/use-cases" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Use Cases
          </Link>
        </div>
      </div>
    </>
  );
};

export default UseCaseDetails;