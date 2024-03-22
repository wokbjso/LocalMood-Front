export interface CurationDetailResponse {
  title: string;
  id: number;
  keyword: string;
  privacy: boolean;
  isScraped: boolean;
  author: string;
  variant: string;
  createdDate: Date;
  spaceDetails: {
    id: number;
    name: string;
    type: string;
    address: string;
    imageUrls: string[];
    purpose: string;
    mood: string;
    interior: string;
    bestMenu: string;
    isScraped: boolean;
  }[];
}
