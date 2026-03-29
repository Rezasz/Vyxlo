import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import EditableContent from '../components/EditableContent';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our team to learn more about Kanz.ai"
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EditableContent
              id="contact-hero-title"
              defaultContent="Contact Us"
              type="heading"
            />
            <EditableContent
              id="contact-hero-description"
              defaultContent="Get in touch with our team to learn more about Kanz.ai"
              type="paragraph"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <EditableContent
                id="contact-info-title"
                defaultContent="Get in Touch"
                type="heading"
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <EditableContent
                      id="contact-email"
                      defaultContent="contact@vyxlo.com"
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-charcoal">Phone</h3>
                    <EditableContent
                      id="contact-phone"
                      defaultContent="+971-42327866"
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-charcoal">Address</h3>
                    <EditableContent
                      id="contact-address"
                      defaultContent="702-Opal Tower-Business Bay-Dubai-UAE"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CRM Link */}
            <div className="flex flex-col items-center justify-center bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Us Through Our CRM</h2>
              <p className="text-charcoal-muted mb-8 text-center">
                Please click below to access our contact form and we'll get back to you as soon as possible.
              </p>
              <a
                href="https://share-eu1.hsforms.com/2hA9NYy2CQMGnbVkgz53YHQ2douwh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-gold text-charcoal-900 hover:bg-gold-dark transition-colors"
              >
                Our CRM
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
