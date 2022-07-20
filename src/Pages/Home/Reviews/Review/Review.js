import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div
      id={`slide${numSlide}`}
      class="carousel-item relative w-full bg-cyan-50 mx-auto"
    >
      <div className="py-10">
        <div className="md:mx-48 text-center">
          <img
            src={userPhoto}
            class="mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            alt={userName}
          />
          <h2 className="text-2xl mt-5">{userName}</h2>
          <p className="font-bold">{descriptionReSize}</p>
          <p className="text-yellow-500 mt-5">
            <span>Rating: {rating} </span>

            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
        </div>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${numSlide - 1}`} class="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${numSlide + 1}`} class="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Review;
