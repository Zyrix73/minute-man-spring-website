export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1B3A6B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/Our_Story_Minuteman.png"
              alt="Minuteman Spring Company custom spring manufacturing facility in Millbury Massachusetts"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div
              className="absolute -bottom-6 -right-6 bg-white p-6 hidden lg:block"
              style={{ maxWidth: '200px' }}
            >
              <div className="text-4xl font-black text-[#1B3A6B]">1946</div>
              <div className="text-[#4A4A4A] text-sm font-medium mt-1">Founded in Millbury, MA</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              Precision and Craftsmanship
              <br />
              Since 1946
            </h2>
            <p className="text-gray-300 leading-relaxed mb-5 text-lg">
              Minuteman Spring Company, Inc. has been manufacturing custom precision springs from
              our facility in Millbury, Massachusetts since 1946. As one of New England's leading
              spring manufacturers, what began as a local supplier has grown into a trusted partner
              for manufacturers across the United States and worldwide.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              We specialize in compression springs, extension springs, torsion springs, barrel
              springs, and custom wire forms — all manufactured to your exact specifications. Our
              business is built on three foundational commitments: exceptional delivery performance,
              uncompromising quality, and an overall superior customer experience. We combine modern
              CNC coiling and forming technology with decades of accumulated tooling and
              metallurgical expertise.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From prototype to full production runs, we work alongside your engineering team at
              every stage. We are not a faceless catalog supplier — we are your dedicated partner
              in custom spring design and precision manufacturing, serving industries from aerospace
              and medical to automotive and electronics.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#6B7FA3]/30">
              <div>
                <div className="text-[#6B7FA3] text-xs uppercase tracking-widest font-semibold mb-1">
                  Location
                </div>
                <div className="text-white text-sm font-medium">Millbury, MA</div>
              </div>
              <div>
                <div className="text-[#6B7FA3] text-xs uppercase tracking-widest font-semibold mb-1">
                  Phone
                </div>
                <a href="tel:+15082996100" className="text-white text-sm font-medium hover:text-[#6B7FA3] transition-colors">
                  508-299-6100
                </a>
              </div>
              <div>
                <div className="text-[#6B7FA3] text-xs uppercase tracking-widest font-semibold mb-1">
                  Service
                </div>
                <div className="text-white text-sm font-medium">MA, New England &amp; Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
