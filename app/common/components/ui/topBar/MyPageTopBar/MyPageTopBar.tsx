import MenuIcon from "@common/assets/icons/menu/menu.svg";

export default function MyPageTopBar() {
  return (
    <div className="flex justify-between items-center mb-[1.2rem] pt-[3.8rem]">
      <span className="text-black headline1">프로필</span>
      <MenuIcon />
    </div>
  );
}
