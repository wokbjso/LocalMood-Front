import Text from "@/common/components/ui/text/Text";

interface FormErrorMsgProps {
  errorMsg?: string;
}

//Molecule
export default function FormErrorMsg({ errorMsg }: FormErrorMsgProps) {
  return (
    errorMsg && (
      <Text className="body3-semibold text-error mt-[0.8rem]">{errorMsg}</Text>
    )
  );
}
