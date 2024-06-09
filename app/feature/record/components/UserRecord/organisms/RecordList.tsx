import dynamic from "next/dynamic";
const PlaceInfoCard = dynamic(
  () => import("@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard")
);
import NoRecord from "./NoRecord";
import Label from "@/common/components/ui/text/Label";
import { twMerge } from "tailwind-merge";
import GetRecordMyPage from "@/feature/place/queries/getRecordMyPage";

//Organism
export default async function RecordList() {
  const recordData = await GetRecordMyPage();

  return (
    <section className="h-full">
      <Label className={twMerge("text-text-gray-8 headline3")}>
        {"공간 기록" + " " + recordData.reviewCount}
      </Label>
      {recordData.reviewCount === 0 && <NoRecord />}
      {recordData.reviewCount > 0 && (
        <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.6rem] pb-[40.1rem] h-full overflow-y-scroll mt-[16px]">
          {recordData.reviews.map((record) => (
            <PlaceInfoCard
              key={record.id}
              variant="mypage"
              size="small"
              {...record}
              isScraped={false}
              imgUrl={record.image ? record.image : ""}
              className="w-full"
            />
          ))}
        </div>
      )}
    </section>
  );
}
