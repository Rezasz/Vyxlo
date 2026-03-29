import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ChevronRight, Shield, Clock, Users,
  FileCheck, Database, Lock, Cloud, Settings, Brain, Cpu,
  LineChart, Code, Workflow, Factory, Building2, FileText,
  Briefcase, Scale
} from 'lucide-react';
import SEO from '../components/SEO';

const industries = {
  'industries': {
    title: 'Industrial Solutions',
    icon: Factory,
    description: 'Transform industrial operations with AI-powered document management designed for manufacturing and production environments.',
    longDescription: `Our industrial solutions are engineered to meet the unique challenges of manufacturing and production environments. We understand the complex nature of industrial documentation and the need for seamless integration with existing operational systems.

    Our platform combines advanced AI capabilities with industry-specific workflows to create a comprehensive solution that enhances operational efficiency, ensures quality control, and maintains regulatory compliance. From production documentation to supply chain management, we provide the tools necessary for modern industrial operations.`,
    challenges: [
      'Complex production documentation',
      'Quality control records',
      'Supply chain documentation',
      'Regulatory compliance',
      'Equipment maintenance records',
      'Safety documentation',
      'ISO certification requirements',
      'Audit trail maintenance'
    ],
    solutions: [
      {
        title: 'Production Documentation',
        description: 'Comprehensive production record management system.',
        icon: FileCheck
      },
      {
        title: 'Quality Management',
        description: 'Integrated quality control documentation system.',
        icon: Database
      },
      {
        title: 'Compliance Management',
        description: 'Automated regulatory compliance and tracking.',
        icon: Shield
      },
      {
        title: 'Asset Management',
        description: 'Digital equipment and maintenance documentation.',
        icon: Settings
      }
    ],
    features: [
      {
        title: 'Production Records',
        description: 'Complete production documentation',
        icon: FileText,
        details: [
          'Process documentation',
          'Quality records',
          'Production logs',
          'Batch tracking'
        ]
      },
      {
        title: 'Quality Control',
        description: 'Quality management system',
        icon: Shield,
        details: [
          'Inspection records',
          'Non-conformance tracking',
          'Corrective actions',
          'Quality metrics'
        ]
      },
      {
        title: 'Maintenance',
        description: 'Equipment maintenance tracking',
        icon: Settings,
        details: [
          'Maintenance schedules',
          'Service records',
          'Equipment history',
          'Parts inventory'
        ]
      },
      {
        title: 'Integration',
        description: 'System integration capabilities',
        icon: Code,
        details: [
          'ERP integration',
          'MES connectivity',
          'SCADA systems',
          'IoT platforms'
        ]
      }
    ],
    benefits: [
      'Improved operational efficiency',
      'Enhanced quality control',
      'Better regulatory compliance',
      'Reduced downtime',
      'Streamlined maintenance',
      'Improved safety management',
      'Better resource utilization',
      'Cost reduction'
    ],
    metrics: {
      efficiency: '30% productivity increase',
      quality: '99.9% accuracy rate',
      compliance: '100% audit readiness',
      maintenance: '45% reduced downtime'
    }
  },
  'healthcare': {
    title: 'Healthcare Solutions',
    icon: FileText,
    description: 'Transform healthcare document management with AI-powered solutions designed for medical institutions and healthcare providers.',
    longDescription: `Our healthcare solutions are specifically engineered to meet the unique challenges of medical document management while ensuring HIPAA compliance and maintaining the highest standards of patient data security. We understand the critical nature of healthcare documentation and the need for immediate, secure access to patient records.

    Our platform combines advanced AI capabilities with healthcare-specific workflows to create a comprehensive solution that enhances patient care, streamlines operations, and ensures regulatory compliance. From electronic health records to medical imaging documentation, we provide the tools necessary for modern healthcare operations.`,
    challenges: [
      'HIPAA compliance requirements',
      'Complex patient record management',
      'Medical imaging documentation',
      'Clinical workflow efficiency',
      'Insurance documentation',
      'Regulatory compliance',
      'Interoperability requirements',
      'Patient data security'
    ],
    solutions: [
      {
        title: 'Patient Records Management',
        description: 'Comprehensive electronic health record (EHR) management system.',
        icon: FileCheck
      },
      {
        title: 'Clinical Documentation',
        description: 'Streamlined clinical documentation and workflow management.',
        icon: Database
      },
      {
        title: 'Compliance Management',
        description: 'Automated HIPAA compliance and regulatory tracking system.',
        icon: Shield
      },
      {
        title: 'Healthcare Analytics',
        description: 'Advanced analytics for patient data and operational insights.',
        icon: LineChart
      }
    ],
    features: [
      {
        title: 'Medical Records',
        description: 'Comprehensive patient record management',
        icon: FileText,
        details: [
          'Electronic health records',
          'Medical history tracking',
          'Treatment documentation',
          'Patient portal integration'
        ]
      },
      {
        title: 'Clinical Workflows',
        description: 'Streamlined clinical processes',
        icon: Workflow,
        details: [
          'Treatment planning',
          'Care coordination',
          'Referral management',
          'Appointment scheduling'
        ]
      },
      {
        title: 'Security & Compliance',
        description: 'HIPAA-compliant security measures',
        icon: Shield,
        details: [
          'Data encryption',
          'Access controls',
          'Audit logging',
          'Compliance monitoring'
        ]
      },
      {
        title: 'Integration',
        description: 'Healthcare system integration',
        icon: Code,
        details: [
          'EHR integration',
          'Lab system connectivity',
          'Pharmacy systems',
          'Insurance platforms'
        ]
      }
    ],
    benefits: [
      'Enhanced patient care quality',
      'Improved operational efficiency',
      'Reduced medical errors',
      'Better resource utilization',
      'Streamlined insurance processing',
      'Enhanced regulatory compliance',
      'Improved patient satisfaction',
      'Cost reduction'
    ],
    metrics: {
      efficiency: '80% faster record retrieval',
      accuracy: '99.9% documentation accuracy',
      compliance: '100% HIPAA compliance',
      satisfaction: '95% patient satisfaction'
    }
  },
  'legal': {
    title: 'Legal Solutions',
    icon: Scale,
    description: 'Empower legal professionals with intelligent document management designed for law firms and legal departments.',
    longDescription: `Our legal solutions are tailored to meet the specific needs of law firms and legal departments, providing secure and efficient document management capabilities. We understand the critical nature of legal documentation and the need for precise organization and instant retrieval.

    Our platform combines advanced AI capabilities with legal-specific workflows to create a comprehensive solution that enhances case management, ensures compliance, and streamlines collaboration. From case files to contract management, we provide the essential tools for modern legal operations.`,
    challenges: [
      'Case file organization',
      'Document version control',
      'Client confidentiality',
      'Regulatory compliance',
      'Collaboration requirements',
      'Research management',
      'Court filing deadlines',
      'Client communication'
    ],
    solutions: [
      {
        title: 'Case Management',
        description: 'Comprehensive case file organization and tracking system.',
        icon: FileCheck
      },
      {
        title: 'Document Control',
        description: 'Advanced version control and document history tracking.',
        icon: Database
      },
      {
        title: 'Secure Collaboration',
        description: 'Protected client and team collaboration platform.',
        icon: Users
      },
      {
        title: 'Compliance Tools',
        description: 'Automated compliance checking and deadline tracking.',
        icon: Clock
      }
    ],
    features: [
      {
        title: 'Case Files',
        description: 'Complete case management',
        icon: FileText,
        details: [
          'Document organization',
          'Case timelines',
          'Client records',
          'Court filings'
        ]
      },
      {
        title: 'Research Tools',
        description: 'Legal research management',
        icon: Brain,
        details: [
          'Research organization',
          'Citation management',
          'Precedent tracking',
          'Knowledge base'
        ]
      },
      {
        title: 'Client Portal',
        description: 'Secure client access',
        icon: Lock,
        details: [
          'Document sharing',
          'Communication tools',
          'Status updates',
          'Billing access'
        ]
      },
      {
        title: 'Workflow',
        description: 'Legal workflow automation',
        icon: Workflow,
        details: [
          'Task management',
          'Deadline tracking',
          'Team collaboration',
          'Status reporting'
        ]
      }
    ],
    benefits: [
      'Enhanced case management',
      'Improved client service',
      'Better compliance tracking',
      'Streamlined collaboration',
      'Reduced administrative time',
      'Enhanced security',
      'Better resource allocation',
      'Cost efficiency'
    ],
    metrics: {
      efficiency: '40% time savings',
      accuracy: '99.9% document accuracy',
      compliance: '100% deadline tracking',
      satisfaction: '95% client satisfaction'
    }
  },
  'financial-services': {
    title: 'Financial Services',
    icon: Building2,
    description: 'Transform financial operations with AI-powered document management tailored for banks and financial institutions.',
    longDescription: `Our financial services solutions are designed to meet the complex demands of modern banking and financial operations. We understand the critical nature of financial documentation and the need for absolute precision and security.

    Our platform combines advanced AI capabilities with finance-specific workflows to create a comprehensive solution that enhances operational efficiency, ensures compliance, and maintains the highest security standards. From transaction processing to regulatory reporting, we provide the tools necessary for modern financial operations.`,
    challenges: [
      'Regulatory compliance',
      'Transaction documentation',
      'Risk management',
      'Customer data security',
      'Audit requirements',
      'Fraud prevention',
      'Process automation',
      'Data integration'
    ],
    solutions: [
      {
        title: 'Transaction Processing',
        description: 'Automated financial document processing system.',
        icon: FileCheck
      },
      {
        title: 'Compliance Management',
        description: 'Comprehensive regulatory compliance tracking.',
        icon: Shield
      },
      {
        title: 'Risk Analytics',
        description: 'Advanced risk assessment and monitoring tools.',
        icon: LineChart
      },
      {
        title: 'Security Framework',
        description: 'Bank-grade security and encryption systems.',
        icon: Lock
      }
    ],
    features: [
      {
        title: 'Document Processing',
        description: 'Automated financial documentation',
        icon: FileText,
        details: [
          'Transaction records',
          'Account documentation',
          'Loan processing',
          'Investment tracking'
        ]
      },
      {
        title: 'Compliance Tools',
        description: 'Regulatory compliance management',
        icon: Shield,
        details: [
          'Policy enforcement',
          'Regulatory reporting',
          'Audit trails',
          'Risk monitoring'
        ]
      },
      {
        title: 'Analytics',
        description: 'Financial data analytics',
        icon: LineChart,
        details: [
          'Performance metrics',
          'Risk assessment',
          'Trend analysis',
          'Predictive modeling'
        ]
      },
      {
        title: 'Integration',
        description: 'System integration capabilities',
        icon: Code,
        details: [
          'Core banking systems',
          'Payment networks',
          'Trading platforms',
          'Regulatory systems'
        ]
      }
    ],
    benefits: [
      'Enhanced operational efficiency',
      'Improved compliance management',
      'Better risk control',
      'Reduced processing time',
      'Enhanced security measures',
      'Automated workflows',
      'Better customer service',
      'Cost reduction'
    ],
    metrics: {
      efficiency: '75% faster processing',
      accuracy: '99.99% transaction accuracy',
      compliance: '100% regulatory compliance',
      security: 'Bank-grade protection'
    }
  },
  'insurance': {
    title: 'Insurance Solutions',
    icon: Briefcase,
    description: 'Streamline insurance operations with intelligent document management designed for insurance providers.',
    longDescription: `Our insurance solutions are specifically designed to address the unique challenges of insurance document management. We understand the complex nature of insurance documentation and the need for efficient processing while maintaining accuracy and compliance.

    Our platform combines advanced AI capabilities with insurance-specific workflows to create a comprehensive solution that enhances claims processing, improves policy management, and ensures regulatory compliance. From policy documentation to claims processing, we provide the tools necessary for modern insurance operations.`,
    challenges: [
      'Claims processing efficiency',
      'Policy management',
      'Regulatory compliance',
      'Customer communication',
      'Fraud detection',
      'Risk assessment',
      'Document verification',
      'Data security'
    ],
    solutions: [
      {
        title: 'Claims Processing',
        description: 'Automated claims handling and verification system.',
        icon: FileCheck
      },
      {
        title: 'Policy Management',
        description: 'Comprehensive policy lifecycle management.',
        icon: Database
      },
      {
        title: 'Risk Assessment',
        description: 'Advanced risk evaluation and monitoring tools.',
        icon: Shield
      },
      {
        title: 'Customer Portal',
        description: 'Self-service customer documentation platform.',
        icon: Users
      }
    ],
    features: [
      {
        title: 'Claims Management',
        description: 'Automated claims processing',
        icon: FileText,
        details: [
          'Claims verification',
          'Document validation',
          'Payment processing',
          'Status tracking'
        ]
      },
      {
        title: 'Policy Administration',
        description: 'Complete policy lifecycle',
        icon: Database,
        details: [
          'Policy creation',
          'Renewals management',
          'Coverage tracking',
          'Premium calculation'
        ]
      },
      {
        title: 'Risk Management',
        description: 'Risk assessment tools',
        icon: Shield,
        details: [
          'Risk evaluation',
          'Fraud detection',
          'Compliance checking',
          'Audit trails'
        ]
      },
      {
        title: 'Integration',
        description: 'System integration capabilities',
        icon: Code,
        details: [
          'CRM integration',
          'Payment systems',
          'Regulatory reporting',
          'Third-party services'
        ]
      }
    ],
    benefits: [
      'Faster claims processing',
      'Improved policy management',
      'Enhanced risk assessment',
      'Better fraud detection',
      'Streamlined workflows',
      'Reduced processing costs',
      'Improved customer service',
      'Better compliance'
    ],
    metrics: {
      efficiency: '60% faster claims',
      accuracy: '99.9% processing accuracy',
      fraud: '95% detection rate',
      satisfaction: '90% customer satisfaction'
    }
  }
};

