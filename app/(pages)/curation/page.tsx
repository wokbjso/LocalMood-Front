"use client";
import React, { useState } from "react";
import CurationHeader from "@feature/curation/components/CurationHeader/CurationHeader";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import CurationButton from "@feature/curation/components/CurationButton/CurationButton";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";

export default function Curation() {
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  const curationMainPropsList = [
    {
      id: 0,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      variant: "my",
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
    },
    {
      id: 1,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      variant: "my",
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "카페",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
    },
    {
      id: 2,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      variant: "my",
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
    },
    {
      id: 3,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      variant: "my",
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
    },
  ]; //API 연결

  const curationScrappedPropsList = [
    {
      id: 0,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 1,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 2,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 3,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
  ]; //API 연결

  return (
    <div className="Curation">
      <div>
        <CurationHeader />
        <Tab sections={CurationTabSections} onChange={handleTabChange} />
        <div className="px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center">
          {tabIndex === 0 && (
            <div className="flex items-center justify-between items-center pb-[0.6rem] pt-[2rem]">
              <div className="flex body1 text-text-gray-8 items-center">
                총{" "}
                <p className="text-black">
                  &nbsp;{curationMainPropsList.length}
                </p>{" "}
                개
              </div>
              <CurationButton />
            </div>
          )}
          {tabIndex === 0 &&
            curationMainPropsList.map((props, index) => (
              <div key={index} className="mb-[1.2rem]">
                <CurationMain {...props} />
              </div>
            ))}
          <div className="pt-[2rem]">
            {tabIndex === 1 &&
              curationScrappedPropsList.map((props, index) => (
                <div key={index} className="mb-[1.6rem]">
                  <CurationScrapped {...props} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
