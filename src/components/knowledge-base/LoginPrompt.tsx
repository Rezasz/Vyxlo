import React from 'react';
import { Lock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPrompt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center">
              <FileText className="mx-auto h-12 w-12 text-gold" />
              <h2 className="mt-4 text-3xl font-bold text-charcoal">Knowledge Base</h2>
              <p className="mt-2 text-charcoal-muted">
                Access our comprehensive collection of technical documentation, guides, and resources.
              </p>
            </div>

            <div className="mt-8 bg-charcoal-50 p-4 rounded-lg border border-charcoal-border">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-charcoal-muted" />
                <p className="ml-2 text-sm text-charcoal-muted">
                  Use your partner's Login Credentials to Access the Knowledge base
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/login')}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-charcoal-900 bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                Login to Access
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-charcoal-muted">
                Contact your account manager if you need access credentials.
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-charcoal-50 border-t border-charcoal-border">
            <div className="text-center text-sm text-charcoal-muted">
              <p>Protected documents include:</p>
              <ul className="mt-2 space-y-1">
                <li>Technical Documentation</li>
                <li>Integration Guides</li>
                <li>API References</li>
                <li>Best Practices</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrompt;
