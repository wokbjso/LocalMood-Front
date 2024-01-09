import { IconProps } from "../icon-type";

export default function UserDouble({
  color = "#E0E0E0",
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={className}
    >
      <circle cx="12.5" cy="5.5" r="2.5" opacity={0.5} fill={color} />
      <ellipse
        cx="13.3334"
        cy="14.6667"
        rx="4.16667"
        ry="2.5"
        opacity={0.5}
        fill={color}
      />
      <circle cx="7.50081" cy="5.50008" r="3.33333" fill={color} />
      <ellipse
        cx="7.50081"
        cy="14.6676"
        rx="5.83333"
        ry="3.33333"
        fill={color}
      />
    </svg>
  );
}
