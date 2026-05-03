import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image column */}
          <div className="relative">
            <img
              src="/Our_Story_Minuteman.png"
              alt="Minuteman Spring Company custom spring manufacturing facility in Millbury, Massachusetts — precision spring production since 1946"
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
              width="600"
              height="384"
            />
            <div
              className="absolute -bottom-6 -right-6 bg-[#1B3A6B] p-6 hidden lg:block"
              style={{ maxWidth: '200px' }}
              aria-hidden="true"
            >
              <div className="text-4xl font-black text-white">1946</div>
              <div className="text-blue-200 text-sm font-medium mt-1">Founded in Millbury, MA</div>
            </div>
          </div>

          {/* Content column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-6 leading-tight"
            >
              Precision Custom Spring Manufacturing
              <br />
              <span className="text-[#6B7FA3]">Since 1946</span>
            </h2>

            <p className="text-[#4A4A4A] leading-relaxed mb-5 text-lg">
              Minuteman Spring Company, Inc. has been manufacturing precision custom springs from
              our facility in Millbury, Massachusetts since 1946. As one of New England's most
              experienced custom spring manufacturers, we have grown from a regional supplier into
              a trusted partner for manufacturers across the United States and worldwide.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-5">
              We specialize in compression springs, extension springs, torsion springs, barrel
              springs, and custom wire forms — every one made to your exact specifications with no
              off-the-shelf compromises. Our business is built on three foundational commitments:
              exceptional delivery performance, uncompromising quality, and a superior customer
              experience. We combine modern CNC coiling and forming technology with nearly 80 years
              of accumulated tooling knowledge and metallurgical expertise.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-8">
              From prototype to full production runs, our engineering team works alongside yours at
              every stage. We are not a faceless catalog supplier — we are your dedicated partner in
              custom spring design and precision manufacturing. We serve industries including
              aerospace and defense, medical and life sciences, automotive, industrial equipment,
              and electronics — domestically and internationally.
            </p>

            {/* Key facts grid — schema-friendly contact + service info */}
            <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <dt className="text-[#6B7FA3] text-xs uppercase tracking-widest font-semibold mb-1">
                  Location
                </dt>
                <dd className="text-[#1B3A6B] text-sm font-medium">
                  Millbury, MA
                </dd>
              </div>
              <div>
                <dt className="text-[#6B7FA3] text-xs uppercase tracking-widest font-semibold mb-1">
                  Phone
                </dt>
                <dd>
                  <a
                    href="tel:+15082996100"
                    className="text-[#1B3A6B] text-sm font-medium hover:text-[#6B7FA3] transition-colors"
                    aria-label="Call Minuteman Spring Company at 508-299-6100"
                  >
                    508-299-6100
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[#6B7FA3] text-xs uppercase tracking-widest font-semibold mb-1">
                  Service Area
                </dt>
                <dd className="text-[#1B3A6B] text-sm font-medium">
                  MA, New England &amp; Worldwide
                </dd>
              </div>
            </dl>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#1B3A6B] text-sm font-bold uppercase tracking-wide hover:text-[#6B7FA3] transition-colors group"
                aria-label="Learn more about Minuteman Spring Company history and capabilities"
              >
                Our Full Story
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
              <span className="hidden sm:block text-gray-300 text-sm">|</span>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 text-[#6B7FA3] text-sm font-bold uppercase tracking-wide hover:text-[#1B3A6B] transition-colors group"
                aria-label="Request a free same-day custom spring quote"
              >
                Get a Same-Day Quote
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
