"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LinkLayoutProps {
  routeUrl: string;
  query?: Record<string, any>;
  children: ReactNode;
  className?: string;
}

//Atom
export default function LinkLayout({
  routeUrl,
  query,
  children,
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
