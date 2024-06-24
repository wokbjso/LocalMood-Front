interface FormErrorMsgProps {
  testId?: string;
  errorMsg?: string;
}

//Molecule
export default function FormErrorMsg({ testId, errorMsg }: FormErrorMsgProps) {
  return (
    errorMsg && (
      <p data-testid={testId} className="body3-semibold text-error mt-[0.8rem]">
        {errorMsg}
      </p>
    )
  );
}
