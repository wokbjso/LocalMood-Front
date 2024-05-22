import { atomFamily, selectorFamily } from "recoil";

type modalType =
  | "searchKeyword"
  | "changeSort"
  | "logout"
  | "makeCuration"
  | "confirm";

export const isModalOpen = atomFamily<boolean, modalType>({
  key: "isModalOpen",
  default: (type) => {
    return false;
  },
});

export const isModalOpenSelector = selectorFamily<boolean, modalType>({
  key: "isModalOpenSelector",
  get:
    (type) =>
    ({ get }) => {
      return get(isModalOpen(type));
    },
  set:
    (type) =>
    ({ set }, newValue) => {
      set(isModalOpen(type), newValue);
    },
});
