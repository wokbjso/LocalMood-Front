"use client";

import BackIcon from "@common/assets/icons/arrow/arrow-left.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { useRouter } from "next/navigation";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import useGetScrollHeight from "@common/hooks/useGetScrollHeight";

interface CurationTopAppBarProps {
  variant?: string;
  mainText?: string;
}

export default function CurationTopAppBar({
  variant,
  mainText,
}: CurationTopAppBarProps) {
  const curationDetailCardList = [
    {
      id: 0,
      placeName: "나이스워크투데이",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "카페",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeInterior: ["통창뷰", "넓은 공간"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 1,
      placeName: "공복식당",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 2,
      placeName: "이리카페",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 3,
      placeName: "이리카페",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 4,
      placeName: "맥도날드",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
  ];
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // 이전 페이지로 이동
  };
  const { scrollHeight } = useGetScrollHeight();

  return (
    <div>
      <div
        className={`w-full ${
          scrollHeight > 370 ? "fixed top-0 bg-white z-50" : ""
        }`}
      >
        <div
          className={`h-[5.4rem] px-[2rem] py-[1.8rem] ${
            scrollHeight > 370 ? "" : "pt-[5.3rem]"
          }`}
        >
          {scrollHeight > 370 ? (
            // 스크롤 시
            <div className="flex flex- start items-center justify-between">
              <div className="flex items-center" onClick={handleBackClick}>
                <BackIcon />
                <div className="w-[23.5rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-black headline3-semibold">
                  {mainText}
                </div>
              </div>
              <div className="flex gap-[0.8rem]">
                {variant === "others" ? (
                  <>
                    <ScrapLine />
                    <ShareIcon />
                  </>
                ) : (
                  <>
                    <ShareIcon />
                    <MenuIcon />
                  </>
                )}
              </div>
            </div>
          ) : (
            // 스크롤 안 할 시
            <div>
              <div className="flex items-center justify-between">
                <div className="pr-[25.5rem]" onClick={handleBackClick}>
                  <BackIcon />
                </div>
                <div className="flex gap-[0.8rem]">
                  {variant === "others" ? (
                    <>
                      <ScrapLine />
                      <ShareIcon />
                    </>
                  ) : (
                    <>
                      <ShareIcon />
                      <MenuIcon />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {scrollHeight > 370 && (
          <div className="w-full overflow-x-scroll flex flex-start pl-[2rem] py-[0.4rem] gap-[0.8rem] bg-white">
            {curationDetailCardList.map((item, index) => (
              <Filter
                key={index}
                photo={item.placePhoto}
                label={item.placeName}
                className="whitespace-nowrap"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
