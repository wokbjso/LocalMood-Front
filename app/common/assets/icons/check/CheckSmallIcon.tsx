import { IconProps } from "../icon-type";

export default function CheckSmallIcon({
  color = "white",
  onClick,
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      onClick={onClick}
      className={className}
    >
      <path
        d="M11 2L4.33333 10L1 7.6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
