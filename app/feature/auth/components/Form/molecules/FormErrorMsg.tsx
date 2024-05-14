interface FormErrorMsgProps {
  errorMsg?: string;
}

//Molecule
export default function FormErrorMsg({ errorMsg }: FormErrorMsgProps) {
  return (
    errorMsg && (
      <span className="body3-semibold text-error mt-[0.8rem]">{errorMsg}</span>
    )
  );
}
