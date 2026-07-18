import { ArrowLeft, Archive } from "lucide-react";
import { Link } from "react-router-dom";

function DashboardHeader() {
  return (
    <section className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
            <Archive size={34} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Dashboard Arsip
            </h1>

            <p className="mt-1 text-blue-100">
              Monitoring dan pencarian arsip dokumen perangkat daerah.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-blue-700"
        >
          <ArrowLeft size={18} />
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}

export default DashboardHeader;