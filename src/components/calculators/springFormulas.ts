export const MATERIALS = [
  { label: 'Music Wire (ASTM A228)', G: 11_500_000, E: 30_000_000 },
  { label: 'Hard Drawn (ASTM A227)', G: 11_500_000, E: 30_000_000 },
  { label: 'Chrome-Vanadium (ASTM A231)', G: 11_500_000, E: 30_000_000 },
  { label: 'Chrome-Silicon (ASTM A401)', G: 11_500_000, E: 30_000_000 },
  { label: '302 Stainless Steel', G: 10_000_000, E: 28_000_000 },
  { label: '17-7 PH Stainless Steel', G: 10_500_000, E: 29_500_000 },
  { label: 'Phosphor Bronze', G: 6_000_000, E: 15_000_000 },
  { label: 'Beryllium Copper', G: 7_000_000, E: 18_000_000 },
];

export const END_TYPES = [
  { label: 'Closed & Ground (Recommended)', activeCoilDeduct: 2, solidHeightFactor: 0 },
  { label: 'Closed Ends (Plain)', activeCoilDeduct: 2, solidHeightFactor: 1 },
  { label: 'Open Ends (Plain)', activeCoilDeduct: 0, solidHeightFactor: 0 },
  { label: 'Open & Ground', activeCoilDeduct: 1, solidHeightFactor: 0 },
];

export function wahlFactor(C: number): number {
  if (C <= 1) return Infinity;
  return (4 * C - 1) / (4 * C - 4) + 0.615 / C;
}

export function torsionInnerFactor(C: number): number {
  if (C <= 1) return Infinity;
  return (4 * C * C - C - 1) / (4 * C * (C - 1));
}

export function springIndexStatus(C: number): 'ok' | 'warn' | 'danger' {
  if (C >= 4 && C <= 12) return 'ok';
  if (C >= 3 && C < 4) return 'warn';
  if (C > 12 && C <= 16) return 'warn';
  return 'danger';
}

export function stressStatus(
  stress: number,
  ultimateTensile: number
): 'ok' | 'warn' | 'danger' {
  const ratio = stress / ultimateTensile;
  if (ratio < 0.45) return 'ok';
  if (ratio < 0.65) return 'warn';
  return 'danger';
}

export function formatNum(val: number, decimals = 4): string {
  if (!isFinite(val) || isNaN(val)) return '—';
  return val.toFixed(decimals);
}

export function parseInput(val: string): number {
  const n = parseFloat(val);
  return isNaN(n) ? 0 : n;
}
