import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-20 md:my-52 flex justify-center text-center">
      <div>
        <h5 className="text-xl text-error">Error !!! Sorry page not found</h5>
        <h1 className="text-6xl font-bold text-error my-3">404</h1>
        <Link to="/" className="text-primary underline">
          {" "}
          <p>Back to Home</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
