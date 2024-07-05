import Footer from "@/common/components/layout/Footer/Footer";
import ApiErrorFallback from "@/common/components/ui/error/ApiErrorFallback";
import HomeBanner from "@/feature/home/components/HomeBanner/organisms/HomeBanner";
import HomePlaceSlider from "@/feature/home/components/HomeSlider/organisms/HomePlaceSlider";
import HomePopularCurationSlider from "@/feature/home/components/HomeSlider/organisms/HomePopularCurationSlider";
import { ErrorBoundary } from "react-error-boundary";

//Page
export default function Home() {
  return (
    <div className="w-[100%] h-[100%] overflow-y-auto overflow-x-hidden">
      {/* Template */}
      <HomeBanner
        textNormalFirst="나에게 딱 맞는 공간을"
        textBold="키워드"
        textNormalLast="로 찾아보세요"
        buttonLabel="키워드로 공간 찾기"
      />
      <HomePlaceSlider
        mainText="연인과의 데이트"
        subText="를 위한 공간"
        className="mt-[4rem]"
      />
      <HomePlaceSlider mainText="친구와의 만남" subText="을 위한 공간" />
      <ErrorBoundary FallbackComponent={ApiErrorFallback}>
        <HomePopularCurationSlider title="마포구 인기 큐레이션" />
      </ErrorBoundary>
      <HomePlaceSlider mainText="왁자지껄 떠들 수 있는" subText="공간" />
      <HomePlaceSlider
        mainText="대화에 집중할 수 있는"
        subText="공간"
        className="pb-[12rem]"
      />
      <Footer className="px-[32px] pt-[8px] pb-[12px] fixed bottom-0 z-10" />
    </div>
  );
}
