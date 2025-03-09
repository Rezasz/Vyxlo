import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Zap, Search, Workflow, Globe, 
  MessageSquare, Wrench, FileBox, Network, Building,
  Users, Lock, Cloud, Headphones, ChevronRight,
  ArrowRight, LineChart, Scale, Cpu, Database,
  FileText, Settings, Bell, Code, GitMerge
} from 'lucide-react';
import SEO from '../components/SEO';

const Features = () => {
  const mainFeatures = [
    {
      id: 'ai-automation',
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Transform your document workflows with advanced AI automation powered by cutting-edge machine learning models.',
      benefits: [
        'Reduce manual processing by 90%',
        'Achieve 99.9% accuracy',
        'Automate complex workflows',
        'Real-time processing'
      ],
      metrics: {
        accuracy: '99.9%',
        speed: '<1s',
        reduction: '90%'
      },
      techStack: [
        'TensorFlow',
        'PyTorch',
        'BERT NLP',
        'Computer Vision'
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures ensuring your documents are protected with the highest standards of data protection.',
      benefits: [
        'Military-grade encryption',
        'Zero-trust security model',
        'Complete audit trails',
        '24/7 monitoring'
      ],
      metrics: {
        encryption: '256-bit',
        compliance: '100%',
        monitoring: '24/7'
      },
      techStack: [
        'AES-256',
        'TLS 1.3',
        'FIPS 140-2',
        'OAuth 2.0'
      ]
    },
    {
      id: 'integrations',
      icon: Network,
      title: 'Seamless Integrations',
      description: 'Connect with your existing tools and systems through our comprehensive integration capabilities.',
      benefits: [
        'API-first architecture',
        'Pre-built connectors',
        'Custom integration support',
        'Real-time synchronization'
      ],
      metrics: {
        apis: '100+',
        uptime: '99.99%',
        sync: 'Real-time'
      },
      techStack: [
        'RESTful APIs',
        'GraphQL',
        'WebSockets',
        'OAuth'
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Cpu,
      title: 'Advanced Processing',
      description: 'High-performance document processing engine',
      capabilities: [
        'Multi-threaded processing',
        'GPU acceleration',
        'Distributed computing',
        'Load balancing'
      ]
    },
    {
      icon: Database,
      title: 'Smart Storage',
      description: 'Intelligent document storage and retrieval',
      capabilities: [
        'Content-based indexing',
        'Full-text search',
        'Version control',
        'Automated backups'
      ]
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Comprehensive development resources',
      capabilities: [
        'REST API',
        'SDKs',
        'Webhooks',
        'Documentation'
      ]
    },
    {
      icon: GitMerge,
      title: 'Workflow Engine',
      description: 'Customizable workflow automation',
      capabilities: [
        'Visual workflow builder',
        'Custom rules',
        'Conditional routing',
        'Status tracking'
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Building,
      title: 'Enterprise Ready',
      description: 'Built for large-scale deployments',
      points: [
        'High availability',
        'Disaster recovery',
        'SLA guarantees',
        'Enterprise support'
      ]
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team productivity tools',
      points: [
        'Role-based access',
        'Team workspaces',
        'Activity tracking',
        'Audit logs'
      ]
    },
    {
      icon: LineChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting and analytics',
      points: [
        'Custom dashboards',
        'Usage metrics',
        'Performance analytics',
        'Trend analysis'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Features"
        description="Explore Vyxlo's comprehensive suite of AI-driven document management features designed for modern enterprises."
        canonical="/features"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Features
            </h1>
            <p className="text-xl opacity-90">
              Experience the power of AI-driven document management with our comprehensive feature set designed for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines advanced AI, enterprise-grade security, and seamless integrations to deliver a complete document management solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(feature.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-4">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {feature.techStack.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/features/${feature.id}`}
                      className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge technology to deliver unmatched performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built to meet the demanding needs of modern enterprises with scalability and security in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Document Management?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us to learn how our features can be tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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

export default Features;