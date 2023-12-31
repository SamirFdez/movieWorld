import React, { useState, useEffect } from "react";
import axios from "axios";
import { CarouselByGenres } from "./carouselByGenres";

export const GenresList = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const params = "/genre/movie/list?language=en";

  const [genresList, setGenresList] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getGenresList = async () => {
    try {
      const response = await axios.get(baseUrl + params, config);
      setGenresList(response.data.genres);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getGenresList();
  }, []);

  const genresToInclude = [
    "Action",
    "Comedy",
    "Drama",
    "Romance",
    "Thriller",
    "TV Movie",
  ];

  const filteredGenres = genresList?.filter((genre) =>
    genresToInclude.includes(genre.name)
  );

  return (
    <>
      {loading
        ? null
        : filteredGenres?.map((genres, index) => (
            <div key={`genreList-${index}`} style={{ marginTop: "10px" }}>
              <h3 className="text-3xl font-bold dark:text-white tracking-wider">
                {genres.name}
              </h3>
              <CarouselByGenres genres={genres.id} />
            </div>
          ))}
    </>
  );
};
