import React from "react";

export const Pagination = ({ page, setPage }) => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="flex justify-center join">
          {page !== 1 ? (
            <button
              className="join-item btn text-lg bg-gray-800 hover:bg-blue-700 hover:text-white"
              onClick={() => setPage(1)}
            >
              «
            </button>
          ) : null}
          {page - 2 > 0 ? (
            <button
              className="join-item btn text-lg bg-gray-800 hover:bg-blue-700 hover:text-white"
              onClick={() => setPage(page - 2)}
            >
              {page - 2}
            </button>
          ) : null}
          {page - 1 > 0 ? (
            <button
              className="join-item btn text-lg bg-gray-800 hover:bg-blue-700 hover:text-white"
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </button>
          ) : null}
          <button className="join-item btn text-lg bg-blue-700 text-white hover:bg-blue-700 hover:text-white">
            {page}
          </button>
          {page + 1 < 500 ? (
            <button
              className="join-item btn text-lg bg-gray-800 hover:bg-blue-700 hover:text-white"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </button>
          ) : null}
          {page + 2 < 500 ? (
            <button
              className="join-item btn text-lg bg-gray-800 hover:bg-blue-700 hover:text-white"
              onClick={() => setPage(page + 2)}
            >
              {page + 2}
            </button>
          ) : null}
          {page !== 500 ? (
            <button
              className="join-item btn text-lg bg-gray-800 hover:bg-blue-700 hover:text-white"
              onClick={() => setPage(500)}
            >
              »
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
