import AddIcon from "@common/assets/icons/add/add-fill.svg";
import BottomAppBar from "../BottomAppBar/BottomAppBar";

export default function PhotoUpload() {
  return (
    <div>
      <div className="inline-flex flex-col items-start pt-[6rem] pl-[2rem] gap-[1.2rem]">
        <div className="flex items-start gap-[0.6rem] headline3-semibold">
          <div className="text-black">사진올리기</div>
          <div className="text-text-gray-6">0/2</div>
        </div>
        <div className="w-[16.4rem] h-[16.4rem] p-[6.2rem] shrink-0 rounded-[10px] border border-solid border-1px border-line-gray-3">
          <AddIcon />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <BottomAppBar />
      </div>
    </div>
  );
}
