"use server";
import PostLogin from "../queries/postLogin";

export const loginAction = async (loginFormData: any) => {
  const res = await PostLogin(loginFormData);

  if (res.ok) {
    return { status: 200 };
  } else {
    return { status: 400 };
  }
};
