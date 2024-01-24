import { IconProps } from "../icon-type";

export default function AddIcon({
  color = "#9E9E9E",
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M7.00024 1L7.00024 13"
        stroke={color}
        strokeWidth="1.34211"
        strokeLinecap="round"
      />
      <path
        d="M13 6.76949L1 6.76948"
        stroke={color}
        strokeWidth="1.34211"
        strokeLinecap="round"
      />
    </svg>
  );
}
