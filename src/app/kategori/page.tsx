import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Kategori from "@/components/Pages/Kategori/page";
import React from "react";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const CategoryPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Kategori />
    </DefaultLayout>
  );
};

export default CategoryPage;
