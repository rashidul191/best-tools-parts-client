import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import EmailVerification from "../EmailVerification/EmailVerification";
import useAdmin from "../../../hooks/useAdmin";
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return <EmailVerification></EmailVerification>;
  }

  return children;
};

export default RequireAdmin;
