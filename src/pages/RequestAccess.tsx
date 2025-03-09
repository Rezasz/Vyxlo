import React from 'react';
import HubSpotForm from '../components/HubSpotForm';
import SEO from '../components/SEO';

const RequestAccess = () => {
  return (
    <>
      <SEO 
        title="Request Access"
        description="Get early access to SecureVault's intelligent platform. Let us understand your needs better."
        canonical="/request-access"
      />
      
      <div className="min-h-screen bg-gradient-to-r from-primary-600 to-primary-800 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Request Access</h1>
            <p className="mt-4 text-xl text-white/90">
              Get early access to SecureVault's intelligent platform
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8">
            <HubSpotForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestAccess;