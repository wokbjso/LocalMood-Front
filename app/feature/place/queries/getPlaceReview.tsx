export default async function GetPlaceReview(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/space/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["getPlaceReview"] },
    }
  );
  const data = await res.json();

  return data;
}
