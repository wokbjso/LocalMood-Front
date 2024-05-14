import { useState } from "react";

export default function UseCurationDetailPlaceIndex() {
  const [placeIndex, setPlaceIndex] = useState(0);

  const changePlaceIndex = (index: number) => {
    setPlaceIndex(index);
  };

  return { placeIndex, changePlaceIndex };
}
