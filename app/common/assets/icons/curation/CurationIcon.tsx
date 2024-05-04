import { IconProps } from "../icon-type";

export default function CurationIcon({
  color = "#9E9E9E",
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      className={className}
    >
      <path
        d="M20.4287 23.1429H4.14296C3.46098 23.1429 2.80692 22.872 2.32469 22.3898C1.84246 21.9075 1.57153 21.2534 1.57153 20.5714C1.57153 19.8895 1.84246 19.2353 2.32469 18.7531C2.80692 18.2709 3.46098 18 4.14296 18H18.7144C19.169 18 19.6051 17.8193 19.9266 17.4979C20.248 17.1765 20.4287 16.7404 20.4287 16.2857V2.57143C20.4287 2.11677 20.248 1.68074 19.9266 1.35925C19.6051 1.03776 19.169 0.857147 18.7144 0.857147H4.14296C3.47269 0.856909 2.82882 1.11839 2.34852 1.5859C1.86819 2.05341 1.58941 2.68998 1.57153 3.36V20.5029"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7144 18V23.1429"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
