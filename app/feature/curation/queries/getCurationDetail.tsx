export default async function GetCurationDetail(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/curation/detail/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
