export type TextSearchResponse = {
  id: number;
  name: string;
  type: string;
  address: string;
  purpose: string;
  interior: string;
  imgUrl: string;
  isScraped: boolean;
}[];

export type KeywordSearchResponse = {
  id: number;
  name: string;
  type: string;
  address: string;
  purpose: string[];
  keyword: string[];
  imgUrl: string;
  isScraped: boolean;
}[];
