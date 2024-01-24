import { IconProps } from "../icon-type";

interface AddFillIconProps extends IconProps {
  color2?: string;
}

export default function AddFillIcon({
  color = "#616161",
  color2 = "#F5F5F5",
  className,
  onClick,
}: AddFillIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect width="40" height="40" rx="20" fill={color2} />
      <path
        d="M20.0002 14.1843L20.0002 25.8159"
        stroke={color}
        strokeWidth="1.34211"
        strokeLinecap="round"
      />
      <path
        d="M25.8159 19.7766L14.1843 19.7766"
        stroke="#616161"
        strokeWidth="1.34211"
        strokeLinecap="round"
      />
    </svg>
  );
}
