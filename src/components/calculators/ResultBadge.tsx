import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

interface Props {
  indexStatus: 'ok' | 'warn' | 'danger';
}

export default function ResultBadge({ indexStatus }: Props) {
  if (indexStatus === 'ok') {
    return (
      <div className="flex items-start gap-3 bg-green-50 border border-green-200 p-3 mt-2">
        <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
        <p className="text-green-700 text-xs leading-relaxed">
          Spring index is within optimal range (4–12). This design is manufacturable with standard tooling.
        </p>
      </div>
    );
  }
  if (indexStatus === 'warn') {
    return (
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-3 mt-2">
        <AlertTriangle size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-amber-700 text-xs leading-relaxed">
          Spring index is outside optimal range. This design may require specialized tooling or material adjustments. Contact our engineers for review.
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-3 mt-2">
      <XCircle size={15} className="text-red-600 flex-shrink-0 mt-0.5" />
      <p className="text-red-700 text-xs leading-relaxed">
        Spring index is outside manufacturable range. Please revise your dimensions. Contact our team for design assistance.
      </p>
    </div>
  );
}

export function DisclaimerNote() {
  return (
    <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-3 mt-4">
      <Info size={15} className="text-[#6B7FA3] flex-shrink-0 mt-0.5" />
      <p className="text-gray-500 text-xs leading-relaxed">
        <strong>Engineering Disclaimer:</strong> These calculations are provided as a general design
        guide based on standard spring engineering formulas. Results are approximate and do not
        account for all real-world factors such as fatigue life, temperature effects, or surface
        conditions. Always consult a qualified engineer before finalizing a design for production.
      </p>
    </div>
  );
}
