import { Suspense } from "react";
import GetMemberInfo from "@/feature/user/queries/getMemberInfo";
import RecordMyPageSkeleton from "@/feature/record/components/UserRecord/skeleton/RecordMyPageSkeleton";
import PageTopBar from "@/common/components/ui/topBar/PageTopBar/PageTopBar";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import UserProfileMyPage from "@/feature/user/components/UserProfile/organisms/UserProfileMyPage";
import RecordList from "@/feature/record/components/UserRecord/organisms/RecordList";
import { Metadata } from "next";
import { ErrorBoundary } from "react-error-boundary";
import ApiErrorFallback from "@/common/components/ui/error/ApiErrorFallback";

export async function generateMetadata(): Promise<Metadata> {
  const memberData = await GetMemberInfo();

  return {
    title: `${memberData.nickname}님의 마이페이지`,
  };
}

//Page
export default function MyPage() {
  return (
    <div className="w-[100%] h-[100%] px-[2rem]">
      {/* Template */}
      <PageTopBar text="프로필" hasMenu />
      <Suspense
        fallback={
          <UseDeferredComponent>
            <RecordMyPageSkeleton />
          </UseDeferredComponent>
        }
      >
        <UserProfileMyPage />
        <ErrorBoundary FallbackComponent={ApiErrorFallback}>
          <RecordList />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
