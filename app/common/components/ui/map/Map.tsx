import UseOutsideClick from "@common/hooks/useOutsideClick";
import { assignMultipleRefs } from "@common/utils/dom/assign-multiple-refs";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface MapProps {
  handleMapOpen: (state: boolean) => void;
  address: string;
  className?: string;
}

export default function Map({ handleMapOpen, address, className }: MapProps) {
  const [addressX, setAddressX] = useState<number>(0);
  const [addressY, setAddressY] = useState<number>(0);
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const { ref: outsideClickRef } =
    UseOutsideClick<HTMLDivElement>(handleMapOpen);

  useEffect(() => {
    naver.maps.Service.geocode(
      { query: address + " " + name },
      function (status, res) {
        if (status !== naver.maps.Service.Status.OK) {
          alert("결과가 없습니다");
        } else {
          // 요청 성공에 대한 핸들링
          // 검색된 주소에 해당하는 위도, 경도를 숫자로 변환후 상태 저장
          const resAddress = res.v2.addresses[0];
          const x = parseFloat(resAddress.x);
          const y = parseFloat(resAddress.y);
          setAddressX(x);
          setAddressY(y);
        }
      }
    );
  }, [address]);
  useEffect(() => {
    if (!mapRef.current || !naver) return;
    const center = new naver.maps.LatLng(addressY, addressX);
    const mapOptions: naver.maps.MapOptions = {
      //center 옵션에 생성한 지도 중심 인스턴스 넣기
      center: center,
      zoom: 17,
      minZoom: 11,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapDataControl: false,
      scaleControl: false,
    };
    //설정해놓은 옵션을 바탕으로 지도 생성
    let map = new naver.maps.Map(mapRef.current, mapOptions);
    setNewMap(map);
    let marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(addressY, addressX),
      //4번에서 생성한 지도 세팅
      map: map,
    });
  }, [addressX, addressY]);

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
