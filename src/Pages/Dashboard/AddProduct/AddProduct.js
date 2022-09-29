import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageStorageKey = `1b91428733543b6b75ad960c33573c1a`;

  const onSubmit = async (data) => {
    const image = data.image[0];
    // console.log("Images: ",image)
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((output) => {
        if (output.success) {
          const img = output.data.url;
          const toolInfo = {
            name: data.name,
            img: img,
            pricePerUnit: data.pricePerUnit,
            minOrder: data.minOrder,
            avaQuantity: data.avaQuantity,
            description: data.description,
          };
          //   console.log(toolInfo)
          // send toolInfo on data base

          fetch("https://best-tools-part-server.onrender.com/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(toolInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Tool Added successfully");
              } else {
                toast.error("Failed to add tool");
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Add new Tools</h2>
      <div className=" mb-10 md:w-1/2 md:ml-40">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="label-text">Tool Name</span>
            </label>
            <input
              {...register("name", {
                required: { value: true, message: "Tool Name is Required" },
              })}
              type="text"
              placeholder="Tool Name"
              className="input input-bordered w-full max-w-lg"
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
              <span className="label-text">Tool Image</span>
            </label>
            <input
              {...register("image", {
                required: { value: true, message: "Tool Image is Required" },
              })}
              type="file"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              {...register("avaQuantity", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.avaQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.avaQuantity.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Minimum Orders</span>
            </label>
            <input
              {...register("minOrder", {
                required: {
                  value: true,
                  message: "Minimum Orders is Required",
                },
              })}
              type="number"
              placeholder="Minimum Orders"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.minOrder?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minOrder.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Price Per Unit</span>
            </label>
            <input
              {...register("pricePerUnit", {
                required: {
                  value: true,
                  message: "Price Per Unit is Required",
                },
              })}
              type="number"
              placeholder="Price Per Unit"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.pricePerUnit?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.pricePerUnit.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
              className="textarea input-bordered w-full max-w-lg my-3"
              placeholder="Description"
              rows={5}
              name="description"
            ></textarea>
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input className="btn w-full" type="submit" value="Add Tool" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
