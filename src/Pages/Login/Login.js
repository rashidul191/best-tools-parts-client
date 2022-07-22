import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin/SocialLogin";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorForget] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    signInWithEmailAndPassword(email, password);
  };

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Email Send");
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error || errorForget) {
    errorElement = (
      <p className="text-error">
        {error?.message} {errorForget?.message}
      </p>
    );
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-12 md:my-28 mx-auto">
      <div className="card-body">
        {errorElement}
        <h2 className="text-3xl font-bold mb-2 text-secondary text-center">
          Please Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("email", {
                required: { value: true, message: "Email is Required" },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="text-error">{errors.email.message}</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <input
              {...register("password", {
                required: { value: true, message: "Password is Required" },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <label htmlFor="forget-password-modal" className="btn btn-link">
            <small>Forget Password</small>
          </label>

          <div>
            <input
              className="btn btn-secondary w-full"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        {/* Forget Password modal */}

        <input
          type="checkbox"
          id="forget-password-modal"
          className="modal-toggle"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="forget-password-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <form onSubmit={handleForgetPassword}>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="input input-bordered w-full"
                    required
                  />
                  <input
                    type="submit"
                    value="Send Email"
                    className="btn btn-info absolute top-0 right-0 rounded-l-none text-white"
                  />
                </form>
              </div>

              {/* <input
                type="email"
               
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
                required
              /> */}
            </div>
          </div>
        </div>

        <p>
          <small>
            New to Doctors Portal?{" "}
            <Link to="/register" className="text-primary underline">
              Create a new account
            </Link>{" "}
          </small>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
