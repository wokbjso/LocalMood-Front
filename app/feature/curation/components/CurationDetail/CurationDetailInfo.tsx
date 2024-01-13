import { curationDetailCardList } from "@feature/curation/dummyList";
import CuratoinDetailInfoCard from "./CurationDetailInfoCard";
import CurationDetailInfoTop from "./CurationDetailInfoTop";

export default function CurationDetailInfo() {
  return (
    <div>
      <CurationDetailInfoTop />
      <CuratoinDetailInfoCard />
    </div>
  );
}
