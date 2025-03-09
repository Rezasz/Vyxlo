import React from 'react';
import { Bell } from 'lucide-react';
import SEO from '../components/SEO';
import HubSpotForm from '../components/HubSpotForm';

const StayTuned = () => {
  return (
    <>
      <SEO 
        title="Stay Tuned"
        description="Stay updated with the latest news and updates from Vyxlo.com"
        canonical="/stay-tuned"
      />
      
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Bell className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Stay Tuned</h1>
            <p className="text-xl text-white/90">
              Be the first to know about our latest updates, features, and launches
            </p>
          </div>

          <div className="bg-white shadow-2xl rounded-lg p-8">
            <HubSpotForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default StayTuned;