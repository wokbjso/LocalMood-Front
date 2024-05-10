import { FormEvent, useState } from "react";
import { LoginFormState, RegisterFormState } from "../type";
import { validateForm } from "@/common/utils/validate/validateForm";

const FIELD = ["email", "password", "nickname"];

export default function UseForm({
  type,
  onSubmit,
}: {
  type: string;
  onSubmit: (e: LoginFormState | RegisterFormState) => void;
}) {
  const [showError, setShowError] = useState(false);
  const [loginFormData, setLoginFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState<RegisterFormState>({
    email: "",
    password: "",
    nickname: "",
  });
  const [errorMessage] = validateForm(
    type === "login" ? loginFormData : registerFormData
  );
  const handleEmailChange = (text: string) => {
    if (type === "login") setLoginFormData({ ...loginFormData, email: text });
    else if (type === "register")
      setRegisterFormData({ ...registerFormData, email: text });
    else return;
  };

  const handlePasswordChange = (text: string) => {
    if (type === "login")
      setLoginFormData({ ...loginFormData, password: text });
    else if (type === "register")
      setRegisterFormData({ ...registerFormData, password: text });
    else return;
  };

  const handleNicknameChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, nickname: text });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(true);
    if (!hasAnyError()) {
      type === "login" ? onSubmit(loginFormData) : onSubmit(registerFormData);
    } else {
      for (const field of FIELD) {
        if (errorMessage[field]) {
          break;
        }
      }
    }
  };

  const hasAnyError = () => {
    let hasError = false;
    Object.values(errorMessage).forEach((value) => {
      if (value) {
        hasError = true;
      }
    });
    return hasError;
  };

  return {
    loginFormData,
    errorMessage,
    showError,
    registerFormData,
    handlers: {
      changeEmail: handleEmailChange,
      changePassword: handlePasswordChange,
      changeNickname: handleNicknameChange,
      submit: handleSubmit,
    },
  };
}
