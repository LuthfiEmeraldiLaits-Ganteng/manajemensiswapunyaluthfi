export interface DataBar {
  nama_kelas: string;
  "Laki-Laki": number;
  "Perempuan": number;
}

export interface DataPie {
  name: string;
  value: number;
}

export interface DataTahunLahir {
  year: number;
  count: number;
}

export interface DataTrenPelanggaran {
  month: string;
  violations: number;
  resolved: number;
}

export interface DataJenisPelanggaran {
  id: number;
  type: string;
  count: number;
  percentage: number;
}

export interface DataTingkatPelanggaran {
  severity: string;
  count: number;
  color: string;
}

export interface DataTopPelanggaran {
  name: string;
  violations: number;
}

export interface ViolationStats {
  totalViolations: number;
  monthlyViolations: DataTrenPelanggaran[];
  violationTypes: DataJenisPelanggaran[];
  severityDistribution: DataTingkatPelanggaran[];
  topViolators: DataTopPelanggaran[];
}

export interface DataDashboard {
  totalSiswa: number;
  totalKelas: number;
  barData: DataBar[];
  pieData: DataPie[];
  birthYearData: DataTahunLahir[];
  violationStats: ViolationStats;
}
