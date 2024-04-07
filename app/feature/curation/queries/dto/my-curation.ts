import { CurationProps } from "@feature/curation/type";

export interface MyCurationResponse {
  curationCount: number;
  curation: (Omit<CurationProps, "variant"> & {
    privacy: boolean;
    spaceIds: number[];
  })[];
}
