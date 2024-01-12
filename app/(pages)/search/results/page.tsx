"use client";

import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import NoResult from "@common/assets/images/search_no_result.svg";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import PlaceInfoMain, {
  PlaceInfoMainProps,
} from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import { CurationProps } from "@feature/curation/type";

export default function SearchResult() {
  // 데이터 client-side fetching(useEffect)
  const DUMMY_PLACE: PlaceInfoMainProps[] | [] = [
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
      id: 0,
      placeName: "금복식당",
      placeImg:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      category: "음식점",
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
    {
      id: 2,
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
  const DUMMY_CURATION: CurationProps[] | [] = [
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
  const { tabIndex: searchBarTabIndex, handlers: searchBarHandlers } =
    useSearchBar();
  return (
    <>
      {DUMMY_PLACE.length === 0 && DUMMY_CURATION.length === 0 && (
        <div className="flex flex-col justify-center items-center pt-[12rem]">
          <NoResult />
          <p className="flex justify-center body1 text-text-gray-8 mt-[2.3rem]">
            검색 결과가 없습니다.
          </p>
        </div>
      )}
      {DUMMY_PLACE.length === 0 && DUMMY_CURATION.length > 0 && (
        <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
          <Tab
            sections={[
              { text: "공간", length: 0 },
              { text: "큐레이션", length: DUMMY_CURATION.length },
            ]}
            onChange={searchBarHandlers.handleTabIndex}
          />
          {searchBarTabIndex === 0 && (
            <div className="flex flex-col justify-center items-center pt-[6.6rem]">
              <NoResult />
              <p className="flex justify-center body1 text-text-gray-8 mt-[2.3rem]">
                검색 결과가 없습니다.
              </p>
            </div>
          )}
          {searchBarTabIndex === 1 && (
            <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
              {DUMMY_CURATION.map((curation) => (
                <CurationMain
                  key={curation.id}
                  id={curation.id}
                  curationPhoto={curation.curationPhoto}
                  userImg={curation.userImg}
                  userName={curation.userName}
                  hashTags={curation.hashTags}
                  mainText={curation.mainText}
                  className="mb-[4rem]"
                />
              ))}
            </div>
          )}
        </div>
      )}
      {DUMMY_PLACE.length > 0 && DUMMY_CURATION.length === 0 && (
        <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
          <Tab
            sections={[
              { text: "공간", length: DUMMY_PLACE.length },
              { text: "큐레이션", length: 0 },
            ]}
            onChange={searchBarHandlers.handleTabIndex}
          />
          {searchBarTabIndex === 0 && (
            <div className="h-full px-[2rem] pt-[2rem] pb-[14.5rem] overflow-y-scroll">
              {DUMMY_PLACE.map((place) => (
                <div key={place.id + place.category} className="mb-[4rem]">
                  <PlaceInfoMain
                    id={place.id}
                    placeImg={place.placeImg}
                    placeName={place.placeName}
                    category={place.category}
                    location={place.location}
                    scrapped={place.scrapped}
                    tags={place.tags}
                  />
                </div>
              ))}
            </div>
          )}
          {searchBarTabIndex === 1 && (
            <div className="flex flex-col justify-center items-center pt-[6.6rem]">
              <NoResult />
              <p className="flex justify-center body1 text-text-gray-8 mt-[2.3rem]">
                검색 결과가 없습니다.
              </p>
            </div>
          )}
        </div>
      )}
      {DUMMY_PLACE.length > 0 && DUMMY_CURATION.length > 0 && (
        <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
          <Tab
            sections={[
              { text: "공간", length: DUMMY_PLACE.length },
              { text: "큐레이션", length: DUMMY_CURATION.length },
            ]}
            onChange={searchBarHandlers.handleTabIndex}
          />
          {searchBarTabIndex === 0 && (
            <div className="h-full px-[2rem] pt-[2rem] pb-[14.5rem] overflow-y-scroll">
              {DUMMY_PLACE.map((place) => (
                <div key={place.id + place.category} className="mb-[4rem]">
                  <PlaceInfoMain
                    id={place.id}
                    placeImg={place.placeImg}
                    placeName={place.placeName}
                    category={place.category}
                    location={place.location}
                    scrapped={place.scrapped}
                    tags={place.tags}
                  />
                </div>
              ))}
            </div>
          )}
          {searchBarTabIndex === 1 && (
            <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
              {DUMMY_CURATION.map((curation) => (
                <CurationMain
                  key={curation.id}
                  id={curation.id}
                  curationPhoto={curation.curationPhoto}
                  userImg={curation.userImg}
                  userName={curation.userName}
                  hashTags={curation.hashTags}
                  mainText={curation.mainText}
                  className="mb-[4rem]"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
