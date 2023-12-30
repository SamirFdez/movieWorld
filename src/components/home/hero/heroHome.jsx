import React, { useState, useEffect } from "react";
import BannerAvatar from "../../../assets/images/avatar.jpg";
import BannerDespicable from "../../../assets/images/despicable-4.jpg";
import BannerInsideOut from "../../../assets/images/inside-out-2.jpeg";
import BannerGK from "../../../assets/images/GK.jpg";
import BannerDune from "../../../assets/images/dune-2.jpg";

export const HeroHome = () => {
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
      <div className="container mx-auto">
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
                  alt={`Slide ${index + 1}`}
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
{
  /* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="heroWave"
        >
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,224L21.8,224C43.6,224,87,224,131,218.7C174.5,213,218,203,262,208C305.5,213,349,235,393,234.7C436.4,235,480,213,524,170.7C567.3,128,611,64,655,37.3C698.2,11,742,21,785,48C829.1,75,873,117,916,149.3C960,181,1004,203,1047,229.3C1090.9,256,1135,288,1178,250.7C1221.8,213,1265,107,1309,74.7C1352.7,43,1396,85,1418,106.7L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg> */
}
