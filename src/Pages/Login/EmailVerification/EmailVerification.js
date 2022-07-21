import React from "react";
import { toast } from "react-toastify";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const EmailVerification = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  return (
    <div className="my-20 md:my-36 text-center">
      <div className="card md:w-1/2 bg-base-100 shadow-xl mx-auto md:p-20">
        <div className="card-body">
          <h2 className=" text-xl md:text-2xl text-error">Your Email is not verify</h2>
          <h2 className="text-2xl md:text-4xl text-info">Please Verify you email</h2>
          <button
            className="btn btn-secondary mt-5"
            onClick={async () => {
              await sendEmailVerification();
              toast.success("Sent email");
            }}
          >
            Send Verification again email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
