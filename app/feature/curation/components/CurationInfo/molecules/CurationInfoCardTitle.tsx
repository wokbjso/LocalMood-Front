import { CurationProps } from "@/feature/curation/type";
import { twMerge } from "tailwind-merge";

//Molecule
export default function CurationInfoCardTitle({
  title,
  className,
}: Pick<CurationProps, "title"> & { className?: string }) {
  return (
    <p className={twMerge("headline2 w-[70%] break-keep", className)}>
      {title}
    </p>
  );
}
