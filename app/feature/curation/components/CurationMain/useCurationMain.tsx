import { useState } from "react";

export default function UseCurationMain(isScraped: boolean) {
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleScrapState = async (id: number) => {
    setScrapState((prev) => !prev);
    if (scrapState) {
      const res = await fetch(`/api/curation/delete/${String(id)}`);
    } else {
      const res = await fetch(`/api/curation/add/${String(id)}`);
    }
    //api 문서에 맞게 id이용하여 해당 큐레이션 scrap 상태 바꾸는 api 호출(client side - tanstack query)
  };

  const handleMenuModalState = (state: boolean) => {
    setIsMenuOpened(state);
  };

  return {
    scrapState,
    isMenuOpened,
    handlers: {
      changeScrapState: handleScrapState,
      changeMenuModalState: handleMenuModalState,
    },
  };
}
