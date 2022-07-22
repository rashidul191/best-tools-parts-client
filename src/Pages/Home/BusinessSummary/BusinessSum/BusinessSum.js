import React from "react";

const BusinessSum = ({ businessSum }) => {
  const { number, name } = businessSum;

  return (
    <div className=" flex justify-center">
      <div className="card w-64 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-xl">{name}</h2>
          <p className="text-2xl">{number} +</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSum;
