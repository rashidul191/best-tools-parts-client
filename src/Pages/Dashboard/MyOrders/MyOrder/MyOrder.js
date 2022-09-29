import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrder = ({ order, index, refetch }) => {
  const { toolName, toolImg, quantity, toolPrice, _id, paid } = order;
  const handleCancelOrder = () => {
    fetch(`https://best-tools-part-server.onrender.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order Cancel Successful`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{toolName}</td>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={toolImg} alt={toolName} />
          </div>
        </div>
      </td>
      <td>{quantity}</td>
      <td>{toolPrice}</td>
      <td>
        {/* Delete Modal */}
        {!paid ? (
          <label htmlFor="delete-modal" className="btn btn-error text-white mr-2">
            Cancel
          </label>
        ) : (
          <p className="text-green-500">NO</p>
        )}
        <input type="checkbox" id="delete-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="delete-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-2xl">Tool: {toolName}</h3>
            <p className="py-4 text-error font-bold text-3xl">Are your sure??</p>
            <p className="text-xl">Cancel Order</p>
            <div className="modal-action">
              <button
                onClick={handleCancelOrder}
                className="btn btn-error text-white"
              >
                Yes
              </button>
              <label htmlFor="delete-modal" className="btn">
                No
              </label>
            </div>
          </div>
        </div>

        {/* <button onClick={handleCancelOrder} className="btn btn-primary">
          Cancel
        </button> */}

        {/* Payment btn */}
      </td>
      <td>
        {paid ? (
          <p className="text-secondary">Already paid</p>
        ) : (
          <>
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-info">Pay</button>
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};

export default MyOrder;
