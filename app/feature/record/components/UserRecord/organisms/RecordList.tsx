import dynamic from "next/dynamic";
const PlaceInfoCard = dynamic(
  () => import("@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard")
);
import NoRecord from "./NoRecord";

interface RecordListProps {
  record: {
    reviewCount: number;
    reviews: any[];
  };
}

//Organism
export default function RecordList({ record }: RecordListProps) {
  return (
    <section className="h-full mt-[16px]">
      {record.reviewCount > 0 && <NoRecord />}
      {record.reviewCount > 0 && (
        <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.6rem] pb-[40.1rem] h-full overflow-y-scroll">
          {record.reviews.map((record) => (
            <PlaceInfoCard
              key={record.id}
              variant="mypage"
              size="small"
              {...record}
              imgUrl={record.image}
              className="w-full"
            />
          ))}
        </div>
      )}
    </section>
  );
}
