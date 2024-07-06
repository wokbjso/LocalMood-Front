import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { getSession } from "@/common/utils/session/get-session";
import { ReviewProps } from "@/feature/record/type";

export default async function GetRecordMyPage(): Promise<{
  reviewCount: number;
  reviews: ReviewProps[];
}> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/member`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  const data = await res.json();
  return data;
}
