"use client";

import { GraduationCap, TrendingUp, Users } from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import SiswaChart from "@/components/dashboard/SiswaChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { barData } from "@/lib/dashboardData";

export default function KelasPage() {
  const rows = barData.map((k) => ({
    nama: k.nama_kelas,
    laki: k["Laki-Laki"],
    perempuan: k["Perempuan"],
    total: k["Laki-Laki"] + k["Perempuan"],
  }));
  const totalSiswa = rows.reduce((sum, r) => sum + r.total, 0);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Data Kelas
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Kelas"
            value={rows.length}
            icon={GraduationCap}
            color="bg-green-500"
            subtitle="Kelas aktif"
          />
          <StatCard
            title="Total Siswa"
            value={totalSiswa}
            icon={Users}
            color="bg-blue-500"
            subtitle="Siswa di semua kelas"
          />
          <StatCard
            title="Rata-Rata per Kelas"
            value={Math.round(totalSiswa / rows.length)}
            icon={TrendingUp}
            color="bg-orange-500"
            subtitle="Siswa per kelas"
          />
        </div>

        <SiswaChart data={barData} />

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Daftar Kelas
              </CardTitle>
              <Badge variant="outline">{rows.length} Kelas</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="py-2 font-medium">Nama Kelas</th>
                  <th className="py-2 font-medium text-right">Laki-Laki</th>
                  <th className="py-2 font-medium text-right">Perempuan</th>
                  <th className="py-2 font-medium text-right">Total Siswa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((r) => (
                  <tr key={r.nama} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-2.5 font-medium">{r.nama}</td>
                    <td className="py-2.5 text-right text-gray-600">{r.laki}</td>
                    <td className="py-2.5 text-right text-gray-600">{r.perempuan}</td>
                    <td className="py-2.5 text-right font-semibold">{r.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-200 font-semibold">
                  <td className="py-2.5">Total</td>
                  <td className="py-2.5 text-right">
                    {rows.reduce((s, r) => s + r.laki, 0)}
                  </td>
                  <td className="py-2.5 text-right">
                    {rows.reduce((s, r) => s + r.perempuan, 0)}
                  </td>
                  <td className="py-2.5 text-right">{totalSiswa}</td>
                </tr>
              </tfoot>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
