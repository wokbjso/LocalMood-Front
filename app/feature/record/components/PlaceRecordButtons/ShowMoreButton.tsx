import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";

export default function ShowMoreButton() {
  return (
    <div className="flex items-center gap-[1.2rem] text-text-gray-6 body2-semibold">
      <div> 더보기 </div>
      <div>
        <ArrowIcon />
      </div>
    </div>
  );
}
