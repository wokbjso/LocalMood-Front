import { IconProps } from "../icon-type";

export default function MenuIcon({
  color = "#667085",
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <circle cx="12" cy="6" r="1" fill={color} />
      <circle cx="12" cy="12" r="1" fill={color} />
      <circle cx="12" cy="18" r="1" fill={color} />
    </svg>
  );
}
