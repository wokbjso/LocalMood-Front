import Chip from "@common/components/ui/buttons/Chip/Chip";
import MyPageTopBar from "@common/components/ui/topBar/MyPageTopBar/MyPageTopBar";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";
import Image from "next/image";
import PlaceInfoRecord, {
  PlaceInfoRecordProps,
} from "@feature/place/components/PlaceInfoRecord/PlaceInfoRecord";
import { twMerge } from "tailwind-merge";
import { PlaceInfoMainProps } from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";

export default function MyPage() {
  interface DUMMY_USER_PROPS {
    profile_img: string;
    nickName: string;
    cafeKing: boolean;
    place_record: PlaceInfoRecordProps[] | [];
  }
  const DUMMY_USER: DUMMY_USER_PROPS = {
    profile_img:
      "https://cdn.pixabay.com/photo/2023/12/12/15/47/yellow-mongoose-8445457_1280.jpg",
    nickName: "마포묻은 다예",
    cafeKing: false,
    place_record: [
      {
        id: 0,
        placeName: "나이스워크투데이",
        placeImg:
          "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
        category: "카페",
        location: "마포구 망원동",
        scrapped: false,
      },
      {
        id: 0,
        placeName: "금복식당",
        placeImg:
          "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
        category: "음식점",
        location: "마포구 망원동",
        scrapped: false,
      },
      {
        id: 1,
        placeName: "쉑쉑버거",
        placeImg:
          "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
        category: "음식점",
        location: "마포구 망원동",
        scrapped: false,
      },
      {
        id: 1,
        placeName: "나이스워크투데이",
        placeImg:
          "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
        category: "카페",
        location: "마포구 망원동",
        scrapped: false,
      },
      {
        id: 2,
        placeName: "나이스워크투데이",
        placeImg:
          "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
        category: "카페",
        location: "마포구 망원동",
        scrapped: false,
      },
    ],
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
        <div
          className={twMerge(
            "text-text-gray-8 headline3",
            DUMMY_USER.place_record.length > 0 && "mb-[1.6rem]"
          )}
        >
          공간 기록 {DUMMY_USER.place_record.length}
        </div>
        {DUMMY_USER.place_record.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-black headline1 mb-[1.2rem]">
              아직 기록을 남긴 공간이 없습니다
            </p>
            <div className="flex items-center">
              <span className="text-text-gray-6 body2-semibold mr-[0.4rem]">
                공간 기록하러 가기
              </span>
              <ArrowRight />
            </div>
          </div>
        )}
        {DUMMY_USER.place_record.length > 0 && (
          <div className="h-full grid grid-cols-2 gap-x-[1rem] gap-y-[1.6rem] pb-[6.1rem] overflow-y-scroll">
            {DUMMY_USER.place_record.map((record) => (
              <PlaceInfoRecord
                key={record.id}
                id={record.id}
                placeName={record.placeName}
                placeImg={record.placeImg}
                category={record.category}
                location={record.location}
                scrapped={record.scrapped}
                className="w-full"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}