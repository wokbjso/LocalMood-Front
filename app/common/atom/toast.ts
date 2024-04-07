import { atom, selector } from "recoil";

interface ToastInfoProps {
  open: boolean;
  text: string;
}

export const toastInfo = atom<ToastInfoProps>({
  key: "toastInfo",
  default: {
    open: false,
    text: "",
  },
});

export const toastInfoSelector = selector<ToastInfoProps>({
  key: "toastInfoSelector",
  get: ({ get }) => {
    return get(toastInfo);
  },
  set: ({ set }, newValue) => {
    set(toastInfo, newValue);
  },
});
