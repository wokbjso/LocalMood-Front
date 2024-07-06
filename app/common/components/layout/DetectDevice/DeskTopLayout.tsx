import dynamic from "next/dynamic";
const PhoneRingingImage = dynamic(
  () => import("@/common/assets/images/phone-ringing.svg")
);
const QRCode = dynamic(() => import("./QRCode"));

export default function DeskTopLayout() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <PhoneRingingImage />
      <div className="header-main text-text-gray-9 mt-[32px] mb-[12px]">
        <p className="font-semibold inline">모바일에서 </p>
        <p className="text-primary-normal font-semibold inline">로컬무드</p>를
        접속해주세요!
      </div>
      <div className="text-text-gray-8 text-center">
        <p className="text-[16px] font-medium inline">
          로컬무드는 현재 모바일 이외의 모드를 제공하지 않습니다.
        </p>
        <br />
        <p className="text-[16px] font-medium inline">
          아래의 QR 코드를 인식하여 모바일로 접속해주세요.
        </p>
      </div>
      <QRCode />
    </div>
  );
}
