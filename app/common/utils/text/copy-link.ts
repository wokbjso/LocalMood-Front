export const copyLink = async (
  text: string,
  handleModalFn?: (state: boolean) => void
) => {
  const clientURL = "https://www.localmood.co.kr";
  await navigator.clipboard.writeText(clientURL + text);
  handleModalFn && handleModalFn(false);
};
