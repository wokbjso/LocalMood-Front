import Success from "@common/assets/images/register_success.svg";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";

export default function RegisterSuccess() {
  return (
    <div className="h-[100vh] pb-[9.4rem] flex flex-col justify-center items-center">
      <Success />
      <p className="text-black headline1 mt-[0.8rem]">가입이 완료되었습니다!</p>
      <LinkLayout routeUrl="/login" className="absolute bottom-[4.6rem]">
        <Button>로그인 하러 가기</Button>
      </LinkLayout>
    </div>
  );
}
