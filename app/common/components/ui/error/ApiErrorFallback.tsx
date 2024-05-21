"use client";

import { FallbackProps } from "react-error-boundary";

interface ApiErrorFallback extends FallbackProps {
  className?: string;
}

const ApiErrorFallback = ({ error, resetErrorBoundary }: ApiErrorFallback) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-[20px] py-[12px]">
      <p className="headline1 mb-[14px]">{error.message}</p>
      <button onClick={resetErrorBoundary}>
        <span className="headline2 text-primary-normal">다시 시도</span>
      </button>
    </div>
  );
};

export default ApiErrorFallback;
