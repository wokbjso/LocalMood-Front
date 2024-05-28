export interface CurationProps {
  id: number;
  title: string;
  author: string;
  keyword: string[];
  spaceCount?: number;
  image?: string[] | string;
  isScraped?: boolean;
  variant?: "others" | "my";
  privacy?: boolean;
}

export interface CurationPlaceProps {
  id: number;
  name: string;
  type: string;
  address: string;
  imageUrls?: string[];
  purpose: string;
  mood: string;
  interior: string;
  bestMenu: string;
  isScraped: boolean;
}
