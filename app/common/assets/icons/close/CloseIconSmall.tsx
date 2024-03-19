import { IconProps } from "../icon-type";

export default function CloseIconSmall({ className, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        fill="#EEE"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z"
      />
      <path
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeWidth="1.342"
        d="m7.888 7.887 8.225 8.225M15.954 7.73 7.73 15.953"
      />
    </svg>
  );
}
