import { IconProps } from "../icon-type";

export default function UserProfileIcon({
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
        d="M10.9987 11.3528C13.8575 11.3528 16.175 9.03521 16.175 6.17639C16.175 3.31756 13.8575 1 10.9987 1C8.1398 1 5.82227 3.31756 5.82227 6.17639C5.82227 9.03521 8.1398 11.3528 10.9987 11.3528Z"
        stroke={color}
        strokeWidth="1.71429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8435 22.9999C20.1747 20.9146 18.8611 19.0958 17.0922 17.8054C15.3231 16.5149 13.19 15.8195 11.0003 15.8195C8.8106 15.8195 6.67748 16.5149 4.90844 17.8054C3.1394 19.0958 1.82589 20.9146 1.15723 22.9999"
        stroke={color}
        strokeWidth="1.71429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
