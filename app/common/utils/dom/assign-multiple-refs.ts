import { ForwardedRef, MutableRefObject } from "react";

export function assignMultipleRefs<U extends HTMLElement>(
  el: U | null,
  refs: (ForwardedRef<U> | MutableRefObject<U>)[]
) {
  refs.forEach((ref) => {
    if (typeof ref === "function") {
      ref(el);
    } else if (ref) {
      ref.current = el;
    }
  });
}
