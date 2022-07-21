import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <p className="text-center">Loading.......</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    return <p className="text-error text-center">{error?.message}</p>;
  }
  return (
    <div className="w-full mx-auto">
      <div className="divider">OR</div>
      <button onClick={() => signInWithGoogle()} className="btn w-full">
        Continuo with Google
      </button>
    </div>
  );
};

export default SocialLogin;
