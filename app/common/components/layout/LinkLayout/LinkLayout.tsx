"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LinkLayoutProps {
  children: ReactNode;
  routeUrl: string;
  query?: Record<string, any>;
  className?: string;
}

export default function LinkLayout({
  children,
  routeUrl,
  query,
  className,
}: LinkLayoutProps) {
  return (
    <Link
      href={{
        pathname: routeUrl,
        query: query,
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
