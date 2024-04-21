import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface UserProfileProps {
  size?: "big" | "small";
  userName: string;
  className?: string;
}

//Molecule
export default function UserProfile({
  size = "big",
  userName,
  className,
}: UserProfileProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      <div className="w-[1.6rem] h-[1.6rem] relative mr-[0.4rem]">
        <Image
          src={"/default_user.png"}
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
