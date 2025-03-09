import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FeatureDetails from './pages/FeatureDetails';
import HowItWorks from './pages/HowItWorks';
import UseCases from './pages/UseCases';
import UseCaseDetails from './pages/UseCaseDetails';
import Industries from './pages/Industries';
import IndustryDetails from './pages/IndustryDetails';
import KnowledgeBase from './pages/KnowledgeBase';
import Contact from './pages/Contact';
import RequestAccess from './pages/RequestAccess';
import AIAutomation from './pages/features/AIAutomation';
import Collaboration from './pages/features/Collaboration';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features/:featureId" element={<FeatureDetails />} />
                <Route path="/features/ai-automation" element={<AIAutomation />} />
                <Route path="/features/collaboration" element={<Collaboration />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/use-cases/:industryId" element={<UseCaseDetails />} />
                <Route path="/verticals" element={<Industries />} />
                <Route path="/verticals/:industryId" element={<IndustryDetails />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/request-access" element={<RequestAccess />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;