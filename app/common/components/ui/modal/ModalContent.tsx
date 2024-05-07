import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Divider from "../divider/Divider";
import CheckMediumIcon from "@common/assets/icons/check/CheckMediumIcon";

interface IconBoxProps {
  icon: ReactNode;
  text: string;
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}

function IconBox({
  icon,
  text,
  className,
  textClassName,
  onClick,
}: IconBoxProps) {
  return (
    <div className={twMerge("flex items-center", className)} onClick={onClick}>
      {icon}
      <span className={twMerge("body1 text-black ml-[1.2rem]", textClassName)}>
        {text}
      </span>
    </div>
  );
}

interface CheckBoxProps {
  text?: string;
  isClicked?: boolean;
  className?: string;
  onClick?: () => void;
}

function CheckBox({ text, isClicked, className, onClick }: CheckBoxProps) {
  return (
    <div className={twMerge("flex items-center", className)} onClick={onClick}>
      <span
        className={twMerge(
          "body1-medium",
          isClicked ? "text-black mr-[8px]" : "text-text-gray-6"
        )}
      >
        {text}
      </span>
      {isClicked && <CheckMediumIcon />}
    </div>
  );
}

interface ModalDividerProps {
  className?: string;
}

function ModalDivider({ className }: ModalDividerProps) {
  return <Divider className={twMerge("h-[1px] bg-line-gray-3", className)} />;
}

interface ModalContentMainProps {
  children?: ReactNode;
}

function ModalContentMain({ children }: ModalContentMainProps) {
  return <div className="px-[2rem] pt-[1.8rem]">{children}</div>;
}

export const ModalContent = Object.assign(ModalContentMain, {
  IconBox,
  CheckBox,
  ModalDivider,
});
