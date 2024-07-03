import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Laporan from "@/components/Pages/Laporan/page";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Laporan />
    </DefaultLayout>
  );
};

export default BasicChartPage;
