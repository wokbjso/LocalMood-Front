import ShareIcon from "@common/assets/icons/share/ShareIcon";
import Toast from "../toast/Toast";

interface ShareIconProps {
  toastInfo: {
    open: boolean;
    text: string;
  };
  onClick?: () => void;
}

export default function CopyLinkIcon({ toastInfo, onClick }: ShareIconProps) {
  return (
    <>
      <ShareIcon onClick={onClick} />
      <Toast open={toastInfo.open} text={toastInfo.text} />
    </>
  );
}
