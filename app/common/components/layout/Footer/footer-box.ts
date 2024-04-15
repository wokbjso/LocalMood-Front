import Home from "@common/assets/icons/home/Home";
import Record from "@common/assets/icons/record/Record";
import Curation from "@common/assets/icons/curation/Curation";
import UserProfile from "@common/assets/icons/user/UserProfile";

export const FOOTER_BOX = [
  {
    icon: Home,
    text: "홈",
    navigateTo: "/",
  },
  {
    icon: Record,
    text: "공간기록",
    navigateTo: "/record",
  },
  {
    icon: Curation,
    text: "큐레이션",
    navigateTo: "/curation",
  },
  {
    icon: UserProfile,
    text: "마이페이지",
    navigateTo: "/mypage",
  },
];
