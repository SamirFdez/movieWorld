import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchTabs } from "./searchTabs";
import { SearchDataContent } from "./searchDataContent";
import { NoDataFound } from "./noDataFound";
import { Loading } from "../utils/loading";

export const SearchData = ({ newSearch, setWordSearch }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const params = `/search/multi?query=${newSearch}&include_adult=false&language=en-US&page=1`;

  const [dataSearched, setDataSearched] = useState([]);
  const [dataFound, setDataFound] = useState();
  const [loading, setLoading] = useState(true);

  const [tabActive, setTabActive] = useState(0);

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
      setDataFound(response.data.total_results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getDataSearched();
  }, [newSearch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {dataFound !== 0 ? (
            <div className="container mx-auto" style={{ marginTop: "70px" }}>
              <>
                <div className="flex flex-col text-center w-full">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-white tracking-wider">
                    Search results:
                  </h1>
                </div>
                <SearchTabs tabActive={tabActive} setTabActive={setTabActive} />
                <SearchDataContent
                  tabActive={tabActive}
                  dataSearched={dataSearched}
                  setWordSearch={setWordSearch}
                />
              </>
            </div>
          ) : (
            <NoDataFound />
          )}
        </>
      )}
    </>
  );
};
