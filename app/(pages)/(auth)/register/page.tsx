"use client";

import FormInput from "@/feature/auth/components/Form/molecules/FormInput";
import Button from "@/common/components/ui/buttons/Button/Button";
import UseForm from "@/feature/auth/hooks/useForm";
import { LoginFormState, RegisterFormState } from "@/feature/auth/type";
import { useRouter } from "next/navigation";
import ArrowBackTopBar from "@/common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import useFetching from "@/common/hooks/useFetching";
import LoadingUI from "@/common/components/ui/loading/LoadingUI";
import PageDarkWrapper from "@/common/components/ui/wrapper/PageDarkWrapper";

//Page
export default function RegisterPage() {
  const router = useRouter();

  const { isFetching, changeFetching } = useFetching();

  const handleSubmit = async (e: LoginFormState | RegisterFormState) => {
    if ("nickname" in e) {
      changeFetching(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormData),
      });
      if (res.status === 200) {
        changeFetching(false);
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
    // Template
    <div className="w-[100%] h-[100%] px-[2rem]">
      <ArrowBackTopBar color="#9E9E9E" className="px-0 mb-[4.8rem]">
        <div className="w-full flex justify-start items-center text-black headline3">
          회원가입
        </div>
      </ArrowBackTopBar>
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
      {isFetching && (
        <>
          <PageDarkWrapper />
          <LoadingUI className="absolute top-0 left-0 z-20" />
        </>
      )}
    </div>
  );
}
