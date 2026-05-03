const stats = [
  { value: '1946', label: 'Year Founded' },
  { value: '79+', label: 'Years of Expertise' },
  { value: '5', label: 'Spring Product Lines' },
  { value: 'Same Day', label: 'Quote Turnaround' },
  { value: 'ISO 9001', label: '2015 Certified' },
  { value: 'Global', label: 'Customer Reach' },
];

export default function StatsBar() {
  return (
    <section
      className="bg-[#1B3A6B] py-10 border-y-4 border-[#6B7FA3]/30"
      aria-label="Minuteman Spring Company key facts and capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index === stats.length - 1 && stats.length % 2 !== 0
                  ? 'col-span-2 sm:col-span-1'
                  : ''
              }`}
            >
              <dt className="text-[#6B7FA3] text-xs font-semibold uppercase tracking-widest order-2">
                {stat.label}
              </dt>
              <dd className="text-2xl sm:text-3xl font-black text-white mb-1 order-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
