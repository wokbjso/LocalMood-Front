import { IconProps } from "../icon-type";

export default function CheckIcon({
  color = "white",
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M22.5 4L9.16667 20L2.5 15.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
