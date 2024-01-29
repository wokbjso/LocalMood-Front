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
  keywordCategoryNum?: number;
  onClick?: () => void;
  className?: string;
  imgClassName?: string;
  bottomClassName?: string;
}
