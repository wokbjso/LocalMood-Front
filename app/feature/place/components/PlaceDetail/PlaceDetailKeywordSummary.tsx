import Chip from "@common/components/ui/buttons/Chip/Chip";
import { PlaceDetailInfoProps } from "@feature/place/queries/dto/place-detail";
import PlaceDetailPurposeBox from "./molecules/PlaceDetailPurposeBox";

export default function PlaceDetailKeywordSummary({
  mainText,
  subText,
  purpose,
  mood,
  interior,
  music,
}: Pick<PlaceDetailInfoProps, "purpose" | "mood" | "interior" | "music"> & {
  mainText: string;
  subText: string;
}) {
  return (
    <>
      <div className="px-[2rem]">
        <p className="headline2 mb-[0.8rem] text-black">{mainText}</p>
        <p className="body3-medium text-text-gray-6">{subText}</p>
      </div>
      <div className="bg-background-secondary-light mt-[1.6rem] p-[2rem]">
        <span className="body2-medium text-text-gray-6">방문 목적</span>
        <div className="flex justify-between mt-[0.8rem] mb-[1.6rem]">
          <PlaceDetailPurposeBox purpose={purpose[0]} />
          <PlaceDetailPurposeBox purpose={purpose[1]} />
        </div>
        {interior && interior[0].length > 0 && (
          <div className="mb-[0.8rem]">
            <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
              인테리어
            </span>
            {interior.slice(0, 2).map((li, i) => (
              <Chip className="bg-white mr-[0.8rem]" key={li + i}>
                <span className="body2-medium text-primary-normal"># </span>
                <span className="body2-medium">{li}</span>
              </Chip>
            ))}
          </div>
        )}
        <div className="mb-[0.8rem]">
          <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
            공간 무드
          </span>
          <Chip className="bg-white">
            <span className="body2-medium text-primary-normal"># </span>
            <span className="body2-medium">{mood}</span>
          </Chip>
        </div>
        <div>
          <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
            배경 음악
          </span>
          <Chip className="bg-white">
            <span className="body2-medium text-primary-normal"># </span>
            <span className="body2-medium">{music}</span>
          </Chip>
        </div>
      </div>
    </>
  );
}
