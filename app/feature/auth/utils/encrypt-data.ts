import { JWTPayload, SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

export const encryptData = async (payload: JWTPayload) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 week from now")
    .sign(key);
};
