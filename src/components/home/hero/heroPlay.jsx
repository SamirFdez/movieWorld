import React from "react";

export const HeroPlay = ({ title, show, setShow }) => {
  const closeModal = () => setShow(false);

  return (
    <>
      {show ? (
        <div
          className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
          style={{ background: "rgba(0,0,0,.7)" }}
          onClick={() => closeModal()}
        >
          <div className="modal-container bg-gray-900 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">{title} </p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={() => closeModal()}
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 14 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              <div className="my-5">
                <p>
                  Video player implementation scheduled for upcoming releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
