import { useState } from "react";

export default function UseCurationMain(scrapped: boolean) {
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleScrapState = (id: number) => {
    setIsScrapped((prev) => !prev);
    //api 문서에 맞게 id이용하여 해당 큐레이션 scrap 상태 바꾸는 api 호출(client side - tanstack query)
  };

  const handleMenuModalState = (state: boolean) => {
    setIsMenuOpened(state);
  };

  return {
    isScrapped,
    isMenuOpened,
    handlers: {
      changeScrapState: handleScrapState,
      changeMenuModalState: handleMenuModalState,
    },
  };
}
