import { IconProps } from "../icon-type";

export default function RecordIcon({
  color = "#9E9E9E",
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M13.0002 0.857147H4.42882C3.97415 0.857147 3.53812 1.03776 3.21663 1.35925C2.89515 1.68074 2.71453 2.11677 2.71453 2.57143V18L1.00024 23.1429L7.85739 21.4286H21.5717C22.0263 21.4286 22.4624 21.2479 22.7838 20.9265C23.1053 20.605 23.286 20.1689 23.286 19.7143V11.1429"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.48 13.949L9.33716 14.8747L10.1943 9.66327L18.3029 1.58899C18.4622 1.42831 18.6518 1.30078 18.8608 1.21375C19.0696 1.12672 19.2936 1.08191 19.5201 1.08191C19.7464 1.08191 19.9704 1.12672 20.1792 1.21375C20.3882 1.30078 20.5778 1.42831 20.7372 1.58899L22.5544 3.40613C22.715 3.56549 22.8425 3.75511 22.9296 3.96401C23.0165 4.1729 23.0615 4.39697 23.0615 4.62327C23.0615 4.84958 23.0165 5.07365 22.9296 5.28255C22.8425 5.49146 22.715 5.68106 22.5544 5.84042L14.48 13.949Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}