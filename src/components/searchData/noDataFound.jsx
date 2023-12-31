import React from "react";
import NoDataAnimation from "../../assets/images/NoDataResults.json";

export const NoDataFound = () => {
  const animationOptions = {
    animationData: NoDataAnimation,
    loop: true,
  };

  //   const { noDataAnimationView } = useLottie(animationOptions);

  return (
    <>
      <div className="flex flex-col text-center w-full mb-20 mt-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white tracking-wider">
          {"No Data Found :("}
        </h1>
        <div className="lg:w-2/3 mx-auto"></div>
      </div>
    </>
  );
};
