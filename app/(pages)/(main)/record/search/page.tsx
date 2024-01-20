"use client";
import PlaceInfoRecord from "@feature/place/components/PlaceInfoRecord/PlaceInfoRecord";
import PlaceSearchTopBar from "@feature/record/components/PlaceSearch/PlaceSearchTopBar";
import { RECORD_DUMMYLIST } from "@feature/record/dummyList";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import { useSearchParams, useRouter } from "next/navigation";

export default function RecordSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("key");
  const router = useRouter();

  const handlePlaceInfoRecordClick = (category: string, placeName: string) => {
    router.push(
      `/record/select/keyword?&category=${category}&name=${placeName}`
    );
  };

  return (
    <>
      {query === "select" && (
        <div>
          <PlaceRecordTopBar showIndicator={false} text="스크랩한 공간" />
          <div className="inline-flex flex-col items-start w-full pt-[0.8rem] px-[2rem] gap-[0.8rem]">
            {RECORD_DUMMYLIST.map((props, index) => (
              <div key={index}>
                <PlaceInfoRecord
                  {...props}
                  onClick={() =>
                    handlePlaceInfoRecordClick(props.category, props.placeName)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {query === null && (
        <div>
          <PlaceSearchTopBar />
          <div className="inline-flex flex-col items-start gap-[0.8rem] px-[2rem] pt-[1.6rem]">
            {RECORD_DUMMYLIST.map((props, index) => (
              <div key={index}>
                <PlaceInfoRecord
                  {...props}
                  onClick={() =>
                    handlePlaceInfoRecordClick(props.category, props.placeName)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
