import { IconProps } from "../icon-type";

export default function CheckFillIcon({ className, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#a)">
        <path
          fill="#667085"
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 .857H6A5.143 5.143 0 0 0 .857 6v12A5.143 5.143 0 0 0 6 23.143h12A5.143 5.143 0 0 0 23.143 18V6A5.143 5.143 0 0 0 18 .857Z"
        />
        <path fill="#667085" d="m17 8.143-6.856 8.571-3.429-2.571" />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m17 8.143-6.856 8.571-3.429-2.571"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
