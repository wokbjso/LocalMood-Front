import { twMerge } from "tailwind-merge";
import LinkLayout from "../Link/LinkLayout";

interface FooterNavigateBoxProps {
  text: string;
  icon: any;
  navigateTo: string;
  clicked: boolean;
  onClick: () => void;
}

//Molecule
export default function FooterNavigateBox({
  text,
  icon,
  navigateTo,
  clicked,
  onClick,
}: FooterNavigateBoxProps) {
  return (
    <LinkLayout routeUrl={navigateTo} prefetch={true}>
      <div
        className="px-[1.2rem] flex flex-col items-center cursor-pointer"
        onClick={onClick}
      >
        {icon}
        <span
          className={twMerge(
            "mt-[0.6rem]",
            clicked ? "text-primary-normal" : "text-text-gray-5"
          )}
        >
          {text}
        </span>
      </div>
    </LinkLayout>
  );
}
