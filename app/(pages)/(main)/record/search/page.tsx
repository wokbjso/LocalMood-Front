import PlaceInfoRecord from "@feature/place/components/PlaceInfoRecord/PlaceInfoRecord";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import { RECORD_DUMMY, RECORD_DUMMYLIST } from "@feature/record/dummyList";

export default function RecordSearch() {
  return (
    <div>
      <PlaceRecordTopBar showIndicator={false} text="스크랩한 공간" />
      <div className="inline-flex flex-col items-start w-full pt-[0.8rem] px-[2rem] gap-[0.8rem]">
        {RECORD_DUMMYLIST.map((props, index) => (
          <div key={index} className="">
            <PlaceInfoRecord {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
