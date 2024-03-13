import { CurationProps } from "@feature/curation/type";
import {
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";

export type SearchCurationResponse = {
  CurationCount: number;
  CurationList: Omit<CurationProps, "variant">[];
};

export type SearchPlaceResponse = {
  spaceCount: number;
  spaceList: (Omit<PlaceInfoCardTopProps, "variant" | "direction" | "size"> &
    Pick<PlaceInfoCardBottomProps, "keyword" | "purpose">)[];
};
