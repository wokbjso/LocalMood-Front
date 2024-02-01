export type SearchCurationResponse = {
  CurationCount: number;
  CurationList: {
    id: number;
    author: string;
    imgUrl: string[];
    title: string;
    spaceCount: number;
    keyword: string[];
    isScraped: boolean;
  }[];
};

export type SearchPlaceResponse = {
  spaceCount: number;
  spaceList: {
    id: number;
    name: string;
    type: string;
    address: string;
    purpose: string[];
    keyword: string[];
    imgUrl: string;
    isScraped: boolean;
  }[];
};
