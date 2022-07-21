import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const PurchasePage = () => {
  const navigate = useNavigate();
  const [errorElement, setErrorElement] = useState(false);
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState([]);
  const { name, img, pricePerUnit, avaQuantity, minOrder } = tool;
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {

        setTool(data);
      });
  }, [id, tool]);

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    const avaQuantity = parseInt(tool?.avaQuantity);
    const minOrder = parseInt(tool?.minOrder);
    const quantity = event.target.quantity.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    const newQuantity = avaQuantity - quantity;

    if (avaQuantity >= quantity && minOrder <= quantity) {
      const toolPrice = quantity * tool?.pricePerUnit;
      const order = {
        userName: user?.displayName,
        userEmail: user?.email,
        address: address,
        phone: phone,
        toolName: name,
        toolImg: img,
        quantity,
        toolPrice,
      };

      // order summary post api
      fetch(`http://localhost:5000/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log(data);
            // update quantity api
            fetch(`http://localhost:5000/tool/${id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                avaQuantity: newQuantity,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log("update quantity date: ",data)
                setTool(data);
              });

            event.target.reset();
            setErrorElement(false);
            toast.success("Order Successfully");
            navigate("/dashboard/orders");
          }
        });
    } else {
      setErrorElement(true);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-10 md:m-16">
      {errorElement ? (
        <div className="text-center mb-5">
          {" "}
          <p className="text-error md:text-xl">
            Please Available Quantity{" "}
            <span className="text-blue-500 md:text-2xl">({avaQuantity})</span>{" "}
            and Minimum Order{" "}
            <span className="text-blue-500 md:text-2xl">({minOrder})</span>
          </p>
        </div>
      ) : (
        ""
      )}
      <div className=" grid md:grid-cols-2 gap-5">
        <div className="">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img width={150} src={img} alt={name} />
            </figure>
            <div>
              <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>Price Per Unit: $ {pricePerUnit}</p>
                <p>Minimum Order: {minOrder}</p>
                <p>Available Quantity: {avaQuantity}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleOrderSubmit}>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  disabled
                  value={user?.displayName}
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  disabled
                  value={user?.email}
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Address:</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Phone:</span>
                </label>
                <input
                  name="phone"
                  type="number"
                  placeholder=" Phone Number"
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Quantity:</span>
                </label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="Enter Quantity"
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>

              <input
                className="btn text-center w-full mt-5"
                type="submit"
                value="Order"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchasePage;
