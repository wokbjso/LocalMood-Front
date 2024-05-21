import Label from "@/common/components/ui/text/Label";
import Text from "@/common/components/ui/text/Text";
import GetMemberInfo from "@/feature/user/queries/getMemberInfo";
import Image from "next/image";

interface UserProfileMyPageProps {
  title?: string;
}

//Organism
export default async function UserProfileMyPage({
  title = "공간 기록을 남겨 타이틀을 얻어보세요!",
}: UserProfileMyPageProps) {
  const memberData = await GetMemberInfo();

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
        <Text text={title} className="body2-medium mb-[8px]" />
        <Label label={memberData.nickname} className="headline1" />
      </div>
    </section>
  );
}
