import ElectricCordIcon from "@common/assets/icons/electric-cord/ElectricCordIcon";
import HeartIcon from "@common/assets/icons/heart/HeartIcon";
import LampIcon from "@common/assets/icons/lamp/LampIcon";
import MusicIcon from "@common/assets/icons/music/MusicIcon";
import PetIcon from "@common/assets/icons/pet/PetIcon";
import WindowIcon from "@common/assets/icons/window/WindowIcon";
import WineIcon from "@common/assets/icons/wine/Wine";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import Chip from "@common/components/ui/buttons/Chip/Chip";

export default function HomeBanner() {
  const HEADER_KEYWORD = [
    { icon: HeartIcon, color: "#F670C7", label: "연인과의 데이트" },
    { icon: MusicIcon, color: "#8F73FD", label: "잔잔한 음악" },
    { icon: LampIcon, label: "따뜻한 조명" },
    { icon: WineIcon, label: "와인" },
    { icon: ElectricCordIcon, label: "콘센트 있음" },
    { icon: PetIcon, label: "애견동반 가능" },
    { icon: WindowIcon, label: "통창뷰" },
  ];
  return (
    <>
      <p className="header-light pb-[2.4rem] px-[2rem] pt-[5.4rem] bg-background-secondary-light">
        나에게 딱 맞는 공간을
        <br />
        <span className="header-main"> 키워드</span>로 찾아보세요
      </p>
      <div className="overflow-hidden">
        <ul className="flex no-wrap">
          <div className="header-slider1 flex pb-[2rem] bg-background-secondary-light">
            {HEADER_KEYWORD.map((keyword, i) => (
              <li key={keyword.label + i}>
                <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                  {<keyword.icon color={keyword.color} />}
                  <span className="pl-[0.4rem]">{keyword.label}</span>
                </Chip>
              </li>
            ))}
          </div>
          <div className="header-slider2 flex pb-[2rem] bg-background-secondary-light">
            {HEADER_KEYWORD.map((keyword, i) => (
              <li key={keyword.label + i}>
                <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                  {<keyword.icon color={keyword.color} />}
                  <span className="pl-[0.4rem]">{keyword.label}</span>
                </Chip>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="flex justify-center pb-[2rem] bg-background-secondary-light">
        {/* search 하는 페이지로 이동 시 키워드 선택 모달 바로 뜨도록 쿼리로 상태 전달 */}
        <LinkLayout
          routeUrl="/search"
          query={{ keyword_search: true }}
          className="w-full flex justify-center px-[2rem]"
        >
          <Button>키워드로 공간 찾기</Button>
        </LinkLayout>
      </div>
    </>
  );
}
