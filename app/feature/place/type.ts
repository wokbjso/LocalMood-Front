export interface PlaceInfoTopProps {
  id: number;
  variant?: "main" | "search" | "record";
  direction?: "vertical" | "horizontal";
  size?: "normal" | "small";
  name: string;
  imgUrl: string;
  type: string;
  address: string;
  isScraped: boolean;
}

export interface PlaceInfoBottomProps {
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

export interface PlaceInfoAdditionalProps {
  className?: string;
  imgClassName?: string;
  bottomClassName?: string;
  keywordCategoryNum?: number;
}
