export interface CurationProps {
  id: number;
  variant?: "others" | "my";
  imgUrl?: string[];
  author: string;
  title: string;
  keyword: string[];
  spaceCount?: number;
  isScraped?: boolean;
  className?: string;
}
