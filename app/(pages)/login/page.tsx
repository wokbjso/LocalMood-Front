import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import Logo from "@common/assets/images/localmood_logo.svg";

export default function Login() {
  return (
    <>
      <BasicTopBar color="#9E9E9E" />
      <div className="flex justify-center">
        <Logo />
      </div>
    </>
  );
}
