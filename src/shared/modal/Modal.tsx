import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type ModalProps = {
  display: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal = ({ display, closeModal, children }: ModalProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, closeModal);

  return (
    <div
      className={`fixed bg-Modal z-100 inset-0 flex justify-center items-center transition-all duration-500 ease-in-out ${
        display
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    }`}
    >
      <div
        className={`w-[19rem] xs:w-[28rem] bg-white shadow-md rounded transition-all duration-500 ease-in-out translate-y-0 ${
          display ? "translate-y-0" : "translate-y-[-200px]"
        }`}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
