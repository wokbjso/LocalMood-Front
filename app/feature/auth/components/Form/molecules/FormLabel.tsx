import Label from "@/common/components/ui/text/Label";

interface FormLabelProps {
  label?: string;
}

//Molecule
export default function FormLabel({ label }: FormLabelProps) {
  return <Label className="text-text-gray-6 body2-semibold">{label}</Label>;
}
