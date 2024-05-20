import { twMerge } from "tailwind-merge";

interface LabelProps {
  label: string;
  className?: string;
}

export default function Label({ label, className }: LabelProps) {
  return (
    <span className={twMerge("headline3-semibold text-black", className)}>
      {label}
    </span>
  );
}
