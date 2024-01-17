import ArrowIcon from "@common/assets/icons/arrow/arrow-left.svg";
import PlaceSearchBar from "./PlaceSearchBar";

export default function PlaceSearchTopBar() {
  return (
    <div className="w-full flex px-[2rem] pt-[1.2rem] pb-[0.6rem] items-center gap-[1.2rem]">
      <ArrowIcon />
      <PlaceSearchBar />
    </div>
  );
}
