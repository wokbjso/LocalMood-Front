import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import FormInput from "@common/components/ui/input/FormInput/FormInput";
import Button from "@common/components/ui/buttons/Button/Button";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";

export default function Register() {
  return (
    <div className="px-[2rem] pb-[9.6rem]">
      <BasicTopBar color="#9E9E9E" className="px-0 mb-[4.8rem]">
        <div className="w-full flex justify-start items-center text-black headline3">
          회원가입
        </div>
      </BasicTopBar>
      <form>
        <FormInput label="아이디 (이메일)" className="mb-[3.2rem]" />
        <FormInput
          type="password"
          label="비밀번호 (8자 이상)"
          className="mb-[3.2rem]"
        />
        <FormInput label="닉네임" className="mb-[16.1rem]" />
        <Button disabled>가입하기</Button>
      </form>
    </div>
  );
}
