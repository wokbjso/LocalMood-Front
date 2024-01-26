import { NextRequest } from "next/server";

export default async function DELETE({ params }: { params: { id: string } }) {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/curation/${params.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}
