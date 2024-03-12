"use server";

import { revalidateTag } from "next/cache";

export default async function revalidatePlaceDetailById(id: number) {
  revalidateTag(`getPlaceDetail${id}`);
}
