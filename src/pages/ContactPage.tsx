import { useState } from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

const industries = [
  'Oil & Gas / Petrochemical',
  'Power Generation',
  'Marine & Offshore',
  'Mining',
  'Emergency Response',
  'Other / Not sure yet',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const company = (formData.get('company') as string)?.trim() || null;
    const industry = (formData.get('industry') as string) || null;
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      company,
      industry,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting the form. Please try again or email us directly.');
      return;
    }

    setStatus('success');
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Demo or Site Assessment"
        subtitle="Tell us about your facility and inspection challenges. Our team will help you identify the right robot and build a deployment plan tailored to your site."
        image="https://images.pexels.com/photos/32845690/pexels-photo-32845690.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                {status === 'success' ? (
                  <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
                    <CheckCircle2 size={48} className="mx-auto text-teal-600" />
                    <h2 className="mt-4 font-display text-xl font-bold text-ink-900">Thank you for reaching out</h2>
                    <p className="mt-2 text-ink-600">
                      We have received your message and will get back to you within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 btn-secondary"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-100 bg-white p-8 shadow-sm">
                    <h2 className="font-display text-xl font-bold text-ink-900">Get in Touch</h2>
                    <p className="mt-2 text-sm text-ink-500">Fields marked with * are required.</p>

                    {status === 'error' && (
                      <div className="mt-6 flex items-start gap-3 rounded-lg bg-danger-50 border border-danger-500/20 p-4 text-sm text-danger-700">
                        <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-ink-700">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          disabled={status === 'submitting'}
                          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-ink-700">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          disabled={status === 'submitting'}
                          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-ink-700">Company</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          disabled={status === 'submitting'}
                          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-ink-700">Industry</label>
                        <select
                          id="industry"
                          name="industry"
                          disabled={status === 'submitting'}
                          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                          defaultValue=""
                        >
                          <option value="" disabled>Select an industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className="block text-sm font-semibold text-ink-700">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        disabled={status === 'submitting'}
                        className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50 resize-y"
                        placeholder="Tell us about your facility, inspection challenges, and what you are looking for."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="mt-6 btn-primary w-full disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={150}>
                <div className="rounded-2xl bg-ink-900 p-8 text-white">
                  <h3 className="font-display text-lg font-bold">Direct Contact</h3>
                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="flex-shrink-0 mt-0.5 text-teal-400" />
                      <div>
                        <p className="text-sm text-ink-400">Email</p>
                        <a href="mailto:info@hazlocrobotics.com" className="text-sm font-medium hover:text-gold-400 transition-colors">info@hazlocrobotics.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="flex-shrink-0 mt-0.5 text-teal-400" />
                      <div>
                        <p className="text-sm text-ink-400">North & Latin America Office</p>
                        <p className="text-sm font-medium">Houston, TX, USA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="flex-shrink-0 mt-0.5 text-teal-400" />
                      <div>
                        <p className="text-sm text-ink-400">Manufacturing Partner — Qiteng Robotics</p>
                        <p className="text-sm font-medium">Shenzhen, China</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="rounded-2xl border border-ink-100 bg-white p-6">
                  <h3 className="font-display text-base font-bold text-ink-900">What happens next?</h3>
                  <ol className="mt-4 space-y-3 text-sm text-ink-600">
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">1</span>
                      <span>We review your message and route it to the right specialist.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">2</span>
                      <span>A team member reaches out within one business day to schedule a call.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">3</span>
                      <span>We discuss your site, recommend a robot, and plan a demo or assessment.</span>
                    </li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
