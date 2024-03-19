import { IconProps } from "../icon-type";

export default function CloseBlackIcon({ className, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <rect width="24" height="24" fill="#344054" rx="12" />
      <path
        stroke="#F2F4F7"
        strokeLinecap="round"
        strokeWidth="1.342"
        d="m7.888 7.887 8.225 8.225M15.954 7.73 7.73 15.954"
      />
    </svg>
  );
}
