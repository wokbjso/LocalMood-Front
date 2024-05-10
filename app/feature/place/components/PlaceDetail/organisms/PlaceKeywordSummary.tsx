import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import { PLACE_CATEGORY } from "@/feature/place/constants/place-tag-category";
import PlaceKeywordSummaryLine from "./PlaceKeywordSummaryLine";
import PlaceKeywordSummaryPurpose from "./PlaceKeywordSummaryPurpose";

//Organism
export default function PlaceKeywordSummary({
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
        <PlaceKeywordSummaryPurpose purpose={purpose} />
        {interior && interior[0].length > 0 && (
          <PlaceKeywordSummaryLine
            category={PLACE_CATEGORY["interior"]}
            record={interior}
            className="mb-[8px]"
          />
        )}
        <PlaceKeywordSummaryLine
          category={PLACE_CATEGORY["mood"]}
          record={mood}
          className="mb-[8px]"
        />
        <PlaceKeywordSummaryLine
          category={PLACE_CATEGORY["music"]}
          record={music}
        />
      </div>
    </>
  );
}
