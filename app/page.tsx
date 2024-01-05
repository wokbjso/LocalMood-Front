import HeaderText from "@common/assets/icons/header/header.svg";
import SearchIcon from "@common/assets/icons/search/search.svg";
import Heart from "@common/assets/icons/heart/Heart";
import Music from "@common/assets/icons/music/Music";
import Chip from "@common/ui/buttons/Chip/Chip";
import Button from "@common/ui/buttons/Button/Button";

export default function Home() {
  const HEADER_KEYWORD = [
    { icon: Heart, text: "연인과의 데이트" },
    { icon: Music, text: "잔잔한 음악" },
    { icon: Music, text: "따뜻한 조명" },
    { icon: Music, text: "와인 한잔" },
  ];
  return (
    <>
      <header className="pt-[1.6rem] pb-[2rem] mb-[5rem]">
        <div className="flex justify-between px-[2rem] pb-[1rem] mb-[0.2rem]">
          <HeaderText />
          <SearchIcon />
        </div>
        <p className="header-light mb-[2.4rem] px-[2rem]">
          나에게 딱 맞는 공간을
          <br />
          <span className="header-main"> 키워드</span>로 찾아보세요
        </p>
        <div className="flex w-full overflow-x-scroll mb-[2rem]">
          {HEADER_KEYWORD.map((keyword) => (
            <Chip
              key={keyword.text}
              className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]"
            >
              {<keyword.icon />}
              <span className="pl-[0.4rem]">{keyword.text}</span>
            </Chip>
          ))}
        </div>
        <div className="flex justify-center">
          <Button>키워드로 공간 찾기</Button>
        </div>
      </header>
      <div className="pl-[2rem]">
        <section>
          <div>
            <span className="text-primary-normal headline2"># </span>
            <span className="text-black headline2">연인과의 데이트</span>
            <span className="text-text-gray-6 body1"> 를 위한 공간</span>
          </div>
        </section>
        <section>
          <div>
            <span className="text-primary-normal headline2"># </span>
            <span className="text-black headline2">친구와의 만남</span>
            <span className="text-text-gray-6 body1"> 을 위한 공간</span>
          </div>
        </section>
        <section>
          <div>
            <span className="headline2 text-black">마포구 인기 큐레이션 </span>
          </div>
        </section>
        <section>
          <div>
            <span className="text-primary-normal headline2"># </span>
            <span className="text-black headline2">왁자지껄 떠들기 좋은</span>
            <span className="text-text-gray-6 body1"> 공간</span>
          </div>
        </section>
      </div>
    </>
  );
}
