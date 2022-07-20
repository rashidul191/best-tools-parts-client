import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <p className="text-center">Loading.......</p>;
  }
  if (user) {
    navigate("/");
  }
  if (error) {
    return <p className="text-error text-center">{error?.message}</p>;
  }
  return (
    <div className="mx-auto">
      <button onClick={() => signInWithGoogle()} className="btn w-full">
        Continuo with Google
      </button>
    </div>
  );
};

export default SocialLogin;
