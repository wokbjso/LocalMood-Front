import Image from "next/image";
import { twMerge } from "tailwind-merge";
import DefaultUserIcon from "@common/assets/images/default_user.png";

interface UserProfileProps {
  size?: "big" | "small";
  userName: string;
  className?: string;
}

export default function UserProfile({
  size = "big",
  userName,
  className,
}: UserProfileProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      <div className="w-[1.6rem] h-[1.6rem] relative mr-[0.4rem]">
        <Image
          src={DefaultUserIcon}
          alt="프로필 사진"
          fill
          sizes="10vw"
          className="cursor-pointer"
        />
      </div>

      <span
        className={twMerge(
          "text-white",
          size === "big" ? "body2-medium" : "body3-medium"
        )}
      >
        {userName}
      </span>
    </div>
  );
}
