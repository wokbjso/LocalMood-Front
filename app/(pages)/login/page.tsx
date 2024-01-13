import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import Logo from "@common/assets/images/localmood_logo.svg";
import FormInput from "@common/components/ui/input/FormInput/FormInput";
import Button from "@common/components/ui/buttons/Button/Button";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";

export default function Login() {
  return (
    <div className="px-[2rem] pb-[9.6rem]">
      <BasicTopBar color="#9E9E9E" className="px-0" />
      <div className="flex justify-center mb-[7.5rem]">
        <Logo />
      </div>
      <form>
        <FormInput label="아이디 (이메일)" className="mb-[3.2rem]" />
        <FormInput
          type="password"
          label="비밀번호 (8자 이상)"
          className="mb-[2rem]"
        />
        <Button disabled>로그인하기</Button>
      </form>
      <div className="flex justify-center items-center mt-[2rem] mb-[16.1rem]">
        <span className="mr-[0.4rem] text-text-gray-8 body2-semibold">
          비밀번호 찾기
        </span>
        <ArrowRight />
      </div>
      <Button variant="line">회원가입 하기</Button>
      <div className="flex justify-center mt-[2rem]">
        <span className="text-text-gray-6 body2-semibold pb-[0.4rem] border border-b-text-gray-6">
          로그인없이 둘러보기
        </span>
      </div>
    </div>
  );
}
