import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loading from "../../../Shared/Loading/Loading";

const CheckoutForm = ({ userOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { toolPrice, userName, userEmail, _id } = userOrder;

  useEffect(() => {
    fetch("https://quiet-bayou-95560.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ toolPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [toolPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    if (processing) {
      return <Loading></Loading>;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      }
    );

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed.");
      toast.success(`Congrats! payment: ${toolPrice} is completed.`);

      // store payment on database
      const payment = {
        orderId: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://quiet-bayou-95560.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <input
          className="input input-bordered w-full max-w-md mt-5"
          type="text"
          value={toolPrice}
          disabled
        />

        <button
          className="btn btn-info w-full mt-5 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your Transaction Id:{" "}
            <span className="text-blue-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
