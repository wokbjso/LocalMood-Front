import { HttpResponse } from "msw";
import { MockRestClient } from "./mockRestClient";

export const handlers = [
  MockRestClient.post("/api/v1/auth/signup", async ({ request }) => {
    console.log(request);

    return HttpResponse.json({
      status: 200,
    });
  }),
];
