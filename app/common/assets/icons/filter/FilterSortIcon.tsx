import { IconProps } from "../icon-type";

export default function FilterSortIcon({ onClick, className }: IconProps) {
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
        d="M11 7.66667L7.66667 11V1"
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4.33333L4.33333 1V11"
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
