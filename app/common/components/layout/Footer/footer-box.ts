import CurationIcon from "@/common/assets/icons/curation/CurationIcon";
import HomeIcon from "@/common/assets/icons/home/HomeIcon";
import RecordIcon from "@/common/assets/icons/record/RecordIcon";
import UserProfileIcon from "@/common/assets/icons/user/UserProfileIcon";

export const FOOTER_BOX = [
  {
    icon: HomeIcon,
    text: "홈",
    navigateTo: "/",
  },
  {
    icon: RecordIcon,
    text: "공간기록",
    navigateTo: "/record",
  },
  {
    icon: CurationIcon,
    text: "큐레이션",
    navigateTo: "/curation",
  },
  {
    icon: UserProfileIcon,
    text: "마이페이지",
    navigateTo: "/mypage",
  },
];
