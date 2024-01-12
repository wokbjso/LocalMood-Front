import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BasicTopBar color="#9E9E9E" className="fixed pt-[1.2rem]">
        <SearchBar placeholder="공간, 큐레이션을 검색해보세요" />
      </BasicTopBar>
      {children}
    </div>
  );
}
