import { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronRight } from 'lucide-react';
import { articles, Article, Section } from './articlesData';

const CATEGORY_COLORS: Record<string, string> = {
  'Procurement': 'bg-blue-50 text-blue-700 border-blue-200',
  'Quality & Compliance': 'bg-amber-50 text-amber-700 border-amber-200',
  'Engineering': 'bg-teal-50 text-teal-700 border-teal-200',
  'Aerospace & Defense': 'bg-slate-50 text-slate-700 border-slate-200',
  'Medical & Life Sciences': 'bg-green-50 text-green-700 border-green-200',
};

function renderSection(section: Section, idx: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 key={idx} className="text-2xl font-bold text-[#1B3A6B] mt-10 mb-4 leading-snug">
          {section.content}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={idx} className="text-lg font-bold text-[#2D4A7A] mt-6 mb-3">
          {section.content}
        </h3>
      );
    case 'p':
      return (
        <p key={idx} className="text-[#4A4A4A] leading-relaxed mb-5 text-[1.05rem]">
          {section.content}
        </p>
      );
    case 'ul':
      return (
        <ul key={idx} className="mb-6 space-y-3">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-[#4A4A4A] leading-relaxed text-[1.05rem]">
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="mb-6 space-y-3 counter-reset-list">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-[#4A4A4A] leading-relaxed text-[1.05rem]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B3A6B] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div key={idx} className="mb-8 overflow-x-auto rounded border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1B3A6B] text-white">
                {section.headers?.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-[#4A4A4A] border-t border-gray-100 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'callout':
      return (
        <div key={idx} className="my-10 border-l-4 border-[#C8A96E] bg-amber-50 px-6 py-5 rounded-r-lg">
          <p className="text-[#5A3E1B] font-medium leading-relaxed">{section.content}</p>
          <a
            href="#quote"
            onClick={() => window.dispatchEvent(new CustomEvent('navigate-home'))}
            className="inline-flex items-center gap-2 mt-4 bg-[#1B3A6B] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
          >
            Request a Quote <ArrowRight size={14} />
          </a>
        </div>
      );
    default:
      return null;
  }
}

function ArticleDetail({ article, onBack }: { article: Article; onBack: () => void }) {
  const categoryClass = CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-600 border-gray-200';

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-[105px]">
      {/* Hero bar */}
      <div className="bg-[#F8F6F1] border-b border-gray-200 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-[#1B3A6B] font-medium hover:text-[#C8A96E] transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Industry Insights
          </button>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded border ${categoryClass}`}>
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Clock size={13} /> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A6B] leading-tight mb-3">
            {article.title}
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">{article.subtitle}</p>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {article.body.map((section, idx) => renderSection(section, idx))}

        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="bg-[#1B3A6B] text-white rounded-lg p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A96E] mb-2">
              Minuteman Spring Co., Inc.
            </p>
            <h3 className="text-2xl font-bold mb-3">Ready to discuss your spring requirements?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              We provide same-day quoting, full engineering support, and precision manufacturing from prototype through production. Founded in 1946. Millbury, Massachusetts.
            </p>
            <a
              href="#quote"
              onClick={() => window.dispatchEvent(new CustomEvent('navigate-home'))}
              className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#1B1B1B] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#b8965e] transition-colors duration-200"
            >
              Request a Quote <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <button
          onClick={onBack}
          className="mt-10 flex items-center gap-2 text-sm text-[#1B3A6B] font-medium hover:text-[#C8A96E] transition-colors"
        >
          <ArrowLeft size={16} /> Back to all articles
        </button>
      </article>
    </div>
  );
}

export default function InsightsPage({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (selectedArticle) {
    return (
      <ArticleDetail
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-[105px]">
      {/* Page header */}
      <div className="bg-[#1B3A6B] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Industry Insights
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl">
            Engineering Guides & Procurement Resources
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Practical guidance from 75 years of custom spring manufacturing experience. Written for the engineers and procurement teams who source precision springs.
          </p>
        </div>
      </div>

      {/* Category pills */}
      <div className="border-b border-gray-200 bg-white sticky top-16 lg:top-[105px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`flex-shrink-0 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded border cursor-default ${
                  CATEGORY_COLORS[cat] || 'bg-gray-100 text-gray-600 border-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Featured article */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96E] mb-5">
            Featured Article
          </p>
          <button
            onClick={() => setSelectedArticle(featured)}
            className="group w-full text-left bg-[#F8F6F1] border border-gray-200 hover:border-[#1B3A6B] hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden lg:flex"
          >
            <div className="lg:flex-1 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded border ${CATEGORY_COLORS[featured.category] || ''}`}>
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Clock size={13} /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1B3A6B] leading-tight mb-4 group-hover:text-[#C8A96E] transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1B3A6B] uppercase tracking-wide group-hover:text-[#C8A96E] transition-colors duration-200">
                Read Article <ChevronRight size={16} />
              </span>
            </div>
            <div className="hidden lg:flex items-center justify-center w-56 bg-[#1B3A6B] text-white p-8 flex-shrink-0">
              <div className="text-center">
                <div className="text-5xl font-black text-[#C8A96E] leading-none mb-2">8</div>
                <div className="text-sm font-medium text-blue-200 leading-snug">Point<br />Checklist</div>
              </div>
            </div>
          </button>
        </div>

        {/* Article grid */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96E] mb-6">
            All Articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => {
              const catClass = CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-600 border-gray-200';
              return (
                <button
                  key={article.slug}
                  onClick={() => setSelectedArticle(article)}
                  className="group text-left bg-white border border-gray-200 hover:border-[#1B3A6B] hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border ${catClass}`}>
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A6B] leading-snug mb-3 group-hover:text-[#C8A96E] transition-colors duration-200 flex-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock size={12} /> {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-[#1B3A6B] uppercase tracking-wide group-hover:text-[#C8A96E] transition-colors duration-200">
                        Read <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#F8F6F1] border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Ready to Source?
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1B3A6B] mb-4">
            Get a Same-Day Quote for Your Custom Spring
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto leading-relaxed">
            Minuteman Spring has been manufacturing precision custom springs since 1946. Send us your requirements and receive a quote the same business day.
          </p>
          <a
            href="#quote"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
          >
            Request a Quote <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
