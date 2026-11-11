import { DataBar, DataPie, ViolationStats } from "@/types";

export const barData: DataBar[] = [
  { nama_kelas: "X-1", "Laki-Laki": 18, "Perempuan": 17 },
  { nama_kelas: "X-2", "Laki-Laki": 16, "Perempuan": 19 },
  { nama_kelas: "X-3", "Laki-Laki": 20, "Perempuan": 15 },
  { nama_kelas: "XI-1", "Laki-Laki": 17, "Perempuan": 18 },
  { nama_kelas: "XI-2", "Laki-Laki": 19, "Perempuan": 16 },
  { nama_kelas: "XI-3", "Laki-Laki": 15, "Perempuan": 20 },
  { nama_kelas: "XII-1", "Laki-Laki": 21, "Perempuan": 14 },
  { nama_kelas: "XII-2", "Laki-Laki": 16, "Perempuan": 19 },
  { nama_kelas: "XII-3", "Laki-Laki": 18, "Perempuan": 17 },
];

export const pieData: DataPie[] = [
  { name: "Laki-Laki", value: 623 },
  { name: "Perempuan", value: 624 },
];

export const violationStats: ViolationStats = {
  totalViolations: 243,
  monthlyViolations: [
    { month: "Mei", violations: 45, resolved: 38 },
    { month: "Jun", violations: 52, resolved: 48 },
    { month: "Jul", violations: 38, resolved: 35 },
    { month: "Agu", violations: 61, resolved: 52 },
    { month: "Sep", violations: 47, resolved: 42 },
    { month: "Okt", violations: 43, resolved: 39 },
  ],
  violationTypes: [
    { id: 1, type: "Terlambat", count: 67, percentage: 27.6 },
    { id: 2, type: "Tidak Berseragam", count: 51, percentage: 21.0 },
    { id: 3, type: "Tidak Mengerjakan Tugas", count: 43, percentage: 17.7 },
    { id: 4, type: "Keluar Tanpa Izin", count: 38, percentage: 15.6 },
    { id: 5, type: "Merokok", count: 24, percentage: 9.9 },
    { id: 6, type: "Berkelahi", count: 12, percentage: 4.9 },
    { id: 7, type: "Lainnya", count: 8, percentage: 3.3 },
  ],
  severityDistribution: [
    { severity: "Ringan", count: 142, color: "#10b981" },
    { severity: "Sedang", count: 78, color: "#f59e0b" },
    { severity: "Berat", count: 23, color: "#ef4444" },
  ],
  topViolators: [
    { name: "Ahmad Fauzi", violations: 12 },
    { name: "Budi Santoso", violations: 9 },
    { name: "Citra Dewi", violations: 8 },
    { name: "Deni Pratama", violations: 7 },
    { name: "Eka Putri", violations: 6 },
  ],
};
