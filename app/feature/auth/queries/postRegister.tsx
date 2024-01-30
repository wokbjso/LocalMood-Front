export default async function PostRegister(registerFormData: {
  [key: string]: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerFormData),
    }
  );

  if (res.ok) {
    return new Response("Authorized", {
      status: 201,
    });
  } else {
    return new Response("Error", {
      status: 400,
    });
  }
}
