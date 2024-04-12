import MoreButton from "../../buttons/Button/MoreButton";

interface MoreTopBarProps {
  title: string;
}

//Molecule
export default function MoreTopBar({ title }: MoreTopBarProps) {
  return (
    <div className="flex justify-between mb-[1.6rem] px-[2rem]">
      <span className="headline2 text-black">{title}</span>
      <div className="flex items-center headline2 text-black">
        <MoreButton routeTo="/curation/popular" showArrow={true} />
      </div>
    </div>
  );
}
