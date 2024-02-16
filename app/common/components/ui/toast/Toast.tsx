import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface ToastProps {
  open: boolean;
  text: string;
}

export default function Toast({ open, text }: ToastProps) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      nodeRef={ref}
      classNames={"toast"}
      timeout={300}
      in={open}
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={ref}
        className="flex justify-center items-center absolute bottom-[5rem] left-1/2 transform -translate-x-1/2 rounded-[8px] h-[3.8rem] px-[2.4rem] py-[1.2rem] min-w-[19.8rem] bg-[#212121CC] text-white whitespace-nowrap body2-medium z-50"
      >
        {text}
      </div>
    </CSSTransition>
  );
}
