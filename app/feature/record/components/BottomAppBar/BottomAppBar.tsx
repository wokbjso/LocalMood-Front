import Button from "@common/components/ui/buttons/Button/Button";
import { useRouter, usePathname } from "next/navigation";

export default function BottomAppBar({
  hasFiltersSelected,
  type,
  category,
}: {
  hasFiltersSelected?: boolean;
  type?: string;
  category?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isComplete = pathname.endsWith("/complete");
  const handleButtonClick = () => {
    if (type === "keyword" || hasFiltersSelected) {
      router.push(`/record/select/evaluate?&category=${category}`);
    } else if (type === "evaluate") {
      router.push("/record/select/photo");
    } else if (type === "photo") {
      router.push("/record/select/complete");
    } else if (isComplete) {
      router.push("/record");
    } else {
    }
  };

  return (
    <div>
      <div className="bg-white flex w-full h-[9.4rem] px-[2rem] pb-[4.6rem] flex-col items-center shrink-0">
        <Button variant="fill" className="w-full" onClick={handleButtonClick}>
          {hasFiltersSelected ? "다음" : isComplete ? "완료" : "건너뛰기"}
        </Button>
      </div>
    </div>
  );
}
