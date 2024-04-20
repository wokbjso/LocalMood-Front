"use client";

import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "searchSortState",
  storage: sessionStorage,
});

export const searchSortState = atom<string>({
  key: "sortState",
  default: "RECENT",
  effects_UNSTABLE: [persistAtom],
});

export const searchSortStateSelector = selector<string>({
  key: "searchSortStateSelector",
  get: ({ get }) => {
    return get(searchSortState);
  },
  set: ({ set }, newValue) => {
    set(searchSortState, newValue);
  },
});
