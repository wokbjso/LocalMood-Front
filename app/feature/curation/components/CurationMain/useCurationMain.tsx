import { useState } from "react";

export default function UseCurationMain(scrapped: boolean) {
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleScrapState = async (id: number) => {
    setIsScrapped((prev) => !prev);
    if (isScrapped) {
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
    isScrapped,
    isMenuOpened,
    handlers: {
      changeScrapState: handleScrapState,
      changeMenuModalState: handleMenuModalState,
    },
  };
}
