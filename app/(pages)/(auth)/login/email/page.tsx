"use client";

import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import Logo from "@common/assets/images/localmood_logo.svg";
import FormInput from "@common/components/ui/input/FormInput/FormInput";
import Button from "@common/components/ui/buttons/Button/Button";
import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import Link from "next/link";
import UseForm from "@feature/auth/useForm";
import { LoginFormState } from "@feature/auth/type";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";

export default function Login() {
  const handleSubmit = async (e: LoginFormState) => {
    const res = await fetch("/api/auth/login/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });
    if (res.status === 200) {
      location.replace("/");
    } else {
      alert("로그인 정보가 올바르지 않습니다.");
    }
  };
  const { loginFormData, errorMessage, showError, handlers } = UseForm({
    type: "login",
    onSubmit: handleSubmit,
  });
  const getErrorMessage = (field: string) => {
    return showError ? errorMessage[field] : "";
  };
  const ableRegister =
    Object.keys(loginFormData).filter(
      (category) => loginFormData[category].length === 0
    ).length >= 1;

  return (
    <main className="w-[100%] h-[100%] px-[2rem]">
      <BasicTopBar color="#9E9E9E" className="px-0" />
      <div className="flex justify-center mb-[7.5rem]">
        <Logo />
      </div>
      <form onSubmit={handlers.submit}>
        <FormInput
          label="아이디 (이메일)"
          errorMsg={getErrorMessage("email")}
          className="mb-[3.2rem]"
          onChange={handlers.changeEmail}
        />
        <FormInput
          type="password"
          label="비밀번호 (8자 이상)"
          errorMsg={getErrorMessage("password")}
          className="mb-[2rem]"
          onChange={handlers.changePassword}
        />
        <Button disabled={ableRegister} className="w-full">
          로그인하기
        </Button>
      </form>
      <div className="absolute flex flex-col items-center w-full bottom-[4rem] left-0">
        <Link
          href={{
            pathname: "/register",
          }}
        >
          <Button variant="line">회원가입 하기</Button>
        </Link>
        <Link
          href={{ pathname: "/" }}
          className="flex justify-center mt-[2rem]"
        >
          <span className="text-text-gray-6 body2-semibold pb-[0.4rem] border-b-[1px] border-b-text-gray-6">
            로그인없이 둘러보기
          </span>
        </Link>
      </div>
    </main>
  );
}