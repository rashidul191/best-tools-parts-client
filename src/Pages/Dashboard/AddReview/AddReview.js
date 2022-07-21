import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleAddReviewSubmit = (event) => {
    event.preventDefault();
    const addReview = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      rating: event.target.rating.value,
      description: event.target.review.value,
    };
    const url = `https://quiet-bayou-95560.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Review is Done.");
        } else {
          toast.error("Failed to Review");
        }
      });
  };

  return (
    <section>
      <h2 className="text-2xl font-bold">Add a Review</h2>
      <div className="my-10 md:w-1/2 mx-auto">
        <form onSubmit={handleAddReviewSubmit}>
          <div>
            <input
              value={user?.displayName}
              disabled
              type="text"
              className="input input-bordered w-full max-w-lg"
            />
          </div>

          <div>
            <input
              type="email"
              disabled
              value={user.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg my-3"
            />
          </div>
          <div>
            <select
              name="rating"
              className="select select-bordered w-full max-w-lg"
            >
              <option value={5} disabled selected>
                Rating
              </option>
              <option value={5}>5</option>
              <option value={4}>4</option>
              <option value={3}>3</option>
              <option value={2}>2</option>
              <option value={1}>1</option>
            </select>
          </div>

          <div>
            <textarea
              className="textarea input-bordered w-full max-w-lg my-3"
              placeholder="Text Here"
              rows={5}
              name="review"
              required
            ></textarea>
          </div>
          <div>
            <input className="btn w-full" type="submit" value="Review" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
