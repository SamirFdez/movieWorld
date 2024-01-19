import React from "react";
import Lottie from "lottie-react";
import NoDataAnimation from "../../assets/images/NoDataResults.json";

export const NoDataFound = () => {


  return (
    <>
      <div className="flex flex-col text-center w-full mb-20 mt-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white tracking-wider">
          {"No Data Found :("}
        </h1>
        <div className="lg:w-2/3 mx-auto mt-5">
            <Lottie animationData={NoDataAnimation} />
        </div>
      </div>
    </>
  );
};
