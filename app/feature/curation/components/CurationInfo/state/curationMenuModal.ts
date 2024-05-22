import { atom, selector } from "recoil";

interface CurationMenuModalProps {
  isOpen: boolean;
  curationInfo: {
    id: number;
    privacy?: boolean;
    keyword: string[];
    title: string;
  };
}

export const curationMenuModalInfo = atom<CurationMenuModalProps>({
  key: "curationMenuModalInfo",
  default: {
    isOpen: false,
    curationInfo: {
      id: -1,
      privacy: false,
      keyword: [],
      title: "",
    },
  },
});

export const curationMenuModalInfoSelector = selector<CurationMenuModalProps>({
  key: "curationMenuModalInfoSelector",
  get: ({ get }) => {
    return get(curationMenuModalInfo);
  },
  set: ({ set }, newValue) => {
    set(curationMenuModalInfo, newValue);
  },
});
