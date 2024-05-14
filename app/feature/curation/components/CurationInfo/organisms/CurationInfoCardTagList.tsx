import HashTag from "@/common/components/ui/text/HashTag";
import { CurationProps } from "@/feature/curation/type";
import { twMerge } from "tailwind-merge";

export default function CurationInfoCardTagList({
  keyword,
  textClassName,
  className,
}: Pick<CurationProps, "keyword"> & {
  textClassName?: string;
  className?: string;
}) {
  return (
    <div className={twMerge("flex flex-wrap gap-x-[0.8rem]", className)}>
      {keyword.map((tag) => (
        <HashTag
          key={tag}
          mainText={" " + tag}
          tagClassName="body2-medium"
          mainTextClassName={twMerge(
            "body2-medium whitespace-nowrap",
            textClassName
          )}
        />
      ))}
    </div>
  );
}
