import Script from "next/script";

export default function SubmainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100%] h-[100%]" key="submain">
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
      ></Script>
      {children}
    </div>
  );
}
