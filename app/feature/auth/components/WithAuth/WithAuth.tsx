"use client";

import { getSession } from "@common/utils/getSession";
import { useEffect } from "react";

type AuthOption = {
  block: "unauthenticated" | "activated";
};

export const WithAuth = (Component: React.FC, { block }: AuthOption) => {
  const AuthenticatedComponent = () => {
    useEffect(() => {
      const getUser = async () => {
        const userInfo = await getSession();
        if (block === "unauthenticated") {
          if (!userInfo) {
            return location.replace("/login");
          }
        }

        if (block === "activated") {
          if (userInfo) {
            return location.replace("/");
          }
        }
      };
      getUser();
    }, []);

    return <Component />;
  };

  return AuthenticatedComponent;
};
