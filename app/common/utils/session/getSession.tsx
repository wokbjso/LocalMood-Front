"use server";

import { decryptData } from "@/feature/auth/utils/decryptData";
import { JWTPayload } from "jose";
import { cookies } from "next/headers";

export interface CustomJWTPayload extends JWTPayload {
  data?: {
    accessToken: string;
    refreshToken: string;
  };
}

export const getSession = async (): Promise<CustomJWTPayload | null> => {
  const encryptedSession = cookies().get("auth_session")?.value;
  return encryptedSession ? await decryptData(encryptedSession) : null;
};
