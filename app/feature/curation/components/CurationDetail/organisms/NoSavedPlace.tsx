import ArrowRightIcon from "@common/assets/icons/arrow/ArrowRightIcon";
import LinkLayout from "@common/components/layout/Link/LinkLayout";

//Molecule
export default function NoSavedPlace() {
  return (
    <div className="w-full inline-flex flex-col items-center pt-[7.6rem] gap-[1.2rem]">
      <div className="headline1-semibold text-black">
        아직 저장된 공간이 없습니다.
      </div>
      <div className="flex items-center gap-[0.4rem] body2-semibold text-text-gray-6">
        공간 탐색하기
        <LinkLayout routeUrl="/">
          <ArrowRightIcon />
        </LinkLayout>
      </div>
    </div>
  );
}
