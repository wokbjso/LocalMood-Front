import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { ReactNode, Suspense } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[100%] h-[100%]">
      <Suspense fallback={null}>
        <BasicTopBar color="#9E9E9E" className="fixed pt-[1.2rem]">
          <SearchBar
            placeholder="공간, 큐레이션을 검색해보세요"
            className="rounded-[1000px]"
          />
        </BasicTopBar>
        {children}
      </Suspense>
    </div>
  );
}
