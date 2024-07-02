import { BeatLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

export default function LoadingUI({ className }: { className?: string }) {
  return (
    <div
      data-testid="loading-ui"
      data-cy="loading-ui"
      className={twMerge(
        "flex justify-center items-center w-[100%] h-[100%]",
        className
      )}
    >
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
