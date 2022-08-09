import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="md:px-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">My Profile</h2>
        <button className="text-error btn-link">
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Edit
        </button>
      </div>
      <div className="grid md:grid-cols-2 card bg-base-100 shadow-xl py-10">
        <div className="flex justify-center items-center">
          <div>
            <img
              width={120}
              src="https://i.ibb.co/tmprR1w/profile-icon.webp"
              alt="user-img"
            />
            <button className="btn btn-error text-white mt-5">Edit Profile</button>
          </div>
        </div>
        <div className="card-body">
          <span>Full Name</span>
          <h2 className="text-xl font-bold">{user?.displayName}</h2>
          <span>Email</span>
          <h2 className="text-xl font-bold">{user?.email}</h2>
          <span>Address</span>
          <h2 className="text-xl font-bold">{user?.address}</h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
