"use client";

import { useEffect, useState } from "react";

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      const initMsw = await import("../../../../../__mocks__/next/index").then(
        (res) => res.initMsw
      );
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady && process.env.NODE_ENV === "development") {
      init();
    }
  }, [mswReady]);

  return <>{children}</>;
};