const IndustryDetails = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industries[industryId as keyof typeof industries];

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-charcoal">Vertical not found</h1>
            <Link to="/verticals" className="mt-4 inline-flex items-center text-gold hover:text-gold-dark">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Return to verticals
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <>
      <SEO
        title={`${industry.title}`}
        description={industry.description}
        canonical={`/verticals/${industryId}`}
      />

      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-gold/20 rounded-2xl backdrop-blur-sm">
                <Icon className="h-16 w-16 text-gold" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{industry.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal-muted whitespace-pre-line">{industry.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Key Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industry.solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 text-gold mb-4">
                    <SolutionIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-charcoal">{solution.title}</h3>
                  <p className="text-charcoal-muted">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gold-100 rounded-lg">
                      <FeatureIcon className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">{feature.title}</h3>
                      <p className="text-charcoal-muted">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gold">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(industry.metrics).map(([key, value]) => (
              <div key={key} className="bg-charcoal-900 p-8 rounded-lg text-center border border-gold/20">
                <div className="text-3xl font-bold text-gold mb-2">{value}</div>
                <div className="text-charcoal-border capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your {industry.title}?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get started with our industry-leading document management solutions today.
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

      {/* Navigation */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/verticals"
            className="inline-flex items-center text-gold hover:text-gold-dark font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Verticals
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndustryDetails;
