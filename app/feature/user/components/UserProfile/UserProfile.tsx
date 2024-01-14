import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface UserProfileProps {
  size?: "big" | "small";
  userImg: string;
  userName: string;
  className?: string;
}

export default function UserProfile({
  size = "big",
  userImg,
  userName,
  className,
}: UserProfileProps) {
  return (
    <div
      className={twMerge(
        "flex items-center",
        size === "big" ? "w-[6.8rem]" : "w-[6.1rem]",
        className
      )}
    >
      <div className="w-[1.6rem] h-[1.6rem] relative mr-[0.4rem]">
        <Image
          src={userImg}
          alt="프로필 사진"
          fill
          sizes="10vw"
          className="rounded-full cursor-pointer"
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
