"use client";

import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import { CurationProps } from "@feature/curation/type";
import { PlaceInfoProps } from "@feature/place/type";
import { useSearchParams } from "next/navigation";
import SearchNoResult from "@feature/search/components/SearchNoResult/SearchNoResult";
import { useEffect, useState } from "react";
import PostSearch from "@feature/search/queries/postSearch";

export default function SearchResult() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  // searchParams.get('search_query') 활용한 get api 로 대체(client side - tanstack query)
  // keyword로 검색 시 category 가 빈 string이 아닌 category들을 쿼리파라미터로 api post 요청
  const DUMMY_PLACE: PlaceInfoProps[] | [] = [
    {
      id: 0,
      name: "신촌 캐치카페",
      imgUrl:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      type: "카페",
      address: "마포구 신촌",
      isScraped: false,
      purpose: ["연인과의 데이트", "작업/공부/책"],
      interior: ["통창뷰", "넓은 공간"],
    },
    {
      id: 0,
      name: "금복식당",
      imgUrl:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      type: "음식점",
      address: "마포구 망원동",
      isScraped: false,
      purpose: ["연인과의 데이트", "작업/공부/책"],
      interior: ["통창뷰", "넓은 공간"],
    },
    {
      id: 2,
      name: "나이스워크투데이",
      imgUrl:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      type: "카페",
      address: "마포구 망원동",
      isScraped: false,
      purpose: ["연인과의 데이트", "작업/공부/책"],
      interior: ["통창뷰", "넓은 공간"],
    },
  ];
  const DUMMY_CURATION: CurationProps[] | [] = [
    {
      id: 0,
      imgUrl: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
      spaceCount: 12,
    },
    {
      id: 1,
      imgUrl: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김지원",
      title: "평일에 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "평일"],
      spaceCount: 10,
    },
    {
      id: 2,
      imgUrl: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김경민",
      title: "주말에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "주말"],
      spaceCount: 2,
    },
    {
      id: 3,
      imgUrl: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "최예원",
      title: "친구와 즐기기 좋은 마포구 데이트 코스",
      keyword: ["친구와의 데이트", "마포구"],
      spaceCount: 3,
    },
  ];
  const { tabIndex: searchBarTabIndex, handlers: searchBarHandlers } =
    useSearchBar();
  //검색 텍스트 처리
  const [searchData, setSearchData] = useState(null);
  useEffect(() => {
    const res = PostSearch(searchParams.get("search_query") as string);
  }, []);
  return (
    <>
      {DUMMY_PLACE.length === 0 && DUMMY_CURATION.length === 0 && (
        <SearchNoResult />
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
          {searchBarTabIndex === 0 && <SearchNoResult />}
          {searchBarTabIndex === 1 && (
            <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
              {DUMMY_CURATION.map((curation) => (
                <CurationMain
                  key={curation.id}
                  id={curation.id}
                  imgUrl={curation.imgUrl}
                  author={curation.author}
                  title={curation.title}
                  keyword={curation.keyword}
                  spaceCount={curation.spaceCount}
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
                <div key={place.id + place.type} className="mb-[4rem]">
                  <PlaceInfoMain {...place} keywordCategoryNum={0} />
                </div>
              ))}
            </div>
          )}
          {searchBarTabIndex === 1 && <SearchNoResult />}
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
                <div key={place.id + place.type} className="mb-[4rem]">
                  <PlaceInfoMain {...place} keywordCategoryNum={0} />
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
                  imgUrl={curation.imgUrl}
                  author={curation.author}
                  title={curation.title}
                  keyword={curation.keyword}
                  spaceCount={curation.spaceCount}
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
