import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Brain, Shield, Zap, ArrowLeft, Check, Users, LineChart, Scale,
  Layers, Workflow, Database, Lock, Cloud, Zap as Lightning,
  FileSearch, Settings, Bell, ChevronRight, ArrowRight,
  Code, Globe, FileCheck, AlertTriangle, Clock, Repeat,
  BarChart, PieChart, TrendingUp, FileText, UserCheck, Key
} from 'lucide-react';
import SEO from '../components/SEO';

const features = {
  'ai-automation': {
    title: 'AI-Powered Automation',
    icon: Brain,
    description: 'Transform your document workflows with advanced AI automation powered by cutting-edge machine learning models.',
    longDescription: `Our AI-powered automation platform represents the pinnacle of intelligent document processing. By leveraging state-of-the-art machine learning algorithms and neural networks, we deliver unparalleled automation capabilities that transform how organizations handle documents.

    Our system continuously learns and adapts to your organization's specific needs, improving accuracy and efficiency over time. From intelligent document classification to automated data extraction and smart workflow routing, our AI automation streamlines every aspect of document management.`,
    benefits: [
      'Reduce manual processing time by up to 90%',
      'Achieve 99.9% accuracy in document classification',
      'Automate complex workflow decisions',
      'Extract data with near-human accuracy',
      'Scale processing capacity instantly',
      'Eliminate manual data entry errors',
      'Reduce operational costs significantly',
      'Improve compliance and audit readiness'
    ],
    features: [
      {
        title: 'Neural Document Processing',
        description: 'Advanced neural networks analyze and understand document content with human-like comprehension.',
        icon: Brain,
        stats: '99.9% accuracy'
      },
      {
        title: 'Intelligent Classification',
        description: 'Automatically categorize and route documents based on content, context, and business rules.',
        icon: FileCheck,
        stats: '90% time saved'
      },
      {
        title: 'Adaptive Learning',
        description: 'System continuously learns from user interactions and feedback to improve accuracy.',
        icon: Repeat,
        stats: 'Self-improving'
      },
      {
        title: 'Real-time Processing',
        description: 'Process documents instantly as they arrive, with immediate data extraction and routing.',
        icon: Clock,
        stats: '<1s processing'
      }
    ],
    techSpecs: [
      'Built on TensorFlow and PyTorch',
      'Natural Language Processing with BERT',
      'Computer Vision with ResNet',
      'Automated Machine Learning (AutoML)',
      'GPU-accelerated processing',
      'Distributed computing architecture',
      'Real-time processing capabilities',
      'Scalable microservices infrastructure'
    ],
    metrics: [
      {
        label: 'Processing Speed',
        value: '< 1 second',
        description: 'Average document processing time'
      },
      {
        label: 'Accuracy',
        value: '99.9%',
        description: 'Document classification accuracy'
      },
      {
        label: 'Time Saved',
        value: '90%',
        description: 'Reduction in manual processing'
      },
      {
        label: 'Cost Reduction',
        value: '75%',
        description: 'Decrease in operational costs'
      }
    ],
    useCases: [
      {
        title: 'Invoice Processing',
        description: 'Automatically extract and validate invoice data, route for approval, and update accounting systems.',
        icon: FileText
      },
      {
        title: 'Contract Analysis',
        description: 'Extract key terms, identify risks, and ensure compliance with company policies.',
        icon: FileCheck
      },
      {
        title: 'Customer Onboarding',
        description: 'Process KYC documents, verify identity, and automate account setup.',
        icon: UserCheck
      }
    ]
  },
  'security': {
    title: 'Enterprise Security',
    icon: Shield,
    description: 'Bank-grade security ensuring your documents are protected with the highest standards.',
    longDescription: `Our enterprise security framework is built on the principle of defense in depth, implementing multiple layers of security controls to protect your sensitive documents and data. We combine advanced encryption, rigorous access controls, and continuous monitoring to ensure the highest level of security.

    From military-grade encryption at rest and in transit to granular access controls and comprehensive audit logging, every aspect of our security architecture is designed to meet and exceed the most stringent security requirements.`,
    benefits: [
      'Military-grade encryption for all data',
      'Granular role-based access control',
      'Complete audit trail of all actions',
      'Automated threat detection and response',
      'Regular security assessments',
      'Compliance with global standards',
      'Zero-trust security model',
      'Advanced DLP capabilities'
    ],
    features: [
      {
        title: 'Advanced Encryption',
        description: 'AES-256 encryption for data at rest and in transit, with secure key management.',
        icon: Lock,
        stats: 'Military-grade'
      },
      {
        title: 'Access Control',
        description: 'Fine-grained permissions and role-based access management with MFA.',
        icon: Key,
        stats: 'Zero-trust model'
      },
      {
        title: 'Threat Detection',
        description: 'Real-time monitoring and automated response to security threats.',
        icon: AlertTriangle,
        stats: '24/7 monitoring'
      },
      {
        title: 'Audit Logging',
        description: 'Comprehensive logging and monitoring of all system activities.',
        icon: FileCheck,
        stats: 'Complete history'
      }
    ],
    techSpecs: [
      'AES-256 bit encryption',
      'TLS 1.3 for data in transit',
      'FIPS 140-2 compliant HSM',
      'OAuth 2.0 and OIDC support',
      'SAML 2.0 integration',
      'Real-time threat monitoring',
      'Automated backup encryption',
      'Secure key rotation'
    ],
    metrics: [
      {
        label: 'Encryption',
        value: '256-bit',
        description: 'Military-grade encryption'
      },
      {
        label: 'Compliance',
        value: '100%',
        description: 'Regulatory compliance'
      },
      {
        label: 'Monitoring',
        value: '24/7',
        description: 'Security monitoring'
      },
      {
        label: 'Response Time',
        value: '< 15min',
        description: 'Security incident response'
      }
    ],
    useCases: [
      {
        title: 'Financial Services',
        description: 'Secure handling of sensitive financial documents and customer data.',
        icon: Lock
      },
      {
        title: 'Healthcare',
        description: 'HIPAA-compliant document management and patient data protection.',
        icon: Shield
      },
      {
        title: 'Legal',
        description: 'Secure storage and sharing of confidential legal documents.',
        icon: FileCheck
      }
    ]
  },
  'integrations': {
    title: 'Seamless Integrations',
    icon: Zap,
    description: 'Connect and extend your document management capabilities.',
    longDescription: `Our platform seamlessly integrates with your existing tools and workflows through comprehensive APIs and pre-built connectors. Extend functionality and automate processes across your entire tech stack.`,
    benefits: [
      'Pre-built integrations with popular platforms',
      'Custom API development support',
      'Webhook support for real-time updates',
      'Bi-directional data synchronization',
      'Automated workflow triggers',
      'Extended functionality through plugins'
    ],
    features: [
      {
        title: 'API Integration',
        description: 'RESTful APIs for seamless integration with existing systems.',
        icon: Settings,
        stats: '99.9% uptime'
      },
      {
        title: 'Real-time Sync',
        description: 'Instant data synchronization across all connected systems.',
        icon: Lightning,
        stats: '<100ms latency'
      },
      {
        title: 'Notifications',
        description: 'Configurable alerts and notifications for important events.',
        icon: Bell,
        stats: 'Real-time updates'
      }
    ],
    techSpecs: [
      'RESTful API architecture',
      'WebSocket support',
      'OAuth 2.0 authentication',
      'Rate limiting and throttling'
    ]
  },
  'collaboration': {
    title: 'Enhanced Collaboration',
    icon: Users,
    description: 'Foster teamwork with powerful collaboration features.',
    longDescription: `Enable seamless collaboration across your organization with our comprehensive suite of team-focused features. Share, edit, and manage documents in real-time with advanced version control.`,
    benefits: [
      'Real-time document collaboration',
      'Version control and history',
      'Team workspaces',
      'Document sharing and permissions',
      'Comments and annotations',
      'Activity tracking'
    ],
    features: [
      {
        title: 'Real-time Editing',
        description: 'Collaborate on documents simultaneously with team members.',
        icon: Users,
        stats: 'Zero latency'
      },
      {
        title: 'Version Control',
        description: 'Track changes and maintain document history.',
        icon: Layers,
        stats: 'Unlimited versions'
      },
      {
        title: 'Team Spaces',
        description: 'Organized workspaces for different teams and projects.',
        icon: Database,
        stats: 'Unlimited teams'
      }
    ],
    techSpecs: [
      'Operational Transform algorithm',
      'Conflict resolution',
      'Change tracking',
      'Real-time collaboration'
    ]
  },
  'analytics': {
    title: 'Advanced Analytics',
    icon: LineChart,
    description: 'Gain insights into your document workflows.',
    longDescription: `Transform your document management with data-driven insights. Our analytics platform provides comprehensive visibility into document workflows, user behavior, and system performance.`,
    benefits: [
      'Custom dashboards and reports',
      'Usage analytics and trends',
      'Performance metrics',
      'User behavior analysis',
      'Document lifecycle tracking',
      'ROI measurement'
    ],
    features: [
      {
        title: 'Custom Dashboards',
        description: 'Build and customize analytics dashboards.',
        icon: LineChart,
        stats: 'Real-time metrics'
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor system and user performance metrics.',
        icon: Settings,
        stats: 'Sub-second updates'
      },
      {
        title: 'Export & Share',
        description: 'Export and share reports in multiple formats.',
        icon: Cloud,
        stats: 'Multiple formats'
      }
    ],
    techSpecs: [
      'Real-time analytics',
      'Custom report builder',
      'Data visualization',
      'Export capabilities'
    ]
  },
  'compliance': {
    title: 'Compliance Management',
    icon: Scale,
    description: 'Stay compliant with industry regulations.',
    longDescription: `Ensure compliance with industry regulations through our comprehensive compliance management tools. Automate compliance processes and maintain detailed audit trails.`,
    benefits: [
      'Automated compliance checks',
      'Policy enforcement',
      'Audit trail maintenance',
      'Risk assessment',
      'Regulatory reporting',
      'Compliance monitoring'
    ],
    features: [
      {
        title: 'Policy Management',
        description: 'Create and enforce compliance policies.',
        icon: Shield,
        stats: 'Automated enforcement'
      },
      {
        title: 'Audit Trails',
        description: 'Maintain detailed records of all activities.',
        icon: Database,
        stats: 'Complete history'
      },
      {
        title: 'Risk Management',
        description: 'Identify and mitigate compliance risks.',
        icon: Scale,
        stats: 'Real-time monitoring'
      }
    ],
    techSpecs: [
      'Policy automation',
      'Audit logging',
      'Risk assessment',
      'Compliance reporting'
    ]
  }
};

const FeatureDetails = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const feature = features[featureId as keyof typeof features];

  if (!feature) {
    return (
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-neutral-900">Feature not found</h1>
            <Link to="/features" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Return to features
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <>
      <SEO 
        title={feature.title}
        description={feature.description}
        canonical={`/features/${featureId}`}
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Icon className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{feature.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{feature.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-neutral-600 mb-8">{feature.longDescription}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feature.features.map((subFeature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary-50 rounded-lg">
                      <subFeature.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{subFeature.title}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">{subFeature.description}</p>
                  <div className="text-sm font-medium text-primary-600">{subFeature.stats}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feature.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {feature.techSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-primary-600" />
                    <span className="text-neutral-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8">Experience the power of {feature.title} today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-neutral-50 transition-colors"
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
        </div>

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/features" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Features
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeatureDetails;