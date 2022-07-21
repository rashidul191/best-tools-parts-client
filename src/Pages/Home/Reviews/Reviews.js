import React, { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://quiet-bayou-95560.herokuapp.com/reviews",{
      method:"GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="sm:mt-10 md:mt-28 py-12 bg-cyan-50">
      <div className="flex justify-center">
        <div className="">
          <h2 className="uppercase text-3xl font-bold">Review</h2>
          <div className="h-1 w-22 rounded-full bg-yellow-500"></div>
        </div>
      </div>

      <div className="carousel w-full flex items-center">
        {reviews.map((review, index) => (
          <Review key={review._id} review={review} index={index}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
