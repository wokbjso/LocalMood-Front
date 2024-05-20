import { twMerge } from "tailwind-merge";

interface LabelProps {
  label: string;
  className?: string;
}

export default function Label({ label, className }: LabelProps) {
  return (
    <span className={twMerge("headline0 text-black", className)}>{label}</span>
  );
}
