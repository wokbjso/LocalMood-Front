import { useContext } from "react";
import { ToastActionContext } from "./ToastContextProvider";

export default function useToastActions() {
  const value = useContext(ToastActionContext);
  if (value === undefined) {
    throw new Error("No Provider");
  }
  return value;
}
