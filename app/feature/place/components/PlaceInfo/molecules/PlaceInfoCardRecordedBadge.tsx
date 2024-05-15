import CheckSmallIcon from "@/common/assets/icons/check/CheckSmallIcon";
import Chip from "@/common/components/ui/buttons/Chip/Chip";

interface PlaceInfoCardRecordedBadgeProps {
  text: string;
}

export default function PlaceInfoCardRecordedBadge({
  text,
}: PlaceInfoCardRecordedBadgeProps) {
  return (
    <Chip className="flex items-center absolute bottom-[0.8rem] left-[0.8rem] px-[6px] h-[2rem] rounded-[4px] bg-primary-normal  z-10">
      <CheckSmallIcon className="mr-[4px]" />
      <span className="body3-semibold text-white">{text}</span>
    </Chip>
  );
}
