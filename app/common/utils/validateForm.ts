import { LoginFormState, RegisterFormState } from "@feature/auth/type";

export function validateForm(
  formData: LoginFormState | RegisterFormState
): [Record<string, string>] {
  const errorMessage: Record<string, string> = {};

  if (!formData.email.trim()) {
    errorMessage.email = "이메일을 입력해주세요.";
  }

  if (!formData.password.trim()) {
    errorMessage.password = "비밀번호를 입력해주세요.";
  }

  if ("nickname" in formData && !formData.nickname?.trim()) {
    errorMessage.userid = "닉네임을 입력해주세요.";
  }

  return [errorMessage];
}
