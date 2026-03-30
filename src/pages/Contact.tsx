import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Submit via HubSpot CRM link (existing submission channel)
      const params = new URLSearchParams({
        firstname: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      await fetch(
        `https://share-eu1.hsforms.com/2hA9NYy2CQMGnbVkgz53YHQ2douwh?${params.toString()}`,
        { method: 'GET', mode: 'no-cors' }
      );
      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setError('Something went wrong. Please try again or email us directly at hello@vyxlo.com.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-charcoal-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal-900 bg-white';

  return (
    <>
      <SEO
        title="Contact — VyXlo DMS"
        description="Get in touch with the VyXlo team. Whether you have a question, want a demo, or need help evaluating VyXlo for your team."
        canonical="/contact"
      />
      <div className="pt-20">

        {/* HERO */}
        <section className="bg-charcoal-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <MessageSquare className="h-4 w-4" />
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Talk to the VyXlo Team
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Whether you have a question, want a demo, or need help evaluating VyXlo for your team {"—"} we{"'"}d like to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* LEFT: CONTACT FORM */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="flex flex-col items-start gap-4 bg-charcoal-50 border border-charcoal-border rounded-lg p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-900">Message Received</h3>
                    <p className="text-charcoal-muted leading-relaxed">
                      Thanks for reaching out. We respond to all inquiries within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more..."
                        className={`${inputClass} resize-none h-32`}
                      />
                    </div>

                    {error && (
                      <p className="text-danger text-sm mt-1">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gold text-charcoal-900 font-semibold rounded-md hover:bg-gold-dark transition-colors disabled:opacity-60"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </button>
                  </form>
                )}
              </div>

              {/* RIGHT: CONTACT INFO */}
              <div className="lg:pt-14">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-8">Other Ways to Reach Us</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-0.5">Email</h3>
                      <a
                        href="mailto:hello@vyxlo.com"
                        className="text-charcoal-muted hover:text-gold transition-colors"
                      >
                        hello@vyxlo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-100 text-gold shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-0.5">Company</h3>
                      <p className="text-charcoal-muted">Kanz.ai — Dubai, UAE</p>
                    </div>
                  </div>

                  <div className="bg-charcoal-50 border border-charcoal-border rounded-lg p-5">
                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      We respond to all inquiries within 1 business day.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-charcoal-border">
                  <p className="text-sm font-medium text-charcoal-muted mb-4">Also useful</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/request-access"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-gold transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 text-gold" />
                      Request early access to VyXlo
                    </Link>
                    <Link
                      to="/features"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-gold transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 text-gold" />
                      Browse platform features
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;
