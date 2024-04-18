import { twMerge } from "tailwind-merge";

interface PlaceNameProps {
  name: string;
  className?: string;
}

//Atom
export default function PlaceName({ name, className }: PlaceNameProps) {
  return (
    <div className={twMerge("headline0 mb-[0.8rem]", className)}>{name}</div>
  );
}
