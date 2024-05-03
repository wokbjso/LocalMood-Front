import { IconProps } from "../icon-type";

export default function AddFillIcon({ onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M7.00024 1.18433L7.00024 12.8159"
        stroke="#616161"
        strokeWidth="1.34211"
        strokeLinecap="round"
      />
      <path
        d="M12.8159 6.77661L1.18434 6.77661"
        stroke="#616161"
        strokeWidth="1.34211"
        strokeLinecap="round"
      />
    </svg>
  );
}
