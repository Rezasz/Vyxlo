import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Zap, FlaskConical } from 'lucide-react';
import SEO from '../components/SEO';
import HubSpotForm from '../components/HubSpotForm';

const STEPS = [
  {
    number: '01',
    title: 'We review your submission',
    body: 'Our team reviews every request within 24 hours to understand your use case.',
  },
  {
    number: '02',
    title: 'Discovery call',
    body: 'A team member will reach out to schedule a 30-minute discovery call.',
  },
  {
    number: '03',
    title: 'Onboarding',
    body: 'We set up your VyXlo instance and walk you through onboarding.',
  },
];

const SOCIAL_PROOF = [
  { icon: FlaskConical, stat: '327', label: 'Automated tests' },
  { icon: Zap, stat: '4+', label: 'AI providers' },
  { icon: Shield, stat: 'Enterprise', label: 'Grade security' },
];

const RequestAccess = () => {
  return (
    <>
      <SEO
        title="Request Access — VyXlo DMS"
        description="Join the teams already using VyXlo to manage their most important documents. Tell us about your use case and we'll be in touch within 24 hours."
        canonical="/request-access"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <ArrowRight className="h-4 w-4" />
                Request Access
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get Early Access to VyXlo DMS
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Join the teams already using VyXlo to manage their most important documents. Tell us about your use case and we{"'"}ll be in touch within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* FORM + SIDEBAR */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* LEFT: HUBSPOT FORM */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-8">Tell Us About Your Team</h2>
                <div className="bg-white border border-charcoal-border rounded-lg p-8 shadow-sm">
                  <HubSpotForm />
                </div>
              </div>

              {/* RIGHT: WHAT HAPPENS NEXT */}
              <div className="lg:pt-14">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-8">What Happens Next</h2>

                <div className="space-y-6 mb-12">
                  {STEPS.map((step) => (
                    <div key={step.number} className="flex items-start gap-5">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-charcoal-900 text-gold text-sm font-bold shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-charcoal-muted leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-charcoal-border">
                  <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-5">
                    Why VyXlo
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {SOCIAL_PROOF.map((item) => (
                      <div
                        key={item.label}
                        className="bg-charcoal-50 border border-charcoal-border rounded-lg p-4 text-center"
                      >
                        <item.icon className="h-5 w-5 text-gold mx-auto mb-2" />
                        <p className="text-xl font-bold text-charcoal-900">{item.stat}</p>
                        <p className="text-xs text-charcoal-muted mt-0.5">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-charcoal-50 border border-charcoal-border rounded-lg p-5 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    We respond to all access requests within 24 hours. No spam, no automated sequences {"—"} a real conversation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RequestAccess;
