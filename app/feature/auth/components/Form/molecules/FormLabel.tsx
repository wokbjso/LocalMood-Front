interface FormLabelProps {
  label?: string;
}

//Molecule
export default function FormLabel({ label }: FormLabelProps) {
  return <span className="text-text-gray-6 body2-semibold">{label}</span>;
}
