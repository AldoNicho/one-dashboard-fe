"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import { apiAuthSignin } from "@/api/auth";

export const useSigninHook = () => {
  const router = useRouter();
  const { handleLogout } = useLogout();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (event: any) => {
    setLoading(true);
    event.preventDefault();

    const response = await apiAuthSignin(email, password);

    if (response.status === 401) {
      setLoading(false);
      handleLogout();
    } else if (response.status === 200) {
      const data = await response.json();
      typeof window !== "undefined"
        ? localStorage.setItem("token", data.data.token)
        : null;
      typeof window !== "undefined"
        ? localStorage.setItem("user", JSON.stringify(data.data.user))
        : null;
      setErrorMessage("");
      setLoading(false);
      window.location.href = "/";
    } else {
      const data = await response.json();
      console.error(data);
      setEmail("");
      setPassword("");
      setErrorMessage(data.message);
      setLoading(false);
    }
  };

  return {
    email,
    loading,
    password,
    errorMessage,
    setEmail,
    setPassword,
    handleSignIn,
  };
};
