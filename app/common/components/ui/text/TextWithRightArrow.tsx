import ArrowRightIcon from "@/common/assets/icons/arrow/ArrowRightIcon";

interface TextWithRightArrowProps {
  text: string;
}

export default function TextWithRightArrow({ text }: TextWithRightArrowProps) {
  return (
    <div className="flex items-center">
      <span className="mr-[10px] text-text-gray-6 body2-semibold">{text}</span>
      <ArrowRightIcon />
    </div>
  );
}
