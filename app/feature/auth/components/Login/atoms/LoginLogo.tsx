"use client";

import UseGetBrowserHeight from "@/common/hooks/useGetBrowserHeight";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function LoginLogo({ className }: { className?: string }) {
  const browserHeight = UseGetBrowserHeight();
  return (
    <div
      className={twMerge(
        "relative",
        browserHeight < 500 ? "opacity-[0.6]" : "",
        className
      )}
    >
      <Image
        src="/loginLogo.png"
        alt="로그인 이미지"
        fill
        sizes="100vw"
        priority
      />
    </div>
  );
}
