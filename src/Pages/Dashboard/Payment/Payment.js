import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HZrdZHFXxUpEUgNqYVJ2LFTOFXic2TGl7X7VW0MjvPfF2G2qLnCAoVEb35KZSnCjU5yrYhHbTY63LDI4vq4BGk500DBTvCtzQ"
);
const Payment = () => {
  const { id } = useParams();
  const { data: userOrder, isLoading } = useQuery(["order-payment", id], () =>
    fetch(`http://localhost:5000/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { quantity, toolImg, toolPrice, toolName } = userOrder;
  return (
    <div>
      <h2>Payment {id}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div class="card w-96 bg-base-100 shadow-xl text-center">
          <figure>
            <img width={120} src={toolImg} alt={toolName} />
          </figure>
          <div class="card-body">
            <h2 class="text-xl font-bold">{toolName}</h2>
            <p class="">Price: $ {toolPrice}</p>
            <p class="">Quantity: {quantity}</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 className="text-xl font-bold text-green-500 mb-5 ">Payment Here</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm userOrder={userOrder}/>
            </Elements>

            {/* <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
