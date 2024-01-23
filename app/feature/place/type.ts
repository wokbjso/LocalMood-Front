export interface PlaceInfoProps {
  id: number;
  variant?: "vertical" | "horizontal";
  size?: "normal" | "small";
  placeName: string;
  placeImg: string[];
  category: string;
  location: string;
  scrapped: boolean;
  tags?: { [key: string]: string[] };
  tagsCategoryNum?: number;
  onClick?: () => void;
  className?: string;
  imgClassName?: string;
  bottomClassName?: string;
}
