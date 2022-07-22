import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ToolsRow from "./ToolsRow/ToolsRow";

const ManageTools = () => {
    // react query
  const { data: tools, isLoading, refetch } = useQuery(["manage-tool"], () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold">Manage Tools {tools.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Image</th>
              <th>Name</th>
              <th>Available Quantity</th>
              <th>Add Quantity</th>
              <th>Delete Tool</th>
            </tr>
          </thead>
          <tbody>
          {
            tools.map((tool, index) => <ToolsRow key={tool._id}
            index ={index}
            tool={tool}
            refetch={refetch}
            ></ToolsRow>)
          }
          </tbody>


        </table>
      </div>
    </div>
  );
};

export default ManageTools;
