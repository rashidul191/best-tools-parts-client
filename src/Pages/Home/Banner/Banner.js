import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full h-50">
          <img
            src="https://i.ibb.co/SwFfg1t/slider-1.png
            "
            class="w-full"
            alt="img"
          />

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/P6xXWy5/slider-2.png"
            class="w-full"
            alt="img"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="  https://i.ibb.co/JHmh9TV/slider-3.png"
            class="w-full"
            alt="img"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
