import BackIcon from "@common/assets/icons/arrow/arrow-left.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import MenuIcon from "@common/assets/icons/menu/menu.svg";

export default function CurationTopAppBar() {
  return (
    <div className="pt-[5.3rem]">
      <div className="w-full h-[5.4rem] px-[2rem] py-[1.8rem]">
        <div className="flex items-center justify-between">
          <div className="pr-[25.5rem]">
            <BackIcon />
          </div>
          <div className="flex gap-[0.8rem]">
            <ShareIcon />
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
