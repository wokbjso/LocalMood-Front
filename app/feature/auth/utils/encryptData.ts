import { SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

export const encryptData = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2 weeks from now")
    .sign(key);
};
