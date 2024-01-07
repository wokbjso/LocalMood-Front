"use client";

import Button from "@common/components/ui/buttons/Button/Button";
import ArrowBack from "@common/assets/icons/arrow/arrow-back.svg";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";

export default function SearchPage() {
  const DUMMY_PLACE = null;
  const DUMMY_CURATION = [
    {
      id: 0,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
    },
    {
      id: 1,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김지원",
      mainText: "평일에 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "평일"],
    },
    {
      id: 2,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김경민",
      mainText: "주말에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "주말"],
    },
    {
      id: 3,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "최예원",
      mainText: "친구와 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["친구와의 데이트", "마포구"],
    },
  ];
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const handleSearchText = (text: string) => {
    setSearchText(text);
  };
  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };
  const backIconClicked = () => {
    router.back();
  };
  return (
    <div>
      <header className="fixed w-full flex items-center px-[2rem] pt-[1.6rem] pb-[0.6rem] z-10 bg-white">
        <div onClick={backIconClicked}>
          <ArrowBack />
        </div>
        <SearchBar
          placeholder="공간, 큐레이션을 검색해보세요"
          onChange={handleSearchText}
        />
      </header>
      {searchText.length === 0 && (
        <div className="flex flex-col justify-center items-center pt-[24.6rem]">
          <p className="flex justify-center text-center break-keep headline2 text-text-gray-9 w-[42%] mb-[1.6rem]">
            나에게 딱 맞는 공간을 찾고 싶다면?
          </p>
          <Button className="w-[12.5rem] h-[2.6rem] py-[0.6rem] mr-[1.2rem] body2-semibold">
            키워드로 공간 찾기
          </Button>
        </div>
      )}
      {searchText.length > 0 && !DUMMY_PLACE && !DUMMY_CURATION && (
        <div className="flex flex-col justify-center items-center pt-[11.4rem]">
          <p className="flex justify-center body1 text-text-gray-8">
            검색 결과가 없습니다.
          </p>
        </div>
      )}
      {searchText.length > 0 && DUMMY_PLACE && !DUMMY_CURATION && (
        <div className="pt-[5.4rem]">
          <Tab
            sections={[{ text: "공간" }, { text: "큐레이션" }]}
            onChange={handleTabIndex}
          />
          {tabIndex === 1 && (
            <p className="flex justify-center body1 text-text-gray-8 mt-[6rem]">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
      )}
      {searchText.length > 0 && !DUMMY_PLACE && DUMMY_CURATION && (
        <div className="pt-[5.4rem]">
          <Tab
            sections={[{ text: "공간" }, { text: "큐레이션" }]}
            onChange={handleTabIndex}
          />
          {tabIndex === 0 && (
            <p className="flex justify-center body1 text-text-gray-8 mt-[6rem]">
              검색 결과가 없습니다.
            </p>
          )}
          {tabIndex === 1 && (
            <div className="pb-[9.1rem] px-[2rem]">
              {DUMMY_CURATION.map((curation) => (
                <CurationMain
                  key={curation.id}
                  id={0}
                  curationPhoto={curation.curationPhoto}
                  userImg={curation.userImg}
                  userName={curation.userName}
                  hashTags={curation.hashTags}
                  mainText={curation.mainText}
                  className="mt-[2rem]"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
