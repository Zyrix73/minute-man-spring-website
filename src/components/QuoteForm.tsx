import { useState } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { submitQuote, QuoteSubmission } from '../lib/supabase';

const springTypes = [
  'Compression Spring',
  'Extension Spring',
  'Torsion Spring',
  'Double Torsion Spring',
  'Barrel Spring',
  'Wire Form',
  'Not Sure / Need Consultation',
];

const industryOptions = [
  'Aerospace & Defense',
  'Automotive & Transportation',
  'Electronics & Technology',
  'Energy & Power',
  'Industrial Equipment',
  'Medical & Life Sciences',
  'Other',
];

const initialState: QuoteSubmission = {
  first_name: '',
  last_name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  spring_type: '',
  quantity: '',
  message: '',
};

export default function QuoteForm() {
  const [form, setForm] = useState<QuoteSubmission>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      await submitQuote(form);
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
      setErrorMessage('There was a problem submitting your request. Please call us directly at 508-299-6100.');
    }
  };

  const inputClass =
    'w-full bg-white border border-gray-300 text-[#4A4A4A] px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors duration-200 placeholder-gray-400';

  return (
    <section id="quote" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-6 leading-tight">
              Request a Free Quote
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-8">
              Tell us about your project. Our team will review your requirements and respond with a
              quote — often the same business day.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-1">
                    Submit Your Details
                  </h4>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Fill in the form with your project specs, spring type, and quantity needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-1">
                    Engineering Review
                  </h4>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Our team evaluates your requirements and asks any clarifying questions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-1">
                    Receive Your Quote
                  </h4>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Get a competitive, itemized quote — typically the same business day.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#1B3A6B]">
              <div className="text-[#6B7FA3] text-xs font-semibold uppercase tracking-widest mb-2">
                Prefer to Call?
              </div>
              <a
                href="tel:+15082996100"
                className="text-white text-2xl font-black hover:text-[#6B7FA3] transition-colors"
              >
                508-299-6100
              </a>
              <div className="text-gray-400 text-sm mt-1">
                34 Howe Ave, Millbury, MA 01527
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-96 text-center p-12 bg-white border border-gray-200">
                <CheckCircle size={64} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-black text-[#1B3A6B] mb-3">Quote Request Received!</h3>
                <p className="text-[#4A4A4A] leading-relaxed max-w-sm">
                  Thank you for reaching out. A member of our team will review your project details
                  and respond promptly — often the same business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide underline underline-offset-4 hover:text-[#6B7FA3] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      value={form.last_name}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Manufacturing Co."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select Industry</option>
                      {industryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Spring Type Needed
                    </label>
                    <select
                      name="spring_type"
                      value={form.spring_type}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select Spring Type</option>
                      {springTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 pieces"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5">
                    Project Details & Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your spring specifications: wire diameter, outer diameter, free length, load requirements, material preferences, operating environment, or any other relevant details..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-4">
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-[#1B3A6B] text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#1B3A6B]/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Quote Request
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-xs text-center mt-3">
                  Your information is kept confidential and used only to process your quote request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
