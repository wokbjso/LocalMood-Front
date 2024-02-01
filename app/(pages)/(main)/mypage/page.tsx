"use client";

import MyPageTopBar from "@common/components/ui/topBar/MyPageTopBar/MyPageTopBar";
import Image from "next/image";
import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import { twMerge } from "tailwind-merge";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import GetPlaceMyPage from "@feature/place/queries/getPlaceMyPage";
import { useEffect, useState } from "react";
import GetMemberInfo from "@feature/user/queries/getMemberInfo";
import Link from "next/link";
import { getSession } from "@common/utils/getSession";

export default function MyPage() {
  const [myPageData, setMyPageData] = useState<{
    reviewCount: number;
    reviews: any[];
  }>();
  const [userData, setUserData] = useState<{
    nickname: string;
    profileImgUrl: string;
  }>();

  const getMyPageData = async () => {
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      const placeData = await GetPlaceMyPage();
      setMyPageData(placeData);
      const memberData = await GetMemberInfo();
      setUserData(memberData);
    }
  };

  useEffect(() => {
    getMyPageData();
  }, []);
  return (
    <div className="px-[2rem] h-[100vh] overflow-hidden">
      <MyPageTopBar />
      <section className="flex pt-[1.2rem] mb-[3.6rem]">
        <div className="w-[7.2rem] h-[7.2rem] relative mr-[1.6rem]">
          <Image
            src={"/default_user.png"}
            alt="프로필 사진"
            fill
            sizes="10vw"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-text-gray-8 body2-medium mb-[0.8rem]">
            공간 기록을 남겨 타이틀을 얻어보세요!
          </p>
          <div className="flex items-center">
            {/* {DUMMY_USER.cafeKing && (
              <Chip className="bg-primary-normal text-white mr-[0.8rem]">
                카공왕
              </Chip>
            )} */}
            <span className="text-black headline1">
              {userData && userData.nickname}
            </span>
          </div>
        </div>
      </section>
      <section className="h-full">
        <div
          className={twMerge(
            "text-text-gray-8 headline3",
            myPageData && myPageData.reviewCount > 0 && "mb-[1.6rem]"
          )}
        >
          공간 기록 {myPageData && myPageData.reviewCount}
        </div>
        {myPageData && myPageData.reviewCount === 0 && (
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
        {myPageData && myPageData.reviewCount > 0 && (
          <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.6rem] pb-[40.1rem] h-full overflow-y-scroll">
            {myPageData.reviews.map((record) => (
              <PlaceInfoMain key={record.id} {...record} className="w-full" />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
