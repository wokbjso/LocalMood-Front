import { IconProps } from "../icon-type";

export default function LocationLine({
  color = "white",
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.5 6.66663C13.5 8.22034 12.766 9.73363 11.7772 11.0591C10.793 12.3787 9.5936 13.4621 8.74883 14.1457C8.3046 14.5051 7.69541 14.5051 7.25118 14.1457C6.4064 13.4621 5.20703 12.3787 4.22277 11.0591C3.23404 9.73363 2.5 8.22034 2.5 6.66663C2.5 5.20794 3.07946 3.80899 4.11091 2.77754C5.14236 1.74609 6.54131 1.16663 8 1.16663C9.45869 1.16663 10.8576 1.74609 11.8891 2.77754C12.9205 3.80899 13.5 5.20794 13.5 6.66663Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
