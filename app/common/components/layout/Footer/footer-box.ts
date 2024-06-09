import CurationIcon from "@/common/assets/icons/curation/CurationIcon";
import HomeIcon from "@/common/assets/icons/home/HomeIcon";
import RecordIcon from "@/common/assets/icons/record/RecordIcon";
import UserProfileIcon from "@/common/assets/icons/user/UserProfileIcon";

export const FOOTER_BOX = [
  {
    icon: HomeIcon,
    label: "홈",
    navigateTo: "/",
  },
  {
    icon: RecordIcon,
    label: "공간기록",
    navigateTo: "/record",
  },
  {
    icon: CurationIcon,
    label: "큐레이션",
    navigateTo: "/curation",
  },
  {
    icon: UserProfileIcon,
    label: "마이페이지",
    navigateTo: "/mypage",
  },
];
