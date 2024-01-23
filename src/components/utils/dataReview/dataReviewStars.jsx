import React from "react";

export const DataReviewStars = ({ reviews, index }) => {
  return (
    <>
      <div className="flex p-1 gap-1 rating rating-xs md:rating-sm">
        <input
          type="radio"
          name={`rating-${index}`}
          className="mask mask-star-2 bg-orange-400"
          value={1}
          checked={
            Math.trunc(reviews?.author_details?.rating / 2) === 1 || 0
              ? true
              : false
          }
          style={
            reviews?.author_details?.rating === null ? { opacity: "0.2" } : {}
          }
          readOnly
        />
        <input
          type="radio"
          name={`rating-${index}`}
          className="mask mask-star-2 bg-orange-400"
          value={2}
          checked={
            Math.trunc(reviews?.author_details?.rating / 2) === 2 ? true : false
          }
          style={
            reviews?.author_details?.rating === null ? { opacity: "0.2" } : {}
          }
          readOnly
        />
        <input
          type="radio"
          name={`rating-${index}`}
          className="mask mask-star-2 bg-orange-400"
          value={3}
          checked={
            Math.trunc(reviews?.author_details?.rating / 2) === 3 ? true : false
          }
          style={
            reviews?.author_details?.rating === null ? { opacity: "0.2" } : {}
          }
          readOnly
        />
        <input
          type="radio"
          name={`rating-${index}`}
          className="mask mask-star-2 bg-orange-400"
          value={4}
          checked={
            Math.trunc(reviews?.author_details?.rating / 2) === 4 ? true : false
          }
          style={
            reviews?.author_details?.rating === null ? { opacity: "0.2" } : {}
          }
          readOnly
        />
        <input
          type="radio"
          name={`rating-${index}`}
          className="mask mask-star-2 bg-orange-400"
          value={5}
          checked={
            Math.trunc(reviews?.author_details?.rating / 2) === 5 ? true : false
          }
          style={
            reviews?.author_details?.rating === null ? { opacity: "0.2" } : {}
          }
          readOnly
        />
      </div>
    </>
  );
};
