import { Suspense } from "react";
import GetMemberInfo from "@feature/user/queries/getMemberInfo";
import RecordMyPageSkeleton from "@feature/record/components/UserRecord/skeleton/RecordMyPageSkeleton";
import GetRecordMyPage from "@feature/place/queries/getRecordMyPage";
import PageTopBar from "@common/components/ui/topBar/PageTopBar/PageTopBar";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
import UserProfileMyPage from "@feature/user/components/UserProfile/organisms/UserProfileMyPage";
import RecordList from "@feature/record/components/UserRecord/organisms/RecordList";
import RecordCount from "@feature/record/components/UserRecord/molecules/RecordCount";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const memberData = await GetMemberInfo();
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${memberData.nickname}님의 마이페이지`,
    openGraph: {
      images: [
        `${memberData.profileImgUrl}`,
        "/default_user",
        ...previousImages,
      ],
    },
    description: `${memberData.nickname}님의 마이페이지 입니다`,
    keywords: [
      "로컬무드",
      "localmood",
      "큐레이션",
      ` ${memberData.nickname}`,
      `마이페이지`,
      "마포구",
    ],
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
        <RecordCount count={record.reviewCount} />
        <RecordList record={record} />
      </Suspense>
    </div>
  );
}
