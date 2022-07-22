import React from "react";

const Review = ({ review, index }) => {
  const { userName, userPhoto, description, rating } = review;
  let numSlide = index + 1;
  let descriptionReSize;
  if (description.length > 250) {
    descriptionReSize = description.slice(0, 250) + "....";
  } else {
    descriptionReSize = description;
  }

  return (
    <div className="carousel-item relative w-full ">
      <div id={`slide${numSlide}`} className="carousel-item relative w-full ">
        <div className="py-10">
          <div className="md:mx-48 text-center">
            <img
              src={userPhoto || "https://i.ibb.co/tmprR1w/profile-icon.webp"}
              className="mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              alt={userName}
            />
            <h2 className="text-2xl font-bold mt-5">{userName}</h2>
            <p>{descriptionReSize}</p>
            <p className="text-yellow-500 mt-5">
              <span>Rating: {rating} </span>
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${numSlide - 1}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${numSlide + 1}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
