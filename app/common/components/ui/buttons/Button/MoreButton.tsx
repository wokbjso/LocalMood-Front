import ArrowRightIcon from "@common/assets/icons/arrow/ArrowRightIcon";
import LinkLayout from "@common/components/layout/Link/LinkLayout";

interface MoreButtonProps {
  routeTo: string;
  showArrow?: boolean;
}

export default function MoreButton({
  routeTo,
  showArrow = false,
}: MoreButtonProps) {
  return (
    <LinkLayout routeUrl={routeTo} className="flex items-center">
      <span className="mr-[10px] text-text-gray-6 body2-semibold">더보기</span>
      {showArrow && <ArrowRightIcon />}
    </LinkLayout>
  );
}
