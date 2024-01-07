import React from "react";
import NoProfilePhoto from "../../assets/images/noProfilePhoto.png";

export const PeopleContent = ({ peopleData }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const [year, month, day] = date?.split("-") || [];
    const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <>
      <div className="container p-5 mx-auto" style={{ marginTop: "70px" }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-start justify-center">
          <img
            alt={peopleData.name}
            className={`flex items-center justify-center rounded-3xl w-auto h-80 object-cover lg:h-96 ${
              peopleData.profile_path !== null ? "lg:w-auto" : "lg:w-1/3"
            }`}
            src={
              peopleData.profile_path !== null
                ? `https://image.tmdb.org/t/p/w400${peopleData.profile_path}`
                : NoProfilePhoto
            }
          />
          <div className="lg:w-2/3 w-full py-6 lg:px-10">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              PEOPLE
            </h2>
            <h1 className="text-white text-3xl title-font font-medium">
              {peopleData.name}
            </h1>
            <p className="leading-relaxed py-2">{peopleData.biography}</p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Birthday</span>
              <span className="ml-auto text-white">
                {peopleData.birthday !== null
                  ? formatDate(peopleData?.birthday)
                  : "Birthday not found"}
              </span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Place of birth</span>
              <span className="ml-auto text-white">
                {peopleData.place_of_birth !== null
                  ? peopleData.place_of_birth
                  : "Birthplace not found"}
              </span>
            </div>
            {peopleData.deathday !== null ? (
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Place of birth</span>
                <span className="ml-auto text-white">
                  {formatDate(peopleData?.deathday)}
                </span>
              </div>
            ) : null}
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Occupation</span>
              <span className="ml-auto text-white tracking-wider">
                {peopleData.known_for_department}
              </span>
            </div>

            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Popularity</span>
              <div className=" flex justify-between items-center ml-auto">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <h4
                  className={
                    peopleData.popularity !== 0
                      ? "text-white tracking-wider ms-1"
                      : "text-white ms-1"
                  }
                >
                  {peopleData.popularity !== 0
                    ? peopleData.popularity
                    : "No rating yet"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
