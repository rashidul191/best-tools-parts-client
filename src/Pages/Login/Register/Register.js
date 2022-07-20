import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    if (data?.password === data?.confirmPassword) {
      const email = data?.email;
      const password = data?.password;
      createUserWithEmailAndPassword(email, password);
    }
  };
  if (loading) {
    return <p className="text-center">Loading..........</p>;
  }

  if (user) {
    navigate("/");
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-error">{error?.message}</p>;
  }
  return (
    <div class="card w-1/3 bg-base-100 shadow-xl my-12 md:my-28 mx-auto">
      <div class="card-body">
        {errorElement}
        <h2 class="text-3xl font-bold mb-2 text-secondary text-center">
          Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              {...register("name", {
                required: { value: true, message: "Full Name is Required" },
              })}
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
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
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: { value: true, message: "Password is Required" },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?[^\w\s])/,
                  message: "Must at least 1 special character",
                },
              })}
              type="password"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs"
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
              {errors.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?[^\w\s])/,
                  message: "Must at least 1 special character",
                },
              })}
              type="password"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.confirmPassword?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <input
              className="btn btn-secondary w-full mt-5"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p>
          <small>
            Already Have a account?{" "}
            <Link to="/login" className="text-primary underline">
              Login
            </Link>{" "}
          </small>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
