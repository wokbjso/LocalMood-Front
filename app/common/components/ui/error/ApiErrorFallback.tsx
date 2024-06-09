"use client";

import { FallbackProps } from "react-error-boundary";
import Text from "../text/Text";

interface ApiErrorFallback extends FallbackProps {
  className?: string;
}

const ApiErrorFallback = ({ error, resetErrorBoundary }: ApiErrorFallback) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-[20px] py-[12px]">
      <Text className="headline1 mb-[14px] text-black">{error.message}</Text>
      <button onClick={resetErrorBoundary}>
        <Text className="headline2 text-primary-normal">다시 시도</Text>
      </button>
    </div>
  );
};

export default ApiErrorFallback;
