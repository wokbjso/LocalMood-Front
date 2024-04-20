"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LinkLayoutProps {
  routeUrl: string;
  query?: Record<string, any>;
  replace?: boolean;
  children: ReactNode;
  className?: string;
}

//Atom
export default function LinkLayout({
  routeUrl,
  query,
  replace = false,
  children,
  className,
}: LinkLayoutProps) {
  return (
    <Link
      href={{
        pathname: routeUrl,
        query: query,
      }}
      replace={replace}
      className={className}
    >
      {children}
    </Link>
  );
}
