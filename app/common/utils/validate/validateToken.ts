import { getSession } from "../session/getSession";

export const validateToken = async () => {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;

  return token ? token : null;
};
