import { ReactNode, forwardRef, ForwardedRef } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

const Modal = forwardRef(
  ({ children, className }: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <>
        <div className="w-[100%] h-[100%] fixed bottom-0 left-0 bg-black opacity-[0.5] z-50" />
        <div
          ref={ref}
          className={twMerge(
            "w-full fixed bottom-0 left-0 bg-white rounded-t-[14px] overflow-y-hidden z-50 pb-[4rem]",
            className
          )}
          style={{
            animationName: "slide-modal",
            animationDuration: "0.6s",
          }}
        >
          <div className="flex justify-center items-center w-full h-[2.1rem] rounded-t-[10px]">
            <div className="w-[3.6rem] h-[0.5rem] bg-text-gray-4 rounded-[2.5px]" />
          </div>
          {children}
        </div>
      </>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
