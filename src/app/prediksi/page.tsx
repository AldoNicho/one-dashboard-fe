import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Prediksi from "@/components/Pages/Prediksi/page";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Prediksi />
    </DefaultLayout>
  );
};

export default BasicChartPage;
