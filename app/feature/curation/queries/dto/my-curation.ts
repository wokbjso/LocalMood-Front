export interface MyCurationResponse {
  curationCount: number;
  curation: {
    image: string[];
    author: string;
    id: number;
    isScrapped: boolean;
    keyword: string[];
    spaceCount: number;
    title: string;
  }[];
}
