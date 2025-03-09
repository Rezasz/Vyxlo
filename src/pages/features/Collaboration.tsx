import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, ArrowLeft, ArrowRight, MessageSquare, History,
  Layers, Share2, Lock, ChevronRight, UserPlus, GitBranch,
  Bell, Clock, FileText, Edit, Eye, Activity
} from 'lucide-react';
import SEO from '../../components/SEO';

const Collaboration = () => {
  const features = [
    {
      icon: Edit,
      title: 'Real-time Co-editing',
      description: 'Multiple users can work on the same document simultaneously with live updates.',
      metrics: 'Zero latency editing'
    },
    {
      icon: History,
      title: 'Version Control',
      description: 'Track changes, compare versions, and restore previous document states.',
      metrics: 'Unlimited version history'
    },
    {
      icon: MessageSquare,
      title: 'Contextual Comments',
      description: 'Add comments and annotations directly within documents.',
      metrics: 'Threaded discussions'
    }
  ];

  const collaborationTools = [
    {
      title: 'Team Workspaces',
      features: [
        'Dedicated spaces for teams and projects',
        'Custom workspace permissions',
        'Resource sharing and organization',
        'Team activity dashboard'
      ]
    },
    {
      title: 'Document Sharing',
      features: [
        'Granular access controls',
        'Secure external sharing',
        'Link expiration settings',
        'Access tracking and revocation'
      ]
    },
    {
      title: 'Activity Tracking',
      features: [
        'Real-time activity feed',
        'User action history',
        'Document audit trails',
        'Usage analytics'
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular permissions and role-based access management'
    },
    {
      icon: Eye,
      title: 'Audit Logging',
      description: 'Comprehensive tracking of all document activities'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Customizable alerts for important document events'
    },
    {
      icon: Activity,
      title: 'Activity Monitoring',
      description: 'Real-time tracking of user interactions'
    }
  ];

  return (
    <>
      <SEO 
        title="Enhanced Collaboration"
        description="Foster teamwork with Vyxlo's powerful collaboration features designed for modern enterprises."
        canonical="/features/collaboration"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-8">
              <Users className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enhanced Collaboration</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Transform how your team works together with powerful real-time collaboration features designed for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Collaboration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-neutral-600 mb-4">{feature.description}</p>
                <div className="text-sm font-medium text-primary-600">{feature.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Collaboration Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-neutral-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6">{tool.title}</h3>
                <div className="space-y-4">
                  {tool.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <ChevronRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Security & Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Collaboration Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Document Review</h3>
              <p className="text-neutral-600">
                Streamline document review processes with real-time collaboration, comments, and version tracking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <UserPlus className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Team Projects</h3>
              <p className="text-neutral-600">
                Enable teams to work together seamlessly on shared documents and projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <GitBranch className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Content Management</h3>
              <p className="text-neutral-600">
                Manage content creation and approval workflows with advanced versioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Team Collaboration</h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the power of real-time collaboration and streamlined document management.
          </p>
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
      </section>

      {/* Navigation */}
      <div className="bg-neutral-50">
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

export default Collaboration;