import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { userEmail, role } = user;

  const handleMakeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${userEmail}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`${userEmail} made an admin successfully`);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userEmail}</td>
      <td>
        {role ? (
          <p className="text-green-500">Already Admin</p>
        ) : (
          <button
            onClick={handleMakeAdmin}
            className="btn btn-info btn-xs text-white"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-error btn-xs text-white">
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
