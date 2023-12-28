import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";

export const CarouselPremiere = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const apiKey = "2a3fff17b6b526d16701df6517c4b678";
  const params = `/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc`;

  const [premiereMovies, setPremiereMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTNmZmYxN2I2YjUyNmQxNjcwMWRmNjUxN2M0YjY3OCIsInN1YiI6IjY1OGIwZTZlYWU2ZjA5MmQ0YzU1ZTRmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sef8QW5Rrhc5E0AjfS3EMABY4afADOBgfMrbiIoGv9s",
    },
  };

  const getPremiereMovies = async () => {
    try {
      const response = await axios.get(baseUrl + params, config);
      setPremiereMovies(response.data.results);
      console.log(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getPremiereMovies();
  }, []);

  const responsiveCarousel = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      {loading ? (
        <h1>Ta' Cargando</h1>
      ) : (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsiveCarousel}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {premiereMovies?.map((premiereMovie, index) => (
            <div key={`premiere-movie-${index + 1}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${premiereMovie.poster_path}`}
                // src={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&${premiereMovie.poster_path}`}
                alt={premiereMovie.original_title}
              />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};