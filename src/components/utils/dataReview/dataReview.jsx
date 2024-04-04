import React, { useState, useEffect } from "react";
import { DataReviewStars } from "./dataReviewStars";
import dayjs from "dayjs";

export const DataReview = ({ dataReviews }) => {
  const [dataReview, setDataReview] = useState([]);

  const newDataReviewsList = () => {
    const copyDataReviews = dataReviews?.map((review) => ({
      ...review,
      readMore: true,
    }));
    setDataReview(copyDataReviews);
  };

  useEffect(() => {
    newDataReviewsList();
  }, [dataReviews]);

  const readMoreTogle = (id) => {
    const copyDataReviews = [...dataReview];
    const review = copyDataReviews.find((review) => review.id === id);
    review.readMore = !review.readMore;
    setDataReview(copyDataReviews);
  };

  return (
    <>
      <div className="container p-5 mx-auto">
        <div className="lg:w-4/5 mx-auto">
          <h3 className="text-3xl font-bold dark:text-white tracking-wider mb-4">
            Reviews
          </h3>
          <div className="w-full flex flex-col gap-2 p-4 bg-gray-800 text-white rounded dataReview">
            <div className="flex flex-col gap-5">
              {dataReview.length ? (
                dataReview.map((reviews, index) => (
                  <div
                    className="flex flex-col gap-4 bg-gray-700 p-5"
                    key={`review-${index}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://api.multiavatar.com/${reviews.id}.png`}
                          className="w-12 h-12 text-center rounded-full"
                          alt=""
                        />
                        <h1 className="text-lg ml-1">{reviews.author}</h1>
                      </div>
                      <DataReviewStars reviews={reviews} index={index} />
                    </div>
                    <div>
                      {reviews.content !== "" ? (
                        reviews.content.length - 240 > 44 ? (
                          reviews.readMore ? (
                            <>
                              {reviews.content.slice(0, 240) + "... "}
                              <a
                                className="link"
                                onClick={() => readMoreTogle(reviews.id)}
                              >
                                read more
                              </a>
                            </>
                          ) : (
                            <>
                              {reviews.content + " "}
                              <a
                                className="link"
                                onClick={() => readMoreTogle(reviews.id)}
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
                    <div className="flex justify-end">
                      <span className="text-gray-400">
                        {dayjs(reviews.created_at).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col gap-4 bg-gray-700 p-5">
                  {"There are no reviews to show."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
