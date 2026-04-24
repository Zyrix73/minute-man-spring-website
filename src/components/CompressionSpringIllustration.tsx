export default function CompressionSpringIllustration() {
  const springPath = (
    cx: number,
    yTop: number,
    yBottom: number,
    nCoils: number,
    rFn: (t: number) => number,
    pitchFn?: (t: number) => number
  ): string => {
    const nHalf = nCoils * 2;
    const pFn = pitchFn ?? (() => 1);
    const rawWeights = Array.from({ length: nHalf }, (_, i) =>
      pFn(i / Math.max(nHalf - 1, 1))
    );
    const totalWeight = rawWeights.reduce((a, b) => a + b, 0);
    const totalH = yBottom - yTop;
    const heights = rawWeights.map((w) => (w / totalWeight) * totalH);

    let d = '';
    let y = yTop;

    for (let i = 0; i < nHalf; i++) {
      const h = heights[i];
      const tS = i / Math.max(nHalf - 1, 1);
      const tE = Math.min((i + 1) / Math.max(nHalf - 1, 1), 1);
      const rS = rFn(tS);
      const rE = rFn(tE);
      const fromLeft = i % 2 === 0;

      if (i === 0) {
        d += `M ${fromLeft ? cx - rS : cx + rS} ${y}`;
      }

      if (fromLeft) {
        d += ` C ${cx - rS} ${y + h * 0.5} ${cx + rE} ${y + h * 0.5} ${cx + rE} ${y + h}`;
      } else {
        d += ` C ${cx + rS} ${y + h * 0.5} ${cx - rE} ${y + h * 0.5} ${cx - rE} ${y + h}`;
      }

      y += h;
    }
    return d;
  };

  const yTop = 28;
  const yBot = 162;

  const s1cx = 90;
  const s1r = 27;
  const s1 = springPath(s1cx, yTop, yBot, 6, () => s1r);

  const s2cx = 270;
  const s2rTop = 9;
  const s2rBot = 42;
  const s2 = springPath(s2cx, yTop, yBot, 5, (t) => s2rTop + (s2rBot - s2rTop) * t);

  const s3cx = 450;
  const s3r = 25;
  const s3 = springPath(
    s3cx,
    yTop,
    yBot,
    7,
    () => s3r,
    (t) => 0.28 + Math.sin(t * Math.PI) * 1.44
  );

  const wire = '#dce6f7';
  const depth = '#3B5690';
  const sw = 2.8;
  const dw = 6;

  const Spring = ({
    path,
    cx,
    topR,
    botR,
    label,
    sub,
  }: {
    path: string;
    cx: number;
    topR: number;
    botR: number;
    label: string;
    sub: string;
  }) => (
    <g>
      <line x1={cx - topR} y1={yTop} x2={cx + topR} y2={yTop} stroke={depth} strokeWidth={dw} strokeLinecap="round" />
      <line x1={cx - topR} y1={yTop} x2={cx + topR} y2={yTop} stroke={wire} strokeWidth={sw} strokeLinecap="round" />
      <line x1={cx - botR} y1={yBot} x2={cx + botR} y2={yBot} stroke={depth} strokeWidth={dw} strokeLinecap="round" />
      <line x1={cx - botR} y1={yBot} x2={cx + botR} y2={yBot} stroke={wire} strokeWidth={sw} strokeLinecap="round" />
      <path d={path} fill="none" stroke={depth} strokeWidth={dw} strokeLinecap="round" strokeLinejoin="round" />
      <path d={path} fill="none" stroke={wire} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <text x={cx} y="184" fill="#6B7FA3" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" fontWeight="700" letterSpacing="1.8">{label}</text>
      <text x={cx} y="198" fill="#dce6f7" fontSize="7.5" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" opacity="0.65">{sub}</text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 540 210"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Compression spring types: standard, conical, variable pitch"
    >
      <defs>
        <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="#ffffff" fillOpacity="0.05" />
        </pattern>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B3A6B" />
          <stop offset="100%" stopColor="#162f59" />
        </linearGradient>
      </defs>

      <rect width="540" height="210" fill="url(#bgGrad)" />
      <rect width="540" height="210" fill="url(#dots)" />

      <line x1="180" y1="16" x2="180" y2="172" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
      <line x1="360" y1="16" x2="360" y2="172" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />

      <Spring path={s1} cx={s1cx} topR={s1r} botR={s1r} label="STANDARD" sub="Closed & Ground Ends" />
      <Spring path={s2} cx={s2cx} topR={s2rTop} botR={s2rBot} label="CONICAL" sub="Tapered Profile" />
      <Spring path={s3} cx={s3cx} topR={s3r} botR={s3r} label="VARIABLE PITCH" sub="Progressive Rate" />
    </svg>
  );
}
