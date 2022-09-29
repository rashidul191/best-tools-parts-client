import React, { useEffect, useState } from "react";
import BusinessSum from "./BusinessSum/BusinessSum";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const BusinessSummary = () => {
  const icons = [faCoffee];
  const [businessSummary, setBusinessSummary] = useState([]);
  useEffect(() => {
    fetch("https://best-tools-part-server.onrender.com/business")
      .then((res) => res.json())
      .then((data) => {
        setBusinessSummary(data);
      });
  }, []);
  return (
    <div className="my-10 md:my-16">
      <div className="flex justify-center">
        <div className="mb-5 md:mb-10">
          <h2 className="uppercase text-3xl font-bold">Business Summary</h2>
          <div className="h-1 w-58 rounded-full bg-yellow-500"></div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
        {businessSummary.map((businessSum) => (
          <BusinessSum
            key={businessSum._id}
            businessSum={businessSum}
            icons={icons}
          ></BusinessSum>
        ))}
      </div>
    </div>
  );
};

export default BusinessSummary;
