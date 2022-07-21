import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Tool from "./Tool/Tool";

const Tools = () => {
  const { data: tools, isLoading } = useQuery(["tools"], () =>
    fetch("https://quiet-bayou-95560.herokuapp.com/tools").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="my-8 md:my-16">
      <div className="flex justify-center">
        <div className="mb-5 md:mb-10">
          <h2 className="uppercase text-3xl font-bold">Tools</h2>
          <div className="h-1 w-58 rounded-full bg-yellow-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
