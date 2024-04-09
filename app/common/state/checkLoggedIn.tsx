import { getSession } from "@common/utils/session/getSession";
import PostCheckLoggedIn from "@feature/auth/queries/PostCheckLoggedIn";
import { selector } from "recoil";

export const checkLoggedInSelector = selector<boolean | null>({
  key: "checkLoggedInSelector",
  get: async () => {
    const sessionInfo = await PostCheckLoggedIn();
    return sessionInfo ? true : false;
  },
});
