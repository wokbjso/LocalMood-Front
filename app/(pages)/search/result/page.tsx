export default function SearchResult() {
  const DUMMY_PLACE = [
    {
      id: 0,
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
  return (
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
            onChange={handlers.handleTabIndex}
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
            onChange={handlers.handleTabIndex}
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
            onChange={handlers.handleTabIndex}
          />
          {tabIndex === 0 && (
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
                <PlaceInfoMain
                  key={place.id}
                  id={place.id}
                  placeName={place.placeName}
                  placeImg={place.placeImg}
                  category={place.category}
                  location={place.location}
                  scrapped={place.scrapped}
                  tags={place.tags}
                  className={i > 0 ? "mt-[4rem]" : ""}
                />
              ))}
            </div>
          )}
          {tabIndex === 1 && (
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
  );
}
