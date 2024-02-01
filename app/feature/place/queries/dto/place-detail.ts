interface SimilarPlaceProps {
  id: number;
  name: string;
  type: string;
  address: string;
  imgUrl: string;
  isScraped: boolean;
}

interface RelatedCurationProps {
  id: number;
  title: string;
  author: string;
  keyword: string[];
  spaceCount: number;
  imgUrl: string[];
  isScraped: boolean;
}

export interface PlaceDetailResponse {
  similarSpaceList: SimilarPlaceProps[];
  relatedCurationList: RelatedCurationProps[];
  info: {
    id: number;
    name: string;
    imgUrlList: string[];
    address: string;
    type: string;
    subType: string;
    dish: string;
    dishDesc: string;
    purpose: string[];
    interior?: string[];
    mood: string;
    music: string;
    positiveEval: any[] | null;
    negativeEval: any[] | null;
    isScraped: boolean;
  };
}
