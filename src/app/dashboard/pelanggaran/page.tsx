"use client";

import { AlertTriangle, CheckCircle2, Shield } from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import TrenPelanggaran from "@/components/dashboard/TrenPelanggaran";
import TipePelanggaran from "@/components/dashboard/TipePelanggaran";
import SeverityDistributionList from "@/components/dashboard/TingkatPelanggaran";
import TopViolatorsList from "@/components/dashboard/TopPelanggaran";
import { violationStats } from "@/lib/dashboardData";

export default function PelanggaranPage() {
  const { totalViolations, monthlyViolations, violationTypes, severityDistribution, topViolators } =
    violationStats;
  const totalResolved = monthlyViolations.reduce((sum, m) => sum + m.resolved, 0);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Data Pelanggaran
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Pelanggaran"
            value={totalViolations}
            icon={AlertTriangle}
            color="bg-red-500"
            subtitle="6 bulan terakhir"
          />
          <StatCard
            title="Selesai Ditangani"
            value={totalResolved}
            icon={CheckCircle2}
            color="bg-green-500"
            subtitle="Pelanggaran diselesaikan"
          />
          <StatCard
            title="Jenis Pelanggaran"
            value={violationTypes.length}
            icon={Shield}
            color="bg-purple-500"
            subtitle="Kategori tercatat"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <TrenPelanggaran data={monthlyViolations} />
          <TipePelanggaran data={violationTypes} total={totalViolations} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <SeverityDistributionList data={severityDistribution} />
          <TopViolatorsList data={topViolators} />
        </div>
      </div>
    </div>
  );
}
