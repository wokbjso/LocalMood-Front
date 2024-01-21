import EditIcon from "@common/assets/icons/edit/edit.svg";
import DeleteIcon from "@common/assets/icons/delete/delete.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import Modal from "@common/components/ui/modal/Modal";
export default function CurationMenu() {
  return (
    <Modal>
      <div className="pl-[2rem] pt-[1.8rem]">
        <div className="flex items-center pb-[2rem]">
          <EditIcon />
          <span className="body1 text-black ml-[1.2rem]">편집하기</span>
        </div>
        <div className="flex items-center pb-[2rem]">
          <DeleteIcon />
          <span className="body1 text-black ml-[1.2rem]">삭제하기</span>
        </div>
        <div className="flex items-center">
          <ShareIcon />
          <span className="body1 text-black ml-[1.2rem]">링크복사</span>
        </div>
      </div>
    </Modal>
  );
}
