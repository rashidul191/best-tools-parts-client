import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["user-orders"], () =>
    fetch(`https://quiet-bayou-95560.herokuapp.com/orders?userEmail=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("access-token");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }


  return (
    <div>
      <h2 className="text-2xl font-bold">My Orders</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Order Cancel</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <MyOrder
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></MyOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
