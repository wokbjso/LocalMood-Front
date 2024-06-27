import { HttpResponse, http } from "msw";

export const handlers = [
  http.post("/api/auth/register", async ({ request }) => {
    console.log(request);

    return HttpResponse.json({
      status: 200,
    });
  }),
];
