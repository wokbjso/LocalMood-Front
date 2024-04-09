export interface PlaceInfoCardTopProps {
  id: number;
  variant?: "main" | "record" | "mypage";
  direction?: "vertical" | "horizontal";
  size?: "normal" | "small";
  name: string;
  imgUrl: string;
  type: string;
  address: string;
  isScraped: boolean;
  isReviewed?: boolean;
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
