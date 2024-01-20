import RecordPhotoContent from "@feature/record/components/PhotoUpload/RecordPhotoContent";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

export default function SelectPhoto() {
  return (
    <div>
      <div>
        <PlaceRecordTopBar
          showIndicator={true}
          indicatorIndex={2}
          text="방문한 사진을 업로드해주세요!"
        />
        <RecordPhotoContent />
      </div>
    </div>
  );
}
