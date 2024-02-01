"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function revalidateCurationScrap() {
  revalidateTag("getScrapedCuration");
  revalidatePath("/curation");
}
