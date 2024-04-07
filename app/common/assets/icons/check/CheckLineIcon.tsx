import { IconProps } from "../icon-type";

export default function CheckLineIcon({
  color = "#667085",
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#a)"
      >
        <path d="M18 .857H6A5.143 5.143 0 0 0 .857 6v12A5.143 5.143 0 0 0 6 23.143h12A5.143 5.143 0 0 0 23.143 18V6A5.143 5.143 0 0 0 18 .857Z" />
        <path d="m17 8.143-6.856 8.571-3.429-2.571" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
