import { IconProps } from "../icon-type";

export default function ArrowUp({ color = "#9E9E9E", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={className}
    >
      <path
        d="M1 5L5 1L9 5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
