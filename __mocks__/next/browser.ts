import { setupWorker } from "msw/browser";
import { handlers } from "./api/auth/register/handlers";

export const worker = setupWorker(...handlers);
