import Chip from "@common/components/ui/buttons/Chip/Chip";
import MyPageTopBar from "@common/components/ui/topBar/MyPageTopBar/MyPageTopBar";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";
import Image from "next/image";

export default function MyPage() {
  const DUMMY_USER = {
    profile_img:
      "https://cdn.pixabay.com/photo/2023/12/12/15/47/yellow-mongoose-8445457_1280.jpg",
    nickName: "마포묻은 다예",
    cafeKing: false,
    place_record: [],
  };
  return (
    <div className="px-[2rem] h-[100vh]">
      <MyPageTopBar />
      <section className="flex pt-[1.2rem] mb-[3.6rem]">
        <div className="w-[7.2rem] h-[7.2rem] relative mr-[1.6rem]">
          <Image
            src={DUMMY_USER.profile_img}
            alt="프로필 사진"
            fill
            sizes="10vw"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-text-gray-8 body2-medium mb-[0.8rem]">
            {DUMMY_USER.cafeKing
              ? "카페에서 집중력이 상승하는"
              : "공간 기록을 남겨 타이틀을 얻어보세요!"}
          </p>
          <div className="flex items-center">
            {DUMMY_USER.cafeKing && (
              <Chip className="bg-primary-normal text-white mr-[0.8rem]">
                카공왕
              </Chip>
            )}
            <span className="text-black headline1">{DUMMY_USER.nickName}</span>
          </div>
        </div>
      </section>
      <section className="h-[60%]">
        <div className="text-text-gray-8 headline3">
          공간 기록 {DUMMY_USER.place_record.length}
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-black headline1 mb-[1.2rem]">
            {DUMMY_USER.place_record.length === 0 &&
              "아직 기록을 남긴 공간이 없습니다"}
          </p>
          <div className="flex items-center">
            <span className="text-text-gray-6 body2-semibold mr-[0.4rem]">
              공간 기록하러 가기
            </span>
            <ArrowRight />
          </div>
        </div>
      </section>
    </div>
  );
}
