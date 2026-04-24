import { useMemo, useState } from 'react';
import { MATERIALS, torsionInnerFactor, springIndexStatus, formatNum, parseInput } from './springFormulas';
import ResultBadge from './ResultBadge';

const LEG_TYPES = [
  { label: 'Straight Torsion (0°)' },
  { label: 'Straight Offset (90°)' },
  { label: 'Straight Offset (180°)' },
  { label: 'Short Hook' },
  { label: 'Long Hook' },
];

const defaultInputs = {
  d: '0.062',
  OD: '0.625',
  Na: '8',
  angle: '90',
  materialIndex: '0',
  legTypeIndex: '0',
};

type Inputs = typeof defaultInputs;

function calcTorsion(inputs: Inputs) {
  const d = parseInput(inputs.d);
  const OD = parseInput(inputs.OD);
  const Na = parseInput(inputs.Na);
  const angleDeg = parseInput(inputs.angle);
  const material = MATERIALS[parseInt(inputs.materialIndex)];

  if (!d || !OD || !Na || d >= OD || angleDeg <= 0) return null;

  const D = OD - d;
  const ID = OD - 2 * d;
  const C = D / d;
  const E = material.E;

  const Ki = torsionInnerFactor(C);

  const k_rad = (E * Math.pow(d, 4)) / (64 * Na * D);
  const k_deg = k_rad * (Math.PI / 180);

  const angleRad = angleDeg * (Math.PI / 180);
  const torque = k_rad * angleRad;

  const torque_inlb = torque;
  const torque_ftlb = torque / 12;

  const stress = (32 * torque) / (Math.PI * Math.pow(d, 3)) * Ki;

  const Na_wound = Na + angleDeg / 360;
  const D_wound = (Na * D) / Na_wound;
  const ID_wound = D_wound - d;
  const OD_wound = D_wound + d;

  const indexStatus = springIndexStatus(C);

  return {
    D,
    ID,
    C,
    Ki,
    k_deg,
    torque_inlb,
    torque_ftlb,
    stress,
    D_wound,
    ID_wound,
    OD_wound,
    indexStatus,
  };
}

export default function TorsionCalculator() {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);

  const results = useMemo(() => calcTorsion(inputs), [inputs]);

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
            Torsion springs exert a rotational (torque) force along their axis. Enter the spring
            geometry and deflection angle to calculate torque and stress. All dimensions in{' '}
            <strong>inches</strong>, torque in <strong>in-lb</strong>.
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
              placeholder="0.062"
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
              placeholder="0.625"
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
              placeholder="8"
            />
          </div>
          <div>
            <label className={labelClass}>
              Deflection Angle <span className={unitClass}>degrees</span>
            </label>
            <input
              type="number"
              step="1"
              min="1"
              max="3600"
              value={inputs.angle}
              onChange={set('angle')}
              className={inputClass}
              placeholder="90"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Leg / End Type</label>
          <select
            value={inputs.legTypeIndex}
            onChange={set('legTypeIndex')}
            className={inputClass}
          >
            {LEG_TYPES.map((l, i) => (
              <option key={i} value={i}>
                {l.label}
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
            src="/Torsion_Springs.png"
            alt="Torsion spring diagram"
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
                      ? 'Index low — difficult to manufacture'
                      : 'Index high — fragile spring'
                    : 'Optimal range 4–12'
                }
              />
              <ResultRow
                label="Inner Fiber Factor (Ki)"
                value={formatNum(results.Ki, 4)}
                unit=""
              />
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-widest">
                Torque & Stress
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <ResultRow
                  label="Spring Rate (k)"
                  value={formatNum(results.k_deg, 4)}
                  unit="in-lb/°"
                  highlight
                />
                <ResultRow
                  label="Torque at Angle"
                  value={formatNum(results.torque_inlb, 3)}
                  unit="in-lb"
                  highlight
                />
                <ResultRow
                  label="Torque (ft-lb)"
                  value={formatNum(results.torque_ftlb, 4)}
                  unit="ft-lb"
                />
                <ResultRow
                  label="Bending Stress"
                  value={(results.stress / 1000).toFixed(1)}
                  unit="kpsi"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <h4 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-widest">
                Wound Dimensions (at deflection)
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <ResultRow
                  label="OD (wound)"
                  value={formatNum(results.OD_wound)}
                  unit="in"
                />
                <ResultRow
                  label="Mean D (wound)"
                  value={formatNum(results.D_wound)}
                  unit="in"
                />
                <ResultRow
                  label="ID (wound)"
                  value={formatNum(results.ID_wound)}
                  unit="in"
                />
              </div>
              <p className="text-[10px] text-gray-400">
                Note: Torsion springs wind tighter under load, reducing coil diameters. Verify
                clearance for mandrel/arbor applications.
              </p>
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
