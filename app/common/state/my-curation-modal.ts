import { atom, selector } from "recoil";

interface MyCurationInfoProps {
  open: boolean;
  spaceId: number;
}

export const myCurationModalInfo = atom<MyCurationInfoProps>({
  key: "myCurationInfo",
  default: {
    open: false,
    spaceId: -1,
  },
});

export const myCurationModalInfoSelector = selector<MyCurationInfoProps>({
  key: "myCurationInfoSelector",
  get: ({ get }) => {
    return get(myCurationModalInfo);
  },
  set: ({ set }, newValue) => {
    set(myCurationModalInfo, newValue);
  },
});
