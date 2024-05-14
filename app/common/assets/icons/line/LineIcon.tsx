import { IconProps } from "../icon-type";

export default function LineIcon({ color = "#BDBDBD", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1"
      height="12"
      fill="none"
      className={className}
    >
      <path stroke={color} d="M.5 0v12" />
    </svg>
  );
}
