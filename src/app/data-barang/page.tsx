import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import DataBarang from "@/components/Pages/DataBarang/page";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <DataBarang />
    </DefaultLayout>
  );
};

export default BasicChartPage;
