import React from "react";
import {Link} from "react-router-dom"

const Tool = ({ tool }) => {
  const { name, img, pricePerUnit, minOrder, avaQuantity, _id } = tool;
  return (
    <div class="card w-96 bg-base-100 border">
      <figure class="">
        <img
          src={img}
          alt="Shoes"
          class="w-40 rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="text-2xl font-bold">{name}</h2>
        <p>Price Per Unit: $ {pricePerUnit}</p>
        <p>Minimum Order: {minOrder}</p>
        <p>Available Quantity{avaQuantity}</p>
        <div class="card-actions">
      <Link to={`/purchase/${_id}`}>  <button class="btn btn-wide btn-secondary">Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
