export default async function GetPlaceDetail(category: string, id: string) {
  const token = "token from localStorage";
  const query = `?type=${category}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/v1/spaces/${id}+query`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
