export default async function GetRandomCuration() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/curation/random`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
