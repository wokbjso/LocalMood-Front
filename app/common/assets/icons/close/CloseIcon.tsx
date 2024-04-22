import { IconProps } from "../icon-type";

//Atom
export default function CloseIcon({
  color = "#9E9E9E",
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M16.9999 1L1 16.9999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1L16.9999 16.9999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
