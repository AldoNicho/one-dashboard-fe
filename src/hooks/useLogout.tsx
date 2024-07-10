import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    typeof window !== "undefined" ? localStorage.removeItem("token") : null;
    typeof window !== "undefined" ? localStorage.removeItem("user") : null;
    router.replace("/auth/signin");
  };

  return { handleLogout };
};
