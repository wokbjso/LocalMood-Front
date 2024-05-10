import HeartIcon from "@/common/assets/icons/heart/HeartIcon";
import Chip from "@/common/components/ui/buttons/Chip/Chip";
import MusicIcon from "@/common/assets/icons/music/MusicIcon";
import LampIcon from "@/common/assets/icons/lamp/LampIcon";
import WineIcon from "@/common/assets/icons/wine/WineIcon";
import ElectricCordIcon from "@/common/assets/icons/electric-cord/ElectricCordIcon";
import PetIcon from "@/common/assets/icons/pet/PetIcon";
import WindowIcon from "@/common/assets/icons/window/WindowIcon";

const HEADER_KEYWORD = [
  { icon: HeartIcon, label: "연인과의 데이트" },
  { icon: MusicIcon, label: "잔잔한 음악" },
  { icon: LampIcon, label: "따뜻한 조명" },
  { icon: WineIcon, label: "와인" },
  { icon: ElectricCordIcon, label: "콘센트 있음" },
  { icon: PetIcon, label: "애견동반 가능" },
  { icon: WindowIcon, label: "통창뷰" },
  { icon: HeartIcon, label: "연인과의 데이트" },
  { icon: MusicIcon, label: "잔잔한 음악" },
  { icon: LampIcon, label: "따뜻한 조명" },
  { icon: WineIcon, label: "와인" },
  { icon: ElectricCordIcon, label: "콘센트 있음" },
  { icon: PetIcon, label: "애견동반 가능" },
  { icon: WindowIcon, label: "통창뷰" },
];

//Organism
export default function KeywordInfiniteScroller() {
  return (
    <div className="overflow-hidden">
      <ul className="flex no-wrap">
        <div className="header-slider1 flex pb-[2rem] bg-background-secondary-light ">
          {HEADER_KEYWORD.map((keyword, i: number) => (
            <li key={keyword.label + i}>
              <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                {<keyword.icon />}
                <span className="pl-[0.4rem]">{keyword.label}</span>
              </Chip>
            </li>
          ))}
        </div>
        <div className="header-slider2 flex pb-[2rem] bg-background-secondary-light">
          {HEADER_KEYWORD.map((keyword, i: number) => (
            <li key={keyword.label + i}>
              <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                {<keyword.icon />}
                <span className="pl-[0.4rem]">{keyword.label}</span>
              </Chip>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
