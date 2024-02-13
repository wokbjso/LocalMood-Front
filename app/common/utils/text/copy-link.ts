export const copyLink = async (
  text: string,
  handleModalFn?: (state: boolean) => void
) => {
  await navigator.clipboard.writeText(text);
  handleModalFn && handleModalFn(false);
  alert("링크가 복사되었어요.");
};
