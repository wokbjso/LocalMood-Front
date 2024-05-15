export interface PlaceRecordProps {
  image: string[];
  name: string;
  type: string;
  address: string;
  author: string;
  createdAt: string;
  interior: string;
  mood: string;
  music: string;
  positiveEval: string | null;
  negativeEval: string | null;
  isScraped: boolean;
}

export interface PlaceRecordResponse {
  purposeEval: { [key: string]: number };
  reviewCount: number;
  reviews: { [key: string]: PlaceRecordProps[] };
}
