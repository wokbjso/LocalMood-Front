export default async function GetRandomPlaces() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/v1/spaces/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
