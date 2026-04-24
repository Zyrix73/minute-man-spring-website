import { useMemo, useState } from 'react';
import {
  MATERIALS,
  END_TYPES,
  wahlFactor,
  springIndexStatus,
  formatNum,
  parseInput,
} from './springFormulas';
import ResultBadge from './ResultBadge';

const defaultInputs = {
  d: '0.080',
  OD: '0.750',
  L0: '2.000',
  Nt: '10',
  materialIndex: '0',
  endTypeIndex: '0',
};

type Inputs = typeof defaultInputs;

function calcCompression(inputs: Inputs) {
  const d = parseInput(inputs.d);
  const OD = parseInput(inputs.OD);
  const L0 = parseInput(inputs.L0);
  const Nt = parseInput(inputs.Nt);
  const material = MATERIALS[parseInt(inputs.materialIndex)];
  const endType = END_TYPES[parseInt(inputs.endTypeIndex)];

  if (!d || !OD || !L0 || !Nt || d >= OD || Nt <= 0) return null;

  const D = OD - d;
  const ID = OD - 2 * d;
  const C = D / d;
  const Na = Math.max(Nt - endType.activeCoilDeduct, 1);
  const Ls = (Nt + endType.solidHeightFactor) * d;
  const deflection = L0 - Ls;
  const pitch = deflection > 0 ? deflection / Na + d : 0;
  const Kw = wahlFactor(C);
  const G = material.G;
  const k = (G * Math.pow(d, 4)) / (8 * Math.pow(D, 3) * Na);
  const Pmax = k * deflection;
  const tauMax = (8 * Pmax * D) / (Math.PI * Math.pow(d, 3)) * Kw;
  const tauMaxKw = tauMax;
  const indexStatus = springIndexStatus(C);

  return {
    D: D > 0 ? D : null,
    ID: ID > 0 ? ID : null,
    C: C > 0 ? C : null,
    Na: Na > 0 ? Na : null,
    Ls: Ls > 0 ? Ls : null,
    deflection: deflection > 0 ? deflection : null,
    pitch: pitch > 0 ? pitch : null,
    Kw: Kw > 0 ? Kw : null,
    k: k > 0 ? k : null,
    Pmax: Pmax > 0 ? Pmax : null,
    tauMaxKw: tauMaxKw > 0 ? tauMaxKw : null,
    indexStatus,
  };
}

export default function CompressionCalculator() {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);

  const results = useMemo(() => calcCompression(inputs), [inputs]);

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const labelClass = 'block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A] mb-1';
  const inputClass =
    'w-full bg-white border border-gray-300 text-[#4A4A4A] px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors';
  const unitClass = 'text-gray-400 text-xs ml-1';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <div className="space-y-5">
        <div className="bg-[#1B3A6B]/5 border border-[#1B3A6B]/10 p-4 mb-2">
          <p className="text-xs text-[#4A4A4A] leading-relaxed">
            Enter the spring geometry and material below. Results calculate automatically.
            All dimensions in <strong>inches</strong>, forces in <strong>pounds (lb)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Wire Diameter (d) <span className={unitClass}>in</span>
            </label>
            <input type="number" step="0.001" min="0.001" value={inputs.d} onChange={set('d')} className={inputClass} placeholder="0.080" />
          </div>
          <div>
            <label className={labelClass}>
              Outer Diameter (OD) <span className={unitClass}>in</span>
            </label>
            <input type="number" step="0.001" min="0.001" value={inputs.OD} onChange={set('OD')} className={inputClass} placeholder="0.750" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Free Length (L₀) <span className={unitClass}>in</span>
            </label>
            <input type="number" step="0.001" min="0.001" value={inputs.L0} onChange={set('L0')} className={inputClass} placeholder="2.000" />
          </div>
          <div>
            <label className={labelClass}>Total Coils (Nt)</label>
            <input type="number" step="0.5" min="2" value={inputs.Nt} onChange={set('Nt')} className={inputClass} placeholder="10" />
          </div>
        </div>

        <div>
          <label className={labelClass}>End Type</label>
          <select value={inputs.endTypeIndex} onChange={set('endTypeIndex')} className={inputClass}>
            {END_TYPES.map((et, i) => (
              <option key={i} value={i}>{et.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Material</label>
          <select value={inputs.materialIndex} onChange={set('materialIndex')} className={inputClass}>
            {MATERIALS.map((m, i) => (
              <option key={i} value={i}>{m.label}</option>
            ))}
          </select>
        </div>

        </div>
        <div className="mt-5 flex-1 overflow-hidden border border-gray-200 min-h-0">
          <img
            src="/compression-spring-2_-_Edited.jpg"
            alt="Compression spring diagram"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        {results ? (
          <div className="space-y-3">
            <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-widest mb-4">
              Calculated Results
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <ResultRow label="Mean Diameter (D)" value={formatNum(results.D ?? 0)} unit="in" />
              <ResultRow label="Inner Diameter (ID)" value={formatNum(results.ID ?? 0)} unit="in" />
              <ResultRow
                label="Spring Index (C)"
                value={formatNum(results.C ?? 0, 3)}
                unit=""
                status={results.indexStatus}
                hint={results.indexStatus !== 'ok' ? (results.C! < 4 ? 'Index low — difficult to manufacture' : 'Index high — prone to tangling') : 'Optimal range 4–12'}
              />
              <ResultRow label="Active Coils (Na)" value={formatNum(results.Na ?? 0, 1)} unit="" />
              <ResultRow label="Solid Height (Ls)" value={formatNum(results.Ls ?? 0)} unit="in" />
              <ResultRow label="Max Deflection" value={formatNum(results.deflection ?? 0)} unit="in" />
              <ResultRow label="Pitch (p)" value={formatNum(results.pitch ?? 0)} unit="in" />
              <ResultRow label="Wahl Factor (Kw)" value={formatNum(results.Kw ?? 0, 4)} unit="" />
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-widest">
                Load & Stress
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <ResultRow
                  label="Spring Rate (k)"
                  value={formatNum(results.k ?? 0, 3)}
                  unit="lb/in"
                  highlight
                />
                <ResultRow
                  label="Max Load at Solid"
                  value={formatNum(results.Pmax ?? 0, 2)}
                  unit="lb"
                  highlight
                />
                <ResultRow
                  label="Max Torsional Stress"
                  value={results.tauMaxKw ? (results.tauMaxKw / 1000).toFixed(1) : '—'}
                  unit="kpsi"
                />
              </div>
            </div>

            <ResultBadge indexStatus={results.indexStatus} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded">
            <p className="text-gray-400 text-sm text-center">
              Enter valid spring dimensions<br />to see calculated results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  unit,
  status,
  hint,
  highlight,
}: {
  label: string;
  value: string;
  unit: string;
  status?: 'ok' | 'warn' | 'danger';
  hint?: string;
  highlight?: boolean;
}) {
  const statusColor =
    status === 'ok' ? 'text-green-600' : status === 'warn' ? 'text-amber-600' : status === 'danger' ? 'text-red-600' : '';

  return (
    <div className={`p-3 border ${highlight ? 'border-[#1B3A6B] bg-[#1B3A6B]/5' : 'border-gray-100 bg-gray-50'}`}>
      <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-1">{label}</div>
      <div className={`text-base font-bold ${statusColor || (highlight ? 'text-[#1B3A6B]' : 'text-[#4A4A4A]')}`}>
        {value} <span className="text-xs font-normal text-gray-400">{unit}</span>
      </div>
      {hint && <div className="text-[10px] text-gray-400 mt-0.5">{hint}</div>}
    </div>
  );
}
