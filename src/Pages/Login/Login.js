import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div class="card w-96 bg-base-100 shadow-xl my-12 md:my-28 mx-auto">
      <div class="card-body">
        <h2 class="text-3xl font-bold mb-2 text-secondary text-center">
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
              class="input input-bordered w-full max-w-xs"
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
            </label>
          </div>

          <div>
            <input
              className="btn btn-secondary w-full mt-5"
              type="submit"
              value="Login"
            />
          </div>
        </form>
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
