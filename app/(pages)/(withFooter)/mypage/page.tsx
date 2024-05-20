import { Suspense } from "react";
import GetMemberInfo from "@/feature/user/queries/getMemberInfo";
import RecordMyPageSkeleton from "@/feature/record/components/UserRecord/skeleton/RecordMyPageSkeleton";
import GetRecordMyPage from "@/feature/place/queries/getRecordMyPage";
import PageTopBar from "@/common/components/ui/topBar/PageTopBar/PageTopBar";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import UserProfileMyPage from "@/feature/user/components/UserProfile/organisms/UserProfileMyPage";
import RecordList from "@/feature/record/components/UserRecord/organisms/RecordList";
import { Metadata } from "next";
import Label from "@/common/components/ui/text/Label";
import { twMerge } from "tailwind-merge";

export async function generateMetadata(): Promise<Metadata> {
  const memberData = await GetMemberInfo();

  return {
    title: `${memberData.nickname}님의 마이페이지`,
  };
}

//Page
export default async function MyPage() {
  const recordData = GetRecordMyPage();
  const memberData = GetMemberInfo();
  const [record, member] = await Promise.all([recordData, memberData]);

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
        <UserProfileMyPage nickName={member.nickname} />
        <Label
          label={"공간 기록" + " " + record.reviewCount}
          className={twMerge("text-text-gray-8 headline3")}
        />
        <RecordList record={record} />
      </Suspense>
    </div>
  );
}
