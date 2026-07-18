import { useEffect, useState } from "react";
import { getDashboardData } from "@/services/dashboard.service";
import type { DashboardResponse } from "@/types/dashboard";

export function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const result = await getDashboardData();

      setDashboard(result);
    } catch {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  }

  return {
    dashboard,
    loading,
    error,
    reload: loadDashboard,
  };
}