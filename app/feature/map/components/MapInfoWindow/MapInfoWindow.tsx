import UseOutsideClick from "@common/hooks/useOutsideClick";
import { PlaceInfoProps } from "@feature/place/type";

export default function MapInfoWindow({
  name,
  type,
  address,
  purpose,
  imgUrl,
}: Pick<PlaceInfoProps, "name" | "type" | "address" | "purpose" | "imgUrl">) {
  const infoWindowArray = [
    `<div style="display:flex; width:33.5rem; height:10.4rem; padding:1.2rem 2rem; border-radius:12px; box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10); background-color:white;">`,
    `<div style="width:8rem; height:8rem; margin-right:1.3rem; border-radius:4px; background-image:url(${imgUrl}); background-size: cover; background-repeat: no-repeat;"></div>`, // 이미지 div
    `<div style="display:flex; flex-direction: column; justify-content:space-between;">`,
    `<span style="color:black; font-size:1.6rem; font-weight:600; letter-spacing: -0.32px; font-family: Pretendard, sans-serif;">${name}</span>`,
    `<div style="display:flex; align-items:center;">`,
    `<span style="color:#9E9E9E; font-family: Pretendard; font-size: 1.2rem; font-style: normal; font-weight: 600; letter-spacing: -0.24px;">${
      type === "RESTAURANT" ? "음식점" : "카페"
    }</span>`,
    `<span style="color:#BDBDBD; font-family: Pretendard; font-size: 1.2rem; font-style: normal; letter-spacing: -0.24px;">&nbsp;&nbsp;|&nbsp;&nbsp;<span style="font-weight: 500;">${address}</span></span>`,
    `</div>`,
    `<div style="display:flex; gap: 10px; margin-top:0.4rem; font-family: Pretendard; font-size: 1.2rem; font-style: normal; font-weight: 500; letter-spacing: -0.24px;">`,
    `<div style="padding:0.6rem 0.8rem; background-color:#EEF4FF; border-radius: 100px; white-space:nowrap;">${
      purpose && purpose[0]
    }</div>`,
    `<div style="padding:0.6rem 0.8rem; background-color:#EEF4FF; border-radius: 100px; white-space:nowrap;">${
      purpose && purpose.length > 1 && purpose[1]
    }</div>`,
    `</div>`,
    `</div>`,
    `</div>`,
  ];

  return infoWindowArray.join("");
}
