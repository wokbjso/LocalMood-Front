import Image from "next/image";

interface UserProfileMyPageProps {
  nickName: string;
  title?: string;
}

//Organism
export default function UserProfileMyPage({
  nickName,
  title = "공간 기록을 남겨 타이틀을 얻어보세요!",
}: UserProfileMyPageProps) {
  return (
    <section className="flex pt-[1.2rem] mb-[3.6rem]">
      <Image
        src={"/default_user.png"}
        alt="프로필 사진"
        width={72}
        height={72}
        className="rounded-full mr-[1.6rem]"
      />
      <div className="flex flex-col justify-center">
        <p className="text-text-gray-8 body2-medium mb-[0.8rem]">{title}</p>
        <div className="flex items-center">
          <span className="text-black headline1">{nickName}</span>
        </div>
      </div>
    </section>
  );
}
