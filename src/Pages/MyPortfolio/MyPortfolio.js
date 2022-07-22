import React from "react";

const MyPortfolio = () => {
  return (
    <div className="my-8 md:mt-10 md:mb-28">
      <div class="card w-10/12 mx-auto bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            width={200}
            src="https://i.ibb.co/svwZDbn/Rashidul.jpg"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name: Md Rashidul Islam</h2>
          <p>Email: rashidul.191cse.gub@gmail.ocm</p>
          <p className="font-bold">
            Hi, I am Rashidul Islam. I am study of Green University of
            Bangladesh, Department of Bsc In CSE. I am a Full Stack web
            developer and responsive website design.
          </p>
          <p className="font-bold">Technology:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 text-green-500">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>dasiyUi</li>
            <li>React</li>
            <li>React Bootstrap</li>
            <li>React Router Dom</li>
            <li>React Stripe js(payment system)</li>
            <li>React Hook From</li>
            <li>Firebase</li>
            <li>React Firebase Hook</li>
            <li>Node js</li>
            <li>JWT</li>
            <li>Mongo DB</li>
            <li>node mongodb crud</li>
            <li>Express</li>
            <li>Heroku</li>
          </div>
          <p className="font-bold">Best Project Link: </p>
          <li>
            <a
              target="_blank"
              href="https://smartphone-warehouse-91a9a.web.app/"
            >
              https://smartphone-warehouse-91a9a.web.app/
            </a>
          </li>
          <li>
            <a target="_blank" href="https://career-coach-8b2ea.web.app/">
              https://career-coach-8b2ea.web.app/
            </a>
          </li>
          <li>
            <a target="_blank" href="https://customs-review.netlify.app/">
            https://customs-review.netlify.app/
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
