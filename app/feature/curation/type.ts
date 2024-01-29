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

export interface CurationPlaceProps {
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
