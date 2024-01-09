"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LinkLayoutProps {
  children: ReactNode;
  routeUrl: string;
  query?: Record<string, any>;
}

export default function LinkLayout({
  children,
  routeUrl,
  query,
}: LinkLayoutProps) {
  return (
    <Link
      href={{
        pathname: routeUrl,
        query: query,
      }}
    >
      {children}
    </Link>
  );
}
