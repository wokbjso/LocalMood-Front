"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html className="w-[100%] h-[100%]">
      <body className="w-[100%] h-[100%]">
        <div className="w-full h-full flex flex-col justify-center items-center px-[20px]">
          <p className="headline1 mb-[14px]">
            페이지를 불러오는데 실패했습니다
          </p>
          <button onClick={reset}>
            <span className="headline2 text-primary-normal">다시 시도</span>
          </button>
        </div>
      </body>
    </html>
  );
}
