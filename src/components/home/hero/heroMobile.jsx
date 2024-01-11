import React, { useState, useEffect } from "react";
import BannerAvatar from "../../../assets/images/avatar.jpg";
import BannerDespicable from "../../../assets/images/despicable-4.jpg";
import BannerInsideOut from "../../../assets/images/inside-out-2.jpeg";
import BannerGK from "../../../assets/images/GK.jpg";
import BannerDune from "../../../assets/images/dune-2.jpg";

export const HeroMobile = () => {
  const images = [
    BannerAvatar,
    BannerDespicable,
    BannerInsideOut,
    BannerGK,
    BannerDune,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* <div className="container mx-auto block lg:hidden">  */}
      <div className="container mx-auto block"> 
        <div
          className="relative max-w-screen-full overflow-hidden"
          style={{ marginTop: "70px" }}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Slide-${index + 1}`}
                  className="imgHeroHome w-full h-full object-fill"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
