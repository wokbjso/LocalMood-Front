import { setupServer } from "msw/node";
import { handlers } from "./api/auth/register/handlers";

export const server = setupServer(...handlers);
