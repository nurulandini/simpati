import {
  Archive,
  CircleCheckBig,
  FileText,
} from "lucide-react";

import StatCard from "./StatCard";

import type { Laporan } from "@/types/dashboard";

interface DashboardStatsProps {
  data: Laporan[];
}

function DashboardStats({ data }: DashboardStatsProps) {
  const total = data.length;

  const final = data.filter(
    (item) => item.statusFile === "Final"
  ).length;

  const draft = data.filter(
    (item) => item.statusFile === "Draft"
  ).length;

  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
        title="Total Arsip"
        value={total}
        description="Jumlah seluruh arsip"
        icon={Archive}
        color="blue"
      />

      <StatCard
        title="Arsip Final"
        value={final}
        description="Dokumen telah final"
        icon={CircleCheckBig}
        color="green"
      />

      <StatCard
        title="Draft"
        value={draft}
        description="Dokumen masih draft"
        icon={FileText}
        color="orange"
      />
    </section>
  );
}

export default DashboardStats;