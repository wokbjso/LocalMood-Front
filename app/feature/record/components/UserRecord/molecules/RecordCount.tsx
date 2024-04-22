import { twMerge } from "tailwind-merge";

interface RecordCount {
  count: number;
  className?: string;
}

//Molecule
export default function RecordCount({ count, className }: RecordCount) {
  return (
    <div
      className={twMerge(
        "text-text-gray-8 headline3",
        count > 0 && "mb-[1.6rem]",
        className
      )}
    >
      {"공간 기록 " + count}
    </div>
  );
}
