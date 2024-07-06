import { jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

export const decryptData = async (encoded_data: string) => {
  const { payload } = await jwtVerify(encoded_data, key, {
    algorithms: ["HS256"],
  });
  return payload;
};
