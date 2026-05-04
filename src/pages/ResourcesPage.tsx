import { Link } from 'react-router-dom';
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Leaf,
  Globe,
  Award,
  Download,
  ArrowRight,
  Calculator,
  BookOpen,
} from 'lucide-react';

const documents = [
  {
    id: 'iso-certificate',
    title: 'ISO 9001:2015 Certificate',
    subtitle: 'Third-party certified quality management system',
    description:
      'Minuteman Spring Company is ISO 9001:2015 certified, independently audited to confirm that our quality management system meets the world\'s most recognized manufacturing standard. This certificate confirms our commitment to consistent quality, process control, and continuous improvement across every product we ship.',
    icon: Award,
    iconBg: 'bg-[#C8A96E]/10',
    iconColor: 'text-[#C8A96E]',
    accentColor: 'border-[#C8A96E]',
    badgeColor: 'bg-[#C8A96E]/10 text-[#8a6e30] border-[#C8A96E]/40',
    badge: 'ISO Certified',
    href: '/18444_12.17.25_2025.pdf',
    fileName: '18444_12.17.25_2025.pdf',
    highlights: ['ISO 9001:2015', 'Third-party audited', 'Quality management'],
  },
  {
    id: 'credit-application',
    title: 'Credit Application',
    subtitle: 'Start a Net 30 account with Minuteman Spring',
    description:
      'New customers seeking open terms can apply for a Net 30 trade account. Complete this form with your company details, trade references, and accounts payable contact, then return it to our team.',
    icon: CreditCard,
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#1B3A6B]',
    accentColor: 'border-[#1B3A6B]',
    badgeColor: 'bg-blue-50 text-[#1B3A6B] border-blue-200',
    badge: 'Procurement',
    href: '/Minuteman_Spring_Credit_Application.pdf',
    fileName: 'Minuteman_Spring_Credit_Application.pdf',
    highlights: ['Net 30 terms', 'Trade references', 'AP contact setup'],
  },
  {
    id: 'general-terms',
    title: 'General Terms & Conditions',
    subtitle: 'Our standard commercial terms for all orders',
    description:
      'Covers quotation validity, pricing, payment terms (Net 15), lead times, engineering responsibility, tolerances, inspection windows, warranty, limitation of liability, and governing law (Massachusetts).',
    icon: FileText,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    accentColor: 'border-amber-400',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    badge: 'Legal',
    href: '/Minuteman_Spring_General_Terms_and_Conditions.pdf',
    fileName: 'Minuteman_Spring_General_Terms_and_Conditions.pdf',
    highlights: ['Net 15 payment', 'SMI tolerances', 'MA governing law'],
  },
  {
    id: 'ehs-policy',
    title: 'Environmental Health & Safety Policy',
    subtitle: 'Our commitment to safe, responsible manufacturing',
    description:
      'Minuteman Spring is committed to the highest EHS standards. This policy outlines our approach to workplace safety, environmental stewardship, waste minimization, and regulatory compliance across our Millbury, MA facility.',
    icon: ShieldCheck,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-700',
    accentColor: 'border-green-500',
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
    badge: 'Compliance',
    href: '/Minuteman_Spring_EHS_Policy.pdf',
    fileName: 'Minuteman_Spring_EHS_Policy.pdf',
    highlights: ['Workplace safety', 'Environmental stewardship', 'Regulatory compliance'],
  },
  {
    id: 'pfas-statement',
    title: 'PFAS-Free Statement',
    subtitle: 'Confirmation that our wire stock contains no PFAS',
    description:
      'Based on supplier confirmations from Industrial Steel & Wire Company and Gibbs Wire & Steel, our spring and wire form products do not contain Perfluoroalkyl or Polyfluoroalkyl Substances (PFAS). Supplier documentation available upon request.',
    icon: Leaf,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-700',
    accentColor: 'border-teal-500',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    badge: 'Materials',
    href: '/Minuteman_Spring_PFAS_Statement.pdf',
    fileName: 'Minuteman_Spring_PFAS_Statement.pdf',
    highlights: ['PFAS-free wire stock', 'Supplier verified', 'Docs on file'],
  },
  {
    id: 'conflict-minerals',
    title: 'Conflict Minerals Compliance Statement',
    subtitle: 'Dodd-Frank Section 1502 — responsible sourcing',
    description:
      'Minuteman Spring does not knowingly use conflict minerals (3TG: Tin, Tantalum, Tungsten, Gold) that benefit armed groups in the DRC or adjoining regions. Our U.S.-based wire suppliers have provided written confirmation of compliance.',
    icon: Globe,
    iconBg: 'bg-slate-50',
    iconColor: 'text-slate-700',
    accentColor: 'border-slate-400',
    badgeColor: 'bg-slate-50 text-slate-700 border-slate-200',
    badge: 'Supply Chain',
    href: '/Minuteman_Spring_Conflict_Minerals_Statement.pdf',
    fileName: 'Minuteman_Spring_Conflict_Minerals_Statement.pdf',
    highlights: ['3TG-free sourcing', 'Dodd-Frank compliant', 'U.S. suppliers'],
  },
];

