import SuccessImage from "@/common/assets/images/register_success.svg";
import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import Button from "@/common/components/ui/buttons/Button/Button";

//Page
export default function RegisterSuccessPage() {
  return (
    // Template
    <div className="w-[100%] h-[100%] pb-[9.4rem] flex flex-col justify-center items-center">
      <SuccessImage />
      <p className="text-black headline1 mt-[0.8rem]">가입이 완료되었습니다!</p>
      <LinkLayout routeUrl="/login/email" className="absolute bottom-[4.6rem]">
        <Button>로그인 하러 가기</Button>
      </LinkLayout>
    </div>
  );
}
