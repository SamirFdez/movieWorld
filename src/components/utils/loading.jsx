import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/images/loadingAnimation.json";

export const Loading = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center w-100 mb-20"
        style={{ marginTop: "70px" }}
      >
        <div className="lg:w-1/3 mx-auto mt-5">
          <Lottie animationData={LoadingAnimation} />
        </div>
      </div>
    </>
  );
};
