import Chip from "@/common/components/ui/buttons/Chip/Chip";
import HashTag from "@/common/components/ui/text/HashTag";
import { twMerge } from "tailwind-merge";

interface CurationBannerHashTagsProps {
  keyword: string;
  className?: string;
}

export default function CurationBannerHashTags({
  keyword,
  className,
}: CurationBannerHashTagsProps) {
  return (
    <div
      className={twMerge(
        "w-full flex justify-center pb-[1.6rem] gap-[0.8rem]",
        className
      )}
    >
      {keyword?.split(",").map((tag: string, index: number) => (
        <Chip key={index} className="bg-white body2-medium">
          <HashTag
            mainText={" " + tag}
            tagClassName="body2-medium"
            mainTextClassName="body2-medium"
          />
        </Chip>
      ))}
    </div>
  );
}
