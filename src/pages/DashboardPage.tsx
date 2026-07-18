import { useMemo, useState } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFilter from "@/components/dashboard/DashboardFilter";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import DashboardTable from "@/components/dashboard/DashboardTable";
import { useDashboard } from "@/hooks/useDashboard";

function DashboardPage() {
  const { dashboard, loading, error } = useDashboard();

  const [keyword, setKeyword] = useState("");
  const [opd, setOpd] = useState("");
  const [rhk, setRhk] = useState("");
  const [tahun, setTahun] = useState("");
  const [triwulan, setTriwulan] = useState("");
  const [status, setStatus] = useState("");

  // Default value agar Hook selalu berjalan
  const data = dashboard?.data ?? [];
  const total = dashboard?.total ?? 0;

  const filteredData = useMemo(() => {
    const search = keyword.toLowerCase().trim();

    return data.filter((item) => {
      if (
        search &&
        !item.judulFile.toLowerCase().includes(search) &&
        !item.perangkatDaerah.toLowerCase().includes(search) &&
        !item.rencanaHasilKerja.toLowerCase().includes(search)
      ) {
        return false;
      }

      if (opd && item.perangkatDaerah !== opd) return false;

      if (rhk && item.rencanaHasilKerja !== rhk) return false;

      if (tahun && item.tahunAnggaran !== tahun) return false;

      if (triwulan && item.triwulan !== triwulan) return false;

      if (status && item.statusFile !== status) return false;

      return true;
    });
  }, [
    data,
    keyword,
    opd,
    rhk,
    tahun,
    triwulan,
    status,
  ]);

  const opdOptions = useMemo(
    () => [...new Set(data.map((i) => i.perangkatDaerah))].sort(),
    [data]
  );

  const rhkOptions = useMemo(
    () => [...new Set(data.map((i) => i.rencanaHasilKerja))].sort(),
    [data]
  );

  const tahunOptions = useMemo(
    () => [...new Set(data.map((i) => i.tahunAnggaran))].sort(),
    [data]
  );

  const triwulanOptions = useMemo(
    () => [...new Set(data.map((i) => i.triwulan))].sort(),
    [data]
  );

  const statusOptions = useMemo(
    () => [...new Set(data.map((i) => i.statusFile))].sort(),
    [data]
  );

  const resetFilter = () => {
    setKeyword("");
    setOpd("");
    setRhk("");
    setTahun("");
    setTriwulan("");
    setStatus("");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 lg:px-8">
        <DashboardHeader />

        <DashboardFilter
          keyword={keyword}
          opd={opd}
          rhk={rhk}
          tahun={tahun}
          triwulan={triwulan}
          status={status}
          opdOptions={opdOptions}
          rhkOptions={rhkOptions}
          tahunOptions={tahunOptions}
          triwulanOptions={triwulanOptions}
          statusOptions={statusOptions}
          onKeywordChange={setKeyword}
          onOpdChange={setOpd}
          onRhkChange={setRhk}
          onTahunChange={setTahun}
          onTriwulanChange={setTriwulan}
          onStatusChange={setStatus}
          onReset={resetFilter}
        />

        <DashboardStats data={filteredData} />

        <DashboardCharts data={filteredData} />

        <DashboardTable
          data={filteredData}
          total={total}
        />
      </div>
    </main>
  );
}

export default DashboardPage;