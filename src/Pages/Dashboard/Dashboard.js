import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h2 className="text-4xl text-info">Welcome to My Dashboard</h2>
          <p>{user.email}</p>
          <Outlet></Outlet>
        </div>

        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/dashboard/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">Add a Review</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
