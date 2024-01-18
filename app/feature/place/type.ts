export interface PlaceInfoProps {
  id: number;
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped: boolean;
  tags?: { [key: string]: string[] };
  tagsCategoryNum?: number;
  onClick?: () => void;
  className?: string;
}
