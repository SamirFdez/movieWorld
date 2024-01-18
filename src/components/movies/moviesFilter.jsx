import React, { useState, useEffect } from "react";

export const MoviesFilter = ({
  genresList,
  setFilterGenres,
  movieSearch,
  setMovieSearch,
}) => {
  const [updateGenresList, setUpdateGenresList] = useState([]);
  const [inputValue, setInputValue] = useState(movieSearch);

  const newGenresList = () => {
    const copyGenresList = genresList?.map((data) => ({
      ...data,
      selected: false,
    }));
    setUpdateGenresList(copyGenresList);
  };

  useEffect(() => {
    newGenresList();
  }, [genresList]);

  const handleInputMovieSearch = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputWithDelay = () => {
    let timeoutId;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setMovieSearch(inputValue);
    }, 1000);
  };

  const genresSelected = (id) => {
    const copyGenresList = [...updateGenresList];

    const genresListSelected = updateGenresList.filter(
      (genres) => genres.selected === true
    );
    if (genresListSelected.length < 3) {
      const genres = copyGenresList.find((genres) => genres.id === id);
      genres.selected = !genres.selected;
    } else {
      const genres = copyGenresList.find((genres) => genres.id === id);
      genres.selected = false;
    }
    const newFilter = copyGenresList
      .filter((genres) => genres.selected === true)
      .map((genres) => genres.id);
    setFilterGenres(newFilter.join(","));
    setUpdateGenresList(copyGenresList);
  };

  return (
    <>
      <div className="container mx-auto" style={{ marginTop: "80px" }}>
        <div className="flex flex-wrap mx-4 px-4">
          <input
            type="text"
            placeholder="Search movie..."
            className="input input-bordered w-60 lg:w-full max-w-xs mr-2"
            value={inputValue}
            onChange={handleInputMovieSearch}
            onKeyUp={handleInputWithDelay}
          />
          <button
            className="btn capitalize justify-around text-base text-white bg-blue-700  h-auto  hover:bg-blue-900 py-1 px-2"
            onClick={() => document.getElementById("modalFilter").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 22"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            Filters
          </button>

          <dialog
            id="modalFilter"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form method="dialog" className="border-b border-gray-500">
                <div className="flex justify-between mb-2">
                  <div></div>
                  <h3 className="font-bold text-lg text-white">Filters</h3>
                  <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                </div>
              </form>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-4  py-4">
                {updateGenresList?.map((genres, index) => (
                  <div className="form-control" key={`genres-filter-${index}`}>
                    <label className="cursor-pointer label justify-start">
                      <input
                        type="checkbox"
                        checked={genres.selected}
                        className="checkbox mr-4"
                        onChange={() => genresSelected(genres.id)}
                      />
                      <span className="label-text text-base hidden md:block">
                        {genres.name.length < 12
                          ? genres.name
                          : genres.name.slice(0, 12) + "..."}
                      </span>
                      <span className="label-text text-base block md:hidden">
                        {genres.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
};
