import Image from "next/image";
import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import { twMerge } from "tailwind-merge";
import { Suspense } from "react";
import GetMemberInfo from "@feature/user/queries/getMemberInfo";
import Link from "next/link";
import RecordMyPageSkeleton from "@feature/record/components/RecordMyPageSkeleton/RecordMyPageSkeleton";
import GetRecordMyPage from "@feature/place/queries/getRecordMyPage";
import dynamic from "next/dynamic";
import PageTopBar from "@common/components/ui/topBar/PageTopBar/PageTopBar";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
const PlaceInfoCard = dynamic(
  () => import("@feature/place/components/PlaceInfoCard/PlaceInfoCard")
);

export default async function MyPage() {
  const recordData = GetRecordMyPage();
  const memberData = GetMemberInfo();
  const [record, member] = await Promise.all([recordData, memberData]);
  return (
    <div className="w-[100%] h-[100%] px-[2rem]">
      <PageTopBar text="프로필" hasMenu />
      <Suspense
        fallback={
          <UseDeferredComponent>
            <RecordMyPageSkeleton />
          </UseDeferredComponent>
        }
      >
        <>
          <section className="flex pt-[1.2rem] mb-[3.6rem]">
            <Image
              src={"/default_user.png"}
              alt="프로필 사진"
              width={72}
              height={72}
              className="rounded-full mr-[1.6rem]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-text-gray-8 body2-medium mb-[0.8rem]">
                공간 기록을 남겨 타이틀을 얻어보세요!
              </p>
              <div className="flex items-center">
                <span className="text-black headline1">{member.nickname}</span>
              </div>
            </div>
          </section>
          <section className="h-full">
            <div
              className={twMerge(
                "text-text-gray-8 headline3",
                record.reviewCount > 0 && "mb-[1.6rem]"
              )}
            >
              {"공간 기록 " + record.reviewCount}
            </div>
            {record.reviewCount === 0 && (
              <div className="h-[60%] flex flex-col items-center justify-center">
                <p className="text-black headline1 mb-[1.2rem]">
                  아직 기록을 남긴 공간이 없습니다
                </p>
                <div className="flex items-center">
                  <span className="text-text-gray-6 body2-semibold mr-[0.4rem]">
                    공간 기록하러 가기
                  </span>
                  <Link
                    href={{
                      pathname: "/record",
                    }}
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            )}
            {record.reviewCount > 0 && (
              <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.6rem] pb-[40.1rem] h-full overflow-y-scroll">
                {record.reviews.map((record) => (
                  <PlaceInfoCard
                    key={record.id}
                    variant="mypage"
                    size="small"
                    {...record}
                    imgUrl={record.image}
                    className="w-full"
                  />
                ))}
              </div>
            )}
          </section>
        </>
      </Suspense>
    </div>
  );
}
