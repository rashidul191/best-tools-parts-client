import React from "react";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl md:my12 md:my-28 mx-auto">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <form action="">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
