import Text from "@/common/components/ui/text/Text";
import TextWithRightArrow from "@/common/components/ui/text/TextWithRightArrow";
import Link from "next/link";

export default function NoRecord() {
  return (
    <div className="h-[55%] flex flex-col items-center justify-center">
      <Text className="text-black headline1 mb-[12px]">
        아직 기록을 남긴 공간이 없습니다
      </Text>
      <div className="flex items-center">
        <Link
          href={{
            pathname: "/record",
          }}
        >
          <TextWithRightArrow
            text="공간 기록하러 가기"
            textClassName="mr-[4px]"
          />
        </Link>
      </div>
    </div>
  );
}
