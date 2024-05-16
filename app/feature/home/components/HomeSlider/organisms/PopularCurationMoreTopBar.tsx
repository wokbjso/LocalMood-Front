import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import TextWithRightArrow from "@/common/components/ui/text/TextWithRightArrow";
import Title from "@/common/components/ui/text/Title";

interface PopularCurationMoreTopBarProps {
  title: string;
}

//Molecule
export default function PopularCurationMoreTopBar({
  title,
}: PopularCurationMoreTopBarProps) {
  return (
    <div className="flex justify-between items-center mb-[1.6rem] px-[2rem]">
      <Title title={title} className="headline2" />
      <LinkLayout routeUrl="/curation/popular">
        <TextWithRightArrow text="더보기" />
      </LinkLayout>
    </div>
  );
}
