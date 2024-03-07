//app/components/Providers.tsx

"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function CustomSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
