import React, { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // react query
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-28">
      <div className="flex justify-center">
        <div className="mb-5 md:mb-10">
          <h2 className="uppercase text-3xl font-bold">Review</h2>
          <div className="h-1 w-22 rounded-full bg-yellow-500"></div>
        </div>
      </div>

      <div class="carousel w-full">
        {reviews.map((review, index) => (
          <Review key={review._id} review={review} index={index}></Review>
        ))}
      </div>

     
    </div>
  );
};

export default Reviews;