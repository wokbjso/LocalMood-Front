export interface CurationProps {
  id: number;
  curationPhoto?: string[];
  variant?: string;
  userImg: string;
  userName: string;
  mainText: string;
  hashTags: string[];
  scrapped?: boolean;
  onClick?: () => void;
  className?: string;
  places: number;
}

export interface CurationDetailCardProps {
  id: number;
  placeName: string;
  placePhoto?: string[] | undefined;
  placeType: string;
  placeLocation: string;
  placeFor: string[];
  placeInterior?: string[] | undefined;
  placeMenu?: string[] | undefined;
  placeMood: string[];
  hashTags: string[];
  scrapped?: boolean;
  onClick?: () => void;
}
