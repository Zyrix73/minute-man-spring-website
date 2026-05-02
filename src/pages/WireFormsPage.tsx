import ProductDetailPage from './ProductDetailPage';

const related = [
  { name: 'Compression Springs', href: '/compression-springs', image: '/compression-spring-2_-_Edited.jpg' },
  { name: 'Extension Springs', href: '/extension-springs', image: '/Tension-Springs-28.webp' },
  { name: 'Torsion Springs', href: '/torsion-springs', image: '/Torsion_Springs.png' },
  { name: 'Barrel Springs', href: '/barrel-springs', image: '/Barrel_Spring.png' },
];

export default function WireFormsPage() {
  return (
    <ProductDetailPage
      name="Wire Forms"
      tagline="Custom-bent wire components engineered to your exact geometry — from simple clips to complex 3D assemblies."
      description="Wire forms are custom-shaped wire components that go beyond springs — clips, brackets, retaining rings, hooks, handles, guards, and complex 3D geometries produced from a broad range of wire diameters and alloys. If it can be bent, formed, or shaped from wire, Minuteman Spring can manufacture it."
      longDescription={[
        'Wire forms are manufactured using CNC wire forming machines and specialized tooling. Two-dimensional forms — flat or planar shapes — and three-dimensional forms with bends in multiple planes are both within our capability.',
        'Typical wire form applications include snap-fit retaining clips, wire handles, tension clips, guard wires, sensor brackets, electrical contacts, and structural wire assemblies. We work from your drawings or samples to produce first articles for your approval.',
        'Wire forms are available in the same broad material selection as our springs. For medical and food-contact applications, 316 stainless steel and other biocompatible alloys are available with full material traceability documentation.',
      ]}
      image="/Wire_Forms.png"
      imageAlt="Custom precision wire forms manufactured by Minuteman Spring"
      specs={[
        { label: 'Wire Diameter', value: '0.010" – 0.500" and beyond' },
        { label: 'Form Complexity', value: '2D and 3D geometries' },
        { label: 'Form Types', value: 'Clips, brackets, rings, hooks, guards, custom' },
        { label: 'Tolerances', value: 'Tight, to your drawing' },
        { label: 'Quantities', value: 'Prototype through high-volume production' },
        { label: 'Materials', value: 'Full range — carbon steel through specialty alloys' },
      ]}
      applications={[
        'Retaining & snap-fit clips',
        'Wire handles & bails',
        'Sensor mounting brackets',
        'Medical device components',
        'Electrical contact springs',
        'Guard wires & safety screens',
        'Automotive trim clips',
        'Consumer product hardware',
      ]}
      materials={[
        'Music Wire (ASTM A228)',
        'Hard Drawn Wire (ASTM A227)',
        '302/304 Stainless Steel',
        '316 Stainless Steel',
        '17-7 PH Stainless',
        'Phosphor Bronze',
        'Beryllium Copper',
        'Galvanized & coated wire',
      ]}
      relatedProducts={related}
    />
  );
}
