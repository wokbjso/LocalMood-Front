import { useState } from "react";

type MapDataProps = {
  address: string;
  name: string;
  type: string;
  purpose: string[];
  imgUrl: string;
}[];

export default function UseSetPlaceMapData() {
  const [placeData, setPlaceData] = useState<MapDataProps>([]);

  const changePlaceData = (data: MapDataProps) => {
    setPlaceData(data);
  };

  return { placeData, changePlaceData };
}
