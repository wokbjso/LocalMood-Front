import DeleteCurationScrap from "@feature/curation/queries/deleteCurationScrap";
import PostCurationScrap from "@feature/curation/queries/postCurationScrap";
import revalidateCurationRandom from "@feature/curation/actions/revalidateCurationRandom";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import { useEffect, useState } from "react";

export default function UseCurationMain(isScraped: boolean) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [openScrapToast, setOpenScrapToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const handleScrapState = async (id: number) => {
    if (isScraped) {
      const res = await DeleteCurationScrap(id);
      if (res.status === 200) {
        setOpenScrapToast(true);
        setToastText("큐레이션 스크랩이 해제되었습니다");
        revalidateCurationRandom();
        revalidateCurationScrap();
      } else {
        alert("에러가 발생했습니다!");
        return;
      }
    } else {
      const res = await PostCurationScrap(id);
      if (res.status === 200) {
        setOpenScrapToast(true);
        setToastText("큐레이션이 스크랩 되었습니다");
        revalidateCurationRandom();
        revalidateCurationScrap();
      } else {
        alert("에러가 발생했습니다!");
        return;
      }
    }
    //api 문서에 맞게 id이용하여 해당 큐레이션 scrap 상태 바꾸는 api 호출(client side - tanstack query)
  };

  const handleMenuModalState = (state: boolean) => {
    setIsMenuOpened(state);
  };

  const handleToastClose = () => {
    setOpenScrapToast(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (openScrapToast) {
      timeoutId = setTimeout(() => {
        setOpenScrapToast(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [openScrapToast]);

  return {
    isMenuOpened,
    openScrapToast,
    toastText,
    handlers: {
      changeScrapState: handleScrapState,
      changeMenuModalState: handleMenuModalState,
      activateToastClose: handleToastClose,
    },
  };
}
