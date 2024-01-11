"use client";

import FilterKeyword from "@common/assets/icons/filter/filter-keyword.svg";
import FilterCategory from "@common/assets/icons/filter/filter-category.svg";
import ArrowBack from "@common/assets/icons/arrow/ArrowBack";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import SearchStart from "@common/assets/images/search_start.svg";
// import SearchByKeywordButton from "@feature/search/components/SearchByKeywordButton/SearchByKeywordButton";
import SearchKeyword from "@feature/search/components/SearchKeyword/SearchKeyword";
import useSearchKeyword from "@feature/search/components/SearchKeyword/useSearchKeyword";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchPage() {
  const DUMMY_PLACE = [
    {
      id: 0,
      placeName: "신촌 캐치카페",
      placeImg:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      category: "카페",
      location: "마포구 신촌",
      scrapped: false,
      tags: [
        {
          category: "방문목적",
          detail: "연인과의 데이트",
        },
        {
          category: "방문목적",
          detail: "작업/공부",
        },
        {
          category: "인테리어",
          detail: "통창뷰",
        },
        {
          category: "공간무드",
          detail: "넓은 공간",
        },
      ],
    },
    {
      id: 1,
      placeName: "나이스워크투데이",
      placeImg:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: [
        {
          category: "방문목적",
          detail: "연인과의 데이트",
        },
        {
          category: "방문목적",
          detail: "작업/공부",
        },
        {
          category: "인테리어",
          detail: "통창뷰",
        },
        {
          category: "공간무드",
          detail: "넓은 공간",
        },
      ],
    },
  ];
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    searchText,
    tabIndex: searchBarTabIndex,
    handlers: searchBarHandlers,
  } = useSearchBar();
  const {
    modalOpen,
    tabIndex: searchKeywordTabIndex,
    handlers: searchKeywordHandlers,
  } = useSearchKeyword(searchParams.get("keyword_search") === "true");
  const searchByKeywordClicked = () => {
    searchKeywordHandlers.handleModalOpen(true);
  };
  const goBackClicked = () => {
    router.back();
  };
  return (
    <div>
      {modalOpen && (
        <div className="w-full h-full bg-black opacity-[0.4] z-20 absolute" />
      )}
      <SearchKeyword
        isOpen={modalOpen}
        tabIndex={searchKeywordTabIndex}
        handleModalOpen={searchKeywordHandlers.handleModalOpen}
        handleTabIndex={searchKeywordHandlers.handleTabIndex}
      />
      <header className="fixed w-full flex items-center px-[2rem] pt-[1.6rem] pb-[0.6rem] bg-white">
        <ArrowBack onClick={goBackClicked} />
        <SearchBar
          placeholder="공간, 큐레이션을 검색해보세요"
          onChange={searchBarHandlers.handleSearchText}
        />
      </header>
      <div className="flex justify-center pt-[8.2rem] mb-[0.8rem]">
        <SearchStart />
      </div>
      {searchText.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center text-center break-keep headline2 text-text-gray-9 w-[42%] mb-[1.6rem]">
            나에게 딱 맞는 공간을 찾고 싶다면?
          </p>
          {/* <SearchByKeywordButton
            className="w-[12.5rem] h-[2.6rem] py-[0.6rem] mr-[1.2rem] body2-semibold"
            onClick={searchByKeywordClicked}
          /> */}
        </div>
      )}
      <div>
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
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 1 && (
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
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <p className="flex justify-center body1 text-text-gray-8 mt-[6rem]">
                검색 결과가 없습니다.
              </p>
            )}
            {searchBarTabIndex === 1 && (
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
                  />
                ))}
              </div>
            )}
          </div>
        )}
        {searchText.length > 0 && DUMMY_PLACE && DUMMY_CURATION && (
          <div className="pt-[5.4rem]">
            <Tab
              sections={[{ text: "공간" }, { text: "큐레이션" }]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <div className="pb-[10.7rem] px-[2rem]">
                <div className="flex justify-between pt-[1.6rem] pb-[1.2rem]">
                  <div className="flex items-center">
                    <FilterKeyword />
                    <span className="body2-semibold text-text-gray-8 ml-[0.8rem]">
                      키워드 설정
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FilterCategory />
                    <span className="body2-medium text-text-gray-6 ml-[0.8rem]">
                      리뷰 최신순
                    </span>
                  </div>
                </div>
                {DUMMY_PLACE.map((place, i) => (
                  <Link key={place.id} href={`/place/detail/${place.id}`}>
                    <PlaceInfoMain
                      id={place.id}
                      placeName={place.placeName}
                      placeImg={place.placeImg}
                      category={place.category}
                      location={place.location}
                      scrapped={place.scrapped}
                      tags={place.tags}
                      className={i > 0 ? "mt-[4rem]" : ""}
                    />
                  </Link>
                ))}
              </div>
            )}
            {searchBarTabIndex === 1 && (
              <div className="pb-[10.7rem] px-[2rem] mt-[2rem]">
                {DUMMY_CURATION.map((curation, i) => (
                  <CurationMain
                    key={curation.id}
                    id={0}
                    curationPhoto={curation.curationPhoto}
                    userImg={curation.userImg}
                    userName={curation.userName}
                    hashTags={curation.hashTags}
                    mainText={curation.mainText}
                    className={i > 0 ? "mt-[1.6rem]" : ""}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
