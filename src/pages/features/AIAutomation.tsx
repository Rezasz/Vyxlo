import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, ArrowLeft, ArrowRight, FileText, Database,
  Workflow, Zap, ChevronRight, Bot, Cpu, LineChart
} from 'lucide-react';
import SEO from '../../components/SEO';

const AIAutomation = () => {
  const features = [
    {
      icon: Bot,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding and processing document content.',
      metrics: '98% accuracy in text analysis'
    },
    {
      icon: Cpu,
      title: 'Machine Learning Models',
      description: 'State-of-the-art ML models for document classification and data extraction.',
      metrics: '95% classification accuracy'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'AI-driven insights and predictions based on document patterns.',
      metrics: '85% prediction accuracy'
    }
  ];

  const workflows = [
    {
      title: 'Document Classification',
      steps: [
        'Document upload and preprocessing',
        'AI-powered content analysis',
        'Automatic categorization',
        'Metadata extraction and tagging'
      ]
    },
    {
      title: 'Data Extraction',
      steps: [
        'OCR processing',
        'Key information identification',
        'Data validation and verification',
        'Structured data output'
      ]
    },
    {
      title: 'Workflow Automation',
      steps: [
        'Rule-based routing',
        'Automatic notifications',
        'Task assignment',
        'Progress tracking'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="AI-Powered Automation"
        description="Transform your document workflows with Vyxlo's advanced AI automation capabilities."
        canonical="/features/ai-automation"
      />

      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-gold/20 rounded-2xl backdrop-blur-sm mb-8">
              <Brain className="h-16 w-16 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Automation</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Transform your document management with cutting-edge AI automation powered by advanced machine learning algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Core AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gold-50 rounded-lg">
                    <feature.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{feature.title}</h3>
                </div>
                <p className="text-charcoal-muted mb-4">{feature.description}</p>
                <div className="text-sm font-medium text-gold">{feature.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Automated Workflows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border-t-4 border-gold"
              >
                <h3 className="text-xl font-bold mb-6 text-charcoal">{workflow.title}</h3>
                <div className="space-y-4">
                  {workflow.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="flex items-start"
                    >
                      <ChevronRight className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the power of AI-driven document automation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
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
            to="/features"
            className="inline-flex items-center text-gold hover:text-gold-dark font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Features
          </Link>
        </div>
      </div>
    </>
  );
};

export default AIAutomation;
