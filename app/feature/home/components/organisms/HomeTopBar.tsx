import HeaderTextIcon from "@common/assets/icons/header/HeaderTextIcon";
import SearchIcon from "@common/assets/icons/search/SearchIcon";
import Button from "@common/components/ui/buttons/Button/Button";
import Link from "next/link";

interface HomeHeaderProps {
  showBtn: boolean;
}

//Organism
export default function HomeTopBar({ showBtn }: HomeHeaderProps) {
  return (
    <header className="fixed flex justify-between items-center px-[2rem] pt-[1.6rem] pb-[1rem] w-full z-10 bg-[#F5F8FF]">
      <div className="py-[0.7rem]">
        <HeaderTextIcon />
      </div>
      <div className="flex items-center">
        {showBtn && (
          <Link
            href={{
              pathname: "/search",
              query: { keyword_search: true },
            }}
          >
            <Button className="w-[12.5rem] h-full py-[0.6rem] mr-[1.2rem] body2-semibold">
              키워드로 공간 찾기
            </Button>
          </Link>
        )}
        <Link
          href={{
            pathname: "/search",
            query: { keyword_search: false },
          }}
        >
          <SearchIcon />
        </Link>
      </div>
    </header>
  );
}
