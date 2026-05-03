import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What types of custom springs does Minuteman Spring manufacture?',
    answer:
      'We manufacture compression springs, extension springs, torsion springs, barrel springs, wire forms, and custom engineered spring assemblies. All springs are produced to your exact specifications from a wide range of wire diameters and alloy materials.',
  },
  {
    question: 'What materials are available for custom spring manufacturing?',
    answer:
      'We manufacture springs from carbon steel, stainless steel (302, 304, 316, 17-7 PH), music wire, hard drawn wire, chrome silicon, chrome vanadium, phosphor bronze, beryllium copper, and other specialty alloys. Our team will help select the optimal material for your application, environment, and load requirements.',
  },
  {
    question: 'How quickly can I get a quote for custom springs?',
    answer:
      'Minuteman Spring offers same-day quoting on custom spring orders. Submit your specifications online or call 508-299-6100 and our engineering team will respond the same business day. We understand that fast turnaround is critical in manufacturing environments.',
  },
  {
    question: 'What industries does Minuteman Spring serve?',
    answer:
      'We supply custom springs to aerospace & defense, medical & life sciences, automotive & transportation, industrial equipment, electronics & technology, and energy & power industries. Our springs are trusted in flight-critical, surgical, high-cycle, and high-temperature applications worldwide.',
  },
  {
    question: 'Can Minuteman Spring handle small prototype runs as well as large production orders?',
    answer:
      'Yes. We accommodate everything from small prototype runs of 10 pieces to large production orders in the thousands. We apply the same rigorous quality standards to every order, regardless of quantity.',
  },
  {
    question: 'Where is Minuteman Spring Company located and what areas do you serve?',
    answer:
      'Minuteman Spring Company is located at 34 Howe Ave, Millbury, MA 01527. We are a Massachusetts spring manufacturer serving customers throughout New England, across the United States, and internationally. We ship worldwide.',
  },
  {
    question: 'How long has Minuteman Spring been in business?',
    answer:
      'Minuteman Spring Company, Inc. was founded in 1946 and has over 75 years of experience in precision custom spring manufacturing, making us one of the most established spring manufacturers in New England.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50" aria-label="Frequently asked questions about custom spring manufacturing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#6B7FA3]" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Common Questions
            </span>
            <div className="h-px w-10 bg-[#6B7FA3]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our custom spring manufacturing capabilities,
            materials, lead times, and quoting process.
          </p>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-[#6B7FA3]/50 transition-colors duration-200"
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[#1B3A6B] font-semibold text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-[#6B7FA3] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </dt>
                <dd
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-5 text-[#4A4A4A] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-10 text-center">
          <p className="text-[#4A4A4A] text-sm mb-4">
            Have a question not answered here? Contact our team directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15082996100"
              className="text-[#1B3A6B] font-bold text-sm hover:underline"
            >
              Call 508-299-6100
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href="mailto:sales@minutemansprings.com"
              className="text-[#1B3A6B] font-bold text-sm hover:underline"
            >
              sales@minutemansprings.com
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              to="/quote"
              className="text-[#1B3A6B] font-bold text-sm hover:underline"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
