import { useState } from 'react';
import { CheckCircle, AlertCircle, Send, Phone, MapPin } from 'lucide-react';

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

type FormState = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  spring_type: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
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
  const [form, setForm] = useState<FormState>(initialState);
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
      const encoded = new URLSearchParams({
        'form-name': 'contact',
        ...form,
      }).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
      setErrorMessage(
        'There was a problem submitting your request. Please call us directly at 508-299-6100.'
      );
    }
  };

  const inputClass =
    'w-full bg-white border border-gray-300 text-[#4A4A4A] px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors duration-200 placeholder-gray-400';

  const labelClass =
    'block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1.5';

  return (
    <section
      id="quote"
      className="py-24 bg-gray-50"
      aria-labelledby="quote-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: Info column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Get Started
              </span>
            </div>
            <h2
              id="quote-heading"
              className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-6 leading-tight"
            >
              Request a Free
              <br />
              Custom Spring Quote
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-8">
              Tell us about your project. Our engineering team will review your spring requirements
              and respond with a competitive quote — often the same business day. All spring types,
              all materials, any quantity.
            </p>

            <ol className="space-y-6" aria-label="Quote process steps">
              <li className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-1">
                    Submit Your Spring Specifications
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Fill in the form with your spring type, dimensions, material, and quantity
                    requirements. Drawings or sketches welcome.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-1">
                    Engineering Review
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Our spring engineering team evaluates your requirements, selects optimal
                    materials, and prepares your itemized quote.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-1">
                    Receive Your Same-Day Quote
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Get a competitive, detailed quote — typically the same business day. Most
                    orders ship within 10 business days.
                  </p>
                </div>
              </li>
            </ol>

            <address className="not-italic mt-10 p-6 bg-[#1B3A6B]">
              <div className="text-[#6B7FA3] text-xs font-semibold uppercase tracking-widest mb-3">
                Prefer to Call or Visit?
              </div>
              <a
                href="tel:+15082996100"
                className="flex items-center gap-2 text-white text-2xl font-black hover:text-[#6B7FA3] transition-colors mb-3"
                aria-label="Call Minuteman Spring Company at 508-299-6100"
              >
                <Phone size={20} aria-hidden="true" />
                508-299-6100
              </a>
              <a
                href="mailto:sales@minutemansprings.com"
                className="block text-blue-200 text-sm hover:text-white transition-colors mb-3"
                aria-label="Email Minuteman Spring sales team"
              >
                sales@minutemansprings.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#6B7FA3]" aria-hidden="true" />
                <span>34 Howe Ave, Millbury, MA 01527</span>
              </div>
              <div className="text-gray-500 text-xs mt-2">
                Mon – Fri: 8:00 AM – 5:00 PM ET
              </div>
            </address>
          </div>

          {/* Right: Form column */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-96 text-center p-12 bg-white border border-gray-200">
                <CheckCircle size={64} className="text-green-500 mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-black text-[#1B3A6B] mb-3">
                  Quote Request Received!
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed max-w-sm">
                  Thank you for reaching out to Minuteman Spring Company. A member of our
                  engineering team will review your project details and respond promptly — often
                  the same business day.
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
                aria-label="Custom spring quote request form"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="first_name" className={labelClass}>
                      First Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      required
                      autoComplete="given-name"
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputClass}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className={labelClass}>
                      Last Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      required
                      autoComplete="family-name"
                      value={form.last_name}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputClass}
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      required
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Manufacturing Co."
                      className={inputClass}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Business Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className={labelClass}>
                      Industry
                    </label>
                    <select
                      id="industry"
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
                    <label htmlFor="spring_type" className={labelClass}>
                      Spring Type Needed
                    </label>
                    <select
                      id="spring_type"
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
                    <label htmlFor="quantity" className={labelClass}>
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
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
                  <label htmlFor="message" className={labelClass}>
                    Spring Specifications & Project Details{' '}
                    <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your spring specifications: wire diameter, outer diameter, free length, load requirements, material preferences, operating environment, end type, or any other relevant details. Drawings and CAD files can be emailed to sales@minutemansprings.com."
                    className={`${inputClass} resize-none`}
                    aria-required="true"
                    aria-describedby="message-hint"
                  />
                  <p id="message-hint" className="text-gray-400 text-xs mt-1">
                    The more detail you provide, the faster and more accurate your quote will be.
                  </p>
                </div>

                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-4"
                  >
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-[#1B3A6B] text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Submit your custom spring quote request"
                >
                  {status === 'loading' ? (
                    <>
                      <div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Submit Quote Request — Same-Day Response
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-xs text-center mt-3">
                  Your information is kept confidential and used only to process your quote
                  request. Most orders ship within 10 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
