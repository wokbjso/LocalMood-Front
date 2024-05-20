"use client";

import Footer from "@/common/components/layout/Footer/Footer";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="headline1 mb-[14px]">{error.message}</p>
        <button onClick={() => reset()}>
          <span className="headline2 text-primary-normal">다시 시도</span>
        </button>
      </div>
      <Footer />
    </>
  );
}
