import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const BusinessSum = ({ businessSum }) => {
  const { number, name } = businessSum;

  return (
    <div className=" flex justify-center">
      <div class="card w-64 bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <FontAwesomeIcon className="text-5xl" icon={faPerson} />
          <h2 class="text-xl">{name}</h2>
          <p className="text-2xl">{number} +</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSum;
