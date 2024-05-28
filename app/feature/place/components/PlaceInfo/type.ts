import { PlaceProps } from "../../type";

export interface PlaceInfoCardTopProps extends Omit<PlaceProps, "keyword"> {
  isReviewed?: boolean;
  variant?: "main" | "record" | "mypage";
  direction?: "vertical" | "horizontal";
  size?: "normal" | "small";
}

export interface PlaceInfoCardBottomProps {
  keyword?: string[];
  purpose?: string[];
  interior?: string[];
  bestMenu?: string[];
  mood?: string[];
  visitorNum?: string;
  dish?: string;
  dishDesc?: string;
  optionalService?: string;
}

export interface PlaceInfoCardAdditionalProps {
  className?: string;
  imgClassName?: string;
  bottomClassName?: string;
  keywordCategoryNum?: number;
}
