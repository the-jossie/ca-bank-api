import React, { ReactElement } from "react";

interface PropTypes {
  children?: ReactElement;
  handleClose: () => void;
}

const Modal = ({ children, handleClose = () => {} }: PropTypes) => {
  return (
    <div
      className="fixed z-40 w-full h-full flex justify-center items-center inset-0 backdrop-blur-md backdrop-brightness-50"
    >
      <div
        className="rounded-[30px] z-50 w-full mx-auto"
      >
        <div className="bg-white w-[90%] md:w-3/5 mx-auto p-3 max-h-[800px] overflow-y-auto border rounded-md">
          <div className="flex items-center justify-end">
            <button onClick={() => handleClose()}>
              <img src="/close.svg" alt="close" />
            </button>
          </div>
          {children && children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
