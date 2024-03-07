"use server";

import { cookies } from "next/headers";

export const getSession = async () => {
  const cookieStore = cookies();
  const stored = cookieStore.get("user_info");
  if (!stored) {
    return null;
  }
  const userInfo: {
    accessToken: string;
    refreshToken: string;
    expTime: number;
  } = JSON.parse(stored.value);
  // if (userInfo.expTime < new Date().getTime()) {
  //   cookieStore.delete("user_info");
  //   return null;
  // }
  return userInfo;
};
