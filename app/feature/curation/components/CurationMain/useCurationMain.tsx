import DeleteCurationScrap from "@feature/curation/queries/deleteCurationScrap";
import PostCurationScrap from "@feature/curation/queries/postCurationScrap";
import revalidateCurationScrap from "@feature/curation/utils/revalidateCurationScrap";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UseCurationMain(isScraped: boolean) {
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const router = useRouter();
  const handleScrapState = async (id: number) => {
    setScrapState((prev) => !prev);
    if (scrapState) {
      const res = await DeleteCurationScrap(id);
      if (res.status === 200) {
        revalidateCurationScrap();
        location.reload();
      } else {
        alert("에러가 발생했습니다!");
        return;
      }
    } else {
      const res = await PostCurationScrap(id);
      if (res.status === 200) {
        revalidateCurationScrap();
        router.push("/curation");
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

  return {
    scrapState,
    isMenuOpened,
    handlers: {
      changeScrapState: handleScrapState,
      changeMenuModalState: handleMenuModalState,
    },
  };
}
