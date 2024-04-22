interface MyCurationCountProps {
  count: number;
}

//Molecule
export default function MyCurationCount({ count }: MyCurationCountProps) {
  return (
    <div className="flex body1 text-text-gray-8 items-center">
      총 <p className="text-black">&nbsp;{count}</p>개
    </div>
  );
}
