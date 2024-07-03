import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import LaporanDetail from "@/components/Pages/Laporan/Detail/page";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <LaporanDetail />
    </DefaultLayout>
  );
};

export default BasicChartPage;
