import { Search, RotateCcw } from "lucide-react";

interface Props {
  keyword: string;
  opd: string;
  rhk: string;
  tahun: string;
  triwulan: string;
  status: string;

  opdOptions: string[];
  rhkOptions: string[];
  tahunOptions: string[];
  triwulanOptions: string[];
  statusOptions: string[];

  onKeywordChange: (value: string) => void;
  onOpdChange: (value: string) => void;
  onRhkChange: (value: string) => void;
  onTahunChange: (value: string) => void;
  onTriwulanChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

function DashboardFilter({
  keyword,
  opd,
  rhk,
  tahun,
  triwulan,
  status,
  opdOptions,
  rhkOptions,
  tahunOptions,
  triwulanOptions,
  statusOptions,
  onKeywordChange,
  onOpdChange,
  onRhkChange,
  onTahunChange,
  onTriwulanChange,
  onStatusChange,
  onReset,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">

        {/* Search */}

        <div className="relative xl:col-span-2">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            placeholder="Cari Judul / OPD..."
            className="w-full rounded-xl border border-slate-200 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* OPD */}

        <select
          value={opd}
          onChange={(e) => onOpdChange(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          <option value="">Semua OPD</option>

          {opdOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* RHK */}

        <select
          value={rhk}
          onChange={(e) => onRhkChange(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          <option value="">Semua RHK</option>

          {rhkOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Tahun */}

        <select
          value={tahun}
          onChange={(e) => onTahunChange(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          <option value="">Semua Tahun</option>

          {tahunOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* TW */}

        <select
          value={triwulan}
          onChange={(e) => onTriwulanChange(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          <option value="">Semua TW</option>

          {triwulanOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          <option value="">Semua Status</option>

          {statusOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      <div className="mt-5 flex justify-end">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-800"
        >
          <RotateCcw size={16} />
          Reset Filter
        </button>
      </div>

    </section>
  );
}

export default DashboardFilter;