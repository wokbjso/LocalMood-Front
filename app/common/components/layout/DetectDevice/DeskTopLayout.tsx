import dynamic from "next/dynamic";
const PhoneRingingImage = dynamic(
  () => import("@common/assets/images/phoneRinging.svg"),
  { ssr: false }
);
const QRCode = dynamic(() => import("./QRCode"), { ssr: false });

export default function DeskTopLayout() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <PhoneRingingImage />
      <p className="header-main text-text-gray-9 mt-[32px] mb-[12px]">
        <span className="font-semibold">모바일에서 </span>
        <span className="text-primary-normal font-semibold">로컬무드</span>를
        접속해주세요!
      </p>
      <p className="text-text-gray-8 text-center">
        <span className="text-[16px] font-medium">
          로컬무드는 현재 모바일 이외의 모드를 제공하지 않습니다.
        </span>
        <br />
        <span className="text-[16px] font-medium">
          아래의 QR 코드를 인식하여 모바일로 접속해주세요.
        </span>
      </p>
      <QRCode />
    </div>
  );
}
