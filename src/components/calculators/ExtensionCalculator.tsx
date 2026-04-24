import { useMemo, useState } from 'react';
import { MATERIALS, wahlFactor, springIndexStatus, formatNum, parseInput } from './springFormulas';
import ResultBadge from './ResultBadge';

const HOOK_TYPES = [
  { label: 'Machine Loop (Standard)', addFactor: 1.0 },
  { label: 'Cross Center Loop', addFactor: 1.1 },
  { label: 'Extended Hook', addFactor: 1.5 },
  { label: 'Long Round End Hook', addFactor: 1.25 },
  { label: 'Half Loop', addFactor: 0.5 },
];

const defaultInputs = {
  d: '0.054',
  OD: '0.500',
  Na: '15',
  P: '5.0',
  materialIndex: '0',
  hookTypeIndex: '0',
};

type Inputs = typeof defaultInputs;

function calcExtension(inputs: Inputs) {
  const d = parseInput(inputs.d);
  const OD = parseInput(inputs.OD);
  const Na = parseInput(inputs.Na);
  const P = parseInput(inputs.P);
  const material = MATERIALS[parseInt(inputs.materialIndex)];
  const hookType = HOOK_TYPES[parseInt(inputs.hookTypeIndex)];

  if (!d || !OD || !Na || d >= OD) return null;

  const D = OD - d;
  const ID = OD - 2 * d;
  const C = D / d;
  const G = material.G;

  const k = (G * Math.pow(d, 4)) / (8 * Math.pow(D, 3) * Na);

  const bodyLength = (Na + 1) * d;
  const hookAdd = OD * hookType.addFactor;
  const freeLength = bodyLength + 2 * hookAdd;

  const Kw = wahlFactor(C);

  const extension = P > 0 ? P / k : 0;
  const extendedLength = freeLength + extension;
  const stress = P > 0 ? (8 * P * D) / (Math.PI * Math.pow(d, 3)) * Kw : 0;

  const indexStatus = springIndexStatus(C);

  return {
    D,
    ID,
    C,
    k,
    Kw,
    bodyLength,
    freeLength,
    extension: P > 0 ? extension : null,
    extendedLength: P > 0 ? extendedLength : null,
    stress: P > 0 ? stress : null,
    indexStatus,
  };
}

export default function ExtensionCalculator() {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);

  const results = useMemo(() => calcExtension(inputs), [inputs]);

  const set =
    (key: keyof Inputs) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
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
            Extension springs store energy by resisting a pulling (tensile) force. Enter geometry
            and an applied load to calculate extension and stress. All dimensions in{' '}
            <strong>inches</strong>, forces in <strong>pounds (lb)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Wire Diameter (d) <span className={unitClass}>in</span>
            </label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              value={inputs.d}
              onChange={set('d')}
              className={inputClass}
              placeholder="0.054"
            />
          </div>
          <div>
            <label className={labelClass}>
              Outer Diameter (OD) <span className={unitClass}>in</span>
            </label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              value={inputs.OD}
              onChange={set('OD')}
              className={inputClass}
              placeholder="0.500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Active Coils (Na)</label>
            <input
              type="number"
              step="0.5"
              min="1"
              value={inputs.Na}
              onChange={set('Na')}
              className={inputClass}
              placeholder="15"
            />
          </div>
          <div>
            <label className={labelClass}>
              Applied Load (P) <span className={unitClass}>lb</span>
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              value={inputs.P}
              onChange={set('P')}
              className={inputClass}
              placeholder="5.0"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Hook / End Type</label>
          <select
            value={inputs.hookTypeIndex}
            onChange={set('hookTypeIndex')}
            className={inputClass}
          >
            {HOOK_TYPES.map((h, i) => (
              <option key={i} value={i}>
                {h.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Material</label>
          <select
            value={inputs.materialIndex}
            onChange={set('materialIndex')}
            className={inputClass}
          >
            {MATERIALS.map((m, i) => (
              <option key={i} value={i}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        </div>
        <div className="mt-5 flex-1 overflow-hidden border border-gray-200 min-h-0">
          <img
            src="/cap-extension-lg copy.jpg"
            alt="Extension spring diagram"
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
              <ResultRow label="Mean Diameter (D)" value={formatNum(results.D)} unit="in" />
              <ResultRow label="Inner Diameter (ID)" value={formatNum(results.ID)} unit="in" />
              <ResultRow
                label="Spring Index (C)"
                value={formatNum(results.C, 3)}
                unit=""
                status={results.indexStatus}
                hint={
                  results.indexStatus !== 'ok'
                    ? results.C < 4
                      ? 'Index low — difficult to coil'
                      : 'Index high — prone to distortion'
                    : 'Optimal range 4–12'
                }
              />
              <ResultRow label="Wahl Factor (Kw)" value={formatNum(results.Kw, 4)} unit="" />
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-widest">
                Geometry
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <ResultRow label="Body Length" value={formatNum(results.bodyLength)} unit="in" />
                <ResultRow
                  label="Free Length (approx.)"
                  value={formatNum(results.freeLength)}
                  unit="in"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-widest">
                Load & Deflection
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <ResultRow
                  label="Spring Rate (k)"
                  value={formatNum(results.k, 3)}
                  unit="lb/in"
                  highlight
                />
                {results.extension !== null && (
                  <ResultRow
                    label="Extension at Load"
                    value={formatNum(results.extension)}
                    unit="in"
                    highlight
                  />
                )}
                {results.extendedLength !== null && (
                  <ResultRow
                    label="Extended Length"
                    value={formatNum(results.extendedLength)}
                    unit="in"
                  />
                )}
                {results.stress !== null && (
                  <ResultRow
                    label="Torsional Stress"
                    value={(results.stress / 1000).toFixed(1)}
                    unit="kpsi"
                  />
                )}
              </div>
            </div>

            <ResultBadge indexStatus={results.indexStatus} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded">
            <p className="text-gray-400 text-sm text-center">
              Enter valid spring dimensions
              <br />
              to see calculated results
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
    status === 'ok'
      ? 'text-green-600'
      : status === 'warn'
      ? 'text-amber-600'
      : status === 'danger'
      ? 'text-red-600'
      : '';

  return (
    <div
      className={`p-3 border ${
        highlight ? 'border-[#1B3A6B] bg-[#1B3A6B]/5' : 'border-gray-100 bg-gray-50'
      }`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-1">
        {label}
      </div>
      <div
        className={`text-base font-bold ${
          statusColor || (highlight ? 'text-[#1B3A6B]' : 'text-[#4A4A4A]')
        }`}
      >
        {value} <span className="text-xs font-normal text-gray-400">{unit}</span>
      </div>
      {hint && <div className="text-[10px] text-gray-400 mt-0.5">{hint}</div>}
    </div>
  );
}
