export interface CurationProps {
  id: number;
  variant?: "others" | "my";
  image?: string[] | string;
  author: string;
  title: string;
  keyword: string[];
  privacy?: boolean;
  spaceCount?: number;
  isScraped?: boolean;
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
