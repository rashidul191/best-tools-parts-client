import React from "react";

const MyOrder = ({ order, index }) => {
  const { toolName, toolImg, quantity, toolPrice } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{toolName}</td>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={toolImg} alt={toolName} />
          </div>
        </div>
      </td>
      <td>{quantity}</td>
      <td>{toolPrice}</td>
      <td>
        {/* <button className="btn btn-primary">Cancel</button> */}
        <button className="btn btn-info">Pay</button>
      </td>
    </tr>
  );
};

export default MyOrder;
