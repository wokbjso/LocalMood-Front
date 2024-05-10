"use client";

import LoadingUI from "@/common/components/ui/loading/LoadingUI";
import PageDarkWrapper from "@/common/components/ui/wrapper/PageDarkWrapper";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import { queryFetching } from "@/common/state/queryFetching";
import { useRecoilValue } from "recoil";

export default function QueryFetchingProvider() {
  const isQueryFetching = useRecoilValue(queryFetching);
  return (
    isQueryFetching && (
      <UseDeferredComponent>
        <PageDarkWrapper />
        <LoadingUI className="absolute top-0 left-0 z-50" />
      </UseDeferredComponent>
    )
  );
}
