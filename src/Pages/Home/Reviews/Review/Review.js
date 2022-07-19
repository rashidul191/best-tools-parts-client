import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ review, index }) => {
  const { name, img, description } = review;
  let numSlide = index + 1;

  return (
    <div id={`slide${numSlide}`} class="carousel-item relative w-full">
      <div className="bg-red-100 py-10">
        <div className="md:mx-48 text-center">
          <img
            src={img}
            class="mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            alt={name}
          />
          <h2 className="text-2xl mt-5">{name}</h2>
          <p className="font-bold">{description}</p>
          <p className="text-yellow-500 mt-5">
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
