export default async function POST({
  params,
}: {
  params: { id: string; spaceId: string };
}) {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/curation/space/${params.id}/${params.spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}
