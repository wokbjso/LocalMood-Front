export interface CurationDetailResponse {
  title: string;
  keyword: string;
  privacy: boolean;
  author: string;
  variant: string;
  createdData: Date;
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
