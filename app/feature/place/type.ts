export interface PlaceInfoProps {
  id: number;
  variant?: "main" | "record";
  direction?: "vertical" | "horizontal";
  size?: "normal" | "small";
  name: string;
  imgUrl: string;
  type: string;
  address: string;
  isScraped: boolean;
  keyword?: string[];
  purpose?: string[];
  interior?: string[];
  bestMenu?: string[];
  mood?: string[];
  keywordCategoryNum?: number;
  onClick?: () => void;
  className?: string;
  imgClassName?: string;
  bottomClassName?: string;
  visitorNum?: string;
  dish?: string;
  dishDesc?: string;
  optionalService?: string;
}
