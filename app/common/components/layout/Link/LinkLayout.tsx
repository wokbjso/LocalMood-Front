"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LinkLayoutProps {
  routeUrl: string;
  query?: Record<string, any>;
  replace?: boolean;
  prefetch?: boolean;
  children: ReactNode;
  className?: string;
}

//Atom
export default function LinkLayout({
  routeUrl,
  query,
  replace = false,
  prefetch = false,
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
      prefetch={prefetch}
      className={className}
    >
      {children}
    </Link>
  );
}
