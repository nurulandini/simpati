import { Eye } from "lucide-react";

import StatusBadge from "./StatusBadge";

import type { Laporan } from "@/types/dashboard";

interface Props {
  data: Laporan[];
  total: number;
}

const getOPDShortName = (name: string) => {
  const match = name.match(/^(.+?)\s*\(/);

  if (match) {
    return match[1].trim();
  }

  return name.trim();
};

function DashboardTable({ data, total }: Props) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-2 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Daftar Arsip
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Menampilkan{" "}
            <span className="font-semibold text-slate-700">
              {data.length}
            </span>{" "}
            dari{" "}
            <span className="font-semibold text-slate-700">
              {total}
            </span>{" "}
            arsip
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="w-16 px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                No
              </th>

              <th className="min-w-[320px] px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Judul File
              </th>

              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                OPD
              </th>

              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Tahun
              </th>

              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                TW
              </th>

              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className="border-t border-slate-100 transition-colors even:bg-slate-50/40 hover:bg-blue-50/50"
              >
                <td className="px-5 py-4 text-center font-semibold text-slate-500">
                  {index + 1}
                </td>

                <td className="max-w-md px-5 py-4">
                  <div
                    title={item.judulFile}
                    className="line-clamp-2 font-semibold leading-6 text-slate-800"
                  >
                    {item.judulFile}
                  </div>
                </td>

                <td className="px-5 py-4 text-center">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {getOPDShortName(item.perangkatDaerah)}
                  </span>
                </td>

                <td className="px-5 py-4 text-center font-medium text-slate-700">
                  {item.tahunAnggaran}
                </td>

                <td className="px-5 py-4 text-center">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.triwulan}
                  </span>
                </td>

                <td className="px-5 py-4 text-center">
                  <StatusBadge status={item.statusFile} />
                </td>

                <td className="px-5 py-4 text-center">
                  {item.uploadFile ? (
                    <button
                      onClick={() =>
                        window.open(
                          item.uploadFile,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-100"
                    >
                      <Eye size={16} />
                      Lihat
                    </button>
                  ) : (
                    <span className="text-sm text-slate-400">
                      Tidak ada file
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {!data.length && (
              <tr>
                <td
                  colSpan={7}
                  className="py-16 text-center"
                >
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-slate-600">
                      Data tidak ditemukan
                    </p>

                    <p className="text-sm text-slate-400">
                      Coba ubah filter pencarian atau reset filter.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DashboardTable;