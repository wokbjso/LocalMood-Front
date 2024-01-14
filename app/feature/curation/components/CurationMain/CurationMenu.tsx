import EditIcon from "@common/assets/icons/edit/edit.svg";
import DeleteIcon from "@common/assets/icons/delete/delete.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import GrabModal from "@common/components/ui/modal/GrabModal";

export default function CurationMenu() {
  return (
    <div>
      <GrabModal />
      <div className="w-full h-[19.1rem] pb-[17rem] justify-center items-center text-black modal-text bg-white">
        <div className="pl-[2rem] pt-[1.8rem]">
          <div className="flex items-center gap-[1.2rem] pb-[2rem]">
            <EditIcon />
            편집하기
          </div>
          <div className="flex items-center gap-[1.2rem] pb-[2rem]">
            <DeleteIcon />
            삭제하기
          </div>
          <div className="flex items-center gap-[1.2rem]">
            <ShareIcon />
            링크 복사
          </div>
        </div>
      </div>
    </div>
  );
}
