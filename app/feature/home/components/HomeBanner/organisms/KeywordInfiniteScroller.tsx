import { HEADER_KEYWORD } from "@feature/home/constants/banner-keyword";
import Chip from "../../../../../common/components/ui/buttons/Chip/Chip";

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
