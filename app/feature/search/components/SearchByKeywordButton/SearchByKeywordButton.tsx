import Button, {
  ButtonProps,
} from "@common/components/ui/buttons/Button/Button";
import Link from "next/link";

export default function SearchByKeywordButton({
  onClick,
  className,
}: Omit<ButtonProps, "children">) {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { keyword_search: true },
      }}
    >
      <Button onClick={onClick} className={className}>
        키워드로 공간 찾기
      </Button>
    </Link>
  );
}
