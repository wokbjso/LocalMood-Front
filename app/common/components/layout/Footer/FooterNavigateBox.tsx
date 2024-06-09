import { twMerge } from "tailwind-merge";
import LinkLayout from "../Link/LinkLayout";
import { ReactNode } from "react";
import Label from "../../ui/text/Label";

interface FooterNavigateBoxProps {
  label: string;
  icon: ReactNode;
  navigateTo: string;
  clicked: boolean;
  onClick: () => void;
}

//Molecule
export default function FooterNavigateBox({
  label,
  icon,
  navigateTo,
  clicked,
  onClick,
}: FooterNavigateBoxProps) {
  return (
    <LinkLayout routeUrl={navigateTo} prefetch>
      <div
        className="px-[1.2rem] flex flex-col items-center cursor-pointer"
        onClick={onClick}
      >
        {icon}
        <Label
          className={twMerge(
            "mt-[0.6rem] footer-label",
            clicked ? "text-primary-normal" : "text-text-gray-5"
          )}
        >
          {label}
        </Label>
      </div>
    </LinkLayout>
  );
}
