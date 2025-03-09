import React from 'react';
import { Link } from 'react-router-dom';
import {
  Database, Brain, Zap, Shield, Scale, ArrowRightCircle,
  Settings, RefreshCcw, Lock, MessageSquare, FileText, Users,
  Cloud, Search, ChevronRight, ArrowRight, Code, Globe,
  Layers, Workflow, Bell, LineChart, Cpu, Network,
  Key, Boxes, GitMerge, Repeat
} from 'lucide-react';
import SEO from '../components/SEO';
import WorkflowDiagram from '../components/WorkflowDiagram';
import ProcessFlow from '../components/ProcessFlow';

const HowItWorks = () => {
  const productOverview = {
    title: "Vyxlo.com Product Overview",
    description: "An advanced Integrated Financial Data and Communication Platform (IFDCP) designed to streamline financial data management, ensure compliance, and enhance communication across financial institutions."
  };

  const dataWorkflow = [
    {
      title: "Data Aggregation",
      description: "Extract and normalize data from multiple sources through standard APIs"
    },
    {
      title: "Security Layer",
      description: "Apply encryption, access controls, and automated compliance checks"
    },
    {
      title: "AI Processing",
      description: "Utilize AI for predictive insights and risk management"
    },
    {
      title: "Communication",
      description: "Enable secure messaging and real-time collaboration"
    }
  ];

  const keyFeatures = [
    {
      icon: Database,
      title: "Unified Financial Data Integration",
      description: "Consolidate financial data from diverse sources with built-in normalization and accuracy checks.",
      details: [
        "Multi-source data integration",
        "Automated data normalization",
        "Real-time synchronization",
        "Data quality assurance"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Compliance & Security",
      description: "Comprehensive security measures with built-in compliance management for GDPR, PSD2, and Basel III.",
      details: [
        "Multi-factor authentication",
        "End-to-end encryption",
        "Automated compliance checks",
        "Complete audit trails"
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced analytics and reporting capabilities powered by artificial intelligence.",
      details: [
        "Predictive risk assessment",
        "Real-time data processing",
        "Custom dashboards",
        "Automated reporting"
      ]
    },
    {
      icon: Key,
      title: "Secure API Management",
      description: "Comprehensive API management with robust security controls.",
      details: [
        "RESTful API support",
        "GraphQL integration",
        "Role-based access",
        "API monitoring"
      ]
    }
  ];

  const architectureComponents = [
    {
      icon: Boxes,
      title: "Microservices Architecture",
      description: "Cloud-native design with independent, scalable services",
      metrics: "99.99% uptime"
    },
    {
      icon: GitMerge,
      title: "Integration Framework",
      description: "Flexible integration with existing systems",
      metrics: "100+ connectors"
    },
    {
      icon: Shield,
      title: "Security Layer",
      description: "Multi-layered security architecture",
      metrics: "Military-grade"
    },
    {
      icon: Repeat,
      title: "Continuous Processing",
      description: "Real-time data processing and updates",
      metrics: "<100ms latency"
    }
  ];

  const implementationSteps = [
    {
      title: "Requirements Analysis",
      description: "Detailed assessment of your organization's needs and existing systems"
    },
    {
      title: "Platform Configuration",
      description: "Custom setup and configuration based on your requirements"
    },
    {
      title: "Data Migration",
      description: "Secure transfer and validation of existing data"
    },
    {
      title: "Integration Setup",
      description: "Connection with your existing systems and workflows"
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing of all features and integrations"
    },
    {
      title: "Training & Deployment",
      description: "User training and phased production rollout"
    }
  ];

  return (
    <>
      <SEO 
        title="How Vyxlo Works"
        description="Discover the advanced technology and processes behind Vyxlo's intelligent financial data and communication platform"
        canonical="/how-it-works"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{productOverview.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {productOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Data Workflow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Vyxlo Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform follows a sophisticated workflow to ensure secure and efficient data processing.
            </p>
          </div>
          <WorkflowDiagram steps={dataWorkflow} />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the powerful features that make Vyxlo the leading solution for financial data management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a modern, scalable architecture designed for enterprise performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureComponents.map((component, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <component.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-lg font-semibold">{component.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="text-sm font-medium text-blue-600">{component.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures a smooth transition and successful deployment.
            </p>
          </div>
          <ProcessFlow steps={implementationSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the power of intelligent financial data management.
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

export default HowItWorks;