import HeartIcon from "@common/assets/icons/heart/HeartIcon";
import UserDouble from "@common/assets/icons/user/UserDouble";
import Chip from "@common/components/ui/buttons/Chip/Chip";

interface PlaceDetailKeywordSummaryProps {
  mainText: string;
  subText: string;
  tags: { [key: string]: string[] };
}

export default function PlaceDetailKeywordSummary({
  mainText,
  subText,
  tags,
}: PlaceDetailKeywordSummaryProps) {
  return (
    <>
      <div className="px-[2rem]">
        <p className="headline2 mb-[0.8rem] text-black">{mainText}</p>
        <p className="body3-medium text-text-gray-6">{subText}</p>
      </div>
      <div className="bg-background-secondary-light mt-[1.6rem] p-[2rem]">
        <span className="body2-medium text-text-gray-6">방문 목적</span>
        <div className="flex justify-between mt-[0.8rem] mb-[1.6rem]">
          <div className="w-[48%] flex flex-col items-center p-[1.2rem] bg-white rounded-[8px]">
            <HeartIcon color="#F670C7" />
            <div className="mt-[0.8rem]">
              <span className="body1 text-primary-normal"># </span>
              <span className="body1 text-black">{tags["purpose"][0]}</span>
            </div>
          </div>
          <div className="w-[48%] flex flex-col items-center p-[1.2rem] bg-white rounded-[8px]">
            <UserDouble color="#9B8AFB" />
            <div className="mt-[0.8rem]">
              <span className="body1 text-primary-normal"># </span>
              <span className="body1 text-black">{tags["purpose"][1]}</span>
            </div>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
            공간 무드
          </span>
          <Chip className="bg-white">
            <span className="body2-medium text-primary-normal"># </span>
            <span className="body2-medium">{tags["mood"][0]}</span>
          </Chip>
        </div>
        <div>
          <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
            배경 음악
          </span>
          <Chip className="bg-white">
            <span className="body2-medium text-primary-normal"># </span>
            <span className="body2-medium">{tags["music"][0]}</span>
          </Chip>
        </div>
      </div>
    </>
  );
}
