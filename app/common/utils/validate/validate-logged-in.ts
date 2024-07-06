"use server";

import { cookies } from "next/headers";

export const validateLoggedIn = async () => {
  const sessionData = cookies().get("auth_session")?.value;

  return sessionData !== undefined;
};
