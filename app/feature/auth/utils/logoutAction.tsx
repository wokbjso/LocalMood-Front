"use server";

import { PostLogout } from "../queries/postLogout";

export const logoutAction = async () => {
  const res = await PostLogout();
  console.log(res);

  if (res.ok) {
    return { status: 200 };
  } else {
    return { status: 400 };
  }
};
