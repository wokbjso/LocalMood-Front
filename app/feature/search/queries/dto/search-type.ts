import { CurationProps } from "@/feature/curation/type";
import {
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@/feature/place/components/PlaceInfo/type";

export type SearchCurationResponse = {
  CurationCount: number;
  CurationList: CurationProps[];
};

export type SearchPlaceResponse = {
  spaceCount: number;
  spaceList: (Omit<PlaceInfoCardTopProps, "variant" | "direction" | "size"> &
    Pick<PlaceInfoCardBottomProps, "keyword" | "purpose">)[];
};
