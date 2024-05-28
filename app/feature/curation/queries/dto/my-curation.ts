import { CurationProps } from "@/feature/curation/type";

export interface MyCurationResponse {
  curationCount: number;
  curation: (CurationProps & {
    privacy: boolean;
    spaceIds: number[];
  })[];
}
