import { atom, selector } from "recoil";

export const queryFetching = atom<boolean>({
  key: "queryFetching",
  default: false,
});

export const queryFetchingSelector = selector<boolean>({
  key: "queryFetchingSelector",
  get: ({ get }) => {
    return get(queryFetching);
  },
  set: ({ set }, newValue) => {
    set(queryFetching, newValue);
  },
});
