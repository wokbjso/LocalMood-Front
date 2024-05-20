"use client";

import { FallbackProps } from "react-error-boundary";
import { twMerge } from "tailwind-merge";

const ApiErrorFallback = ({
  error,
  resetErrorBoundary,
  className,
}: FallbackProps & { className?: string }) => {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col items-center justify-center px-[20px] py-[12px]",
        className
      )}
    >
      <p className="headline1 mb-[14px]">{error.message}</p>
      <button onClick={() => resetErrorBoundary()}>
        <span className="headline2 text-primary-normal">다시 시도</span>
      </button>
    </div>
  );
};

export default ApiErrorFallback;
