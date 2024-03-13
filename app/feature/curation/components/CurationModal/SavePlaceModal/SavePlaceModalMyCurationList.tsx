import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { lazy, useEffect, useState } from "react";
const SavePlaceModalMyCurationCard = lazy(
  () => import("./SavePlaceModalMyCurationCard")
);

export default function SavePlaceModalMyCurationList({
  spaceId,
}: {
  spaceId: number;
}) {
  const [curationMy, setCurationMy] = useState<MyCurationResponse>();
  const getMyCurationList = async () => {
    const res = await fetch("/api/curation/my");
    setCurationMy(await res.json());
  };
  useEffect(() => {
    getMyCurationList();
  }, []);
  return (
    <div className="flex flex-col items-start gap-[0.8rem]">
      {curationMy?.curation.map((curationData) => (
        <SavePlaceModalMyCurationCard
          key={curationData.id}
          curationData={curationData}
          spaceId={spaceId}
        />
      ))}
    </div>
  );
}
