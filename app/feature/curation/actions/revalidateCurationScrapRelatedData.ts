"use server";

import revalidateCurationRandom from "./revalidateCurationRandom";
import revalidateTextSearchCurationData from "@feature/search/actions/revalidateTextSearchCurationData";
import revalidateKeywordSearchCurationData from "@feature/search/actions/revalidateKeywordSearchCurationData";
import revalidateCurationScrap from "./revalidateCurationScrap";

export default async function revalidateCurationScrapRelatedData() {
  revalidateCurationRandom();
  revalidateCurationScrap();
  revalidateTextSearchCurationData();
  revalidateKeywordSearchCurationData();
}
