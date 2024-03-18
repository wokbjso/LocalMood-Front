import Footer from "@common/components/layout/Footer/Footer";
import { BeatLoader } from "react-spinners";
import { Suspense } from "react";
import Script from "next/script";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100%] h-[100%]">
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
      ></Script>
      <Suspense
        fallback={
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <BeatLoader color="#36d7b7" />
          </div>
        }
      >
        {children}
      </Suspense>
      <Footer />
    </div>
  );
}
