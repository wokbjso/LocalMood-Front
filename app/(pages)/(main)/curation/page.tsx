"use client";
import React from "react";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import UseCuration from "@feature/curation/useCuration";
import CurationMakeButton from "@feature/curation/components/CurationButton/CurationMakeButton";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";

export default function CurationPage() {
  const { tabIndex, isCurationMakeOpen, handlers } = UseCuration();
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];
  const MY_CURATION_DUMMY = [
    {
      id: 0,
      variant: "others" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 9,
    },
    {
      id: 1,
      variant: "others" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "카페",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 10,
    },
    {
      id: 2,
      variant: "others" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "화이트데이에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 12,
    },
    {
      id: 3,
      variant: "others" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 1,
    },
  ];

  return (
    <div className="Curation h-[100vh] overflow-hidden">
      <header>
        <div className="w-full h-[7.8rem] pt-[3.8rem] pr-[2rem] pb-[1.2rem] pl-[2rem]">
          <span className="headline1 text-black">큐레이션</span>
        </div>
      </header>
      <Tab sections={CurationTabSections} onChange={handlers.handleTabIndex} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <div className="flex items-center justify-between pb-[0.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총 <p className="text-black">&nbsp;{MY_CURATION_DUMMY.length}</p>{" "}
              개
            </div>
            <div onClick={() => handlers.handleCurationMakeOpen(true)}>
              <CurationMakeButton />
            </div>
          </div>
        )}
        {tabIndex === 0 &&
          MY_CURATION_DUMMY.map((props) => (
            <div key={props.userName + props.id} className="mb-[1.2rem]">
              <CurationMain {...props} />
            </div>
          ))}
        <div className="pt-[2rem]">
          {tabIndex === 1 &&
            MY_CURATION_DUMMY.map((props) => (
              <div key={props.userName + props.id} className="mb-[1.6rem]">
                <CurationScrapped {...props} />
              </div>
            ))}
        </div>
      </div>
      <CurationMakeModal
        isOpen={isCurationMakeOpen}
        handleOpen={handlers.handleCurationMakeOpen}
      />
    </div>
  );
}
