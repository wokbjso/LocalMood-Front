import { twMerge } from "tailwind-merge";

interface CurationTitleProps {
  title: string;
  className?: string;
}

export default function CurationTitle({
  title,
  className,
}: CurationTitleProps) {
  return (
    <div
      className={twMerge(
        "headline0 text-black text-center pt-[1.2rem] pb-[0.8rem]",
        className
      )}
    >
      {title}
    </div>
  );
}
