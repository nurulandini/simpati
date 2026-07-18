export interface Laporan {
  id: string;
  timestamp: string;
  perangkatDaerah: string;
  rencanaHasilKerja: string;
  tahunAnggaran: string;
  triwulan: string;
  judulFile: string;
  uploadFile: string;
  statusFile: string;
}

export interface DashboardResponse {
  success: boolean;
  total: number;
  data: Laporan[];
}