import UseOutsideClick from "@common/hooks/useOutsideClick";
import { assignMultipleRefs } from "@common/utils/dom/assign-multiple-refs";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import MapMarker from "../MapMarker/MapMarker";
import MapInfoWindow from "@feature/map/components/MapInfoWindow/MapInfoWindow";
import { sliceText } from "@common/utils/text/slice-text";

interface MapProps {
  placeData: {
    address: string;
    name: string;
    type: string;
    purpose: string[];
    imgUrl: string;
  }[];
  zoom?: number;
  closeMap: () => void;
  className?: string;
}

export default function Map({
  placeData,
  zoom = 17,
  closeMap,
  className,
}: MapProps) {
  const [centerX, setCenterX] = useState<number>(0);
  const [centerY, setCenterY] = useState<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);
  const { ref: outsideClickRef } = UseOutsideClick<HTMLDivElement>(
    true,
    closeMap
  );
  const [mapPlacesData, setMapPlacesData] = useState<
    {
      x: number;
      y: number;
      type: string;
      name: string;
      address: string;
      purpose: string[];
      imgUrl: string;
    }[]
  >([]);

  useEffect(() => {
    placeData.forEach((place, i) => {
      naver.maps.Service.geocode(
        { query: place.address + " " + place.name },
        function (status, res) {
          if (status !== naver.maps.Service.Status.OK) {
            alert(`${place} 주소에 맞는 결과가 없습니다`);
          } else {
            // 검색된 주소에 해당하는 위도, 경도를 숫자로 변환후 상태 저장
            const resAddress = res.v2.addresses[0];
            if (i === 0) {
              setCenterX(parseFloat(resAddress.x));
              setCenterY(parseFloat(resAddress.y));
            }
            setMapPlacesData((prev) => [
              ...prev,
              {
                x: parseFloat(resAddress.x),
                y: parseFloat(resAddress.y),
                type: place.type,
                name: place.name,
                address: place.address,
                purpose: place.purpose,
                imgUrl: place.imgUrl,
              },
            ]);
          }
        }
      );
    });
  }, [placeData]);

  useEffect(() => {
    if (placeData.length === mapPlacesData.length) {
      if (!mapRef.current || !naver) return;
      const center = new naver.maps.LatLng(centerY, centerX);
      const mapOptions: naver.maps.MapOptions = {
        //center 옵션에 생성한 지도 중심 인스턴스 넣기
        center,
        zoom,
        minZoom: 11,
        maxZoom: 20,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        mapDataControl: false,
        scaleControl: false,
      };
      let map = new naver.maps.Map(mapRef.current, mapOptions);
      mapPlacesData.forEach((place) => {
        let marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(place.y, place.x),
          //4번에서 생성한 지도 세팅
          map,
          icon: {
            content: MapMarker(place.type),
          },
          animation: naver.maps.Animation.BOUNCE,
        });
        let infoWindow = new naver.maps.InfoWindow({
          content: MapInfoWindow({
            name: place.name,
            type: place.type,
            address: sliceText(place.address, 15),
            purpose: place.purpose,
            imgUrl: place.imgUrl,
          }),
          borderWidth: 0,
          pixelOffset: new naver.maps.Point(0, 150),
          disableAnchor: true,
          backgroundColor: "transparent",
        });
        naver.maps.Event.addListener(marker, "click", function (e) {
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        });
      });
    }
  }, [placeData, centerX, centerY, zoom, mapPlacesData]);

  return (
    <>
      <div className="w-[100%] h-[100%] bg-black opacity-[0.5] fixed top-0 right-0 z-20" />
      <div className={twMerge("w-[100%] h-[100%]", className)}>
        <div
          ref={(el) => assignMultipleRefs(el, [outsideClickRef, mapRef])}
          className="w-full h-[78%]"
        />
      </div>
    </>
  );
}
