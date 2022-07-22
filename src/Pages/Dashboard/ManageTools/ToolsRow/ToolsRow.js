import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const ToolsRow = ({ index, tool, refetch }) => {
  const { _id, name, img, avaQuantity } = tool;

  // handle add Quantity
  const handleAddQuantity = (event) => {
    event.preventDefault();
    console.log(event.target.addQuantity.value);
  };

  // handle delete Product
  const handleDeleteProduct = () => {
    fetch(`http://localhost:5000/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Tool: ${name} is deleted.`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{avaQuantity}</td>
      <td>
        {/* Add Quantity */}
        <label for="addQuantity-modal" class="btn btn-secondary">
          <span className="mr-2">Add Quantity</span>
        </label>
        <input type="checkbox" id="addQuantity-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <label
              for="addQuantity-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleAddQuantity}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text font-bold">Add Tool Quantity</span>
                </label>
                <input
                  type="number"
                  name="addQuantity"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>

              <input
                className="btn btn-secondary text-white mt-4"
                type="submit"
                value="Add Quantity"
              />
            </form>
          </div>
        </div>
      </td>
      <td>
        {/* Delete Modal */}
        <label for="delete-modal" class="btn btn-error text-white">
          <span className="mr-2">Delete</span>
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </label>
        <input type="checkbox" id="delete-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <label
              for="delete-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="font-bold text-2xl">Tool: {name}</h3>
            <p class="py-4 text-error font-bold text-3xl">Are your sure??</p>
            <p className="text-xl">Delete Tool</p>
            <div class="modal-action">
              <button
                onClick={handleDeleteProduct}
                className="btn btn-error text-white"
              >
                Yes
              </button>
              <label for="delete-modal" class="btn">
                No
              </label>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ToolsRow;
