import Line from "@common/assets/icons/line/line.svg";

interface PlaceTypeAndAddressProps {
  size?: "normal" | "small";
  type: string;
  address: string;
}

//Molecule
export default function PlaceTypeAndAddress({
  size = "normal",
  type,
  address,
}: PlaceTypeAndAddressProps) {
  return (
    <div className="flex">
      <span className="body2-semibold text-text-gray-6">{type}</span>
      <Line className="mx-[0.8rem]" />
      <span className="body2-medium text-text-gray-5">{address}</span>
    </div>
  );
}
