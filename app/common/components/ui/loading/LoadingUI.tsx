import { BeatLoader } from "react-spinners";

export default function LoadingUI() {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
