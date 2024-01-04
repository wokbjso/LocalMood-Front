import { IconProps } from "../icon-type";

export default function Home({ color = "#9E9E9E", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      className={className}
    >
      <path
        d="M0.857178 12.7143L12 1.57144L23.1429 12.7143"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.28564 9.28574V20.4286H19.7142V9.28574"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
