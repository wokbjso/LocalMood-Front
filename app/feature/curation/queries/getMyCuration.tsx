import { getSession } from "@common/utils/session/getSession";
import { MyCurationResponse } from "./dto/my-curation";

export default async function getMyCuration(): Promise<MyCurationResponse> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/member`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["getMyCuration"] },
    }
  );
  const data = await res.json();

  return data;
}
