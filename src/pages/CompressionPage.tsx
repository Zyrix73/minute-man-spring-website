import ProductDetailPage from './ProductDetailPage';

const related = [
  { name: 'Extension Springs', href: '/extension-springs', image: '/Tension-Springs-28.webp' },
  { name: 'Torsion Springs', href: '/torsion-springs', image: '/Torsion_Springs.png' },
  { name: 'Barrel Springs', href: '/barrel-springs', image: '/Barrel_Spring.png' },
  { name: 'Wire Forms', href: '/wire-forms', image: '/Wire_Forms.png' },
];

export default function CompressionPage() {
  return (
    <ProductDetailPage
      name="Compression Springs"
      tagline="Precision-wound helical compression springs manufactured to your exact load, rate, and dimensional specifications."
      description="Compression springs are the most common spring type — helical coils that resist compressive force and return to their free length when the load is removed. Minuteman Spring manufactures compression springs from prototype quantities through high-volume production runs, in virtually any material and wire diameter."
      longDescription={[
        'We produce compression springs with closed and ground ends, closed ends, open ends, and custom end configurations to suit your assembly requirements. Spring rate, solid height, free length, outer diameter, wire diameter, and coil count are all specified to your exact requirements.',
        'Our tooling library — built over 75+ years — enables fast setup and competitive pricing. We work with your engineering team from initial specification through first article approval and into full production.',
        'Every compression spring is inspected to ensure it meets your dimensional and load specifications before shipment. We provide material certifications and documentation as required for your industry.',
      ]}
      image="/compression-spring-2_-_Edited.jpg"
      imageAlt="Custom precision compression springs manufactured by Minuteman Spring"
      specs={[
        { label: 'Wire Diameter', value: '0.010" – 0.750" and beyond' },
        { label: 'Outer Diameter', value: 'Miniature to large format' },
        { label: 'End Types', value: 'Closed & ground, closed, open, custom' },
        { label: 'Hand of Winding', value: 'Right or left hand' },
        { label: 'Pitch', value: 'Constant or variable pitch' },
        { label: 'Materials', value: 'Carbon steel, stainless, specialty alloys' },
      ]}
      applications={[
        'Aerospace actuators & valves',
        'Medical device mechanisms',
        'Automotive engine components',
        'Industrial presses & dies',
        'Electronic assemblies',
        'Energy & power systems',
        'Consumer product mechanisms',
        'Defense systems',
      ]}
      materials={[
        'Music Wire (ASTM A228)',
        'Hard Drawn Wire (ASTM A227)',
        'Chrome Silicon (ASTM A401)',
        'Chrome Vanadium (ASTM A232)',
        '302/304 Stainless Steel',
        '316 Stainless Steel',
        '17-7 PH Stainless',
        'Phosphor Bronze',
        'Beryllium Copper',
        'Inconel',
      ]}
      relatedProducts={related}
    />
  );
}
