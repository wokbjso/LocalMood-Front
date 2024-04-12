import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SliderProps {
  className?: string;
  children?: ReactNode;
}

//Atoms
export default function SliderLayout({ className, children }: SliderProps) {
  return (
    <>
      <div className={twMerge("w-[100%]", className)}>
        <div className="flex overflow-x-auto">{children}</div>
      </div>
    </>
  );
}
