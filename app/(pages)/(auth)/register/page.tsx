"use client";

import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import FormInput from "@common/components/ui/input/FormInput/FormInput";
import Button from "@common/components/ui/buttons/Button/Button";
import UseForm from "@feature/auth/useForm";
import { LoginFormState, RegisterFormState } from "@feature/auth/type";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const handleSubmit = async (e: LoginFormState | RegisterFormState) => {
    if ("nickname" in e) {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormData),
      });
      if (res.status === 200) {
        router.push("/register/success");
      } else {
        alert("회원가입 과정 중 오류가 발생했습니다");
      }
    }
  };
  const { registerFormData, errorMessage, showError, handlers } = UseForm({
    type: "register",
    onSubmit: handleSubmit,
  });
  const getErrorMessage = (field: string) => {
    return showError ? errorMessage[field] : "";
  };
  const ableRegister =
    Object.keys(registerFormData).filter(
      (category) => registerFormData[category].length === 0
    ).length >= 1;

  return (
    <div className="relative h-[100vh] px-[2rem]">
      <BasicTopBar color="#9E9E9E" className="px-0 mb-[4.8rem]">
        <div className="w-full flex justify-start items-center text-black headline3">
          회원가입
        </div>
      </BasicTopBar>
      <form onSubmit={handlers.submit}>
        <FormInput
          label="아이디 (이메일)"
          errorMsg={getErrorMessage("email")}
          onChange={handlers.changeEmail}
          className="mb-[3.2rem]"
        />
        <FormInput
          type="password"
          label="비밀번호 (8~16자)"
          errorMsg={getErrorMessage("password")}
          onChange={handlers.changePassword}
          className="mb-[3.2rem]"
        />
        <FormInput
          label="닉네임"
          errorMsg={getErrorMessage("nickname")}
          onChange={handlers.changeNickname}
        />
        <div className="absolute flex w-full px-[2rem] bottom-[4rem] left-0">
          <Button disabled={ableRegister} className="w-full">
            가입하기
          </Button>
        </div>
      </form>
    </div>
  );
}
