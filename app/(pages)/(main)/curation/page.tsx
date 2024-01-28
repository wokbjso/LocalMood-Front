"use client";

import React, { useEffect, useState } from "react";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import UseCuration from "@feature/curation/useCuration";
import CurationMakeButton from "@feature/curation/components/CurationButton/CurationMakeButton";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";
import MyCurationAPI from "@api/curation/my/route";
import MyCurationScrappedAPI from "@api/curation/scrapped/route";
import { CurationProps } from "@feature/curation/type";

export default function CurationPage() {
  const { tabIndex, isCurationMakeOpen, handlers } = UseCuration();
  const [myCuration, setMyCuration] = useState({
    curationCount: 0,
    curation: [],
  });

  //스크랩 쪽 Api 백엔드에서 수정 필요
  //const [scrappedCuration, setScrappedCuration] = useState<any[]>([]);

  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];

  //스크랩쪽 임시 더미 데이터
  const MY_CURATION_DUMMY = [
    {
      id: 0,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      spaceCount: 9,
    },
    {
      id: 1,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "카페",
      keyword: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      spaceCount: 10,
    },
    {
      id: 2,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "화이트데이에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      spaceCount: 12,
    },
    {
      id: 3,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      spaceCount: 1,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myCurationData = await MyCurationAPI();
        setMyCuration(myCurationData || { curationCount: 0, curation: [] });

        // Fetch scrapped curation data

        // const scrappedCurationData = await MyCurationScrappedAPI();
        //setScrappedCuration(scrappedCurationData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //console.log(scrappedCuration);
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
              총 <p className="text-black">&nbsp;{myCuration.curationCount}</p>{" "}
              개
            </div>
            <div onClick={() => handlers.handleCurationMakeOpen(true)}>
              <CurationMakeButton />
            </div>
          </div>
        )}
        {tabIndex === 0 &&
          myCuration.curation.map((props: CurationProps) => (
            <div key={props.author + props.id} className="mb-[1.2rem]">
              <CurationMain {...props} />
            </div>
          ))}
        <div className="pt-[2rem] pb-[6rem]">
          {tabIndex === 1 &&
            MY_CURATION_DUMMY.map((props) => (
              <div key={props.author + props.id} className="mb-[1.6rem]">
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
