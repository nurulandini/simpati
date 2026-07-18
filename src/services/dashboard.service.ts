import type { DashboardResponse } from "@/types/dashboard";

const API_URL =
  "https://script.google.com/macros/s/AKfycbw3-5rXE190TAW9TPOw_Q2Ia2nCMTxr788UrIlRuFr_9Y-ulIGLQFNIsYSPj9PcShaAkQ/exec";

export async function getDashboardData(): Promise<DashboardResponse> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Gagal mengambil data dashboard.");
  }

  return response.json();
}
