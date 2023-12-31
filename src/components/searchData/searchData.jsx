import React, { useState, useEffect } from "react";
import axios from "axios";
import { NoDataFound } from "./noDataFound";

export const SearchData = ({ wordSearch }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const params = `/search/multi?query=${wordSearch}&include_adult=true&language=en-US&page=1`;

  const [dataSearched, setDataSearched] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getDataSearched = async () => {
    try {
      const response = await axios.get(baseUrl + params, config);
      setDataSearched(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getDataSearched();
  }, [wordSearch]);

  return (
    <>
      {loading ? null : (
        <div className="container mx-auto" style={{ marginTop: "70px" }}>
            <NoDataFound />
          {/* <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white tracking-wider">
              Search results
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/603x363"
                />
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

{
  /* <ul>
            {dataSearched?.map((data, index) => (
              <li key={`dataSearched-${index}`}> {data.name} </li>
            ))}
          </ul> */
}
