import { IconProps } from "../icon-type";

interface WindowIconProps extends IconProps {
  color2?: string;
  color3?: string;
}

export default function WindowIcon({
  color = "#FFD677",
  color2 = "#B8E1FF",
  color3 = "#67EA65",
  className,
}: WindowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <rect x="1.51367" y="1.7998" width="16" height="16" rx="1" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.1143 3.3999H16.1143V9.3999H10.1143V3.3999ZM9.11426 10.3999H3.11426V16.3999H9.11426V10.3999ZM16.1143 10.3999H10.1143V16.3999H16.1143V10.3999ZM9.11426 3.3999H3.11426V9.3999H9.11426V3.3999Z"
        fill="url(#paint0_linear_1929_13495)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1929_13495"
          x1="5.51416"
          y1="2.5"
          x2="10.5142"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.48" stop-color={color2} />
          <stop offset="0.4801" stop-color={color3} />
        </linearGradient>
      </defs>
    </svg>
  );
}
