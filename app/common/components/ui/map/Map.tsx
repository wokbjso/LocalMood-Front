import UseOutsideClick from "@common/hooks/useOutsideClick";
import { assignMultipleRefs } from "@common/utils/dom/assign-multiple-refs";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface MapProps {
  handleMapOpen: (state: boolean) => void;
  address: string[];
  zoom?: number;
  className?: string;
}

export default function Map({
  handleMapOpen,
  address,
  zoom = 17,
  className,
}: MapProps) {
  const [addressX, setAddressX] = useState<number>(0);
  const [addressY, setAddressY] = useState<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);
  const { ref: outsideClickRef } =
    UseOutsideClick<HTMLDivElement>(handleMapOpen);
  const [totalPlaceData, setTotalPlaceData] = useState<
    {
      x: number;
      y: number;
    }[]
  >([]);

  useEffect(() => {
    address.forEach((addr, i) => {
      naver.maps.Service.geocode({ query: addr }, function (status, res) {
        if (status !== naver.maps.Service.Status.OK) {
          alert("결과가 없습니다");
        } else {
          // 요청 성공에 대한 핸들링
          // 검색된 주소에 해당하는 위도, 경도를 숫자로 변환후 상태 저장
          const resAddress = res.v2.addresses[0];
          if (i === 0) {
            const x = parseFloat(resAddress.x);
            const y = parseFloat(resAddress.y);
            setAddressX(x);
            setAddressY(y);
          }
          setTotalPlaceData((prev) => [
            ...prev,
            { x: Number(resAddress.x), y: Number(resAddress.y) },
          ]);
        }
      });
    });
    if (!mapRef.current || !naver) return;
    const center = new naver.maps.LatLng(addressY, addressX);
    const mapOptions: naver.maps.MapOptions = {
      //center 옵션에 생성한 지도 중심 인스턴스 넣기
      center: center,
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
    totalPlaceData.forEach((data) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(data.y, data.x),
        //4번에서 생성한 지도 세팅
        map: map,
      });
    });
  }, [address, addressX, addressY]);

  return (
    <>
      <div className="bg-black opacity-[0.5] w-full h-[100vh] fixed top-0 right-0 z-10" />
      <div className={twMerge("w-full h-[100vh]", className)}>
        <div
          ref={(el) => assignMultipleRefs(el, [outsideClickRef, mapRef])}
          className="w-full h-[78%]"
        />
      </div>
    </>
  );
}