const tools = [
  {
    title: 'Spring Calculators',
    description: 'Compute spring rate, stress, deflection, and more for compression, extension, and torsion springs.',
    icon: Calculator,
    href: '/calculators',
    cta: 'Open Calculators',
  },
  {
    title: 'Industry Insights',
    description: 'Engineering guides and procurement resources from 75+ years of precision spring manufacturing.',
    icon: BookOpen,
    href: '/insights',
    cta: 'Browse Articles',
  },
];

export default function ResourcesPage() {
  return (
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Resources</span>
          </nav>
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Documents, Tools &amp; References
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Everything you need to do business with Minuteman Spring — compliance statements, commercial terms, credit forms, engineering calculators, and procurement guides.
          </p>
        </div>
      </section>

      {/* Tools strip */}
      <section className="bg-[#F8F6F1] border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96E] mb-6">
            Engineering &amp; Procurement Tools
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  to={tool.href}
                  className="group flex items-start gap-5 bg-white border border-gray-200 hover:border-[#1B3A6B] hover:shadow-md rounded-lg p-6 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#1B3A6B] flex items-center justify-center group-hover:bg-[#152d56] transition-colors duration-200">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#1B3A6B] mb-1 group-hover:text-[#C8A96E] transition-colors duration-200">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{tool.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B3A6B] uppercase tracking-wide group-hover:text-[#C8A96E] transition-colors duration-200">
                      {tool.cta} <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96E] mb-2">
              Official Documents
            </p>
            <h2 className="text-3xl font-extrabold text-[#1B3A6B] mb-3">
              Compliance &amp; Commercial Documents
            </h2>
            <p className="text-[#6B7280] max-w-2xl leading-relaxed">
              Download our compliance statements and commercial forms. All documents are current as of their revision date shown on each PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {documents.map((doc) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.id}
                  className={`group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col border-l-4 ${doc.accentColor}`}
                >
                  <div className="p-7 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${doc.iconBg} flex items-center justify-center`}>
                        <Icon size={22} className={doc.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border ${doc.badgeColor}`}>
                            {doc.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-[#1B3A6B] leading-snug">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-[#6B7280] mt-0.5">{doc.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5 flex-1">
                      {doc.description}
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {doc.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs font-medium text-[#6B7280] bg-gray-50 border border-gray-200 px-3 py-1 rounded-full"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Download button */}
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={doc.fileName}
                      className="inline-flex items-center gap-2.5 self-start bg-[#1B3A6B] text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded hover:bg-[#152d56] transition-colors duration-200 group-hover:bg-[#152d56]"
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1B3A6B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Ready to Get Started?
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Request a Same-Day Quote
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Precision custom springs — compression, extension, torsion, barrel, and wire forms. Manufactured in Millbury, MA since 1946.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#1B1B1B] px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#b8965e] transition-colors duration-200"
          >
            Request a Free Quote <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
