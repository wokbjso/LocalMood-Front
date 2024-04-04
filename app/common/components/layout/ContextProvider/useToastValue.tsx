import { useContext } from "react";
import { ToastValueContext } from "./ToastContextProvider";

export default function useToastValue() {
  const value = useContext(ToastValueContext);
  if (value === undefined) {
    throw new Error("No Provider");
  }
  return value;
}
