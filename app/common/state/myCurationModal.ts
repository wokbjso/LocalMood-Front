import { atom, selector } from "recoil";

interface MyCurationInfoProps {
  open: boolean;
  spaceId: number;
}

export const myCurationInfo = atom<MyCurationInfoProps>({
  key: "myCurationInfo",
  default: {
    open: false,
    spaceId: -1,
  },
});

export const myCurationInfoSelector = selector<MyCurationInfoProps>({
  key: "myCurationInfoSelector",
  get: ({ get }) => {
    return get(myCurationInfo);
  },
  set: ({ set }, newValue) => {
    set(myCurationInfo, newValue);
  },
});
