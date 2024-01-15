import React, { useState, useEffect } from "react";
import axios from "axios";
import NoImagenFound from "../../assets/images/imageNotFound.jpg";

export const AccordionSeasonCaps = ({ idSerie, seasonNumber }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsSerieEpisodes = `/tv/${idSerie}/season/${seasonNumber}?language=en-US`;

  const [episodes, setEpisodes] = useState({});
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getSerieEpisodes = async () => {
    try {
      const response = await axios.get(baseUrl + paramsSerieEpisodes, config);
      setEpisodes(response.data.episodes);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getSerieEpisodes();
  }, [idSerie, seasonNumber]);

  return (
    <>
      {loading ? (
        <p className="mb-2 text-gray-500 dark:text-gray-400">loading data...</p>
      ) : (
        <div className="flex flex-wrap episodesComponent p-2">
          {episodes?.map((episode, index) => (
            <div
              className="p-1 w-full transition-all duration-700 cursor-pointer"
              key={index}
            >
              <div className="h-full flex items-center border-gray-200 hover:border-blue-700 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-32 h-24 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                  src={
                    episode.still_path !== null
                      ? `https://image.tmdb.org/t/p/w400${episode.still_path}`
                      : NoImagenFound
                  }
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    {episode.episode_number}. {episode.name}
                  </h2>
                  <p className="text-gray-500">{episode.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
