"use client";

import Search from "@common/assets/icons/search/search.svg";
import Delete from "@common/assets/icons/close/close-gray.svg";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function PlaceSearchBar() {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleFocus = () => {
      router.push("/record/search");
    };

    if (ref.current) {
      ref.current.addEventListener("focus", handleFocus);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("focus", handleFocus);
      }
    };
  }, [router]);

  return (
    <div className="flex w-full h-[4rem] pl-[1.2rem] pr-[0.6rem] py-[0.8rem] justify-between items-center relative self-stretch bg-background-gray-1 rounded-[1000px] gap-[0.8rem]">
      <div className="flex w-full items-center gap-[0.8rem]">
        <Search />
        <input
          ref={ref}
          className="body2-medium placeholder:text-text-gray-6 w-full bg-background-gray-1 outline-none"
          placeholder="공간 이름을 검색해보세요"
        />
      </div>
      <div>
        <Delete />
      </div>
    </div>
  );
}
