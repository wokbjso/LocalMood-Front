import { CurationProps } from "@/feature/curation/type";
import { PlaceProps } from "../../type";

interface RelatedCurationProps
  extends Omit<CurationProps, "image" | "privacy"> {
  imgUrl: string[];
}

export interface PlaceDetailInfoProps {
  optionalService: string | undefined;
  visitorNum: string | undefined;
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
  positiveEval: Array<Array<string[]>> | null;
  negativeEval: Array<Array<string[]>> | null;
  isScraped: boolean;
}

export interface PlaceDetailResponse {
  info: PlaceDetailInfoProps;
}

export interface PlaceRelatedInfoResponse {
  similarSpaceList: Omit<PlaceProps, "keyword">[];
  relatedCurationList: RelatedCurationProps[];
}
