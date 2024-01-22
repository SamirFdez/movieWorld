import React, { useState, useEffect } from "react";

export const DataReview = ({ dataReviews }) => {
  const [dataReview, setDataReview] = useState([]);
  const [readMore, setReadMore] = useState(true);

  useEffect(() => {
    setDataReview(dataReviews);
  }, [dataReviews]);

  return (
    <>
      {dataReview.length ? (
        <div className="container p-5 pt-0 mx-auto">
          <div className="lg:w-4/5 mx-auto">
            <h3 className="text-3xl font-bold dark:text-white tracking-wider mb-4">
              Reviews
            </h3>
            <div className="w-full flex flex-col gap-2 p-4 bg-gray-800 text-white">
              <div className="flex flex-col gap-5">
                {dataReview.slice(0, 3).map((reviews, index) => (
                  <div
                    className="flex flex-col gap-4 bg-gray-700 p-5"
                    key={`review-${index}`}
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center  gap-2">
                        <img
                          src={`https://api.multiavatar.com/${reviews.id}.png`}
                          className="w-12 h-12 text-center rounded-full"
                          alt=""
                        />
                        <h1 className="text-lg ml-1">{reviews.author}</h1>
                      </div>
                      <div className="flex p-1 gap-1 rating rating-xs md:rating-sm">
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          value={1}
                          checked={
                            Math.trunc(reviews?.author_details?.rating / 2) ===
                              1 || 0
                              ? true
                              : false
                          }
                          style={
                            reviews?.author_details?.rating === null
                              ? { opacity: "0.2" }
                              : {}
                          }
                        />
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          value={2}
                          checked={
                            Math.trunc(reviews?.author_details?.rating / 2) ===
                            2
                              ? true
                              : false
                          }
                          style={
                            reviews?.author_details?.rating === null
                              ? { opacity: "0.2" }
                              : {}
                          }
                        />
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          value={3}
                          checked={
                            Math.trunc(reviews?.author_details?.rating / 2) ===
                            3
                              ? true
                              : false
                          }
                          style={
                            reviews?.author_details?.rating === null
                              ? { opacity: "0.2" }
                              : {}
                          }
                        />
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          value={4}
                          checked={
                            Math.trunc(reviews?.author_details?.rating / 2) ===
                            4
                              ? true
                              : false
                          }
                          style={
                            reviews?.author_details?.rating === null
                              ? { opacity: "0.2" }
                              : {}
                          }
                        />
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          value={5}
                          checked={
                            Math.trunc(reviews?.author_details?.rating / 2) ===
                            5
                              ? true
                              : false
                          }
                          style={
                            reviews?.author_details?.rating === null
                              ? { opacity: "0.2" }
                              : {}
                          }
                        />
                      </div>
                    </div>
                    <div>
                      {reviews.content !== "" ? (
                        reviews.content.length - 240 > 44 ? (
                          readMore ? (
                            <>
                              {reviews.content.slice(0, 240) + "... "}
                              <a
                                className="link"
                                onClick={() => setReadMore(false)}
                              >
                                read more
                              </a>
                            </>
                          ) : (
                            <>
                              {reviews.content + " "}
                              <a
                                className="link"
                                onClick={() => setReadMore(true)}
                              >
                                hide
                              </a>
                            </>
                          )
                        ) : (
                          reviews.content
                        )
                      ) : (
                        "Review not available."
                      )}
                    </div>
                    <div className="flex flex-col justify-end">
                      <span>{reviews?.author_details?.username}</span>
                      <span className="text-gray-500">Feb 13, 2021</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <a className="link">read more</a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
