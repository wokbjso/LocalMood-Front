export const copyLink = async (
  text: string,
  handleModalFn: (state: boolean) => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    handleModalFn(false);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};
