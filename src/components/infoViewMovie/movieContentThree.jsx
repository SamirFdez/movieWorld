import React from "react";
import NoProfilePhoto from "../../assets/images/noProfilePhoto.png";
import { useNavigate } from "react-router-dom";

export const MovieContentThree = ({ movieCredits }) => {
  const navigate = useNavigate();

  const goToInfoViewPeople = (id) => {
    navigate(`/people/${id}`);
  };

  return (
    <>
      {movieCredits?.length > 0 ? (
        <div className="flex flex-wrap creditsComponent p-2">
          {movieCredits?.map((moviePeople, index) => (
            <div
              className="p-2 lg:w-1/2 md:w-1/2 w-full transition-all duration-700 hover:scale-105 cursor-pointer"
              key={index}
              onClick={() => goToInfoViewPeople(moviePeople.id)}
            >
              <div className="h-full flex items-center border-gray-200 hover:border-blue-700 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={
                    moviePeople.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w400${moviePeople.profile_path}`
                      : NoProfilePhoto
                  }
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    {moviePeople.name}
                  </h2>
                  <p className="text-gray-500">{moviePeople.character}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="leading-relaxed mb-4 py-2">
          The cast of the film is not available at the moment.
        </p>
      )}
    </>
  );
};
