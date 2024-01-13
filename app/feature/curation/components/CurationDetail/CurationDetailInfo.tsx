import { curationDetailCardList } from "@feature/curation/dummyList";
import CuratoinDetailInfoCard from "./CurationDetailInfoCard";
import CurationDetailInfoTop from "./CurationDetailInfoTop";

export default function CurationDetailInfo() {
  return (
    <div className="pb-[6.1rem]">
      <CurationDetailInfoTop />
      {curationDetailCardList.map((props, index) => (
        <div key={index}>
          <CuratoinDetailInfoCard {...props} />
        </div>
      ))}
    </div>
  );
}
