import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?userEmail=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold">My Orders</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrder key={order._id} order={order} index={index}></MyOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
