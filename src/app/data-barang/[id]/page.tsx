import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import TambahBarang from "@/components/Pages/TambahBarang/page";
import UpdateBarang from "@/components/Pages/UpdateBarang/page";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <UpdateBarang />
    </DefaultLayout>
  );
};

export default BasicChartPage;
