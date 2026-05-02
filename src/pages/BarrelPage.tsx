import ProductDetailPage from './ProductDetailPage';

const related = [
  { name: 'Compression Springs', href: '/compression-springs', image: '/compression-spring-2_-_Edited.jpg' },
  { name: 'Extension Springs', href: '/extension-springs', image: '/Tension-Springs-28.webp' },
  { name: 'Torsion Springs', href: '/torsion-springs', image: '/Torsion_Springs.png' },
  { name: 'Wire Forms', href: '/wire-forms', image: '/Wire_Forms.png' },
];

export default function BarrelPage() {
  return (
    <ProductDetailPage
      name="Barrel Springs"
      tagline="Convex-profile springs with reduced solid height, superior lateral stability, and anti-buckling characteristics."
      description="Barrel springs (also called convex springs) feature a coil diameter that increases from both ends to a maximum at the center. This geometry provides significant advantages over cylindrical compression springs in applications with space constraints, buckling risk, or vibration sensitivity."
      longDescription={[
        'The barrel profile dramatically reduces solid height compared to a cylindrical spring of equivalent load capacity, making barrel springs ideal for assemblies with tight axial space. The variable coil diameter also provides natural lateral stability, eliminating or reducing the need for a guide rod or bore.',
        'Barrel springs can be wound with constant or variable pitch to achieve specific load-deflection characteristics. This enables progressive spring rates — where the spring becomes stiffer as it compresses — which is valuable in impact-absorbing and vibration-damping applications.',
        'Minuteman Spring has the tooling and coiling expertise to produce barrel springs across a wide range of wire diameters and materials. We work with your design team to optimize the profile geometry for your specific load and space requirements.',
      ]}
      image="/Barrel_Spring.png"
      imageAlt="Custom precision barrel springs manufactured by Minuteman Spring"
      specs={[
        { label: 'Profile', value: 'Convex (barrel) — variable OD' },
        { label: 'Solid Height', value: 'Reduced vs. cylindrical equivalent' },
        { label: 'Pitch', value: 'Constant or variable (progressive rate)' },
        { label: 'End Types', value: 'Closed & ground, closed, open' },
        { label: 'Lateral Stability', value: 'Enhanced — reduced guide requirements' },
        { label: 'Materials', value: 'Carbon steel, stainless, specialty alloys' },
      ]}
      applications={[
        'Vibration isolation mounts',
        'Impact absorption systems',
        'Limited-space assemblies',
        'Automotive suspension components',
        'Industrial shock absorbers',
        'Defense & ordnance systems',
        'Aerospace structural dampers',
        'Heavy equipment couplings',
      ]}
      materials={[
        'Music Wire (ASTM A228)',
        'Hard Drawn Wire (ASTM A227)',
        'Chrome Silicon (ASTM A401)',
        'Chrome Vanadium (ASTM A232)',
        '302/304 Stainless Steel',
        '17-7 PH Stainless',
        'Inconel',
        'Specialty high-temperature alloys',
      ]}
      relatedProducts={related}
    />
  );
}
