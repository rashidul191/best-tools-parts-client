import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className="drawer drawer-mobile px-5">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <h2 className="text-4xl text-info">Welcome to My Dashboard</h2>
          <p>{user.email}</p>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">Add a Review</Link>
                </li>
              </>
            ) }
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/makeAdmins">Make Admin</Link>
                </li>
              </>
            ) }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
