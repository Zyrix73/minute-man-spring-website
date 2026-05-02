import ProductDetailPage from './ProductDetailPage';

const related = [
  { name: 'Compression Springs', href: '/compression-springs', image: '/compression-spring-2_-_Edited.jpg' },
  { name: 'Torsion Springs', href: '/torsion-springs', image: '/Torsion_Springs.png' },
  { name: 'Barrel Springs', href: '/barrel-springs', image: '/Barrel_Spring.png' },
  { name: 'Wire Forms', href: '/wire-forms', image: '/Wire_Forms.png' },
];

export default function ExtensionPage() {
  return (
    <ProductDetailPage
      name="Extension Springs"
      tagline="Tightly wound helical springs engineered to absorb and store energy by resisting a pulling force."
      description="Extension springs — also called tension springs — store energy and exert a pulling force when stretched. They are designed with initial tension built into the coils, and feature a wide variety of end hook configurations to suit your assembly."
      longDescription={[
        'Minuteman Spring manufactures extension springs with machine hooks, cross-center hooks, side hooks, extended hooks, and custom end forms. Initial tension — the force required to separate the coils — is controlled to your specification.',
        'We produce extension springs in wire diameters from fine instrument sizes through heavy industrial gauges. Body length, hook type, overall length, and load requirements are all engineered to your application.',
        'From small-batch prototype orders to large production runs, every extension spring is inspected for dimensional accuracy and load compliance before shipment.',
      ]}
      image="/Tension-Springs-28.webp"
      imageAlt="Custom precision extension tension springs manufactured by Minuteman Spring"
      specs={[
        { label: 'Wire Diameter', value: '0.010" – 0.500" and beyond' },
        { label: 'End Types', value: 'Machine hook, cross-center, side hook, custom' },
        { label: 'Initial Tension', value: 'Controlled to specification' },
        { label: 'Hand of Winding', value: 'Right or left hand' },
        { label: 'Body Style', value: 'Full-coil, reduced-diameter ends' },
        { label: 'Materials', value: 'Carbon steel, stainless, specialty alloys' },
      ]}
      applications={[
        'Agricultural equipment',
        'Garage door mechanisms',
        'Medical instruments',
        'Automotive assemblies',
        'Industrial machinery',
        'Consumer product latches',
        'Aerospace control systems',
        'Electronic enclosures',
      ]}
      materials={[
        'Music Wire (ASTM A228)',
        'Hard Drawn Wire (ASTM A227)',
        '302/304 Stainless Steel',
        '316 Stainless Steel',
        '17-7 PH Stainless',
        'Phosphor Bronze',
        'Beryllium Copper',
        'Chrome Silicon (ASTM A401)',
      ]}
      relatedProducts={related}
    />
  );
}
