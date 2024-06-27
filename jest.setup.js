import "@testing-library/jest-dom";
import { server } from "./__mocks__/next/server";

export const pushMock = jest.fn();

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      push: pushMock,
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
