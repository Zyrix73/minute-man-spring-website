import ProductDetailPage from './ProductDetailPage';

const related = [
  { name: 'Compression Springs', href: '/compression-springs', image: '/compression-spring-2_-_Edited.jpg' },
  { name: 'Extension Springs', href: '/extension-springs', image: '/Tension-Springs-28.webp' },
  { name: 'Barrel Springs', href: '/barrel-springs', image: '/Barrel_Spring.png' },
  { name: 'Wire Forms', href: '/wire-forms', image: '/Wire_Forms.png' },
];

export default function TorsionPage() {
  return (
    <ProductDetailPage
      name="Torsion Springs"
      tagline="Single and double torsion springs engineered to exert precise rotational force along their axis."
      description="Torsion springs work by twisting along their axis, exerting torque to return a mechanism to its rest position. They are essential in applications requiring a controlled rotational force — from door hinges and automotive latches to precision instruments and industrial mechanisms."
      longDescription={[
        'Minuteman Spring manufactures both single and double torsion springs in right-hand and left-hand wind. Leg configurations — straight, tangent, angled, custom forms — are produced to your assembly requirements.',
        'Spring rate (torque per degree of deflection), leg length, body diameter, and wire diameter are all specified to your application. We design around your space constraints and load requirements.',
        'Material selection is critical for torsion springs due to the bending stress involved. We will recommend the optimal alloy for your operating environment, load cycle, and temperature requirements.',
      ]}
      image="/Torsion_Springs.png"
      imageAlt="Custom precision torsion springs manufactured by Minuteman Spring"
      specs={[
        { label: 'Wire Diameter', value: '0.010" – 0.625" and beyond' },
        { label: 'Type', value: 'Single torsion, double torsion' },
        { label: 'Hand of Winding', value: 'Right or left hand' },
        { label: 'Leg Forms', value: 'Straight, tangent, angled, custom' },
        { label: 'Spring Rate', value: 'Torque per degree, to specification' },
        { label: 'Materials', value: 'Carbon steel, stainless, specialty alloys' },
      ]}
      applications={[
        'Door hinges & latches',
        'Automotive door mechanisms',
        'Aerospace actuators',
        'Medical device hinges',
        'Industrial cam mechanisms',
        'Consumer electronics',
        'Electrical switchgear',
        'Firearms components',
      ]}
      materials={[
        'Music Wire (ASTM A228)',
        'Hard Drawn Wire (ASTM A227)',
        'Chrome Silicon (ASTM A401)',
        'Chrome Vanadium (ASTM A232)',
        '302/304 Stainless Steel',
        '17-7 PH Stainless',
        'Phosphor Bronze',
        'Beryllium Copper',
      ]}
      relatedProducts={related}
    />
  );
}
