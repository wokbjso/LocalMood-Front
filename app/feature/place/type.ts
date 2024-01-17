export interface PlaceInfoProps {
  id: number;
  variant?: "home" | "home_search" | "curation" | "scrapped" | "record_search";
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped: boolean;
  tags?: { [key: string]: string[] };
  onClick?: () => void;
  className?: string;
}
