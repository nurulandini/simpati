import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold text-slate-700">
        {title}
      </h3>

      <div className="h-80">
        {children}
      </div>
    </div>
  );
}

export default ChartCard;