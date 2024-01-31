"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateScrapSpace() {
  revalidateTag("getPlaceScrapped");
}
