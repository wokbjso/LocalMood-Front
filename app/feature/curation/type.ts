export interface CurationProps {
  id: number;
  variant?: "others" | "my";
  image?: string[];
  author: string;
  title: string;
  keyword: string[];
  spaceCount?: number;
  scrapped?: boolean;
  className?: string;
}
