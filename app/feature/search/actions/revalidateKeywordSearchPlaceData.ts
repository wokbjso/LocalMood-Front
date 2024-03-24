"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateKeywordSearchPlaceData() {
  revalidateTag(`revalidateKeywordSearchPlaceData`);
}
