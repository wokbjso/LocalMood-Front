import { twMerge } from "tailwind-merge";

//Molecule
export default function CurationInfoCardShadow({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={twMerge("absolute top-0 w-[100%] h-[100%] z-10", className)}
      style={{
        background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
      }}
    />
  );
}
