import { LoginFormState, RegisterFormState } from "@feature/auth/type";

export function validateForm(
  formData: LoginFormState | RegisterFormState
): [Record<string, string>] {
  console.log(formData);
  const errorMessage: Record<string, string> = {};
  const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePattern = (password: string) => {
    const pattern = /(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])/;
    return pattern.test(password);
  };
  if (!formData.email.trim()) {
    errorMessage.email = "이메일을 입력해주세요.";
  } else if (!validateEmail(formData.email)) {
    errorMessage.email = "이메일 형식이 올바르지 않습니다.";
  }

  if (!formData.password.trim()) {
    errorMessage.password = "비밀번호를 입력해주세요.";
  } else if (formData.password.length < 8 || formData.password.length > 16) {
    errorMessage.password = "비밀번호는 8~16 자리수여야 합니다.";
  } else if (!validatePattern(formData.password)) {
    errorMessage.password =
      "영문 대소문자, 숫자, 특수문자를 1개 이상 포함해야 합니다.";
  }

  if ("nickname" in formData && !formData.nickname?.trim()) {
    errorMessage.nickname = "닉네임을 입력해주세요.";
  }

  return [errorMessage];
}
