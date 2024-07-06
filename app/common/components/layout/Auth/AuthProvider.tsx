"use client";

import { getSession } from "@/common/utils/session/get-session";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const checkAccessToken = async () => {
    const auth_info = await getSession();

    if (!auth_info?.data?.accessToken) {
      location.replace("/login");
      return;
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, []);

  return children;
}
