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
    <html>
      <body>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="headline1 mb-[14px]">오류가 발생했습니다</p>
          <button onClick={() => reset()}>
            <span className="headline2 text-primary-normal">다시 시도</span>
          </button>
        </div>
      </body>
    </html>
  );
}
