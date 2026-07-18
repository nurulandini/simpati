import ChartCard from "./charts/ChartCard";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import type { Laporan } from "@/types/dashboard";

interface Props {
  data: Laporan[];
}

interface PieChartData {
  name: string;
  value: number;
}

interface BarChartData {
  label: string;
  total: number;
}

const STATUS_COLORS = [
  "#5B8DEF", // Blue Macaron
  "#5ED3A6", // Mint
  "#FFD166", // Honey Yellow
  "#FF7F7F", // Coral
  "#9B8AFB", // Lavender
  "#59D4E8", // Aqua
];

const OPD_COLORS = [
  "#5B8DEF",
  "#6FA8FF",
  "#7BC8F6",
  "#59D4E8",
  "#66C7FF",
  "#8EC5FF",
  "#7EA7FF",
  "#96B8FF",
];

const TAHUN_COLORS = [
  "#5ED3A6",
  "#73E0B5",
  "#6EE7B7",
  "#8FE3C5",
  "#A7F3D0",
  "#62D2A2",
  "#7DDBB7",
];

const TRIWULAN_COLORS = [
  "#FFB84C",
  "#FFC857",
  "#FFD166",
  "#FFAD60",
  "#FFA94D",
  "#FDCB6E",
  "#FFD98A",
];

const RENCANA_COLORS = [
  "#9B8AFB",
  "#B197FC",
  "#C8A2FF",
  "#D291FF",
  "#F28BCB",
  "#FF9EC4",
  "#FF8FAB",
  "#A78BFA",
  "#8B9CFF",
];

function DashboardCharts({ data }: Props) {
  const groupBarData = (
    key: keyof Pick<
      Laporan,
      | "perangkatDaerah"
      | "tahunAnggaran"
      | "triwulan"
      | "rencanaHasilKerja"
    >
  ): BarChartData[] =>
    Object.values(
      data.reduce<Record<string, BarChartData>>((acc, item) => {
        const value = item[key];

        acc[value] ??= {
          label: value,
          total: 0,
        };

        acc[value].total++;

        return acc;
      }, {})
    );

  const statusData = Object.values(
    data.reduce<Record<string, PieChartData>>((acc, item) => {
      acc[item.statusFile] ??= {
        name: item.statusFile,
        value: 0,
      };

      acc[item.statusFile].value++;

      return acc;
    }, {})
  );

  const opdData = groupBarData("perangkatDaerah");
  const tahunData = groupBarData("tahunAnggaran");
  const twData = groupBarData("triwulan");
  const rencanaData = groupBarData("rencanaHasilKerja");

  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Status Dokumen">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={110}
                paddingAngle={2}
                animationDuration={800}
              >
                {statusData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={STATUS_COLORS[index % STATUS_COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Arsip per Perangkat Daerah">
          <ResponsiveContainer>
            <BarChart data={opdData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" hide />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="total"
                radius={[6, 6, 0, 0]}
                animationDuration={800}
              >
                {opdData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={OPD_COLORS[index % OPD_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Arsip per Tahun Anggaran">
          <ResponsiveContainer>
            <BarChart data={tahunData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="total"
                radius={[6, 6, 0, 0]}
                animationDuration={800}
              >
                {tahunData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={TAHUN_COLORS[index % TAHUN_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Arsip per Triwulan">
          <ResponsiveContainer>
            <BarChart data={twData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="total"
                radius={[6, 6, 0, 0]}
                animationDuration={800}
              >
                {twData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={TRIWULAN_COLORS[index % TRIWULAN_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Arsip per Rencana Hasil Kerja">
        <ResponsiveContainer>
          <BarChart
            data={rencanaData}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis
              dataKey="label"
              type="category"
              width={220}
            />
            <Tooltip />

            <Bar
              dataKey="total"
              radius={[0, 6, 6, 0]}
              animationDuration={800}
            >
              {rencanaData.map((_, index) => (
                <Cell
                  key={index}
                  fill={RENCANA_COLORS[index % RENCANA_COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </section>
  );
}

export default DashboardCharts;