import { twMerge } from "tailwind-merge";

interface FilterProps {
  photo?: string;
  label: string;
  selected?: boolean;
  className?: string;
}

export default function Filter({
  photo,
  label,
  selected = false,
  className,
}: FilterProps) {
  return (
    <div
      className={twMerge(
        !photo
          ? "bg-gray-2 body2-medium px-[1.4rem] py-[1rem] rounded-[36px]"
          : "flex items-center border-[0.1rem] body3-medium py-[0.4rem] pr-[1.2rem] pl-[0.4rem] rounded-[36px]",
        selected &&
          photo &&
          "bg-primary-selected border-[1.5px] border-primary-normal",
        selected && !photo && "bg-gray-8 text-white",
        className
      )}
    >
      {photo && (
        <div
          className="w-[3.2rem] h-[3.2rem] mr-[0.8rem] bg-cover rounded-full"
          style={{ backgroundImage: `url(${photo})` }}
        />
      )}
      {label}
    </div>
  );
}
