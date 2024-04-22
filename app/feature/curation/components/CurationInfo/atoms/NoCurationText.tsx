import { twMerge } from "tailwind-merge";

//Atom
export default function NoCurationText({ className }: { className?: string }) {
  return (
    <p
      className={twMerge(
        "flex justify-center items-center body1-medium text-text-gray-8",
        className
      )}
    >
      아직 스크랩한 큐레이션이 없습니다.
    </p>
  );
}
