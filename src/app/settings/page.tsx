import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSettingHooks } from "@/hooks/pageHooks/useSettingHooks";
import ContentSettings from "@/components/Settings";

export const metadata: Metadata = {
  title: "Toko Dewi",
  description: "Toko Dewi",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Pengaturan Akun" />
        <ContentSettings />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
