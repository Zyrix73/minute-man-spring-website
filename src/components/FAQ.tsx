import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What types of custom springs does Minuteman Spring manufacture?',
    answer:
      'We manufacture compression springs, extension springs, torsion springs, double torsion springs, barrel springs, conical springs, wire forms, and custom engineered spring assemblies. Every spring is produced to your exact specifications from a wide range of wire diameters (.008–.312") and alloy materials. We are a custom-only shop — we do not sell stock springs.',
  },
  {
    question: 'What materials are available for custom spring manufacturing?',
    answer:
      'We manufacture custom springs from carbon steel, stainless steel (302, 304, 316, 17-7 PH), music wire, hard drawn wire, chrome silicon, chrome vanadium, oil tempered wire, phosphor bronze, beryllium copper, and other specialty alloys. Wire forms are available in diameters from .008–.625". Our engineering team will help select the optimal material for your application, operating environment, and load requirements.',
  },
  {
    question: 'How quickly can I get a quote for custom springs?',
    answer:
      'Minuteman Spring offers same-day quoting on all custom spring orders. Submit your specifications online or call 508-299-6100 and our engineering team will respond the same business day. Most orders ship within 10 business days. We understand that fast turnaround is critical in manufacturing environments.',
  },
  {
    question: 'What industries does Minuteman Spring serve?',
    answer:
      'We supply precision custom springs to aerospace & defense, medical & life sciences, automotive & transportation, industrial equipment manufacturing, electronics & technology, and energy & power industries. Our springs are trusted in flight-critical, surgical, high-cycle, and high-temperature applications — serving customers throughout New England, the United States, and worldwide.',
  },
  {
    question: 'Can Minuteman Spring handle small prototype runs as well as large production orders?',
    answer:
      'Yes. We accommodate everything from small prototype runs of 10 pieces to large production orders in the thousands. As a jobber spring shop, we apply the same rigorous quality standards to every order regardless of quantity. Our extensive tooling library allows us to move quickly from prototype to full production without costly re-tooling delays.',
  },
  {
    question: 'What is a jobber spring shop and why does it matter?',
    answer:
      'A jobber spring shop manufactures springs exclusively to customer order — we never carry inventory of stock springs. Every compression spring, extension spring, torsion spring, and wire form we produce is engineered and manufactured specifically for your application. This means better fit, better performance, and no compromises from off-the-shelf sizing.',
  },
  {
    question: 'Where is Minuteman Spring Company located and what areas do you serve?',
    answer:
      'Minuteman Spring Company is located at 34 Howe Ave, Millbury, MA 01527, in central Massachusetts. We are a New England spring manufacturer serving customers throughout Massachusetts, Connecticut, Rhode Island, New Hampshire, Vermont, Maine, and across the United States. We also ship internationally and serve customers worldwide.',
  },
  {
    question: 'How long has Minuteman Spring been in business?',
    answer:
      'Minuteman Spring Company, Inc. was founded in 1946 and has nearly 80 years of experience in precision custom spring manufacturing — making us one of the most established and experienced spring manufacturers in New England and the United States.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Common Questions
            </span>
            <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4"
          >
            Custom Spring Manufacturing — FAQ
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our custom spring manufacturing capabilities,
            materials, lead times, and quoting process. Can't find your answer?{' '}
            <Link to="/quote" className="text-[#1B3A6B] font-semibold hover:underline">
              Contact our team.
            </Link>
          </p>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-[#6B7FA3]/50 transition-colors duration-200"
                itemScope
                itemType="https://schema.org/Question"
              >
                <dt>
                  <button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className="text-[#1B3A6B] font-semibold text-sm sm:text-base leading-snug"
                      itemProp="name"
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`flex-shrink-0 text-[#6B7FA3] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="px-6 pb-5 text-[#4A4A4A] text-sm leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-10 text-center">
          <p className="text-[#4A4A4A] text-sm mb-4">
            Have a question not answered here? Our engineering team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15082996100"
              className="text-[#1B3A6B] font-bold text-sm hover:underline"
              aria-label="Call Minuteman Spring Company at 508-299-6100"
            >
              Call 508-299-6100
            </a>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>
            <a
              href="mailto:sales@minutemansprings.com"
              className="text-[#1B3A6B] font-bold text-sm hover:underline"
              aria-label="Email Minuteman Spring sales team"
            >
              sales@minutemansprings.com
            </a>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>
            <Link
              to="/quote"
              className="text-[#1B3A6B] font-bold text-sm hover:underline"
              aria-label="Request a free same-day custom spring quote"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
