export type SearchCurationResponse = {
  CurationCount: number;
  CurationList: {
    id: number;
    author: string;
    image: string[];
    title: string;
    spaceCount: number;
    keyword: string[];
    isScraped: boolean;
  }[];
}[];

export type SearchPlaceResponse = {
  id: number;
  name: string;
  type: string;
  address: string;
  purpose: string[];
  keyword: string[];
  imgUrl: string;
  isScraped: boolean;
}[];
