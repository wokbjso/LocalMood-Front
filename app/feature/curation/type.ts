export interface CurationProps {
  id: number;
  variant?: "others" | "my";
  image?: string[] | undefined;
  imgUrl?: string[] | string;
  author: string;
  title: string;
  keyword: string[];
  spaceCount?: number;
  isScraped?: boolean;
  className?: string;
}

export interface CurationPlaceProps {
  id: number;
  name: string;
  type: string;
  address: string;
  imageUrls?: string[] | undefined;
  purpose: string;
  mood: string;
  interior: string;
  bestMenu: string;
  scrapped: boolean;
}
