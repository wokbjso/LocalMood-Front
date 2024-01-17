import Button from "@common/components/ui/buttons/Button/Button";

export default function BottomAppBar() {
  return (
    <div className="bg-white flex w-full h-[9.4rem] px-[2rem] pb-[4.6rem] flex-col items-center shrink-0">
      <Button variant="fill" className="w-full">
        건너뛰기
      </Button>
    </div>
  );
}
